const contenedorCarrousel = document.querySelector(".carrousel__data");
const botonIzq = document.querySelector(".primera");
const botonDer = document.querySelector(".segunda");
const slides = document.querySelector(".carrousel__slides");
const botones = document.querySelectorAll(".carrousel__flecha");

botones.forEach((boton)=> {
    boton.addEventListener("click", ()=>{
        const offset = boton.dataset.carouselButton === "next" ? 1 : -1;
        console.log(offset);
    });
   
});




