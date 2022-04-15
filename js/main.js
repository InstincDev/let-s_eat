
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
    const url ="https://www.themealdb.com/api/json/v1/1/random.php";
    let ingredientList = document.querySelector('.ingredientList')
    fetch(url)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
            console.log(data)
            if (
                document.querySelector(".card").classList.contains("hidden")
            ) {
                document.querySelector(".card").classList.toggle("hidden");
            }

            document.querySelector("h2").innerText = data.meals[0].strMeal;

            document.querySelector("img").src = data.meals[0].strMealThumb;
            ingredientList.innerHTML = ''
            for (let l = 1; l < 19; l++) {
                let ingre = eval("data.meals[0].strIngredient" + l);
                console.log(ingre);
                if (ingre !== null && ingre != '') {

                    ingredientList.innerHTML += `<li>${ingre}</li>`;
                }
            }

            document.querySelector(".instruct").innerText =
                data.meals[0].strInstructions;
            
            }
        );
    
}
