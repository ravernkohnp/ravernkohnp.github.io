$(document).ready(function() {
    // Include the header HTML.
    w3.includeHTML(function() {
        // Dropdown menu.
        $("#dropdown-container").hover(toggleDropdown(true), toggleDropdown(false));
        $("#dropdown").on("click touch", toggleDropdown());
    });
});

// Toggles the dropdown.
var droppeddown = false;
function toggleDropdown(force) {
    return function() {
        droppeddown = !droppeddown;
        if (force !== undefined) {
            droppeddown = force;
        }
        if (droppeddown) {
            var height = getDropdownHeight();
            $("#dropdown-content").animate({
                height: height + "px",
            }, 150);
            $("#dropdown").css("color", "black")
            $("#dropdown").css("background-color", "white")
        } else {
            $("#dropdown-content").animate({
                height: 0,
            }, 150, function() {
                $("#dropdown").css("color", "white")
                $("#dropdown").css("background-color", "")
            });
        }
    };
}

// Get the height of dropdown content.
function getDropdownHeight() {
    var content = $("#dropdown-content");
    var height;
    content
        .css("overflow", "auto")
        .css("height", "auto");
    height = content.outerHeight();
    content
        .css("overflow", "hidden")
        .css("height", "0");
    return height;
}
