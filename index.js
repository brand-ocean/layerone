 gsap.registerPlugin(ScrollTrigger);

// Sla het DOM-element op in een variabele voor betere prestaties en leesbaarheid
const eyeForTalentElem = document.querySelector("#eyefortalent");

// Split de tekst binnen #eyefortalent in individuele woorden
let words = eyeForTalentElem.innerText.split(' ');
eyeForTalentElem.innerHTML = words.map(word => `<span class="word">${word}</span> `).join('');

// Verberg aanvankelijk alle woorden
gsap.set(".word", { visibility: "hidden" });

// Maak elk woord zichtbaar, één voor één met een vertraagde animatie
gsap.to(".word", {
  visibility: "visible",
  stagger: 0.5,
});

        // Set up the scaling animation on scroll
        gsap.to(eyeForTalentElem, {
            scrollTrigger: {
                trigger: section_hero, // Set the trigger as the element itself
                start: "top", // Set the starting point of the animation relative to the top of the viewport
                end: "center", // Set the ending point of the animation relative to the bottom of the viewport
                scrub: 1, // Smooth scrubbing effect
            },
            scale: 5, // Scale the element to 2 times its size
            filter: "blur(5px)", // Apply a blur filter to the element
            color: "#ad9b8e", // Change the color to #ad9b8e
        opacity: 0 // Change the opacity to 0
        });
// Sla het DOM-element op in een variabele voor betere prestaties en leesbaarheid
const navWrapElems = document.querySelectorAll(".nav_wrap");

navWrapElems.forEach(navWrapElem => {
  const hamburgerEl = $(navWrapElem).find(".nav_hamburger_wrap");
  const navLineEl = $(navWrapElem).find(".nav_hamburger_line");
  const menuContainEl = $(navWrapElem).find(".menu_contain");
  const flipItemEl = $(navWrapElem).find(".nav_hamburger_base");
  const menuWrapEl = $(navWrapElem).find(".menu_wrap");
  const menuBaseEl = $(navWrapElem).find(".menu_base");
  const menuLinkEl = $(navWrapElem).find(".menu_link");
  const flipDuration = 0.6;

  function flip(forwards) {
    const state = Flip.getState(flipItemEl);
    if (forwards) {
      flipItemEl.appendTo(menuContainEl);
    } else {
      flipItemEl.appendTo(hamburgerEl);
    }
    Flip.from(state, { duration: flipDuration });
  }

  const tl = gsap.timeline({ paused: true });
  tl.set(menuWrapEl, { display: "flex" });
  tl.from(menuBaseEl, {
    opacity: 0,
    duration: flipDuration,
    ease: "none",
    onStart: () => {
      flip(true);
    }
  });
  tl.to(navLineEl.eq(0), { y: 4, rotate: 45, duration: flipDuration }, "<");
  tl.to(navLineEl.eq(1), { y: -4, rotate: -45, duration: flipDuration }, "<");
  tl.from(menuLinkEl, {
    opacity: 0,
    yPercent: 50,
    duration: 0.2,
    stagger: { amount: 0.2 },
    onReverseComplete: () => {
      flip(false);
    }
  });

  function openMenu(open) {
    if (!tl.isActive()) {
      if (open) {
        tl.play();
        hamburgerEl.addClass("nav-open");
      } else {
        tl.reverse();
        hamburgerEl.removeClass("nav-open");
      }
    }
  }

  hamburgerEl.on("click", function () {
    if ($(this).hasClass("nav-open")) {
      openMenu(false);
    } else {
      openMenu(true);
    }
  });

  menuBaseEl.on("mouseenter", function () {
    openMenu(false);
  });
  menuBaseEl.on("click", function () {
    openMenu(false);
  });

  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      openMenu(false);
    }
  });
});

