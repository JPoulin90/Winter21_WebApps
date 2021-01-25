"use strict";

function emote() {
    const textField = document.getElementById('text').value;

    const emojiDiv = document.getElementById('emojis');
    if (textField.includes(":)")) {
        // How about a function like this:
        // function makeEmoji(emoji) { 
        //     const newSpan = document.createElement("span");
        //     emojiDiv.appendChild(newSpan);
        //     newSpan.innerHTML = emoji;   
        // }
        // Then call it like this:
        // makeEmoji("☺️");
        // Save yourself some typing!
        const newSpan = document.createElement('span');
        emojiDiv.appendChild(newSpan);
        newSpan.innerHTML = "☺️";
    } else if (textField.includes(":(")) {
        const newSpan = document.createElement('span');
        emojiDiv.appendChild(newSpan);
        newSpan.innerHTML = "🙁";
    } else if (textField.includes(":D")) {
        const newSpan = document.createElement('span');
        emojiDiv.appendChild(newSpan);
        newSpan.innerHTML = "😀";
    } else if (textField.includes(":P")) {
        const newSpan = document.createElement('span');
        emojiDiv.appendChild(newSpan);
        newSpan.innerHTML = "😛";
    } else if (textField.includes(";)")) {
        const newSpan = document.createElement('span');
        emojiDiv.appendChild(newSpan);
        newSpan.innerHTML = "😉";
    } else if (textField.includes("B)")) {
        const newSpan = document.createElement('span');
        emojiDiv.appendChild(newSpan);
        newSpan.innerHTML = "😎";
    } else if (textField.includes("8)")) {
        const newSpan = document.createElement('span');
        emojiDiv.appendChild(newSpan);
        newSpan.innerHTML = "🤓";
    }
}

function fontChange(newVal) {
    document.getElementById('emojis').style.fontSize = newVal + "px";
}



setInterval(function () {
    if (document.getElementById('emojis').hasChildNodes()) {
        const emojiList = document.getElementById('emojis');
        emojiList.removeChild(emojiList.childNodes[0]);
    }
}, 2000)

function disableButton() {
    const regex = /^:\)|:\(|:D|:P|;\)|B\)|8\)$/
    const textField = document.getElementById('text').value;
    if (regex.test(textField) == false) {
        document.getElementById('emote').disabled = true;
    } else {
        document.getElementById('emote').disabled = false;
    }
}

