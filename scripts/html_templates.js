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

function templateFooter(i) {
    return /*html*/`
        <img aria-label="Previous Foto Button" class="PreviousArrow" onclick="previousImage(${i - 1})" src="./assets/icon/Arrow_next.png" alt="Previous Foto Button">
        <p class="CounterStyle" id="ImageCounter"></p>
        <img aria-label="Next Foto Button" class="NextArrow" onclick="nextImage(${i + 1})" src="./assets/icon/Arrow_next.png" alt="Next Foto Button">
    `;
}

function templateCounter(i) {
    return /*html*/`
        ${i + 1} / ${ALL_IMAGES.length}
    `;
}