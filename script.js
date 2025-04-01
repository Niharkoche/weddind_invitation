document.addEventListener("DOMContentLoaded", function () {
    console.log("Wedding Invitation Website Loaded!");

    // RSVP Button Alert
    document.getElementById("rsvpBtn").addEventListener("click", function () {
        alert("Thank you for your RSVP! We look forward to celebrating with you.");
    });

    // Background Music Control
    let audio = document.getElementById("bgMusic");
    let playBtn = document.getElementById("playMusic");
    let stopBtn = document.getElementById("stopMusic");

    playBtn.addEventListener("click", function () {
        audio.play();
    });

    stopBtn.addEventListener("click", function () {
        audio.pause();
        audio.currentTime = 0; // Reset to start
    });
});

