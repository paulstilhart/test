// 1. Désactiver le glisser-déposer des liens => bug firefox
document.addEventListener("dragstart", function (event) {
  if (event.target.tagName.toLowerCase() === "a") {
    event.preventDefault();
  }
});

// 2. Initialisation des sliders
document.querySelectorAll(".js_slider").forEach((slider) => {
  let isDown = false;
  let startX;
  let scrollLeft;
  let moved = false;
  slider.scrollLeft = 150; // Position de défilement initiale

  // Désactive le drapeau de glissement
  const stopDragging = () => {
    isDown = false;
  };

  // 3. Gestion du drag and drop sur les sliders
  slider.addEventListener("mousedown", (e) => {
    isDown = true; // Activer le drapeau de glissement (drag)
    startX = e.pageX - slider.offsetLeft; // Position initiale du curseur horizontal
    scrollLeft = slider.scrollLeft; // Position actuelle de défilement
    moved = false; // Réinitialiser le drapeau de mouvement
  });

  slider.addEventListener("mouseleave", stopDragging);
  slider.addEventListener("mouseup", stopDragging);

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return; // Si le bouton de la souris n'est pas enfoncé, ne rien faire
    e.preventDefault(); // Empêche le défilement par défaut du navigateur

    const x = e.pageX - slider.offsetLeft; // Calcul de la nouvelle position horizontale du curseur
    slider.scrollLeft = scrollLeft - (x - startX); // Défilement horizontal en fonction du mouvement du curseur
    moved = Math.abs(x - startX) > 5; // Met à jour le drapeau moved si le mouvement est significatif
  });

  // 4. Bloquer le clic sur tous les éléments avec la classe .js_slide après le drag and drop
  slider.querySelectorAll(".js_slide").forEach((item) => {
    item.addEventListener("click", (e) => {
      if (moved) {
        e.preventDefault(); // Empêche l'action par défaut du clic si un mouvement significatif a eu lieu
      }
    });
  });
});
