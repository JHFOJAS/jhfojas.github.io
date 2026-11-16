
/* =========================================
   JAKE FOJAS PORTFOLIO
   Gallery Image Lightbox
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery-grid");

  if (!gallery) return;

  const images = Array.from(gallery.querySelectorAll("img"));

  if (!images.length) return;

  let currentIndex = 0;

  // Create lightbox elements
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", "Image viewer");

  lightbox.innerHTML = `
    <button class="lightbox-close" aria-label="Close image viewer">&times;</button>
    <button class="lightbox-prev" aria-label="Previous image">&#10094;</button>
    <img class="lightbox-image" src="" alt="">
    <button class="lightbox-next" aria-label="Next image">&#10095;</button>
    <div class="lightbox-counter"></div>
  `;

  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector(".lightbox-image");
  const closeButton = lightbox.querySelector(".lightbox-close");
  const prevButton = lightbox.querySelector(".lightbox-prev");
  const nextButton = lightbox.querySelector(".lightbox-next");
  const counter = lightbox.querySelector(".lightbox-counter");

  // Display selected image
  function showImage(index) {
    currentIndex = (index + images.length) % images.length;

    const selectedImage = images[currentIndex];

    lightboxImage.src = selectedImage.currentSrc || selectedImage.src;
    lightboxImage.alt = selectedImage.alt;

    counter.textContent =
      `${String(currentIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;
  }

  // Open lightbox
  function openLightbox(index) {
    showImage(index);
    lightbox.classList.add("is-open");
    document.body.classList.add("lightbox-active");
    closeButton.focus();
  }

  // Close lightbox
  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.classList.remove("lightbox-active");
  }

  // Gallery image clicks
  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      openLightbox(index);
    });
  });

  // Navigation
  prevButton.addEventListener("click", () => {
    showImage(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    showImage(currentIndex + 1);
  });

  // Close button
  closeButton.addEventListener("click", closeLightbox);

  // Close when clicking the dark background
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard controls
  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      showImage(currentIndex - 1);
    }

    if (event.key === "ArrowRight") {
      showImage(currentIndex + 1);
    }
  });
});
