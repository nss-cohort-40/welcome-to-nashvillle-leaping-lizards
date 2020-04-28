let searchInput = document.getElementById("parks-input")

document.getElementById("parks-search").addEventListener("click", event => {
    getAPIParks(searchInput.value)
    .then(parks => {
    })
})

// click event for 'add to itinerary' button
// saves particular result and adds it to itinerary DOM element

const resultsSection = document.querySelector('.results');

resultsSection.addEventListener('click', event => {
    if (event.target.className.includes('save')) {
    const savedResult = event.target.parentElement;
    addToItinerary(savedResult);
    }
})