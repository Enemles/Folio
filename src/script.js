import "./index.scss";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase)


Splitting();

//**Loader */


let imgs = document.images,
    len = imgs.length,
    counter = 0,
    number = document.getElementById("number"),
    loaderElement = document.querySelector(".loader"),
    progressRatio


    [].forEach.call(imgs, function(img) {
    if (img.complete) incrementCounter();
    else img.addEventListener("load", incrementCounter, false);
});

console.log(imgs)

function incrementCounter() {
    counter++;
    progressRatio = counter / len;
}

let numberUpdate = 0

const updatePercent = () => {
    if (progressRatio > 0) {
        numberUpdate += (progressRatio * 100 - numberUpdate) * 0.25
        number.innerHTML = Math.round(numberUpdate) + "%"
    }
    if (Math.round(numberUpdate) == 100) {
        loaderElement.classList.add("complete")
        setTimeout(() => {
            loaderElement.classList.add("remove")
        }, 2100)
        console.log("All images loaded!")

        clearInterval(interval)
    }
}

let interval = setInterval(updatePercent, 150)


const bar = document.querySelector('.bar')
const button = document.querySelector('.toggle')
const navContainer = document.querySelector('.nav_container')
const menu = document.querySelector('.menu')
const body = document.querySelector('body')
const logo = document.querySelector('.logo')
const imgTop = document.querySelector('.top img')

let menuOpened = false


//Splitting animation

gsap.to('.splitting .char', {
    ease: "custom",
    transform: 'translateY(0%)',
    stagger: 0.05,
    duration: 2,
    delay: 4.5
})

gsap.to('.top img', {
    ease: "custom",
    transform: "translateY(0)",
    duration: 1,
    delay: 4
})

const animateHome = () => {
    let p = [button, logo]
    for (let i = 0; i < p.length; i++) {
        const element = p[i];
        gsap.to(element, {
            ease: "custom",
            transform: 'translateY(0%)',
            duration: 1,
            delay: 4.5
        })
        console.log(i);
    }
}

animateHome()

//ANIMATE JOB
const jobLeft = document.querySelector('.jobLeft')
const jobRight = document.querySelector('.jobRight')


gsap.to(jobLeft, {
    ease: "custom",
    transform: 'translateX(0%)',
    delay: 5.5,
    duration: 1
})
gsap.to(jobRight, {
    ease: "custom",
    transform: 'translateX(0%)',
    delay: 5.5,
    duration: 1
})


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

/**
 * Me Animation
 **/

const meImg = document.querySelector('.content-img img')
const meFlex = document.querySelector('.flex')
const meFlexImg = document.querySelector('.flex .title p')
const meFlexTxt = document.querySelector('.flex .text p')

gsap.to(meImg, {
    scrollTrigger: {
        trigger: meFlex,
        toggleActions: "play none none none"
    },
    transform: "translateY(0)",
    ease: 'custom',
    duration: 1
})
gsap.to(meFlexImg, {
    scrollTrigger: {
        trigger: meFlex,
        toggleActions: "play none none none"
    },
    transform: 'translateY(0%)',
    ease: 'custom',
    duration: 1
})
gsap.to(meFlexTxt, {
    scrollTrigger: {
        trigger: meFlex,
        toggleActions: "play none none none"
    },
    transform: 'translateY(0%)',
    ease: 'custom',
    duration: 1
})