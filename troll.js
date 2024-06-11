var love = document.getElementById("love");
var no_love =document.getElementById("no-love");

love.addEventListener("click", myFunction);
function myFunction(){
 alert('Umbala......Điều ước của Cá sẽ được thực hiện sau 1 ngày nữa')
}

no_love.addEventListener("mouseover",lovefunction);
function lovefunction(){
   no_love.classList.toggle('move')
}

$(function() {
    $("button").on({
      mouseover: function() {
        $(this).css({
          left: (Math.random() * 1600) + "px",
          top: (Math.random() * 500) + "px",
        });
      }
    });
  });
