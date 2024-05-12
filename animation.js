// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Fade in all elements with the class 'animate-fade-in'
    gsap.from("body", {
        duration: 0.8, // Duration of the fade effect
        opacity: 0, // Start from transparent
        y: 20, // Start 20 pixels down from original position
        stagger: 0.2, // Each subsequent element starts 0.2 seconds after the previous one
        ease: "power1.out", // Smooth easing function
        delay: 0.05 // Start animation 0.5 seconds after the DOM is ready
    });
});

// Select all elements with the class 'card'


