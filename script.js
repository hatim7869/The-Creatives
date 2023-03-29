

function reveal() {
    document.querySelectorAll(".reveal")
        .forEach(function (elem) {
            var child = document.createElement("span");
            var parent = document.createElement("span");

            $(child).addClass("child")
            $(parent).addClass("parent")

            child.innerHTML = elem.innerHTML
            parent.appendChild(child);

            elem.innerHTML = "";
            elem.appendChild(parent);
        });
}
reveal()

function craft() {
    var img1 = document.querySelector(".imgrotate1")
    var img2 = document.querySelector(".imgrotate2")
    var img3 = document.querySelector(".imgrotate3")
    var h1 = document.querySelector("#craft-cms h1")
    var d2 = document.querySelector("#up-left")
    var d3 = document.querySelector("#up-right")
    var d4 = document.querySelector("#down-main")

    d2.addEventListener("mouseenter", function () {
        img1.style.scale = 1.7
        img2.style.scale = .9
        img3.style.scale = .9
        h1.style.opacity = 0

    })
    d2.addEventListener("mouseleave", function () {
        img1.style.scale = 1
        img2.style.scale = 1
        img3.style.scale = 1
        h1.style.opacity = 1


    })
    d3.addEventListener("mouseenter", function () {
        img1.style.scale = .7
        img2.style.scale = .9
        img3.style.scale = 1.7
        h1.style.opacity = 0

    })
    d3.addEventListener("mouseleave", function () {
        img1.style.scale = 1
        img2.style.scale = 1
        img3.style.scale = 1
        h1.style.opacity = 1


    })
    d4.addEventListener("mouseenter", function () {
        img1.style.scale = .9
        img2.style.scale = 1.7
        img3.style.scale = .9
        h1.style.opacity = 0


    })
    d4.addEventListener("mouseleave", function () {
        img1.style.scale = 1
        img2.style.scale = 1
        img3.style.scale = 1
        h1.style.opacity = 1


    })

}
craft()

function textAnimate() {
    var clutter = "";
    document.querySelector("span .child").textContent.split("")
        .forEach(function (char) {
            clutter += `<span>${char}</span>`
        })
    document.querySelector("span .child").innerHTML = clutter;



}
textAnimate()
function textAnimate1() {
    var clutter = "";
    document.querySelector("#p5-left p").textContent.split("")
        .forEach(function (char) {
            clutter += `<span>${char}</span>`
        })
    document.querySelector("#p5-left p").innerHTML = clutter;



}
textAnimate1()
function textAnimate2() {
    var clutter = "";
    document.querySelector("#p5-left h1").textContent.split("")
        .forEach(function (char) {
            clutter += `<span>${char}</span>`
        })
    document.querySelector("#p5-left h1").innerHTML = clutter;



}
textAnimate2()



var tl = gsap.timeline();


tl.from("#loader h1 .child span", {
    y: "100%",
    ease: Expo.easeInOut,
    duration: 2,
    stagger: .1
})
tl.to(" #loader h1 .parent", {
    x: "77%",
    ease: Expo.easeInOut,
    duration: 2,
    stagger: -.1
})
tl.to("#loader h1 .parent", {
    y: "-100%",
    ease: Expo.easeInOut,
    duration: 2,
    stagger: -.1
})
var tl1 = gsap.timeline();

tl1.from("#loader p span", {
    y: 100,
    ease: Expo.easeInOut,

    duration: 2,
    stagger: .02

})
tl1.to("#loader p span", {
    x: -100,
    ease: Expo.easeInOut,
    duration: 2
})
tl1.to("#loader p span", {
    y: 100,

    ease: Expo.easeInOut,
    duration: 2
})
var tl2 = gsap.timeline();

tl2.from("#img1 img", {
    x: "-100%",
    duration: 2,
    ease: Expo.easeInOut,


})
tl2.to("#img1 img", {
    top: "-100%",
    duration: 2,
    ease: Expo.easeInOut,
    delay: 2,
})
var tl3 = gsap.timeline();

