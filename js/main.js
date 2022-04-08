//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector("button").addEventListener("click", getDrink);

function getDrink() {
    let i = 0;
    let drink = document.querySelector("input").value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then((res) => res.json())
        .then((data) => {
            if(document.querySelector('.carousel').classList.contains('hidden')){
                document.querySelector('.carousel').classList.toggle('hidden')
            }
            
            document.querySelector("h2").innerText = data.drinks[0].strDrink;
            document.querySelector("img").src = data.drinks[0].strDrinkThumb;
            document.querySelector("h3").innerText =
                data.drinks[0].strInstructions;

            document
                .querySelector(".next")
                .addEventListener("click", nextDrink);
            document
                .querySelector(".previous")
                .addEventListener("click", previousDrink);

            function nextDrink() {
                if (i == data.drinks.length-1) {
                    console.log(i);
                    i = 0;
                    document.querySelector("h2").innerText =
                        data.drinks[i].strDrink;
                    document.querySelector("img").src =
                        data.drinks[i].strDrinkThumb;
                    document.querySelector("h3").innerText =
                        data.drinks[i].strInstructions;

                    i++;
                    console.log(`next button = ${i}`);
                } else {
                    console.log(i);
                    i++;
                    document.querySelector("h2").innerText =
                        data.drinks[i].strDrink;
                    document.querySelector("img").src =
                        data.drinks[i].strDrinkThumb;
                    document.querySelector("h3").innerText =
                        data.drinks[i].strInstructions;
                        
                        console.log(`next button = ${i}`);
                }
            }

            function previousDrink() {
                if (i == 0) {
                    console.log(i);
                    i = data.drinks.length - 1;
                    document.querySelector("h2").innerText =
                        data.drinks[i].strDrink;
                    document.querySelector("img").src =
                        data.drinks[i].strDrinkThumb;
                    document.querySelector("h3").innerText =
                        data.drinks[i].strInstructions;
                    i--;
                    console.log(`previous button = ${i}`);
                } else {
                    console.log(i);
                    i--;
                    document.querySelector("h2").innerText =
                        data.drinks[i].strDrink;
                    document.querySelector("img").src =
                        data.drinks[i].strDrinkThumb;
                    document.querySelector("h3").innerText =
                        data.drinks[i].strInstructions;

                    
                    console.log(`previous button = ${i}`);
                }
            }
        });
}
