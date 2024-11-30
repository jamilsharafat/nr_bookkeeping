  //banner

   const text = "We make it easy for you."; // Text to type
    const typingElement = document.getElementById("typing-text");
    let index = 0;

    function typeText() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 40); // Adjust speed (in milliseconds)
      }
    }

    // Start the typing animation
    typeText();
  

     






  //commitment
  document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("myVideo");

    // Ensure video is paused by default
    video.pause();

    // Toggle play and pause on click
    video.addEventListener("click", function () {
      if (video.paused) {
        video.muted = false;  // Unmute video
        video.play();         // Play video
      } else {
        video.pause();        // Pause video
      }
    });

    // Debugging: Log video events to console to confirm behavior
    video.addEventListener("play", function() {
      console.log("Video is playing");
    });
    video.addEventListener("pause", function() {
      console.log("Video is paused");
    });
    video.addEventListener("volumechange", function() {
      console.log("Volume changed. Muted:", video.muted);
    });
  });
  







  //team
  function toggleDescription(button) {
    const description = button.nextElementSibling;
    if (description.style.display === "none" || description.style.display === "") {
      description.style.display = "block"; // Show description
      button.innerText = "Less"; // Change button text to "Less"
    } else {
      description.style.display = "none"; // Hide description
      button.innerText = "More"; // Change button text back to "More"
    }
  }







  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );
  




  $( function() {
    $( "#accordion2" ).accordion({
      collapsible: true
    });
  } );
  




  $( function() {
    $( "#accordion3" ).accordion({
      collapsible: true
    });
  } );
  




  $(document).ready(function () {
      $("#faq").accordion({
        heightStyle: "content",
        collapsible: true,
        active: false // Start with all questions collapsed
      });
    });