//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector("button").addEventListener("click", getDrink);

function getDrink() {
    let i = 0;
    let drink = document.querySelector("input").value;
    let ingredientList = document.querySelector('.ingredientList')
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then((res) => res.json())
        .then((data) => {
            if (
                document.querySelector(".carousel").classList.contains("hidden")
            ) {
                document.querySelector(".carousel").classList.toggle("hidden");
            }
            console.log(data);

            document.querySelector("h2").innerText = data.drinks[0].strDrink;
            document.querySelector("img").src = data.drinks[0].strDrinkThumb;
            for (let l = 1; l < 15; l++) {
                let ingre = eval("data.drinks[i].strIngredient" + l);
                console.log(ingre);
                if (ingre !== null) {

                    ingredientList.innerHTML += `<li>${ingre}</li>`;
                }
            }

            document.querySelector(".instruct").innerText =
                data.drinks[i].strInstructions;
            document
                .querySelector(".next")
                .addEventListener("click", nextDrink);
            document
                .querySelector(".previous")
                .addEventListener("click", previousDrink);

            function nextDrink() {
                if (i == data.drinks.length - 1) {
                    i = 0;
                    document.querySelector("h2").innerText =
                        data.drinks[i].strDrink;
                    document.querySelector("img").src =
                        data.drinks[i].strDrinkThumb;
                    document.querySelector(".instruct").innerText =
                        data.drinks[i].strInstructions;
                        ingredientList.innerHTML = "";
                        for (let l = 1; l < 15; l++) {
                        let ingre = eval("data.drinks[i].strIngredient" + l);
                        console.log(ingre);
                        
                        if (ingre !== null && ingre !== '') {
                           
                            ingredientList.innerHTML += `<li>${ingre}</li>`;
                        }
                    }
                    i++;
                } else {
                    i++;
                    document.querySelector("h2").innerText =
                        data.drinks[i].strDrink;
                    document.querySelector("img").src =
                        data.drinks[i].strDrinkThumb;
                    document.querySelector(".instruct").innerText =
                        data.drinks[i].strInstructions;
                        ingredientList.innerHTML = ''
                          
                        for (let l = 1; l < 15; l++) {     
                        let ingre = eval("data.drinks[i].strIngredient" + l);
                        console.log(ingre);
                       
                        if (ingre !== null && ingre !== '') {
                            ingredientList.innerHTML += `<li>${ingre}</li>`;
                        }
                    }
                }
            }

            function previousDrink() {
                if (i == 0) {
                    i = data.drinks.length - 1;
                    document.querySelector("h2").innerText =
                        data.drinks[i].strDrink;
                    document.querySelector("img").src =
                        data.drinks[i].strDrinkThumb;
                    document.querySelector(".instruct").innerText =
                        data.drinks[i].strInstructions;
                        ingredientList.innerHTML = ''
                          
                        for (let l = 1; l < 15; l++) {     
                        let ingre = eval("data.drinks[i].strIngredient" + l);
                        console.log(ingre);
                       
                        if (ingre !== null && ingre !== '') {
                            ingredientList.innerHTML += `<li>${ingre}</li>`;
                        }
                    }
                    i--;
                } else {
                    i--;
                    document.querySelector("h2").innerText =
                        data.drinks[i].strDrink;
                    document.querySelector("img").src =
                        data.drinks[i].strDrinkThumb;
                    document.querySelector(".instruct").innerText =
                        data.drinks[i].strInstructions;
                        ingredientList.innerHTML = ''
                          
                        for (let l = 1; l < 15; l++) {     
                        let ingre = eval("data.drinks[i].strIngredient" + l);
                        console.log(ingre);
                       
                        if (ingre !== null && ingre !== '') {
                            ingredientList.innerHTML += `<li>${ingre}</li>`;
                        }
                    }
                }
            }
        });
}
