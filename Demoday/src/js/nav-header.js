const header = document.querySelector(".header-principal");
const nav = document.createElement("nav");
const ul = document.createElement("ul");
let paginaPrincipal = false;

nav.appendChild(ul);
header.appendChild(nav);

function criandoHeader() {
  links.forEach(e => {
    let a = document.createElement("a");
    let li = document.createElement("li");

    if(e != links[links.length - 1]) {
      a.classList.add("underline");
    }

    a.innerText = e.texto;
    a.setAttribute("href", e.link);
    li.appendChild(a);
    ul.appendChild(li);
  });
  estilizandoHeader();
}

function estilizandoHeader() {
  const head = document.querySelector("head");
  let link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");

  let caminhoCss = "../styles/nav-header.css";
  if(paginaPrincipal) {
    caminhoCss = "./src/styles/nav-header.css";
  }
  
  link.setAttribute("href", caminhoCss);
  head.appendChild(link);
}

window.addEventListener('scroll', () => {
  header.classList.toggle("active", window.scrollY > 1);
});