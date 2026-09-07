(() => {
  const root = document.getElementById("projects");
  const projects = window.PORTFOLIO_PROJECTS || [];

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function renderProject(project, index) {
    const article = el("article", "project reveal");
    article.id = project.id;
    article.style.transitionDelay = `${Math.min(index * 40, 200)}ms`;

    const copy = el("div", "project-copy");
    const kicker = el("div", "project-kicker");
    kicker.append(el("span", null, `0${index + 1}`.slice(-2)));
    if (project.testing) {
      kicker.append(el("span", "test-badge", project.testing.label));
    }
    copy.append(kicker);
    copy.append(el("h3", null, project.name));
    copy.append(el("p", "tagline", project.tagline));
    copy.append(el("p", "summary", project.summary));

    if (project.liveUrl) {
      const live = el("p", "live-link");
      const anchor = document.createElement("a");
      anchor.href = project.liveUrl;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.textContent = project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");
      live.append(document.createTextNode("Live: "));
      live.append(anchor);
      copy.append(live);
    }

    if (project.placeholderPath) {
      copy.append(
        el(
          "p",
          "placeholder-note",
          `Screenshot path (replaceable): ${project.placeholderPath}`
        )
      );
    }

    copy.append(el("p", "arch-label", "Architecture"));
    const arch = el("ul", "architecture");
    project.architecture.forEach((item) => arch.append(el("li", null, item)));
    copy.append(arch);

    copy.append(el("p", "stack-label", "Stack"));
    const stack = el("ul", "stack");
    project.stack.forEach((item) => stack.append(el("li", null, item)));
    copy.append(stack);

    if (project.testing) {
      copy.append(el("p", "test-note", project.testing.detail));
    }

    const media = el("div", "project-media");
    const frame = el("div", "frame");
    if (project.visual.type === "image") {
      const img = document.createElement("img");
      img.src = project.visual.src;
      img.alt = project.visual.alt;
      img.loading = "lazy";
      frame.append(img);
    } else {
      const obj = document.createElement("object");
      obj.type = "image/svg+xml";
      obj.data = project.visual.src;
      obj.setAttribute("aria-label", project.visual.alt);
      frame.append(obj);
    }
    media.append(frame);

    article.append(copy, media);
    return article;
  }

  projects.forEach((project, index) => {
    root.append(renderProject(project, index));
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));

  const heroImg = document.querySelector(".hero-visual img");
  if (heroImg && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener(
      "scroll",
      () => {
        const y = Math.min(window.scrollY, 480);
        heroImg.style.transform = `scale(1.04) translateY(${y * 0.12}px)`;
      },
      { passive: true }
    );
  }
})();
