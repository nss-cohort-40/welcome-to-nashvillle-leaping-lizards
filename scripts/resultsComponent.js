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


// LR Creates HTML component for Art by description 

function createArtResults (results) {
  return `
  <div>
    <ul>
     <li>${results.artwork}</li>
    </ul>
    <p>${results.description}</p)
   
  <button type="button" class="save">Save</button>
  </div>
  `
};

//Renders HTML component to the DOM for Public Art by description
const artElement = document.querySelector(".results")
function renderArtResults (results) {
  console.log(results,"John")

  //Why does this work?
  artElement.innerHTML += `<h2>Art Results</h2>`
  console.log(results);
  for (let i = 0; i < results.length; i++) {
    console.log(results[i]);
    let artValue = createArtResults( {
      artwork: results[i].artwork,
      description: results[i].description
    })
    
    // console.log(artValue, "test");

    artElement.innerHTML += artValue
  }
}