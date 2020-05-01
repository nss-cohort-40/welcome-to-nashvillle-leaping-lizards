function getAPIParks(searchTerm) {
    return fetch(`https://data.nashville.gov/resource/74d7-b74t.json?${searchTerm}`)
    .then(response => response.json())
}

//LR ACCESS PUBLIC ART COLLECTIONS USING Metro Gov API
function getAPIpublicArtCollections(searchTerm) {
    return fetch(`https://data.nashville.gov/resource/eviu-nxp6.json?$where=description like('%25${searchTerm}%25')`)
    .then(response => response.json());
}

//RL Fetching to opentable api
function getAPIFoods(searchTerm) {
    return fetch(`https:/opentable.herokuapp.com/api/restaurants?city=Nashville&name=${searchTerm}`)
    .then(response => response.json())
}

function create(data) {
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    return fetch('http://localhost:3000/itineraries', options)
      .then((response) => response.json)
  }