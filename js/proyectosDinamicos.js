const btnDinamicos = document.querySelector(".dinamicos button");
const headerDinamicos = document.querySelector("header");
const h1Dinamicos = document.querySelector("h1");
const h3Dinamicos = document.querySelector("h3");
const containerDinamicos = document.querySelector(".container");

btnDinamicos.addEventListener("click", (e) => {
    e.preventDefault();
    h1Dinamicos.innerHTML = "Repositorio dinámico";
    h3Dinamicos.innerHTML = "Basado en aprendizaje Certified Tech Developer";
    headerDinamicos.innerHTML += `
        <nav>
        <label for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle" />
        <!--   creación el menu -->
        <div class="menu">
            <a href="../index.html">Home</a>
        </div>
        </nav>
    `
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