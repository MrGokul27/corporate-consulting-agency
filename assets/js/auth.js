document.addEventListener("DOMContentLoaded", function () {
  // ── Eye Toggle ──────────────────────────────────────────────
  function initEyeToggle(btnId, inputId, iconId) {
    const btn = document.getElementById(btnId);
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);
    if (!btn || !input || !icon) return;

    btn.addEventListener("click", function () {
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      icon.classList.toggle("fa-eye", !isPassword);
      icon.classList.toggle("fa-eye-slash", isPassword);
    });
  }

  initEyeToggle("toggleLoginPassword", "loginPassword", "loginEyeIcon");
  initEyeToggle("toggleRegPassword", "regPassword", "regEyeIcon");
  initEyeToggle("toggleRegConfirm", "regConfirmPassword", "regConfirmEyeIcon");

  // ── Password Strength ────────────────────────────────────────
  function getStrength(password) {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (score <= 1) return { level: "weak", label: "Weak" };
    if (score <= 2) return { level: "fair", label: "Fair" };
    return { level: "strong", label: "Strong" };
  }

  function initStrengthMeter(inputId, wrapId, barId, labelId) {
    const input = document.getElementById(inputId);
    const wrap = document.getElementById(wrapId);
    const bar = document.getElementById(barId);
    const label = document.getElementById(labelId);
    if (!input || !wrap || !bar || !label) return;

    input.addEventListener("input", function () {
      const val = input.value;
      if (!val) {
        wrap.style.display = "none";
        wrap.className = "password-strength-wrap mt-2";
        return;
      }
      const { level, label: text } = getStrength(val);
      wrap.style.display = "flex";
      wrap.className = `password-strength-wrap mt-2 strength-${level}`;
      label.textContent = text;
    });
  }

  initStrengthMeter(
    "loginPassword",
    "loginStrengthWrap",
    "loginStrengthBar",
    "loginStrengthLabel",
  );
  initStrengthMeter(
    "regPassword",
    "regStrengthWrap",
    "regStrengthBar",
    "regStrengthLabel",
  );

  // ── Username: block numbers & special characters ─────────────
  const usernameInput = document.getElementById("regUsername");
  if (usernameInput) {
    usernameInput.addEventListener("keydown", function (e) {
      // Allow: backspace, delete, tab, escape, enter, arrows, home, end
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
      if (allowedKeys.includes(e.key)) return;
      // Block if not a letter
      if (!/^[a-zA-Z]$/.test(e.key)) {
        e.preventDefault();
      }
    });

    // Also handle paste — strip non-letter characters
    usernameInput.addEventListener("paste", function (e) {
      e.preventDefault();
      const pasted = (e.clipboardData || window.clipboardData).getData("text");
      const cleaned = pasted.replace(/[^a-zA-Z ]/g, "");
      document.execCommand("insertText", false, cleaned);
    });
  }

  // ── Login Form ───────────────────────────────────────────────
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!loginForm.checkValidity()) {
        loginForm.classList.add("was-validated");
        return;
      }
      loginForm.classList.add("was-validated");
      // Simulate login success (replace with real auth logic)
      const btn = loginForm.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.innerHTML =
        '<i class="fas fa-spinner fa-spin me-2"></i>Signing in...';
      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML =
          '<span>Sign In</span><i class="fas fa-arrow-right ms-2"></i>';
      }, 1500);
    });
  }

  // ── Register Form ────────────────────────────────────────────
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    const regPassword = document.getElementById("regPassword");
    const regConfirmPassword = document.getElementById("regConfirmPassword");
    const confirmFeedback = document.getElementById("confirmFeedback");

    // Live confirm password match check
    regConfirmPassword.addEventListener("input", function () {
      if (
        regConfirmPassword.value &&
        regPassword.value !== regConfirmPassword.value
      ) {
        regConfirmPassword.setCustomValidity("Passwords do not match.");
        confirmFeedback.textContent = "Passwords do not match.";
      } else {
        regConfirmPassword.setCustomValidity("");
        confirmFeedback.textContent = "Passwords do not match.";
      }
    });

    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Re-check confirm password match before submit
      if (regPassword.value !== regConfirmPassword.value) {
        regConfirmPassword.setCustomValidity("Passwords do not match.");
      } else {
        regConfirmPassword.setCustomValidity("");
      }

      if (!registerForm.checkValidity()) {
        registerForm.classList.add("was-validated");
        return;
      }

      registerForm.classList.add("was-validated");

      // Submit animation then redirect to login
      const btn = registerForm.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.innerHTML =
        '<i class="fas fa-spinner fa-spin me-2"></i>Creating account...';

      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    });
  }
});
