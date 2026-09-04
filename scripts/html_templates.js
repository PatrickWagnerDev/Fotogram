// template for Thumbnails
function templateThumbnails(i) {
    return /*html*/`
        <img onclick="openImageDialog(${i})" class="ThumbnailStyle" src="./assets/image/${ALL_IMAGES[i]}" tabindex="0"   alt="Picture: ${ALL_IMAGES[i]}">
    `;
}

// template for titles in dialog for image viewer
function templateImageTitle(i) {
    return /*html*/`
        ${ALL_IMAGES[i]}
    `;
}

// template for rendering images in the dialog for image viewer 
function templateImage(i) {
    return /*html*/`
        <img src="./assets/image/${ALL_IMAGES[i]}" alt="Picture: ${ALL_IMAGES[i]}">
    `;
}

// template for the image counter in the dialog for image viewer
function templateCounter(i) {
    return /*html*/`
        ${i + 1} / ${ALL_IMAGES.length}
    `;
}