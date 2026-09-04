function init() {
    for (let i = 0; i < ALL_IMAGES.length; i++) {
        MY_THUMBNAILS.innerHTML += templateThumbnails(i);
    }
}

function openImageDialog(index) {
    IMAGE_DIALOGREF.showModal();
    IMAGE_TITLE.innerHTML = /*html*/`
        ${ALL_IMAGES[index]}
    `;
    DIALOG_IMAGE.innerHTML = /*html*/`
        <img src="./assets/image/${ALL_IMAGES[index]}" alt="Picture: ${ALL_IMAGES[index]}">
    `;
}

function closeImageDialog() {
    IMAGE_DIALOGREF.close();
}

function getImageName() {
    
}