const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");


// function handle all input
function setStyles(inputElement,classes) {
    inputElement.className = classes.join(" ");
}

// first name
firstNameInput.addEventListener("input", function (event) {
  const inputValue = event.target.value;
  const isOnlyLetters = /^[A-Za-z]+$/.test(inputValue);

  setStyles(firstNameInput,
    isOnlyLetters
      ? [
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
});


// last name
lastNameInput.addEventListener("input", function (event) {
    const inputValue = event.target.value;
    const isOnlyLetters = /^[A-Za-z]+$/.test(inputValue);

    setStyles(lastNameInput,
        isOnlyLetters
        ? [
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
});


// phone number
phoneInput.addEventListener('input', function (event) {
    const inputValue = event.target.value;
    const isOnlyNumbers = /^[0-9]+$/.test(inputValue);

    setStyles(phoneInput,
        isOnlyNumbers && inputValue.length == 10
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
});


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
}

function validateConfirmPassword() {
    const passwordValue = passwordInput.value;
    const confirmValue = confirmPasswordInput.value;
    const confirm = confirmValue === passwordValue;

    setStyles(confirmPasswordInput,
        confirm
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
            : confirmValue === "" || confirmValue === null
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
}

// Event listeners
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);
