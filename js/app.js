const closeWindow = document.querySelector(".fa-times");
const searchIcon = document.getElementById("search-icon");
const popUpSearch = document.getElementById("search-pop-up");
searchIcon.addEventListener("click", () => {
    popUpSearch.style.display = "block";
    document.body.classList.add("layer");
});

closeWindow.addEventListener("click", () => {
    popUpSearch.style.display = "none";
    document.body.classList.remove("layer");
});
let counters;
let windowHeight;
function init() {
    counters = document.querySelectorAll(".counter-container");
    windowHeight = window.innerHeight;
}

function checkPosition() {
    for (var i = 0; i < counters.length; i++) {
        var counter = counters[i];
        var positionFromTop = counters[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
            counter.firstElementChild.classList.add("counter-animation");
        }
        if (positionFromTop - windowHeight > 0) {
            counter.firstElementChild.classList.add("counter-animation");
        }
    }
}

window.addEventListener("scroll", checkPosition);
window.addEventListener("resize", init);

init();
checkPosition();

//nav bar
const moblieNav = document.querySelector(".moblie-nav");
const headerNav = document.querySelector(".header-nav");
const ctrlBtn = document.querySelector(".ctrl-btn");
const body = document.body;
const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

if (innerWidth <= 768) {
    moblieNav.style.display = "";
    headerNav.style.display = "none";
} else {
    moblieNav.style.display = "none";
    headerNav.style.display = "";
}

ctrlBtn.addEventListener("click", () => {
    body.classList.toggle("layer-body", "hidden-scroll");
    sideBar.classList.toggle("show");
    document.documentElement.classList.toggle("hidden-scroll");
});
closeBtn.addEventListener("click", () => {
    body.classList.remove("layer-body", "hidden-scroll");
    sideBar.classList.toggle("show");
    document.documentElement.classList.toggle("hidden-scroll");
});

//product detail
document.addEventListener("DOMContentLoaded", function () {
    // Image gallery functionality
    const mainImage = document.getElementById("mainImage");
    const thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach((thumb) => {
        thumb.addEventListener("click", function () {
            mainImage.src = this.src;
        });
    });

    // Zoom button functionality
    const zoomBtn = document.querySelector(".zoom-btn");
    zoomBtn.addEventListener("click", function () {
        mainImage.requestFullscreen().catch((err) => {
            console.log("Error attempting to enable fullscreen:", err.message);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Tab functionality
    const tabButtons = document.querySelectorAll(".tab-button");

    tabButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const tabName = this.getAttribute("data-tab");
            openTab(tabName);
        });
    });

    // Initialize the first tab as active
    document.querySelector(".tab-button").click();
});

function openTab(tabName) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName("tab-content");
    for (let content of tabContents) {
        content.classList.remove("active");
    }

    // Remove active class from all buttons
    const tabButtons = document.getElementsByClassName("tab-button");
    for (let button of tabButtons) {
        button.classList.remove("active");
    }

    // Show the selected tab content
    document.getElementById(tabName).classList.add("active");

    // Add active class to the clicked button
    document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");
}