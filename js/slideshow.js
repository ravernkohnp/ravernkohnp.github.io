var slideshowData = [
    {
        image: "vesuvius.jpg",
        h3: "Pompeii, Italy",
        h1: "Moust Vesuvius",
        url: "vesuvius.html",
    },
    {
        image: "krakatoa.jpg",
        h3: "Indonesia",
        h1: "Krakatoa",
        url: "krakatoa.html",
    },
    {
        image: "st-helens.jpg",
        h3: "Washington, USA",
        h1: "Mount St. Helens",
        url: "st.helens.html",
    },
    {
        image: "eyjafjallajokull.jpg",
        h3: "Iceland",
        h1: "Eyjafjallajökull",
        url: "eyjafjallajokull.html",
    },
];
var currentSlide = 0;

function slideshowReady() {
    // Set slideshow timer
    setInterval(function() {
        // Update current slide
        currentSlide = (currentSlide + 1) % slideshowData.length;
        updateSlide();
    }, 5000);
}

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
