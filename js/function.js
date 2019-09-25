(function($) {
  $.scrollify({
        section:".slider",
        scrollbars:false,
        before: function(i,panels) {
          var ref = panels[i].attr("data-section-name");

          $(".side-menu a.active").removeClass("active");

          $(".side-menu a[href=#" + ref + "]").addClass("active");
          /*
          if(ref==="features") {
            $(".features .gallery0,.features .gallery1,.features .gallery2").addClass("moved");

          }*/
          console.log(panels[i])
          panels[i].addClass("moved");
          if(ref==="home") {
            $(".slider2").removeClass("moved");
            $(".slider3").css("top",0);
          }
          if(ref==="about") {
            $(".slider3").removeClass("moved");
             initialPosition();
          }
          if(ref==="brewery") {
            $(".slider4").removeClass("moved");
            initialPosition();
          }
          if(ref==="brewmasters") {
            $(".slider5").removeClass("moved");
            initialPosition();
          }
          if(ref==="meethopper") {
            $(".slider6").removeClass("moved");
            initialPosition();
          }
          if(ref==="witbier") {
            $(".slider7").removeClass("moved");
            initialPosition();
          }
          if(ref==="blonde") {
            $(".slider8").removeClass("moved");
          }
          if(ref==="culture") {
            $(".slider8").addClass("moved");
            $(".slider8").css("top",0);
          }
        },
        after:function(i,panels) {
          var ref = panels[i].attr("data-section-name");

          if(ref==="home") {
            $(".about").removeClass("moved");
          }
          for(var j = 0;j < panels.length;j++) {
            if(j>i) {

              //panels[j].find(".moved").removeClass("moved");
            }
          }
        },
        afterResize:initialPosition,
        afterRender:initialPosition
        });

      $(".side-menu a").on("click",function() {
         $.scrollify.move($(this).attr("href"));
      });

      function initialPosition() {

        var current = $.scrollify.current();

        if(current.hasClass("slider8")===false) {
          // var height = parseInt($(".slider8").height());
          // var f = parseInt($(".slider7").height()) - 50;

          // var top = 0 - (height*0.4) - (height-f);
          // $(".slider8").css("top",top);
        } else {
          $(".slider7").addClass("moved");
        }

      }  

  $(document).ready(function(){

        $(document).on('click','.hamburger-icon',function(e){
            $('.main').toggleClass('menuopen');
            e.preventDefault();
        })
        $(document).on('click','.overlay',function(e){
             $('.main').removeClass('menuopen');

        })
        $(document).on('click','.video',function(){
            var video = document.getElementById("videoID"); 
            $('.overlayVideo').show();
            $('#divVideo').show();
            video.play()
        })
         $(document).on('click','.overlayVideo',function(){
             var video = document.getElementById("videoID"); 
            $('.overlayVideo').hide();
            $('#divVideo').hide();
            video.pause();
            video.currentTime = 0;
        })
    });

})(jQuery);
