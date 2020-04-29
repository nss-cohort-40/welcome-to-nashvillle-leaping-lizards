let searchInput = document.getElementById("parks-input")




let searchInputArt = document.getElementById("public-art-input");

document.getElementById("parks-search").addEventListener("click", event => {
    getAPIParks(searchInput.value)
    .then(parks => {
          renderParkResults(parks) 
        }
    )
})

// LR function that selects the Public-Art ID and adds eventListener "click"
document.getElementById("public-art-search").addEventListener("click", event => {
    getAPIpublicArtCollections(searchInputArt.value)
    .then(artwork => {
        renderArtResults(artwork);
    })
})

