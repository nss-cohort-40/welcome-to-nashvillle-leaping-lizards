// REMOVES DISABLED FROM RESULTS SO BACKGROUND + BORDERS SHOW UP 
function removeDisabledResults () {
  document.querySelector(".results").classList.remove("disabled")
}

document.querySelector("#parks-search").addEventListener("click", removeDisabledResults)

document.querySelector("#public-art-search").addEventListener("click", removeDisabledResults)

document.querySelector("#restaurants-search").addEventListener("click", removeDisabledResults)

document.querySelector("#concert-search").addEventListener("click", removeDisabledResults)
//

// ADD DISABLED TO RESULTS
function addDisabledResults () {
  document.querySelector(".results").classList.add("disabled")
}

document.querySelector("#clear-results").addEventListener("click", addDisabledResults);
//


// WHY DOESNT THIS WORK????? 
// let removeItineraryDisabled = document.querySelectorAll(".save");
// for (let i = 0; i < removeItineraryDisabled.length; i++) {
//     removeItineraryDisabled[i].addEventListener("click", () => {
//     document.querySelector(".itinerary").classList.remove("disabled");
//   })
// }


