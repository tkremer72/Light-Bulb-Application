(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

//About me Modal Control
$(document).ready(function () {
  $("#aboutMeBtn").click(function () {
    $("#aboutMeModal").modal();
  });
}); //Contact Form Modal Control

$(document).ready(function () {
  $("#contactBtn").click(function () {
    $("#contactModal").modal();
  });
}); //Toggle the light on or off using a JavaScript function and the onClick Method

function toggleSwitch(sw) {
  var image;

  if (sw == 0) {
    image = '/src/assets/images/bulb_off.gif';
  } else {
    image = '/src/assets/images/bulb_on.gif';
  }

  document.getElementById('light-bulb').src = image;
} //Hambuerger Menu

/* Peferred method with JS Event Listener */


const toggleButton = document.getElementById('toggle-menu');
const naviList = document.getElementById('nav-list');
toggleButton.addEventListener('click', () => {
  naviList.classList.toggle('active');
});
/* HTML Event Method */

/* function toggleMenu() {
     const naviList = document.getElementById('navi-list');
     naviList.classList.toggle('active');
} */

},{}]},{},[1]);
