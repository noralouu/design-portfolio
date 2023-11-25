document.addEventListener("DOMContentLoaded", function () {
    var pastProjectsSection = document.getElementById("past-projects");
    var collaborationAside = document.querySelector("aside");

    window.addEventListener("scroll", function () {
        var pastProjectsOffset = pastProjectsSection.offsetTop;
        var scrollPosition = window.scrollY;

        // Adjust this value to determine when to show/hide the aside
        var showAsideThreshold = 100;

        if (scrollPosition > pastProjectsOffset - showAsideThreshold) {
            collaborationAside.style.right = "20px";
        } else {
            collaborationAside.style.right = "-300px";
        }
    });

    // Trigger the scroll event on page load to check the initial position
    window.dispatchEvent(new Event("scroll"));
});
