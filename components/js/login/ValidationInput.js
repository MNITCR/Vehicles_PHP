const emailInput = document.getElementById('email');
const passwordInput = document.getElementById("password");
const MSEEmail = document.getElementById("Message_Error_Email");
const MSEPassword = document.getElementById("Message_Error_Password");

// function handle all input
function setStyles(inputElement,classes) {
    inputElement.className = classes.join(" ");
}


// email
emailInput.addEventListener('input', function (event) {
    const inputValue = event.target.value;
    const validDomains = ['gmail.com', 'yahoo.com', 'outlook.com'];

    const isValidDomain = validDomains.some(domain => inputValue.endsWith(`@${domain}`));

    setStyles(emailInput,
        isValidDomain
        ? [
            "ps-10",
            "outline-none",
            "focus:outline-green-600",
            "bg-green-50",
            "border",
            "border-green-500",
            "text-gray-200",
            "dark:text-gray-200",
            "placeholder-green-700",
            "dark:placeholder-green-500",
            "text-sm",
            "rounded-lg",
            "focus:ring-green-500",
            "focus:border-green-500",
            "block",
            "w-full",
            "p-2.5",
            "dark:bg-gray-700",
            "dark:border-green-500",
        ]
        : inputValue === "" || inputValue === null
        ? [
            "ps-10",
            "bg-gray-50",
            "border",
            "border-gray-300",
            "text-gray-900",
            "text-sm",
            "rounded-lg",
            "focus:ring-blue-500",
            "focus:border-blue-500",
            "block",
            "w-full",
            "p-2.5",
            "dark:bg-gray-700",
            "dark:border-gray-600",
            "dark:placeholder-gray-400",
            "dark:text-white",
            "dark:focus:ring-blue-500",
            "dark:focus:border-blue-500",
        ]
        : [
            "ps-10",
            "outline-none",
            "focus:outline-red-600",
            "bg-red-50",
            "border",
            "border-red-500",
            "text-gray-200",
            "dark:text-gray-200",
            "placeholder-red-700",
            "dark:placeholder-red-500",
            "text-sm",
            "rounded-lg",
            "focus:ring-red-500",
            "focus:border-red-500",
            "block",
            "w-full",
            "p-2.5",
            "dark:bg-gray-700",
            "dark:border-red-500",
            "dark:text-red-500",
        ]
    );

    // Message Error
    MSEEmail.classList.toggle("hidden", inputValue === "" || inputValue === null || isValidDomain);
});


function validatePassword() {
    const inputValue = passwordInput.value;

    // Use a regular expression to check if the password meets the criteria
    const isStrongPassword = /^(?=.*[A-Z])(?=.*[0-9!@#$%^&*])(.{10,})$/.test(inputValue);

    // Update styles based on the password strength
    setStyles(passwordInput,
        isStrongPassword
            ? [
                "ps-10",
                "outline-none",
                "focus:outline-green-600",
                "bg-green-50",
                "border",
                "border-green-500",
                "text-gray-200",
                "dark:text-gray-200",
                "placeholder-green-700",
                "dark:placeholder-green-500",
                "text-sm",
                "rounded-lg",
                "focus:ring-green-500",
                "focus:border-green-500",
                "block",
                "w-full",
                "p-2.5",
                "dark:bg-gray-700",
                "dark:border-green-500",
            ]
            : inputValue === "" || inputValue === null
                ? [
                    "ps-10",
                    "bg-gray-50",
                    "border",
                    "border-gray-300",
                    "text-gray-900",
                    "text-sm",
                    "rounded-lg",
                    "focus:ring-blue-500",
                    "focus:border-blue-500",
                    "block",
                    "w-full",
                    "p-2.5",
                    "dark:bg-gray-700",
                    "dark:border-gray-600",
                    "dark:placeholder-gray-400",
                    "dark:text-white",
                    "dark:focus:ring-blue-500",
                    "dark:focus:border-blue-500",
                ]
                : [
                    "ps-10",
                    "outline-none",
                    "focus:outline-red-600",
                    "bg-red-50",
                    "border",
                    "border-red-500",
                    "text-gray-200",
                    "dark:text-gray-200",
                    "placeholder-red-700",
                    "dark:placeholder-red-500",
                    "text-sm",
                    "rounded-lg",
                    "focus:ring-red-500",
                    "focus:border-red-500",
                    "block",
                    "w-full",
                    "p-2.5",
                    "dark:bg-gray-700",
                    "dark:border-red-500",
                    "dark:text-red-500",
                ]
    );

    // Message Error
    MSEPassword.classList.toggle("hidden", inputValue === "" || inputValue === null || isStrongPassword);
}

// Event listeners
passwordInput.addEventListener('input', validatePassword);


// ===================> BTN SING IN <==================
const btnSignUp = document.getElementById("submit_signin");
const messageAlert= document.getElementById("text-success");
btnSignUp.addEventListener('click', function(e) {
    e.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    if (!validateEmail(emailValue)) {
        showSuccessAlert();
        messageAlert.innerHTML = "Please enter email with (gmail.com, yahoo.com, outlook.com).";
        return;
    }

    if (!ValidatePassword(passwordValue)) {
        showSuccessAlert();
        messageAlert.innerHTML = "Please enter password with 10 characters, uppercase letter and a number or special character).";
        return;
    }

});


// Function to validate password
function ValidatePassword(password) {
    // Adjusted the regular expression to ensure at least one digit and one special character
    return /^(?=.*[A-Z])(?=.*[0-9!@#$%^&*]).{10,}$/.test(password);
}

// Function to validate email address with specific valid domains
function validateEmail(email) {
    const validDomains = ['gmail.com', 'yahoo.com', 'outlook.com'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return false;
    }

    const domain = email.split('@')[1];
    return validDomains.includes(domain.toLowerCase());
}
