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
let currentIndex = 0;

function init() {
    for (let i = 0; i < ALL_IMAGES.length; i++) {
        MY_THUMBNAILS.innerHTML += templateThumbnails(i);
    }
    const ALL_THUMBNAILS = document.querySelectorAll('#Thumbnails img');
    ALL_THUMBNAILS.forEach((card, index) => {
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                openImageDialog(index);
            }
        });
    });
    initDialogEnterKey();
}

function initDialogEnterKey() {
    const CLOSE_BUTTON = document.querySelector('.CloseButton');
    CLOSE_BUTTON.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            closeImageDialog();
        }
    });
    const NEXT_ARROW = document.querySelector('.NextArrow');
    NEXT_ARROW.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            nextImage();
        }
    });
    const PRIVIOUS_ARROW = document.querySelector('.PreviousArrow');
    PRIVIOUS_ARROW.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            previousImage();
        }
    });
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
    currentIndex = index;
    IMAGE_TITLE.innerHTML = templateImageTitle(index);
    DIALOG_IMAGE.innerHTML = templateImage(index);
    const IMAGE_COUNTER = document.getElementById('ImageCounter');
    IMAGE_COUNTER.innerHTML = templateCounter(index);
}

function nextImage() {
    currentIndex++;
    if (currentIndex == ALL_IMAGES.length) {
        setDialog(0);
    } else {
        setDialog(currentIndex);
    }
}

function previousImage() {
    currentIndex--;
    if (currentIndex == -1) {
        setDialog(ALL_IMAGES.length - 1);
    } else {
        setDialog(currentIndex);
    }
}