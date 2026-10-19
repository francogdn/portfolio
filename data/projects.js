/** Portfolio project data. Public descriptions only; no private source links. */
window.PORTFOLIO_PROJECTS = [
  {
    id: "desk",
    name: "Desk",
    badge: "Personal CRM",
    tagline:
      "Personal CRM for coaching relationships, sessions, and related operations.",
    summary:
      "Modular Spring Boot + Svelte CRM for coaching work: contacts, engagements (including confidential participants), assets, training ops, and a shared activity timeline. API-first so the UI stays a thin client.",
    architecture: [
      "Modular monolith by capability (contacts, coaching, assets, training, activities), not microservices",
      "Session-secured REST API with OpenAPI; PostgreSQL via JPA and Flyway",
      "Svelte 5 SPA as the presentation layer over that API",
    ],
    stack: [
      "Spring Boot",
      "Java 25",
      "Maven",
      "Spring Data JPA",
      "Flyway",
      "PostgreSQL",
      "Svelte",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "OpenAPI",
    ],
    testing: {
      detail:
        "Spring Boot integration and API tests with H2; Playwright browser E2E for critical CRM flows.",
    },
    visual: {
      type: "video",
      src: "assets/projects/desk-demo.mp4",
      alt: "Desk personal CRM demo walkthrough",
    },
  },
  {
    id: "agileway-eu",
    name: "Agile Way: Course booking",
    badge: "Live booking",
    tagline:
      "Public course calendar with seat-aware checkout and an operator portal.",
    summary:
      "End-to-end booking for Agile Way trainings: discovery, paid checkout, confirmation email, and admin tools for courses and reservations, built as one SvelteKit product in production at agileway.eu.",
    liveUrl: "https://www.agileway.eu/",
    architecture: [
      "One SvelteKit codebase for public booking and admin so seat inventory and payments stay consistent",
      "Hosted checkout with webhooks that confirm payment and update remaining seats",
      "Operator workflows for courses and reservations without a separate admin stack",
    ],
    stack: ["SvelteKit", "TypeScript", "Tailwind CSS", "Docker"],
    testing: {
      detail:
        "Vitest suites plus Playwright coverage across booking and admin flows.",
    },
    visual: {
      type: "image",
      src: "assets/projects/agileway-eu-home.png",
      alt: "Agile Way course booking homepage",
    },
  },
  {
    id: "agileway-it",
    name: "Agile Way: Site & CMS",
    badge: "Marketing CMS",
    tagline: "Italian marketing site and content admin for Agile Way.",
    summary:
      "SSR marketing site and blog with an authenticated CMS so non-engineers can update homepage, legal pages, media, and settings without redeploys.",
    liveUrl: "https://www.agileway.it/",
    architecture: [
      "SvelteKit SSR for public pages; authenticated portal for editorial edits",
      "Markdown blog content alongside structured CMS sections",
      "Same product family as booking and assess: shared brand surface, separate operational concerns",
    ],
    stack: ["SvelteKit", "TypeScript", "Tailwind CSS", "Docker"],
    testing: {
      detail:
        "Vitest unit and integration tests; Playwright e2e for public and admin paths.",
    },
    visual: {
      type: "image",
      src: "assets/projects/agileway-it-home.png",
      alt: "Agile Way Italian site homepage with featured course and articles",
    },
  },
  {
    id: "agileway-assess",
    name: "Agile Way Assess",
    badge: "Quiz engine",
    tagline:
      "Self-hosted quiz engine with a free practice demo and Stripe-gated full access.",
    summary:
      "Composable assessments for Scrum exam practice: scored attempts for guests or signed-in learners, a free public demo, and paid unlock after checkout, tied to Agile Way identity.",
    liveUrl:
      "https://www.agileway.it/simulatore/psmi-gratis/simulatore-esame-psmi-demo",
    architecture: [
      "Access gated with Agile Way auth so paid quizzes stay tied to the main account model",
      "Quiz, mode, and parent composition for multi-part assessments",
      "Free demo path plus paid access unlocked after Stripe checkout",
    ],
    stack: ["SvelteKit", "TypeScript", "Tailwind CSS", "Docker", "Stripe"],
    testing: {
      detail:
        "Focused Vitest coverage for quiz and auth logic plus Playwright e2e.",
    },
    visual: {
      type: "image",
      src: "assets/projects/agileway-assess-demo.png",
      alt: "Agile Way Assess free PSM I practice demo",
    },
  },
  {
    id: "aw-invoices",
    name: "Agile Way invoicing system",
    badge: "Invoice PDFs",
    tagline:
      "Operator CLI that turns Stripe Checkout payments into VAT-aware invoice PDFs.",
    summary:
      "Fetches checkout payment data, renders invoice or credit-note PDFs with EUR→SEK conversion via ECB rates and VAT disclosure, then delivers by file or email for operators.",
    architecture: [
      "Go CLI pipeline: fetch Stripe sessions, map domain fields, render PDF, deliver",
      "ECB reference rates for EUR→SEK conversion on invoice disclosures",
      "File and email delivery; credit notes reflect refunds that originate elsewhere",
    ],
    stack: ["Go", "Cobra", "HTML/PDF rendering", "Docker"],
    testing: {
      detail:
        "Broad go test coverage across mapping, render, storage, and integration-tagged suites.",
    },
    visual: {
      type: "diagram",
      src: "assets/diagrams/aw-invoices.svg",
      alt: "Architecture diagram for Agile Way invoicing system",
    },
  },
  {
    id: "content-intelligence",
    name: "Content Intelligence",
    badge: "Editorial ops",
    tagline:
      "Brand knowledge, editorial workspace, and approval-gated publishing for agents and operators.",
    summary:
      "Content ops layer where agents draft against per-brand knowledge while operators review briefs, SEO packages, and calendar work. Live publishing is never automatic.",
    architecture: [
      "One backend shared by a web UI and MCP so agents write while humans approve",
      "Brand knowledge on disk so it can move to a shared volume later",
      "Draft-first destinations: git markdown, WordPress, and local files",
    ],
    stack: ["Python", "FastAPI", "SQLite", "React", "Vite", "MCP", "Docker"],
    testing: null,
    visual: {
      type: "image",
      src: "assets/projects/content-intelligence.png",
      alt: "Content Intelligence operator UI for brand editorial work",
    },
  },
  {
    id: "trademark-watch",
    name: "Trademark Watch",
    badge: "Filing alerts",
    tagline: "Watchlist matching for newly published trademark filings.",
    summary:
      "Ingests filings from trademark providers, scores similarity against configured brands, and surfaces only the matches that matter, with dashboard review and alert hooks.",
    architecture: [
      "Provider adapters feed a normalize-and-similarity pipeline",
      "Only matching records are persisted, which keeps storage small and review focused",
      "CLI for scheduled runs; server-rendered HTML dashboard for operators",
    ],
    stack: ["Go", "HTML dashboard", "SMTP alerts"],
    testing: {
      detail:
        "Go unit tests for similarity, normalization, filters, config, and providers.",
    },
    visual: {
      type: "diagram",
      src: "assets/diagrams/trademark.svg",
      alt: "Architecture diagram for Trademark Watch",
    },
  },
  {
    id: "hermes-dashboard",
    name: "AI Harness Operations Dashboard",
    badge: "AI fleet ops",
    tagline:
      "Health and activity dashboard for an eight-bot AI fleet controlled from Telegram.",
    summary:
      "Read-only ops view across a personal AI fleet: a collector posts redacted telemetry to an ingest API (the only writer) while a React UI shows health and current activity.",
    architecture: [
      "Edge collector gathers allowlisted, redacted telemetry on a schedule",
      "API owns all writes; dashboard is read-only via REST",
      "API and UI deploy as separate Compose services",
    ],
    stack: [
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "React",
      "TypeScript",
      "Vite",
      "TanStack Query",
    ],
    testing: {
      detail:
        "pytest for ingest and read surfaces; component and page tests on the React app.",
    },
    visual: {
      type: "image",
      src: "assets/projects/hermes-dashboard.png",
      alt: "AI Harness Operations Dashboard fleet overview with healthy profile cards",
    },
  },
  {
    id: "homelab-ansible",
    name: "Homelab Ansible",
    badge: "Homelab control",
    tagline: "Ansible layout for Proxmox fleet health and readable multi-host reports.",
    summary:
      "Inventory, roles, and playbooks that turn Proxmox and lab host checks into clear multi-host health summaries, built for reliable day-two operations rather than one-off scripts.",
    architecture: [
      "Control-node layout: inventory, roles, playbooks, and plugins in one place",
      "Custom filters for human-readable uptime and storage sizes",
      "Stdout callback that formats structured health output across hosts",
    ],
    stack: ["Ansible", "Python plugins", "Proxmox-oriented inventory"],
    testing: {
      detail:
        "pytest coverage for filters, callback formatting, and report templates.",
    },
    visual: {
      type: "diagram",
      src: "assets/diagrams/ansible.svg",
      alt: "Architecture diagram for Homelab Ansible",
    },
  },
  {
    id: "restore-assistant",
    name: "Restore Assistant",
    badge: "Backup restore",
    tagline:
      "Guided restore for rclone and Proxmox backups, safer than ad-hoc restore commands.",
    summary:
      "Menu-driven Bash tool that browses remotes and walks operators through file or Proxmox VM/CT restores with progress feedback, reducing risky one-off restore commands.",
    architecture: [
      "Guided menus over rclone remotes, including encrypted ones",
      "Separate flows for generic archives vs Proxmox qmrestore and pct paths",
      "Host detection enables Proxmox-specific actions only when available",
    ],
    stack: ["Bash", "rclone", "dialog / whiptail"],
    testing: null,
    visual: {
      type: "image",
      src: "assets/projects/restore-assistant.png",
      alt: "Restore Assistant TUI menu for rclone and Proxmox restores",
    },
  },
  {
    id: "jobhunter",
    name: "Jobhunter",
    badge: "Vacancy sync",
    tagline:
      "Local vacancy sync with an operator UI and MCP tools for agents.",
    summary:
      "Scrapes broker portals into a local store, gives operators an HTMX admin for review, and exposes vacancy and CV helpers to agents over MCP.",
    architecture: [
      "Playwright-assisted scrape using an operator login session",
      "HTMX admin for brokers, settings, and review",
      "MCP server (stdio and HTTP) so agents can query vacancies and CV helpers",
    ],
    stack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "HTMX",
      "Playwright",
      "MCP",
      "Docker",
    ],
    testing: {
      detail:
        "Extensive pytest suite for auth, CV pipeline, scraping helpers, and services.",
    },
    visual: {
      type: "image",
      src: "assets/projects/jobhunter-admin.png",
      alt: "Jobhunter Settings page for scrape delays and run defaults",
    },
  },
  {
    id: "lab-automenu",
    name: "Lab Automenu",
    badge: "Service launcher",
    tagline: "Browser launcher for common homelab service endpoints.",
    summary:
      "JSON-driven HTML menu in a tiny PHP container so operators can open frequent lab endpoints without hunting bookmarks or ports.",
    architecture: [
      "Static HTML UI reads a local menu.json catalog",
      "Small PHP endpoint persists menu edits when needed",
      "Packaged as a minimal Docker image for quick local deploy",
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
    id: "gexport",
    name: "gexport",
    badge: "Encrypted backup",
    tagline: "TUI and CLI for encrypted Google account backups.",
    summary:
      "Orchestrates Drive, Gmail, and Takeout-oriented backups through an isolated rclone config, encrypting payloads before they leave the machine.",
    architecture: [
      "Bubble Tea TUI plus headless CLI share the same backup core",
      "Isolated rclone configuration that does not touch the user global config",
      "Encryption before remote storage so backups stay protected at rest",
    ],
    stack: ["Go", "Bubble Tea", "rclone", "crypt"],
    testing: {
      detail:
        "Unit tests for backup, config, rate-limit, and TUI screens with dedicated helpers.",
    },
    visual: {
      type: "image",
      src: "assets/projects/gexport-tui.png",
      alt: "gexport TUI main menu for Google account backups",
    },
  },
  {
    id: "unlock-swedish",
    name: "Unlock Swedish",
    badge: "Study PWA",
    tagline:
      "Offline-capable PWA for studying the 3,000 most frequent Swedish lemmas.",
    summary:
      "Flip-card study flow with pronunciation audio and on-device progress. No backend required; installable as a Progressive Web App.",
    architecture: [
      "Build-time pipeline turns open lexicon sources into a SQLite database",
      "Browser runtime reads the DB via sql.js with no server dependency",
      "Progress stays on-device; installable as a Progressive Web App",
    ],
    stack: ["React", "TypeScript", "Vite", "SQLite / sql.js", "PWA"],
    testing: null,
    visual: {
      type: "image",
      src: "assets/projects/unlock-swedish-front.png",
      alt: "Unlock Swedish flip-card study screen for the Core 3,000 words deck",
    },
  },
  {
    id: "vatconverter",
    name: "VAT Converter",
    badge: "Rate jobs",
    tagline:
      "Scheduled EUR/SEK conversion service that fed earlier invoicing workflows.",
    summary:
      "Production Spring Boot service that pulled ECB reference rates on a schedule, cached them, and converted invoice-related amounts, later superseded by the Go invoicing CLI.",
    architecture: [
      "Spring Boot jobs for rate fetch and invoice-related conversion",
      "ECB rate fetch with Redis-backed caching for reliable reuse",
      "Downstream processing for converted invoice artifacts",
    ],
    stack: ["Java 21", "Spring Boot", "Redis", "Maven"],
    testing: {
      detail: "JUnit coverage for ECB handling and currency helpers.",
    },
    visual: {
      type: "diagram",
      src: "assets/diagrams/vat.svg",
      alt: "Architecture diagram for VAT Converter",
    },
  },
];
