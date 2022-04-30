//to change between sections in the orange menu
const menuTogglers = document.querySelectorAll('[menu-data]');
const menus = document.querySelectorAll('[menu]');

menuTogglers.forEach((menu) => {
    menu.addEventListener('click', (event) => {
        event.preventDefault();
        const currentElement = event.target;

        const menuToShow = currentElement.getAttribute('menu-data');

        menus.forEach((menuContainer) => {
            if (menuContainer.getAttribute('menu') !== menuToShow) {
                menuContainer.classList.add('hide');
            } else {
                if (menuContainer.classList.contains('hide')) {
                    menuContainer.classList.remove('hide');
                }                
            } 
        });
    })
})

// to change photos in product page
const smallImages = document.querySelectorAll('.small-image');
const mainImage = document.querySelector('.main-image');

smallImages.forEach((image) => {
    image.addEventListener('click', (event) => {
        console.log(event.target.getAttribute('src'));
        mainImage.setAttribute('src', event.target.getAttribute('src'));
    })
});