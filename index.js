// Constants
const TEXT_SPLIT_CLASS = "word";

// GSAP Animations

// Main animation for the #eyefortalent element
gsap.to(eyeForTalentElem, {
    scrollTrigger: {
        trigger: "container-hero",
        start: "top",
        end: "bottom",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: false,
    },
    scale: 20,
    ease: "power2.out",
    filter: "blur(5px)",
    opacity: 0,
    onComplete: () => gsap.set(eyeForTalentElem, { color: "#f5f6fa" })
});

// Animation for changing the color of #eyefortalent element
gsap.to(eyeForTalentElem, {
    color: "#a69285",
    scrollTrigger: {
        trigger: eyeForTalentElem,
        start: "top",
        end: "bottom center",
        scrub: 1,
    }
});

// Event Listeners

// Function to split and animate text when the
