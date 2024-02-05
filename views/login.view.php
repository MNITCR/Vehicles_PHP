<!-- Change title page -->
<?php $title = "Sing in";?>

<?php require("components/php/head.components.php") ?>
    <!-- Success alert -->
    <div id="formSuccessAlert" class="sticky top-0 absolute w-full -translate-y-[10rem] transition-all ease-in-out duration-300 z-50" id="alertSuccess">
        <div class="bg-slate-800 backdrop-blur-xl z-20 max-w-sm absolute right-5 top-5 rounded-lg py-3 px-4 flex gap-3 border border-green-600 justify-center items-center" style="box-shadow: 0px 0px 5px 0px blue">
            <div class="rounded-l-lg flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 fill-current" viewBox="0 0 16 16" width="20" height="20"><path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg>
            </div>
            <span id="text-success" class="text-slate-200 font-medium">Copy Successfully </span>
            <svg class="w-[18px] text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
        </div>
    </div>

    <!-- form scan qr -->
    <div id="formQr" class=" absolute flex flex-col items-center w-full h-[100vh] justify-center -translate-y-[90rem]">
        <div id="you-qr-result"></div>
        <h1 class="text-center text-2xl font-semibold mb-4 text-white font-bold">Scan QR Code</h1>
        <div id="contain" class="p-4 rounded-md text-center mx-auto bg-slate-700 " style="width: fit-content;">
            <div id="my-qr-reader" style="width: 300px; height: 300px;" class="dark:text-white"></div>
        </div>
    </div>

    <!-- form login -->
    <div class="dark:bg-slate-800 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 h-[100vh]">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
            <h2 class="mt-10 text-center dark:text-white text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-5" action="#" method="POST">

                <!-- input email -->
                <div>
                    <label for="email" class="dark:text-white block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-[18px] text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8ZM5 10V20H19V10H5ZM11 14H13V16H11V14ZM7 14H9V16H7V14ZM15 14H17V16H15V14ZM16 8V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8H16Z"></path>
                            </svg>
                        </div>
                        <div class="mt-2">
                            <input id="email" name="email" type="text" required class="ps-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value="<?php if(isset($_COOKIE["email_login"])) { echo $_COOKIE["email_login"]; } ?>" placeholder="example@gmail.com">
                        </div>
                    </div>


                    <!-- Message Error -->
                    <p id="Message_Error_Email" class="hidden mt-2 text-sm text-red-600 dark:text-red-500">
                        <span class="font-medium">Oh, snapp!</span> Can't out of gmail, outlook, yahoo .
                    </p>
                </div>

                <!-- Input password -->
                <div>
                    <label for="password" class="mb-2 dark:text-white block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div class="flex relative items-center divide-x divide-gray-600">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6 8V7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7V8H20C20.5523 8 21 8.44772 21 9V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V9C3 8.44772 3.44772 8 4 8H6ZM19 10H5V20H19V10ZM11 15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 14.7403 13.5978 15.3866 13 15.7324V18H11V15.7324ZM8 8H16V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V8Z"></path>
                            </svg>
                        </div>

                        <input id="password" name="password" type="password" autocomplete="current-password" required class="ps-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value="<?php if(isset($_COOKIE["userpassword"])) { echo $_COOKIE["userpassword"]; } ?>" placeholder="example@#$123">

                        <div class="right-0 absolute">
                            <button id="btn_password" type="button" class="dark:bg-gray-700 hover:cursor-pointer active:bg-slate-700 inline-flex items-center p-[9px] text-sm text-gray-900 rounded-e-lg rounded-s-0 dark:text-gray-400 dark:border-gray-200" id="copyUserId">
                                <svg class="w-[18px] h-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Message Error -->
                    <p id="Message_Error_Password" class="hidden mt-2 text-sm text-red-600 dark:text-red-500">
                        <span class="font-medium">Oh, snapp!</span> Can't without uppercase , number , special .
                    </p>
                </div>


                <!-- remember me -->
                <div class="flex items-start">
                    <div class="flex items-center h-5">
                        <input name="remember" id="terms" aria-describedby="terms" type="checkbox" class="cursor-pointer w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" >
                    </div>
                    <div class="ml-3 text-sm" >
                        <label for="terms" class="cursor-pointer font-light text-gray-500 dark:text-gray-300 font-medium">Remember me</label>
                    </div>
                </div>

                <!-- button sing in -->
                <div class="w-full">
                    <button type="submit" id="submit_signin" name="submit" class="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                </div>

            </form>

            <p class="mt-4 text-center text-sm text-gray-500">
                Not account?
                <a href="/Vehicles_PHP/Signup" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start create account</a>
            </p>

            <!-- Login by scanner -->
            <div class="w-full mt-3 hidden sm:block">
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" py-2 class="w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-semibold rounded-lg text-sm py-2 flex justify-center items-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800" type="button">
                    Login by Scanner
                    <svg class="w-2.5 h-2.5 ml-3 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>

                <!-- Dropdown menu -->
                <div id="dropdown" class="mt-3 w-full z-10 bg-white hidden divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700">
                    <ul class="w-full py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a id="showQrCode" href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Scan qr</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>


    <!-- script dropdown scan -->
    <script src="components/js/login/DropDownScan.js"></script>

    <!-- script scan qr code -->
    <script src="components/js/login/ScanQr.js"></script>

    <!-- script show and hide form qr -->
    <script src="components/js/login/ShowAndHideFormQr.js"></script>

    <!-- script validation -->
    <script src="components/js/login/ValidationInput.js"></script>

    <!-- script alert success -->
    <script src="components/js/signup/AlertSuccess.js"></script>
<script>

</script>




<?php require("components/php/footer.components.php") ?>
