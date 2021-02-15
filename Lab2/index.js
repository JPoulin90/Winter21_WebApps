"use strict";

let myMap;
const myCanvas = document.getElementById("canvas");
const canvCont = canvas.getContext("2d");
window.addEventListener("load", resizeCanvas, false);
window.addEventListener("resize", resizeCanvas, false);

function startStroke(event){
    document.addEventListener("pointermove", dragStroke, false);
    document.addEventListener("pointerup", endStroke, false);
    let x = event.clientX;
    let y = event.clientY;
    canvCont.lineWidth = 5;
    canvCont.strokeStyle = "#000000";
    canvCont.lineJoin = "round";
    canvCont.lineCap = "round";
    canvCont.beginPath();
    canvCont.moveTo(x,y);
}

function dragStroke(event){
    let x = event.clientX;
    let y = event.clientY;
    canvCont.lineTo(x,y);
    canvCont.stroke();
    canvCont.beginPath();
    canvCont.moveTo(x,y);
}

function endStroke(){
    document.removeEventListener("pointermove", dragStroke, false);
    document.removeEventListener("pointerup", endStroke, false);
}

function resizeCanvas(){
    let imgData = canvCont.getImageData(0, 0, canvas.width, canvas.height);
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    canvCont.putImageData(imgData, 0, 0);
}

function initMap(){
    myMap = new google.maps.Map(document.getElementById("map"),{
        center: {lat: 46.534039, lng: -84.313061},
        zoom: 15,
    });

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            const pos = {lat: position.coords.latitude, lng: position.coords.longitude};
            map.setCenter(pos);
        })
    }
}