/*
  JAKE FOJAS PORTFOLIO
  Shared Category Page JavaScript

  This file is exclusively for:
  - branding.html
  - web-design.html
  - print-design.html
  - creative-experiments.html

  Handles shared category-page components and behavior.
  index.html and resume.html must remain unaffected.
*/

async function loadCategoryComponents() {
  try {
    // Load shared header
    const headerResponse = await fetch(
      "assets/components/category-header.html"
    );

    if (!headerResponse.ok) {
      throw new Error("Unable to load category header.");
    }

    const headerHTML = await headerResponse.text();
    document.getElementById("categoryHeader").outerHTML = headerHTML;

    // Load shared footer
    const footerResponse = await fetch(
      "assets/components/category-footer.html"
    );

    if (!footerResponse.ok) {
      throw new Error("Unable to load category footer.");
    }

    const footerHTML = await footerResponse.text();
    document.getElementById("categoryFooter").outerHTML = footerHTML;

    // Hide the current category from navigation
    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".category-nav a").forEach(link => {
      if (link.dataset.page === currentPage) {
        link.style.display = "none";
      }
    });

  } catch (error) {
    console.error("Category component loading error:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadCategoryComponents);
