// homepage scroll animations
// using gsap for smooth transitions

gsap.from("#thumb2", {
    y: 150,
    duration: 6,
    ease: "power2.linear",
    scrollTrigger: {
        trigger: "#thumb2",
        scroller: 'body',
        start: 'top 90%',
        end: 'top 10%',
        scrub: true,
        toggleActions: "restart pause reverse pause"
    }
})

gsap.from("#thumb1", {
    y: 100,
    duration: 8,
    ease: "power2.linear",
    scrollTrigger: {
        trigger: "#thumb1",
        scroller: 'body',
        start: 'top 90%',
        end: 'top 10%',
        scrub: 2,
        toggleActions: "restart pause reverse pause"
    }
})

gsap.from("#libThumb1", {
    y: 100,
    duration: 4,
    ease: "power2.linear",
    scrollTrigger: {
        trigger: "#libThumb1",
        scroller: 'body',
        start: 'top 90%',
        end: 'top 10%',
        scrub: true,
        toggleActions: "restart pause reverse pause"
    }
})

gsap.from("#libThumb2", {
    y: 100,
    duration: 10,
    ease: "power2.linear",
    scrollTrigger: {
        trigger: "#libThumb2",
        scroller: 'body',
        start: 'top 90%',
        end: 'top 10%',
        scrub: true,
        toggleActions: "restart pause reverse pause"
    }
})

// handling habit section cards
gsap.from("#habitThumb1", {
    y: 100,
    duration: 10,
    ease: "power2.linear",
    scrollTrigger: {
        trigger: "#habitThumb1",
        scroller: 'body',
        start: 'top 90%',
        end: 'top 10%',
        scrub: true,
        toggleActions: "restart pause reverse pause"
    }
})

gsap.from("#habitThumb2", {
    y: 150,
    duration: 6,
    ease: "power2.linear",
    scrollTrigger: {
        trigger: "#habitThumb2",
        scroller: 'body',
        start: 'top 90%',
        end: 'top 10%',
        scrub: true,
        toggleActions: "restart pause reverse pause"
    }
})
