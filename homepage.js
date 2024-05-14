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

function search() {
    var searchTerm = document.getElementById("searchInput").value;
    // Perform actions based on the search term, such as filtering content or querying a database
    console.log("Searching for:", searchTerm);
}

// Function to open the modal and show the overlay
function openModal(modal) {
    modal.style.display = "block";
    overlay.style.display = "block";
}

// Function to close the modal and hide the overlay
function closeModal(modal) {
    modal.style.display = "none";
    overlay.style.display = "none";
}

// Get references to the modals and overlay
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var overlay = document.getElementById("overlay");

// Get the button elements that open the modals
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

// Get the span elements that close the modals
var close1 = modal1.querySelector(".close");
var close2 = modal2.querySelector(".close");

// When the user clicks on the button, open the modals
btn1.onclick = function() {
    openModal(modal1);
}
btn2.onclick = function() {
    openModal(modal2);
}

// When the user clicks on <span> (x), close the modals
close1.onclick = function() {
    closeModal(modal1);
}
close2.onclick = function() {
    closeModal(modal2);
}

// When the user clicks anywhere outside of the modals, close them and hide the overlay
window.onclick = function(event) {
    if (event.target == overlay) {
        closeModal(modal1);
        closeModal(modal2);
    }
}
