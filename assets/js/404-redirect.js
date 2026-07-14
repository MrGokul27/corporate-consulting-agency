(function () {
  // Resolve the correct path to 404.html based on current page depth
  function get404Path() {
    const path = window.location.pathname;
    const segments = path.split("/");
    const pagesIndex = segments.indexOf("pages");
    if (pagesIndex === -1) {
      return "pages/404.html";
    }
    const depth = segments.length - 1 - pagesIndex - 1;
    if (depth <= 0) {
      return "404.html";
    }
    return "../".repeat(depth) + "404.html";
  }

  document.addEventListener("click", function (e) {
    // Walk up the DOM to find the closest anchor tag
    const anchor =
      e.target && typeof e.target.closest === "function"
        ? e.target.closest("a")
        : null;
    if (!anchor) return;

    const href = anchor.getAttribute("href");

    // Intercept only empty, "#", or "javascript:void(0)" links
    if (
      href === "#" ||
      href === "" ||
      href === null ||
      href === "javascript:void(0)" ||
      href === "javascript:;"
    ) {
      // Allow Bootstrap data-bs-* toggles (modals, collapses, dropdowns, tabs)
      if (
        anchor.hasAttribute("data-bs-toggle") ||
        anchor.hasAttribute("data-bs-target") ||
        anchor.hasAttribute("data-bs-dismiss")
      ) {
        return;
      }

      // Allow accordion buttons and nav tabs
      if (
        anchor.classList.contains("accordion-button") ||
        anchor.getAttribute("role") === "tab"
      ) {
        return;
      }

      // Allow back-to-top button
      if (anchor.classList.contains("back-to-top")) {
        return;
      }

      e.preventDefault();
      window.location.href = get404Path();
    }
  });
})();
