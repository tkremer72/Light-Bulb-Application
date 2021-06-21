//About me Modal Control
$(document).ready(function(){
     $("#aboutMeBtn").click(function(){
       $("#aboutMeModal").modal();
     });
   });

   //Contact Form Modal Control
   $(document).ready(function(){
    $("#contactBtn").click(function(){
      $("#contactModal").modal();
    });
  });
  
//Toggle the light on or off using a JavaScript function and the onClick Method
function toggleSwitch(sw) {
    var image;
    if(sw == 0) {
      image = '/src/assets/images/bulb_off.gif';
    } else {
      image = '/src/assets/images/bulb_on.gif';
    }
    document.getElementById('light-bulb').src = image;
}

//Hambuerger Menu
/* Peferred method with JS Event Listener */
const toggleButton = document.getElementById('toggle-menu');
const naviList = document.getElementById('nav-list');
toggleButton.addEventListener('click', () => {
     naviList.classList.toggle('active');
})

/* HTML Event Method */

/* function toggleMenu() {
     const naviList = document.getElementById('navi-list');
     naviList.classList.toggle('active');
} */