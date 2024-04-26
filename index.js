function calculate(){
    var search=document.getElementById("search").value;
    document.getElementById("search").value="";
    var url= `www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then (res=>res.json())
    .then(show=>show(data.meals))


}