// LOCOMOTIVE

function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco();

// PAGE-02 //
// function page3Animation() {
//     var elemC = document.querySelector("#elem-container");
//     var fixed = document.querySelector("#fixed-image");

//     elemC.addEventListener("mouseenter", function () {
//         fixed.style.display = "block";
//     });

//     elemC.addEventListener("mouseleave", function () {
//         fixed.style.display = "none";
//         fixed.style.top = '0'; 
//         fixed.style.left = '0'; 
//         document.querySelectorAll(".elem").forEach(elem => {
//             elem.classList.remove("hover-effect");
//         });
//     });

//     var elems = document.querySelectorAll(".elem");
//     elems.forEach(function (e) {
//         e.addEventListener("mouseenter", function () {
//             var image = e.getAttribute("data-image");
//             fixed.style.backgroundImage = `url(${image})`;
          
//             e.classList.add("hover-effect");
//         });

//         e.addEventListener("mouseleave", function () {
//             e.classList.remove("hover-effect");
//         });
//     });

//     elemC.addEventListener("mousemove", function (e) {
//         const { left, top } = elemC.getBoundingClientRect();
//         fixed.style.left = `${e.clientX - left}px`;
//         fixed.style.top = `${e.clientY - top}px`;
//     });
// }
// page3Animation();


// page-03-button
// const button = document.querySelector('.pg2-btn');

// button.addEventListener('mousemove', (e) => {
//     const { left, top, width, height } = button.getBoundingClientRect();
//     const x = e.clientX - left; 
//     const y = e.clientY - top;  

    
//     const xMove = ((x / width) - 0.5) * 20; 
//     const yMove = ((y / height) - 0.5) * 20; 

  
//     button.style.transform = `translate(${xMove}px, ${yMove}px)`;
// });


// button.addEventListener('mouseleave', () => {
//     button.style.transform = 'translate(0, 0)';
// });



// MODERN-WEB
// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao, jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab hai mouse ki x and y position pata karo, ab mouse ki x y position ke badle us image ko show karo and us image ko move karo, move karte waqt rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi tez ho jaye

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
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
  



//   function circleChaptaKaro() {
//     var xscale = 1;
//     var yscale = 1;
  
//     var xprev = 0;
//     var yprev = 0;
  
//     window.addEventListener("mousemove", function (dets) {
//       clearTimeout(timeout);
  
//       xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
//       yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
//       xprev = dets.clientX;
//       yprev = dets.clientY;
  
//       circleMouseFollower(xscale, yscale);
  
//       timeout = setTimeout(function () {
//         document.querySelector(
//           "#minicircle"
//         ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
//       }, 100);
//     });
//   }
  
//   function circleMouseFollower(xscale, yscale) {
//     window.addEventListener("mousemove", function (dets) {
//       document.querySelector(
//         "#minicircle"
//       ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
//     });
//   }
  
//   circleChaptaKaro();
//   circleMouseFollower();