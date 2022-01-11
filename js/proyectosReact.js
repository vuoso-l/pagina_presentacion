const btnReact = document.querySelector(".btn-react");
const headerReact = document.querySelector("header");
const h1React = document.querySelector("h1");
const containerReact = document.querySelector(".container");

btnReact.addEventListener("click", (e) => {
    console.log("click");
    e.preventDefault();
    h1React.innerHTML = "Repositorio React JS";
    headerReact.innerHTML += `
        <nav>
        <label for="toggle">&#9776;</label>
        <input type="checkbox" id="toggle" />
        <!--   creación el menu -->
        <div class="menu">
            <a href="../index.html">Home</a>
        </div>
        </nav>
    `
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