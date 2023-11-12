const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



var tl= gsap.timeline();


tl.from("#nav div,#links a,#dest button",{
    y:-10,
    opacity:0,
    duration:0.9,
    delay:0.2,
    stagger:0.1,
})

gsap.from("#hero",{
    opacity:0,
    delay:1.2,
    y:-20,
    duration:0.7,
    stagger:0.2
})

gsap.from("#p1,#p2",{
    x:10,
    opacity:0,
    duration:0.7,
    delay:1.6,
    stagger:0.2,
})

gsap.from("#p3,#p4",{
    x:-10,
    opacity:0,
    duration:0.7,
    delay:1.6,
    stagger:0.2,
})

gsap.from("#anim1",{
    delay:1.8,
    opacity:0,
    y:-20,
    duration:0.6,

})

gsap.from("#hfoot,#socials i",{
    opacity:0,
    delay:1.9,
    duration:0.5,
    y:10,
    stagger:0.1,
})

gsap.to("#hfoot #scroll",{
    y:-15,
    repeat:-1,
    yoyo:true,
    duration:0.5

})