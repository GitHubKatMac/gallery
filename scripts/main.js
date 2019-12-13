// // for (const image of images) {
//     console.log("To jest obrazek"+image)
//     console.log('KM')
// }
// // for (let i=0;i<images.legth;i++){
//     const image = images [i];
//     console.log("To jest obrazek"+image)
//     console.log('KM')
// }
// const isEmpty = (images.length === 0);
// const isEmpty2 = (images.length == 0)
// function displayImages() {
//     console.log('Liczba obrazkow' + images.length);
//     console.log('Pierwszy element list' + images[0])
//     console.log('Drugi element list' + images[1])
// }
// function displayLastElement() {
//     console.log('Ost. element listy' + images[images.length - 1])
//     console.log(876234 / 2378)
//     console.log(876234 * 2378)
// }
// loader.show();

function renderPhoto(photo) {
    const $card = document.createElement('div');
    $card.classList.add('card', 'col-md-4', 'mb-4');

    const $img = document.createElement('img');
    $img.src = photo.imageUrl;

    const $body = document.createElement('div');
    $body.classList.add('card-body');

    const $title = document.createElement('h5');
    $title.classList.add('card-title');
    $title.textContent = photo.description;

    $card.append($img);
    $card.append($body);
    $body.append($title);

    const $main = document.querySelector('main');
    $main.append($card);
}
function displayPhotos(photos) {
    console.log(photos);
    // for (const photo of photos) {
    // renderPhoto(photo);
    // }
    photos.forEach(function (photo) {
        console.group(photo.description);
        console.info(photo.author.name);
        console.groupEnd();
        renderPhoto(photo);
    });
}
// setTimeout(function () {
// console.info('chowamy loader');
// loader.hide();
// }, 1500);


// displayImages();
// displayLastElement
// renderPhoto('https://picsum.photos/id/10/300/150');
// renderPhoto('https://picsum.photos/id/20/300/150');
// renderPhoto('https://picsum.photos/id/30/300/150');
// displayPhotos(images);
function shouldDisplayPhotos() {
    const answer = prompt('Czy chcesz wyswietlic zdjecia?');
    return (answer.toLowerCase() === 'tak');
}
function main() {
    loader.show();

    fetchPhotosFromLocal()
        .then(function (images) {
        return images.map(function (image) {
            image.imageUrl = image.url;
            image.description = image.title;
            return image;
        });
        .then(function (images) {
            if (images.length > 1 && images.length < 10) {
                console.log('zdjecia istnieja');
                displayPhotos(images);
            } else {
                console.log('zdjecia nie istnieja');
                displayMessage('Nie ma zdjec');
            }
        })
        .catch(function () {
            displayErrorMessage();
        })
        .finally(function () {
            loader.hide();
        });

}

main();
