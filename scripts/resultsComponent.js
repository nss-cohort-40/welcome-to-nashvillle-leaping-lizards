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
  concertsElement.innerHTML = ""
  parksElement.innerHTML = ''
  parksElement.innerHTML += `<h2>Parks Results</h2>`
  shuffle(results)
  for (let i = 0; i < results.length; i++) {
    const text = results[i].mapped_location.human_address;
    const obj = JSON.parse(text);
    let parkValue = createParkResults( {
      dogPark: results[i].park_name,
      address: obj.address
    })
    parksElement.innerHTML += parkValue
    if (i >= 2) {
      return
    }
  }
}


// LR Creates HTML component for Art by description 
function createArtResults (results) {
  return `
    <div>
      <ul>
        <li class="artName">${results.artwork}</li>
        <li class="artDescription">${results.description}</li>
        <button type="button" class="save">Save</button>
      </ul>
  </div>
  `
};


//LR Writing a DRY shuffle array function
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

//LR Renders HTML component to the DOM for Public Art by description
const artElement = document.querySelector(".results")
function renderArtResults (results) {
  concertsElement.innerHTML = ""
  if (results.length == 0) {
    artElement.innerHTML = ""
    artElement.innerHTML += `<h2>Dank Word! Unfortunately, we can't seem to find a match. Please try again!</h2>`
  } else if (results.length <= 3) {
    artElement.innerHTML = ""
    artElement.innerHTML += `<h2>Art Results</h2>`
      for (let i = 0; i < 3; i++) {
        let artValue = createArtResults( {
          artwork: results[i].artwork,
          description: results[i].description
        })
      artElement.innerHTML += artValue 
    }
  } else {
    artElement.innerHTML = ""
    artElement.innerHTML += `<h2>Query too vague. Only three Art Results shown.</h2>`

    shuffle(results);
    

    for (let i = 0; i < 3; i++) {
      let artValue = createArtResults ( {
        artwork: results[i].artwork,
        description: results[i].description
      })
      artElement.innerHTML += artValue
    }
  }
  }


let itineraryHeader = document.getElementById("itinerary-header");
let itineraryResults = document.getElementById("itinerary-results");
let n = 0;
function addToItinerary(resultString, resultClassString) {
  if (n === 0) {
    itineraryHeader.innerHTML = `<h2>My Itinerary</h2>`
    n = 1;
  }
  if (resultClassString.includes('park')) {
    itineraryResults.childNodes.forEach(child => {
      if (child.className.includes('park')) {
      child.parentNode.removeChild(child);
      }
    });
    let parkLi = document.createElement('li');
    parkLi.innerHTML += `Park: ${resultString}`
    parkLi.classList.add(resultClassString)
    itineraryResults.appendChild(parkLi);
  }
  if (resultClassString.includes('art')) {
    itineraryResults.childNodes.forEach(child => {
      if (child.className.includes('art')) {
      child.parentNode.removeChild(child);
      }
    });
    let artLi = document.createElement('li');
    artLi.innerHTML += `Art: ${resultString}`
    artLi.classList.add(resultClassString)
    itineraryResults.appendChild(artLi);
  }
  // copy and pasted and changed some values to work with restaurants
  if (resultClassString.includes('restaurant')) {
    itineraryResults.childNodes.forEach(child => {
      if (child.className.includes('restaurant')) {
      child.parentNode.removeChild(child);
      }
    });
    let foodLi = document.createElement('li');
    foodLi.innerHTML += `Restaurant: ${resultString}`
    foodLi.classList.add(resultClassString)
    itineraryResults.appendChild(foodLi);
  }
}

// RL function to create HTML component
const restaurantElement = document.querySelector(".results")
function createFoodResults (results) {
  return `
    <div>
      <ul>
        <li class="restaurantName">${results.name}</li>
        <li class="restaurantAddress">${results.address}</li>
        <button class='save'>Save</button>
      </ul>
    </div>
  `
}

// RL function to render food results
function renderFoodResults (restaurant) {
  restaurantElement.innerHTML = ''
  restaurantElement.innerHTML += `<h2>Restaurant Results</h2>`
  shuffle(restaurant)
  for (let i = 0; i < restaurant.length; i++) {
    let foodValue = createFoodResults( {
      name: restaurant[i].name,
      address: restaurant[i].address
    })
    restaurantElement.innerHTML += foodValue
    if (i >= 2) {
      return
    }
  }
}
