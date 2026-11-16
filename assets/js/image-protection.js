(function () {
  // Prevent the image context menu (including Save Image As).
  document.addEventListener("contextmenu", function (event) {
    if (event.target.closest("img")) {
      event.preventDefault();
    }
  }, true);

  // Prevent dragging images out of the page.
  document.addEventListener("dragstart", function (event) {
    if (event.target.closest("img")) {
      event.preventDefault();
    }
  }, true);

  // Prevent opening an image directly through an image link.
  document.addEventListener("click", function (event) {
    const imageLink = event.target.closest("a");

    if (
      imageLink &&
      imageLink.querySelector("img") &&
      /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(imageLink.getAttribute("href") || "")
    ) {
      event.preventDefault();
    }
  }, true);

  // Discourage common browser save and source-view shortcuts.
  document.addEventListener("keydown", function (event) {
    if (!event.ctrlKey && !event.metaKey) return;

    const key = event.key.toLowerCase();

    if (
      key === "s" ||
      key === "u"
    ) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);

  // Make displayed images non-draggable by default.
  document.querySelectorAll("img").forEach(function (image) {
    image.setAttribute("draggable", "false");
  });
})();
