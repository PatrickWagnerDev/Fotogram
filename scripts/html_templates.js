function templateThumbnails(i) {
    return /*html*/`
        <img onclick="openImageDialog(${i})" class="ThumbnailStyle" src="./assets/image/${ALL_IMAGES[i]}" alt="Picture: ${ALL_IMAGES[i]}">
    `;
}

function templateImageTitle(i) {
    return /*html*/`
        ${ALL_IMAGES[i]}
    `;
}

function templateImage(i) {
    return /*html*/`
        <img src="./assets/image/${ALL_IMAGES[i]}" alt="Picture: ${ALL_IMAGES[i]}">
    `;
}

function templateCounter(i) {
    return /*html*/`
        ${i+1} / ${ALL_IMAGES.length}
    `;
}