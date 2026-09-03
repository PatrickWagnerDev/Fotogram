const ALL_IMAGES = [
    "image_1.webp",
    "image_10.webp",
    "image_11.webp",
    "image_12.webp",
    "image_2.webp",
    "image_3.webp",
    "image_4.webp",
    "image_5.webp",
    "image_6.webp",
    "image_7.webp",
    "image_8.webp",
    "image_9.webp",
]

const MY_THUMBNAILS = document.getElementById('Thumbnails');

function init() {
    for (let i = 0; i < ALL_IMAGES.length; i++) {
        MY_THUMBNAILS.innerHTML += templateThumbnails(ALL_IMAGES[i]);
    }
}

function templateThumbnails(i) {
    return `<img class="ThumbnailStyle" src="./assets/image/${i}" alt="Picture: ${i}">`;
}