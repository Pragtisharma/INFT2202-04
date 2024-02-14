console.log('animations.js loaded successfully')
// animation.js

// TODO: function fadeInOutTo()
function fadeInOutTo() {
    // Fade out red-box
    $(".red-box").fadeOut(3000, function() {
      // Fade in red-box after fade out
      $(this).fadeIn(1500);
    });
  
    // Fade to 30% opacity with 2000 ms timeout for green-box
    $(".green-box").fadeTo(2000, 0.3);
  
    // Fade to 50% opacity with 1000 ms timeout for blue-box and toggle display
    $(".blue-box").fadeTo(1000, 0.5, function() {
      $(this).toggle();
    });
  }
  
  // TODO: function hideElement()
  function hideElement() {
    // Toggle display with hide for green-box with 1000 ms timeout
    $(".green-box").hide(1000).show(1000);
  
    // Slide up green-box with 1000 ms timeout
    $(".green-box").slideUp(1000).slideDown(1000);
  
    // Toggle slide state for green-box with 1000 ms timeout
    $(".green-box").slideToggle(1000).slideToggle(1000);
  }
  
  // TODO: function chainAnimations()
  function chainAnimations() {
    // Fade blue-box to 50% opacity with 1000 ms timeout
    $(".blue-box").fadeTo(1000, 0.5);
  
    // Delay 1000ms and then fade green-box to 50% opacity with 1000 ms timeout
    $(".green-box").delay(1000).fadeTo(1000, 0.5);
  
    // Delay 1000ms, fade red-box to 50% opacity with 1000 ms timeout,
    // Delay 1000ms, fade to 100% opacity with 1000ms timeout,
    // Delay 1000ms, then fade out red-box
    $(".red-box")
      .delay(1000)
      .fadeTo(1000, 0.5)
      .delay(1000)
      .fadeTo(1000, 1)
      .delay(1000)
      .fadeOut();
  }
  
  // Testing functions
  
   fadeInOutTo();
   hideElement();
  chainAnimations();
  