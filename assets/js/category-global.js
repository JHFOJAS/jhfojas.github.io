/*
  JAKE FOJAS PORTFOLIO
  Shared Category Page JavaScript

  Exclusively for the four category pages.
*/

async function loadCategoryComponents() {

  // Load shared header
  const headerPlaceholder = document.getElementById("categoryHeader");

  if (headerPlaceholder) {
    try {
      const response = await fetch("assets/components/category-header.html");

      if (!response.ok) {
        throw new Error(`Header request failed: ${response.status}`);
      }

      const headerHTML = await response.text();
      headerPlaceholder.outerHTML = headerHTML;

      // Hide the current category
      const currentPage = window.location.pathname.split("/").pop();

      document.querySelectorAll(".category-nav a").forEach(link => {
        if (link.dataset.page === currentPage) {
          link.style.display = "none";
        }
      });

    } catch (error) {
      console.error("Shared header error:", error);
    }
  }

  // Load shared footer independently
  const footerPlaceholder = document.getElementById("categoryFooter");

  if (footerPlaceholder) {
    try {
      const response = await fetch("assets/components/category-footer.html");

      if (!response.ok) {
        throw new Error(`Footer request failed: ${response.status}`);
      }

      const footerHTML = await response.text();
      footerPlaceholder.outerHTML = footerHTML;

    } catch (error) {
      console.error("Shared footer error:", error);
    }
  }
}

document.addEventListener("DOMContentLoaded", loadCategoryComponents);
