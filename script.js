document.addEventListener("DOMContentLoaded", function() {
  let clickCount = 0;

  document.getElementById("continueBtn").addEventListener("click", function() {
    clickCount++;
    const message = document.getElementById("message");

    if (clickCount === 4) {
      message.textContent = "Nothing seems to be happening, do you want to keep trying or give up?";
    } else if (clickCount === 7) {
      message.textContent = "Are you sure you want to keep going? Might be a waste of time...";
    } else if (clickCount === 9) {
      document.getElementById("startContainer").classList.add("hidden");
      showDarkPage();
    }
  });

  function showDarkPage() {
    const darkPage = document.getElementById("darkPage");
    darkPage.classList.remove("hidden");
    darkPage.style.opacity = 0;
    requestAnimationFrame(() => {
      darkPage.style.opacity = 1;
    });

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

  document.getElementById("finalBtn").addEventListener("click", function() {
    const shatterOverlay = document.getElementById("shatterOverlay");
    // Delay the shatter overlay to make sure it's shown last
    setTimeout(() => {
      shatterOverlay.classList.remove("hidden");
      setTimeout(() => {
        document.getElementById("contentSection").classList.add("hidden");
      }, 500);
    }, 1000); // Delay it to appear after the main content is shown
  });
});
