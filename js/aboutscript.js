/*script for about*/

 $(document).ready(function() {
 $('.hamburger-btn').click(function() {
 if ($('.nav-mobile').css('display') == 'none') {
 $('.nav-mobile').slideDown('slow');
 $('body').css('overflow', 'hidden');
 } else {
 $('.nav-mobile').slideUp('slow');
 $('body').css('overflow', 'auto');
 }
 });

 var myIndex = 0;
 carousel();
 function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
  x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
 }
 });
