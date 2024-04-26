function calculate(){
    var search=document.getElementById("search").value;
    document.getElementById("search").value="";
    var url= `www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then (res=>res.json())
    .then(show=>show(data.meals))

}
function show(data){
    oldcontent=document.getElementById("container1");
    oldcontent.textcontent="";

    for(var i=1;i<data.length[5];i++){
        console.log(data);
        var newDiv=document.createElement("div");
        newDiv.innerHTML=`Meal Title: <b>${data[i-1].strMeal}</b> <br>`;
        newDiv.classList.add("innerStyle");
        oldcontent.appendchild(newDiv);
    }
}
function show(data){
    oldcontent=document.getElementById("container1");
    oldcontent.textcontent="";

    for(var i=1;i<data.length[5];i++){
        console.log(data);
        var newDiv=document.createElement("div");
        newDiv.innerHTML=`Meal Title: <b>${data[i-1].strMeal}</b> <br>`;
        newDiv.classList.add("innerStyle");
        oldcontent.appendchild(newDiv);
    }
}
