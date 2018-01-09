var slideshowData = [
    {
        image: "mbs.png",
        h3: "The Luxurious",
        h1: "Marina Bay Sands",
        url: "marina-bay-sands.html",
    },
    {
        image: "gbtb.jpg",
        h3: "The Extravagant",
        h1: "Gardens by the Bay",
        url: "gardens-by-the-bay.html",
    },
    {
        image: "sgflyer.jpg",
        h3: "The Revolutionary",
        h1: "Singapore Flyer",
        url: "singapore-flyer.html",
    },
    {
        image: "merlion.jpg",
        h3: "The Majestic",
        h1: "Merlion of Singapore",
        url: "merlion.html",
    },
];
var currentSlide = 0;

$(document).ready(function() {
    // Set slideshow timer
    setInterval(function() {
        // Update current slide
        currentSlide = (currentSlide + 1) % slideshowData.length;
        updateSlide();
    }, 5000);
});

// Updates the current image
function updateSlide() {
    // Get current slide data
    var slide = slideshowData[currentSlide];

    // Create temporary image and update data
    var tempDiv =
        $("#slideshow")
        .clone()
        .hide()
        .css({
            position: "absolute",
            width: "100%",
            height: "100%",
            "z-index": 1,
            "background-image": 'url("../media/' + slide.image + '")',
        })
        .prependTo("main")
    tempDiv.find("#slideshow-content h3").text(slide.h3);
    tempDiv.find("#slideshow-content h1").text(slide.h1);
    tempDiv.fadeIn(function() {
        // Remove temporary, add real
        tempDiv.remove();

        // Update data
        $("#slideshow-content h3").text(slide.h3);
        $("#slideshow-content h1").text(slide.h1);
        $("#slideshow").css("background-image", 'url("../media/' + slide.image + '")');
    });
}
