function changeName() {
    if (window.innerWidth >= 760) {
        document.querySelector(".project-name").innerHTML = "COLÔNIA TREZE AGAINST CANCER";
    } else {
        document.querySelector(".project-name").innerHTML = "C13CC";
    }
}

window.addEventListener('resize', function(){changeName()}, true);
document.querySelector(".project-name").onload = changeName();