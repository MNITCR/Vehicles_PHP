document.addEventListener('DOMContentLoaded', function() {

    // Create unique id
    const userIdInput = document.getElementById('user_id');
    const uniqueId = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
    userIdInput.value = uniqueId;


    // create copy user id
    const copyButton = document.getElementById('copyUserId');
    const textSuccess = document.getElementById('text-success');

    // Check if the device is a mobile device
    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
    copyButton.addEventListener('click', function() {
        userIdInput.select();

        if (navigator.clipboard && !isMobileDevice) {
            navigator.clipboard.writeText(userIdInput.value).then(function() {
                textSuccess.innerHTML = 'Text copied to clipboard';
                showSuccessAlert();
            }).catch(function(err) {
                textSuccess.innerHTML = 'Unable to copy text to clipboard', err;
                showSuccessAlert();
            });
        } else {

            // Dynamically create an input for manual paste on mobile devices
            if (isMobileDevice) {
                const tempInput = document.createElement('input');
                tempInput.value = userIdInput.value;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
                textSuccess.innerHTML = 'Text copied to clipboard';
                showSuccessAlert();
            }
        }
    });
});
