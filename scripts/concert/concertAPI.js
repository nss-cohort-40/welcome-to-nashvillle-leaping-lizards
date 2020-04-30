// ER ACCESS CONCERTS USING TICKETMASTER API
function getAPIConcert (searchTerm) {
  return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&city=nashville&classificationName=${searchTerm}&sort=date,asc&apikey=${concertKey}`)
    .then(concerts => concerts.json())
  }


let searchInputConcert = document.getElementById("concert-input")
// ER FUNCTION THAT SELECTS CONCERT-SEARCH ID AND ADDS EVENT LISTENER CLICK
document.getElementById("concert-search").addEventListener("click", event => {
    getAPIConcert(searchInputConcert.value)
    .then(concerts => {
        renderConcertResults(concerts); 
    })
})

// ER CREATES HTML COMPONENT FOR CONCERTS
// function createConcertResults (results) {
//   return `
//     <div>
//       <ul>
//         <li class="concertName">${results.artists}</li>
//         <li class="concertName">${results.date}</li>
//         <li class="concertName">${results.venue}</li>
//         <button class='save'>Save</button>
//       </ul>
//     </div>
//   `
// };

function createConcertResults (results) {
  return `
      <table>
        <tr>
          <td>ARTIST: ${results.artists}</td>
          <td>DATE: ${results.date}</td>
          <td>VENUE: ${results.venue}</td>
          <td><button class='save'>Save</button></td>
        </tr>
      <table>
  `
};

// ER RENDERS HTML COMPONENT TO THE DOM
const concertsElement = document.querySelector(".results")
function renderConcertResults (results) {
  concertsElement.innerHTML = ""
  concertsElement.innerHTML += `<h2>Concert Results</h2>`
  let event = results._embedded.events
  console.log(event, "Evan")
  for (let i = 0; i < event.length; i++) {
    let concertValue = createConcertResults( {
      artists: event[i].name,
      date: event[i].dates.start.localDate,
      venue: event[i]._embedded.venues[0].name
    })
    
    concertsElement.innerHTML += concertValue
  }
}
