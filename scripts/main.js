let searchInput = document.getElementById("parks-input")

document.getElementById("parks-search").addEventListener("click", event => {
    getAPIParks(searchInput.value)
    .then(parks => {
    })
})