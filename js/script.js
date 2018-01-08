// Keep everything within this function.
window.onload = function() {
    // Include the header HTML.
    w3.includeHTML(function() {
        // Dropdown menu.
        $("#dropdown-container").hover(function() {
            $("#dropdown-content").addClass("show");
            $("#dropdown").css("background-color", "#f73e4d");
        }, function() {
            $("#dropdown-content").removeClass("show");
            $("#dropdown").css("background-color", "#ed2939");
        });
    });
};
