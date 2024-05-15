let cursor = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    blur.style.left = dets.x - 250 + "px"
    blur.style.top = dets.y - 250 + "px"
})
let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        cursor.style.scale = 3
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function () {
        cursor.style.scale = 1
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"
    })
})

gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroll: "body",
        // markers: true,
        start: "top -40%",
        end: "top -80%",
        scrub: 2,
    }
})
gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 58%",
        scrub: 3,
    }
})
// gsap.from(".card",{
//     y:90,
//     opacity:0,
//     duration:1,
//     stagger:0.2,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         // markers:true,
//         start:"top 70%",
//         end:"top 65%",
//         scrub:1,
//     }
// })
gsap.from("#colon1", {
    x:-70,
    y:-70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 4,
    }
})
gsap.from("#colon2", {
    x:70,
    y:70,
    scrollTrigger: {
        trigger: "#colon2",
        scroller: "body",
        // markers:true,
        start: "top 70%",
        end: "top 65%",
        scrub: 4,
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 70%",
        scrub: 2,
    }

})
