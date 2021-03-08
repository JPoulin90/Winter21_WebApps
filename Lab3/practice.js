function showGlassesXHR(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list');
    xhr.onload = () =>{
        const data = JSON.parse(xhr.response);
        for(let i = 1; i < data.drinks.length; i++){
            console.log(data.drinks[i].strGlass);
        }
    };
    xhr.send();
}

function showGlassesPromises(){
    const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list';
    fetch(apiUrl)
        .then((response) => response.json())
        .then(data => {
            for(let i=1; i < data.drinks.length; i++){
                console.log(data.drinks[i].strGlass);
            }
        })
        .catch((e) => {
            console.log(e);
        })
}

async function showGlassesAsync(){
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list';
    const response = await fetch(url);
    const data = await response.json();
    for(let i = 1; i < data.drinks.length; i++){
        console.log(data.drinks[i].strGlass);
    }
}