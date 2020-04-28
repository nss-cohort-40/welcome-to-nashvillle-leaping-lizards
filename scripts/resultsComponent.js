// creates HTML component for Park Results
function createParkResults (results) {
  return `
    <div>
      <ul>
        <li>${results.dogPark} ${results.address}</li>
      </ul>
      <button type="button" class="save">Save</button>
    </div>
  `
}

// renders HTML component to the DOM
const parksElement = document.querySelector(".results")
function renderParkResults (results) {
  parksElement.innerHTML += `<h2>Parks Results</h2>`
  for (let i = 0; i < 3; i++) {
    let parkValue = createParkResults( {
      dogPark: results[i].park_name,
      address: results[i].mapped_location.human_address
    })
    parksElement.innerHTML += parkValue
  }
}


// 
function createArtResults (results) {
  return `
  <div>
    <ul>
     <li>${results.artwork}</li>
    </ul>
    <p>${results.description}</p>
  <button type="button" class="save">Save</button>
  </div>
  `
};

//Renders HTML component to the DOM for Public Art by description
const artElement = document.querySelector(".results")
function renderArtResults (results) {
  artElement.innerHTML += `<h2>Art Results</h2>`
  for (let i = 0; i < 3; i++) {
    let artValue = createArtResults( {
      artwork: results[i].artwork,
      description: results[i].description
    })
    artElement.innerHTML += artValue
  }
}