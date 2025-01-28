let isLoggedIn = false;

window.onload = function () {
    const pageTitle = document.title;

    if (pageTitle === "Stem") {
        let StemButton = document.getElementById("Stem");
        StemButton.style.border = "2px solid green";
        StemButton.style.paddingTop = "70px";
        StemButton.style.paddingBottom = "10px";
        StemButton.style.backgroundColor = "rgb(25, 187, 25)";
        StemButton.style.color = "white";
    }
};

function handlePartijClick(element) {
    const vierkant = element.querySelector(".vierkant");

    if (!isLoggedIn) {
        alert("U bent niet ingelogd. U wordt doorgestuurd naar de loginpagina.");
        window.location.href = "Login.html";
    } else {
        vierkant.classList.toggle("active");
    }
}

function Home() {
    window.location.href = "Home.html";
}

function Jongeren() {
    window.location.href = "JongerenPartij.html";
}

function Stem() {
    window.location.href = "Stem.html";
}

function Uitslag() {
    window.location.href = "Uitslag.html";
}

function Login() {
    window.location.href = "Login.html";
}

function Admin() {
    window.location.href = "Admin.html";
}