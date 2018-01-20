$(document).ready(function() {
    var orgHeight = $("#i-form form").outerHeight();

    $("form").css({
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0,
    });

    $("#open").on("click", function(e) {
        e.preventDefault();

        $("form").animate({
            height: orgHeight,
            paddingTop: "10px",
            paddingBottom: "10px",
            marginTop: "20px",
            marginBottom: 0,
        }, 300);


        $("#open").animate({
            height: 0,
            borderWidth: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 0,
            marginBottom: 0,
        }, 300);
    });
});