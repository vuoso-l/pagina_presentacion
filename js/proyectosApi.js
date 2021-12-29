const btnApi = document.querySelector(".api button");
const headerApi = document.querySelector("header");
const h1Api = document.querySelector("h1");
const h3Api = document.querySelector("h3");
const containerApi = document.querySelector(".container");

btnApi.addEventListener("click", (e) => {
    e.preventDefault();
    h1Api.innerHTML = "Repositorio dinámico";
    h3Api.innerHTML = "Basado en aprendizaje Certified Tech Developer";
    headerApi.innerHTML += `
        <nav>
        <label for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle" />
        <!--   creación el menu -->
        <div class="menu">
            <a href="../index.html">Home</a>
        </div>
        </nav>
    `
    containerApi.innerHTML = `
        <div class="card web-mH">
            <h2>Web Manteca & Harina</h2>
            <div class="backImage"></div>
            <a href=" https://vuoso-l.github.io/client-manteca-y-harina/" target="_blank">Ingresar</a>
        </div>        
        <div class="card api-github">
            <h2>GitHub de la API Rest de M&H</h2>
            <div class="backImage"></div>
            <a href="https://github.com/vuoso-l/api-manteca-y-harina" target="_blank">Ingresar</a>
        </div>
    `;
});