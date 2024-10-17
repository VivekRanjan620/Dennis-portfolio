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
  


// Select the hamburger icon and sidebar elements
function hamburgers() {
  const hamburgerIcon = document.querySelector('.hamburger-menu');
  const menuToggle = document.querySelector('.menu-toggle'); 
  const sidebar = document.querySelector('.sidebar');

  // Function to toggle the 'show-sidebar' class on the sidebar
  function toggleSidebar() {
    sidebar.classList.toggle('show-sidebar');
  }

  // Function to close the sidebar when clicking outside of it
  function closeSidebarOnClickOutside(event) {
    if (!sidebar.contains(event.target) && !hamburgerIcon.contains(event.target) && !menuToggle.contains(event.target)) {
      // If the click happens outside the sidebar, hamburger, or menu toggle, remove 'show-sidebar'
      sidebar.classList.remove('show-sidebar');
    }
  }

  // Event listener for both hamburger and menu toggle buttons to toggle the sidebar
  hamburgerIcon.addEventListener('click', toggleSidebar);
  menuToggle.addEventListener('click', toggleSidebar); // Add event listener for the menu toggle button

  // Event listener for the document to close the sidebar when clicking outside of it
  document.addEventListener('click', closeSidebarOnClickOutside);
}

hamburgers();
