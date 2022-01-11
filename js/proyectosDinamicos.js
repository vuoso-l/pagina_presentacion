const btnDinamicos = document.querySelector(".dinamicos button");
const h1Dinamicos = document.querySelector("h1");
const h2Dinamicos = document.querySelector("h2");
const h3Dinamicos = document.querySelector("h3");
const aDinamicos = document.querySelector("a");
const containerDinamicos = document.querySelector(".container");

btnDinamicos.addEventListener("click", (e) => {
    e.preventDefault();
    h1Dinamicos.innerHTML = "Repositorio dinámico";
    h2Dinamicos.innerHTML = "";
    h3Dinamicos.innerHTML = "Basado en aprendizaje Certified Tech Developer";

    aDinamicos.setAttribute("class", "btn-return");
    aDinamicos.setAttribute("href", "../index.html");
    aDinamicos.innerText = "Volver al home";

    containerDinamicos.innerHTML = `
    <div class="card toDo">
        <h2>ToDo app</h2>
        <div class="backImage"></div>
        <a href="https://vuoso-l.github.io/Frontend2/ToDo_inicial" target="_blank">Ingresar</a>
    </div>
    <div class="card felinos">
        <h2>La familia de los felinos</h2>
        <div class="backImage"></div>
        <a href="https://vuoso-l.github.io/Frontend2/tema_oscuro_C5S/" target="_blank">Ingresar</a>
    </div>
    <div class="card sandBox">
        <h2>Parcel SandBox</h2>
        <div class="backImage"></div>
        <a href="https://vuoso-l.github.io/Frontend2/estructura_DOM_templatesLiteral_C6S/"
            target="_blank">Ingresar</a>
    </div>
    <div class="card api-get">
        <h2>Fetch API-get</h2>
        <div class="backImage"></div>
        <a href="https://vuoso-l.github.io/Frontend2/fetch-api-get/" target="_blank">Ingresar</a>
    </div>
    <div class="card chrono">
        <h2>Cronómetro</h2>
        <div class="backImage"></div>
        <a href="https://vuoso-l.github.io/Frontend2/cronometro_C8/" target="_blank">Ingresar</a>
    </div>
    `;
});