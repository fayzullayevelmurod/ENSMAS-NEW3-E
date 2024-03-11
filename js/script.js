document.addEventListener('DOMContentLoaded', () => {
	// AOS
	AOS.init();

	// responsive navbar
	const barsBtn = document.querySelector('.menu-bars');
	const nav = document.querySelector('.nav');
	barsBtn.addEventListener('click', (e) => {
		nav.classList.toggle('active');
		barsBtn.classList.toggle('active')
	})
	// swiper start

	// hero swiper
	var swiper = new Swiper(".hero-swiper", {
		direction: "vertical",
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			480: {
				direction: "vertical",
			},
			0: {
				direction: "horizontal",
			}
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		spaceBetween: 60,
		loop: false,
		speed: 900,
	});

	var swiper = new Swiper(".characteristics-parent__swiper", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		spaceBetween: 30,
		loop: true,
		speed: 900,
		allowTouchMove: false,
	});

	let slidesItems = document.querySelectorAll('.characteristics-parent__swiper .swiper-slide');

	slidesItems.forEach((item) => {
		let paginations = item.querySelectorAll('.swiper-pagination-bullet');
		let childSlider = item.querySelector('.characteristics-child__swiper');
		let slider = new Swiper(childSlider, {
			slidesPerView: 1,
			nested: true,
			speed: 0,
			effect: "fade"
		})

		slider.on('slideChange', function (e) {
			paginations.forEach((bullet, bullteIdx) => {
				if (bullteIdx !== slider.activeIndex) {
					bullet.classList.remove('active');
				} else {
					bullet.classList.add('active');
				}
			})
		})
		paginations.forEach((bullet, bulletIdx) => {
			bullet.addEventListener('click', () => {
				slider.slideTo(bulletIdx);
			})
		})
	})

	// modal
	const modal = document.querySelector('[data-modal]');
	const openModalBtn = document.querySelector('[data-modal-target]');
	const closeModalBtn = document.querySelector('[data-modal-close]');

	function hiddenModal() {
		modal.classList.remove('show');
		document.body.style.overflowY = 'auto';
	}
	function showModal() {
		modal.classList.add('show');
		document.body.style.overflowY = 'hidden'
	}
	openModalBtn.addEventListener('click', showModal);
	closeModalBtn.addEventListener('click', hiddenModal);
	modal.addEventListener('click', (e) => {
		if (e.target && e.target === modal && modal.classList.contains('show')) {
			hiddenModal();
		}
	})



	function validateEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.(?:com|net|org|ru)$/i;
		return emailRegex.test(email);
	}

	const modalForm = document.querySelector('.modal-form');
	const sendBtn = modalForm.querySelector('.send-btn');
	const emailField = document.querySelector('#email');
	const emailValidateWarningText = document.querySelector('.validate-info');
	const warningText = document.querySelector('.warning-text')

	modalForm.addEventListener('submit', (e) => {
		e.preventDefault();

		const formFields = ['name', 'phone', 'email', 'company'];


		for (let i = 0; i < formFields.length; i++) {
			const field = document.getElementById(formFields[i]);
			const value = field.value.trim();

			const elements = [warningText, sendBtn, field, emailValidateWarningText, emailField];
			if (value === '') {
				elements.forEach((el) => el.classList.add('warning'))
				warningText.textContent = 'Заполните все поля для регистрации корректно!';
			} else {
				elements.forEach((el) => el.classList.remove('warning'));
				warningText.classList.add('warning');
				warningText.textContent = 'Спасибо за обращение!';
				emailValidateWarningText.classList.remove('warning');
				field.value = '';
				document.querySelector('textarea').value = '';
			}

		}
	})

	emailField.addEventListener('input', function () {
		const emailValue = emailField.value.trim();
		if (validateEmail(emailValue)) {
			emailField.classList.remove('warning');
			emailValidateWarningText.classList.remove('warning');
		} else {
			emailValidateWarningText.classList.add('warning');
		}
	});

});