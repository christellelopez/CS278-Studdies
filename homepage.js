// Function to toggle the like button
function toggleLike(button) {
    if (button.classList.contains("like-button")) {
        button.classList.remove("like-button");
        button.classList.add("liked-button");
        button.textContent = "Liked";
    } else {
        button.classList.remove("liked-button");
        button.classList.add("like-button");
        button.textContent = "Like";
    }
}

// Function to open the modal and show the overlay
function openModal(modal, event) {
    // Check if the clicked element is the like button
    if (event.target.classList.contains("like-button")) {
        return; // Do nothing if the clicked element is the like button
    }
    modal.style.display = "block";
    overlay.style.display = "block";
}

// Function to close the modal and hide the overlay
function closeModal(modal) {
    modal.style.display = "none";
    overlay.style.display = "none";
}

// Function to show modals based on the selected class
function showModals(selectedOption) {
    // Show content for the selected class
    var classes = ["class1", "class2", "class3"];
    classes.forEach((c) => {
        var selectedContent = document.getElementById(c + "-content");
        if (selectedOption == c) {
            selectedContent.style.display = "";
        }
        else {
            selectedContent.style.display = "none";
            console.log(selectedContent)
        }
    });
}

// Get references to the modals and overlay
var modal1class1 = document.getElementById("modal1-class1");
var modal2class1 = document.getElementById("modal2-class1");
var modal1class2 = document.getElementById("modal1-class2");
var modal2class2 = document.getElementById("modal2-class2");
var modal1class3 = document.getElementById("modal1-class3");
var modal2class3 = document.getElementById("modal2-class3");
var overlay = document.getElementById("overlay");

// Get the button elements that open the modals
var btn1class1 = document.getElementById("btn1-class1");
var btn2class1 = document.getElementById("btn2-class1");
var btn1class2 = document.getElementById("btn1-class2");
var btn2class2 = document.getElementById("btn2-class2");
var btn1class3 = document.getElementById("btn1-class3");
var btn2class3 = document.getElementById("btn2-class3");

// Get the span elements that close the modals
var close1 = modal1class1.querySelector(".close");
var close2 = modal2class1.querySelector(".close");
var close3 = modal1class2.querySelector(".close");
var close4 = modal2class2.querySelector(".close");
var close5 = modal1class3.querySelector(".close");
var close6 = modal2class3.querySelector(".close");

// When the user clicks on the button, open the modals
btn1class1.onclick = function(event) {
    openModal(modal1class1, event);
}
btn2class1.onclick = function(event) {
    openModal(modal2class1, event);
}
btn1class2.onclick = function(event) {
    openModal(modal1class2, event);
}
btn2class2.onclick = function(event) {
    openModal(modal2class2, event);
}
btn1class3.onclick = function(event) {
    openModal(modal1class3, event);
}
btn2class3.onclick = function(event) {
    openModal(modal2class3, event);
}

// When the user clicks on <span> (x), close the modals
close1.onclick = function() {
    closeModal(modal1class1);
}
close2.onclick = function() {
    closeModal(modal2class1);
}
close3.onclick = function() {
    closeModal(modal1class2);
}
close4.onclick = function() {
    closeModal(modal2class2);
}
close5.onclick = function() {
    closeModal(modal1class3);
}
close6.onclick = function() {
    closeModal(modal2class3);
}

// When the user clicks anywhere outside of the modals, close them and hide the overlay
window.onclick = function(event) {
    if (event.target == overlay) {
        closeModal(modal1class1);
        closeModal(modal2class1);
        closeModal(modal1class2);
        closeModal(modal2class2);
        closeModal(modal1class3);
        closeModal(modal2class3);
    }
}

// Function to search
function search() {
    var searchTerm = document.getElementById("searchInput").value;
    // Perform actions based on the search term, such as filtering content or querying a database
    console.log("Searching for:", searchTerm);
}

// Toggle like buttons
var likeButtons = document.querySelectorAll('.like-button');
likeButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        toggleLike(event.target);
    });
});

// Call showModals initially to show content based on the selected class
showModals("class0");