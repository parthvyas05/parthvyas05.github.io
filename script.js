document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded Successfully");
});

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}


function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}


function toggleMenu() {
    let menu = document.querySelector(".nav-links");
    let body = document.body;

    menu.classList.toggle("active");

    // Add class to push content down when menu is open
    if (menu.classList.contains("active")) {
        body.classList.add("menu-open");
    } else {
        body.classList.remove("menu-open");
    }
}


function toggleMenu() {
    let menu = document.querySelector(".nav-links");
    let body = document.body;

    menu.classList.toggle("active");

    // Add class to push content down when menu is open
    if (menu.classList.contains("active")) {
        body.classList.add("menu-open");
    } else {
        body.classList.remove("menu-open");
    }
}

function toggleReadMore(button) {
    let content = button.previousElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
        button.innerHTML = "📖 Read more";
    } else {
        content.style.display = "block";
        button.innerHTML = "🔽 Read less";
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".upcoming-read-more-btn");
    const readLessButtons = document.querySelectorAll(".upcoming-read-less-btn");

    // Read More functionality
    readMoreButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const readMoreContent = this.nextElementSibling;
            readMoreContent.style.display = "block";
            this.style.display = "none";
        });
    });

    // Read Less functionality
    readLessButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const readMoreContent = this.parentElement;
            readMoreContent.style.display = "none";
            readMoreContent.previousElementSibling.style.display = "inline-block";
        });
    });
});



function openPDF(pdfUrl) {
    document.getElementById('pdf-viewer').src = pdfUrl;
    document.getElementById('pdf-viewer').style.display = 'block';
    document.querySelector('.close-btn').style.display = 'block';
}

function closePDF() {
    document.getElementById('pdf-viewer').style.display = 'none';
    document.querySelector('.close-btn').style.display = 'none';
}

function openPDF(url) {
    window.open(url, '_blank'); // Opens the PDF in a new tab
}

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

window.addEventListener("scroll", function () {
  const cards = document.querySelectorAll(".expertise-card");
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});