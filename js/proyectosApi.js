const btnApi = document.querySelector(".api button");
const h1Api = document.querySelector("h1");
const h2Api = document.querySelector("h2");
const h3Api = document.querySelector("h3");
const containerApi = document.querySelector(".container");

btnApi.addEventListener("click", (e) => {
    e.preventDefault();
    h1Api.innerHTML = "Repositorio Vanilla JS - Node JS";
    h2Api.innerHTML = "";
    h3Api.innerHTML = "";

    containerApi.innerHTML = `
    <a class="btn-return" href="../index.html">Volver al Home</a>
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