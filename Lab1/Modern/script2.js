/* JavaScript 6th Edition
 * Chapter 9
 * Chapter case
 * Eating Well in Season
 * Author: Jordan Poulin
 * Date: Feb 3rd 2021
 * Filename: script2.js
 */

"use strict";

let queryArray = [];

function populateInfo() {
    if ( location.search ) {
        const params = new URLSearchParams(location.search);

        for ( const [name, value] of params ) {
            document.getElementsByName(name)[0].value = value;
        }
    }
}

function createCookies() {
    let formFields = document.querySelectorAll("input[type=hidden],input[type = radio], textarea");
    
    for ( const field of formFields ) {
        if ( field.type !== "radio" || (field.type === "radio" && field.checked)) {
            Cookies.set(field.name, field.value, {expires: 7});
        }
    }
}
function handleSubmit(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    }
    else {
        evt.returnValue = false;
    }
    createCookies();
    document.getElementsByTagName("form")[0].submit();
}
function createEventListeners() {
    let form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", handleSubmit, false);
    }
    else if (form.attachEvent) {
        form.attachEvent("onsubmit", handleSubmit);
    }
}
function setUpPage() {
    createEventListeners();
    populateInfo();
}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}