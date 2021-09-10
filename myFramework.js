//      INTERSECTION OBSERVER
let itemAnime = document.querySelectorAll(".itemAnime");
let observer = new IntersectionObserver(callBack);
for (var i = 0; i < itemAnime.length; i++) {
    observer.observe(itemAnime[i]);
}
function callBack (Entries) {
    Entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            if (index / 2 == 0) {
                if (entry.target.tagName == "P" || entry.target.tagName == "A" || entry.target.tagName == "SPAN") {
                    entry.target.classList.add("fadeRight");
                }
                else {
                    entry.target.classList.add("fadeRightLine");
                }
            }
            else {
                entry.target.classList.add("fadeLeftLine");
            }
        }
    })
}

//      TOGGLE CLASS 
function toggleClass (element, className) {
    element.classList.toggle(className);
}

window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("navbar1", window.scrollY > 0);
})

document.getElementsByClassName("hamburger")[0].addEventListener("click", () => {
    document.getElementsByClassName("modal")[0].classList.toggle("modal1");
});

// JSON
window.addEventListener(
    "DOMContentLoaded", () => {
        loadJSON("ongoing.json");
    }
) 
function loadJSON (fileName) {
    fetch(fileName)
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.forEach(item => {
            console.log(item);
            html += ` 
                <img src = "${item.imgSrc}" class = "itemAnime" alt="">
            `
        });
        console.log(html);
        document.getElementById("ongoing").innerHTML = html;
    })
}