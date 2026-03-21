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
    y: -40,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

gsap.from("#hero-text", {
    y: 20,
    opacity: 0,
    duration: 1.2,
    delay: 0.3,
    ease: "power3.out"
});

gsap.from("#hero-btn", {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power3.out"
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