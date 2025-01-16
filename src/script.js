

import { CreateNav,CreateFoot } from "./component.js";

document.getElementById("nav1").innerHTML=CreateNav();



document.getElementById("foot1").innerHTML=CreateFoot();


// Jquery NavBar
$(document).ready(function(){
    
    $(".nav_sub_2").hide();
    $(".nav_menu_bar").hide();

  $(".nav_sub_1").click(function(){
     $(".nav_sub_2").toggle(500);
    //  $(".shop_1").css("border-top","2px solid #274C5B");
  });

  $(".nav_menu").click(function(){
     $(".nav_menu_bar").toggle(300);
  })

});
// Jquery NavBar