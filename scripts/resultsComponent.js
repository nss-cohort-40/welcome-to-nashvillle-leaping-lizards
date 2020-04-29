// creates HTML component for Park Results
// ask team about this structure (can format <li> elements to be inline if wanted, but makes more sense to me that each park is an unordered list, and each info item about the park is a list item (with a class))

function createParkResults (results) {
  return `
    <div>
      <ul>
        <li class="parkName">${results.dogPark}</li>
        <li class="parkAddress">${results.address}</li>
        <button class='save'>Save</button>
      </ul>
    </div>
  `
}

// renders HTML component to the DOM
const parksElement = document.querySelector(".results")
function renderParkResults (results) {
  parksElement.innerHTML = ''
  parksElement.innerHTML += `<h2>Parks Results</h2>`
  for (let i = 0; i < 3; i++) {
    const text = results[i].mapped_location.human_address;
    const obj = JSON.parse(text);
    let parkValue = createParkResults( {
      dogPark: results[i].park_name,
      address: obj.address
    })
    parksElement.innerHTML += parkValue
    console.log(results[i])
  }
}


// LR Creates HTML component for Art by description 

function createArtResults (results) {
  return `
  <div>
    <ul>
     <li>${results.artwork}</li>
     <li>${results.description}</li>
     </ul>
   
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