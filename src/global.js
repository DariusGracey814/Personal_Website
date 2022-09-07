"use strict";

export function scrollToSection(evt) {
    const link = evt.target;
    const href = link.getAttribute('href');

    console.log(href);

    if(href !== "#" && href.startsWith('#')) {
        // Target Scroll Section
        const targetSection = document.querySelector(href);
        targetSection.scrollIntoView({behavior: "smooth"});
    }
    else {
        return;
    }
}