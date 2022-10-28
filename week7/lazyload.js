document.addEventListener("DOMContentLoaded", function () {
    const lazyloadImages = document.querySelectorAll(".lazy");

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

function loadImage(el) {
    el.src = el.dataset.src
    el.classList.remove("lazy")
}