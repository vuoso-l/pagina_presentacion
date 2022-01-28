const btnDinamicos = document.querySelector(".dinamicos button");
const titleDinamicos = document.querySelector(".title");
const containerDinamicos = document.querySelector(".container");

btnDinamicos.addEventListener("click", (e) => {
  e.preventDefault();
  
  titleDinamicos.innerHTML = `
    <h2>Repositorio proyectos dinámicos JS</h2>
    <h3>Basado en aprendizaje Certified Tech Developer</h3>
    <a class="btn-return" href="./index.html">Volver al home</a>  
  `;

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
