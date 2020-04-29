// creates HTML component for Park Results
function createParkResults (results) {
  return `
    <div>
      <ul>
        <li>${results.dogPark} @ ${results.address}</li>
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


