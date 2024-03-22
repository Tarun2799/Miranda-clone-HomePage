const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

tl.to("#page1", {
    y:"100vh",
    duration:0,
    scale:0.4
})
tl.to("#page1", {
    y:"20vh",
    duration:0.5,
    delay:1
})
tl.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:1
})