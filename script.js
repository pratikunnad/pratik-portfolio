// Hero Animation

gsap.from("#hero-title", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 0.3
});

gsap.from("#hero-text", {
    y: 30,
    opacity: 0,
    duration: 1,
    delay: 0.6
});

gsap.from("#hero-btn", {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    delay: 0.9
});