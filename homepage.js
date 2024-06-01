// Function to resize images to a uniform size
function resizeModalImages() {
    var modalImages = document.querySelectorAll('.modal-image');
    modalImages.forEach(function(img) {
        img.style.width = '300px';
        img.style.height = '400px';
        img.style.objectFit = 'cover';
    });
}

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    resizeModalImages();

    // Get references to the modals and overlay
    var modals = {
        'class1': [document.getElementById("modal1-class1"), document.getElementById("modal2-class1"), document.getElementById("modal3-class1")],
        'class2': [document.getElementById("modal1-class2"), document.getElementById("modal2-class2")],
        'class3': [document.getElementById("modal1-class3"), document.getElementById("modal2-class3")],
        'class4': [document.getElementById("modal1-class4"), document.getElementById("modal2-class4")]
    };
    var overlay = document.getElementById("overlay");

    var buttons = {
        'class1': [document.getElementById("btn1-class1"), document.getElementById("btn2-class1"), document.getElementById("btn3-class1")],
        'class2': [document.getElementById("btn1-class2"), document.getElementById("btn2-class2")],
        'class3': [document.getElementById("btn1-class3"), document.getElementById("btn2-class3")],
        'class4': [document.getElementById("btn1-class4"), document.getElementById("btn2-class4")]
    };

    // Function to filter names within a class
    function filterNames(className) {
        var input, filter, buttons, buttonText, i, txtValue;
        input = document.getElementById('search-' + className);
        filter = input.value.toUpperCase();
        buttons = document.querySelectorAll('#' + className + '-content .modal-button');

        for (i = 0; i < buttons.length; i++) {
            buttonText = buttons[i].querySelector('.button-text');
            txtValue = buttonText.textContent || buttonText.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                buttons[i].style.display = "";
            } else {
                buttons[i].style.display = "none";
            }
        }
    }

    // When the user clicks on the button, open the modals
    for (var className in buttons) {
        buttons[className].forEach((button, index) => {
            button.onclick = function(event) {
                openModal(modals[className][index], event);
            }
        });
    }

    // When the user clicks anywhere outside of the modals, close them and hide the overlay
    window.onclick = function(event) {
        if (event.target == overlay) {
            for (var className in modals) {
                modals[className].forEach(modal => closeModal(modal));
            }
            overlay.style.display = "none"; // Hide overlay
        }
    }

    // Toggle connect buttons
    var connectButtons = document.querySelectorAll('.connect-button');
    connectButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            toggleLike(event.target);
        });
    });

    // Expose filterNames function globally
    window.filterNames = filterNames;
});

// Function to go to the homepage
function goHome() {
    window.location.href = "homepage.html";
}

// Function to toggle the connect button
function toggleLike(button) {
    if (button.classList.contains("connect-button")) {
        button.classList.remove("connect-button");
        button.classList.add("liked-button");
        button.textContent = "Liked";
    } else {
        button.classList.remove("liked-button");
        button.classList.add("connect-button");
        button.textContent = "Connect";
    }
}

// Function to open the modal and show the overlay
function openModal(modal, event) {
    // Check if the clicked element is the connect button
    if (event.target.classList.contains("connect-button")) {
        return; // Do nothing if the clicked element is the connect button
    }
    modal.style.display = "block";
    overlay.style.display = "block";
}

// Function to close the modal and hide the overlay
function closeModal(modal) {
    modal.style.display = "none";
    overlay.style.display = "none";
}

// Function to show class people and hide the rest of the content
function showClass(selectedClass) {
    // Hide the welcome message, Spring 2024 heading, and class boxes
    document.querySelector('.welcome').style.display = 'none';
    document.querySelector('.content-full-width').style.display = 'none';

    // Hide all class contents
    var classSections = document.querySelectorAll('.class-section');
    classSections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the specific class content
    var selectedContent = document.getElementById(selectedClass + "-content");
    selectedContent.style.display = "block";
    document.querySelector('.class-content').style.display = "block";

    // Update active state for nav buttons
    var navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(function(button) {
        button.classList.remove('active');
    });
    
    // Add active state to the corresponding nav button
    var activeButton = document.querySelector(`.nav-btn[onclick="showClass('${selectedClass}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}


// Get references to the modals and overlay
var modal1class1 = document.getElementById("modal1-class1");
var modal2class1 = document.getElementById("modal2-class1");
var modal3class1 = document.getElementById("modal3-class1");
var modal1class2 = document.getElementById("modal1-class2");
var modal2class2 = document.getElementById("modal2-class2");
var modal1class3 = document.getElementById("modal1-class3");
var modal2class3 = document.getElementById("modal2-class3");
var modal1class4 = document.getElementById("modal1-class4");
var modal2class4 = document.getElementById("modal2-class4");
var overlay = document.getElementById("overlay");

// Get the button elements that open the modals
var btn1class1 = document.getElementById("btn1-class1");
var btn2class1 = document.getElementById("btn2-class1");
var btn3class1 = document.getElementById("btn3-class1");
var btn1class2 = document.getElementById("btn1-class2");
var btn2class2 = document.getElementById("btn2-class2");
var btn1class3 = document.getElementById("btn1-class3");
var btn2class3 = document.getElementById("btn2-class3");
var btn1class4 = document.getElementById("btn1-class4");
var btn2class4 = document.getElementById("btn2-class4");

// When the user clicks on the button, open the modals
btn1class1.onclick = function(event) {
    openModal(modal1class1, event);
}
btn2class1.onclick = function(event) {
    openModal(modal2class1, event);
}
btn3class1.onclick = function(event) {
    openModal(modal3class1, event);
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
btn1class4.onclick = function(event) {
    openModal(modal1class4, event);
}
btn2class4.onclick = function(event) {
    openModal(modal2class4, event);
}

// When the user clicks anywhere outside of the modals, close them and hide the overlay
window.onclick = function(event) {
    if (event.target == overlay) {
        closeModal(modal1class1);
        closeModal(modal2class1);
        closeModal(modal3class1);
        closeModal(modal1class2);
        closeModal(modal2class2);
        closeModal(modal1class3);
        closeModal(modal2class3);
        closeModal(modal1class4);
        closeModal(modal2class4);
        overlay.style.display = "none"; // Hide overlay
    }
}

// Toggle connect buttons
var connectButtons = document.querySelectorAll('.connect-button');
connectButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        toggleLike(event.target);
    });
});
