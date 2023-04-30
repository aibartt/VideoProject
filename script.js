// Initialize the Vimeo player
var player = new Vimeo.Player("vimeoPlayer", {
  id: 822453988,
  autoplay: false,
});

var buttonplay = document.getElementById("play-video");
buttonplay.addEventListener("click", function () {
  player.play();
  buttonplay.style.display = "none";
});
var buttonDisplayed = false;
var button = document.getElementById("play-video-1");
button.addEventListener("click", function () {
  player.play();
  button.style.display = "none";
});

// project 1 buttons
var project1Displayed = false;
var project1 = document.getElementById("project1");
project1.addEventListener("click", function () {
  player.play();
  project1.style.display = "none";
  continue1.style.display = "none";
});

var continue1 = document.getElementById("continue");
continue1.addEventListener("click", function () {
  player.play();
  continue1.style.display = "none";
  project1.style.display = "none";
  player.setCurrentTime(132.5);
});

// project 2 buttons
var project2Displayed = false;
var project2 = document.getElementById("project2");
project2.addEventListener("click", function () {
  player.play();
  project2.style.display = "none";
  continue2.style.display = "none";
});

var continue2 = document.getElementById("continue2");
continue2.addEventListener("click", function () {
  player.play();
  continue2.style.display = "none";
  project2.style.display = "none";
  player.setCurrentTime(202.0);
});

// project 3 buttons
var project3Displayed = false;
var project3 = document.getElementById("project3");
project3.addEventListener("click", function () {
  player.play();
  project3.style.display = "none";
  continue3.style.display = "none";
});

var continue3 = document.getElementById("continue3");
continue3.addEventListener("click", function () {
  player.play();
  continue3.style.display = "none";
  project3.style.display = "none";
  player.setCurrentTime(273.0);
});

// project 4 buttons
var project4Displayed = false;
var project4 = document.getElementById("project4");
project4.addEventListener("click", function () {
  player.play();
  project4.style.display = "none";
  continue4.style.display = "none";
});

var continue4 = document.getElementById("continue4");
continue4.addEventListener("click", function () {
  player.play();
  continue4.style.display = "none";
  project4.style.display = "none";
  player.setCurrentTime(348.0);
});

//exit or revisit buttons
var exitDisplayed = false;
var exit = document.getElementById("exit");
exit.addEventListener("click", function () {
  player.play();
  exit.style.display = "none";
  revisit.style.display = "none";
});

var revisit = document.getElementById("revisit");
revisit.addEventListener("click", function () {
  player.play();
  revisit.style.display = "none";
  exit.style.display = "none";
  player.setCurrentTime(64.0);

  //all variables false 
  buttonDisplayed = false;
  project1Displayed = false;
  project2Displayed = false;
  project3Displayed = false;
  project4Displayed = false;
  exitDisplayed = false;
});

player.on("play", function () {
  var currentTime = 0;

  setInterval(function () {
    player.getCurrentTime().then(function (seconds) {
      currentTime = seconds;

      // Check if the current time is 61 seconds and pause the video
      if (currentTime >= 62.0 && currentTime <= 63.0 && !buttonDisplayed) {
        player.pause();
        if (button !== null) {
          button.style.display = "block";
          buttonDisplayed = true;
        }
      }

      if (currentTime >= 81.0 && currentTime <= 82 && !project1Displayed) {
        player.pause();
        project1.style.display = "block";
        continue1.style.display = "block";
        project1Displayed = true;
      }

      if (currentTime >= 155.0 && currentTime <= 156 && !project2Displayed) {
        player.pause();
        project2.style.display = "block";
        continue2.style.display = "block";
        project2Displayed = true;
      }

      if (currentTime >= 218.0 && currentTime <= 219 && !project3Displayed) {
        player.pause();
        project3.style.display = "block";
        continue3.style.display = "block";
        project3Displayed = true;
      }

      if (currentTime >= 285.0 && currentTime <= 286 && !project4Displayed) {
        player.pause();
        project4.style.display = "block";
        continue4.style.display = "block";
        project4Displayed = true;
      }

      if (currentTime >= 355.0 && currentTime <= 356.0 && !exitDisplayed) {
        player.pause();
        exit.style.display = "block";
        revisit.style.display = "block";
        exitDisplayed = true;
      }

    });
  }, 10);
});

// An array of image filenames
const images = ['Images/1.jpeg', 'Images/2.jpeg', 'Images/3.jpeg', 'Images/4.jpeg', 'Images/5.jpeg'];

// Select the elements we need to manipulate
const currentImage = document.querySelector('#currentImage');
const previousButton = document.querySelector('#previousButton');
const nextButton = document.querySelector('#nextButton');

// Keep track of the current image index
let currentIndex = 0;

// Set the initial image
currentImage.src = images[currentIndex];

// Add a click event listener to the previous button
previousButton.addEventListener('click', function() {
  // Decrement the current index
  currentIndex = currentIndex - 1;

  // If we've gone below the first image, wrap around to the last image
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  // Update the current image
  currentImage.src = images[currentIndex];
});

// Add a click event listener to the next button
nextButton.addEventListener('click', function() {
  // Increment the current index
  currentIndex = currentIndex + 1;

  // If we've gone past the last image, wrap around to the first image
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  // Update the current image
  currentImage.src = images[currentIndex];
});
