document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section"); 
    const navLinks = document.querySelectorAll("#navigation-bar .nav-link"); 

    function checkSectionInView() {
        let scrollY = window.scrollY;

        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - 50; 
            const sectionHeight = section.clientHeight;
            const id = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < (sectionTop + sectionHeight)) {
                navLinks.forEach(function(link) {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", checkSectionInView);

    checkSectionInView();
});

var navbar = document.getElementsByClassName("nav-link");
console.log(navbar)
var responsive_class_name = "active";
for (let i = 0; i < navbar.length; i++) {
    navbar[i].addEventListener("click", () => {
        for (let j = 0; j < navbar.length; j++) {
            navbar[j].classList.remove(responsive_class_name);
        }
        navbar[i].classList.add(responsive_class_name);
    });
}

function toggleVisibility(content, sectionName) {
    
        if(sectionName.textContent.trim() === "View More"){
            for (let i = 0; i < content.length; i++) {
                content[i].style.display = "flex";
            }
            sectionName.innerHTML="View Less";
        }else {
            for (let i = 0; i < content.length; i++) {
                content[i].style.display = "none";
            }
            sectionName.innerHTML="View More";
        }
}

var hiddenBlogs = document.getElementsByClassName("blog-hidden")
var blogItem = document.getElementById("show");
blogItem.addEventListener("click", () => {
    toggleVisibility(hiddenBlogs,blogItem);
})

var hiddenProjects = document.getElementsByClassName("hidden-projects")
var projectItem = document.getElementById("show-project");
projectItem.addEventListener("click", () => {
    toggleVisibility(hiddenProjects, projectItem);
})
