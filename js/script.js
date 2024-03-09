document.addEventListener('DOMContentLoaded', () => {
	// AOS
	AOS.init();

	// responsive navbar

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
		paginationClickable: true,
		spaceBetween: 30,
		loop: true,
		speed: 900,
	});
	// characteristics swiper
	var swiper = new Swiper(".characteristics-swiper", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		paginationClickable: true,
		spaceBetween: 30,
		loop: true,
		speed: 900,
	});

	// swiper end
	// modal
	const modal = document.querySelector('[data-modal]');
	const openModalBtn = document.querySelector('[data-modal-target]');
	const closeModalBtn = document.querySelector('[data-modal-close]');
	function hiddenModal() {
		modal.classList.remove('show');
	}
	function showModal() {
		modal.classList.add('show');
	}
	openModalBtn.addEventListener('click', showModal);
	closeModalBtn.addEventListener('click', hiddenModal);
	modal.addEventListener('click', (e) => {
		if (e.target && e.target === modal && modal.classList.contains('show')) {
			hiddenModal();
		}
	})

	// form validation
	const modalForm = document.querySelector('.modal-form');
	modalForm.addEventListener('submit', (e) => {
		e.preventDefault();
	})
});