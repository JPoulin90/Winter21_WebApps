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
    const cookieArray = Cookies.get();
    for (const el of cookieArray) {
        Cookies.remove(el);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", clearCookies, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", clearCookies);
}