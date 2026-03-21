gsap.registerPlugin(ScrollTrigger);

gsap.from("#about-box", {
    scrollTrigger: {
        trigger: "#about-box",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1
});

gsap.from(".project-card", {
    scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3
});


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

gsap.from(".skill-card", {
    scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

gsap.from("#contact form", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1
});