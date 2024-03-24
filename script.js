//Menú para la barra de navegación responsive
const menuBtn = document.querySelector(".menu-btn");
const navegacion = document.querySelector(".navegacion");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navegacion.classList.toggle("active");
});

//Inicio animacion quinceaera

gsap.to("#bg", {
  scrollTrigger: {
    scrub: 1,
  },
  scale: 1.5,
});

gsap.to("#man", {
  scrollTrigger: {
    scrub: 1,
  },
  scale: 0.5,
});

gsap.to("#montañaDe", {
  scrollTrigger: {
    scrub: 1,
  },
  x: 500,
});

gsap.to("#montañaIz", {
  scrollTrigger: {
    scrub: 1,
  },
  x: -500,
});

gsap.to("#nueve2", {
  scrollTrigger: {
    scrub: 1,
  },
  x: 200,
});

gsap.to("#nueve1", {
  scrollTrigger: {
    scrub: 1,
  },
  x: -200,
});

gsap.to("#text", {
  scrollTrigger: {
    scrub: 1,
  },
  y: 500,
});
