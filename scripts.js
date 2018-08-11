window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});

$(document).ready(function(){


  // init controller
  var controller = new ScrollMagic.Controller();

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

    } // End if
  });

  handwriting(controller);
  popup(controller);

  // $('.pp-carousel').slick({
  //   adaptiveHeight: true
  // });

  // adds flip to cards; can clean later with es6
  $("#pp1").flip({trigger: "hover"});
  $("#pp2").flip({trigger: "hover"});
  $("#pp3").flip({trigger: "hover"});
  $("#pp4").flip({trigger: "hover"});

});

// $(function topButton(){
//   $(window).scroll($.throttle(500, function () {
//     if (window.scrollY > 60) {
//       $('#backToTop').fadeIn('slow');
//     } else {
//       $('#backToTop').fadeOut('slow');
//     }
//   }));
// })

// $(function scrollTop() {
//   $('#backToTop').on('click', function(){
//     // $("html, body").animate({ scrollTop: 0 }, 500);
//     // return;
//     $.scrollify.move("#home");
//   });
// })
//
// $(function scroll() {
//   $.scrollify({
//     section : ".section",
//     sectionName : "section-name",
//   });
// })

// https://github.com/jlmakes/scrollreveal

window.sr = ScrollReveal({
  duration: 500,
  delay: 500,
  distance: '10px',
  reset: true,
  scale: .95,
});
// sr.reveal('#about-1');
// sr.reveal('#about-2');
// sr.reveal('#about-3');
sr.reveal('.bar', { origin: 'left', duration: 500 }, 250);
// sr.reveal('#about-4', { delay: 1000, duration: 500 });
sr.reveal(".pp", { origin: "left", distance: "100px", duration: 400, easing: "linear", scale: 1})
sr.reveal(".pp-title", { origin: "bottom", distance: "100px", duration: 400, easing: "linear", scale: 1})
sr.reveal(".uxp", { origin: "right", distance: "100px", duration: 400, easing: "linear", scale: 1})
sr.reveal(".uxp-title", { origin: "bottom", distance: "100px", duration: 400, easing: "linear", scale: 1})

function handwriting(controller) {
  var $p1 = document.getElementById("p1");
  var $p2 = document.getElementById("p2");
  var $p3 = document.getElementById("p3");
  var $p4 = document.getElementById("p4");
  var $p5 = document.getElementById("p5");
  var $p6 = document.getElementById("p6");
  var $p7 = document.getElementById("p7");

  function pathPrepare(el) {
    var lineLength = el.getTotalLength();
    $(el).css({'stroke-dasharray': lineLength});
    $(el).css({'stroke-dashoffset': lineLength});
  }

  pathPrepare($p1);
  pathPrepare($p2);
  pathPrepare($p3);
  pathPrepare($p4);
  pathPrepare($p5);
  pathPrepare($p6);

  // build tween
  var tween = new TimelineMax()
    .add(TweenMax.to($p1, 0.3, {strokeDashoffset: 0, ease: Linear.easeNone})) // draw h for 0.75
    .add(TweenMax.to($p2, 0.3, {strokeDashoffset: 0, ease: Linear.easeNone}))
    .add(TweenMax.to($p3, 0.3, {strokeDashoffset: 0, ease: Linear.easeNone}))
    .add(TweenMax.to($p4, 0.3, {strokeDashoffset: 0, ease: Linear.easeNone}))
    .add(TweenMax.to($p5, 0.3, {strokeDashoffset: 0, ease: Linear.easeNone}))
    .add(TweenMax.to($p6, 0.3, {strokeDashoffset: 0, ease: Linear.easeNone}))

  var scene = new ScrollMagic.Scene({triggerElement: "#propic", duration: 400, offset: 100, tweenChanges: true})
  	.setTween(tween)
    // .addIndicators()
  	.addTo(controller)



}


function popup(controller) {

  // Scale Animation Setup
  // .to('@target', @length, {@object})
  var scale_tween = TweenMax.to('#propic', 1, {
    transform: 'scale(1)',
    ease: Linear.easeNone
  });

  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#about", duration: 400, offset: 0})
          .setTween(scale_tween) // trigger a TweenMax.to tween
          // .addIndicators({name: "propic"}) // add indicators (requires plugin)
          .addTo(controller);

}
