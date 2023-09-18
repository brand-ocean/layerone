// Store DOM elements in variables for better performance and readability
const eyeForTalentElem = document.querySelector("#eyefortalent");

// Main gsap animation for the #eyefortalent element
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
    onComplete: () => gsap.set(eyeForTalentElem, { color: "#f5f6fa" })  // Arrow function for brevity
});

// Function to split and animate text when the document is loaded
document.addEventListener("DOMContentLoaded", () => {

    // Split the text inside #eyefortalent into individual words
    let words = eyeForTalentElem.innerText.split(' ');
    eyeForTalentElem.innerHTML = words.map(word => `<span class="word">${word}</span> `).join('');

    // Apply the intro animation to each word
    gsap.from(".word", {
        duration: 2,
        opacity: 0,
        stagger: 0.5,
        ease: "elastic.out(1, 0.3)"
    });

});

// Additional gsap animation for changing the color
gsap.to(eyeForTalentElem, {
    color: "#a69285",
    scrollTrigger: {
        trigger: eyeForTalentElem,
        start: "top center",
        end: "bottom center",
        scrub: 1,
    }
});
