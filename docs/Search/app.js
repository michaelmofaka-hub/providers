const menu = document.getElementById("menu_toggle");
const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  body.innerText = "welcome";
  
});
const providers = [

{
    image: "plumber.jpg",
    name: "James Plumbing Services",
    rating: "4.9",
    location: "Nairobi",
    price: "300+"
},

{
    image: "electrician.jpg",
    name: "Mike Electricians",
    rating: "4.8",
    location: "Mombasa",
    price: "500+"
}

];

const template = document.getElementById("box");
const results = document.getElementById("results");

function displayProviders(list){

    results.innerHTML = "";

    list.forEach(provider=>{

        const card = template.content.cloneNode(true);

        card.querySelector(".provider-image").src = provider.image;

        card.querySelector(".provider-name").textContent = provider.name;

        card.querySelector(".provider-rating").textContent = provider.rating;

        card.querySelector(".provider-location").textContent = provider.location;

        card.querySelector(".provider-price").textContent = provider.price;

        results.appendChild(card);

    });

}

displayProviders(providers);

const search = document.getElementById("search");

search.addEventListener("input", ()=>{

    const value = search.value.toLowerCase();

    const filtered = providers.filter(provider =>
        provider.name.toLowerCase().includes(value)
    );

    displayProviders(filtered);

});