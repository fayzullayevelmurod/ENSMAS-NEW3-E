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
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		paginationClickable: true,
		spaceBetween: 60,
		loop: true,
		speed: 900,
	});

	// characteristics-parent swiper
	var swiper = new Swiper(".characteristics-parent__swiper", {
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		paginationClickable: true,
		spaceBetween: 30,
		loop: true,
		speed: 900,
	});
	// characteristics swiper
	var swiper = new Swiper(".characteristics-swiper", {
		paginationClickable: true,
		spaceBetween: 30,
		loop: true,
		speed: 900,
	});

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

	// // validation
	// function validateEmail(email) {
	// 	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	// 	return emailRegex.test(email);
	// }

	// const modalForm = document.querySelector('.modal-form');
	// const sendBtn = modalForm.querySelector('.send-btn');
	// const emailField = document.querySelector('#email');
	// const emailValidateWarningText = document.querySelector('.validate-info');
	// const warningText = document.querySelector('.warning-text');

	// modalForm.addEventListener('submit', (e) => {
	// 	e.preventDefault();

	// 	const formFields = ['name', 'phone', 'email', 'comments'];

	// 	for (const fieldId of formFields) {
	// 		const field = document.getElementById(fieldId);
	// 		const value = field.value.trim();

	// 		if (value === '') {
	// 			field.classList.add('warning')
	// 		} else {
	// 			field.classList.remove('warning')
	// 		}

	// 		if (fieldId === 'email' && !validateEmail(value)) {
	// 			emailField.classList.add('warning');
	// 			emailValidateWarningText.classList.add('show');
	// 			sendBtn.classList.add('warning');
	// 			warningText.classList.add('active');
	// 		} else if (value !== '') {
	// 			warningText.classList.add('active');
	// 			warningText.textContent = 'Спасибо за обращение!';
	// 			emailField.classList.remove('warning');
	// 			emailValidateWarningText.classList.remove('show');
	// 			sendBtn.classList.remove('warning');
	// 			field.value = '';
	// 		}
	// 	}
	// });


	function validateEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
		const emailValue = emailField.value.trim();

		for (let i = 0; i < formFields.length; i++) {
			const field = document.getElementById(formFields[i]);
			const value = field.value.trim();

			const elements = [warningText, sendBtn, field, emailValidateWarningText, emailField];
			if (value === '' || !validateEmail(emailValue)) {
				elements.forEach((el) => el.classList.add('warning'))
				warningText.textContent = 'Заполните все поля для регистрации корректно!';
			} else {
				elements.forEach((el) => el.classList.remove('warning'));
				warningText.classList.add('warning');
				warningText.textContent = 'Спасибо за обращение!';
				emailValidateWarningText.classList.remove('warning');
				field.value = '';
			}
		}
	})

});