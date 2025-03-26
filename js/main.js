function adjustImageSrc() {
    var width = window.innerWidth;
    var backgroundImage = document.querySelector('.background-image');

    if (width >= 800) {
        backgroundImage.src = "assets/images/hero-dueno/bgdesk.png";
    } else if (width >= 700) {
        backgroundImage.src = "assets/images/hero-dueno/bgtablet.png";
    } else {
        backgroundImage.src = "assets/images/hero-dueno/bgmovil.png";
    }
}

// Run the function when the window is resized
window.addEventListener('resize', adjustImageSrc);

// Run the function on page load
adjustImageSrc();