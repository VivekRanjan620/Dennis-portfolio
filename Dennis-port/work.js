// HAMBURGUR
const hamburgerIcon = document.getElementById('hamburger-icon');
const crossIcon = document.getElementById('cross-icon');
const menu = document.getElementById('menu');

// Click event for the hamburger icon to open the menu
hamburgerIcon.addEventListener('click', () => {
    console.log("helo")
  menu.style.display = 'flex'; // Show the menu
  menu.style.flexDirection = 'column'; 
  hamburgerIcon.classList.add('hidden'); 
  crossIcon.classList.remove('hidden'); 
});

// Click event for the cross icon to close the menu
crossIcon.addEventListener('click', () => {
    menu.style.display = 'none'; // Hide the menu
    hamburgerIcon.classList.remove('hidden'); // Show the hamburger icon
    crossIcon.classList.add('hidden'); // Hide the cross icon
  });
  

  // PAGE-02 //
function page3Animation() {
    var elemC = document.querySelector("#elem-container");
    var fixed = document.querySelector("#fixed-image");

    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block";
    });

    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none";
        fixed.style.top = '0'; // Reset position
        fixed.style.left = '0'; // Reset position
        // Remove hover effect from all elements
        document.querySelectorAll(".elem").forEach(elem => {
            elem.classList.remove("hover-effect");
        });
    });

    var elems = document.querySelectorAll(".elem");
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed.style.backgroundImage = `url(${image})`;
            // Add hover effect class
            e.classList.add("hover-effect");
        });

        e.addEventListener("mouseleave", function () {
            // Remove hover effect class
            e.classList.remove("hover-effect");
        });
    });

    elemC.addEventListener("mousemove", function (e) {
        const { left, top } = elemC.getBoundingClientRect();
        fixed.style.left = `${e.clientX - left}px`;
        fixed.style.top = `${e.clientY - top}px`;
    });
}

page3Animation();