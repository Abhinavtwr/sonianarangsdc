(function ($) {
	"use strict";

	$('.sidebar-button').on("click", function () {
		$(this).toggleClass('active');
	});

	const sidebarButton = document.querySelector('.sidebar-button');

	if (sidebarButton) {
		sidebarButton.addEventListener('click', () => {
			document.querySelector('.main-menu').classList.toggle('show-menu');
		});
	}

	$('.menu-close-btn').on("click", function () {
		$('.main-menu').removeClass('show-menu');
	});

	// sidebar
	$('.right-sidebar-button').on("click", function () {
		$('.right-sidebar-menu').addClass('show-right-menu');
	});
	$('.right-sidebar-close-btn').on("click", function () {
		$('.right-sidebar-menu').removeClass('show-right-menu');
	});

	jQuery('.dropdown-icon').on('click', function () {
		jQuery(this).toggleClass('active').next('ul, .mega-menu, .mega-menu2').slideToggle();
		jQuery(this).parent().siblings().children('ul, .mega-menu, .mega-menu2').slideUp();
		jQuery(this).parent().siblings().children('.active').removeClass('active');
	});
	jQuery('.dropdown-icon2').on('click', function () {
		jQuery(this).toggleClass('active').next('.submenu-list').slideToggle();
		jQuery(this).parent().siblings().children('.submenu-list').slideUp();
		jQuery(this).parent().siblings().children('.active').removeClass('active');
	});
	jQuery(function ($) {
		$(document).on('click', '.portfolio-drop-down', function (e) {
			e.preventDefault(); // Prevent default anchor behavior

			let submenu = $(this).siblings('.sub-menu'); // Get submenu

			if (submenu.length) {
				// Close other submenus at the same level
				$(this).parent().siblings().find('.sub-menu').slideUp();

				// Toggle clicked submenu
				submenu.stop(true, true).slideToggle();
			}
		});
	});

	// sticky header
	window.addEventListener("scroll", function () {
		const header = document.querySelector("header.header-area");
		if (header) {
			header.classList.toggle("sticky", window.scrollY > 0);
		}
	});

	// Home About Slider
	var swiper = new Swiper(".biography-slider", {
		slidesPerView: 5,
		speed: 1500,
		spaceBetween: 24,
		fadeEffect: {
			crossFade: true,
		},
		pagination: {
			el: ".swiper-pagination2",
			clickable: true,
		},
		breakpoints: {
			280: {
				slidesPerView: 1,
			},
			386: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 1,
			},
			992: {
				slidesPerView: 1,
			},
			1200: {
				slidesPerView: 1,
			},
			1400: {
				slidesPerView: 1,
			},
			1500: {
				slidesPerView: 1,
			},
			1800: {
				slidesPerView: 1,
			},
		},
	});
	// Home About Slider
	var swiper = new Swiper(".testimonial-slider", {
		slidesPerView: 5,
		speed: 1500,
		spaceBetween: 24,
		fadeEffect: {
			crossFade: true,
		},
		navigation: {
			nextEl: ".testimonial-slider-next",
			prevEl: ".testimonial-slider-prev",
		},
		pagination: {
			el: ".swiper-pagination2",
			clickable: true,
		},
		breakpoints: {
			280: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			386: {
				slidesPerView: 1,
				spaceBetween: 0,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1400: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
			1500: {
				slidesPerView: 1,
			},
			1800: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
		},
	});

	//Counter up
	$('.counter').counterUp({
		delay: 100,
		time: 2000
	});
	// niceSelect
	if ($("select").length) {
		$("select").niceSelect();
	}
	jQuery(window).on("load", function () {
		new WOW().init();
		window.wow = new WOW({
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: true,
			live: true,
			offset: 80,
		});
		window.wow.init();
	});


	// Home1 Team-Card Slider Start
	var swiper = new Swiper(".portfolio-card-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 0,
		// autoplay: {
		// 	delay: 2500, // Autoplay duration in milliseconds
		// 	disableOnInteraction: false,
		// },
		navigation: {
			nextEl: ".portfolio-slide-next",
			prevEl: ".portfolio-slide-prev",
		},
		pagination: {
			el: ".team-card-pagination",
			clickable: true,
		},
		breakpoints: {
			280: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			386: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1500: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1800: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		},
	});
	// Home1 Testimonial-Card Slider Start
	var swiper = new Swiper(".testimonial-card-slider", {
		slidesPerView: 1,
		speed: 1500,
		spaceBetween: 0,
		// autoplay: {
		// 	delay: 2500, // Autoplay duration in milliseconds
		// 	disableOnInteraction: false,
		// },
		navigation: {
			nextEl: ".portfolio-slide-next",
			prevEl: ".portfolio-slide-prev",
		},
		pagination: {
			el: ".team-card-pagination",
			clickable: true,
		},
		breakpoints: {
			280: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			386: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			576: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1200: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			1400: {
				slidesPerView: 2,
				spaceBetween: 60,
			},
			1500: {
				slidesPerView: 2,
				spaceBetween: 60,
			},
			1800: {
				slidesPerView: 2,
				spaceBetween: 60,
			},
		},
	});

	//wow js 
	jQuery(window).on('load', function () {
		new WOW().init();
		window.wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true,
			live: true,
			offset: 80
		})
		window.wow.init();
	});

	// niceSelect
	if ($("select").length) {
		$("select").niceSelect();
	}
	jQuery(window).on("load", function () {
		new WOW().init();
		window.wow = new WOW({
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: true,
			live: true,
			offset: 80,
		});
		window.wow.init();
	});

	if ($("select").length) {
		$("select").niceSelect();
	}


	// Pie Chart
	const services = {
		1: { title: "Business Printing", link: "service-details.html", images: ["assets/img/home/service-img1.png", "assets/img/home/service-img2.png", "assets/img/home/service-img3.png", "assets/img/home/service-img4.png"] },
		2: { title: "Marketing & Promotional", link: "service-details.html", images: ["assets/img/home/service-img1.png", "assets/img/home/service-img2.png", "assets/img/home/service-img3.png", "assets/img/home/service-img4.png"] },
		3: { title: "Book & Document Printing", link: "service-details.html", images: ["assets/img/home/service-img1.png", "assets/img/home/service-img2.png", "assets/img/home/service-img3.png", "assets/img/home/service-img4.png"] },
		4: { title: "Specialized Printing Services", link: "service-details.html", images: ["assets/img/home/service-img1.png", "assets/img/home/service-img2.png", "assets/img/home/service-img3.png", "assets/img/home/service-img4.png"] },
		5: { title: "Packaging & Label Printing", link: "service-details.html", images: ["assets/img/home/service-img1.png", "assets/img/home/service-img2.png", "assets/img/home/service-img3.png", "assets/img/home/service-img4.png"] },
		6: { title: "On-Demand Printing", link: "service-details.html", images: ["assets/img/home/service-img1.png", "assets/img/home/service-img2.png", "assets/img/home/service-img3.png", "assets/img/home/service-img4.png"] },
		7: { title: "Large Format Printing", link: "service-details.html", images: ["assets/img/home/service-img1.png", "assets/img/home/service-img2.png", "assets/img/home/service-img3.png", "assets/img/home/service-img4.png"] },
		8: { title: "Personalized & Custom Print", link: "service-details.html", images: ["assets/img/home/service-img1.png", "assets/img/home/service-img2.png", "assets/img/home/service-img3.png", "assets/img/home/service-img4.png"] }
	};

	// --- Check if pie chart exists ---
	const pie = document.getElementById("pieChart");

	if (pie) {
		const infoPanel = document.getElementById("infoPanel");
		const closeBtn = document.getElementById("closeBtn");
		const serviceTitleElement = document.getElementById("serviceTitle");
		const serviceLinkElement = document.getElementById("serviceLink");
		const imagesContainer = document.getElementById("imagesContainer");

		let currentSlice = null;

		// --- Add labels to pie slices ---
		function addSliceLabels() {
			const radius = pie.offsetWidth / 2;
			const labelDistance = radius * 0.7;

			for (let i = 1; i <= 8; i++) {
				const service = services[i];
				const label = document.createElement("div");
				label.classList.add("slice-label");
				label.textContent = service.title;
				label.dataset.sliceId = i;

				const startAngle = (i - 1) * 45;
				const endAngle = i * 45;
				const centerAngle = (startAngle + endAngle) / 2;
				const centerAngleRad = centerAngle * (Math.PI / 180);

				const x = radius + labelDistance * Math.cos(centerAngleRad);
				const y = radius + labelDistance * Math.sin(centerAngleRad);

				label.style.left = `${x}px`;
				label.style.top = `${y}px`;

				pie.appendChild(label);
			}
		}

		addSliceLabels();

		// --- Update info panel ---
		function updateInfoPanel(sliceId) {
			const service = services[sliceId];
			if (!service) {
				infoPanel.classList.remove("active");
				return;
			}

			serviceTitleElement.textContent = service.title;
			serviceLinkElement.href = service.link;

			imagesContainer.innerHTML = "";
			service.images.forEach((src) => {
				const img = document.createElement("img");
				img.src = src;
				img.alt = service.title;
				imagesContainer.appendChild(img);
			});

			infoPanel.classList.add("active");
		}

		// --- Mouse move over pie ---
		pie.addEventListener("mousemove", (e) => {
			const rect = pie.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;
			let angle = Math.atan2(y, x) * (180 / Math.PI);
			if (angle < 0) angle += 360;
			const slice = Math.floor(angle / 45) + 1;

			if (slice !== currentSlice) {
				currentSlice = slice;
				updateInfoPanel(currentSlice);
			}
		});

		// --- Mouse leaves pie ---
		pie.addEventListener("mouseleave", () => {
			setTimeout(() => {
				if (!infoPanel.matches(":hover")) {
					infoPanel.classList.remove("active");
					currentSlice = null;
				}
			}, 100);
		});

		// --- Close button ---
		closeBtn.addEventListener("click", () => {
			infoPanel.classList.remove("active");
			currentSlice = null;
		});

		// --- Keep panel open when hovered ---
		infoPanel.addEventListener("mouseleave", () => {
			if (!pie.matches(":hover")) {
				infoPanel.classList.remove("active");
				currentSlice = null;
			}
		});
	}


	// Hide when page fully loads
	const preloader = document.querySelector(".preloader");

	if (preloader) {
		// Only run this if preloader exists on the page
		setTimeout(() => {
			preloader.classList.add("hide"); // Or your fade-out class
		}, 1500); // 30 seconds
	}
	// password-hide and show
	const togglePassword = document.querySelector('#togglePassword');
	const password = document.querySelector('#password');
	if (togglePassword) {
		togglePassword.addEventListener('click', function (e) {
			// toggle the type attribute
			const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
			password.setAttribute('type', type);
			// toggle the eye / eye slash icon
			this.classList.toggle('bi-eye');
		});
	}
	// confirm-password
	const togglePassword2 = document.getElementById('togglePassword2');
	const password2 = document.querySelector('#password2');
	if (togglePassword2) {
		togglePassword2.addEventListener('click', function (e) {
			// toggle the type attribute
			const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
			password2.setAttribute('type', type);
			// toggle the eye / eye slash icon
			this.classList.toggle('bi-eye');
		});
	}
	// confirm-password
	const togglePassword3 = document.getElementById('togglePassword3');
	const password3 = document.querySelector('#password3');
	if (togglePassword3) {
		togglePassword3.addEventListener('click', function (e) {
			// toggle the type attribute
			const type = password3.getAttribute('type') === 'password' ? 'text' : 'password';
			password3.setAttribute('type', type);
			// toggle the eye / eye slash icon
			this.classList.toggle('bi-eye');
		});
	}
	// confirm-password
	const togglePassword4 = document.getElementById('togglePassword4');
	const password4 = document.querySelector('#password4');
	if (togglePassword4) {
		togglePassword4.addEventListener('click', function (e) {
			// toggle the type attribute
			const type = password4.getAttribute('type') === 'password' ? 'text' : 'password';
			password4.setAttribute('type', type);
			// toggle the eye / eye slash icon
			this.classList.toggle('bi-eye');
		});
	}
	// confirm-password
	const togglePassword5 = document.getElementById('togglePassword5');
	const password5 = document.querySelector('#password5');
	if (togglePassword5) {
		togglePassword5.addEventListener('click', function (e) {
			// toggle the type attribute
			const type = password5.getAttribute('type') === 'password' ? 'text' : 'password';
			password5.setAttribute('type', type);
			// toggle the eye / eye slash icon
			this.classList.toggle('bi-eye');
		});
	}


}(jQuery));


