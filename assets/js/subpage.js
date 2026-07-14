(function () {
  "use strict";

  const ROLE_CONFIG = {
    executive: {
      label: "Executive / C-Suite",
      icon: "fa-crown",
      color: "#c79a61",
      nav: [
        { section: "Overview" },
        { id: "overview", icon: "fa-chart-pie", label: "Executive Overview" },
        { id: "performance", icon: "fa-chart-line", label: "Performance KPIs" },
        { id: "portfolio", icon: "fa-briefcase", label: "Portfolio" },
        { section: "Management" },
        { id: "team", icon: "fa-users", label: "Team", badge: "12" },
        { id: "reports", icon: "fa-file-chart-line", label: "Board Reports" },
        { id: "strategy", icon: "fa-chess", label: "Strategy Map" },
        { section: "Finance" },
        { id: "financials", icon: "fa-coins", label: "Financials" },
        { id: "budget", icon: "fa-wallet", label: "Budget Allocation" },
      ],
    },
    manager: {
      label: "Senior Manager",
      icon: "fa-user-tie",
      color: "#1e564d",
      nav: [
        { section: "Overview" },
        { id: "overview", icon: "fa-gauge-high", label: "Dashboard" },
        {
          id: "projects",
          icon: "fa-diagram-project",
          label: "Projects",
          badge: "5",
        },
        { id: "team", icon: "fa-users", label: "My Team" },
        { section: "Operations" },
        { id: "tasks", icon: "fa-list-check", label: "Task Board" },
        { id: "timeline", icon: "fa-calendar-days", label: "Timeline" },
        { id: "resources", icon: "fa-layer-group", label: "Resources" },
        { section: "Reports" },
        { id: "reports", icon: "fa-file-lines", label: "Reports" },
        { id: "analytics", icon: "fa-chart-bar", label: "Analytics" },
      ],
    },
    consultant: {
      label: "Consultant",
      icon: "fa-user-graduate",
      color: "#0c2b27",
      nav: [
        { section: "My Work" },
        { id: "overview", icon: "fa-house", label: "My Dashboard" },
        {
          id: "engagements",
          icon: "fa-handshake",
          label: "Engagements",
          badge: "3",
        },
        { id: "deliverables", icon: "fa-file-contract", label: "Deliverables" },
        { section: "Clients" },
        { id: "clients", icon: "fa-building", label: "Client Accounts" },
        { id: "meetings", icon: "fa-calendar-check", label: "Meetings" },
        { section: "Knowledge" },
        { id: "library", icon: "fa-book-open", label: "Resource Library" },
        { id: "templates", icon: "fa-copy", label: "Templates" },
      ],
    },
    analyst: {
      label: "Analyst",
      icon: "fa-magnifying-glass-chart",
      color: "#1e564d",
      nav: [
        { section: "Analytics" },
        { id: "overview", icon: "fa-chart-pie", label: "Analytics Hub" },
        { id: "data", icon: "fa-database", label: "Data Sources" },
        { id: "models", icon: "fa-brain", label: "Models & Insights" },
        { section: "Reports" },
        {
          id: "reports",
          icon: "fa-file-chart-column",
          label: "Reports",
          badge: "2",
        },
        { id: "scheduled", icon: "fa-clock", label: "Scheduled Reports" },
        { section: "Tools" },
        { id: "workspace", icon: "fa-laptop-code", label: "Workspace" },
        { id: "exports", icon: "fa-file-export", label: "Exports" },
      ],
    },
    client: {
      label: "Client",
      icon: "fa-building-columns",
      color: "#c79a61",
      nav: [
        { section: "My Portal" },
        { id: "overview", icon: "fa-house", label: "My Overview" },
        {
          id: "projects",
          icon: "fa-diagram-project",
          label: "My Projects",
          badge: "2",
        },
        { id: "reports", icon: "fa-file-lines", label: "Reports & Docs" },
        { section: "Communication" },
        { id: "messages", icon: "fa-comments", label: "Messages", badge: "4" },
        { id: "meetings", icon: "fa-calendar-check", label: "Meetings" },
        { section: "Billing" },
        { id: "invoices", icon: "fa-receipt", label: "Invoices" },
        { id: "contracts", icon: "fa-file-signature", label: "Contracts" },
      ],
    },
  };

  const FILE_MAP = {
    executive: {
      overview: "../../dashboard.html",
      performance: "performance-kpi.html",
      portfolio: "portfolio.html",
      team: "team.html",
      reports: "board-reports.html",
      strategy: "strategy-map.html",
      financials: "financials.html",
      budget: "budget-allocation.html",
    },
    manager: {
      overview: "../../dashboard.html",
      projects: "projects.html",
      team: "my-team.html",
      tasks: "task-board.html",
      timeline: "timeline.html",
      resources: "resources.html",
      reports: "reports.html",
      analytics: "analytics.html",
    },
    consultant: {
      overview: "../../dashboard.html",
      engagements: "engagements.html",
      deliverables: "deliverables.html",
      clients: "client-accounts.html",
      meetings: "meetings.html",
      library: "resource-library.html",
      templates: "templates.html",
    },
    analyst: {
      overview: "../../dashboard.html",
      data: "data-sources.html",
      models: "models-and-insights.html",
      reports: "reports.html",
      scheduled: "scheduled-reports.html",
      workspace: "workspace.html",
      exports: "exports.html",
    },
    client: {
      overview: "../../dashboard.html",
      projects: "my-projects.html",
      reports: "reports-and-docs.html",
      messages: "messages.html",
      meetings: "meetings.html",
      invoices: "invoices.html",
      contracts: "contracts.html",
    },
  };

  // Map directory patterns to role config keys
  function getRoleFromPath() {
    const path = window.location.pathname;
    if (path.includes("/executive-or-csuite/")) return "executive";
    if (path.includes("/senior-manager/")) return "manager";
    if (path.includes("/consultants/")) return "consultant";
    if (path.includes("/analyst/")) return "analyst";
    if (path.includes("/clients/")) return "client";
    return null;
  }

  function getActiveNavId(role) {
    const path = window.location.pathname;
    const pageFile = path.substring(path.lastIndexOf("/") + 1);
    const map = FILE_MAP[role];
    if (!map) return null;
    for (const [id, file] of Object.entries(map)) {
      if (file === pageFile) return id;
    }
    return null;
  }

  function initials(name) {
    return name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }

  function buildSidebar(role, activeId) {
    const config = ROLE_CONFIG[role];
    if (!config) return "";
    let html = "";
    config.nav.forEach((item) => {
      if (item.section) {
        html += `<div class="db-sidebar-section-label">${item.section}</div>`;
      } else {
        const badge = item.badge
          ? `<span class="db-nav-badge">${item.badge}</span>`
          : "";
        const href = FILE_MAP[role][item.id] || "#";
        const isActive = item.id === activeId ? " active" : "";
        html += `
          <a href="${href}" class="db-nav-item${isActive}" data-section="${item.id}">
            <span class="db-nav-icon"><i class="fas ${item.icon}"></i></span>
            <span>${item.label}</span>
            ${badge}
          </a>`;
      }
    });
    return html;
  }

  document.addEventListener("DOMContentLoaded", function () {
    // ── Check Auth ─────────────────────────────────────────────
    const raw = sessionStorage.getItem("stackly_user");
    if (!raw) {
      window.location.href = "../../login.html";
      return;
    }

    let userData;
    try {
      userData = JSON.parse(raw);
    } catch (e) {
      window.location.href = "../../login.html";
      return;
    }

    const currentRole = getRoleFromPath();
    if (!currentRole || userData.role !== currentRole) {
      // Unauthorized or mismatched role folder
      window.location.href = "../../dashboard.html";
      return;
    }

    const email = userData.email || "user@company.com";
    const name = email
      .split("@")[0]
      .replace(/[._]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    const abbr = initials(name);
    const config = ROLE_CONFIG[currentRole];
    const activeId = getActiveNavId(currentRole);

    // ── Inject Topbar ──────────────────────────────────────────
    const topbarHtml = `
      <header class="db-topbar">
        <button class="db-sidebar-toggle" id="db-sidebar-toggle" aria-label="Toggle sidebar">
          <i class="fas fa-bars"></i>
        </button>
        <a href="../../../index.html" class="db-topbar-logo">
          <img src="../../../assets/images/logoStackly.webp" alt="Stackly" />
        </a>
        <div class="db-topbar-divider"></div>
        <span class="db-topbar-title" id="db-topbar-title">${config.label} Portal</span>
        <div class="db-topbar-actions">
          <button class="db-topbar-icon-btn" title="Notifications">
            <i class="fas fa-bell"></i>
            <span class="db-notif-badge"></span>
          </button>
          <button class="db-topbar-icon-btn" title="Settings">
            <i class="fas fa-gear"></i>
          </button>
          <div class="db-user-pill">
            <div class="db-user-avatar" id="db-user-avatar">${abbr}</div>
            <div>
              <div class="db-user-name" id="db-user-name">${name}</div>
              <div class="db-user-role-badge" id="db-user-role-badge">${config.label}</div>
            </div>
          </div>
        </div>
      </header>
    `;
    document.body.insertAdjacentHTML("afterbegin", topbarHtml);

    // ── Inject Sidebar Overlay ──────────────────────────────────
    document.body.insertAdjacentHTML(
      "beforeend",
      '<div class="db-sidebar-overlay" id="db-sidebar-overlay"></div>',
    );

    // ── Inject Sidebar inside .db-layout ────────────────────────
    const dbLayout = document.querySelector(".db-layout");
    if (dbLayout) {
      const sidebarHtml = `
        <aside class="db-sidebar" id="db-sidebar">
          <div class="db-sidebar-inner">
            <nav id="db-sidebar-nav">
              ${buildSidebar(currentRole, activeId)}
            </nav>
          </div>
          <div class="db-sidebar-footer">
            <button class="db-logout-btn" id="db-logout-btn">
              <i class="fas fa-right-from-bracket"></i>
              <span>Sign Out</span>
            </button>
          </div>
        </aside>
      `;
      dbLayout.insertAdjacentHTML("afterbegin", sidebarHtml);
    }

    // ── Inject Footer inside .db-main ───────────────────────────
    const dbMain = document.querySelector(".db-main");
    if (dbMain) {
      const footerHtml = `
        <div class="mt-5 pt-3" style="border-top: 1px solid rgba(12, 43, 39, 0.08); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
          <span style="font-size: 0.75rem; color: var(--text-muted)">
            © 2026 Stackly Corporate Consulting. All rights reserved.
          </span>
          <span style="font-size: 0.75rem; color: var(--text-muted)">
            <i class="fas fa-shield-halved" style="color: var(--accent-color); margin-right: 4px"></i>
            Secure Session
          </span>
        </div>
      `;
      dbMain.insertAdjacentHTML("beforeend", footerHtml);
    }

    // ── Bind Interactive Actions ───────────────────────────────
    const toggleBtn = document.getElementById("db-sidebar-toggle");
    const sidebar = document.getElementById("db-sidebar");
    const overlay = document.getElementById("db-sidebar-overlay");

    function openSidebar() {
      sidebar.classList.add("open");
      overlay.classList.add("show");
    }
    function closeSidebar() {
      sidebar.classList.remove("open");
      overlay.classList.remove("show");
    }

    if (toggleBtn) toggleBtn.addEventListener("click", openSidebar);
    if (overlay) overlay.addEventListener("click", closeSidebar);

    // Logout
    const logoutBtn = document.getElementById("db-logout-btn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();
        sessionStorage.removeItem("stackly_user");
        window.location.href = "../../login.html";
      });
    }

    // Dynamic current date loading
    const dateSpan = document.getElementById("current-date");
    if (dateSpan) {
      const now = new Date();
      dateSpan.textContent = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  });
})();
