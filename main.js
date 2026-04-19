window.addEventListener("DOMContentLoaded", () => {
  // Page Transition: Fade in on load
  const pageTransition = document.getElementById("page-transition");
  if (pageTransition) {
    // Small delay to ensure initial state is applied before showing
    requestAnimationFrame(() => {
      pageTransition.classList.add("show");
    });
  }

  // Page Transition: Fade out on link click
  document.querySelectorAll("a").forEach(link => {
    // Only apply to internal links that aren't anchors
    const isInternal = link.hostname === window.location.hostname || !link.hostname;
    const isAnchor = link.getAttribute("href")?.startsWith("#");
    
    if (isInternal && !isAnchor && link.getAttribute("target") !== "_blank") {
      link.addEventListener("click", function(e) {
        const href = this.href;
        if (!href || href.includes("javascript:void(0)")) return;

        e.preventDefault();
        if (pageTransition) {
          pageTransition.classList.add("fade-out");
          setTimeout(() => {
            window.location.href = href;
          }, 350);
        } else {
          window.location.href = href;
        }
      });
    }
  });

  // Navigation active state
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    if (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== '#') {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Handle browser back button (pageshow)
  window.addEventListener("pageshow", (event) => {
    if (event.persisted && pageTransition) {
      pageTransition.classList.remove("fade-out");
      pageTransition.classList.add("show");
    }
  });

  if (typeof gsap === "undefined") return;

  // Background animations
  const blobs = document.querySelectorAll(".bg-blob");
  blobs.forEach((blob, index) => {
    gsap.to(blob, {
      y: index % 2 === 0 ? -24 : 24,
      x: index === 1 ? -14 : 12,
      duration: 10 + index * 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  });

  // Entrance animations for content boxes
  gsap.from(".content-box", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out"
  });

  // Hover effects for cards
  const cards = document.querySelectorAll(".image-card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { y: -10, duration: 0.3 });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, { y: 0, duration: 0.3 });
    });
  });

  // Entrance animations for sections
  const sections = document.querySelectorAll("section");
  if (sections.length > 0) {
    gsap.from(sections, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".content-box",
        start: "top 80%",
      }
    });
  }
});
