let searchInput = document.getElementById("parks-input")
let searchInputArt = document.getElementById("public-art-input");

document.getElementById("parks-search").addEventListener("click", event => {
    getAPIParks(searchInput.value)
    .then(parks => {
        for (let i = 0; i < 3; i++) {
          renderParkResults(createParkResults(
            {
              dogPark: parks[i].park_name, 
              address: parks[i].mapped_location.human_address
            }
          ))
            console.log(parks[i]) 
        }
    })
})

// LR function that selects the Public-Art ID and adds eventListener "click"
document.getElementById("public-art-search").addEventListener("click", event => {
    getAPIpublicArtCollections(searchInputArt.value)
    .then(artwork => {

    })
})

// click event for 'add to itinerary' button
// saves particular result and adds it to itinerary DOM element

const resultsSection = document.querySelector('.results');

resultsSection.addEventListener('click', event => {
    if (event.target.className.includes('save')) {
    const savedResult = event.target.parentElement;
    console.log(savedResult);
    // addToItinerary(savedResult);
    }
})