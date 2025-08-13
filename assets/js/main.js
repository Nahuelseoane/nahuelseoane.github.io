document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Animation for portfolio images
    const portfolioItems = document.querySelectorAll("#portfolio .item img");

    portfolioItems.forEach(item => {
        item.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
        });
        item.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Dark mode toggle
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Dark Mode";
    toggleButton.id = "dark-mode-toggle";
    toggleButton.classList.add("button")
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "20px";
    toggleButton.style.right = "20px";
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            document.body.style.background = "#222";
            document.body.style.color = "white";
            toggleButton.textContent = "Light Mode";
        } else {
            document.body.style.background = "#f4f4f4";
            document.body.style.color = "#333";
            toggleButton.textContent = "Dark Mode";
        }
    });

    // Sidebar toggle
    const sidebar = document.getElementById("sidebar");
    const toggleSidebar = document.getElementById("toggle-sidebar");
    const main = document.getElementById("main");

    toggleSidebar.addEventListener("click", () => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        if (isMobile) {
            //overlay drawer
            sidebar.classList.toggle("open");
            document.body.classList.toggle("menu-open", sidebar.classList.contains("open"));
        } else {
            // desktop push
            sidebar.classList.toggle("hidden");
            main.classList.toggle("expanded");
            document.body.classList.toggle("sidebar-closed", sidebar.classList.contains("hidden"));
        }
    });
});
