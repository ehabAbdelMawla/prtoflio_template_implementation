// Handel Links Click 
document.querySelectorAll('nav ul li').forEach(link => {
    // link.addEventListener("click", (event) => {
    //     const clickedLink = event.target.parentNode;
    //     for (var i = 0; i < clickedLink.parentNode.children.length; i++) {
    //         clickedLink.parentNode.children[i].classList.remove("active");
    //     }
    //     clickedLink.classList.add("active");
    // });

});

// Handel Scroll
window.addEventListener("scroll", (event) => {
    const scrollPosition = window.scrollY;
    listOFIds = ['#home', '#About', '#Resume', '#Services', '#Contact'];
    let targetElement = undefined;
    listOFIds.forEach(element => {
        if (document.querySelector(element).offsetTop < scrollPosition + 100) {
            targetElement = document.querySelector(`nav ul li a[href="${element}"]`)
        }
    });

    var currentActive = document.querySelector('nav ul li.active a').getAttribute('href');
    if (targetElement && currentActive != targetElement.getAttribute('href')) {
        // targetElement.click();
        const linksParent = document.querySelector('nav ul ');
        for (var i = 0; i < linksParent.children.length; i++) {
            linksParent.children[i].classList.remove("active");
        }

        targetElement.parentNode.classList.add("active");
    }
});