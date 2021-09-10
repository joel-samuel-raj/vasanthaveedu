// JSON
window.addEventListener(
    "DOMContentLoaded", () => {
        loadJSON("");
    }
) 
function loadJSON () {
    fetch("ongoing.json")
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.forEach(item => {
            html += ` 
                <img src = "${item.imgSrc}" >
            `
        });
        document.getElementById("ongoing").innerHTML = html;
    })
}

//      INTERSECTION OBSERVER
function animation(className, animationName) {
    const item = document.getElementsByClassName(className);
    let observer = new IntersectionObserver(callBack);
    for (var i = 0; i < item.length; i++) {
        observer.observe(item[i]);
    }
    function callBack (Entries) {
        Entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationName);
            }
        })
    }
}
            animation ('animeTop', 'fadeTop');
            animation ('animeLeft', 'fadeLeft');
            animation ('animeRight', 'fadeRight');
            animation ('animeDown', 'fadeDown');

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

// FORM
var form = document.getElementById('sheetdb-form');
        form.addEventListener("submit", e => {
          e.preventDefault();
          fetch(form.action, {
              method : "POST",
              body: new FormData(document.getElementById("sheetdb-form")),
          }).then(
              response => response.json()
          ).then((html) => {
            // you can put any JS code here
            alert('We have recieved your message and will contact you soon ❗ ⏳')
          });
        });