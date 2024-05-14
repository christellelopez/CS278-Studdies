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
