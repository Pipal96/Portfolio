/* Popup modal windows */
const buttonCallModal = document.getElementById('button-contact-us');
const modalPopUpWindows = document.getElementById('button-call-modal');
const modalButtonClose = document.getElementById('close-button-modal');
const modalForm = document.getElementById('modal-form');
const modalCurain = document.getElementById('modal-curain')

buttonCallModal.addEventListener('click', function (event) {
    event.preventDefault();
    modalPopUpWindows.classList.remove('wrapper-modal-popup_disabled');
    modalForm.classList.remove('modal-windows-form-close');
    modalCurain.classList.remove('modal-windows__curtain-close');
});

modalPopUpWindows.addEventListener('click', function (event) {

    let target = event.target;
    if (target.id == 'modal-curain' || target.id == 'close-button-modal' || target.id == "svg-close") {
        modalCurain.classList.add('modal-windows__curtain-close');
        modalForm.classList.add('modal-windows-form-close');
        setTimeout(() => modalPopUpWindows.classList.add('wrapper-modal-popup_disabled'), 500)
    }
})

/* Navigation scroll */
const desktopNav = document.getElementById('desktop-nav');
for (let link of desktopNav.querySelectorAll('a[href*="#"')) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const idSection = link.getAttribute('href');
        document.querySelector(idSection).scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
    })
}

// Необходимо добавить полифил для Sarafi и других страых браузеров

/* Testimonials Slide */
/* 
const testimonialsSlide = document.getElementById('testimonials-slide');
const testimonialsRadio = document.getElementById('testimonials-radio');
const switch1 = document.getElementById('switch1');
const switch2 = document.getElementById('switch2');
const switch3 = document.getElementById('switch3');

testimonialsRadio.addEventListener('click', function (event) {
    let target = event.target;
    for (check of testimonialsRadio.childNodes) {
        if (check.hasAttribute == true) {
            check.removeAttribute('checked');
        }
    }
})
/* 
if (switch1.hasAttribute('checked') == true) {
    console.log(switch1)
    // testimonialsSlide.style.setProperty(' --switch-slide', '100' + '%');
} else if (switch2.hasAttribute('checked') == true) {
    console.log(switch2)
    // testimonialsSlide.style.setProperty(' --switch-slide', '100' + '%');
} */