function calculate(){
    var search=document.getElementById("search").value;
    document.getElementById("search").value="";
    var url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch (url)
    .then (res=>res.json())
    .then(show=>show(data.meals))

}
function show(data){
    oldcontent=document.getElementById("container1");
    oldcontent.textcontent="";

    for(var i=1;i<data.length[5];i++){
        console.log(data);
        var newDiv=document.createElement("div");
        newDiv.innerHTML=`Meal id:${data[i-1].idMeal}<br>
                          Meal title:${data[i-1].strMeal}<br>
                          <img src=${data[i-1].strMealThumb}<br><br>
                          Cooking instructions:${data[i-1].strInstructions}`;
        newDiv.classList.add("innerStyle");
        oldcontent.appendchild(newDiv);
    }
}
function connect(){
    var search=document.getElementById("search").value;
    document.getElementById("search").value="";
    var url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch (url)
    .then (res=>res.json())
    .then(show=>showMore(data.meals))

}
function showMore(data){
    oldcontent=document.getElementById("container1");
    oldcontent.textcontent="";

    for(var i=data.length[5];i<data.length;i++){
        console.log(data);
        var newDiv=document.createElement("div");
        newDiv.innerHTML=`Meal id:${data[i-1].idMeal}<br>
                          Meal title:${data[i-1].strMeal}<br>
                          <img src=${data[i-1].strMealThumb}<br><br>
                          Cooking instructions:${data[i-1].strInstructions}`;
        newDiv.classList.add("innerStyle");
        oldcontent.appendchild(newDiv);
    }
}
