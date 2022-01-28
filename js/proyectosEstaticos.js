const btnEstaticos = document.querySelector(".estaticos button");
const headerEstaticos = document.querySelector(".headerIndex");
const containerEstaticos = document.querySelector(".container");

btnEstaticos.addEventListener("click", (e) => {
  e.preventDefault();
  headerEstaticos.innerHTML = `
    <h1>Repositorio estático JS</h1>
    <h3>Basado en aprendizaje Certified Tech Developer</h3>
    <a class="btn-return" href="./index.html">Volver al home</a>
  `;

  containerEstaticos.innerHTML = `
    <div class="card backPetshop">
        <h2>petshop</h2>
        <div class="backImage"></div>
        <a href="https://vuoso-l.github.io/Frontend1/petShop/" target="_blank">Ingresar</a>
    </div>
    <div class="card backHeroes">
        <h2>súper héroes</h2>
        <div class="backImage"></div>
        <a href="https://vuoso-l.github.io/Frontend1/heroes/" target="_blank">Ingresar</a>
    </div>
    <div class="card backCvLucas">
        <h2>CV - Lucas Vuoso</h2>
        <div class="backImage"></div>
        <a href="https://vuoso-l.github.io/curriculum_vitae/" target="_blank">Ingresar</a>
    </div>
    <div class="card backCvBatman">
        <h2>CV - Batman</h2>
        <div class="backImage"></div>
        <a href="https://vuoso-l.github.io/Frontend1/cv_batman/" target="_blank">Ingresar</a>
    </div>
    <div class="card backLemonPie">
        <h2>lemon pie</h2>
        <div class="backImage"></div>
        <a href="https://vuoso-l.github.io/Frontend1/lemon_pie/" target="_blank">Ingresar</a>
    </div>
    <div class="card backPizzeria">
        <h2>pizzería</h2>
        <div class="backImage"></div>
        <a href="https://vuoso-l.github.io/Frontend1/pizza/" target="_blank">Ingresar</a>
    </div>
    `;
});
