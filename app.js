const loadPhone = async(searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    console.log(phones)
    displayPhone(phones, isShowAll)
    
}

 

const displayPhone = (phones, isShowAll) => {

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = ''
    const showAll = document.getElementById('show-all-btn');
    if(phones.length > 12 && !isShowAll){
      showAll.classList.remove('hidden')

      
    }else{
      showAll.classList.add('hidden')
    }
    console.log('is show all', isShowAll)
      if(!isShowAll){
        phones = phones.slice(0, 12)
      }else{

      }

      
    
    phones.forEach(phone => {
      
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-[#0D6EFD0D] pt-10 w-96 shadow-sm`;
        phoneCard.innerHTML = `
        <figure>
    <img
      src="${phone.image}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title flex justify-center text-2xl">${phone.phone_name
}</h2>
    <p class ="text-center">A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-center">
      <button onclick="handleShowDetail('${phone.slug}')" class="btn bg-[#0D6EFDFF] text-white w-full">Show Details</button>
    </div>
  </div>
        `
        phoneContainer.appendChild(phoneCard)

       

      
    })
    
    
   
}
const handleShowDetail = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json();
  console.log(data)
  const phone = data.data;
  showDetails(phone)
}

const showDetails = (phone) => {
  console.log(phone)
   const modalContent = document.getElementById('modal-content');
        modalContent.innerHTML = `
        <div class ="flex justify-center"><img class ="" src="${phone.image}" /></div>
        <h3 class ="text-2xl font-bold"> ${phone.name}</h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <p>Storage: <span>${phone.mainFeatures.storage}</span></p>
        <p>Display Size: <span>${phone.mainFeatures.displaySize}</span></p>
        <p>Chipset: <span>${phone.mainFeatures.chipSet}</span></p>
        <p>Memory: <span>${phone.mainFeatures.memory}</span></p>
        <p>Slug: <span>${phone.slug}</span></p>
        <p>Release Date: <span>${phone.releaseDate}</span></p>
        <p> Brand: <span>${phone.brand}</span></p>
        <p>GPS: <span>${phone.others?.GPS}</span></p>`


  my_modal_5 .showModal()

}

 const searchHandler = (isShowAll) =>{
  
  const searchInput = document.getElementById('search-input');
   const searchInputValue = searchInput.value;
  //  console.log(searchInputValue)
   loadPhone(searchInputValue, isShowAll)

}
const clickShowAll = () => {
      searchHandler(true)
      console.log('show all')
    }
loadPhone()






