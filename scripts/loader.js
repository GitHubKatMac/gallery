const loader = {};

loader.show = function () {
    const $img = document.createElement('img');
    $img.classList.add('loader');
    $img.src = 'images/loader.gif';
    const $main = document.querySelector('main');
    $main.append($img);
};

loader.hide = function () {
    const $loader = document.querySelector('.loader');
    $loader.remove();
};
