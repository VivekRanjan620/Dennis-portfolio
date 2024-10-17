  function loco(){
      gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  }
  loco();
  // teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo
  //  ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke
  //  badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse 
  // tez chale waise waise rotation bhi tez ho jaye

  document.querySelectorAll(".elem").forEach(function (elem) {
      var rotate = 0;
      var diffrot = 0;
    
      elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
          opacity: 0,
          ease: Power3,
          duration: 0.5,
        });
      });
    
      elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
          opacity: 1,
          ease: Power3,
          top: diff,
          left: dets.clientX,
          // rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
      });
    });  

    // LOADER
    function loaderAnimation() {
      var loader = document.querySelector(".loader")
      setTimeout(function () {
          loader.style.top = "-100%"
      }, 2000)
  }
  loaderAnimation()

  //CURSOR-ANIMATION
  var main = document.querySelector(".main")
  var cursor = document.querySelector(".cursor")
  var imgDiv = document.querySelector("#second")

  main.addEventListener("mousemove",function(dets){
      gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out",

      })
  })

  // imgDiv.addEventListener("mouseenter",function(){
  //   cursor.innerHTML="View"
  //   gsap.to(cursor,{
  //     scale:4,
  //     backgroundColor:" rgb(71, 62, 190)",
  //   })
  // })
  

  // imgDiv.addEventListener("mouseleave",function(){
  //   cursor.innerHTML=""
  //   gsap.to(cursor,{
  //     scale:0,
  //     backgroundColor:""
  //   })
  // })
  
  // HAMBURGER
function hamburger(){
  const hamburgerIcon = document.getElementById('hamburger-icon');
const crossIcon = document.getElementById('cross-icon');
const menu = document.getElementById('menu');

hamburgerIcon.addEventListener('click', () => {
  menu.classList.add('active'); 
  hamburgerIcon.classList.add('hidden'); 
  crossIcon.classList.remove('hidden');
});

crossIcon.addEventListener('click', () => {
  menu.classList.remove('active'); 
  hamburgerIcon.classList.remove('hidden'); 
  crossIcon.classList.add('hidden');
});
}
hamburger()


//MENU
function menu(){
  document.querySelector('.menu-toggle').addEventListener('click', function() {
    // Toggle menu and cross icon visibility
    const menu = document.querySelector('.nav-second');
    const crossIcon = document.getElementById('cross-icon-nav');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
  
    menu.classList.toggle('menu-open');
    crossIcon.classList.toggle('visible'); 
  
    // Show or hide the hamburger icon and change background color for the cross icon
    if (menu.classList.contains('menu-open')) {
        hamburgerIcon.classList.add('hidden'); 
        crossIcon.classList.add('active'); 
    } else {
        hamburgerIcon.classList.remove('hidden');
        crossIcon.classList.remove('active');
    }
  });
  
  // Add event listener for the cross icon to close the menu
  document.getElementById('cross-icon-nav').addEventListener('click', function() {
    const menu = document.querySelector('.nav-second');
    const crossIcon = document.getElementById('cross-icon-nav');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
  
    menu.classList.remove('menu-open');
    crossIcon.classList.remove('visible');
    hamburgerIcon.classList.remove('hidden'); 
    crossIcon.classList.remove('active'); 
  });
}
menu();

