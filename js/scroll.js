$(document).ready(function() {
    $("aside a").on("click", function(e) {
        e.preventDefault();
        var hash = this.hash;
        $("html, body").animate({
            scrollTop: $(hash).offset().top,
        }, 400, function() {
            window.location.hash = hash;
        })
    });
});
