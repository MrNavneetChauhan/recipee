
async function getData(url){
  try{
    let res = await fetch(url);
    let collect  = await res.json();
    let mealofTheDay = collect.meals[0];
    return mealofTheDay
  }catch(error){
    console.log("your data has not fetched")
  }
}


function appendData(mealofTheDayHere,location1,location2){
  let {strInstructions,strMeal,strMealThumb,strSource,strYoutube} = mealofTheDayHere;

  let {strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15,strIngredient16,strIngredient17,strIngredient18,strIngredient19,strIngredient20} = mealofTheDayHere;


  let strIngredient = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strIngredient10,strIngredient11,strIngredient12,strIngredient13,strIngredient14,strIngredient15,strIngredient16,strIngredient17,strIngredient18,strIngredient19,strIngredient20]
  
  let {strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strMeasure10,strMeasure11,strMeasure12,strMeasure13,strMeasure14,strMeasure15,strMeasure16,strMeasure17,strMeasure18,vstrMeasure19,strMeasure20} = mealofTheDayHere;

let strMeasure = [strMeasure1,strMeasure2,strMeasure3,strMeasure4,strMeasure5,strMeasure6,strMeasure7,strMeasure8,strMeasure9,strMeasure10,strMeasure11,strMeasure12,strMeasure13,strMeasure14,strMeasure15,strMeasure16,strMeasure17,strMeasure18,vstrMeasure19,strMeasure20];


  
  let recipeeImg = document.createElement("img")
  recipeeImg.src = strMealThumb;
  recipeeImg.setAttribute("id","recipeeImg")
  location1.append(recipeeImg)

  let measureDiv = document.createElement("div");
  measureDiv.setAttribute("id","measureDiv");

  let ingredientsDiv = document.createElement("div");
  ingredientsDiv.setAttribute( "id","ingredientsDiv")

  location2.append(ingredientsDiv,measureDiv)
 
 
  let ingArr = [];
  for(let i = 0; i < strIngredient.length; i++){
    ingArr.push(strIngredient[i])
  }

  let measArr = [];
  for(let i = 0; i < strMeasure.length; i++){
    measArr.push(strMeasure[i])
  }

  let meal = document.getElementById("meal");
  meal.textContent = strMeal;

  let object = {
strInstructions,
strMeal,
strSource,
strYoutube,
strMealThumb
  }
  console.log(object)

 recipeeImg.addEventListener("click",function(){
     showRecipeeIns(object,ingArr,measArr)
 })

  
}

function showRecipeeIns(strMealThumb,strIngredient,strMeasure){

  for(let i = 0; i < strIngredient.length; i++){
    localStorage.setItem("Ingredients",JSON.stringify(strIngredient))
  }
  localStorage.setItem("strMealThumb",JSON.stringify(strMealThumb))

  for(let i = 0; i < strMeasure.length; i++){
    localStorage.setItem("Measure",JSON.stringify(strMeasure))
  }

  window.location.href = "mealoftheday.html"
}
export {getData,appendData};