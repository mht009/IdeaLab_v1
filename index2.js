// Cache frequently used DOM elements
const homeBtn = document.getElementById("home-btn");
const room1Btn = document.getElementById("room1-btn");
const room2Btn = document.getElementById("room2-btn");
const room3Btn = document.getElementById("room3-btn");
const optionEl = document.querySelector(".option");
const topNav = document.querySelector(".top-nav");

// Set the home tab as active by default
homeBtn.classList.add("active");
changeTab(null, 'home');

// Add click event listener to optionEl to toggle top nav
optionEl.addEventListener('click', () => {
    topNav.classList.toggle("active");
});

// Add click event listeners to tab buttons
homeBtn.addEventListener('click', (event) => {
    changeTab(event, 'home');
    optionEl.click();
});

room1Btn.addEventListener('click', (event) => {
    changeTab(event, 'room1');
    optionEl.click();
});

room2Btn.addEventListener('click', (event) => {
    changeTab(event, 'room2');
    optionEl.click();
});

room3Btn.addEventListener('click', (event) => {
    changeTab(event, 'room3');
    optionEl.click();
});

// Define changeTab function
function changeTab(evt, cID) {
    // Get all elements with class="tabcontent" and hide them
    const tabcontent = document.getElementsByClassName("room");
    for (const content of tabcontent) {
        content.style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    const tablinks = document.getElementsByClassName("tab");
    for (const link of tablinks) {
        link.classList.remove("active");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cID).style.display = "block";
    if (evt) {
        evt.currentTarget.classList.add("active");
    }
}

// Simulate click on homeBtn to set initial state 
homeBtn.click();
homeBtn.click();
