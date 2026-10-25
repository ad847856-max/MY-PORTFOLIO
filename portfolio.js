
/* Mobile navigation */

var menuButton = document.getElementById("menuButton");
var navbar = document.getElementById("navbar");

menuButton.addEventListener("click", function () {
    navbar.classList.toggle("show");
});

/* Close menu after clicking a link */

var navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("show");
    });
});

/* Dark and light theme */

var themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
        themeButton.textContent = "☀";
    } else {
        themeButton.textContent = "☾";
    }
});

/* Project category filters */

var filterButtons = document.querySelectorAll(".filter-button");
var projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {

        var selectedFilter = button.getAttribute("data-filter");

        filterButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach(function (card) {

            var category = card.getAttribute("data-category");

            if (selectedFilter === "all" ||
                selectedFilter === category) {

                card.classList.remove("hide");

            } else {
                card.classList.add("hide");
            }
        });
    });
});

/* Copy portfolio introduction */

var copyButton = document.getElementById("copyButton");
var copyMessage = document.getElementById("copyMessage");

copyButton.addEventListener("click", function () {

    var portfolioIntro =
        "I'm a third-year BTech CSE student learning Java, DSA, HTML, CSS and Python. I enjoy building projects and improving one step at a time.";

    navigator.clipboard.writeText(portfolioIntro)
        .then(function () {
            copyMessage.textContent = "Portfolio intro copied!";
        })
        .catch(function () {
            copyMessage.textContent =
                "Copy failed. Please copy the introduction manually.";
        });
});

/* Show current year */

document.getElementById("year").textContent =
    new Date().getFullYear();
