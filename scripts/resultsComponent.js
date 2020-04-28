// creates HTML component for Park Results
function createParkResults (results) {
  return `
    <div>
      <ul>
        <li>
          <p>${results.dogPark}</p><p>${results.address}</p>
        </li>
        <button class='save'>Save</button>
      </ul>
    </div>
  `
}

// renders HTML component to the DOM
function renderParkResults (results) {
  const parksElement = document.querySelector(".results")
  parksElement.innerHTML += results   
}