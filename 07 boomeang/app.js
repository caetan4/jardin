console.log("Boomerang GSAP MotionPath");

gsap.registerPlugin(MotionPathPlugin);

const boomerang = document.getElementById("boomerang");

boomerang.addEventListener("click", () => {
  gsap.killTweensOf(boomerang); // reinicia animación si se hace click varias veces

  // Movimiento curvo ida y vuelta
  gsap.to(boomerang, {
    duration: 3,
    motionPath: {
      path: [
        { x: 200, y: -150 },  // sube hacia adelante
        { x: 400, y: 0 },     // punto más lejano
        { x: 0, y: 0 }        // regresa al origen
      ],
      curviness: 1.5
    },
    ease: "power1.inOut",
    rotation: 720
  });
});
