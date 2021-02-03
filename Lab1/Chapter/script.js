/* JavaScript 6th Edition
 * Chapter 9
 * Chapter case
 * Eating Well in Season
 * Author: Jordan Poulin
 * Date: Feb 3rd 2021
 * Filename: script2.js
 */

"use strict";

function clearCookies() {
    let cookieString = document.cookie;
    let cookieArray = cookieString.split("; ");
    let expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() - 7);
    for (let i = 0; i < cookieArray.length; i++) {
        document.cookie = cookieArray[i] + "; expires=" + expiresDate.toUTCString();
    }
}

if (window.addEventListener) {
    window.addEventListener("load", clearCookies, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", clearCookies);
}