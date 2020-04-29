function getAPIParks(searchTerm) {
    console.log("Test1", searchTerm);
    return fetch(`https://data.nashville.gov/resource/74d7-b74t.json?${searchTerm}=Yes`)
    .then(response => response.json())
}

//LR ACCESS PUBLIC ART COLLECTIONS USING Metro Gov API
function getAPIpublicArtCollections(searchTerm) {
    return fetch(`https://data.nashville.gov/resource/eviu-nxp6.json?$where=description like('%25${searchTerm}%25')`)
    .then(response => response.json());
}
