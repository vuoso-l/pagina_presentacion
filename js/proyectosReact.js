const btnReact = document.querySelector(".btn-react");
const h1React = document.querySelector("h1");
const h2React = document.querySelector("h2");
const h3React = document.querySelector("h3");
const aReact = document.querySelector("a");
const containerReact = document.querySelector(".container");

btnReact.addEventListener("click", (e) => {
  console.log("click");
  e.preventDefault();
  h1React.innerHTML = "Repositorio React JS";
  h2React.innerHTML = "";
  h3React.innerHTML = "";
  
  aReact.setAttribute("class", "btn-return");
  aReact.setAttribute("href", "../index.html");
  aReact.innerText = "Volver al home";

  containerReact.innerHTML = `
    <div class="card theme">
        <h2>Cambio tema claro a oscuro</h2>
        <div class="backImage"></div>
        <a href=" https://vuoso-l.github.io/react_render-images/" target="_blank">Ingresar</a>
    </div>        
    <div class="card parcel-sandbox">
        <h2>Renderizado imágenes base</h2>
        <div class="backImage"></div>
        <a href="https://github.com/vuoso-l/react_parcel-sandbox" target="_blank">Ingresar</a>
    </div>
    `;
});
