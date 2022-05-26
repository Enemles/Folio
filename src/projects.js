import "./projects.scss";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

import { CameraHelper, TextureLoader } from "three";

gsap.registerPlugin(ScrollTrigger, CustomEase);


Splitting();


const bar = document.querySelector('.bar')
const button = document.querySelector('.toggle')
const navContainer = document.querySelector('.nav_container')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')
const logo = document.querySelector('.logo')

let menuOpened = false

gsap.to('.splitting .char', {
    ease: "custom",
    transform: 'translateY(0%)',
    stagger: 0.05,
    duration: 1.4
})


const animateHome = () => {
    let p = [button, logo]
    for (let i = 0; i < p.length; i++) {
        const element = p[i];
        gsap.to(element, {
            ease: "custom",
            transform: 'translateY(0%)',
            duration: 1
        })
        console.log(i);
    }
}

animateHome()


const timelineSettings = {
    staggerValue: 0.025,
    charsDuration: 0.7
}

CustomEase.create("custom", "0.83, 0, 0.17, 1")

const timeline = gsap.timeline({ paused: true })
    .to(document.querySelector('.menu_about .word'), {
        duration: timelineSettings.charsDuration,
        ease: 'custom',
        y: "0%",
        delay: 1
    }, 0)
    .to(document.querySelector('.menu_projects .word'), {
        duration: timelineSettings.charsDuration,
        ease: 'custom',
        y: "0%",
        delay: 1
    }, 0)
    .to(document.querySelector('.menu_contact .word'), {
        duration: timelineSettings.charsDuration,
        ease: 'custom',
        y: "0%",
        delay: 1
    }, 0)


button.addEventListener('click', () => {
    if (menuOpened === false) {
        body.classList.toggle('hidden')
        bar.classList.toggle('openedBar')
        navContainer.classList.toggle('opened')
        menu.classList.toggle('menuToggled')
        timeline.play()
    } else {
        setTimeout(() => {
            body.classList.toggle('hidden')
            bar.classList.toggle('openedBar')
            navContainer.classList.toggle('opened')
            menu.classList.toggle('menuToggled')
        }, 900);
        timeline.reverse()
    }

    menuOpened = !menuOpened
})

// PAGE TRANSITION
let transition = document.querySelector(".transition")
let links = document.querySelectorAll('a')
if (links) {
    links.forEach((link) => {
        link.onclick = (e) => {
            console.log(e)
            e.preventDefault()
            setTimeout(function() {
                    if (transition.classList.contains('leave')) {
                        // récupère le lien du parent s'il existe
                        if (!e.target.parentElement.href) {
                            if (!e.target.href) {
                                // lien du parent du parent pour certains cas
                                window.location = e.target.parentElement.parentElement.href
                            } else {
                                window.location = e.target.href;
                            }
                        } else {
                            window.location = e.target.parentElement.href
                        }
                    } else {
                        console.log('whoops', e.target)
                    }
                }, 1500)
                // en attendant les 1,5 secondes 
                // je lance les animations avec les classes CSS
            transition.classList.toggle("leave")
            transition.classList.toggle("enter")
        }
    })
}


// Project stack FX
let projects = gsap.utils.toArray('.project');
// let projectImages = gsap.utils.toArray('.project .project-container__inner');

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".trigger-container",
        start: () => "top top",
        end: () => "+=" + ((projects.length + 1) * window.innerHeight),
        scrub: 0.8,
        pin: true,
        invalidateOnRefresh: true,
        // markers: true,
    }
});

projects.forEach((project, i) => {
    if (i !== projects.length - 1) {
        tl
            .to(project, {
                yPercent: -96 + (projects.length - 1),
                ease: "none",
                stagger: 0.5,
            })
    }
});

gsap.set(".project", { zIndex: (i, target, targets) => targets.length - i });





//container anim

// let imgAnim = document.querySelectorAll('.container_img img')
// let titleAnimR = document.querySelectorAll('.right .container_text-title')
// let titleAnimL = document.querySelectorAll('.left .container_text-title')
// let txtAnimR = document.querySelectorAll('.right .container_text-content')
// let txtAnimL = document.querySelectorAll('.left .container_text-content')



// gsap.fromTo(imgAnim, {
//     y: 500
// }, {
//     scrollTrigger: {
//         trigger: imgAnim,
//         toggleActions: "play none none none"
//     },
//     ease: "custom",
//     y: 0,
//     duration: 2
// })

// gsap.fromTo(titleAnimR, {
//     x: -300
// }, {
//     scrollTrigger: {
//         trigger: titleAnimR,
//         toggleActions: "play none none none"
//     },
//     ease: "custom",
//     x: 0,
//     duration: 2,
//     delay: .5
// })
// gsap.fromTo(titleAnimL, {
//     x: 300
// }, {
//     scrollTrigger: {
//         trigger: titleAnimL,
//         toggleActions: "play none none none"
//     },
//     ease: "custom",
//     x: 0,
//     duration: 2,
//     delay: .5
// })



// gsap.fromTo(txtAnimR, {
//     x: -600,
// }, {
//     scrollTrigger: {
//         trigger: txtAnimR,
//         toggleActions: "play none none none"
//     },
//     ease: "custom",
//     x: 0,
//     duration: 2
// })
// gsap.fromTo(txtAnimL, {
//     x: 600,
// }, {
//     scrollTrigger: {
//         trigger: txtAnimR,
//         toggleActions: "play none none none"
//     },
//     ease: "custom",
//     x: 0,
//     duration: 2
// })