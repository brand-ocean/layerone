// Store DOM elements in variables for better performance and readability
const eyeForTalentElem = document.querySelector("#eyefortalent");

// Split and animate text on document load
document.addEventListener("DOMContentLoaded", () => {
    // Split the text inside #eyefortalent into individual words
    let words = eyeForTalentElem.innerText.split(' ');
    eyeForTalentElem.innerHTML = words.map(word => `<span class="word">${word}</span> `).join('');

    // Hide all words initially
    gsap.set(".word", { visibility: "hidden" });

    // Make each word visible one-by-one
    gsap.to(".word", {
        visibility: "visible",
        stagger: 0.5,
    });
});

// Main gsap animation for the #eyefortalent element
gsap.to(eyeForTalentElem, {
    scrollTrigger: {
        trigger: "container-hero",
        start: "top",
        end: "bottom",
        scrub: 0.5,
        pin: true,
        anticipatePin: 1,
        markers: false,
    },
    scale: 10,
    ease: "power2.out",
    filter: "blur(5px)",
    onComplete: () => gsap.set(eyeForTalentElem, { color: "#f5f6fa" })
});

// Additional gsap animation for changing the color
gsap.to(eyeForTalentElem, {
    color: "#a69285",
    scrollTrigger: {
        trigger: eyeForTalentElem,
        start: "top",
        end: "bottom",
        scrub: 0.5,
    }
});
