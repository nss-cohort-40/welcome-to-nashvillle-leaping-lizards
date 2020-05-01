// ER ACCESS CONCERTS USING TICKETMASTER API
function getAPIConcert (searchTerm) {
  return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=nashville&classificationName=${searchTerm}&sort=date,asc&apikey=${concertKey}`)
    .then(concerts => concerts.json())
  }

// ER FUNCTION THAT SELECTS CONCERT-SEARCH ID AND ADDS EVENT LISTENER CLICK
let searchInputConcert = document.getElementById("concert-input")
document.getElementById("concert-search").addEventListener("click", event => {
    getAPIConcert(searchInputConcert.value)
    .then(concerts => {
        renderConcertResults(concerts); 
    })
})

function createConcertResults (results) {
  return `
        <tr>
          <td class='concert-name'>${results.artists}</td>
          <td class='concert-date'>${results.date}</td>
          <td class='concert-venue'>${results.venue}</td>
          <td><button class='save' id="save-button">Save</button></td>
        </tr>
  `
};

// ER RENDERS HTML COMPONENT TO THE DOM
let concertsElement = document.querySelector(".concerts-table")
function renderConcertResults (results) {
  parksElement.innerHTML = `<table class="concerts-table"></table>`
  let concertsElement = document.querySelector(".concerts-table")
  concertsElement.innerHTML = ""
  concertsElement.innerHTML += `
  <h2>Concert Results</h2>
  <tr>
  <th>ARTIST</th>
  <th>DATE</th>
  <th>VENUE</th>
  </tr>`
  let event = results._embedded.events
  for (let i = 0; i < 10; i++) {
    let concertValue = createConcertResults( {
      artists: event[i].name,
      date: event[i].dates.start.localDate,
      venue: event[i]._embedded.venues[0].name
    })
    concertsElement.innerHTML += concertValue
  }
}

