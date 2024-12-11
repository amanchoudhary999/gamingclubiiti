
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
        "https://res.cloudinary.com/dq2skbvkx/image/upload/v1733828214/IMG20230310140627_hahwzr.jpg",
        "https://res.cloudinary.com/dq2skbvkx/image/upload/v1730036780/DSC00332_1_kho9eh.jpg",
        "https://res.cloudinary.com/dq2skbvkx/image/upload/v1730036777/DSC00179_1_i1kqka.jpg",
        "https://res.cloudinary.com/dq2skbvkx/image/upload/v1733832563/wtxzs4mh7djuoz801duv.jpg",
        "https://res.cloudinary.com/duf3hruwc/image/upload/v1733854721/lh0hizd1w4a7pku1kran.jpg"
    ];
    
    const bgmiImages = [
        "https://res.cloudinary.com/duf3hruwc/image/upload/v1733854229/rfjmck5ccikaiqomfzzi.jpg",
        "https://res.cloudinary.com/duf3hruwc/image/upload/v1733854229/j3hjx9jln76n6tw07dqf.jpg",
        "https://res.cloudinary.com/duf3hruwc/image/upload/v1733853245/jpq1qwiy0ytgyobszkdc.jpg",
        "https://res.cloudinary.com/dq2skbvkx/image/upload/v1733930499/b70cvd0i8orkzmtfajxp.jpg",
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

    const Fifa=["https://res.cloudinary.com/dq2skbvkx/image/upload/v1733828647/s9xnodyzw3r3kmbp5ev1.jpg",
    "https://res.cloudinary.com/dq2skbvkx/image/upload/v1733844753/ropcu3koznwoiqrjoxq4.jpg",
    "https://res.cloudinary.com/dq2skbvkx/image/upload/v1733828217/DSC06719_hr5tlg.jpg"
,"https://res.cloudinary.com/duf3hruwc/image/upload/v1733856393/uyntqhckfnfh6fblqslq.jpg",
"https://res.cloudinary.com/dq2skbvkx/image/upload/v1733828599/ofuyqtwrdoibsfzprybz.jpg"]

    const CR=["https://wallpaperaccess.com/full/3942571.jpg",
"https://wallpaperaccess.com/full/8212949.jpg",
"https://wallpaperaccess.com/full/1396423.jpg",
"https://wallpaperaccess.com/full/1396424.jpg",
"https://wallpaperaccess.com/full/1396428.jpg",
"https://wallpaperaccess.com/full/1396430.jpg",]

    const Minecraft=["https://res.cloudinary.com/duf3hruwc/image/upload/v1733849274/kois6hhlo6l9o6jpqiw4.jpg",
    "https://res.cloudinary.com/duf3hruwc/image/upload/v1733849273/nhrxq0p3f7gejgcmcpd4.jpg",
"https://res.cloudinary.com/duf3hruwc/image/upload/v1733849272/yd5k4x2firmmjbjwcaus.jpg",
"https://res.cloudinary.com/duf3hruwc/image/upload/v1733849275/lodedcxgwfqoavaqtyd3.jpg",
"https://res.cloudinary.com/duf3hruwc/image/upload/v1733854723/ashe5bghgm2izazfbxmr.jpg",
]

const MortalKombat=["https://res.cloudinary.com/dq2skbvkx/image/upload/v1733844752/ma2pzuojuj6nor5xn5eq.jpg",
"https://res.cloudinary.com/duf3hruwc/image/upload/v1733855768/gm9mrnhelyk8as2dbpvh.jpg",
"https://wallpaperaccess.com/thumb/633.jpg",
"https://wallpaperaccess.com/thumb/557982.jpg",
"https://wallpaperaccess.com/thumb/623.jpg",
"https://wallpaperaccess.com/thumb/891576.jpg"]

const Rocket=["https://res.cloudinary.com/duf3hruwc/image/upload/v1733849275/fygb6uu8njtq9b13uxwx.jpg",
"https://res.cloudinary.com/duf3hruwc/image/upload/v1733849272/ekhuofivk6lxrqifsrab.jpg",
"https://res.cloudinary.com/duf3hruwc/image/upload/v1733849271/jxvpkbmq0fnascpc1juz.jpg",
"https://res.cloudinary.com/duf3hruwc/image/upload/v1733854723/bwvztdnngjelc2w7j3g2.jpg",
"https://res.cloudinary.com/duf3hruwc/image/upload/v1733854723/eqohcrr3kar4bgvidhsg.jpg"]

    // Select all slide items
    const slideItems = document.querySelectorAll('.slide .item');
    const slideText = document.querySelectorAll('.slide .item .content');

    // Function to set background images based on the game
    function setBackgroundImages(images) {
        slideItems.forEach((item, index) => {
            // Set the background image for each slide
            if (images[index]) {
                item.style.backgroundImage = `url(${images[index]})`;
            }
        });
    }
    // Function to set background images based on the game
    function setText(text) {
        slideText.forEach((item, index) => {

            if (text[index]) {
                item.innerHTML = `<h1 style="color:white">${text[index]}</h1>`;
            }
        });
    }
    let valoText=["Lockdown","Avalanche 2.0","Avalanche 2.0","Glitchpop 3.0","Glitchpop 2.0"]
    let fifaText=["Glitchpop 3.0","T vs M","Glitchpop 3.0","Glitchpop","Glitchpop"]
    let Mine=["Cubewars","Cubewars","Cubewars","Cubewars","Cubewars"]
    let rocket=["Octane 1.0","Octane 1.0","Octane 1.0","Octane 1.0","Octane 1.0"]
    let tekken=["T VS M","T VS M","T VS M","T VS M","T VS M"]
    let bgmiText=["LAN","LAN","LAN","Freshers Cup","",""]
    // Check the game and set the respective images
    if (game === 'Valorant') {
        setBackgroundImages(valorantImages);
        setText(valoText);

    } else if (game === 'BGMI') {
        setBackgroundImages(bgmiImages);
        setText(bgmiText);
    }
    else if(game==='Fifa'){
        setBackgroundImages(Fifa);
        setText(fifaText);
    }
    else if(game==='CSGO'){
        setBackgroundImages(CSGO);
        setText(csgo);
    }
    else if(game==='CR'){
        setBackgroundImages(CR);
        setText(Cr);
    }
    else if(game==='Minecraft'){
        setBackgroundImages(Minecraft);
        setText(Mine);
    }
    else if(game==='MortalKombat'){
        setBackgroundImages(MortalKombat);
        setText(tekken);
    }
    else if(game==='Rocket'){
        setBackgroundImages(Rocket);
        setText(rocket);
    }
}
