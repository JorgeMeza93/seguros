const botones = document.querySelectorAll(".carrousel__boton");

botones.forEach( boton => {
    boton.addEventListener("click", ()=>{
        const offset = boton.dataset.valor === "next" ? 1 : -1;
        console.log(offset);
        const slides = boton.closest(".carrousel__contendido").querySelector(".carrousel__slides");    //devuelve el ascendiente más cercano al elemento actual en este caso devuelve .contenedor y despues ul
        console.log(slides);
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        // PARA CICLAR EL slide
        if(newIndex < 0){
            newIndex = slides.children.length - 1;
        }
        if(newIndex >= slides.children.length){
            newIndex = 0;
        }
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active
    });
});