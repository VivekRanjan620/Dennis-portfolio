// function page4Animation() {
//     var elemC = document.querySelector("#elem-container")
//     var fixed = document.querySelector("#fixed-image")
//     elemC.addEventListener("mouseenter", function () {
//         fixed.style.display = "block"
//     })
//     elemC.addEventListener("mouseleave", function () {
//         fixed.style.display = "none"
//     })

//     var elems = document.querySelectorAll(".elem")
//     elems.forEach(function (e) {
//         e.addEventListener("mouseenter", function () {
//             var image = e.getAttribute("data-image")
//             fixed.style.backgroundImage = `url(${image})`
//         })
//     })
// }
// page4Animation()



// LOCOMOTIVE-JS


// PAGE-03 //
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


// page-03-button
const button = document.querySelector('.pg2-btn');

button.addEventListener('mousemove', (e) => {
    const { left, top, width, height } = button.getBoundingClientRect();
    const x = e.clientX - left; 
    const y = e.clientY - top;  

    
    const xMove = ((x / width) - 0.5) * 20; 
    const yMove = ((y / height) - 0.5) * 20; 

  
    button.style.transform = `translate(${xMove}px, ${yMove}px)`;
});


button.addEventListener('mouseleave', () => {
    button.style.transform = 'translate(0, 0)';
});

// PAGE-02
const circleDiv = document.querySelector('.circle-div');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    circleDiv.style.transform = `translate(${x - circleDiv.clientWidth / 2}px, ${y - circleDiv.clientHeight / 2}px)`;
});

window.addEventListener('scroll', () => {
    circleDiv.style.transform = `translate(${circleDiv.offsetLeft}px, ${window.scrollY + 10}px)`;
});

// LOADER
function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}
loaderAnimation();

