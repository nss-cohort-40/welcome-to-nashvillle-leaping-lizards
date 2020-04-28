let parkSearch = document.getElementById("parks-input")
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