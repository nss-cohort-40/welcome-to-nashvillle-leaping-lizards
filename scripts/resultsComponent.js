// creates HTML component for Park Results
function createParkResults (results) {
  return `
    <div>
      <ul>
        <li>${results.dogPark} ${results.address}</li>
      </ul>
      <button class="save">Save</button>
    </div>
  `
}

// renders HTML component to the DOM
function renderParkResults (results) {
  const parksElement = document.querySelector(".results")
  parksElement.innerHTML += results   
}

// creates HTML component for itinerary
// const addToItinerary = (result) => {
//   result.childNodes
// }