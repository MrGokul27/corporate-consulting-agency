(function () {
  "use strict";

  // ── Role Config ──────────────────────────────────────────────
  const ROLE_CONFIG = {
    executive: {
      label: "Executive / C-Suite",
      icon: "fa-crown",
      color: "#c79a61",
      nav: [
        { section: "Overview" },
        {
          id: "overview",
          icon: "fa-chart-pie",
          label: "Executive Overview",
          active: true,
        },
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
      stats: [
        {
          icon: "fa-chart-line",
          color: "gold",
          value: "$4.2B",
          label: "Portfolio Value",
          trend: "+12.4%",
          dir: "up",
        },
        {
          icon: "fa-briefcase",
          color: "emerald",
          value: "38",
          label: "Active Engagements",
          trend: "+3",
          dir: "up",
        },
        {
          icon: "fa-users",
          color: "teal",
          value: "214",
          label: "Team Members",
          trend: "+8",
          dir: "up",
        },
        {
          icon: "fa-trophy",
          color: "gold",
          value: "97%",
          label: "Client Retention",
          trend: "+2%",
          dir: "up",
        },
      ],
    },
    manager: {
      label: "Senior Manager",
      icon: "fa-user-tie",
      color: "#1e564d",
      nav: [
        { section: "Overview" },
        {
          id: "overview",
          icon: "fa-gauge-high",
          label: "Dashboard",
          active: true,
        },
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
      stats: [
        {
          icon: "fa-diagram-project",
          color: "emerald",
          value: "5",
          label: "Active Projects",
          trend: "+1",
          dir: "up",
        },
        {
          icon: "fa-list-check",
          color: "teal",
          value: "28",
          label: "Open Tasks",
          trend: "-4",
          dir: "down",
        },
        {
          icon: "fa-users",
          color: "gold",
          value: "16",
          label: "Team Members",
          trend: "0",
          dir: "flat",
        },
        {
          icon: "fa-circle-check",
          color: "green",
          value: "84%",
          label: "On-Time Delivery",
          trend: "+6%",
          dir: "up",
        },
      ],
    },
    consultant: {
      label: "Consultant",
      icon: "fa-user-graduate",
      color: "#0c2b27",
      nav: [
        { section: "My Work" },
        {
          id: "overview",
          icon: "fa-house",
          label: "My Dashboard",
          active: true,
        },
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
      stats: [
        {
          icon: "fa-handshake",
          color: "emerald",
          value: "3",
          label: "Active Engagements",
          trend: "+1",
          dir: "up",
        },
        {
          icon: "fa-file-contract",
          color: "gold",
          value: "11",
          label: "Deliverables Due",
          trend: "-2",
          dir: "down",
        },
        {
          icon: "fa-building",
          color: "teal",
          value: "7",
          label: "Client Accounts",
          trend: "0",
          dir: "flat",
        },
        {
          icon: "fa-star",
          color: "gold",
          value: "4.8",
          label: "Client Rating",
          trend: "+0.2",
          dir: "up",
        },
      ],
    },
    analyst: {
      label: "Analyst",
      icon: "fa-magnifying-glass-chart",
      color: "#1e564d",
      nav: [
        { section: "Analytics" },
        {
          id: "overview",
          icon: "fa-chart-pie",
          label: "Analytics Hub",
          active: true,
        },
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
      stats: [
        {
          icon: "fa-database",
          color: "emerald",
          value: "24",
          label: "Data Sources",
          trend: "+3",
          dir: "up",
        },
        {
          icon: "fa-file-chart-column",
          color: "gold",
          value: "9",
          label: "Reports Generated",
          trend: "+2",
          dir: "up",
        },
        {
          icon: "fa-brain",
          color: "purple",
          value: "6",
          label: "Active Models",
          trend: "+1",
          dir: "up",
        },
        {
          icon: "fa-chart-line",
          color: "teal",
          value: "91%",
          label: "Model Accuracy",
          trend: "+3%",
          dir: "up",
        },
      ],
    },
    client: {
      label: "Client",
      icon: "fa-building-columns",
      color: "#c79a61",
      nav: [
        { section: "My Portal" },
        {
          id: "overview",
          icon: "fa-house",
          label: "My Overview",
          active: true,
        },
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
      stats: [
        {
          icon: "fa-diagram-project",
          color: "emerald",
          value: "2",
          label: "Active Projects",
          trend: "0",
          dir: "flat",
        },
        {
          icon: "fa-circle-check",
          color: "teal",
          value: "78%",
          label: "Project Progress",
          trend: "+12%",
          dir: "up",
        },
        {
          icon: "fa-receipt",
          color: "gold",
          value: "$0",
          label: "Outstanding",
          trend: "Paid",
          dir: "flat",
        },
        {
          icon: "fa-comments",
          color: "blue",
          value: "4",
          label: "Unread Messages",
          trend: "New",
          dir: "flat",
        },
      ],
    },
  };

  // ── Role-specific table data ─────────────────────────────────
  const ROLE_TABLE = {
    executive: {
      title: "Active Engagements",
      headers: ["Client", "Sector", "Value", "Lead", "Status"],
      rows: [
        ["Meridian Capital", "Finance", "$2.4M", "A. Chen", "active"],
        ["Vantage Group", "Technology", "$1.8M", "S. Patel", "review"],
        ["Orion Logistics", "Supply Chain", "$950K", "M. Torres", "active"],
        ["Apex Healthcare", "Healthcare", "$3.1M", "J. Williams", "pending"],
        ["Nexus Energy", "Energy", "$1.2M", "R. Kumar", "completed"],
      ],
    },
    manager: {
      title: "Project Status",
      headers: ["Project", "Client", "Deadline", "Progress", "Status"],
      rows: [
        [
          "Digital Transformation",
          "Meridian Capital",
          "Dec 15",
          "72%",
          "active",
        ],
        ["Market Entry Strategy", "Vantage Group", "Jan 8", "45%", "review"],
        ["Ops Optimization", "Orion Logistics", "Nov 30", "91%", "completed"],
        ["Risk Assessment", "Apex Healthcare", "Feb 1", "28%", "pending"],
        ["ESG Framework", "Nexus Energy", "Mar 15", "15%", "pending"],
      ],
    },
    consultant: {
      title: "My Deliverables",
      headers: ["Deliverable", "Client", "Due Date", "Type", "Status"],
      rows: [
        [
          "Market Analysis Report",
          "Meridian Capital",
          "Nov 28",
          "Report",
          "review",
        ],
        ["Competitive Landscape", "Vantage Group", "Dec 5", "Deck", "active"],
        ["Process Audit", "Orion Logistics", "Dec 12", "Audit", "pending"],
        ["Financial Model v2", "Apex Healthcare", "Dec 20", "Model", "pending"],
        ["Executive Summary", "Nexus Energy", "Nov 25", "Summary", "completed"],
      ],
    },
    analyst: {
      title: "Recent Reports",
      headers: ["Report", "Dataset", "Generated", "Records", "Status"],
      rows: [
        [
          "Q3 Revenue Analysis",
          "Finance DB",
          "Today 09:14",
          "48,200",
          "completed",
        ],
        ["Client Churn Model", "CRM Data", "Yesterday", "12,500", "active"],
        ["Market Sizing 2024", "External API", "Nov 20", "3,800", "review"],
        ["Ops Efficiency Score", "ERP System", "Nov 18", "22,100", "completed"],
        ["Risk Heatmap", "Risk DB", "Nov 15", "9,400", "pending"],
      ],
    },
    client: {
      title: "My Projects",
      headers: ["Project", "Consultant", "Start Date", "Progress", "Status"],
      rows: [
        ["Digital Transformation", "A. Chen", "Oct 1", "72%", "active"],
        ["Market Entry Strategy", "S. Patel", "Nov 5", "45%", "review"],
      ],
    },
  };

  // ── Activity Feed ────────────────────────────────────────────
  const ROLE_ACTIVITY = {
    executive: [
      {
        icon: "fa-chart-line",
        color: "gold",
        text: "<strong>Q3 Board Report</strong> approved and distributed",
        time: "2h ago",
      },
      {
        icon: "fa-handshake",
        color: "emerald",
        text: "New engagement signed with <strong>Apex Healthcare</strong>",
        time: "5h ago",
      },
      {
        icon: "fa-users",
        color: "teal",
        text: "<strong>3 new consultants</strong> onboarded to Nexus Energy project",
        time: "1d ago",
      },
      {
        icon: "fa-trophy",
        color: "gold",
        text: "Client satisfaction score reached <strong>97%</strong>",
        time: "2d ago",
      },
    ],
    manager: [
      {
        icon: "fa-circle-check",
        color: "green",
        text: "<strong>Ops Optimization</strong> milestone completed",
        time: "1h ago",
      },
      {
        icon: "fa-comment",
        color: "teal",
        text: "New comment on <strong>Market Entry Strategy</strong>",
        time: "3h ago",
      },
      {
        icon: "fa-user-plus",
        color: "emerald",
        text: "<strong>Sarah Kim</strong> added to Digital Transformation",
        time: "6h ago",
      },
      {
        icon: "fa-flag",
        color: "gold",
        text: "Risk Assessment flagged as <strong>high priority</strong>",
        time: "1d ago",
      },
    ],
    consultant: [
      {
        icon: "fa-file-circle-check",
        color: "green",
        text: "<strong>Executive Summary</strong> approved by client",
        time: "30m ago",
      },
      {
        icon: "fa-comment",
        color: "teal",
        text: "Feedback received on <strong>Market Analysis Report</strong>",
        time: "2h ago",
      },
      {
        icon: "fa-calendar-check",
        color: "emerald",
        text: "Meeting scheduled with <strong>Vantage Group</strong>",
        time: "4h ago",
      },
      {
        icon: "fa-upload",
        color: "gold",
        text: "<strong>Financial Model v2</strong> draft uploaded",
        time: "1d ago",
      },
    ],
    analyst: [
      {
        icon: "fa-database",
        color: "emerald",
        text: "<strong>Finance DB</strong> sync completed — 48,200 records",
        time: "1h ago",
      },
      {
        icon: "fa-brain",
        color: "purple",
        text: "Churn model accuracy improved to <strong>91%</strong>",
        time: "3h ago",
      },
      {
        icon: "fa-file-export",
        color: "gold",
        text: "<strong>Q3 Revenue Analysis</strong> exported to PDF",
        time: "5h ago",
      },
      {
        icon: "fa-triangle-exclamation",
        color: "red",
        text: "Anomaly detected in <strong>Risk Heatmap</strong> dataset",
        time: "1d ago",
      },
    ],
    client: [
      {
        icon: "fa-circle-check",
        color: "green",
        text: "<strong>Digital Transformation</strong> Phase 2 completed",
        time: "2h ago",
      },
      {
        icon: "fa-file-lines",
        color: "teal",
        text: "New report available: <strong>Progress Update Nov 2024</strong>",
        time: "1d ago",
      },
      {
        icon: "fa-comment",
        color: "emerald",
        text: "Message from <strong>A. Chen</strong> — please review",
        time: "1d ago",
      },
      {
        icon: "fa-receipt",
        color: "gold",
        text: "Invoice #INV-2024-089 marked as <strong>paid</strong>",
        time: "3d ago",
      },
    ],
  };

  // ── Progress items ───────────────────────────────────────────
  const ROLE_PROGRESS = {
    executive: [
      { l: "Revenue Growth", p: 82 },
      { l: "Client Retention", p: 97 },
      { l: "Team Utilization", p: 74 },
    ],
    manager: [
      { l: "On-Time Delivery", p: 84 },
      { l: "Budget Adherence", p: 91 },
      { l: "Team Capacity", p: 68 },
    ],
    consultant: [
      { l: "Deliverables Done", p: 64 },
      { l: "Client Satisfaction", p: 96 },
      { l: "Billable Hours", p: 78 },
    ],
    analyst: [
      { l: "Model Accuracy", p: 91 },
      { l: "Data Coverage", p: 87 },
      { l: "Report Completion", p: 72 },
    ],
    client: [
      { l: "Project Progress", p: 72 },
      { l: "Milestone Completion", p: 60 },
      { l: "Budget Used", p: 45 },
    ],
  };

  // ── Quick Actions ────────────────────────────────────────────
  const ROLE_QUICK = {
    executive: [
      { icon: "fa-file-chart-line", label: "Board Report" },
      { icon: "fa-users-gear", label: "Manage Team" },
      { icon: "fa-chess", label: "Strategy Map" },
      { icon: "fa-coins", label: "Financials" },
    ],
    manager: [
      { icon: "fa-plus", label: "New Project" },
      { icon: "fa-list-check", label: "Task Board" },
      { icon: "fa-calendar-plus", label: "Schedule" },
      { icon: "fa-file-lines", label: "Reports" },
    ],
    consultant: [
      { icon: "fa-file-circle-plus", label: "New Deliverable" },
      { icon: "fa-calendar-check", label: "Book Meeting" },
      { icon: "fa-book-open", label: "Resources" },
      { icon: "fa-copy", label: "Templates" },
    ],
    analyst: [
      { icon: "fa-plus", label: "New Report" },
      { icon: "fa-database", label: "Data Sources" },
      { icon: "fa-brain", label: "Run Model" },
      { icon: "fa-file-export", label: "Export" },
    ],
    client: [
      { icon: "fa-comments", label: "Message Team" },
      { icon: "fa-calendar-check", label: "Book Meeting" },
      { icon: "fa-file-lines", label: "View Reports" },
      { icon: "fa-receipt", label: "Invoices" },
    ],
  };

  // ── Helpers ──────────────────────────────────────────────────
  function initials(name) {
    return name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }

  function formatRole(role) {
    return ROLE_CONFIG[role]?.label || role;
  }

  function statusHtml(status) {
    const map = {
      active: "Active",
      pending: "Pending",
      review: "In Review",
      completed: "Completed",
      critical: "Critical",
    };
    return `<span class="db-status ${status}">${map[status] || status}</span>`;
  }

  function trendHtml(trend, dir) {
    const icon =
      dir === "up"
        ? "fa-arrow-trend-up"
        : dir === "down"
          ? "fa-arrow-trend-down"
          : "fa-minus";
    return `<span class="db-stat-trend ${dir}"><i class="fas ${icon}"></i>${trend}</span>`;
  }

  const FOLDER_MAP = {
    executive: "executive-or-csuite",
    manager: "senior-manager",
    consultant: "consultants",
    analyst: "analyst",
    client: "clients",
  };

  const FILE_MAP = {
    executive: {
      overview: "dashboard.html",
      performance: "performance-kpi.html",
      portfolio: "portfolio.html",
      team: "team.html",
      reports: "board-reports.html",
      strategy: "strategy-map.html",
      financials: "financials.html",
      budget: "budget-allocation.html",
    },
    manager: {
      overview: "dashboard.html",
      projects: "projects.html",
      team: "my-team.html",
      tasks: "task-board.html",
      timeline: "timeline.html",
      resources: "resources.html",
      reports: "reports.html",
      analytics: "analytics.html",
    },
    consultant: {
      overview: "dashboard.html",
      engagements: "engagements.html",
      deliverables: "deliverables.html",
      clients: "client-accounts.html",
      meetings: "meetings.html",
      library: "resource-library.html",
      templates: "templates.html",
    },
    analyst: {
      overview: "dashboard.html",
      data: "data-sources.html",
      models: "models-and-insights.html",
      reports: "reports.html",
      scheduled: "scheduled-reports.html",
      workspace: "workspace.html",
      exports: "exports.html",
    },
    client: {
      overview: "dashboard.html",
      projects: "my-projects.html",
      reports: "reports-and-docs.html",
      messages: "messages.html",
      meetings: "meetings.html",
      invoices: "invoices.html",
      contracts: "contracts.html",
    },
  };

  // ── Build Sidebar ────────────────────────────────────────────
  function buildSidebar(role, config) {
    const nav = config.nav;
    let html = "";
    nav.forEach((item) => {
      if (item.section) {
        html += `<div class="db-sidebar-section-label">${item.section}</div>`;
      } else {
        const badge = item.badge
          ? `<span class="db-nav-badge">${item.badge}</span>`
          : "";
        let href = "#";
        if (item.id !== "overview") {
          const folder = FOLDER_MAP[role];
          const file = FILE_MAP[role][item.id];
          if (folder && file) {
            href = `dashboard/${folder}/${file}`;
          }
        }
        html += `
          <a href="${href}" class="db-nav-item${item.active ? " active" : ""}" data-section="${item.id}">
            <span class="db-nav-icon"><i class="fas ${item.icon}"></i></span>
            <span>${item.label}</span>
            ${badge}
          </a>`;
      }
    });
    return html;
  }

  // ── Build Stats ──────────────────────────────────────────────
  function buildStats(stats) {
    return stats
      .map(
        (s) => `
      <div class="col-12 col-sm-6 col-xl-3">
        <div class="db-stat-card">
          <div class="db-stat-icon ${s.color}"><i class="fas ${s.icon}"></i></div>
          <div class="db-stat-value">${s.value}</div>
          <div class="db-stat-label">${s.label}</div>
          ${trendHtml(s.trend, s.dir)}
        </div>
      </div>`,
      )
      .join("");
  }

  // ── Build Table ──────────────────────────────────────────────
  function buildTable(role) {
    const t = ROLE_TABLE[role];
    if (!t) return "";
    const headers = t.headers.map((h) => `<th>${h}</th>`).join("");
    const rows = t.rows
      .map((r) => {
        const cells = r
          .map((cell, i) => {
            if (i === t.headers.length - 1)
              return `<td>${statusHtml(cell)}</td>`;
            if (
              cell.endsWith("%") &&
              i === t.headers.length - 2 &&
              t.headers[i] === "Progress"
            ) {
              const pct = parseInt(cell);
              return `<td>
            <div style="display:flex;align-items:center;gap:8px;">
              <div class="db-progress-track" style="flex:1;height:5px;">
                <div class="db-progress-fill" style="width:${pct}%"></div>
              </div>
              <span style="font-size:0.75rem;font-weight:700;color:var(--accent-color);min-width:32px">${cell}</span>
            </div>
          </td>`;
            }
            return `<td>${cell}</td>`;
          })
          .join("");
        return `<tr>${cells}</tr>`;
      })
      .join("");
    return `
      <div class="db-section-card">
        <div class="db-section-header">
          <h6 class="db-section-title"><i class="fas fa-table-list"></i>${t.title}</h6>
          <a href="#" class="db-view-all">View All <i class="fas fa-arrow-right"></i></a>
        </div>
        <div class="db-table-wrapper">
          <table class="db-table">
            <thead><tr>${headers}</tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>`;
  }

  // ── Build Activity ───────────────────────────────────────────
  function buildActivity(role) {
    const items = ROLE_ACTIVITY[role] || [];
    return items
      .map(
        (a) => `
      <div class="db-activity-item">
        <div class="db-activity-dot db-stat-icon ${a.color}"><i class="fas ${a.icon}"></i></div>
        <div class="db-activity-text">${a.text}</div>
        <div class="db-activity-time">${a.time}</div>
      </div>`,
      )
      .join("");
  }

  // ── Build Progress ───────────────────────────────────────────
  function buildProgress(role) {
    const items = ROLE_PROGRESS[role] || [];
    return items
      .map(
        (p) => `
      <div class="db-progress-wrap">
        <div class="db-progress-header">
          <span class="db-progress-label">${p.l}</span>
          <span class="db-progress-pct">${p.p}%</span>
        </div>
        <div class="db-progress-track">
          <div class="db-progress-fill" style="width:${p.p}%"></div>
        </div>
      </div>`,
      )
      .join("");
  }

  // ── Build Quick Actions ──────────────────────────────────────
  function buildQuickActions(role) {
    const items = ROLE_QUICK[role] || [];
    return items
      .map(
        (q) => `
      <a href="#" class="db-quick-btn">
        <i class="fas ${q.icon}"></i>
        <span>${q.label}</span>
      </a>`,
      )
      .join("");
  }

  // ── Render Dashboard ─────────────────────────────────────────
  function renderDashboard(userData) {
    const role = userData.role || "consultant";
    const email = userData.email || "user@company.com";
    const config = ROLE_CONFIG[role] || ROLE_CONFIG.consultant;
    const name = email
      .split("@")[0]
      .replace(/[._]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    const abbr = initials(name);
    const now = new Date();
    const dateStr = now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const hour = now.getHours();
    const greeting =
      hour < 12
        ? "Good Morning"
        : hour < 17
          ? "Good Afternoon"
          : "Good Evening";

    // Topbar
    document.getElementById("db-user-name").textContent = name;
    document.getElementById("db-user-role-badge").textContent = config.label;
    document.getElementById("db-user-avatar").textContent = abbr;
    document.getElementById("db-topbar-title").textContent =
      config.label + " Portal";

    // Sidebar
    document.getElementById("db-sidebar-nav").innerHTML = buildSidebar(
      role,
      config,
    );

    // Page header
    document.getElementById("db-greeting").innerHTML =
      `${greeting}, <span>${name.split(" ")[0]}</span> 👋`;
    document.getElementById("db-greeting-sub").textContent =
      `Welcome to your ${config.label} dashboard. Here's your overview for today.`;
    document.getElementById("db-date-badge").innerHTML =
      `<i class="fas fa-calendar-days"></i>${dateStr}`;

    // Profile card
    document.getElementById("db-profile-avatar-lg").textContent = abbr;
    document.getElementById("db-profile-name").textContent = name;
    document.getElementById("db-profile-email").textContent = email;
    document.getElementById("db-profile-role-tag").innerHTML =
      `<i class="fas ${config.icon}"></i>${config.label}`;

    // Stats
    document.getElementById("db-stats-row").innerHTML = buildStats(
      config.stats,
    );

    // Table
    document.getElementById("db-table-section").innerHTML = buildTable(role);

    // Activity
    document.getElementById("db-activity-feed").innerHTML = buildActivity(role);

    // Progress
    document.getElementById("db-progress-section").innerHTML =
      buildProgress(role);

    // Quick actions
    document.getElementById("db-quick-actions").innerHTML =
      buildQuickActions(role);
  }

  // ── Init ─────────────────────────────────────────────────────
  document.addEventListener("DOMContentLoaded", function () {
    // Read login data
    const raw = sessionStorage.getItem("stackly_user");
    if (!raw) {
      window.location.href = "login.html";
      return;
    }

    let userData;
    try {
      userData = JSON.parse(raw);
    } catch (e) {
      window.location.href = "login.html";
      return;
    }

    renderDashboard(userData);

    // Sidebar toggle (mobile)
    const toggleBtn = document.getElementById("db-sidebar-toggle");
    const sidebar = document.getElementById("db-sidebar");
    const overlay = document.getElementById("db-sidebar-overlay");

    function toggleSidebar() {
      sidebar.classList.toggle("open");
      overlay.classList.toggle("show");
    }
    function closeSidebar() {
      sidebar.classList.remove("open");
      overlay.classList.remove("show");
    }

    if (toggleBtn) toggleBtn.addEventListener("click", toggleSidebar);
    if (overlay) overlay.addEventListener("click", closeSidebar);

    // Nav item click
    document
      .getElementById("db-sidebar-nav")
      .addEventListener("click", function (e) {
        const item = e.target.closest(".db-nav-item");
        if (!item) return;
        if (item.getAttribute("href") === "#") {
          e.preventDefault();
        }
        document
          .querySelectorAll(".db-nav-item")
          .forEach((n) => n.classList.remove("active"));
        item.classList.add("active");
        if (window.innerWidth < 992) closeSidebar();
      });

    // Logout
    document
      .getElementById("db-logout-btn")
      .addEventListener("click", function (e) {
        e.preventDefault();
        sessionStorage.removeItem("stackly_user");
        window.location.href = "login.html";
      });

    // Date badge
    document.getElementById("db-date-badge");
  });
})();
