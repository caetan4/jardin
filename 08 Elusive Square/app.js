console.log("Triángulo con GSAP");

const figura = document.getElementById("figura");

window.addEventListener("click", () => {
  const figuraWidth = 80;
  const figuraHeight = 70;

  const maxX = window.innerWidth - figuraWidth;
  const maxY = window.innerHeight - figuraHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  gsap.to(figura, {
    duration: 1.5,
    x: randomX - window.innerWidth / 2,
    y: randomY - window.innerHeight / 2,
    ease: "power2.inOut"
  });
});
