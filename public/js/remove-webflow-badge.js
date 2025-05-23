// Script to remove the Webflow badge
(function() {
  // Function to remove the badge when it appears
  function removeBadge() {
    const badges = document.getElementsByClassName('w-webflow-badge');
    if (badges && badges.length > 0) {
      for (let i = 0; i < badges.length; i++) {
        badges[i].remove();
      }
    }
  }

  // Remove badge on initial load
  removeBadge();

  // Set up a MutationObserver to watch for the badge being added later
  const observer = new MutationObserver(function(mutations) {
    removeBadge();
  });

  // Start observing the document body for DOM changes
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})(); 