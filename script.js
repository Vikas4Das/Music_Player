var arr = [
    { songName: "Daddy Mummy", url: "MUSIC/01 Daddy Mummy (Bhaag Johnny) (SongsMp3.Com).mp3", img: "IMAGE/istockphoto-1428662784-612x612.jpg" },
    { songName: "Aaja we Mahiya", url: "MUSIC/imran khan Aaja We Mahiya mp3 www mixflix net(MP3_128K).mp3", img: "IMAGE/images (1).jpg" },
    { songName: "Pata chalgea", url: "MUSIC/Imran Khan - Pata Chalgea (Un-Official Video)(MP3_128K).mp3", img: "IMAGE/images (2).jpg" },
    { songName: "Sakhiyaan", url: "MUSIC/Maninder Buttar _ SAKHIYAAN (Full Song) MixSingh _ Babbu _ New Punjabi Songs 2018 _ Sakhiyan.mp3", img: "IMAGE/images (3).jpg" }
];

var allsong = document.querySelector("#all-song");
var poster = document.querySelector("#left");
var audio = new Audio();
var selectedsong = 0;

function mainFunction() {
    var clutter = "";
    arr.forEach(function (elem, idx) {
        clutter += `<div class="song-card" id="${idx}">
                        <div class="part1">
                            <img src="${elem.img}" alt="">
                            <h2>${elem.songName}</h2>
                        </div>
                        <h6>3:56</h6>
                    </div>`;
    });

    // Set the audio source and poster for the selected song
    audio.src = arr[selectedsong].url;
    allsong.innerHTML = clutter;

    poster.style.backgroundImage = `url('${arr[selectedsong].img}')`;
    poster.style.backgroundSize = "cover";
    poster.style.backgroundPosition = "center";
}

allsong.addEventListener("click", function (dets) {
    var songCard = dets.target.closest(".song-card");
    if (songCard) {
        var songId = parseInt(songCard.id);
        selectedsong = songId;
        mainFunction();
        audio.play();
    }
});

// Play, Forward, and Backward functionality
var playButton = document.querySelector("#paly");
var backButton = document.querySelector("#back");
var forwardButton = document.querySelector("#forward");

playButton.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        playButton.innerHTML = `<i class="ri-pause-fill"></i>`;
    } else {
        audio.pause();
        playButton.innerHTML = `<i class="ri-play-fill"></i>`;
    }
});

backButton.addEventListener("click", function () {
    if (selectedsong > 0) {
        selectedsong--;
        mainFunction();
        audio.play();
    }
});

forwardButton.addEventListener("click", function () {
    if (selectedsong < arr.length - 1) {
        selectedsong++;
        mainFunction();
        audio.play();
    }
});

// Initialize
mainFunction();
