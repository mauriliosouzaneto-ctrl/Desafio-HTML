// BOTÃO DE TEMA

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeButton.textContent = "☀";
    } else {
        themeButton.textContent = "☾";
    }

});


// CURIOSIDADES

const facts = [
    "Alice in Chains surgiu em Seattle, Washington, no final dos anos 1980.",

    "Facelift foi o álbum de estreia da banda e foi lançado em 1990.",

    "Dirt, lançado em 1992, é considerado um dos trabalhos mais importantes da banda.",

    "Jar of Flies foi lançado em 1994 e alcançou grande sucesso comercial.",

    "Jerry Cantrell é conhecido por suas linhas de guitarra e harmonias vocais características.",

    "Alice in Chains combinou elementos de grunge, heavy metal e rock alternativo.",

    "A banda fez parte da famosa cena musical de Seattle dos anos 1990."
];

const randomFactButton = document.getElementById("randomFact");
const factText = document.getElementById("fact");

randomFactButton.addEventListener("click", () => {

    const randomIndex = Math.floor(Math.random() * facts.length);

    factText.textContent = facts[randomIndex];

});


// ANIMAÇÃO AO ROLAR A PÁGINA

const elements = document.querySelectorAll(".card, .album");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.15
});

elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);
