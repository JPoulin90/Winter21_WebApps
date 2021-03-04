/* JavaScript 6th Edition
 * Chapter 9
 * Chapter case
 * Eating Well in Season
 * Author: Jordan Poulin
 * Date: Feb 3rd 2021
 * Filename: script3.js
 */

"use strict";

/*function parseData() {
    var formData = decodeURIComponent(location.search);
    var formArray = [];
    var list = document.querySelector("div.results ul");
    formData = formData.substring(1, formData.length);
    
    while (formData.indexOf("+") !== -1) {
        formData = formData.replace("+", " ");
    }
    
    formData = decodeURIComponent(formData);
    formArray = formData.split("&");
    
    for (var i = 0; i < formArray.length; i++) {
        var newItem = document.createElement("li");
        newItem.innerHTML = formArray[i];
        list.appendChild(newItem);
    }
} */

function parseData(){
    let formData = document.cookie;
    let formArray = [];
    const list = document.querySelector("div.results ul");
    formArray = formData.split("; ");
    for (let i = 0; i < formArray.length; i++){
        const newItem = document.createElement("li");
        newItem.innerHTML = formArray[i];
        list.appendChild(newItem);
    }
}

window.onload = parseData;