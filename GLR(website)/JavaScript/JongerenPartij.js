window.onload = function(){

    if(window.document = "JongerenPartij.html"){
        let Jongeren = document.getElementById("Jongeren");
        Jongeren.style.border = "green";
        Jongeren.style.paddingTop = '60px';
        Jongeren.style.paddingBottom = '10px';
        Jongeren.style.backgroundColor = 'rgb(25, 187, 25)';
        Jongeren.style.color = "white"
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
    let partijen = document.getElementById("Partijen");
    partijen.remove()
}