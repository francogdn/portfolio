/** Portfolio project data — public descriptions only; no private source links. */
window.PORTFOLIO_PROJECTS = [
  {
    id: "unlock-swedish",
    name: "Unlock Swedish",
    tagline: "A web-first PWA for studying the 3,000 most frequent Swedish lemmas.",
    summary:
      "Flip-card study flow with bundled pronunciation audio, local progress tracking, and an offline-capable lexicon loaded in the browser.",
    architecture: [
      "Build-time pipeline turns open lexicon sources into a SQLite database",
      "Browser runtime reads the DB via sql.js — no backend required",
      "Progress stays on-device; installable as a Progressive Web App",
    ],
    stack: ["React", "TypeScript", "Vite", "SQLite / sql.js", "PWA"],
    testing: null,
    visual: {
      type: "image",
      src: "assets/projects/unlock-swedish-front.png",
      alt: "Unlock Swedish flip-card study screen",
    },
    diagram: "assets/diagrams/unlock.svg",
  },
  {
    id: "agileway-eu",
    name: "Agile Way — Course booking",
    tagline: "Training calendar, checkout, and admin for Agile Way courses.",
    summary:
      "Full-stack booking experience: public course discovery, seat-aware checkout, transactional email, and an operator portal for courses and reservations.",
    architecture: [
      "SvelteKit app serves public and admin surfaces from one codebase",
      "SQLite with Drizzle migrations as the system of record",
      "Hosted checkout + webhooks for payments; soft-delete for safe archival",
    ],
    stack: ["SvelteKit", "TypeScript", "Tailwind CSS", "SQLite", "Drizzle", "Docker"],
    testing: {
      label: "Unit, integration & e2e",
      detail: "Vitest suites plus Playwright end-to-end coverage across booking and admin flows.",
    },
    visual: {
      type: "diagram",
      src: "assets/diagrams/agileway.svg",
      alt: "Architecture diagram for Agile Way booking",
    },
  },
  {
    id: "agileway-it",
    name: "Agile Way — Site & CMS",
    tagline: "Italian marketing site, blog, and content admin for Agile Way.",
    summary:
      "Public pages and Markdown-driven blog paired with an authenticated CMS for homepage content, legal pages, media, and settings.",
    architecture: [
      "SvelteKit SSR for public content; SQLite/Drizzle for CMS state",
      "File-based blog content alongside database-backed editable sections",
      "Optional checkout integration for related learning products",
    ],
    stack: ["SvelteKit", "TypeScript", "Tailwind CSS", "SQLite", "Drizzle", "Docker"],
    testing: {
      label: "Unit, integration & e2e",
      detail: "Vitest unit/integration tests and Playwright e2e for public and admin paths.",
    },
    visual: {
      type: "diagram",
      src: "assets/diagrams/agileway.svg",
      alt: "Architecture diagram for Agile Way site and CMS",
    },
  },
  {
    id: "agileway-assess",
    name: "Agile Way Assess",
    tagline: "Self-hosted quiz engine that replaces LearnDash-style assessments.",
    summary:
      "Composable quizzes and parent assessments with scored attempts, guest or authenticated learners, and analytics-friendly attempt storage.",
    architecture: [
      "JWT-gated access aligned with the main Agile Way identity cookies",
      "Quiz / mode / parent composition model in SQLite via Drizzle",
      "Learner UI renders single- and multi-answer flows with persisted attempts",
    ],
    stack: ["SvelteKit", "TypeScript", "SQLite", "Drizzle", "Tailwind CSS", "Docker"],
    testing: {
      label: "Unit, integration & e2e",
      detail: "Focused Vitest coverage for quiz/auth logic plus Playwright e2e.",
    },
    visual: {
      type: "diagram",
      src: "assets/diagrams/assess.svg",
      alt: "Architecture diagram for Agile Way Assess",
    },
  },
  {
    id: "aw-invoices",
    name: "AW Invoices",
    tagline: "CLI that turns checkout payments into custom invoice PDFs.",
    summary:
      "Reads payment data from Stripe Checkout sessions and generates invoice or credit-note PDFs, with optional email delivery for operators.",
    architecture: [
      "Go CLI pipeline: fetch → map → render → deliver",
      "Local SQLite for operational state and retention policy",
      "File and email delivery modes; refunds originate elsewhere and are reflected on credit notes",
    ],
    stack: ["Go", "Cobra", "SQLite", "HTML/PDF rendering", "Docker"],
    testing: {
      label: "Unit & integration",
      detail: "Broad go test coverage across mapping, render, storage, and integration-tagged suites.",
    },
    visual: {
      type: "diagram",
      src: "assets/diagrams/aw-invoices.svg",
      alt: "Architecture diagram for AW Invoices",
    },
  },
  {
    id: "trademark-watch",
    name: "Trademark Watch",
    tagline: "Watchlist matching for newly published trademark filings.",
    summary:
      "Pulls filings from trademark providers, scores similarity against configured brands, and surfaces matches in a dashboard with alert hooks.",
    architecture: [
      "Provider adapters feed a normalize + similarity pipeline",
      "Only matching records are persisted — keeps storage small",
      "CLI for scheduled runs; server-rendered HTML dashboard for review",
    ],
    stack: ["Go", "SQLite", "HTML dashboard", "SMTP alerts"],
    testing: {
      label: "Unit tests",
      detail: "Similarity, normalization, filters, config, and provider-focused Go tests.",
    },
    visual: {
      type: "diagram",
      src: "assets/diagrams/trademark.svg",
      alt: "Architecture diagram for Trademark Watch",
    },
  },
  {
    id: "jobhunter",
    name: "Jobhunter",
    tagline: "Homelab vacancy sync with HTMX admin and MCP tooling.",
    summary:
      "Scrapes broker portals into SQLite, exposes an operator UI, and serves vacancy/CV helpers to agents over MCP.",
    architecture: [
      "Playwright-assisted scrape using an operator login session",
      "SQLite as the job store; HTMX admin for brokers and review",
      "MCP server (stdio and HTTP) for agent-readable vacancy tools",
    ],
    stack: ["Python", "FastAPI", "SQLAlchemy", "HTMX", "Playwright", "MCP", "Docker"],
    testing: {
      label: "Extensive pytest suite",
      detail: "Auth, CV pipeline, scraping helpers, and service tests under a dedicated tests/ tree.",
    },
    visual: {
      type: "diagram",
      src: "assets/diagrams/jobhunter.svg",
      alt: "Architecture diagram for Jobhunter",
    },
  },
  {
    id: "hermes-dashboard",
    name: "Hermes Ops Dashboard",
    tagline: "Internal ops dashboard for a multi-profile Hermes harness.",
    summary:
      "A collector posts redacted telemetry snapshots to an ingest API — the only writer to SQLite — while a React UI reads operational state.",
    architecture: [
      "Edge collector gathers allowlisted, redacted telemetry on a schedule",
      "FastAPI owns all writes (WAL SQLite); dashboard is read-only via REST",
      "Compose-based deploy for API and UI as separate services",
    ],
    stack: ["FastAPI", "SQLAlchemy", "Alembic", "React", "TypeScript", "Vite", "TanStack Query"],
    testing: {
      label: "API + UI tests",
      detail: "pytest for ingest/read surfaces; component and page tests on the React app.",
    },
    visual: {
      type: "diagram",
      src: "assets/diagrams/hermes.svg",
      alt: "Architecture diagram for Hermes Ops Dashboard",
    },
  },
  {
    id: "homelab-ansible",
    name: "Homelab Ansible",
    tagline: "Ansible control layout for Proxmox and homelab health reporting.",
    summary:
      "Inventory, roles, and playbooks with custom filters and a stdout callback that prints readable multi-host health summaries.",
    architecture: [
      "Control-node layout: inventory, roles, playbooks, plugins",
      "Custom filters for human-readable uptime and storage sizes",
      "homelab_report callback formats structured health output",
    ],
    stack: ["Ansible", "Python plugins", "Proxmox-oriented inventory"],
    testing: {
      label: "Plugin tests",
      detail: "pytest coverage for filters, callback formatting, and report templates.",
    },
    visual: {
      type: "diagram",
      src: "assets/diagrams/ansible.svg",
      alt: "Architecture diagram for Homelab Ansible",
    },
  },
  {
    id: "gexport",
    name: "gexport",
    tagline: "TUI and CLI for encrypted Google account backups.",
    summary:
      "Orchestrates Drive, Gmail, and Takeout-oriented backups through an isolated rclone config with encryption before upload.",
    architecture: [
      "Bubble Tea TUI plus headless CLI for the same backup core",
      "Isolated rclone configuration — does not touch the user global config",
      "crypt backend encrypts payloads before remote storage",
    ],
    stack: ["Go", "Bubble Tea", "rclone", "crypt"],
    testing: {
      label: "Unit tests",
      detail: "Backup, config, rate-limit, and TUI screen tests with dedicated test helpers.",
    },
    visual: {
      type: "diagram",
      src: "assets/diagrams/gexport.svg",
      alt: "Architecture diagram for gexport",
    },
  },
  {
    id: "restore-assistant",
    name: "Restore Assistant",
    tagline: "Guided TUI for restoring rclone and Proxmox backups.",
    summary:
      "Menu-driven Bash tool that browses remotes and restores generic archives or Proxmox VM/CT backups with progress feedback.",
    architecture: [
      "dialog/whiptail menus over rclone remotes (including encrypted)",
      "Branching flows for file restores vs Proxmox qmrestore/pct paths",
      "Host detection to enable Proxmox-specific actions when available",
    ],
    stack: ["Bash", "rclone", "dialog / whiptail"],
    testing: null,
    visual: {
      type: "diagram",
      src: "assets/diagrams/restore.svg",
      alt: "Architecture diagram for Restore Assistant",
    },
  },
  {
    id: "lab-automenu",
    name: "Lab Automenu",
    tagline: "Lightweight browser launcher for homelab services.",
    summary:
      "A JSON-driven HTML menu served from a tiny PHP container so operators can open common lab endpoints quickly.",
    architecture: [
      "Static HTML UI reads a local menu.json catalog",
      "Optional PHP endpoint persists menu edits",
      "Packaged as a small Docker image with PHP’s built-in server",
    ],
    stack: ["HTML", "JSON", "PHP", "Docker"],
    testing: null,
    visual: {
      type: "diagram",
      src: "assets/diagrams/labmenu.svg",
      alt: "Architecture diagram for Lab Automenu",
    },
  },
  {
    id: "vatconverter",
    name: "VAT Converter",
    tagline: "Spring Boot jobs for EUR/SEK conversion on invoicing workflows.",
    summary:
      "Scheduled services pull ECB reference rates, cache them, and process invoice-related currency conversion for SEK/EUR use cases.",
    architecture: [
      "Spring Boot application with scheduled rate and invoice jobs",
      "ECB rate fetch with Redis-backed caching",
      "Downstream processing for converted invoice artifacts",
    ],
    stack: ["Java 21", "Spring Boot", "Redis", "Maven"],
    testing: {
      label: "JUnit",
      detail: "Service and utility tests for ECB handling and currency helpers.",
    },
    visual: {
      type: "diagram",
      src: "assets/diagrams/vat.svg",
      alt: "Architecture diagram for VAT Converter",
    },
  },
];
