const formQr = document.getElementById("formQr");
const contain = document.getElementById("contain");
const btnQr = document.getElementById('showQrCode');

// show form qr code
btnQr.addEventListener('click', function (e) {
    formQr.classList.remove('-translate-y-[90rem]');
    e.stopPropagation(); // Prevent the click event from propagating to the document
});

// if click somewhere on the document, hide the form qr code
document.addEventListener('click', function (event) {
    const isOutsideFormQr = !contain.contains(event.target) && event.target !== btnQr;
    if (isOutsideFormQr) {
        formQr.classList.add('-translate-y-[90rem]');
    }
});
