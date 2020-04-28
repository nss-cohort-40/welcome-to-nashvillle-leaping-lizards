function getAPIParks(searchTerm) {
    return fetch(`https://data.nashville.gov/resource/74d7-b74t.json?${searchTerm}=Yes`)
    .then(response => response.json())
}



