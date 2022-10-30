document.addEventListener("DOMContentLoaded", function () {
    const lazyloadImages = document.querySelectorAll("picture.lazy");


    if ("IntersectionObserver" in window) {
        var imageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    loadImage(entry.target)
                    imageObserver.unobserve(entry.target);
                }
            });
        });

        lazyloadImages.forEach(img => imageObserver.observe(img));

    } else {
        lazyloadImages.forEach(loadImage);
    }
})

function loadImage(picture) {
    for (el of picture.children) {
        if (el.dataset.src) {
            el.src = el.dataset.src
        }

        if (el.dataset.srcset) {
            el.srcset = el.dataset.srcset;
        }
    }

    picture.classList.remove("lazy")
}