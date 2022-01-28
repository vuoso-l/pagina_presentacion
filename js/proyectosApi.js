const btnApi = document.querySelector(".api button");
const titleApi = document.querySelector(".title");
const containerApi = document.querySelector(".container");

btnApi.addEventListener("click", (e) => {
  e.preventDefault();

  titleReact.innerHTML = `
    <h2>Repositorio Vanilla JS - Node JS</h2>
    <a class="btn-return" href="./index.html">Volver al home</a>
  `;

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
