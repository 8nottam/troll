var love = document.getElementById("love");
var no_love =document.getElementById("no-love");

love.addEventListener("click", myFunction);
function myFunction(){
 alert('Hehehe.......Bát biết mà, chếc rùi Bát ngại waaaa, ngại waaaa <3333')
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
