// creates HTML component for Park Results
function createParkResults (results) {
  return `
    <div>
      <ul>
        <li>${results.dogPark} ${results.address}</li>
      </ul>
    </div>
  `
}

// renders HTML component to the DOM
function renderParkResults (results) {
  const parksElement = document.querySelector(".results")
  parksElement.innerHTML += results   
}


