document.addEventListener("DOMContentLoaded", () =>{
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const imageContainer = document.getElementById("dog-image-container");
const breedList = document.getElementById("dog-breeds");
const breedDropdown = document.getElementById("breed-dropdown");
let allBreeds = [];

//fetching and displaying dog images
fetch(imgUrl)
.then(response => response.json())
.then(data =>{
    data.message.forEach(imgUrl =>{
        const img = document.createElement("img");
        img.src = imgUrl;
        img.alt = "Random Doggie";
        img.style.width = "200px";
        img.style.margin = "10px";
        imageContainer.appendChild(img);
    });
});
//fetch and display the dog breeds
fetch(breedUrl)
.then(response => response.json())
.then(data => {
    allBreeds = Object.keys(data.message);
    renderBreedList(allBreeds);

});
// function to render breed list
function renderBreedList(breeds){
    breedList.innerHTML = "";//clear the existing list
    breeds.forEach(breed => {
        const li = document.createElement("li");
        li.textContent = breed;
        li.style.cursor = "pointer";

        //on click, change text color
        li.addEventListener("click", () =>{
        li.style.color = "red";
               
        })
        breedList.appendChild(li);
    });

}

//handling drop down filtering
breedDropdown.addEventListener("change", (e) =>{
    const selectedletter = e.target.value;
    if(selectedletter==="all"){
        renderBreedList(allBreeds);
    }else{
        const filtered = allBreeds.filter(breed => breed.startWith(selectedletter));
        renderBreedList(filtered);  
    }
});
});

