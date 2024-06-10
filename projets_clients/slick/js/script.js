document.addEventListener("DOMContentLoaded", function () {
  // Désactiver le glisser-déposer des liens
  document.addEventListener("dragstart", function (event) {
    if (event.target.tagName.toLowerCase() === "a") {
      event.preventDefault(); // Empêche le glisser-déposer du lien
    }
  });
});
