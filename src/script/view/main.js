import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector('search-bar');
    const mealListElement = document.querySelector("#mealView");

    const onButtonSearchClicked = () => {
        DataSource.searchMeal(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult =  results => {
        mealListElement.innerHTML = "";
        results.forEach(meal => {
            const {strMealThumb, strMeal, strInstructions, strYoutube} = meal;
            const mealElement = document.createElement("div");
            mealElement.setAttribute("class", "col-lg-4 col-md-6");
  
            mealElement.innerHTML = `
                <div class="card border-secondary mb-4" style="width: 20rem;">
    
                    <img class="card-img-top" src="${strMealThumb}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${strMeal}</h5>
                         <p class="card-text">${strInstructions}</p>
                    </div>
                     
                    <div class="card-footer">
                    <a href="${strYoutube}" target="_blank" class="card-link">How to cooking</a>
                    </div>
                    
                </div>
            `;
  
            mealListElement.appendChild(mealElement);
        })
    };
  
    const fallbackResult = message => {
        mealListElement.innerHTML = "";
        mealListElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    };
  
    searchElement.clickEvent = onButtonSearchClicked;
 };


export default main;