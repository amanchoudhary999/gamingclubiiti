
document.addEventListener("DOMContentLoaded", function() {
       
    // Hide the preloader
    function hidePreloader() {
        const preloader = document.getElementById("preloader");
        preloader.style.display = "none";
    }

    // Add a slight delay to simulate loading time if needed
    setTimeout(hidePreloader, 1000); // 2000ms = 2 seconds
});
document.addEventListener('DOMContentLoaded', function() {
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let slide = document.querySelector('.slide');
    let intervalId;

    function moveNext() {
        let items = document.querySelectorAll('.item');
        slide.appendChild(items[0]);
    }

    function movePrev() {
        let items = document.querySelectorAll('.item');
        slide.prepend(items[items.length - 1]);
    }

    function startAutoSlide() {
        intervalId = setInterval(moveNext, 10000);
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    next.addEventListener('click', function () {
        moveNext();
        stopAutoSlide();
        startAutoSlide();
    });

    prev.addEventListener('click', function () {
        movePrev();
        stopAutoSlide();
        startAutoSlide();
    });

    // Start auto-sliding
    startAutoSlide();
});
//To load different set of images 
window.onload = function() {
    // Get the value of the 'game' parameter from the URL
    const { game } = Qs.parse(location.search, { ignoreQueryPrefix: true });

    // Define the background images for Valorant and BGMI
    const valorantImages = [
        "https://wallpaperaccess.com/thumb/2576093.jpg",
        "https://wallpaperaccess.com/thumb/5784797.jpg",
        "https://wallpaperaccess.com/thumb/3037904.png",
        "https://wallpaperaccess.com/full/9858230.png",
        "https://wallpaperaccess.com/full/8903081.jpg",
        "https://wallpaperaccess.com/full/7482552.jpg"

    ];
    
    const bgmiImages = [
        "https://wallpaperaccess.com/thumb/6163542.jpg",
        "https://wallpaperaccess.com/thumb/8502547.jpg",
        "https://wallpaperaccess.com/thumb/9650568.jpg",
        "https://wallpaperaccess.com/thumb/10613455.jpg",
        "https://wallpaperaccess.com/thumb/9905503.jpg",
        "https://wallpaperaccess.com/thumb/8982739.jpg"
    ];

    const CSGO=["https://wallpaperaccess.com/full/963561.jpg",
    "https://wallpaperaccess.com/full/1494924.jpg",
    "https://wallpaperaccess.com/thumb/10785225.jpg",
    "https://wallpaperaccess.com/full/147188.png",
    "https://wallpaperaccess.com/full/1409318.jpg",
    "https://wallpaperaccess.com/full/8689468.jpg",
    "https://wallpaperaccess.com/full/1819770.jpg"]

    const Fifa=["https://wallpaperaccess.com/thumb/2053587.jpg",
    "https://wallpaperaccess.com/thumb/1079073.jpg",
    "https://wallpaperaccess.com/thumb/2053588.jpg"
,"https://wallpaperaccess.com/thumb/4278733.jpg",
"https://wallpaperaccess.com/thumb/8625485.jpg",
"https://wallpaperaccess.com/thumb/3697165.jpg"]

    const CR=["https://wallpaperaccess.com/full/3942571.jpg",
"https://wallpaperaccess.com/full/8212949.jpg",
"https://wallpaperaccess.com/full/1396423.jpg",
"https://wallpaperaccess.com/full/1396424.jpg",
"https://wallpaperaccess.com/full/1396428.jpg",
"https://wallpaperaccess.com/full/1396430.jpg",]

    const FallFiesta=["https://wallpaperaccess.com/full/8125892.png",
    "https://wallpaperaccess.com/full/8125893.jpg",
"https://wallpaperaccess.com/full/8125899.png",
"https://wallpaperaccess.com/full/8125907.png",
"https://wallpaperaccess.com/full/4073903.jpg",
"https://wallpaperaccess.com/full/8125921.jpg"]

const MortalKombat=["https://wallpaperaccess.com/thumb/619.jpg",
"https://wallpaperaccess.com/thumb/255016.jpg",
"https://wallpaperaccess.com/thumb/633.jpg",
"https://wallpaperaccess.com/thumb/557982.jpg",
"https://wallpaperaccess.com/thumb/623.jpg",
"https://wallpaperaccess.com/thumb/891576.jpg"]

const Rocket=["https://wallpaperaccess.com/thumb/2403409.jpg",
"https://wallpaperaccess.com/thumb/1335864.jpg",
"https://wallpaperaccess.com/thumb/1335878.jpg",
"https://wallpaperaccess.com/thumb/1820040.jpg",
"https://wallpaperaccess.com/thumb/7272418.png",
"https://wallpaperaccess.com/thumb/5089170.png",]

    // Select all slide items
    const slideItems = document.querySelectorAll('.slide .item');

    // Function to set background images based on the game
    function setBackgroundImages(images) {
        slideItems.forEach((item, index) => {
            // Set the background image for each slide
            if (images[index]) {
                item.style.backgroundImage = `url(${images[index]})`;
            }
        });
    }
    // Check the game and set the respective images
    if (game === 'Valorant') {
        setBackgroundImages(valorantImages);

    } else if (game === 'BGMI') {
        setBackgroundImages(bgmiImages);
    }
    else if(game==='Fifa'){
        setBackgroundImages(Fifa);
    }
    else if(game==='CSGO'){
        setBackgroundImages(CSGO);
    }
    else if(game==='CR'){
        setBackgroundImages(CR);
    }
    else if(game==='FallFiesta'){
        setBackgroundImages(FallFiesta);
    }
    else if(game==='MortalKombat'){
        setBackgroundImages(MortalKombat);
    }
    else if(game==='Rocket'){
        setBackgroundImages(Rocket);
    }
}
