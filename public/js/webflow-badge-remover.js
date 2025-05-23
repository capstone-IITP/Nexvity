// Override Webflow's badge initialization
(function() {
  // Wait for the Webflow object to be defined
  function checkWebflow() {
    if (window.Webflow) {
      // Override the badge functionality
      if (window.Webflow.require) {
        const originalBrand = window.Webflow.require('brand');
        if (originalBrand && originalBrand.ready) {
          // Replace the ready method with an empty function
          window.Webflow.require('brand').ready = function() {};
        }
      }
      
      // Clean up any badges that might have been added already
      const badges = document.querySelectorAll('.w-webflow-badge');
      badges.forEach(badge => {
        badge.remove();
      });
    } else {
      // If Webflow isn't available yet, check again in 100ms
      setTimeout(checkWebflow, 100);
    }
  }
  
  // Start checking for Webflow
  checkWebflow();
})(); 