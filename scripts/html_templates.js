function templateThumbnails(i) {
    return /*html*/`
        <img onclick="openImageDialog(${i})" class="ThumbnailStyle" src="./assets/image/${ALL_IMAGES[i]}" alt="Picture: ${ALL_IMAGES[i]}">
    `;
}