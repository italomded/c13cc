function changeImage() {

    function getRandomInt(min = 1, max = 23 ) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    document.querySelector(".main-image").src = "./imgs/gallery/picture-" + getRandomInt() + ".jpeg";

}

document.querySelector(".main-image").onload = changeImage();