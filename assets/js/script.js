document.addEventListener("DOMContentLoaded", function () {
  // Hide preloader after 2 seconds
  const preloader = document.getElementById("site-preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("hide");
      preloader.addEventListener("transitionend", () => preloader.remove(), {
        once: true,
      });
    }, 2000);
  }

  // Determine directory depth for component loading
  // Check if current page is inside 'pages' subdirectory
  const isSubpage = window.location.pathname.includes("/pages/");
  const pathPrefix = isSubpage ? "../" : "./";

  function initFooterSubscribeForm() {
    const isSubpage = window.location.pathname.includes("/pages/");
    const form = document.getElementById("footerSubscribeForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';

      setTimeout(() => {
        window.location.href = isSubpage ? "404.html" : "pages/404.html";
      }, 1500);
    });
  }

  // 1. Load Header Component
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    fetch(pathPrefix + "pages/components/header.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load header component");
        }
        return response.text();
      })
      .then((htmlData) => {
        headerPlaceholder.outerHTML = htmlData;

        // Post-header loading initialization
        const newHeader = document.querySelector(".main-header");
        if (newHeader) {
          adjustComponentLinks(newHeader, isSubpage);
          highlightActiveNavLink();
          initScrollHeader();
        }
      })
      .catch((error) => {
        console.error("Error loading header:", error);
      });
  } else {
    // If header is already in HTML, initialize scroll effect
    initScrollHeader();
    highlightActiveNavLink();
  }

  // 2. Load Footer Component
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    fetch(pathPrefix + "pages/components/footer.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load footer component");
        }
        return response.text();
      })
      .then((htmlData) => {
        footerPlaceholder.outerHTML = htmlData;

        const newFooter = document.querySelector(".site-footer");
        if (newFooter) {
          adjustComponentLinks(newFooter, isSubpage);
          initFooterSubscribeForm();
        }
      })
      .catch((error) => {
        console.error("Error loading footer:", error);
      });
  }

  // 3. Initialize Back to Top Button
  initBackToTop();

  // 4. Client-side Form Validation
  initContactForm();

  // 5. Initialize Scroll-Reveal Animations
  if (preloader) {
    setTimeout(initScrollReveal, 2000);
  } else {
    setTimeout(initScrollReveal, 100);
  }
});

function adjustComponentLinks(container, isSubpage) {
  const links = container.querySelectorAll("a");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (
      !href ||
      href === "#" ||
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:")
    ) {
      return;
    }

    if (isSubpage) {
      if (href.startsWith("pages/")) {
        link.setAttribute("href", href.replace("pages/", ""));
      } else if (href === "index.html") {
        link.setAttribute("href", "../index.html");
      }
    }
  });

  // Fix image src paths: components use "../assets/" which breaks on root index.html
  const images = container.querySelectorAll("img");
  images.forEach((img) => {
    const src = img.getAttribute("src");
    if (!src || src.startsWith("http")) return;
    if (!isSubpage && src.startsWith("../")) {
      img.setAttribute("src", src.replace("../", ""));
    }
  });
}

/**
 * Adds an 'active' class to the navigation link corresponding to the current active page.
 */
function highlightActiveNavLink() {
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";

  let navId = "";
  if (page === "index.html" || page === "") {
    navId = "nav-home";
  } else if (page.includes("services")) {
    navId = "nav-services";
  } else if (page.includes("about")) {
    navId = "nav-about";
  } else if (page.includes("projects")) {
    navId = "nav-projects";
  } else if (page.includes("team")) {
    navId = "nav-team";
  } else if (page.includes("pricing")) {
    navId = "nav-pricing";
  } else if (page.includes("contact")) {
    navId = "nav-contact";
  }

  if (navId) {
    const activeLink = document.getElementById(navId);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }
}

/**
 * Manages adding/removing scrolling states to the navbar.
 */
function initScrollHeader() {
  const header = document.querySelector(".main-header");
  if (!header) return;

  const scrollHandler = () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", scrollHandler);
  scrollHandler();

  // Mobile menu: inject close button + logo, handle body scroll lock
  const navCollapse = document.getElementById("mainNavbar");
  if (!navCollapse) return;

  // Inject close button
  if (!navCollapse.querySelector(".mobile-menu-close")) {
    const closeBtn = document.createElement("button");
    closeBtn.className = "mobile-menu-close d-lg-none";
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.setAttribute("aria-label", "Close menu");
    navCollapse.appendChild(closeBtn);

    closeBtn.addEventListener("click", () => {
      const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
      if (bsCollapse) bsCollapse.hide();
    });
  }

  // Inject logo inside mobile menu
  if (!navCollapse.querySelector(".mobile-menu-logo")) {
    const isSubpage = window.location.pathname.includes("/pages/");
    const logoSrc = isSubpage
      ? "../assets/images/logoStackly.webp"
      : "assets/images/logoStackly.webp";
    const logoWrap = document.createElement("div");
    logoWrap.className = "mobile-menu-logo d-lg-none";
    logoWrap.innerHTML = `<img src="${logoSrc}" alt="Stackly Logo" />`;
    navCollapse.appendChild(logoWrap);
  }

  // Lock/unlock body scroll on menu open/close
  navCollapse.addEventListener("show.bs.collapse", () => {
    document.body.classList.add("menu-open");
  });
  navCollapse.addEventListener("hide.bs.collapse", () => {
    document.body.classList.remove("menu-open");
  });

  // Close menu on nav link click (mobile)
  navCollapse.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });
}

/**
 * Sets up back-to-top button behaviors.
 */
function initBackToTop() {
  // Create button dynamically if not exists
  let btn = document.querySelector(".back-to-top");
  if (!btn) {
    btn = document.createElement("a");
    btn.className = "back-to-top";
    btn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    btn.setAttribute("href", "#");
    document.body.appendChild(btn);
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/**
 * Sets up contact form submit listeners for Bootstrap style validation.
 */
function initContactForm() {
  const isSubpage = window.location.pathname.includes("/pages/");

  document.addEventListener("submit", function (e) {
    const form = e.target.closest(".needs-validation");
    if (!form) return;

    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';

      setTimeout(() => {
        window.location.href = isSubpage ? "404.html" : "pages/404.html";
      }, 1500);
    }

    form.classList.add("was-validated");
  });
}

function allowOnlyLetters(input) {
  if (!input) return;

  input.addEventListener("keydown", function (e) {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "Escape",
      "Enter",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End",
      " ",
    ];

    // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
    if (e.ctrlKey && ["a", "c", "v", "x"].includes(e.key.toLowerCase())) {
      return;
    }

    if (allowedKeys.includes(e.key)) return;

    // Allow only letters
    if (!/^[a-zA-Z]$/.test(e.key)) {
      e.preventDefault();
    }
  });

  // Handle paste
  input.addEventListener("paste", function (e) {
    e.preventDefault();

    const pasted = (e.clipboardData || window.clipboardData).getData("text");
    const cleaned = pasted.replace(/[^a-zA-Z ]/g, "");

    document.execCommand("insertText", false, cleaned);
  });

  // Handle drag & drop / autocomplete / mobile keyboards
  input.addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z ]/g, "");
  });
}

// Apply validation
allowOnlyLetters(document.getElementById("fullName"));
allowOnlyLetters(document.getElementById("companyName"));

/**
 * Native Scroll Reveal Animation using IntersectionObserver.
 * Triggers entrance animations for elements when they enter the viewport.
 */
function initScrollReveal() {
  document.body.classList.add("page-loaded");

  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (revealElements.length === 0) return;

  // Configuration: trigger when 10% of the element is visible
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -20px 0px",
    threshold: 0.05,
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });
}
