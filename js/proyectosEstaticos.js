const btnEstaticos = document.querySelector(".estaticos button");
const h1Estaticos = document.querySelector("h1");
const h2Estaticos = document.querySelector("h2");
const h3Estaticos = document.querySelector("h3");
const aEstaticos = document.querySelector("a");
const containerEstaticos = document.querySelector(".container");

btnEstaticos.addEventListener("click", (e) => {
  e.preventDefault();
  h1Estaticos.innerHTML = "Repositorio estático";
  h2Estaticos.innerHTML = "";
  h3Estaticos.innerHTML = "Basado en aprendizaje Certified Tech Developer";

  aEstaticos.setAttribute("class", "btn-return");
  aEstaticos.setAttribute("href", "../index.html");
  aEstaticos.innerText = "Volver al home";

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
