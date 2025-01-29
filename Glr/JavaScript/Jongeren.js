window.onload = function(){

    if(window.document = "Jongeren.html"){
        let Login = document.getElementById("Jongeren");
        Login.style.border = "green";
        Login.style.paddingTop = '70px';
        Login.style.paddingBottom = '10px';
        Login.style.backgroundColor = '#9acc52';
        Login.style.color = "white"
    }
}
function Home(){
    window.location.href = "Home.html"
}
function Jongeren(){
    window.location.href = "Jongeren.html"
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

function handlePartijClick(element) {
    const square = element.querySelector('.vierkant');
    square.classList.toggle('active');
}