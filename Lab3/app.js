async function insertIngredients(){
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
    const response = await fetch(url);
    const data = await response.json();
    let select = document.getElementById("ingredients");
    for(index in data.drinks){
        select.options[select.options.length] = new Option(data.drinks[index].strIngredient1, index)
    }
}

async function addCocktails(){
    const results = document.getElementById('results');
    results.innerHTML = " ";
    const selected = document.getElementById('ingredients');
    const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
    const chosenIngredient = selected.options[selected.selectedIndex].text;
    const ingredientChosen = chosenIngredient.replace(" ", "%20");
    const completeURL = apiUrl + ingredientChosen;
    const awaitResponse = await fetch(completeURL);
    const cocktailData = await awaitResponse.json();

    for(let i = 0; i < cocktailData.drinks.length; i++){
        let newDiv = document.createElement("div");
        newDiv.className = "results";
        let tempName = document.createElement("button");
        tempName.innerHTML = cocktailData.drinks[i].strDrink;
        let drinkId = cocktailData.drinks[i].idDrink;
        tempName.id = drinkId;
        let imgThumb = cocktailData.drinks[i].strDrinkThumb;
        let tempImg = document.createElement("img");
        tempImg.src = imgThumb;
        let showResults = document.createElement("div");
        showResults.className = "showresults";
        showResults.id = drinkId;
        newDiv.appendChild(tempName);
        newDiv.appendChild(tempImg);
        newDiv.appendChild(showResults);
        results.appendChild(newDiv);
    }
    let button = document.getElementsByTagName("button");
    for(let i = 0; i < button.length; i++){
        // ? ??? ?? ? ?? ? ? ? ? ? ?? ?
    }

}

window.addEventListener("onload", insertIngredients());