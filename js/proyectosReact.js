const btnReact = document.querySelector(".btn-react");
const headerReact = document.querySelector(".headerIndex");
const containerReact = document.querySelector(".container");

btnReact.addEventListener("click", (e) => {
  console.log("click");
  e.preventDefault();

  headerReact.innerHTML = `
  <h1>Repositorio React JS</h1>
  <a class="btn-return" href="./index.html">Volver al home</a>
  `

  containerReact.innerHTML = `
    <div class="card theme">
        <h2>Cambio tema claro a oscuro</h2>
        <div class="backImage"></div>
        <a href="https://vuoso-l.github.io/react_render-images/" target="_blank">Ingresar</a>
    </div>        
    <div class="card parcel-sandbox">
        <h2>Renderizado imágenes base</h2>
        <div class="backImage"></div>
        <a href="https://vuoso-l.github.io/react_parcel-sandbox/" target="_blank">Ingresar</a>
    </div>
    <div class="card crud">
        <h2>Crud con API</h2>
        <div class="backImage"></div>
        <a href="https://vuoso-l.github.io/react-crud-api_curso_jonMircha/" target="_blank">Ingresar</a>
    </div>        
    <div class="card music-search">
        <h2>Buscador de canciones</h2>
        <div class="backImage"></div>
        <a href="https://vuoso-l.github.io/react-buscador_canciones_curso_jonMircha/" target="_blank">Ingresar</a>
    </div>
    <div class="card modals">
        <h2>Renderizado imágenes con ventana modal</h2>
        <div class="backImage"></div>
        <a href="https://vuoso-l.github.io/react-modals_curso_jonMircha-/" target="_blank">Ingresar</a>
    </div>
    `;
});
