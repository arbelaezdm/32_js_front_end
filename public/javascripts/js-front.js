let elH1 = document.querySelector("h1");

console.log("Este es el H1");
console.log(elH1);

let navBar = document.querySelector(".nav-bar");

if (navBar != null) {
  console.log(navBar);
}

let parrafos = document.querySelectorAll("p");

if (parrafos != null) {
  console.log(parrafos);
  for (const unParrafo of parrafos) {
    console.log(unParrafo);
  }
}

let strong = document.querySelector(".parrafo-especial strong");

if (strong != null) {
  console.log(strong);
}
