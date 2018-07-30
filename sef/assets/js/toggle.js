$(document).ready(function () {
            $("#nav-btn").click(function () {
                $('aside').toggleClass("mini");
                $('aside').toggleClass("mobile");
                $('.main').toggleClass("mini");
            });
        });

        var menuBtnContainer = document.getElementById("menu-btn-container");
        var aid = document.getElementById("aside");



        window.onclick = function(event){
          if(event.target==aid){
          $('aside').removeClass("mobile");
          console.log(event.target);
          }

        }