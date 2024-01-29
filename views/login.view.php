<!-- Change title page -->
<?php $title = "Sing in";?>

<?php require("components/php/head.components.php") ?>

    <div class="dark:bg-slate-800 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 h-[100vh]">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
            <h2 class="mt-10 text-center dark:text-white text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-5" action="#" method="POST">

                <!-- input name -->
                <div>
                    <label for="name" class="dark:text-white block text-sm font-medium leading-6 text-gray-900">Full name</label>
                    <div class="mt-2">
                        <input id="name" name="name" type="text" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value="<?php if(isset($_COOKIE["user_login"])) { echo $_COOKIE["user_login"]; } ?>">
                    </div>
                </div>

                <!-- Input password -->
                <div>
                    <label for="password" class="dark:text-white block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="current-password" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value="<?php if(isset($_COOKIE["userpassword"])) { echo $_COOKIE["userpassword"]; } ?>">
                    </div>
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
                    <button type="submit" name="submit" class="w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                </div>

            </form>

            <p class="mt-4 text-center text-sm text-gray-500">
                Not account?
                <a href="/Vehicles_PHP/Signup" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start create account</a>
            </p>

            <!-- Login by scanner -->
            <div class="w-full mt-3">
                <button
                    id="dropdownDefaultButton"  data-dropdown-toggle="dropdown"py-2
                    class="w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-semibold rounded-lg text-sm py-2 flex justify-center items-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800" type="button">
                    Login by Scanner
                    <svg class="w-2.5 h-2.5 ml-3 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>

                <!-- Dropdown menu -->
                <div id="dropdown" class="mt-3 w-full z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="w-full py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    <script src="components/js/login/DropDownScan.js"></script>

<?php require("components/php/footer.components.php") ?>
