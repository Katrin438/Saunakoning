const changeImage = document.querySelector('.changeImage');
const changeImageContainers = document.querySelectorAll('.product-change-image');


changeImageContainers.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        element.querySelector('.changeImage').setAttribute('src', element.getAttribute('data-change-image-url'));
    });
    
    element.addEventListener('mouseout', (event) => {
        element.querySelector('.changeImage').setAttribute('src', element.getAttribute('data-base-image-url'));
    })    
});

