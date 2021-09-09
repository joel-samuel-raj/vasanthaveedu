//      INTERSECTION OBSERVER
let itemAnime = document.getElementsByClassName("itemAnime");
let observer = new IntersectionObserver(callBack);
for (var i = 0; i < itemAnime.length; i++) {
    observer.observe(itemAnime[i]);
}
function callBack (Entries) {
    Entries.forEach(entry => {
        if (entry.isIntersecting) {
            if(entry.target.tagName == 'A') {
                entry.target.classList.add('fadeLeftLine');
            }
        }
    })
}

//      TOGGLE CLASS 
function toggleClass (element, className) {
    element.classList.toggle(className);
}

window.addEventListener("scroll", () => {
    console.log(document.querySelector("nav"));
    document.querySelector("nav").classList.toggle("navbar1", window.scrollY > 0);
})

document.getElementsByClassName("hamburger")[0].addEventListener("click", () => {
    document.getElementsByClassName("modal")[0].classList.toggle("modal1");
})