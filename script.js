const ALL_IMAGES = [
    "image_1.webp",
    "image_2.webp",
    "image_3.webp",
    "image_4.webp",
    "image_5.webp",
    "image_6.webp",
    "image_7.webp",
    "image_8.webp",
    "image_9.webp",
    "image_10.webp",
    "image_11.webp",
    "image_12.webp"
]
const MY_THUMBNAILS = document.getElementById('Thumbnails');
const IMAGE_DIALOGREF = document.getElementById('ImageDialog');
const IMAGE_TAG = document.getElementById('ImageName');
const DIALOG_IMAGE = document.getElementById('ImageID');
const IMAGE_TITLE = document.getElementById('ImageName');
const FOOTER_DIALOG = document.getElementById('FooterDialog');

function init() {
    for (let i = 0; i < ALL_IMAGES.length; i++) {
        MY_THUMBNAILS.innerHTML += templateThumbnails(i);
    }
}

function openImageDialog(index) {
    IMAGE_DIALOGREF.showModal();
    setDialog(index);
}

function closeImageDialog() {
    IMAGE_DIALOGREF.close();
}

function stopBubblingDialog(event) {
    event.stopPropagation();
}

function setDialog(index) {
    IMAGE_TITLE.innerHTML = templateImageTitle(index);
    DIALOG_IMAGE.innerHTML = templateImage(index);
    FOOTER_DIALOG.innerHTML = templateFooter(index);
    const IMAGE_COUNTER = document.getElementById('ImageCounter');
    IMAGE_COUNTER.innerHTML = templateCounter(index);
}

function nextImage(index) {
    if (index == ALL_IMAGES.length) {
        setDialog(0);
    } else {
        setDialog(index);
    }
}

function previousImage(index) {
    if (index == -1) {
        setDialog(ALL_IMAGES.length-1);
    } else {
        setDialog(index);
    }
}