/** Portfolio project data. Public descriptions only; no private source links. */
window.PORTFOLIO_PROJECTS = [
  {
    id: "agileway-eu",
    name: "Agile Way: Course booking",
    badge: "Live booking",
    tagline: "Training calendar, checkout, and admin for Agile Way courses.",
    summary:
      "Full-stack booking experience: public course discovery, seat-aware checkout, transactional email, and an operator portal for courses and reservations.",
    liveUrl: "https://www.agileway.eu/",
    architecture: [
      "SvelteKit app serves public and admin surfaces from one codebase",
      "Hosted checkout with webhooks for payments and seat updates",
      "Soft-delete archival for courses and bookings",
    ],
    stack: ["SvelteKit", "TypeScript", "Tailwind CSS", "Docker"],
    testing: {
      detail:
        "Unit, integration & e2e: Vitest suites plus Playwright coverage across booking and admin flows.",
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
    tagline: "Italian marketing site, blog, and content admin for Agile Way.",
    summary:
      "Public pages and Markdown-driven blog paired with an authenticated CMS for homepage content, legal pages, media, and settings.",
    liveUrl: "https://www.agileway.it/",
    architecture: [
      "SvelteKit SSR for public content with an authenticated CMS portal",
      "File-based blog content alongside editable CMS sections",
      "Optional checkout integration for related learning products",
    ],
    stack: ["SvelteKit", "TypeScript", "Tailwind CSS", "Docker"],
    testing: {
      detail:
        "Unit, integration & e2e: Vitest unit/integration tests and Playwright e2e for public and admin paths.",
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
    tagline: "Self-hosted quiz engine with a free demo and a paid Stripe edition.",
    summary:
      "Composable quizzes and parent assessments with scored attempts for guest or authenticated learners. A free practice version is public; the full product sits behind a Stripe paywall.",
    liveUrl: "https://www.agileway.it/simulatore/psmi-gratis/simulatore-esame-psmi-demo",
    architecture: [
      "JWT-gated access aligned with the main Agile Way identity cookies",
      "Quiz / mode / parent composition model for multi-part assessments",
      "Free demo path plus paid access unlocked after Stripe checkout",
    ],
    stack: ["SvelteKit", "TypeScript", "Tailwind CSS", "Docker", "Stripe"],
    testing: {
      detail:
        "Unit, integration & e2e: Focused Vitest coverage for quiz/auth logic plus Playwright e2e.",
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
    tagline: "CLI that turns checkout payments into custom invoice PDFs.",
    summary:
      "Reads payment data from Stripe Checkout sessions and generates invoice or credit-note PDFs, with optional email delivery for operators. EUR invoices use ECB reference rates for SEK conversion and VAT disclosure.",
    architecture: [
      "Go CLI pipeline: fetch, map, render, deliver",
      "ECB reference rates for EUR→SEK conversion on invoice disclosures",
      "Local operational state with a retention policy",
      "File and email delivery modes; refunds originate elsewhere and are reflected on credit notes",
    ],
    stack: ["Go", "Cobra", "HTML/PDF rendering", "Docker"],
    testing: {
      detail:
        "Unit & integration: Broad go test coverage across mapping, render, storage, and integration-tagged suites.",
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
    tagline: "Per-brand knowledge, editorial workspace, and approval-gated publishing.",
    summary:
      "Execution layer for content operations: brand knowledge bases, briefs and drafts, SEO packages, calendar, and publishing destinations. A web UI and MCP share one backend so agents can write while operators review; live publishing is never automatic.",
    architecture: [
      "Brand knowledge stored on disk so it can move to a shared volume",
      "REST UI and MCP clients share one SQLite-backed service",
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
      "Pulls filings from trademark providers, scores similarity against configured brands, and surfaces matches in a dashboard with alert hooks.",
    architecture: [
      "Provider adapters feed a normalize and similarity pipeline",
      "Only matching records are persisted, which keeps storage small",
      "CLI for scheduled runs; server-rendered HTML dashboard for review",
    ],
    stack: ["Go", "HTML dashboard", "SMTP alerts"],
    testing: {
      detail:
        "Unit tests: Similarity, normalization, filters, config, and provider-focused Go tests.",
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
    tagline: "Health and activity dashboard for my personal 8-bot AI fleet run from Telegram.",
    summary:
      "Ops dashboard to check health status and current activities across my AI fleet. My fleet is eight bots, each fully controlled from Telegram chats. A collector posts redacted telemetry to an ingest API (the only database writer) while a React UI reads operational state.",
    architecture: [
      "Edge collector gathers allowlisted, redacted telemetry on a schedule",
      "API owns all writes; dashboard is read-only via REST",
      "Compose-based deploy for API and UI as separate services",
    ],
    stack: ["FastAPI", "SQLAlchemy", "Alembic", "React", "TypeScript", "Vite", "TanStack Query"],
    testing: {
      detail:
        "API + UI tests: pytest for ingest/read surfaces; component and page tests on the React app.",
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
      detail:
        "Plugin tests: pytest coverage for filters, callback formatting, and report templates.",
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
      type: "image",
      src: "assets/projects/restore-assistant.png",
      alt: "Restore Assistant TUI menu for rclone and Proxmox restores",
    },
  },
  {
    id: "jobhunter",
    name: "Jobhunter",
    badge: "Vacancy sync",
    tagline: "Homelab vacancy sync with HTMX admin and MCP tooling.",
    summary:
      "Scrapes broker portals into a local store, exposes an operator UI, and serves vacancy/CV helpers to agents over MCP.",
    architecture: [
      "Playwright-assisted scrape using an operator login session",
      "HTMX admin for brokers and review",
      "MCP server (stdio and HTTP) for agent-readable vacancy tools",
    ],
    stack: ["Python", "FastAPI", "SQLAlchemy", "HTMX", "Playwright", "MCP", "Docker"],
    testing: {
      detail:
        "Extensive pytest suite: Auth, CV pipeline, scraping helpers, and service tests under a dedicated tests/ tree.",
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
    tagline: "Lightweight browser launcher for homelab services.",
    summary:
      "A JSON-driven HTML menu served from a tiny PHP container so operators can open common lab endpoints quickly.",
    architecture: [
      "Static HTML UI reads a local menu.json catalog",
      "Optional PHP endpoint persists menu edits",
      "Packaged as a small Docker image with PHP built-in server",
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
      "Orchestrates Drive, Gmail, and Takeout-oriented backups through an isolated rclone config with encryption before upload.",
    architecture: [
      "Bubble Tea TUI plus headless CLI for the same backup core",
      "Isolated rclone configuration that does not touch the user global config",
      "crypt backend encrypts payloads before remote storage",
    ],
    stack: ["Go", "Bubble Tea", "rclone", "crypt"],
    testing: {
      detail:
        "Unit tests: Backup, config, rate-limit, and TUI screen tests with dedicated test helpers.",
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
    tagline: "A web-first PWA for studying the 3,000 most frequent Swedish lemmas.",
    summary:
      "Flip-card study flow with bundled pronunciation audio, local progress tracking, and an offline-capable lexicon loaded in the browser.",
    architecture: [
      "Build-time pipeline turns open lexicon sources into a SQLite database",
      "Browser runtime reads the DB via sql.js with no backend required",
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
    tagline: "Legacy EUR/SEK conversion service for earlier invoicing workflows.",
    summary:
      "Legacy production system that handled EUR/SEK conversion for invoicing before the current Agile Way invoicing system. Scheduled jobs pulled ECB reference rates, cached them, and processed invoice-related currency conversion.",
    architecture: [
      "Spring Boot application with scheduled rate and invoice jobs",
      "ECB rate fetch with Redis-backed caching",
      "Downstream processing for converted invoice artifacts",
    ],
    stack: ["Java 21", "Spring Boot", "Redis", "Maven"],
    testing: {
      detail: "JUnit: Service and utility tests for ECB handling and currency helpers.",
    },
    visual: {
      type: "diagram",
      src: "assets/diagrams/vat.svg",
      alt: "Architecture diagram for VAT Converter",
    },
  },
];
