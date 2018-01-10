var slideshowData = [
    {
        image: "tampines.png",
        h3: "Hang out in",
        h1: "Tampines West",
        url: "tampines.html",
    },
    {
        image: "clementi.png",
        h3: "Simply",
        h1: "Clementi",
        url: "#",
    },
    {
        image: "yuhua.png",
        h3: "Have fun in",
        h1: "Yuhua",
        url: "#",
    },
    {
        image: "jurong.png",
        h3: "Look forward to",
        h1: "Jurong Green",
        url: "#",
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
        $("#slideshow-content a").attr("href", slide.url);
    });
}
