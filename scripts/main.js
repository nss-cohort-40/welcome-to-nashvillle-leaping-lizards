let parkSearch = document.getElementById("parks-input")
console.log("little test to see if linked")


let searchInput = document.getElementById("parks-input")
let searchInputArt = document.getElementById("public-art-input");

document.getElementById("parks-search").addEventListener("click", event => {
    getAPIParks(parkSearch.value)
    .then(parks => {
          renderParkResults(parks) 
        }
    )
})

// LR function that selects the Public-Art ID and adds eventListener "click"
document.getElementById("public-art-search").addEventListener("click", event => {
    getAPIpublicArtCollections(searchInputArt.value)
    .then(artwork => {

    })
})