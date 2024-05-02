<!--
$(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("hamburger-active");
  });
});
-->



document.querySelector(".hamburger-menu").addEventListener("click", () =&gt; {
    document.querySelector(".nav-links").classList.toggle("show-menu");
});