let main_preloader = document.getElementById("preloader_preload");
function newFunction(element){
   element.style.opacity = 1;
let  inter_preloader = setInterval(function(){
   element.style.opacity = element.style.opacity - 0.05;
if (element.style.opacity <= 0.05){
 clearInterval(inter_preloader);
 main_preloader.style.display = "none";
}
},16);
}
window.onload = function(){setTimeout(function(){newFunction(main_preloader);},1500);};