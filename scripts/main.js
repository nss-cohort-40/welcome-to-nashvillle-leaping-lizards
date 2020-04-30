let searchInput = document.getElementById("parks-input")
let searchInputArt = document.getElementById("public-art-input");
let searchInputFood = document.getElementById("restaurants-input");

document.getElementById("parks-search").addEventListener("click", event => {
    let searchValue = regEx(searchInput.value)
    getAPIParks(searchValue)
    .then(parks => {
        renderParkResults(parks) 
        }
    )
})

// LR function that selects the Public-Art ID and adds eventListener "click"
document.getElementById("public-art-search").addEventListener("click", event => {
    getAPIpublicArtCollections(searchInputArt.value)
    .then(artwork => {
        renderArtResults(artwork);
    })
})

/*
Click event for 'save to itinerary' button
Saves particular result and its classes, and adds it to .itinerary DOM element via addToItinerary()
Optional: Add or remove arguments in second if condition to change information inserted from results into savedResult variable
e.g. if (ulChildrenArr[i].classList.contains('parkName') || (ulChildrenArr[i].classList.contains('parkAddress')) 
*/

const resultsSection = document.querySelector('.results');
resultsSection.addEventListener('click', event => {
    if (event.target.className.includes('save')) {
        const ulChildrenArr = event.target.parentElement.children;
        let savedResult = ''
        let resultClass = ''
        for (let i = 0; i < ulChildrenArr.length; i++) {
            console.log(ulChildrenArr[i])
            if (ulChildrenArr[i].className.includes('Name')) {
                savedResult += ulChildrenArr[i].textContent;
                resultClass += ulChildrenArr[i].className;
                }
            // if (ulChildrenArr[i].classList.contains('artName')) {
            //     savedResult += ulChildrenArr[i].textContent;
            //     resultClass += ulChildrenArr[i].className;
            //     }
        }
        console.log(savedResult)
        console.log(resultClass)
        addToItinerary(savedResult, resultClass);
    }
})

// RL event listener that uses the getAPIFoods function and sends it to renderFoodResults
document.getElementById("restaurants-search").addEventListener("click", event => {
    getAPIFoods(searchInputFood.value)
    .then(foodObj => {
        let nashvilleFood = foodObj.restaurants
        renderFoodResults(nashvilleFood);
    })
    .catch(error => {
        restaurantElement.innerHTML = `<h4>Hmm what was that? Maybe search for something else?</h4>`
    });
})