var tl = gsap.timeline()
tl.from("#nav h1, #nav h4,#nav button",{
    y:-50,
    delay:0.6,
    duration:0.7,
    opacity:0,
    stagger:0.24
})
tl.from("#page1-content h1,#page1-content p ,#page1-content button",{
    y:100,
    opacity:0,
    duration:0.5,
    stagger:0.5
})

gsap.from("#page2 h1",{
    x:-100,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 h1",
        croller:"body",
        // markers:true,
        start:"top 60%"
    }
})

gsap.from("#page2-div",{
    x:300,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 h1",
        croller:"body",
        // markers:true,
        start:"top 60%"
    }
})