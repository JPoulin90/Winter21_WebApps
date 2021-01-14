"use strict";

function emote() {
    var textField = document.getElementById('text').value;

    var emojiDiv = document.getElementById('emojis');
    if (textField.includes(":)")) {
        var newSpan = document.createElement('span');
        emojiDiv.appendChild(newSpan);
        newSpan.innerHTML = "☺️";
    } else if (textField.includes(":(")) {
        var newSpan = document.createElement('span');
        emojiDiv.appendChild(newSpan);
        newSpan.innerHTML = "🙁";
    } else if (textField.includes(":D")) {
        var newSpan = document.createElement('span');
        emojiDiv.appendChild(newSpan);
        newSpan.innerHTML = "😀";
    } else if (textField.includes(":P")) {
        var newSpan = document.createElement('span');
        emojiDiv.appendChild(newSpan);
        newSpan.innerHTML = "😛";
    } else if (textField.includes(";)")) {
        var newSpan = document.createElement('span');
        emojiDiv.appendChild(newSpan);
        newSpan.innerHTML = "😉";
    } else if (textField.includes("B)")) {
        var newSpan = document.createElement('span');
        emojiDiv.appendChild(newSpan);
        newSpan.innerHTML = "😎";
    } else if (textField.includes("8)")) {
        var newSpan = document.createElement('span');
        emojiDiv.appendChild(newSpan);
        newSpan.innerHTML = "🤓";
    }
}

function fontChange(newVal) {
    document.getElementById('emojis').style.fontSize = newVal;
}



setInterval(function () {
    if (document.getElementById('emojis').hasChildNodes()) {
        var emojiList = document.getElementById('emojis');
        emojiList.removeChild(emojiList.childNodes[0]);
    }
}, 2000)

function disableButton() {
    var regex = /:\)|:\(|:D|:P|;\)|B\)|8\)/
    var textField = document.getElementById('text').value;
    if (regex.test(textField) == false) {
        document.getElementById('emote').disabled = true;
    } else {
        document.getElementById('emote').disabled = false;
    }
}

