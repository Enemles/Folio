import "./contact.scss";
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