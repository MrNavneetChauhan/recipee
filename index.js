import navbar from "/navbar.js"
let bar = document.getElementById("bar")
bar.innerHTML = navbar();

let recipeePoster = document.getElementById("recipeePoster");
let recipeeInstr = document.getElementById("recipeeInstr");
let ml1 = document.getElementById("ml1")
let ml2 = document.getElementById("ml2")
let ml3 = document.getElementById("ml3")
let ml4 = document.getElementById("ml4")

let data = JSON.parse(localStorage.getItem("data"))
let img1 = document.createElement("img")
let img2 = document.createElement("img")
let img3 = document.createElement("img")
let img4 = document.createElement("img")

img1.setAttribute("id","img1")
img2.setAttribute("id","img2")
img3.setAttribute("id","img3")
img4.setAttribute("id","img4")

img1.src = data[5].strMealThumb;
img2.src = data[1].strMealThumb;
img3.src = data[2].strMealThumb;
img4.src = data[8].strMealThumb;
ml1.append(img1)
ml2.append(img2)
ml3.append(img3)
ml4.append(img4)
let mealOfThedayUrl = `https://www.themealdb.com/api/json/v1/1/random.php`

import { getData,appendData} from "/data.js";
console.log(getData)

let mealofTheDayHere = await getData(mealOfThedayUrl);
appendData(mealofTheDayHere,recipeePoster,recipeeInstr)
ml1.addEventListener("click",goToLatestpage);
ml4.addEventListener("click",goToLatestpage);
ml2.addEventListener("click",goToLatestpage);
ml3.addEventListener("click",goToLatestpage);

function goToLatestpage(){
    window.location.href = "latestRacipee.html";
};
// search.addEventListener("click",showAlert);
search.addEventListener("click",showSearchInput);

function showSearchInput(){
    searchInput.style.display = "block"
}

search.addEventListener("keypress",showBar);

async function showBar(e){
    if(e.key === "Enter"){
       let searchValue = search.value;
       let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchValue}`;

        let res = await fetch(url)
        let collect = await res.json();
        let data = collect.meals;
        searchInput.textContent = "";
        data.map((item)=>{
            // console.log(strMeal)

            let strMealName = document.createElement("p");

            strMealName.textContent = item.strMeal;

            searchInput.append(strMealName)

            strMealName.style.cursor = "pointer"


            strMealName.addEventListener("click",function(){
                showName(item)
            })
        })

    }
}

function showName(item){
   localStorage.setItem("searchItem",JSON.stringify(item))

   window.location.href = "searchRecipee.html"
}