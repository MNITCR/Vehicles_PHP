// Check if DOM is ready
function domReady(fn) {
    if (document.readyState == 'complete' || document.readyState == 'interactive') {
        setTimeout(fn, 1);
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

// Define onScanSuccess function in the global scope
var lastResult, countResult = 0;

function onScanSuccess(decodeText, decodeResult) {
    if (decodeText !== lastResult) {
        ++countResult;
        lastResult = decodeText;

        // Alert the scanned QR code
        alert("Your QR code is: " + decodeText);

        // Display the scanned QR code information
        document.getElementById('your-qr-result').innerHTML = `You scanned ${countResult} : ${decodeResult}`;
    }
}

domReady(function () {
    // Create the QR code scanner instance
    var htmlScanner = new Html5QrcodeScanner(
        "my-qr-reader", { fps: 10, qrbox: 250 });

    // Function to start the scanning process
    function startScan() {
        htmlScanner.render(onScanSuccess);
    }

    // Attach the startScan function to the button click event
    document.getElementById('showQrCode').addEventListener('click', startScan);
});
