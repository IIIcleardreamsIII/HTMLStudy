document.addEventListener("DOMContentLoaded", function() {
    var floatingAd = document.getElementById("advertisement1");

    setTimeout(function() {
        floatingAd.style.display = "block";
        handleAdPosition(); // 调用 handleAdPosition 来确保初始位置正确
    }, 5000);
    var adClosed = localStorage.getItem("adClosed");
    if (adClosed === "true") {
        hideAd();
    }

    window.addEventListener("resize", function() {
        handleAdPosition();
    });

    window.addEventListener("scroll", function() {
        handleAdPosition();
    });
});

// Function to close the ad
function closeAd() {
    hideAd();
    localStorage.setItem("adClosed", "true");
}

function hideAd() {
    var floatingAd = document.getElementById("advertisement1");
    floatingAd.style.display = "none";
}

function handleAdPosition() {
    var floatingAd = document.getElementById("advertisement1");
    var adWidth = floatingAd.offsetWidth;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Calculate the maximum right position to keep the ad within the viewport
    var maxRight = windowWidth - adWidth - 20;
    var maxBottom = windowHeight - floatingAd.clientHeight - 20;

    // Set the right position, ensuring it doesn't exceed the maximum
    floatingAd.style.right = Math.min(maxRight, 20) + "px";
    floatingAd.style.bottom = Math.min(maxBottom, 20) + "px";
}
