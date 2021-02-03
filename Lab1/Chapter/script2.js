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
    if (location.search) {
        let queryData = location.search;
        let hiddenInputs = document.querySelectorAll("input[type=hidden]");
        queryData = queryData.substring(1, queryData.length);
        queryArray = queryData.split("&");
        for (const el of queryArray) {
            hiddenInputs[i].value = queryArray[i].substring(queryArray[i].lastIndexOf("=") + 1);
        }
    }
}

function createCookies() {
    let formFields = document.querySelectorAll("input[type=hidden],input[type = radio], textarea");
    
    for (const el of formFields) {
        Cookies.set('name', 'value', { expires: 7, path: '' });
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
    window.addEventListener("load", populateInfo, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", populateInfo);
}