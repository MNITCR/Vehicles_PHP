const dropdownButton = document.getElementById('dropdownDefaultButton');
const dropdownMenu = document.getElementById('dropdown');

dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});