tl3.from("#img2 img", {
    x: "100%",
    duration: 2,
    ease: Expo.easeInOut,
})
tl3.to("#img2 img", {
    y: "-110%",
    duration: 2,
    ease: Expo.easeInOut,
    delay: 2,

})

tl1.to("#loader", {
    height: 0,
    top: 0,
    ease: Expo.easeInOut,
    delay: -1,
    duration: 2
})
tl1.from("#upper-content h1 .child,#upper-content p .child", {
    y: "100%",
    ease: Expo.easeInOut,
    stagger: .4,
    duration: 2,
    delay: -1
})


tl1.to("#circle", {
    scrollTrigger: {
        trigger: "#circle",
        start: "top 50%",
        // markers: true,
        pin: "#circle",
        scrub: 1
    },
    transform: "translate(-50%, -50%) scale(5)",
})
gsap.to(".card1", {
    scrollTrigger: {
        trigger: ".card1",
        start: "top 95%",
        end: "top 30%",
        // markers: true,
        scrub: 1
    },
    left: "27%",
})

gsap.to(".card2", {
    scrollTrigger: {
        trigger: ".card2",
        start: "top 95%",
        end: "top 30%",
        // markers: true,
        scrub: 1
    },
    left: "73%",
})

gsap.to(".card3", {
    scrollTrigger: {
        trigger: ".card3",
        start: "top 95%",
        end: "top 30%",
        // markers: true,
        scrub: 1
    },
    left: "27%",
})

gsap.to(".card4", {
    scrollTrigger: {
        trigger: ".card4",
        start: "top 95%",
        end: "top 30%",
        // markers: true,
        scrub: 1
    },
    left: "73%",
})
gsap.to(".card5", {
    scrollTrigger: {
        trigger: ".card5",
        start: "top 95%",
        end: "top 30%",
        // markers: true,
        scrub: 1
    },
    left: "27%",
})

gsap.to(".card6", {
    scrollTrigger: {
        trigger: ".card6",
        start: "top 95%",
        end: "top 30%",
        // markers: true,
        scrub: 1
    },
    left: "73%",
})
gsap.to(".card7", {
    scrollTrigger: {
        trigger: ".card7",
        start: "top 95%",
        end: "top 30%",
        // markers: true,
        scrub: 1
    },
    left: "27%",
})

gsap.to(".card8", {
    scrollTrigger: {
        trigger: ".card8",
        start: "top 95%",
        end: "top 30%",
        // markers: true,
        scrub: 1
    },
    left: "73%",
})

gsap.to("#chalte1", {
    scrollTrigger: {
        trigger: "#chalte1",
        start: "top 50%",
        // markers: true,
        scrub: 1
    },
    animation: "rots 40s linear infinite reverse",
    ease: Expo.easeInOut
})
gsap.to("#chalte2", {
    scrollTrigger: {
        trigger: "#chalte1",
        start: "top 50%",
        // markers: true,
        scrub: 1
    },
    animation: "rots 40s linear infinite both",
    ease: Expo.easeInOut
})

gsap.to("#chalte3", {
    scrollTrigger: {
        trigger: "#chalte1",
        start: "top 50%",
        // markers: true,
        scrub: 1
    },
    animation: "rots 40s linear infinite reverse",
    ease: Expo.easeInOut
})
gsap.to("#p5-left h1 span", {
    scrollTrigger: {
        trigger: "#p5-left",
        start: "top 50%",
    },
    ease: Expo.easeInOut,
    duration: 2,
    opacity: 1,
    stagger: .1
})
gsap.to("#p5-left p span", {
    scrollTrigger: {
        trigger: "#p5-left",
        start: "top 50%",
    },
    delay: 1,
    ease: Expo.easeInOut,
    duration: 2,
    opacity: 1,
    stagger: .02
})

gsap.from("#page3 .child", {
    scrollTrigger: {
        trigger: "#page3 p",
        start: "top 50%"
    },
    y: "200%",
    ease: Expo.easeInOut,
    stagger: .4,
    duration: 2
})






