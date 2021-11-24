const API = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const API_SEARCH = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const API_CATH = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';

var main = document.getElementById('main')
var form = document.getElementById("form")





getMeals(API)

async function getMeals(url) {
    const res = await fetch(url)
    const data = await res.json()
    try{
        showMeals(data.meals)
    }catch(error){
        document.getElementById("app").style.display = "none";
    }

    console.log(data)
}


function showMeals(meals) {
    main.innerHTML = ''

    meals.forEach((meal) => {
        const { strInstructions , strMealThumb , strMeal , strArea , strIngredient1 , strIngredient2 , strIngredient3 , strIngredient4 , strIngredient5 , strIngredient6 , strIngredient7 , strIngredient8 , strIngredient9 , strIngredient11 , strIngredient10 , strIngredient12 , strIngredient13 , strIngredient14 , strIngredient15 , strIngredient16 , strIngredient17 , strIngredient18 , strIngredient19 , strIngredient20 } = meal

        const movieEl = document.createElement('div')
        var mealDetail = document.getElementById("detail")

        movieEl.innerHTML = `
        <ion-card>
        <ion-img src="${strMealThumb}" style="width : 100%;" ></ion-img>
        <ion-card-header>
          <ion-card-subtitle>${strArea}</ion-card-subtitle>
          <ion-card-title>${strMeal}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
        <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Detail
            </button>
          </h2>
          <br>
          <br>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            
          ${strInstructions}
          <br>
          <strong>Ingredient :</strong>
          <br>
       <div class="ion-margin">
              <span>${strIngredient1}</span><br>
              <span>${strIngredient2}</span><br>
              <span>${strIngredient3}</span><br>
              <span>${strIngredient4}</span><br>
              <span>${strIngredient5}</span><br>
              <span>${strIngredient6}</span><br>
              <span>${strIngredient7}</span><br>
              <span>${strIngredient8}</span><br>
              <span>${strIngredient9}</span><br>
              <span>${strIngredient10}</span><br>
              <span>${strIngredient11}</span><br>
              <span>${strIngredient12}</span><br>
              <span>${strIngredient13}</span><br>
              <span>${strIngredient14}</span><br>
              <span>${strIngredient15}</span><br>
              <span>${strIngredient16}</span><br>
              <span>${strIngredient17}</span><br>
              <span>${strIngredient18}</span><br>
              <span>${strIngredient19}</span><br>
              <span>${strIngredient20}</span>
       </div>

          </div>
        </div>

            


        </ion-card-content>
      </ion-card>
        `

        main.appendChild(movieEl)
    })
    
}


function search(){
    var search = document.getElementById("search")
    var searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMeals(API_SEARCH + searchTerm)
        search.value = ''
        document.getElementById("backSearch").style.display = "inline-block";
    } else {
        window.location.reload()
    }
}


document.getElementById("backSearch").addEventListener("click" , function(){
    window.location.reload();
})

