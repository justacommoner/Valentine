document.addEventListener("DOMContentLoaded", () => {
  let clickCount = 0;

  const continueBtn = document.getElementById("continueBtn");
  const finalBtn = document.getElementById("finalBtn");

  continueBtn.addEventListener("click", function () {
    console.log("Button clicked!");  // Add this log to see if the button is clicked
    clickCount++;
    const message = document.getElementById("message");

    if (clickCount === 4) {
      message.textContent =
        "Nothing seems to be happening, do you want to keep trying or give up?";
    } else if (clickCount === 7) {
      message.textContent =
        "Are you sure you want to keep going? Might be a waste of time...";
    } else if (clickCount === 9) {
      document.getElementById("startContainer").classList.add("hidden");
      showDarkPage();
    }
  });

  function showDarkPage() {
    const darkPage = document.getElementById("darkPage");
    darkPage.classList.remove("hidden");

    // Set starting opacity to 0 and then trigger a fade-in
    darkPage.style.opacity = 0;
    requestAnimationFrame(() => {
      darkPage.style.opacity = 1;
    });

    // After 3 seconds, fade out and then show the main content
    setTimeout(() => {
      darkPage.style.opacity = 0;
      setTimeout(() => {
        darkPage.classList.add("hidden");
        showContent();
      }, 1000); // Wait for fade-out transition to complete
    }, 3000);
  }

  function showContent() {
    document.getElementById("contentSection").classList.remove("hidden");
  }

  finalBtn.addEventListener("click", function () {
    const shatterOverlay = document.getElementById("shatterOverlay");
    shatterOverlay.classList.remove("hidden");

    // Optionally, hide the main content shortly after for a smooth effect
    setTimeout(() => {
      document.getElementById("contentSection").classList.add("hidden");
    }, 500);
  });
});
