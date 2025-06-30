const loadPhone = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json();
    const phones = data.data;
    // console.log(phones)
    displayPhone(phones)

}

const displayPhone = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
        console.log(phone)

        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 w-96 shadow-sm`;
        phoneCard.innerHTML = `
        <figure>
    <img
      src="${phone.image}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${phone.phone_name
}</h2>
    <p class ="text-center">A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-center">
      <button class="btn bg-[#0D6EFDFF] text-white w-full">Show Details</button>
    </div>
  </div>
        `
        phoneContainer.appendChild(phoneCard)

    })
}

loadPhone()