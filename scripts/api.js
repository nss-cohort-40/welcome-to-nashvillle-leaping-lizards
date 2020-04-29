function getAPIParks(searchTerm) {
    return fetch(`https://data.nashville.gov/resource/74d7-b74t.json?${searchTerm}`)
    .then(response => response.json())
}

//LR ACCESS PUBLIC ART COLLECTIONS USING Metro Gov API
function getAPIpublicArtCollections(searchTerm) {
    return fetch(`https://data.nashville.gov/resource/eviu-nxp6.json?$where=description like('%25${searchTerm}%25')`)
    .then(response => response.json());
}

function getAPIFoods(searchTerm) {
    return fetch("https:/opentable.herokuapp.com/api/restaurants?city=Nashville")
    .then(response => response.json())
    .then(restaurants => console.log(restaurants))
}
