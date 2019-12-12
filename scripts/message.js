function displayMessage(message, label = 'alert-info') {
    const $main = document.querySelector('main');
    // main.textContent=message;
    // main.innerHTML = '<p class="alert alert-info text-center">' + message + '</p>'
    $main.innerHTML = `
        <p class="alert ${label} text-center">
        ${message}
        <p>
    `;
}
function displayErrorMessage(errorMessage) {
    displayMessage(errorMessage, 'alert-danger');

}