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