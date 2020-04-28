let parkSearch = document.getElementById("parks-input")
console.log("little test to see if linked")


let searchInput = document.getElementById("parks-input")
let searchInputArt = document.getElementById("public-art-input");

document.getElementById("parks-search").addEventListener("click", event => {
    getAPIParks(parkSearch.value)
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