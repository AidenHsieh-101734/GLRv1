window.onload = function(){

    if(window.document = "Stem.html"){
        let Stem = document.getElementById("Stem");
        Stem.style.border = "green";
        Stem.style.paddingTop = '70px';
        Stem.style.paddingBottom = '10px';
        Stem.style.backgroundColor = 'rgb(25, 187, 25)';
        Stem.style.color = "white"
    }
}
function Home(){
    window.location.href = "Home.html"
}
function Jongeren(){
    window.location.href = "JongerenPartij.html"
}
function Stem(){
    window.location.href = "Stem.html"
}
function Uitslag(){
    window.location.href = "Uitslag.html"
}
function Login(){
    window.location.href = "Login.html"
}
function Admin(){
    window.location.href = "Admin.html"
}
function Partij1(){
    let stem1 = document.getElementById("vierkant1");

    if(Partij1 && stem1.style.backgroundColor == "white"){
        stem1.style.backgroundColor = "green"
    } else{
        stem1.style.backgroundColor = "white"
    }
}