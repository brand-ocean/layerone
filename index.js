// Store DOM elements in variables for better performance and readability
const eyeForTalentElem = document.querySelector("#eyefortalent");
const navbarHeight = 5 * parseFloat(getComputedStyle(document.documentElement).fontSize); // Calculate 5rem in pixels

// Main gsap animation for the #eyefortalent element
gsap.to(eyeForTalentElem, {
    scrollTrigger: {
        trigger: "#container-hero", // Make sure to use a proper selector here
        start: `top+=${navbarHeight}px`, // Adjusted the start position by the navbar height
        end: "bottom center", // Keep the end position as it is
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: false,
    },
    scale: 20,
    ease: "power2.out",
    filter: "blur(5px)",
    opacity: 0,
    onComplete: () => gsap.set(eyeForTalentElem, { color: "#f5f6fa" }) // Arrow function for brevity
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
        start: `top+=${navbarHeight}px`, // Adjusted the start position to include the navbar height
        end: "bottom center", // Keep the end position as it is
        scrub: 1,
    }
});
