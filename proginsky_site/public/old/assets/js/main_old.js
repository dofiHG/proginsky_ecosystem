/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/src/js/main.js":
/*!****************************!*\
  !*** ./app/src/js/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var lightgallery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lightgallery.js */ "./node_modules/lightgallery.js/lib/js/lightgallery.js");
/* harmony import */ var lightgallery_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lightgallery_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lg_zoom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lg-zoom.js */ "./node_modules/lg-zoom.js/dist/lg-zoom.js");
/* harmony import */ var lg_zoom_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lg_zoom_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lg_thumbnail_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lg-thumbnail.js */ "./node_modules/lg-thumbnail.js/dist/lg-thumbnail.js");
/* harmony import */ var lg_thumbnail_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lg_thumbnail_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! imask */ "./node_modules/imask/esm/index.js");
/* harmony import */ var scroll_lock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! scroll-lock */ "./node_modules/scroll-lock/dist/scroll-lock.js");
/* harmony import */ var scroll_lock__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(scroll_lock__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dl_animate_dist_dl_animate_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dl-animate/dist/dl-animate-module */ "./node_modules/dl-animate/dist/dl-animate-module.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_7__);
//Import Libraries';










/***** Main script *****/
document.addEventListener("DOMContentLoaded", function (domLoadedEvent) {

	let raf = function (callback) {
		window.requestAnimationFrame(function () {
			callback();
		});
	};

	// media
	const lgMedia = window.matchMedia("(max-width: 1200px)");
	const smMedia = window.matchMedia("(max-width: 768px)");


	let header = document.querySelector('.header');
	let windowWidth = document.documentElement.clientWidth,
		windowHeight = document.documentElement.clientHeight,
		headerHeight = header.offsetHeight;

	window.addEventListener('resize', e => {
		windowWidth = document.documentElement.clientWidth;
		windowHeight = document.documentElement.clientHeight;
		headerHeight = header.offsetHeight;
	});

	new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_7___default.a();
	// new WOW().init();

	/**
	 *	Header
	 */

	// Changing header depending on the position
	let changeHeaderHandler = (e) => {
		if (window.pageYOffset > 10) {
			header.classList.add('header--not-top');
		} else {
			header.classList.remove('header--not-top');
		}
	};

	if (window.pageYOffset > 10) {
		header.classList.add('header--not-top');
	}

	window.addEventListener('scroll', changeHeaderHandler);


	//mobile menu
	let headerToggleBtn = document.querySelector('.header__toggle-btn');
	let headerCollapse = document.querySelector('.header__sub-group');
	let headerShown;

	let hideMobHeader = function () {
		headerToggleBtn.classList.remove('header__toggle-btn--rotate');

		headerToggleBtn.addEventListener('transitionend', () => {
			headerToggleBtn.classList.remove('header__toggle-btn--compress');

			headerToggleBtn.addEventListener('transitionend', () => {
				headerCollapse.style.height = null;

				headerCollapse.addEventListener('transitionend', () => {
					header.classList.remove('header--showed');
					// headerCollapse.style.overflow = null;
					// scrollLock.enablePageScroll(header);
					headerShown = false;
				}, { once: true });
			}, { once: true });
		}, { once: true });
	}

	let showMobHeader = function () {
		// scrollLock.disablePageScroll(header);
		headerShown = true;

		headerToggleBtn.classList.add('header__toggle-btn--compress');

		headerToggleBtn.addEventListener('transitionend', () => {
			headerToggleBtn.classList.add('header__toggle-btn--rotate');

			headerToggleBtn.addEventListener('transitionend', () => {

				headerCollapse.style.height = 'initial';

				// let height = (headerCollapse.clientHeight > windowHeight) ? headerCollapse.clientHeight : windowHeight;
				let height = headerCollapse.clientHeight;

				headerCollapse.style.height = null;

				raf(() => {
					raf(() => {
						headerCollapse.style.height = height > windowHeight ? height + 'px' : windowHeight + 'px';
						header.classList.add('header--showed');

						// headerCollapse.addEventListener('transitionend', function() {
						// 	headerCollapse.style.height = 'auto';
						// }, {once: true});
					});
				});
				// headerCollapse.style.overflow = 'auto';
			}, { once: true });
		}, { once: true });
	}

	headerToggleBtn.addEventListener('click', (e) => {
		e.preventDefault();

		if (!header.classList.contains('header--showed')) {
			showMobHeader();
		} else {
			hideMobHeader();
		}
	});

	window.addEventListener('resize', function () {
		if (windowWidth > 1200 && headerShown) {
			headerCollapse.style.height = null;
			header.classList.remove('header--showed');
			headerToggleBtn.classList.remove('header__toggle-btn--rotate');
			headerToggleBtn.classList.remove('header__toggle-btn--compress');
			headerShown = false;
		}
	});


	/**
	 * modals
	 */

	const modalOpenBtns = document.querySelectorAll('a[data-modal], button[data-modal]');
	const modal = document.querySelector('.modal');
	const modalCloseBtns = modal.querySelectorAll('.modal__close-btn');
	let modalEl;

	if (modal) {
		for (let i = 0; i < modalOpenBtns.length; i++) {
			const openBtn = modalOpenBtns[i],
				modalId = "#" + openBtn.dataset.modal,
				modalWrap = document.querySelector(modalId),
				modalForm = modalWrap.querySelector('form');

			if (!modalWrap) {
				continue;
			}

			const overlay = modal.querySelector('.modal__overlay');

			openBtn.addEventListener("click", openModal);

			modalCloseBtns.forEach(btn => {
				btn.addEventListener("click", closeModal);
			});

			function openModal(e) {
				e.preventDefault();

				let handler = () => {
					overlay.addEventListener("click", closeModal);
					openBtn.removeEventListener("click", openModal);
				}

				let shown = () => {
					modal.classList.add('modal--show');
					modalWrap.style.display = 'flex';
					scroll_lock__WEBPACK_IMPORTED_MODULE_5___default.a.disablePageScroll(modal);
					modalEl = modalWrap;

					raf(() => {
						modal.classList.add('modal--visible');
						modal.addEventListener('transitionend', handler, { once: true });
					});
				}


				let parent;

				switch (modalId) {
					case '#modal-course-more':

						parent = this.closest('.courses-card');

						modalWrap.querySelector('.modal-course-more__image img').src = parent.querySelector('.courses-card__input-hidden').value;
						modalWrap.querySelector('.modal-course-more__title').textContent = parent.querySelector('.courses-card__title').textContent;
						modalWrap.querySelector('.modal-course-more__age').textContent = parent.querySelector('.courses-card__years').textContent;
						modalWrap.querySelector('.modal-course-more__description-text').textContent = parent.querySelector('.courses-card__content-hidden').textContent;

						break;
					case '#modal-signup':

						let value;
						parent = this.closest('.courses-card') || this.closest('.modal-course-more');

						if (!parent) {
							value = 'free';
						} else {
							value = parent.querySelector('.courses-card__title, .modal-course-more__title').textContent;
						}

						if (modalForm.querySelector('input[name = course]')) {
							modalForm.querySelector('input[name = course]').value = value;
						} else {
							let input = document.createElement('input');
							input.type = 'hidden';
							input.name = 'course';
							input.value = value;
							modalForm.appendChild(input);
						}

						break;
					default:
						break;
				}

				//is shown
				if (modal.classList.contains('modal--show')) {
					modal.classList.remove('modal--visible');

					modal.addEventListener('transitionend', function () {
						modalEl.style.display = null;
						shown();

					}, { once: true });

				} else {
					shown();
				}

			}

			function closeModal(e) {
				e.preventDefault();
				modal.classList.remove('modal--visible');
				scroll_lock__WEBPACK_IMPORTED_MODULE_5___default.a.enablePageScroll(modal);

				let handler = () => {
					modal.classList.remove('modal--show');
					modalWrap.style.display = null;

					openBtn.addEventListener("click", openModal);
					overlay.removeEventListener("click", closeModal);
				}

				modal.addEventListener('transitionend', handler, { once: true });
			}
		}
	}


	/**
	 * Phone mask
	 */

	let phoneInputs = document.querySelectorAll('.phoneMask');

	for (let i = 0; i < phoneInputs.length; i++) {
		const el = phoneInputs[i];

		let patternMask = new imask__WEBPACK_IMPORTED_MODULE_4__["default"](el, {
			mask: '+{7} (000) 000-00-00',
			lazy: true,
			placeholderChar: '_'
		});

		el.addEventListener('focus', function () {
			patternMask.updateOptions({ lazy: false });
		}, true);

		el.addEventListener('blur', function () {
			patternMask.updateOptions({ lazy: true });
			if (!patternMask.masked.rawInputValue) {
				patternMask.value = '';
			}
		}, true);
	}


	/**
	 * Sliders
	 */

	swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]]);

	//screen sliders
	let screenSliders = document.querySelectorAll('.screen .screen__slider');

	screenSliders.forEach(slider => {
		new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
			spaceBetween: 30,
			wrapperClass: 'screen__list',
			slideClass: 'screen__item',
			slidesPerView: 1,
			watchOverflow: true,
			loop: true,

			autoplay: {
				delay: 3000,
			},

			pagination: {
				el: ".screen__pagination",
				clickable: true,
				bulletElement: 'li',
			},

			navigation: {
				nextEl: ".screen__arrow.slider-arrow--next",
				prevEl: ".screen__arrow.slider-arrow--prev",
				disabledClass: 'slider-arrow--disabled',
			},
		});


		let links = slider.querySelectorAll('.screen__item a');

		//array img links from slider
		let getLinksToImgs = function () {
			let links = slider.querySelectorAll('.screen__item:not(.swiper-slide-duplicate) a');
			let arr = [];

			links.forEach(link => {
				arr.push({
					src: link.getAttribute('href'),
					thumb: link.querySelector('img').getAttribute('src'),
				});
			});

			return arr;
		}


		links.forEach(link => {
			link.addEventListener('click', function (e) {
				e.preventDefault();

				let id = this.parentElement.getAttribute('data-swiper-slide-index');

				window.lightGallery(link, {
					index: id,
					hash: false,
					closable: false,
					showMaximizeIcon: true,
					appendSubHtmlTo: ".lg-item",
					slideDelay: 400,
					plugins: [lg_zoom_js__WEBPACK_IMPORTED_MODULE_2___default.a, lg_thumbnail_js__WEBPACK_IMPORTED_MODULE_3___default.a],
					mode: 'lg-fade',

					dynamic: true,
					dynamicEl: getLinksToImgs(),

					thumbWidth: 60,
					thumbHeight: "40px",
					thumbMargin: 4
				});
			});
		});
	});



	//shop sliders
	let shopSliders = document.querySelectorAll('.shop-card__slider');

	shopSliders.forEach(slider => {
		new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](slider, {
			spaceBetween: 30,
			wrapperClass: 'shop-card__list',
			slideClass: 'shop-card__item',
			slidesPerView: 1,
			watchOverflow: true,
			loop: true,

			pagination: {
				el: ".shop-card__pagination",
				clickable: true,
				bulletElement: 'li',
			},

			navigation: {
				nextEl: ".shop-card__arrow.slider-arrow--next",
				prevEl: ".shop-card__arrow.slider-arrow--prev",
				disabledClass: 'slider-arrow--disabled',
			},
		});
	});

	//reviews slider
	let reviewsSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.reviews__slider .reviews__wrapper', {
		spaceBetween: 30,
		wrapperClass: 'reviews__list',
		slideClass: 'reviews__item',
		slidesPerView: 1,
		watchOverflow: true,
		loop: true,

		pagination: {
			el: ".reviews__pagination",
			clickable: true,
			bulletElement: 'li',
		},

		navigation: {
			nextEl: ".reviews__arrows-mobile-group .reviews__arrow.slider-arrow--next",
			prevEl: ".reviews__arrows-mobile-group .reviews__arrow.slider-arrow--prev",
			disabledClass: 'slider-arrow--disabled',
		},

		breakpoints: {
			'768': {
				slidesPerView: 1,
				navigation: {
					nextEl: ".reviews__slider > .reviews__arrow.slider-arrow--next",
					prevEl: ".reviews__slider > .reviews__arrow.slider-arrow--prev",
					disabledClass: 'slider-arrow--disabled',
				},
			},
			'900': {
				slidesPerView: 2,
				navigation: {
					nextEl: ".reviews__slider > .reviews__arrow.slider-arrow--next",
					prevEl: ".reviews__slider > .reviews__arrow.slider-arrow--prev",
					disabledClass: 'slider-arrow--disabled',
				},
			},
			'1400': {
				slidesPerView: 3,
				navigation: {
					nextEl: ".reviews__slider > .reviews__arrow.slider-arrow--next",
					prevEl: ".reviews__slider > .reviews__arrow.slider-arrow--prev",
					disabledClass: 'slider-arrow--disabled',
				},
			},
		},
	});

	function changeArrows(sm) {
		reviewsSlider.navigation.destroy();

		if (sm.matches) {
			reviewsSlider.navigation.nextEl = ".reviews__arrows-mobile-group .reviews__arrow.slider-arrow--next";
			reviewsSlider.navigation.prevEl = ".reviews__arrows-mobile-group .reviews__arrow.slider-arrow--prev";
		} else {
			reviewsSlider.navigation.nextEl = ".reviews__slider > .reviews__arrow.slider-arrow--next";
			reviewsSlider.navigation.prevEl = ".reviews__slider > .reviews__arrow.slider-arrow--prev";
		}

		reviewsSlider.navigation.init();
	}

	changeArrows(smMedia);
	smMedia.addListener(changeArrows);


	//courses slider
	let coursesSlider;

	function actCouresSlider(lg) {
		if (lg.matches) {
			coursesSlider = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.courses--short .courses__wrapper', {
				spaceBetween: 30,
				wrapperClass: 'courses__list',
				slideClass: 'courses__item',
				slidesPerView: 1,
				watchOverflow: true,
				loop: true,

				pagination: {
					el: ".courses__pagination",
					clickable: true,
					bulletElement: 'li',
				},

				navigation: {
					nextEl: ".courses__arrow.slider-arrow--next",
					prevEl: ".courses__arrow.slider-arrow--prev",
					disabledClass: 'slider-arrow--disabled',
				},

				breakpoints: {
					'900': {
						slidesPerView: 2,
					},
				},
			});
		} else {
			if (coursesSlider) {
				coursesSlider.destroy();
			}
		}
	}

	actCouresSlider(lgMedia);

	lgMedia.addListener(actCouresSlider);


	/**
	 * Background figures movement
	 */

	let figures = document.querySelectorAll('.background-figures__item');

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	figures.forEach(figure => {
		let posX = getRandomInt(-20, 20),
			poxY = getRandomInt(-20, 20);

		figure.style.transform = `translate(${posX}px,${poxY}px)`;

		figure.addEventListener('transitionend', function (e) {
			posX = getRandomInt(-20, 20);
			poxY = getRandomInt(-20, 20);

			figure.style.transform = `translate(${posX}px,${poxY}px)`;
		})
	});


	/**
	 * Title Animation
	 */

	let substrates = document.querySelectorAll('.block-with-substrate');

	substrates.forEach(sub => {

		function Visible(target) {
			var targetPosition = {
				top: window.pageYOffset + target.getBoundingClientRect().top,
				left: window.pageXOffset + target.getBoundingClientRect().left,
				right: window.pageXOffset + target.getBoundingClientRect().right,
				bottom: window.pageYOffset + target.getBoundingClientRect().bottom
			}

			let windowPosition = {
				top: window.pageYOffset,
				left: window.pageXOffset,
				right: window.pageXOffset + document.documentElement.clientWidth,
				bottom: window.pageYOffset + document.documentElement.clientHeight
			};

			if (targetPosition.bottom > windowPosition.top + 50 &&
				targetPosition.top < windowPosition.bottom - 50 &&
				targetPosition.right > windowPosition.left &&
				targetPosition.left < windowPosition.right) {

				sub.classList.add('block-with-substrate--visible');
			} else {
				sub.classList.remove('block-with-substrate--visible');
			};
		};

		window.addEventListener('scroll', function () {
			Visible(sub);
		});
		Visible(sub);
	});


	/**
	 * Faq accordion
	 */

	let faqItems = document.querySelectorAll(".faq__item");
	let activeFaq;

	faqItems.forEach(item => {
		let faqBody = item.querySelector('.faq__body');
		let faqHead = item.querySelector('.faq__head');
		let height;

		faqBody.style.maxHeight = 'initial';
		raf(() => {
			height = faqBody.clientHeight;
			faqBody.style.maxHeight = null;
		});

		faqHead.addEventListener("click", function () {
			if (activeFaq && activeFaq !== item) {
				activeFaq.classList.remove("faq__item--active");
				activeFaq.querySelector('.faq__body').style.maxHeight = null;
				activeFaq = null;
			}

			if (faqBody.style.maxHeight) {
				item.classList.remove("faq__item--active");
				faqBody.style.maxHeight = null;
			} else {
				item.classList.add("faq__item--active");
				faqBody.style.maxHeight = height + 'px';

				activeFaq = item;
			}
		});
	});


	/**
	 * Show/Hide Classes stages
	 */

	let classStages = document.querySelector('.classes-stages');
	let classStagesBtn = document.querySelector(".classes-stages__head");
	let classStagesBody = document.querySelector(".classes-stages__list");

	function showClassStages(sm) {
		if (sm.matches) {
			classStagesBtn.addEventListener("click", classStagesOpenHandler);

		} else {
			classStages.classList.remove("classes-stages--shown");
			classStagesBody.style.maxHeight = null;
			classStagesBtn.removeEventListener("click", classStagesOpenHandler);
		}
	}

	function classStagesOpenHandler() {
		if (classStages.classList.contains('classes-stages--shown')) {
			classStages.classList.remove("classes-stages--shown");
			classStagesBody.style.maxHeight = 0;
		} else {
			let height;
			classStagesBody.style.maxHeight = 'initial';

			raf(() => {
				height = classStagesBody.clientHeight;
				classStagesBody.style.maxHeight = null;

				raf(() => {
					classStages.classList.add("classes-stages--shown");
					classStagesBody.style.maxHeight = height + 'px';

					classStagesBody.addEventListener('transitionend', function (e) {
						classStagesBody.style.maxHeight = 'initial';
					})
				});
			});
		}
	}

	if (classStages) {
		showClassStages(smMedia);
		smMedia.addListener(showClassStages);
	}


	/**
	 * Form
	 */

	let forms = document.forms;

	for (let i = 0; i < forms.length; i++) {
		if (forms[i] && window.FormData) {

			let form = forms[i];

			form.addEventListener('submit', function (e) {
				e.preventDefault();

				let reqInputs = form.querySelectorAll('[required]');
				let reqFault = false;

				reqInputs.forEach(input => {
					let parent = input.parentNode;
					let reqMessage = parent.querySelector('.form__status');

					switch (input.getAttribute("name")) {
						case "phone":
							if (input.value.length < 18) {

								reqFault = true;

								if (reqMessage) {
									return;
								}

								reqMessage = document.createElement('span');
								reqMessage.classList.add('form__status');
								reqMessage.textContent = "Введите правильный номер телефона";
								parent.appendChild(reqMessage);

								parent.classList.add('form__field--fault');

								new dl_animate_dist_dl_animate_module__WEBPACK_IMPORTED_MODULE_6__["default"]().show(reqMessage, {
									name: 'fade',
									track: 'animation'
								});

								return;
							}
							break;

						case "name":
							if (input.value.length < 2) {

								reqFault = true;

								if (reqMessage) {
									return;
								}

								reqMessage = document.createElement('span');
								reqMessage.classList.add('form__status');
								reqMessage.textContent = "Поле должно быть заполнено";
								parent.appendChild(reqMessage);

								parent.classList.add('form__field--fault');

								new dl_animate_dist_dl_animate_module__WEBPACK_IMPORTED_MODULE_6__["default"]().show(reqMessage, {
									name: 'fade',
									track: 'animation'
								});

								return;
							}
							break;

						case "message":
							if (input.value.length < 2) {

								reqFault = true;

								if (reqMessage) {
									return;
								}

								reqMessage = document.createElement('span');
								reqMessage.classList.add('form__status');
								reqMessage.textContent = "Поле должно быть заполнено";
								parent.appendChild(reqMessage);

								parent.classList.add('form__field--fault');

								new dl_animate_dist_dl_animate_module__WEBPACK_IMPORTED_MODULE_6__["default"]().show(reqMessage, {
									name: 'fade',
									track: 'animation'
								});

								return;
							}
							break;

						default:
							break;
					}

					if (reqMessage) {
						new dl_animate_dist_dl_animate_module__WEBPACK_IMPORTED_MODULE_6__["default"]().hide(reqMessage, {
							name: 'fade',
							track: 'animation',
							afterLeave: function (reqMessage) {
								reqMessage.remove();
								parent.classList.remove('form__field--fault');
							}
						});
					}
				});


				//response
				if (reqFault) {
					return;
				}
			});
		}
	}
});


/***/ }),

/***/ "./node_modules/dl-animate/dist/dl-animate-module.js":
/*!***********************************************************!*\
  !*** ./node_modules/dl-animate/dist/dl-animate-module.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DLAnimate; });
class DLAnimate{
	constructor(){
		this.raf = window.requestAnimationFrame || 
				  window.webkitRequestAnimationFrame ||
				  window.msRequestAnimationFrame;		  

		let divTest = document.createElement("div");

		/* checking browser for necessary opportunities */
		this.canAnimate = (typeof this.raf === "function") &&
					  ("classList" in divTest) &&
					  typeof divTest.style.transition !== undefined;

		if(this.canAnimate){
			this.raf = this.raf.bind(window);
		}

		/* requestAnimationFrame queue */
		this.frames = [];
		this.framesRun = false;
	}

	show(el, options = {}){
		if(!this.canAnimate){
			this._show(el);
		}

		if(!this._isHidden(el)){
			return;
		}

		/* merge defaults and users options */
		let settings = this._calcOptions(options);

		/* set handler on animation finish */
		this._setFinishHandler(el, settings.track, settings.duration, () => {
			this._removeClasses(el, settings.classNames.enterActive);
			this._removeClasses(el, settings.classNames.enterTo);
			settings.afterEnter(el);
		});

		this._show(el);
		this._addClasses(el, settings.classNames.enter);
		settings.beforeEnter(el);
		
		this._addFrame(() => {
			this._addClasses(el, settings.classNames.enterActive);
		});

		this._addFrame(() => {
			this._removeClasses(el, settings.classNames.enter);
			this._addClasses(el, settings.classNames.enterTo);
		});
	}

	hide(el, options = {}){
		if(!this.canAnimate){
			this._hide(el);
		}

		if(this._isHidden(el)){
			return;
		}

		let settings = this._calcOptions(options);

		this._setFinishHandler(el, settings.track, settings.duration, () => {
			this._hide(el);
			this._removeClasses(el, settings.classNames.leaveActive);
			this._removeClasses(el, settings.classNames.leaveTo);
			options.systemOnEnd && options.systemOnEnd();
			settings.afterLeave(el);
		});

		this._addClasses(el, settings.classNames.leave);
		
		settings.beforeLeave(el);
		
		this._addFrame(() => {
			this._addClasses(el, settings.classNames.leaveActive);
		});

		this._addFrame(() => {
			this._addClasses(el, settings.classNames.leaveTo);
			this._removeClasses(el, settings.classNames.leave);
		});
	}

	insert(target, el, options = {}, before = null){
		this._hide(el);
		target.insertBefore(el, before);
		this.show(el, options);
	}

	remove(el, options = {}){
		options.systemDoneCallback = function(){
			el.parentNode.removeChild(el);
		}

		this.hide(el, options);
	}

	_setFinishHandler(el, track, duration, fn){
		let eventName;
		let isCssTrack = true;

		if(track === 'transition'){
			eventName = 'transitionend';
		}
		else if(track === 'animation'){
			eventName = 'animationend';
		}
		else{
			isCssTrack = false;
		}

		if(isCssTrack){
			let handler = function(){
				el.removeEventListener(eventName, handler);
				fn();
			};

			el.addEventListener(eventName, handler);
		}
		else{
			setTimeout(fn, duration);
		}
	}

	_calcOptions(options){
		let name = (options.name !== undefined) ? options.name : 'dl-nothing-doing-class';
		let classNames = this._mergeSettings(this._classNames(name), options.classNames);

		delete options.classNames;

		let defaults = {
			name: '',
			track: 'transition',
			duration: null,
			classNames: classNames,
			beforeEnter(el){},
			afterEnter(el){},
			beforeLeave(el){},
			afterLeave(el){},
			systemDoneCallback(el){}
		}

		let norm = this._mergeSettings(defaults, options);

		/* analize track & duration error */

		return norm;
	}

	_classNames(name){
		return {
			enter: name + '-enter',
			enterActive: name + '-enter-active',
			enterTo: name + '-enter-to',
			leave: name + '-leave',
			leaveActive: name + '-leave-active',
			leaveTo: name + '-leave-to'
		}
	}

	_addFrame(fn){
		this.frames.push(fn);

		if(!this.framesRun){
			this._nextFrame();
		}
	}

	_nextFrame(){
		if(this.frames.length === 0){
			this.framesRun = false;
			return;
		}

		let frame = this.frames.shift();

		this.raf(() => {
			this.raf(() => {
				frame();
				this._nextFrame();
			});
		});
	}

	_addClasses(el, str){
		let arr = str.split(' ');

		for(let i = 0; i < arr.length; i++){
			el.classList.add(arr[i]);
		}
	}

	_removeClasses(el, str){
		let arr = str.split(' ');

		for(let i = 0; i < arr.length; i++){
			el.classList.remove(arr[i]);
		}
	}

	_mergeSettings(defaults, extra){
		if(typeof extra !== "object"){
			return defaults;
		}

		let res = {};

		for(let k in defaults){
			res[k] = (extra[k] !== undefined) ? extra[k] : defaults[k];
		}
		
		return res;
	}

	_hide(el){
		el.style.display = 'none';
	}

	_show(el){
		el.style.removeProperty('display');
		
		if(this._isHidden(el)){
			el.style.display = 'block';
		}
	}

	_isHidden(el){
		return this._getStyle(el, 'display') === 'none';
	}

	_getStyle(el, prop){
		return getComputedStyle(el)[prop];
	}
}

/***/ }),

/***/ "./node_modules/dom7/dom7.esm.js":
/*!***************************************!*\
  !*** ./node_modules/dom7/dom7.esm.js ***!
  \***************************************/
/*! exports provided: default, $, add, addClass, animate, animationEnd, append, appendTo, attr, blur, change, children, click, closest, css, data, dataset, detach, each, empty, eq, filter, find, focus, focusin, focusout, hasClass, height, hide, html, index, insertAfter, insertBefore, is, keydown, keypress, keyup, mousedown, mouseenter, mouseleave, mousemove, mouseout, mouseover, mouseup, next, nextAll, off, offset, on, once, outerHeight, outerWidth, parent, parents, prepend, prependTo, prev, prevAll, prop, remove, removeAttr, removeClass, removeData, resize, scroll, scrollLeft, scrollTo, scrollTop, show, siblings, stop, styles, submit, text, toggleClass, touchend, touchmove, touchstart, transform, transition, transitionEnd, trigger, val, value, width */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationEnd", function() { return animationEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendTo", function() { return appendTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blur", function() { return blur; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "change", function() { return change; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "children", function() { return children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "click", function() { return click; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return closest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataset", function() { return dataset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eq", function() { return eq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focus", function() { return focus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusin", function() { return focusin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusout", function() { return focusout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertAfter", function() { return insertAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertBefore", function() { return insertBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keydown", function() { return keydown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keypress", function() { return keypress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyup", function() { return keyup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousedown", function() { return mousedown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseenter", function() { return mouseenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseleave", function() { return mouseleave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousemove", function() { return mousemove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseout", function() { return mouseout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseover", function() { return mouseover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseup", function() { return mouseup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "next", function() { return next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextAll", function() { return nextAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "once", function() { return once; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerHeight", function() { return outerHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outerWidth", function() { return outerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parent", function() { return parent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parents", function() { return parents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return prepend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prependTo", function() { return prependTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prev", function() { return prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevAll", function() { return prevAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prop", function() { return prop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttr", function() { return removeAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeData", function() { return removeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resize", function() { return resize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollLeft", function() { return scrollLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTop", function() { return scrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siblings", function() { return siblings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submit", function() { return submit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return toggleClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchend", function() { return touchend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchmove", function() { return touchmove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchstart", function() { return touchstart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionEnd", function() { return transitionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "val", function() { return val; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return width; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/**
 * Dom7 3.0.0
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/* eslint-disable no-proto */
function makeReactive(obj) {
  var proto = obj.__proto__;
  Object.defineProperty(obj, '__proto__', {
    get: function get() {
      return proto;
    },
    set: function set(value) {
      proto.__proto__ = value;
    }
  });
}

var Dom7 = /*#__PURE__*/function (_Array) {
  _inheritsLoose(Dom7, _Array);

  function Dom7(items) {
    var _this;

    _this = _Array.call.apply(_Array, [this].concat(items)) || this;
    makeReactive(_assertThisInitialized(_this));
    return _this;
  }

  return Dom7;
}( /*#__PURE__*/_wrapNativeSuper(Array));

function arrayFlat(arr) {
  if (arr === void 0) {
    arr = [];
  }

  var res = [];
  arr.forEach(function (el) {
    if (Array.isArray(el)) {
      res.push.apply(res, arrayFlat(el));
    } else {
      res.push(el);
    }
  });
  return res;
}
function arrayFilter(arr, callback) {
  return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
  var uniqueArray = [];

  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}
function toCamelCase(string) {
  return string.toLowerCase().replace(/-(.)/g, function (match, group) {
    return group.toUpperCase();
  });
}

function qsa(selector, context) {
  if (typeof selector !== 'string') {
    return [selector];
  }

  var a = [];
  var res = context.querySelectorAll(selector);

  for (var i = 0; i < res.length; i += 1) {
    a.push(res[i]);
  }

  return a;
}

function $(selector, context) {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var arr = [];

  if (!context && selector instanceof Dom7) {
    return selector;
  }

  if (!selector) {
    return new Dom7(arr);
  }

  if (typeof selector === 'string') {
    var html = selector.trim();

    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
      var toCreate = 'div';
      if (html.indexOf('<li') === 0) toCreate = 'ul';
      if (html.indexOf('<tr') === 0) toCreate = 'tbody';
      if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
      if (html.indexOf('<tbody') === 0) toCreate = 'table';
      if (html.indexOf('<option') === 0) toCreate = 'select';
      var tempParent = document.createElement(toCreate);
      tempParent.innerHTML = html;

      for (var i = 0; i < tempParent.childNodes.length; i += 1) {
        arr.push(tempParent.childNodes[i]);
      }
    } else {
      arr = qsa(selector.trim(), context || document);
    } // arr = qsa(selector, document);

  } else if (selector.nodeType || selector === window || selector === document) {
    arr.push(selector);
  } else if (Array.isArray(selector)) {
    if (selector instanceof Dom7) return selector;
    arr = selector;
  }

  return new Dom7(arrayUnique(arr));
}

$.fn = Dom7.prototype;

function addClass() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList;

    (_el$classList = el.classList).add.apply(_el$classList, classNames);
  });
  return this;
}

function removeClass() {
  for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    classes[_key2] = arguments[_key2];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    var _el$classList2;

    (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
  });
  return this;
}

function toggleClass() {
  for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    classes[_key3] = arguments[_key3];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  this.forEach(function (el) {
    classNames.forEach(function (className) {
      el.classList.toggle(className);
    });
  });
}

function hasClass() {
  for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    classes[_key4] = arguments[_key4];
  }

  var classNames = arrayFlat(classes.map(function (c) {
    return c.split(' ');
  }));
  return arrayFilter(this, function (el) {
    return classNames.filter(function (className) {
      return el.classList.contains(className);
    }).length > 0;
  }).length > 0;
}

function attr(attrs, value) {
  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) return this[0].getAttribute(attrs);
    return undefined;
  } // Set attrs


  for (var i = 0; i < this.length; i += 1) {
    if (arguments.length === 2) {
      // String
      this[i].setAttribute(attrs, value);
    } else {
      // Object
      for (var attrName in attrs) {
        this[i][attrName] = attrs[attrName];
        this[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }

  return this;
}

function removeAttr(attr) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].removeAttribute(attr);
  }

  return this;
}

function prop(props, value) {
  if (arguments.length === 1 && typeof props === 'string') {
    // Get prop
    if (this[0]) return this[0][props];
  } else {
    // Set props
    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i][props] = value;
      } else {
        // Object
        for (var propName in props) {
          this[i][propName] = props[propName];
        }
      }
    }

    return this;
  }

  return this;
}

function data(key, value) {
  var el;

  if (typeof value === 'undefined') {
    el = this[0];
    if (!el) return undefined; // Get value

    if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
      return el.dom7ElementDataStorage[key];
    }

    var dataKey = el.getAttribute("data-" + key);

    if (dataKey) {
      return dataKey;
    }

    return undefined;
  } // Set value


  for (var i = 0; i < this.length; i += 1) {
    el = this[i];
    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
    el.dom7ElementDataStorage[key] = value;
  }

  return this;
}

function removeData(key) {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
      el.dom7ElementDataStorage[key] = null;
      delete el.dom7ElementDataStorage[key];
    }
  }
}

function dataset() {
  var el = this[0];
  if (!el) return undefined;
  var dataset = {}; // eslint-disable-line

  if (el.dataset) {
    for (var dataKey in el.dataset) {
      dataset[dataKey] = el.dataset[dataKey];
    }
  } else {
    for (var i = 0; i < el.attributes.length; i += 1) {
      var _attr = el.attributes[i];

      if (_attr.name.indexOf('data-') >= 0) {
        dataset[toCamelCase(_attr.name.split('data-')[1])] = _attr.value;
      }
    }
  }

  for (var key in dataset) {
    if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
  }

  return dataset;
}

function val(value) {
  if (typeof value === 'undefined') {
    // get value
    var el = this[0];
    if (!el) return undefined;

    if (el.multiple && el.nodeName.toLowerCase() === 'select') {
      var values = [];

      for (var i = 0; i < el.selectedOptions.length; i += 1) {
        values.push(el.selectedOptions[i].value);
      }

      return values;
    }

    return el.value;
  } // set value


  for (var _i = 0; _i < this.length; _i += 1) {
    var _el = this[_i];

    if (Array.isArray(value) && _el.multiple && _el.nodeName.toLowerCase() === 'select') {
      for (var j = 0; j < _el.options.length; j += 1) {
        _el.options[j].selected = value.indexOf(_el.options[j].value) >= 0;
      }
    } else {
      _el.value = value;
    }
  }

  return this;
}

function value(value) {
  return this.val(value);
}

function transform(transform) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transform = transform;
  }

  return this;
}

function transition(duration) {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.transitionDuration = typeof duration !== 'string' ? duration + "ms" : duration;
  }

  return this;
}

function on() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;

  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) return;
    var eventData = e.target.dom7EventData || [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
      var _parents = $(target).parents(); // eslint-disable-line


      for (var k = 0; k < _parents.length; k += 1) {
        if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
      }
    }
  }

  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];

    if (eventData.indexOf(e) < 0) {
      eventData.unshift(e);
    }

    listener.apply(this, eventData);
  }

  var events = eventType.split(' ');
  var j;

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        var event = events[j];
        if (!el.dom7Listeners) el.dom7Listeners = {};
        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
        el.dom7Listeners[event].push({
          listener: listener,
          proxyListener: handleEvent
        });
        el.addEventListener(event, handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        var _event = events[j];
        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
        if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

        el.dom7LiveListeners[_event].push({
          listener: listener,
          proxyListener: handleLiveEvent
        });

        el.addEventListener(_event, handleLiveEvent, capture);
      }
    }
  }

  return this;
}

function off() {
  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  var eventType = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventType = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  if (!capture) capture = false;
  var events = eventType.split(' ');

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];
      var handlers = void 0;

      if (!targetSelector && el.dom7Listeners) {
        handlers = el.dom7Listeners[event];
      } else if (targetSelector && el.dom7LiveListeners) {
        handlers = el.dom7LiveListeners[event];
      }

      if (handlers && handlers.length) {
        for (var k = handlers.length - 1; k >= 0; k -= 1) {
          var handler = handlers[k];

          if (listener && handler.listener === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          } else if (!listener) {
            el.removeEventListener(event, handler.proxyListener, capture);
            handlers.splice(k, 1);
          }
        }
      }
    }
  }

  return this;
}

function once() {
  var dom = this;

  for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    args[_key7] = arguments[_key7];
  }

  var eventName = args[0],
      targetSelector = args[1],
      listener = args[2],
      capture = args[3];

  if (typeof args[1] === 'function') {
    eventName = args[0];
    listener = args[1];
    capture = args[2];
    targetSelector = undefined;
  }

  function onceHandler() {
    for (var _len8 = arguments.length, eventArgs = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      eventArgs[_key8] = arguments[_key8];
    }

    listener.apply(this, eventArgs);
    dom.off(eventName, targetSelector, onceHandler, capture);

    if (onceHandler.dom7proxy) {
      delete onceHandler.dom7proxy;
    }
  }

  onceHandler.dom7proxy = listener;
  return dom.on(eventName, targetSelector, onceHandler, capture);
}

function trigger() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

  for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    args[_key9] = arguments[_key9];
  }

  var events = args[0].split(' ');
  var eventData = args[1];

  for (var i = 0; i < events.length; i += 1) {
    var event = events[i];

    for (var j = 0; j < this.length; j += 1) {
      var el = this[j];

      if (window.CustomEvent) {
        var evt = new window.CustomEvent(event, {
          detail: eventData,
          bubbles: true,
          cancelable: true
        });
        el.dom7EventData = args.filter(function (data, dataIndex) {
          return dataIndex > 0;
        });
        el.dispatchEvent(evt);
        el.dom7EventData = [];
        delete el.dom7EventData;
      }
    }
  }

  return this;
}

function transitionEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('transitionend', fireCallBack);
  }

  if (callback) {
    dom.on('transitionend', fireCallBack);
  }

  return this;
}

function animationEnd(callback) {
  var dom = this;

  function fireCallBack(e) {
    if (e.target !== this) return;
    callback.call(this, e);
    dom.off('animationend', fireCallBack);
  }

  if (callback) {
    dom.on('animationend', fireCallBack);
  }

  return this;
}

function width() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

  if (this[0] === window) {
    return window.innerWidth;
  }

  if (this.length > 0) {
    return parseFloat(this.css('width'));
  }

  return null;
}

function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles = this.styles();

      return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
    }

    return this[0].offsetWidth;
  }

  return null;
}

function height() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

  if (this[0] === window) {
    return window.innerHeight;
  }

  if (this.length > 0) {
    return parseFloat(this.css('height'));
  }

  return null;
}

function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      var _styles2 = this.styles();

      return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
    }

    return this[0].offsetHeight;
  }

  return null;
}

function offset() {
  if (this.length > 0) {
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = document.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;
    var scrollTop = el === window ? window.scrollY : el.scrollTop;
    var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: box.top + scrollTop - clientTop,
      left: box.left + scrollLeft - clientLeft
    };
  }

  return null;
}

function hide() {
  for (var i = 0; i < this.length; i += 1) {
    this[i].style.display = 'none';
  }

  return this;
}

function show() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.style.display === 'none') {
      el.style.display = '';
    }

    if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
      // Still not visible
      el.style.display = 'block';
    }
  }

  return this;
}

function styles() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  if (this[0]) return window.getComputedStyle(this[0], null);
  return {};
}

function css(props, value) {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var i;

  if (arguments.length === 1) {
    if (typeof props === 'string') {
      // .css('width')
      if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
    } else {
      // .css({ width: '100px' })
      for (i = 0; i < this.length; i += 1) {
        for (var _prop in props) {
          this[i].style[_prop] = props[_prop];
        }
      }

      return this;
    }
  }

  if (arguments.length === 2 && typeof props === 'string') {
    // .css('width', '100px')
    for (i = 0; i < this.length; i += 1) {
      this[i].style[props] = value;
    }

    return this;
  }

  return this;
}

function each(callback) {
  if (!callback) return this;
  this.forEach(function (el, index) {
    callback.apply(el, [el, index]);
  });
  return this;
}

function filter(callback) {
  var result = arrayFilter(this, callback);
  return $(result);
}

function html(html) {
  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].innerHTML = html;
  }

  return this;
}

function text(text) {
  if (typeof text === 'undefined') {
    return this[0] ? this[0].textContent.trim() : null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this[i].textContent = text;
  }

  return this;
}

function is(selector) {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var el = this[0];
  var compareWith;
  var i;
  if (!el || typeof selector === 'undefined') return false;

  if (typeof selector === 'string') {
    if (el.matches) return el.matches(selector);
    if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
    if (el.msMatchesSelector) return el.msMatchesSelector(selector);
    compareWith = $(selector);

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  if (selector === document) {
    return el === document;
  }

  if (selector === window) {
    return el === window;
  }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;

    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) return true;
    }

    return false;
  }

  return false;
}

function index() {
  var child = this[0];
  var i;

  if (child) {
    i = 0; // eslint-disable-next-line

    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }

    return i;
  }

  return undefined;
}

function eq(index) {
  if (typeof index === 'undefined') return this;
  var length = this.length;

  if (index > length - 1) {
    return $([]);
  }

  if (index < 0) {
    var returnIndex = length + index;
    if (returnIndex < 0) return $([]);
    return $([this[returnIndex]]);
  }

  return $([this[index]]);
}

function append() {
  var newChild;
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();

  for (var k = 0; k < arguments.length; k += 1) {
    newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        while (tempDiv.firstChild) {
          this[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this[i].appendChild(newChild[j]);
        }
      } else {
        this[i].appendChild(newChild);
      }
    }
  }

  return this;
}

function appendTo(parent) {
  $(parent).append(this);
  return this;
}

function prepend(newChild) {
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var i;
  var j;

  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;

      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
      }
    } else {
      this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
  }

  return this;
}

function prependTo(parent) {
  $(parent).prepend(this);
  return this;
}

function insertBefore(selector) {
  var before = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (before.length === 1) {
      before[0].parentNode.insertBefore(this[i], before[0]);
    } else if (before.length > 1) {
      for (var j = 0; j < before.length; j += 1) {
        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
      }
    }
  }
}

function insertAfter(selector) {
  var after = $(selector);

  for (var i = 0; i < this.length; i += 1) {
    if (after.length === 1) {
      after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
    } else if (after.length > 1) {
      for (var j = 0; j < after.length; j += 1) {
        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
      }
    }
  }
}

function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
        return $([this[0].nextElementSibling]);
      }

      return $([]);
    }

    if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
    return $([]);
  }

  return $([]);
}

function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.nextElementSibling) {
    var _next = el.nextElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_next).is(selector)) nextEls.push(_next);
    } else nextEls.push(_next);

    el = _next;
  }

  return $(nextEls);
}

function prev(selector) {
  if (this.length > 0) {
    var el = this[0];

    if (selector) {
      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
        return $([el.previousElementSibling]);
      }

      return $([]);
    }

    if (el.previousElementSibling) return $([el.previousElementSibling]);
    return $([]);
  }

  return $([]);
}

function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) return $([]);

  while (el.previousElementSibling) {
    var _prev = el.previousElementSibling; // eslint-disable-line

    if (selector) {
      if ($(_prev).is(selector)) prevEls.push(_prev);
    } else prevEls.push(_prev);

    el = _prev;
  }

  return $(prevEls);
}

function siblings(selector) {
  return this.nextAll(selector).add(this.prevAll(selector));
}

function parent(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode !== null) {
      if (selector) {
        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
      } else {
        parents.push(this[i].parentNode);
      }
    }
  }

  return $(parents);
}

function parents(selector) {
  var parents = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var _parent = this[i].parentNode; // eslint-disable-line

    while (_parent) {
      if (selector) {
        if ($(_parent).is(selector)) parents.push(_parent);
      } else {
        parents.push(_parent);
      }

      _parent = _parent.parentNode;
    }
  }

  return $(parents);
}

function closest(selector) {
  var closest = this; // eslint-disable-line

  if (typeof selector === 'undefined') {
    return $([]);
  }

  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }

  return closest;
}

function find(selector) {
  var foundElements = [];

  for (var i = 0; i < this.length; i += 1) {
    var found = this[i].querySelectorAll(selector);

    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }

  return $(foundElements);
}

function children(selector) {
  var children = []; // eslint-disable-line

  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this[i].children;

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector || $(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }

  return $(children);
}

function remove() {
  for (var i = 0; i < this.length; i += 1) {
    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
  }

  return this;
}

function detach() {
  return this.remove();
}

function add() {
  var dom = this;
  var i;
  var j;

  for (var _len10 = arguments.length, els = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    els[_key10] = arguments[_key10];
  }

  for (i = 0; i < els.length; i += 1) {
    var toAdd = $(els[i]);

    for (j = 0; j < toAdd.length; j += 1) {
      dom.push(toAdd[j]);
    }
  }

  return dom;
}

function empty() {
  for (var i = 0; i < this.length; i += 1) {
    var el = this[i];

    if (el.nodeType === 1) {
      for (var j = 0; j < el.childNodes.length; j += 1) {
        if (el.childNodes[j].parentNode) {
          el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
        }
      }

      el.textContent = '';
    }
  }

  return this;
}

function scrollTo() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var left = args[0],
      top = args[1],
      duration = args[2],
      easing = args[3],
      callback = args[4];

  if (args.length === 4 && typeof easing === 'function') {
    callback = easing;
    left = args[0];
    top = args[1];
    duration = args[2];
    callback = args[3];
    easing = args[4];
  }

  if (typeof easing === 'undefined') easing = 'swing';
  return this.each(function animate() {
    var el = this;
    var currentTop;
    var currentLeft;
    var maxTop;
    var maxLeft;
    var newTop;
    var newLeft;
    var scrollTop; // eslint-disable-line

    var scrollLeft; // eslint-disable-line

    var animateTop = top > 0 || top === 0;
    var animateLeft = left > 0 || left === 0;

    if (typeof easing === 'undefined') {
      easing = 'swing';
    }

    if (animateTop) {
      currentTop = el.scrollTop;

      if (!duration) {
        el.scrollTop = top;
      }
    }

    if (animateLeft) {
      currentLeft = el.scrollLeft;

      if (!duration) {
        el.scrollLeft = left;
      }
    }

    if (!duration) return;

    if (animateTop) {
      maxTop = el.scrollHeight - el.offsetHeight;
      newTop = Math.max(Math.min(top, maxTop), 0);
    }

    if (animateLeft) {
      maxLeft = el.scrollWidth - el.offsetWidth;
      newLeft = Math.max(Math.min(left, maxLeft), 0);
    }

    var startTime = null;
    if (animateTop && newTop === currentTop) animateTop = false;
    if (animateLeft && newLeft === currentLeft) animateLeft = false;

    function render(time) {
      if (time === void 0) {
        time = new Date().getTime();
      }

      if (startTime === null) {
        startTime = time;
      }

      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
      var done;
      if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
      if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

      if (animateTop && newTop > currentTop && scrollTop >= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateTop && newTop < currentTop && scrollTop <= newTop) {
        el.scrollTop = newTop;
        done = true;
      }

      if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
        el.scrollLeft = newLeft;
        done = true;
      }

      if (done) {
        if (callback) callback();
        return;
      }

      if (animateTop) el.scrollTop = scrollTop;
      if (animateLeft) el.scrollLeft = scrollLeft;
      window.requestAnimationFrame(render);
    }

    window.requestAnimationFrame(render);
  });
} // scrollTop(top, duration, easing, callback) {


function scrollTop() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var top = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    top = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof top === 'undefined') {
    if (dom.length > 0) return dom[0].scrollTop;
    return null;
  }

  return dom.scrollTo(undefined, top, duration, easing, callback);
}

function scrollLeft() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var left = args[0],
      duration = args[1],
      easing = args[2],
      callback = args[3];

  if (args.length === 3 && typeof easing === 'function') {
    left = args[0];
    duration = args[1];
    callback = args[2];
    easing = args[3];
  }

  var dom = this;

  if (typeof left === 'undefined') {
    if (dom.length > 0) return dom[0].scrollLeft;
    return null;
  }

  return dom.scrollTo(left, undefined, duration, easing, callback);
}

function animate(initialProps, initialParams) {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var els = this;
  var a = {
    props: Object.assign({}, initialProps),
    params: Object.assign({
      duration: 300,
      easing: 'swing' // or 'linear'

      /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

    }, initialParams),
    elements: els,
    animating: false,
    que: [],
    easingProgress: function easingProgress(easing, progress) {
      if (easing === 'swing') {
        return 0.5 - Math.cos(progress * Math.PI) / 2;
      }

      if (typeof easing === 'function') {
        return easing(progress);
      }

      return progress;
    },
    stop: function stop() {
      if (a.frameId) {
        window.cancelAnimationFrame(a.frameId);
      }

      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      a.que = [];
    },
    done: function done(complete) {
      a.animating = false;
      a.elements.each(function (el) {
        var element = el;
        delete element.dom7AnimateInstance;
      });
      if (complete) complete(els);

      if (a.que.length > 0) {
        var que = a.que.shift();
        a.animate(que[0], que[1]);
      }
    },
    animate: function animate(props, params) {
      if (a.animating) {
        a.que.push([props, params]);
        return a;
      }

      var elements = []; // Define & Cache Initials & Units

      a.elements.each(function (el, index) {
        var initialFullValue;
        var initialValue;
        var unit;
        var finalValue;
        var finalFullValue;
        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
        elements[index] = {
          container: el
        };
        Object.keys(props).forEach(function (prop) {
          initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
          initialValue = parseFloat(initialFullValue);
          unit = initialFullValue.replace(initialValue, '');
          finalValue = parseFloat(props[prop]);
          finalFullValue = props[prop] + unit;
          elements[index][prop] = {
            initialFullValue: initialFullValue,
            initialValue: initialValue,
            unit: unit,
            finalValue: finalValue,
            finalFullValue: finalFullValue,
            currentValue: initialValue
          };
        });
      });
      var startTime = null;
      var time;
      var elementsDone = 0;
      var propsDone = 0;
      var done;
      var began = false;
      a.animating = true;

      function render() {
        time = new Date().getTime();
        var progress;
        var easeProgress; // let el;

        if (!began) {
          began = true;
          if (params.begin) params.begin(els);
        }

        if (startTime === null) {
          startTime = time;
        }

        if (params.progress) {
          // eslint-disable-next-line
          params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
        }

        elements.forEach(function (element) {
          var el = element;
          if (done || el.done) return;
          Object.keys(props).forEach(function (prop) {
            if (done || el.done) return;
            progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
            easeProgress = a.easingProgress(params.easing, progress);
            var _el$prop = el[prop],
                initialValue = _el$prop.initialValue,
                finalValue = _el$prop.finalValue,
                unit = _el$prop.unit;
            el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
            var currentValue = el[prop].currentValue;

            if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
              el.container.style[prop] = finalValue + unit;
              propsDone += 1;

              if (propsDone === Object.keys(props).length) {
                el.done = true;
                elementsDone += 1;
              }

              if (elementsDone === elements.length) {
                done = true;
              }
            }

            if (done) {
              a.done(params.complete);
              return;
            }

            el.container.style[prop] = currentValue + unit;
          });
        });
        if (done) return; // Then call

        a.frameId = window.requestAnimationFrame(render);
      }

      a.frameId = window.requestAnimationFrame(render);
      return a;
    }
  };

  if (a.elements.length === 0) {
    return els;
  }

  var animateInstance;

  for (var i = 0; i < a.elements.length; i += 1) {
    if (a.elements[i].dom7AnimateInstance) {
      animateInstance = a.elements[i].dom7AnimateInstance;
    } else a.elements[i].dom7AnimateInstance = a;
  }

  if (!animateInstance) {
    animateInstance = a;
  }

  if (initialProps === 'stop') {
    animateInstance.stop();
  } else {
    animateInstance.animate(a.props, a.params);
  }

  return els;
}

function stop() {
  var els = this;

  for (var i = 0; i < els.length; i += 1) {
    if (els[i].dom7AnimateInstance) {
      els[i].dom7AnimateInstance.stop();
    }
  }
}

var noTrigger = 'resize scroll'.split(' ');

function shortcut(name) {
  function eventHandler() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'undefined') {
      for (var i = 0; i < this.length; i += 1) {
        if (noTrigger.indexOf(name) < 0) {
          if (name in this[i]) this[i][name]();else {
            $(this[i]).trigger(name);
          }
        }
      }

      return this;
    }

    return this.on.apply(this, [name].concat(args));
  }

  return eventHandler;
}

var click = shortcut('click');
var blur = shortcut('blur');
var focus = shortcut('focus');
var focusin = shortcut('focusin');
var focusout = shortcut('focusout');
var keyup = shortcut('keyup');
var keydown = shortcut('keydown');
var keypress = shortcut('keypress');
var submit = shortcut('submit');
var change = shortcut('change');
var mousedown = shortcut('mousedown');
var mousemove = shortcut('mousemove');
var mouseup = shortcut('mouseup');
var mouseenter = shortcut('mouseenter');
var mouseleave = shortcut('mouseleave');
var mouseout = shortcut('mouseout');
var mouseover = shortcut('mouseover');
var touchstart = shortcut('touchstart');
var touchend = shortcut('touchend');
var touchmove = shortcut('touchmove');
var resize = shortcut('resize');
var scroll = shortcut('scroll');

/* harmony default export */ __webpack_exports__["default"] = ($);



/***/ }),

/***/ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js":
/*!**********************************************************************!*\
  !*** ./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js ***!
  \**********************************************************************/
/*! exports provided: _, a, b, c, d, e, f, g, h, i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _objectWithoutProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _typeof; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _inherits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _createSuper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _slicedToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _getPrototypeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _set; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    };
  }

  return _get.apply(this, arguments);
}

function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = _superPropBase(target, property);

      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        _defineProperty(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}




/***/ }),

/***/ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js":
/*!******************************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-contenteditable-mask-element.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTMLContenteditableMaskElement; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");





var HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["d"])(HTMLContenteditableMaskElement, _HTMLMaskElement);

  var _super = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["e"])(HTMLContenteditableMaskElement);

  function HTMLContenteditableMaskElement() {
    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, HTMLContenteditableMaskElement);

    return _super.apply(this, arguments);
  }

  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(HTMLContenteditableMaskElement, [{
    key: "_unsafeSelectionStart",
    get:
    /**
      Returns HTMLElement selection start
      @override
    */
    function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      var anchorOffset = selection && selection.anchorOffset;
      var focusOffset = selection && selection.focusOffset;

      if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
        return anchorOffset;
      }

      return focusOffset;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();
      var anchorOffset = selection && selection.anchorOffset;
      var focusOffset = selection && selection.focusOffset;

      if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
        return anchorOffset;
      }

      return focusOffset;
    }
    /**
      Sets HTMLElement selection
      @override
    */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      if (!this.rootElement.createRange) return;
      var range = this.rootElement.createRange();
      range.setStart(this.input.firstChild || this.input, start);
      range.setEnd(this.input.lastChild || this.input, end);
      var root = this.rootElement;
      var selection = root.getSelection && root.getSelection();

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // $FlowFixMe
      return this.input.textContent;
    },
    set: function set(value) {
      this.input.textContent = value;
    }
  }]);

  return HTMLContenteditableMaskElement;
}(_html_mask_element_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/controls/html-mask-element.js":
/*!**************************************************************!*\
  !*** ./node_modules/imask/esm/controls/html-mask-element.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTMLMaskElement; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");




/** Bridge between HTMLElement and {@link Masked} */

var HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["d"])(HTMLMaskElement, _MaskElement);

  var _super = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["e"])(HTMLMaskElement);

  /** Mapping between HTMLElement events and mask internal events */

  /** HTMLElement to use mask on */

  /**
    @param {HTMLInputElement|HTMLTextAreaElement} input
  */
  function HTMLMaskElement(input) {
    var _this;

    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, HTMLMaskElement);

    _this = _super.call(this);
    _this.input = input;
    _this._handlers = {};
    return _this;
  }
  /** */
  // $FlowFixMe https://github.com/facebook/flow/issues/2839


  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(HTMLMaskElement, [{
    key: "rootElement",
    get: function get() {
      var _this$input$getRootNo, _this$input$getRootNo2, _this$input;

      return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
    }
    /**
      Is element in focus
      @readonly
    */

  }, {
    key: "isActive",
    get: function get() {
      //$FlowFixMe
      return this.input === this.rootElement.activeElement;
    }
    /**
      Returns HTMLElement selection start
      @override
    */

  }, {
    key: "_unsafeSelectionStart",
    get: function get() {
      return this.input.selectionStart;
    }
    /**
      Returns HTMLElement selection end
      @override
    */

  }, {
    key: "_unsafeSelectionEnd",
    get: function get() {
      return this.input.selectionEnd;
    }
    /**
      Sets HTMLElement selection
      @override
    */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }
    /**
      HTMLElement value
      @override
    */

  }, {
    key: "value",
    get: function get() {
      return this.input.value;
    },
    set: function set(value) {
      this.input.value = value;
    }
    /**
      Binds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {
      var _this2 = this;

      Object.keys(handlers).forEach(function (event) {
        return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
      });
    }
    /**
      Unbinds HTMLElement events to mask internal events
      @override
    */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      var _this3 = this;

      Object.keys(this._handlers).forEach(function (event) {
        return _this3._toggleEventHandler(event);
      });
    }
    /** */

  }, {
    key: "_toggleEventHandler",
    value: function _toggleEventHandler(event, handler) {
      if (this._handlers[event]) {
        this.input.removeEventListener(event, this._handlers[event]);
        delete this._handlers[event];
      }

      if (handler) {
        this.input.addEventListener(event, handler);
        this._handlers[event] = handler;
      }
    }
  }]);

  return HTMLMaskElement;
}(_mask_element_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
HTMLMaskElement.EVENTS_MAP = {
  selectionChange: 'keydown',
  input: 'input',
  drop: 'drop',
  click: 'click',
  focus: 'focus',
  commit: 'blur'
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].HTMLMaskElement = HTMLMaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/controls/input.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/controls/input.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputMask; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../masked/date.js */ "./node_modules/imask/esm/masked/date.js");
/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _mask_element_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony import */ var _html_mask_element_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony import */ var _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../masked/pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../masked/base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../masked/pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../masked/pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../masked/pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../masked/regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../masked/range.js */ "./node_modules/imask/esm/masked/range.js");



















var _excluded = ["mask"];
/** Listens to element events and controls changes between element and {@link Masked} */

var InputMask = /*#__PURE__*/function () {
  /**
    View element
    @readonly
  */

  /**
    Internal {@link Masked} model
    @readonly
  */

  /**
    @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
    @param {Object} opts
  */
  function InputMask(el, opts) {
    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, InputMask);

    this.el = el instanceof _mask_element_js__WEBPACK_IMPORTED_MODULE_5__["default"] ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new _html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_7__["default"](el) : new _html_mask_element_js__WEBPACK_IMPORTED_MODULE_6__["default"](el);
    this.masked = Object(_masked_factory_js__WEBPACK_IMPORTED_MODULE_4__["default"])(opts);
    this._listeners = {};
    this._value = '';
    this._unmaskedValue = '';
    this._saveSelection = this._saveSelection.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onDrop = this._onDrop.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onClick = this._onClick.bind(this);
    this.alignCursor = this.alignCursor.bind(this);
    this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

    this._bindEvents(); // refresh


    this.updateValue();

    this._onChange();
  }
  /** Read or update mask */


  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(InputMask, [{
    key: "mask",
    get: function get() {
      return this.masked.mask;
    },
    set: function set(mask) {
      if (this.maskEquals(mask)) return; // $FlowFixMe No ideas ... after update

      if (!(mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_8__["default"].Masked) && this.masked.constructor === Object(_masked_factory_js__WEBPACK_IMPORTED_MODULE_4__["maskedClass"])(mask)) {
        this.masked.updateOptions({
          mask: mask
        });
        return;
      }

      var masked = Object(_masked_factory_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
        mask: mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }
    /** Raw value */

  }, {
    key: "maskEquals",
    value: function maskEquals(mask) {
      return mask == null || mask === this.masked.mask || mask === Date && this.masked instanceof _masked_date_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(str) {
      this.masked.value = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Unmasked value */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._unmaskedValue;
    },
    set: function set(str) {
      this.masked.unmaskedValue = str;
      this.updateControl();
      this.alignCursor();
    }
    /** Typed unmasked value */

  }, {
    key: "typedValue",
    get: function get() {
      return this.masked.typedValue;
    },
    set: function set(val) {
      this.masked.typedValue = val;
      this.updateControl();
      this.alignCursor();
    }
    /**
      Starts listening to element events
      @protected
    */

  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this._onClick,
        focus: this._onFocus,
        commit: this._onChange
      });
    }
    /**
      Stops listening to element events
      @protected
     */

  }, {
    key: "_unbindEvents",
    value: function _unbindEvents() {
      if (this.el) this.el.unbindEvents();
    }
    /**
      Fires custom event
      @protected
     */

  }, {
    key: "_fireEvent",
    value: function _fireEvent(ev) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var listeners = this._listeners[ev];
      if (!listeners) return;
      listeners.forEach(function (l) {
        return l.apply(void 0, args);
      });
    }
    /**
      Current selection start
      @readonly
    */

  }, {
    key: "selectionStart",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
    /** Current cursor position */

  }, {
    key: "cursorPos",
    get: function get() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    },
    set: function set(pos) {
      if (!this.el || !this.el.isActive) return;
      this.el.select(pos, pos);

      this._saveSelection();
    }
    /**
      Stores current selection
      @protected
    */

  }, {
    key: "_saveSelection",
    value: function
      /* ev */
    _saveSelection() {
      if (this.value !== this.el.value) {
        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
      }

      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }
    /** Syncronizes model value from view */

  }, {
    key: "updateValue",
    value: function updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
    }
    /** Syncronizes view from model value, fires change events */

  }, {
    key: "updateControl",
    value: function updateControl() {
      var newUnmaskedValue = this.masked.unmaskedValue;
      var newValue = this.masked.value;
      var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      if (this.el.value !== newValue) this.el.value = newValue;
      if (isChanged) this._fireChangeEvents();
    }
    /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

  }, {
    key: "updateOptions",
    value: function updateOptions(opts) {
      var mask = opts.mask,
          restOpts = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["b"])(opts, _excluded);

      var updateMask = !this.maskEquals(mask);
      var updateOpts = !Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["objectIncludes"])(this.masked, restOpts);
      if (updateMask) this.mask = mask;
      if (updateOpts) this.masked.updateOptions(restOpts);
      if (updateMask || updateOpts) this.updateControl();
    }
    /** Updates cursor */

  }, {
    key: "updateCursor",
    value: function updateCursor(cursorPos) {
      if (cursorPos == null) return;
      this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

      this._delayUpdateCursor(cursorPos);
    }
    /**
      Delays cursor update to support mobile browsers
      @private
    */

  }, {
    key: "_delayUpdateCursor",
    value: function _delayUpdateCursor(cursorPos) {
      var _this = this;

      this._abortUpdateCursor();

      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(function () {
        if (!_this.el) return; // if was destroyed

        _this.cursorPos = _this._changingCursorPos;

        _this._abortUpdateCursor();
      }, 10);
    }
    /**
      Fires custom events
      @protected
    */

  }, {
    key: "_fireChangeEvents",
    value: function _fireChangeEvents() {
      this._fireEvent('accept', this._inputEvent);

      if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
    }
    /**
      Aborts delayed cursor update
      @private
    */

  }, {
    key: "_abortUpdateCursor",
    value: function _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }
    /** Aligns cursor to nearest available position */

  }, {
    key: "alignCursor",
    value: function alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.cursorPos, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT);
    }
    /** Aligns cursor only if selection is empty */

  }, {
    key: "alignCursorFriendly",
    value: function alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

      this.alignCursor();
    }
    /** Adds listener on custom event */

  }, {
    key: "on",
    value: function on(ev, handler) {
      if (!this._listeners[ev]) this._listeners[ev] = [];

      this._listeners[ev].push(handler);

      return this;
    }
    /** Removes custom event listener */

  }, {
    key: "off",
    value: function off(ev, handler) {
      if (!this._listeners[ev]) return this;

      if (!handler) {
        delete this._listeners[ev];
        return this;
      }

      var hIndex = this._listeners[ev].indexOf(handler);

      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
      return this;
    }
    /** Handles view input event */

  }, {
    key: "_onInput",
    value: function _onInput(e) {
      this._inputEvent = e;

      this._abortUpdateCursor(); // fix strange IE behavior


      if (!this._selection) return this.updateValue();
      var details = new _core_action_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]( // new state
      this.el.value, this.cursorPos, // old state
      this.value, this._selection);
      var oldRawValue = this.masked.rawInputValue;
      var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

      var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE;
      var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      this.updateControl();
      this.updateCursor(cursorPos);
      delete this._inputEvent;
    }
    /** Handles view change event and commits model value */

  }, {
    key: "_onChange",
    value: function _onChange() {
      if (this.value !== this.el.value) {
        this.updateValue();
      }

      this.masked.doCommit();
      this.updateControl();

      this._saveSelection();
    }
    /** Handles view drop event, prevents by default */

  }, {
    key: "_onDrop",
    value: function _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onFocus",
    value: function _onFocus(ev) {
      this.alignCursorFriendly();
    }
    /** Restore last selection on focus */

  }, {
    key: "_onClick",
    value: function _onClick(ev) {
      this.alignCursorFriendly();
    }
    /** Unbind view events and removes element reference */

  }, {
    key: "destroy",
    value: function destroy() {
      this._unbindEvents(); // $FlowFixMe why not do so?


      this._listeners.length = 0; // $FlowFixMe

      delete this.el;
    }
  }]);

  return InputMask;
}();
_core_holder_js__WEBPACK_IMPORTED_MODULE_8__["default"].InputMask = InputMask;




/***/ }),

/***/ "./node_modules/imask/esm/controls/mask-element.js":
/*!*********************************************************!*\
  !*** ./node_modules/imask/esm/controls/mask-element.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskElement; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");



/**
  Generic element API to use with mask
  @interface
*/
var MaskElement = /*#__PURE__*/function () {
  function MaskElement() {
    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskElement);
  }

  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskElement, [{
    key: "selectionStart",
    get:
    /** */

    /** */

    /** */

    /** Safely returns selection start */
    function get() {
      var start;

      try {
        start = this._unsafeSelectionStart;
      } catch (e) {}

      return start != null ? start : this.value.length;
    }
    /** Safely returns selection end */

  }, {
    key: "selectionEnd",
    get: function get() {
      var end;

      try {
        end = this._unsafeSelectionEnd;
      } catch (e) {}

      return end != null ? end : this.value.length;
    }
    /** Safely sets element selection */

  }, {
    key: "select",
    value: function select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

      try {
        this._unsafeSelect(start, end);
      } catch (e) {}
    }
    /** Should be overriden in subclasses */

  }, {
    key: "_unsafeSelect",
    value: function _unsafeSelect(start, end) {}
    /** Should be overriden in subclasses */

  }, {
    key: "isActive",
    get: function get() {
      return false;
    }
    /** Should be overriden in subclasses */

  }, {
    key: "bindEvents",
    value: function bindEvents(handlers) {}
    /** Should be overriden in subclasses */

  }, {
    key: "unbindEvents",
    value: function unbindEvents() {}
  }]);

  return MaskElement;
}();
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskElement = MaskElement;




/***/ }),

/***/ "./node_modules/imask/esm/core/action-details.js":
/*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/action-details.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionDetails; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-details.js */ "./node_modules/imask/esm/core/change-details.js");




/** Provides details of changing input */

var ActionDetails = /*#__PURE__*/function () {
  /** Current input value */

  /** Current cursor position */

  /** Old input value */

  /** Old selection */
  function ActionDetails(value, cursorPos, oldValue, oldSelection) {
    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, ActionDetails);

    this.value = value;
    this.cursorPos = cursorPos;
    this.oldValue = oldValue;
    this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

    while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
      --this.oldSelection.start;
    }
  }
  /**
    Start changing position
    @readonly
  */


  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(ActionDetails, [{
    key: "startChangePos",
    get: function get() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }
    /**
      Inserted symbols count
      @readonly
    */

  }, {
    key: "insertedCount",
    get: function get() {
      return this.cursorPos - this.startChangePos;
    }
    /**
      Inserted symbols
      @readonly
    */

  }, {
    key: "inserted",
    get: function get() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }
    /**
      Removed symbols count
      @readonly
    */

  }, {
    key: "removedCount",
    get: function get() {
      // Math.max for opposite operation
      return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
      this.oldValue.length - this.value.length, 0);
    }
    /**
      Removed symbols
      @readonly
    */

  }, {
    key: "removed",
    get: function get() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
    /**
      Unchanged head symbols
      @readonly
    */

  }, {
    key: "head",
    get: function get() {
      return this.value.substring(0, this.startChangePos);
    }
    /**
      Unchanged tail symbols
      @readonly
    */

  }, {
    key: "tail",
    get: function get() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }
    /**
      Remove direction
      @readonly
    */

  }, {
    key: "removeDirection",
    get: function get() {
      if (!this.removedCount || this.insertedCount) return _utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE; // align right if delete at right or if range removed (event with backspace)

      return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? _utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].RIGHT : _utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT;
    }
  }]);

  return ActionDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/core/change-details.js":
/*!*******************************************************!*\
  !*** ./node_modules/imask/esm/core/change-details.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangeDetails; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");


/**
  Provides details of changing model value
  @param {Object} [details]
  @param {string} [details.inserted] - Inserted symbols
  @param {boolean} [details.skip] - Can skip chars
  @param {number} [details.removeCount] - Removed symbols count
  @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
*/
var ChangeDetails = /*#__PURE__*/function () {
  /** Inserted symbols */

  /** Can skip chars */

  /** Additional offset if any changes occurred before tail */

  /** Raw inserted is used by dynamic mask */
  function ChangeDetails(details) {
    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, ChangeDetails);

    Object.assign(this, {
      inserted: '',
      rawInserted: '',
      skip: false,
      tailShift: 0
    }, details);
  }
  /**
    Aggregate changes
    @returns {ChangeDetails} `this`
  */


  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(ChangeDetails, [{
    key: "aggregate",
    value: function aggregate(details) {
      this.rawInserted += details.rawInserted;
      this.skip = this.skip || details.skip;
      this.inserted += details.inserted;
      this.tailShift += details.tailShift;
      return this;
    }
    /** Total offset considering all changes */

  }, {
    key: "offset",
    get: function get() {
      return this.tailShift + this.inserted.length;
    }
  }]);

  return ChangeDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/core/continuous-tail-details.js":
/*!****************************************************************!*\
  !*** ./node_modules/imask/esm/core/continuous-tail-details.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContinuousTailDetails; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");


/** Provides details of continuous extracted tail */
var ContinuousTailDetails = /*#__PURE__*/function () {
  /** Tail value as string */

  /** Tail start position */

  /** Start position */
  function ContinuousTailDetails() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var stop = arguments.length > 2 ? arguments[2] : undefined;

    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, ContinuousTailDetails);

    this.value = value;
    this.from = from;
    this.stop = stop;
  }

  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(ContinuousTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "extend",
    value: function extend(tail) {
      this.value += String(tail);
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
  }, {
    key: "state",
    get: function get() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }, {
    key: "unshift",
    value: function unshift(beforePos) {
      if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
      var shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
  }]);

  return ContinuousTailDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/core/holder.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/core/holder.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IMask; });
/**
 * Applies mask on element.
 * @constructor
 * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
 * @param {Object} opts - Custom mask options
 * @return {InputMask}
 */
function IMask(el) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // currently available only for input-like elements
  return new IMask.InputMask(el, opts);
}




/***/ }),

/***/ "./node_modules/imask/esm/core/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/imask/esm/core/utils.js ***!
  \**********************************************/
/*! exports provided: DIRECTION, escapeRegExp, forceDirection, indexInDirection, isString, normalizePrepare, objectIncludes, posInDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIRECTION", function() { return DIRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegExp", function() { return escapeRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceDirection", function() { return forceDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexInDirection", function() { return indexInDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizePrepare", function() { return normalizePrepare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectIncludes", function() { return objectIncludes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posInDirection", function() { return posInDirection; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-details.js */ "./node_modules/imask/esm/core/change-details.js");



/** Checks if value is string */

function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
  Direction
  @prop {string} NONE
  @prop {string} LEFT
  @prop {string} FORCE_LEFT
  @prop {string} RIGHT
  @prop {string} FORCE_RIGHT
*/

var DIRECTION = {
  NONE: 'NONE',
  LEFT: 'LEFT',
  FORCE_LEFT: 'FORCE_LEFT',
  RIGHT: 'RIGHT',
  FORCE_RIGHT: 'FORCE_RIGHT'
};
/**
  Direction
  @enum {string}
*/

/** Returns next char index in direction */
function indexInDirection(pos, direction) {
  if (direction === DIRECTION.LEFT) --pos;
  return pos;
}
/** Returns next char position in direction */

function posInDirection(pos, direction) {
  switch (direction) {
    case DIRECTION.LEFT:
    case DIRECTION.FORCE_LEFT:
      return --pos;

    case DIRECTION.RIGHT:
    case DIRECTION.FORCE_RIGHT:
      return ++pos;

    default:
      return pos;
  }
}
/** */

function forceDirection(direction) {
  switch (direction) {
    case DIRECTION.LEFT:
      return DIRECTION.FORCE_LEFT;

    case DIRECTION.RIGHT:
      return DIRECTION.FORCE_RIGHT;

    default:
      return direction;
  }
}
/** Escapes regular expression control chars */

function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}
function normalizePrepare(prep) {
  return Array.isArray(prep) ? prep : [prep, new _change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]()];
} // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

function objectIncludes(b, a) {
  if (a === b) return true;
  var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i;

  if (arrA && arrB) {
    if (a.length != b.length) return false;

    for (i = 0; i < a.length; i++) {
      if (!objectIncludes(a[i], b[i])) return false;
    }

    return true;
  }

  if (arrA != arrB) return false;

  if (a && b && Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["c"])(a) === 'object' && Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["c"])(b) === 'object') {
    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;
    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;
    var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

    for (i = 0; i < keys.length; i++) {
      // $FlowFixMe ... ???
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    }

    for (i = 0; i < keys.length; i++) {
      if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
    }

    return true;
  } else if (a && b && typeof a === 'function' && typeof b === 'function') {
    return a.toString() === b.toString();
  }

  return false;
}
/** Selection range */




/***/ }),

/***/ "./node_modules/imask/esm/index.js":
/*!*****************************************!*\
  !*** ./node_modules/imask/esm/index.js ***!
  \*****************************************/
/*! exports provided: InputMask, default, Masked, MaskedPattern, MaskedEnum, MaskedRange, MaskedNumber, MaskedDate, MaskedRegExp, MaskedFunction, MaskedDynamic, createMask, MaskElement, HTMLMaskElement, HTMLContenteditableMaskElement, PIPE_TYPE, createPipe, pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controls_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/input.js */ "./node_modules/imask/esm/controls/input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputMask", function() { return _controls_input_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _masked_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./masked/base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Masked", function() { return _masked_base_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _masked_pattern_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./masked/pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedPattern", function() { return _masked_pattern_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _masked_enum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./masked/enum.js */ "./node_modules/imask/esm/masked/enum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedEnum", function() { return _masked_enum_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _masked_range_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./masked/range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedRange", function() { return _masked_range_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _masked_number_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./masked/number.js */ "./node_modules/imask/esm/masked/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedNumber", function() { return _masked_number_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _masked_date_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./masked/date.js */ "./node_modules/imask/esm/masked/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedDate", function() { return _masked_date_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _masked_regexp_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./masked/regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedRegExp", function() { return _masked_regexp_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _masked_function_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./masked/function.js */ "./node_modules/imask/esm/masked/function.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedFunction", function() { return _masked_function_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./masked/dynamic.js */ "./node_modules/imask/esm/masked/dynamic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskedDynamic", function() { return _masked_dynamic_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _masked_factory_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./masked/factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMask", function() { return _masked_factory_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controls/mask-element.js */ "./node_modules/imask/esm/controls/mask-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaskElement", function() { return _controls_mask_element_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controls/html-mask-element.js */ "./node_modules/imask/esm/controls/html-mask-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLMaskElement", function() { return _controls_html_mask_element_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controls/html-contenteditable-mask-element.js */ "./node_modules/imask/esm/controls/html-contenteditable-mask-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLContenteditableMaskElement", function() { return _controls_html_contenteditable_mask_element_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./masked/pipe.js */ "./node_modules/imask/esm/masked/pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PIPE_TYPE", function() { return _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__["PIPE_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPipe", function() { return _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__["createPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _masked_pipe_js__WEBPACK_IMPORTED_MODULE_15__["pipe"]; });

/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_action_details_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/action-details.js */ "./node_modules/imask/esm/core/action-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _masked_pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./masked/pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _masked_pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./masked/pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _masked_pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./masked/pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");


























try {
  globalThis.IMask = _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"];
} catch (e) {}


/***/ }),

/***/ "./node_modules/imask/esm/masked/base.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/base.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Masked; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");






/** Supported mask type */

/** Provides common masking stuff */
var Masked = /*#__PURE__*/function () {
  // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

  /** @type {Mask} */

  /** */
  // $FlowFixMe no ideas

  /** Transforms value before mask processing */

  /** Validates if value is acceptable */

  /** Does additional processing in the end of editing */

  /** Format typed value to string */

  /** Parse strgin to get typed value */

  /** Enable characters overwriting */

  /** */

  /** */
  function Masked(opts) {
    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, Masked);

    this._value = '';

    this._update(Object.assign({}, Masked.DEFAULTS, opts));

    this.isInitialized = true;
  }
  /** Sets and applies new options */


  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(Masked, [{
    key: "updateOptions",
    value: function updateOptions(opts) {
      if (!Object.keys(opts).length) return; // $FlowFixMe

      this.withValueRefresh(this._update.bind(this, opts));
    }
    /**
      Sets new options
      @protected
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      Object.assign(this, opts);
    }
    /** Mask state */

  }, {
    key: "state",
    get: function get() {
      return {
        _value: this.value
      };
    },
    set: function set(state) {
      this._value = state._value;
    }
    /** Resets value */

  }, {
    key: "reset",
    value: function reset() {
      this._value = '';
    }
    /** */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      this.resolve(value);
    }
    /** Resolve new value */

  }, {
    key: "resolve",
    value: function resolve(value) {
      this.reset();
      this.append(value, {
        input: true
      }, '');
      this.doCommit();
      return this.value;
    }
    /** */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.value;
    },
    set: function set(value) {
      this.reset();
      this.append(value, {}, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "typedValue",
    get: function get() {
      return this.doParse(this.value);
    },
    set: function set(value) {
      this.value = this.doFormat(value);
    }
    /** Value that includes raw user input */

  }, {
    key: "rawInputValue",
    get: function get() {
      return this.extractInput(0, this.value.length, {
        raw: true
      });
    },
    set: function set(value) {
      this.reset();
      this.append(value, {
        raw: true
      }, '');
      this.doCommit();
    }
    /** */

  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
    /** */

  }, {
    key: "isFilled",
    get: function get() {
      return this.isComplete;
    }
    /** Finds nearest input position in direction */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
    /** Extracts value in range considering flags */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return this.value.slice(fromPos, toPos);
    }
    /** Extracts tail in range */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.extractInput(fromPos, toPos), fromPos);
    }
    /** Appends tail */
    // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](String(tail));
      return tail.appendTo(this);
    }
    /** Appends char */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      if (!ch) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this._value += ch;
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        inserted: ch,
        rawInserted: ch
      });
    }
    /** Appends char */

  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var checkTail = arguments.length > 2 ? arguments[2] : undefined;
      var consistentState = this.state;
      var details;

      var _normalizePrepare = Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_3__["normalizePrepare"])(this.doPrepare(ch, flags));

      var _normalizePrepare2 = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_normalizePrepare, 2);

      ch = _normalizePrepare2[0];
      details = _normalizePrepare2[1];
      details = details.aggregate(this._appendCharRaw(ch, flags));

      if (details.inserted) {
        var consistentTail;
        var appended = this.doValidate(flags) !== false;

        if (appended && checkTail != null) {
          // validation ok, check tail
          var beforeTailState = this.state;

          if (this.overwrite) {
            consistentTail = checkTail.state;
            checkTail.unshift(this.value.length);
          }

          var tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString(); // if ok, rollback state after tail

          if (appended && tailDetails.inserted) this.state = beforeTailState;
        } // revert all if something went wrong


        if (!appended) {
          details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
          this.state = consistentState;
          if (checkTail && consistentTail) checkTail.state = consistentTail;
        }
      }

      return details;
    }
    /** Appends optional placeholder at end */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    /** Appends optional eager placeholder at end */

  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    /** Appends symbols considering flags */
    // $FlowFixMe no ideas

  }, {
    key: "append",
    value: function append(str, flags, tail) {
      if (!Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(str)) throw new Error('value should be string');
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var checkTail = Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_3__["isString"])(tail) ? new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_2__["default"](String(tail)) : tail;
      if (flags && flags.tail) flags._beforeTailState = this.state;

      for (var ci = 0; ci < str.length; ++ci) {
        details.aggregate(this._appendChar(str[ci], flags, checkTail));
      } // append tail but aggregate only tailShift


      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
        // this._resetBeforeTailState();
      }

      if (this.eager && flags !== null && flags !== void 0 && flags.input && str) {
        details.aggregate(this._appendEager());
      }

      return details;
    }
    /** */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    /** Calls function and reapplies current value */

  }, {
    key: "withValueRefresh",
    value: function withValueRefresh(fn) {
      if (this._refreshing || !this.isInitialized) return fn();
      this._refreshing = true;
      var rawInput = this.rawInputValue;
      var value = this.value;
      var ret = fn();
      this.rawInputValue = rawInput; // append lost trailing chars at end

      if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
        this.append(value.slice(this.value.length), {}, '');
      }

      delete this._refreshing;
      return ret;
    }
    /** */

  }, {
    key: "runIsolated",
    value: function runIsolated(fn) {
      if (this._isolated || !this.isInitialized) return fn(this);
      this._isolated = true;
      var state = this.state;
      var ret = fn(this);
      this.state = state;
      delete this._isolated;
      return ret;
    }
    /**
      Prepares string before mask processing
      @protected
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.prepare ? this.prepare(str, this, flags) : str;
    }
    /**
      Validates if value is acceptable
      @protected
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
    /**
      Does additional processing in the end of editing
      @protected
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.commit) this.commit(this.value, this);
    }
    /** */

  }, {
    key: "doFormat",
    value: function doFormat(value) {
      return this.format ? this.format(value, this) : value;
    }
    /** */

  }, {
    key: "doParse",
    value: function doParse(str) {
      return this.parse ? this.parse(str, this) : str;
    }
    /** */

  }, {
    key: "splice",
    value: function splice(start, deleteCount, inserted, removeDirection) {
      var tailPos = start + deleteCount;
      var tail = this.extractTail(tailPos);
      var oldRawValue;

      if (this.eager) {
        removeDirection = Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_3__["forceDirection"])(removeDirection);
        oldRawValue = this.extractInput(0, tailPos, {
          raw: true
        });
      }

      var startChangePos = this.nearestInputPos(start, removeDirection);
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
        tailShift: startChangePos - start // adjust tailShift if start was aligned

      }).aggregate(this.remove(startChangePos));

      if (this.eager && removeDirection !== _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].NONE && oldRawValue === this.rawInputValue) {
        if (removeDirection === _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].FORCE_LEFT) {
          var valLength;

          while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) {
            details.aggregate(new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
              tailShift: -1
            })).aggregate(this.remove(valLength - 1));
          }
        } else if (removeDirection === _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].FORCE_RIGHT) {
          tail.unshift();
        }
      }

      return details.aggregate(this.append(inserted, {
        input: true
      }, tail));
    }
  }]);

  return Masked;
}();
Masked.DEFAULTS = {
  format: function format(v) {
    return v;
  },
  parse: function parse(v) {
    return v;
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].Masked = Masked;




/***/ }),

/***/ "./node_modules/imask/esm/masked/date.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/date.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskedDate; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./range.js */ "./node_modules/imask/esm/masked/range.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");














/** Date mask */

var MaskedDate = /*#__PURE__*/function (_MaskedPattern) {
  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedDate, _MaskedPattern);

  var _super = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedDate);

  /** Pattern mask for date according to {@link MaskedDate#format} */

  /** Start date */

  /** End date */

  /** */

  /**
    @param {Object} opts
  */
  function MaskedDate(opts) {
    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedDate);

    return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
  }
  /**
    @override
  */


  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedDate, [{
    key: "_update",
    value: function _update(opts) {
      if (opts.mask === Date) delete opts.mask;
      if (opts.pattern) opts.mask = opts.pattern;
      var blocks = opts.blocks;
      opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

      if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
      if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
        opts.blocks.m.from = opts.min.getMonth() + 1;
        opts.blocks.m.to = opts.max.getMonth() + 1;

        if (opts.blocks.m.from === opts.blocks.m.to) {
          opts.blocks.d.from = opts.min.getDate();
          opts.blocks.d.to = opts.max.getDate();
        }
      }

      Object.assign(opts.blocks, blocks); // add autofix

      Object.keys(opts.blocks).forEach(function (bk) {
        var b = opts.blocks[bk];
        if (!('autofix' in b)) b.autofix = opts.autofix;
      });

      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDate.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var date = this.date;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
    /** Checks if date is exists */

  }, {
    key: "isDateExist",
    value: function isDateExist(str) {
      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }
    /** Parsed Date */

  }, {
    key: "date",
    get: function get() {
      return this.typedValue;
    },
    set: function set(date) {
      this.typedValue = date;
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.isComplete ? Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDate.prototype), "typedValue", this) : null;
    },
    set: function set(value) {
      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDate.prototype), "typedValue", value, this, true);
    }
  }]);

  return MaskedDate;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
MaskedDate.DEFAULTS = {
  pattern: 'd{.}`m{.}`Y',
  format: function format(date) {
    var day = String(date.getDate()).padStart(2, '0');
    var month = String(date.getMonth() + 1).padStart(2, '0');
    var year = date.getFullYear();
    return [day, month, year].join('.');
  },
  parse: function parse(str) {
    var _str$split = str.split('.'),
        _str$split2 = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_str$split, 3),
        day = _str$split2[0],
        month = _str$split2[1],
        year = _str$split2[2];

    return new Date(year, month - 1, day);
  }
};

MaskedDate.GET_DEFAULT_BLOCKS = function () {
  return {
    d: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: _range_js__WEBPACK_IMPORTED_MODULE_2__["default"],
      from: 1900,
      to: 9999
    }
  };
};

_core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].MaskedDate = MaskedDate;




/***/ }),

/***/ "./node_modules/imask/esm/masked/dynamic.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/dynamic.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskedDynamic; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");








var _excluded = ["compiledMasks", "currentMaskRef", "currentMask"];

/** Dynamic mask for choosing apropriate mask in run-time */
var MaskedDynamic = /*#__PURE__*/function (_Masked) {
  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedDynamic, _Masked);

  var _super = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedDynamic);

  /** Currently chosen mask */

  /** Compliled {@link Masked} options */

  /** Chooses {@link Masked} depending on input value */

  /**
    @param {Object} opts
  */
  function MaskedDynamic(opts) {
    var _this;

    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedDynamic);

    _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
    _this.currentMask = null;
    return _this;
  }
  /**
    @override
  */


  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedDynamic, [{
    key: "_update",
    value: function _update(opts) {
      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "_update", this).call(this, opts);

      if ('mask' in opts) {
        // mask could be totally dynamic with only `dispatch` option
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
          return Object(_factory_js__WEBPACK_IMPORTED_MODULE_2__["default"])(m);
        }) : [];
      }
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var details = this._applyDispatch(ch, flags);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendChar(ch, flags));
      }

      return details;
    }
  }, {
    key: "_applyDispatch",
    value: function _applyDispatch() {
      var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      var inputValue = this.rawInputValue;
      var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
      flags._beforeTailState._rawInputValue : inputValue;
      var tailValue = inputValue.slice(insertValue.length);
      var prevMask = this.currentMask;
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

      this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          // if mask changed reapply input
          this.currentMask.reset();

          if (insertValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            var d = this.currentMask.append(insertValue, {
              raw: true
            });
            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
          }

          if (tailValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else {
          // Dispatch can do something bad with state, so
          // restore prev mask state
          this.currentMask.state = prevMaskState;
        }
      }

      return details;
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = this._applyDispatch.apply(this, arguments);

      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "doDispatch",
    value: function doDispatch(appended) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.dispatch(appended, this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2, _this$currentMask;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_get2 = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      if (this.currentMask) this.currentMask.reset();
      this.compiledMasks.forEach(function (m) {
        return m.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      return this.currentMask ? this.currentMask.value : '';
    },
    set: function set(value) {
      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.unmaskedValue : '';
    },
    set: function set(unmaskedValue) {
      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return this.currentMask ? this.currentMask.typedValue : '';
    } // probably typedValue should not be used with dynamic
    ,
    set: function set(value) {
      var unmaskedValue = String(value); // double check it

      if (this.currentMask) {
        this.currentMask.typedValue = value;
        unmaskedValue = this.currentMask.unmaskedValue;
      }

      this.unmaskedValue = unmaskedValue;
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return !!this.currentMask && this.currentMask.isComplete;
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

      if (this.currentMask) {
        var _this$currentMask2;

        details.aggregate((_this$currentMask2 = this.currentMask).remove.apply(_this$currentMask2, arguments)) // update with dispatch
        .aggregate(this._applyDispatch());
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "state", this), {
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(function (m) {
          return m.state;
        }),
        currentMaskRef: this.currentMask,
        currentMask: this.currentMask && this.currentMask.state
      });
    },
    set: function set(state) {
      var compiledMasks = state.compiledMasks,
          currentMaskRef = state.currentMaskRef,
          currentMask = state.currentMask,
          maskedState = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["b"])(state, _excluded);

      this.compiledMasks.forEach(function (m, mi) {
        return m.state = compiledMasks[mi];
      });

      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }

      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "state", maskedState, this, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var _this$currentMask3;

      return this.currentMask ? (_this$currentMask3 = this.currentMask).extractInput.apply(_this$currentMask3, arguments) : '';
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$currentMask4, _get3;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.currentMask ? (_this$currentMask4 = this.currentMask).extractTail.apply(_this$currentMask4, args) : (_get3 = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.currentMask) this.currentMask.doCommit();

      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos() {
      var _this$currentMask5, _get4;

      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.currentMask ? (_this$currentMask5 = this.currentMask).nearestInputPos.apply(_this$currentMask5, args) : (_get4 = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
    }
  }, {
    key: "overwrite",
    get: function get() {
      return this.currentMask ? this.currentMask.overwrite : Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedDynamic.prototype), "overwrite", this);
    },
    set: function set(overwrite) {
      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    }
  }]);

  return MaskedDynamic;
}(_base_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
MaskedDynamic.DEFAULTS = {
  dispatch: function dispatch(appended, masked, flags) {
    if (!masked.compiledMasks.length) return;
    var inputValue = masked.rawInputValue; // simulate input

    var inputs = masked.compiledMasks.map(function (m, index) {
      m.reset();
      m.append(inputValue, {
        raw: true
      });
      m.append(appended, flags);
      var weight = m.rawInputValue.length;
      return {
        weight: weight,
        index: index
      };
    }); // pop masks with longer values first

    inputs.sort(function (i1, i2) {
      return i2.weight - i1.weight;
    });
    return masked.compiledMasks[inputs[0].index];
  }
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedDynamic = MaskedDynamic;




/***/ }),

/***/ "./node_modules/imask/esm/masked/enum.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/enum.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskedEnum; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");













/** Pattern which validates enum values */

var MaskedEnum = /*#__PURE__*/function (_MaskedPattern) {
  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedEnum, _MaskedPattern);

  var _super = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedEnum);

  function MaskedEnum() {
    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedEnum);

    return _super.apply(this, arguments);
  }

  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedEnum, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      // TODO type
      if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedEnum.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this = this,
          _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.enum.some(function (e) {
        return e.indexOf(_this.unmaskedValue) >= 0;
      }) && (_get2 = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedEnum;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedEnum = MaskedEnum;




/***/ }),

/***/ "./node_modules/imask/esm/masked/factory.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/factory.js ***!
  \**************************************************/
/*! exports provided: default, maskedClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskedClass", function() { return maskedClass; });
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");





/** Get Masked class by mask type */

function maskedClass(mask) {
  if (mask == null) {
    throw new Error('mask property should be defined');
  } // $FlowFixMe


  if (mask instanceof RegExp) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedRegExp; // $FlowFixMe

  if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_0__["isString"])(mask)) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedPattern; // $FlowFixMe

  if (mask instanceof Date || mask === Date) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedDate; // $FlowFixMe

  if (mask instanceof Number || typeof mask === 'number' || mask === Number) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedNumber; // $FlowFixMe

  if (Array.isArray(mask) || mask === Array) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedDynamic; // $FlowFixMe

  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && mask.prototype instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask; // $FlowFixMe

  if (mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask.constructor; // $FlowFixMe

  if (mask instanceof Function) return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].MaskedFunction;
  console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
  // $FlowFixMe

  return _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked;
}
/** Creates new {@link Masked} depending on mask type */

function createMask(opts) {
  // $FlowFixMe
  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && opts instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return opts;
  opts = Object.assign({}, opts);
  var mask = opts.mask; // $FlowFixMe

  if (_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked && mask instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].Masked) return mask;
  var MaskedClass = maskedClass(mask);
  if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
  return new MaskedClass(opts);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createMask = createMask;




/***/ }),

/***/ "./node_modules/imask/esm/masked/function.js":
/*!***************************************************!*\
  !*** ./node_modules/imask/esm/masked/function.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskedFunction; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");







/** Masking by custom Function */

var MaskedFunction = /*#__PURE__*/function (_Masked) {
  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedFunction, _Masked);

  var _super = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedFunction);

  function MaskedFunction() {
    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedFunction);

    return _super.apply(this, arguments);
  }

  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedFunction, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      if (opts.mask) opts.validate = opts.mask;

      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedFunction.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedFunction;
}(_base_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedFunction = MaskedFunction;




/***/ }),

/***/ "./node_modules/imask/esm/masked/number.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/number.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskedNumber; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");







/**
  Number mask
  @param {Object} opts
  @param {string} opts.radix - Single char
  @param {string} opts.thousandsSeparator - Single char
  @param {Array<string>} opts.mapToRadix - Array of single chars
  @param {number} opts.min
  @param {number} opts.max
  @param {number} opts.scale - Digits after point
  @param {boolean} opts.signed - Allow negative
  @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
  @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
*/
var MaskedNumber = /*#__PURE__*/function (_Masked) {
  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedNumber, _Masked);

  var _super = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedNumber);

  /** Single char */

  /** Single char */

  /** Array of single chars */

  /** */

  /** */

  /** Digits after point */

  /** */

  /** Flag to remove leading and trailing zeros in the end of editing */

  /** Flag to pad trailing zeros after point in the end of editing */
  function MaskedNumber(opts) {
    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedNumber);

    return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
  }
  /**
    @override
  */


  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedNumber, [{
    key: "_update",
    value: function _update(opts) {
      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "_update", this).call(this, opts);

      this._updateRegExps();
    }
    /** */

  }, {
    key: "_updateRegExps",
    value: function _updateRegExps() {
      // use different regexp to process user input (more strict, input suffix) and tail shifting
      var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
      var midInput = '(0|([1-9]+\\d*))?';
      var mid = '\\d*';
      var end = (this.scale ? '(' + Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["escapeRegExp"])(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
      this._numberRegExpInput = new RegExp(start + midInput + end);
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["escapeRegExp"]).join('') + ']', 'g');
      this._thousandsSeparatorRegExp = new RegExp(Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["escapeRegExp"])(this.thousandsSeparator), 'g');
    }
    /** */

  }, {
    key: "_removeThousandsSeparators",
    value: function _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, '');
    }
    /** */

  }, {
    key: "_insertThousandsSeparators",
    value: function _insertThousandsSeparators(value) {
      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
      var parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(str) {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_get2 = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))].concat(args));
    }
    /** */

  }, {
    key: "_separatorsCount",
    value: function _separatorsCount(to) {
      var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var count = 0;

      for (var pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
      }

      return count;
    }
    /** */

  }, {
    key: "_separatorsCountFromSlice",
    value: function _separatorsCountFromSlice() {
      var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;

      var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit2 = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_this$_adjustRangeWit, 2);

      fromPos = _this$_adjustRangeWit2[0];
      toPos = _this$_adjustRangeWit2[1];
      return this._removeThousandsSeparators(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.thousandsSeparator) return Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
      var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

      this._value = this._removeThousandsSeparators(this.value);

      var appendDetails = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

      this._value = this._insertThousandsSeparators(this._value);
      var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
      return appendDetails;
    }
    /** */

  }, {
    key: "_findSeparatorAround",
    value: function _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        var searchFrom = pos - this.thousandsSeparator.length + 1;
        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos) return separatorPos;
      }

      return -1;
    }
  }, {
    key: "_adjustRangeWithSeparators",
    value: function _adjustRangeWithSeparators(from, to) {
      var separatorAroundFromPos = this._findSeparatorAround(from);

      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

      var separatorAroundToPos = this._findSeparatorAround(to);

      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from, to];
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

      var _this$_adjustRangeWit4 = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_this$_adjustRangeWit3, 2);

      fromPos = _this$_adjustRangeWit4[0];
      toPos = _this$_adjustRangeWit4[1];
      var valueBeforePos = this.value.slice(0, fromPos);
      var valueAfterPos = this.value.slice(toPos);

      var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

      var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator) return cursorPos;

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT:
          {
            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

            if (separatorAtLeftPos >= 0) {
              var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT) {
                return separatorAtLeftPos;
              }
            }

            break;
          }

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_RIGHT:
          {
            var separatorAtRightPos = this._findSeparatorAround(cursorPos);

            if (separatorAtRightPos >= 0) {
              return separatorAtRightPos + this.thousandsSeparator.length;
            }
          }
      }

      return cursorPos;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate(flags) {
      var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

      var valid = regexp.test(this._removeThousandsSeparators(this.value));

      if (valid) {
        // validate as number
        var number = this.number;
        valid = valid && !isNaN(number) && ( // check min bound for negative values
        this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
        this.max == null || this.max <= 0 || this.number <= this.max);
      }

      return valid && Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "doValidate", this).call(this, flags);
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      if (this.value) {
        var number = this.number;
        var validnum = number; // check bounds

        if (this.min != null) validnum = Math.max(validnum, this.min);
        if (this.max != null) validnum = Math.min(validnum, this.max);
        if (validnum !== number) this.unmaskedValue = String(validnum);
        var formatted = this.value;
        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }

      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "doCommit", this).call(this);
    }
    /** */

  }, {
    key: "_normalizeZeros",
    value: function _normalizeZeros(value) {
      var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
        return sign + num;
      }); // add leading zero

      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

        if (!parts[1].length) parts.length = 1; // remove fractional
      }

      return this._insertThousandsSeparators(parts.join(this.radix));
    }
    /** */

  }, {
    key: "_padFractionalZeros",
    value: function _padFractionalZeros(value) {
      if (!value) return value;
      var parts = value.split(this.radix);
      if (parts.length < 2) parts.push('');
      parts[1] = parts[1].padEnd(this.scale, '0');
      return parts.join(this.radix);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
    },
    set: function set(unmaskedValue) {
      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
    }
    /**
      @override
    */

  }, {
    key: "typedValue",
    get: function get() {
      return Number(this.unmaskedValue);
    },
    set: function set(n) {
      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
    }
    /** Parsed Number */

  }, {
    key: "number",
    get: function get() {
      return this.typedValue;
    },
    set: function set(number) {
      this.typedValue = number;
    }
    /**
      Is negative allowed
      @readonly
    */

  }, {
    key: "allowNegative",
    get: function get() {
      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
  }]);

  return MaskedNumber;
}(_base_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
MaskedNumber.DEFAULTS = {
  radix: ',',
  thousandsSeparator: '',
  mapToRadix: ['.'],
  scale: 2,
  signed: false,
  normalizeZeros: true,
  padFractionalZeros: false
};
_core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedNumber = MaskedNumber;




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern.js":
/*!**************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskedPattern; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");












var _excluded = ["_blocks"];

/**
  Pattern mask
  @param {Object} opts
  @param {Object} opts.blocks
  @param {Object} opts.definitions
  @param {string} opts.placeholderChar
  @param {boolean} opts.lazy
*/
var MaskedPattern = /*#__PURE__*/function (_Masked) {
  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedPattern, _Masked);

  var _super = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedPattern);

  /** */

  /** */

  /** Single char for empty input */

  /** Show placeholder only when needed */
  function MaskedPattern() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedPattern);

    // TODO type $Shape<MaskedPatternOptions>={} does not work
    opts.definitions = Object.assign({}, _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_INPUT_DEFINITIONS"], opts.definitions);
    return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
  }
  /**
    @override
    @param {Object} opts
  */


  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedPattern, [{
    key: "_update",
    value: function _update() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);

      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "_update", this).call(this, opts);

      this._rebuildMask();
    }
    /** */

  }, {
    key: "_rebuildMask",
    value: function _rebuildMask() {
      var _this = this;

      var defs = this.definitions;
      this._blocks = [];
      this._stops = [];
      this._maskedBlocks = {};
      var pattern = this.mask;
      if (!pattern || !defs) return;
      var unmaskingBlock = false;
      var optionalBlock = false;

      for (var i = 0; i < pattern.length; ++i) {
        if (this.blocks) {
          var _ret = function () {
            var p = pattern.slice(i);
            var bNames = Object.keys(_this.blocks).filter(function (bName) {
              return p.indexOf(bName) === 0;
            }); // order by key length

            bNames.sort(function (a, b) {
              return b.length - a.length;
            }); // use block name with max length

            var bName = bNames[0];

            if (bName) {
              // $FlowFixMe no ideas
              var maskedBlock = Object(_factory_js__WEBPACK_IMPORTED_MODULE_7__["default"])(Object.assign({
                parent: _this,
                lazy: _this.lazy,
                eager: _this.eager,
                placeholderChar: _this.placeholderChar,
                overwrite: _this.overwrite
              }, _this.blocks[bName]));

              if (maskedBlock) {
                _this._blocks.push(maskedBlock); // store block index


                if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                _this._maskedBlocks[bName].push(_this._blocks.length - 1);
              }

              i += bName.length - 1;
              return "continue";
            }
          }();

          if (_ret === "continue") continue;
        }

        var char = pattern[i];

        var _isInput = (char in defs);

        if (char === MaskedPattern.STOP_CHAR) {
          this._stops.push(this._blocks.length);

          continue;
        }

        if (char === '{' || char === '}') {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }

        if (char === '[' || char === ']') {
          optionalBlock = !optionalBlock;
          continue;
        }

        if (char === MaskedPattern.ESCAPE_CHAR) {
          ++i;
          char = pattern[i];
          if (!char) break;
          _isInput = false;
        }

        var def = _isInput ? new _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
          parent: this,
          lazy: this.lazy,
          eager: this.eager,
          placeholderChar: this.placeholderChar,
          mask: defs[char],
          isOptional: optionalBlock
        }) : new _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
          char: char,
          eager: this.eager,
          isUnmasking: unmaskingBlock
        });

        this._blocks.push(def);
      }
    }
    /**
      @override
    */

  }, {
    key: "state",
    get: function get() {
      return Object.assign({}, Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "state", this), {
        _blocks: this._blocks.map(function (b) {
          return b.state;
        })
      });
    },
    set: function set(state) {
      var _blocks = state._blocks,
          maskedState = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["b"])(state, _excluded);

      this._blocks.forEach(function (b, bi) {
        return b.state = _blocks[bi];
      });

      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "state", maskedState, this, true);
    }
    /**
      @override
    */

  }, {
    key: "reset",
    value: function reset() {
      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "reset", this).call(this);

      this._blocks.forEach(function (b) {
        return b.reset();
      });
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isComplete;
      });
    }
    /**
      @override
    */

  }, {
    key: "isFilled",
    get: function get() {
      return this._blocks.every(function (b) {
        return b.isFilled;
      });
    }
    /**
      @override
    */

  }, {
    key: "doCommit",
    value: function doCommit() {
      this._blocks.forEach(function (b) {
        return b.doCommit();
      });

      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "doCommit", this).call(this);
    }
    /**
      @override
    */

  }, {
    key: "unmaskedValue",
    get: function get() {
      return this._blocks.reduce(function (str, b) {
        return str += b.unmaskedValue;
      }, '');
    },
    set: function set(unmaskedValue) {
      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
    }
    /**
      @override
    */

  }, {
    key: "value",
    get: function get() {
      // TODO return _value when not in change?
      return this._blocks.reduce(function (str, b) {
        return str += b.value;
      }, '');
    },
    set: function set(value) {
      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["i"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "value", value, this, true);
    }
    /**
      @override
    */

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      return Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
    }
    /**
      @override
    */

  }, {
    key: "_appendEager",
    value: function _appendEager() {
      var _this$_mapPosToBlock;

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
      if (startBlockIndex == null) return details; // TODO test if it works for nested pattern masks

      if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;

      for (var bi = startBlockIndex; bi < this._blocks.length; ++bi) {
        var d = this._blocks[bi]._appendEager();

        if (!d.inserted) break;
        details.aggregate(d);
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "_appendCharRaw",
    value: function _appendCharRaw(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var blockIter = this._mapPosToBlock(this.value.length);

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (!blockIter) return details;

      for (var bi = blockIter.index;; ++bi) {
        var _block = this._blocks[bi];
        if (!_block) break;

        var blockDetails = _block._appendChar(ch, flags);

        var skip = blockDetails.skip;
        details.aggregate(blockDetails);
        if (skip || blockDetails.rawInserted) break; // go next char
      }

      return details;
    }
    /**
      @override
    */

  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this2 = this;

      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var chunkTail = new _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
      if (fromPos === toPos) return chunkTail;

      this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
        var blockChunk = b.extractTail(bFromPos, bToPos);
        blockChunk.stop = _this2._findStopBefore(bi);
        blockChunk.from = _this2._blockStartPos(bi);
        if (blockChunk instanceof _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_6__["default"]) blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });

      return chunkTail;
    }
    /**
      @override
    */

  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (fromPos === toPos) return '';
      var input = '';

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
        input += b.extractInput(fromPos, toPos, flags);
      });

      return input;
    }
  }, {
    key: "_findStopBefore",
    value: function _findStopBefore(blockIndex) {
      var stopBefore;

      for (var si = 0; si < this._stops.length; ++si) {
        var stop = this._stops[si];
        if (stop <= blockIndex) stopBefore = stop;else break;
      }

      return stopBefore;
    }
    /** Appends placeholder depending on laziness */

  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder(toBlockIndex) {
      var _this3 = this;

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (this.lazy && toBlockIndex == null) return details;

      var startBlockIter = this._mapPosToBlock(this.value.length);

      if (!startBlockIter) return details;
      var startBlockIndex = startBlockIter.index;
      var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
        if (!b.lazy || toBlockIndex != null) {
          // $FlowFixMe `_blocks` may not be present
          var args = b._blocks != null ? [b._blocks.length] : [];

          var bDetails = b._appendPlaceholder.apply(b, args);

          _this3._value += bDetails.inserted;
          details.aggregate(bDetails);
        }
      });

      return details;
    }
    /** Finds block in pos */

  }, {
    key: "_mapPosToBlock",
    value: function _mapPosToBlock(pos) {
      var accVal = '';

      for (var bi = 0; bi < this._blocks.length; ++bi) {
        var _block2 = this._blocks[bi];
        var blockStartPos = accVal.length;
        accVal += _block2.value;

        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }
    /** */

  }, {
    key: "_blockStartPos",
    value: function _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
        return pos += b.value.length;
      }, 0);
    }
    /** */

  }, {
    key: "_forEachBlocksInRange",
    value: function _forEachBlocksInRange(fromPos) {
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var fn = arguments.length > 2 ? arguments[2] : undefined;

      var fromBlockIter = this._mapPosToBlock(fromPos);

      if (fromBlockIter) {
        var toBlockIter = this._mapPosToBlock(toPos); // process first block


        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        var fromBlockStartPos = fromBlockIter.offset;
        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

        if (toBlockIter && !isSameBlock) {
          // process intermediate blocks
          for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
          } // process last block


          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }
    /**
      @override
    */

  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      var removeDetails = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

      this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
        removeDetails.aggregate(b.remove(bFromPos, bToPos));
      });

      return removeDetails;
    }
    /**
      @override
    */

  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE;
      // TODO refactor - extract alignblock
      var beginBlockData = this._mapPosToBlock(cursorPos) || {
        index: 0,
        offset: 0
      };
      var beginBlockOffset = beginBlockData.offset,
          beginBlockIndex = beginBlockData.index;
      var beginBlock = this._blocks[beginBlockIndex];
      if (!beginBlock) return cursorPos;
      var beginBlockCursorPos = beginBlockOffset; // if position inside block - try to adjust it

      if (beginBlockCursorPos !== 0 && beginBlockCursorPos < beginBlock.value.length) {
        beginBlockCursorPos = beginBlock.nearestInputPos(beginBlockOffset, Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_1__["forceDirection"])(direction));
      }

      var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
      var cursorAtLeft = beginBlockCursorPos === 0; //  cursor is INSIDE first block (not at bounds)

      if (!cursorAtLeft && !cursorAtRight) return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
      var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;

      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE) {
        // NONE direction used to calculate start input position if no chars were removed
        // FOR NONE:
        // -
        // input|any
        // ->
        //  any|input
        // <-
        //  filled-input|any
        // check if first block at left is input
        if (searchBlockIndex > 0) {
          var blockIndexAtLeft = searchBlockIndex - 1;
          var blockAtLeft = this._blocks[blockIndexAtLeft];
          var blockInputPos = blockAtLeft.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE); // is input

          if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) {
            return this._blockStartPos(searchBlockIndex);
          }
        } // ->


        var firstInputAtRight = searchBlockIndex;

        for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
          var blockAtRight = this._blocks[bi];

          var _blockInputPos = blockAtRight.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE);

          if (!blockAtRight.value.length || _blockInputPos !== blockAtRight.value.length) {
            return this._blockStartPos(bi) + _blockInputPos;
          }
        } // <-
        // find first non-fixed symbol


        for (var _bi = searchBlockIndex - 1; _bi >= 0; --_bi) {
          var _block3 = this._blocks[_bi];

          var _blockInputPos2 = _block3.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE); // is input


          if (!_block3.value.length || _blockInputPos2 !== _block3.value.length) {
            return this._blockStartPos(_bi) + _block3.value.length;
          }
        }

        return cursorPos;
      }

      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT) {
        // -
        //  any|filled-input
        // <-
        //  any|first not empty is not-len-aligned
        //  not-0-aligned|any
        // ->
        //  any|not-len-aligned or end
        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT) {
          // check if first block at right is filled input
          var firstFilledBlockIndexAtRight;

          for (var _bi2 = searchBlockIndex; _bi2 < this._blocks.length; ++_bi2) {
            if (this._blocks[_bi2].value) {
              firstFilledBlockIndexAtRight = _bi2;
              break;
            }
          }

          if (firstFilledBlockIndexAtRight != null) {
            var filledBlock = this._blocks[firstFilledBlockIndexAtRight];

            var _blockInputPos3 = filledBlock.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].RIGHT);

            if (_blockInputPos3 === 0 && filledBlock.unmaskedValue.length) {
              // filled block is input
              return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos3;
            }
          }
        } // <-
        // find this vars


        var firstFilledInputBlockIndex = -1;
        var firstEmptyInputBlockIndex; // TODO consider nested empty inputs

        for (var _bi3 = searchBlockIndex - 1; _bi3 >= 0; --_bi3) {
          var _block4 = this._blocks[_bi3];

          var _blockInputPos4 = _block4.nearestInputPos(_block4.value.length, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT);

          if (!_block4.value || _blockInputPos4 !== 0) firstEmptyInputBlockIndex = _bi3;

          if (_blockInputPos4 !== 0) {
            if (_blockInputPos4 !== _block4.value.length) {
              // aligned inside block - return immediately
              return this._blockStartPos(_bi3) + _blockInputPos4;
            } else {
              // found filled
              firstFilledInputBlockIndex = _bi3;
              break;
            }
          }
        }

        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT) {
          // try find first empty input before start searching position only when not forced
          for (var _bi4 = firstFilledInputBlockIndex + 1; _bi4 <= Math.min(searchBlockIndex, this._blocks.length - 1); ++_bi4) {
            var _block5 = this._blocks[_bi4];

            var _blockInputPos5 = _block5.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE);

            var blockAlignedPos = this._blockStartPos(_bi4) + _blockInputPos5;

            if (blockAlignedPos > cursorPos) break; // if block is not lazy input

            if (_blockInputPos5 !== _block5.value.length) return blockAlignedPos;
          }
        } // process overflow


        if (firstFilledInputBlockIndex >= 0) {
          return this._blockStartPos(firstFilledInputBlockIndex) + this._blocks[firstFilledInputBlockIndex].value.length;
        } // for lazy if has aligned left inside fixed and has came to the start - use start position


        if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_LEFT || this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex])) {
          return 0;
        }

        if (firstEmptyInputBlockIndex != null) {
          return this._blockStartPos(firstEmptyInputBlockIndex);
        } // find first input


        for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
          var _block6 = this._blocks[_bi5];

          var _blockInputPos6 = _block6.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE); // is input


          if (!_block6.value.length || _blockInputPos6 !== _block6.value.length) {
            return this._blockStartPos(_bi5) + _blockInputPos6;
          }
        }

        return 0;
      }

      if (direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].RIGHT || direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_RIGHT) {
        // ->
        //  any|not-len-aligned and filled
        //  any|not-len-aligned
        // <-
        //  not-0-aligned or start|any
        var firstInputBlockAlignedIndex;
        var firstInputBlockAlignedPos;

        for (var _bi6 = searchBlockIndex; _bi6 < this._blocks.length; ++_bi6) {
          var _block7 = this._blocks[_bi6];

          var _blockInputPos7 = _block7.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE);

          if (_blockInputPos7 !== _block7.value.length) {
            firstInputBlockAlignedPos = this._blockStartPos(_bi6) + _blockInputPos7;
            firstInputBlockAlignedIndex = _bi6;
            break;
          }
        }

        if (firstInputBlockAlignedIndex != null && firstInputBlockAlignedPos != null) {
          for (var _bi7 = firstInputBlockAlignedIndex; _bi7 < this._blocks.length; ++_bi7) {
            var _block8 = this._blocks[_bi7];

            var _blockInputPos8 = _block8.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_RIGHT);

            if (_blockInputPos8 !== _block8.value.length) {
              return this._blockStartPos(_bi7) + _blockInputPos8;
            }
          }

          return direction === _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].FORCE_RIGHT ? this.value.length : firstInputBlockAlignedPos;
        }

        for (var _bi8 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi8 >= 0; --_bi8) {
          var _block9 = this._blocks[_bi8];

          var _blockInputPos9 = _block9.nearestInputPos(_block9.value.length, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].LEFT);

          if (_blockInputPos9 !== 0) {
            var alignedPos = this._blockStartPos(_bi8) + _blockInputPos9;

            if (alignedPos >= cursorPos) return alignedPos;
            break;
          }
        }
      }

      return cursorPos;
    }
    /** Get block by name */

  }, {
    key: "maskedBlock",
    value: function maskedBlock(name) {
      return this.maskedBlocks(name)[0];
    }
    /** Get all blocks by name */

  }, {
    key: "maskedBlocks",
    value: function maskedBlocks(name) {
      var _this4 = this;

      var indices = this._maskedBlocks[name];
      if (!indices) return [];
      return indices.map(function (gi) {
        return _this4._blocks[gi];
      });
    }
  }]);

  return MaskedPattern;
}(_base_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
MaskedPattern.DEFAULTS = {
  lazy: true,
  placeholderChar: '_'
};
MaskedPattern.STOP_CHAR = '`';
MaskedPattern.ESCAPE_CHAR = '\\';
MaskedPattern.InputDefinition = _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_4__["default"];
MaskedPattern.FixedDefinition = _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_5__["default"];

function isInput(block) {
  if (!block) return false;
  var value = block.value;
  return !value || block.nearestInputPos(0, _core_utils_js__WEBPACK_IMPORTED_MODULE_1__["DIRECTION"].NONE) !== value.length;
}

_core_holder_js__WEBPACK_IMPORTED_MODULE_8__["default"].MaskedPattern = MaskedPattern;




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js":
/*!*********************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/chunk-tail-details.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChunksTailDetails; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");






var _excluded = ["chunks"];

var ChunksTailDetails = /*#__PURE__*/function () {
  /** */
  function ChunksTailDetails() {
    var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, ChunksTailDetails);

    this.chunks = chunks;
    this.from = from;
  }

  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(ChunksTailDetails, [{
    key: "toString",
    value: function toString() {
      return this.chunks.map(String).join('');
    } // $FlowFixMe no ideas

  }, {
    key: "extend",
    value: function extend(tailChunk) {
      if (!String(tailChunk)) return;
      if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(tailChunk)) tailChunk = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](String(tailChunk));
      var lastChunk = this.chunks[this.chunks.length - 1];
      var extendLast = lastChunk && ( // if stops are same or tail has no stop
      lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
      tailChunk.from === lastChunk.from + lastChunk.toString().length;

      if (tailChunk instanceof _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
        // check the ability to extend previous chunk
        if (extendLast) {
          // extend previous chunk
          lastChunk.extend(tailChunk.toString());
        } else {
          // append new chunk
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails) {
        if (tailChunk.stop == null) {
          // unwrap floating chunks to parent, keeping `from` pos
          var firstTailChunk;

          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift();
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        } // if tail chunk still has value


        if (tailChunk.toString()) {
          // if chunks contains stops, then popup stop to container
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
  }, {
    key: "appendTo",
    value: function appendTo(masked) {
      // $FlowFixMe
      if (!(masked instanceof _core_holder_js__WEBPACK_IMPORTED_MODULE_4__["default"].MaskedPattern)) {
        var tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.toString());
        return tail.appendTo(masked);
      }

      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();

      for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
        var chunk = this.chunks[ci];

        var lastBlockIter = masked._mapPosToBlock(masked.value.length);

        var stop = chunk.stop;
        var chunkBlock = void 0;

        if (stop != null && ( // if block not found or stop is behind lastBlock
        !lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
          masked._stops.indexOf(stop) >= 0) {
            details.aggregate(masked._appendPlaceholder(stop));
          }

          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
        }

        if (chunkBlock) {
          var tailDetails = chunkBlock.appendTail(chunk);
          tailDetails.skip = false; // always ignore skip, it will be set on last

          details.aggregate(tailDetails);
          masked._value += tailDetails.inserted; // get not inserted chars

          var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars) details.aggregate(masked.append(remainChars, {
            tail: true
          }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }
      return details;
    }
  }, {
    key: "state",
    get: function get() {
      return {
        chunks: this.chunks.map(function (c) {
          return c.state;
        }),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    },
    set: function set(state) {
      var chunks = state.chunks,
          props = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["b"])(state, _excluded);

      Object.assign(this, props);
      this.chunks = chunks.map(function (cstate) {
        var chunk = "chunks" in cstate ? new ChunksTailDetails() : new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](); // $FlowFixMe already checked above

        chunk.state = cstate;
        return chunk;
      });
    }
  }, {
    key: "unshift",
    value: function unshift(beforePos) {
      if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
      var chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
      var ci = 0;

      while (ci < this.chunks.length) {
        var chunk = this.chunks[ci];
        var shiftChar = chunk.unshift(chunkShiftPos);

        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          ++ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }

        if (shiftChar) return shiftChar;
      }

      return '';
    }
  }]);

  return ChunksTailDetails;
}();




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/fixed-definition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/fixed-definition.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PatternFixedDefinition; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");





var PatternFixedDefinition = /*#__PURE__*/function () {
  /** */

  /** */

  /** */

  /** */

  /** */
  function PatternFixedDefinition(opts) {
    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, PatternFixedDefinition);

    Object.assign(this, opts);
    this._value = '';
  }

  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(PatternFixedDefinition, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.isUnmasking ? this.value : '';
    }
  }, {
    key: "reset",
    value: function reset() {
      this._isRawInput = false;
      this._value = '';
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value) this._isRawInput = false;
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].NONE;
      var minPos = 0;
      var maxPos = this._value.length;

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].FORCE_LEFT:
          return minPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].NONE:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_2__["DIRECTION"].FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
    }
  }, {
    key: "isComplete",
    get: function get() {
      return true;
    }
  }, {
    key: "isFilled",
    get: function get() {
      return Boolean(this._value);
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      if (this._value) return details;
      var appended = this.char === ch;
      var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !this.eager && !flags.tail;
      if (isResolved) details.rawInserted = this.char;
      this._value = details.inserted = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return this._appendChar(this.char);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      if (this._value) return details;
      this._value = details.inserted = this.char;
      return details;
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"]('');
    } // $FlowFixMe no ideas

  }, {
    key: "appendTail",
    value: function appendTail(tail) {
      if (Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_2__["isString"])(tail)) tail = new _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_3__["default"](String(tail));
      return tail.appendTo(this);
    }
  }, {
    key: "append",
    value: function append(str, flags, tail) {
      var details = this._appendChar(str[0], flags);

      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }

      return details;
    }
  }, {
    key: "doCommit",
    value: function doCommit() {}
  }, {
    key: "state",
    get: function get() {
      return {
        _value: this._value,
        _isRawInput: this._isRawInput
      };
    },
    set: function set(state) {
      Object.assign(this, state);
    }
  }]);

  return PatternFixedDefinition;
}();




/***/ }),

/***/ "./node_modules/imask/esm/masked/pattern/input-definition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/imask/esm/masked/pattern/input-definition.js ***!
  \*******************************************************************/
/*! exports provided: DEFAULT_INPUT_DEFINITIONS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_INPUT_DEFINITIONS", function() { return DEFAULT_INPUT_DEFINITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PatternInputDefinition; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/holder.js */ "./node_modules/imask/esm/core/holder.js");






var _excluded = ["mask"];
var DEFAULT_INPUT_DEFINITIONS = {
  '0': /\d/,
  'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  // http://stackoverflow.com/a/22075070
  '*': /./
};
/** */

var PatternInputDefinition = /*#__PURE__*/function () {
  /** */

  /** */

  /** */

  /** */

  /** */

  /** */

  /** */
  function PatternInputDefinition(opts) {
    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, PatternInputDefinition);

    var mask = opts.mask,
        blockOpts = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["b"])(opts, _excluded);

    this.masked = Object(_factory_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
      mask: mask
    });
    Object.assign(this, blockOpts);
  }

  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(PatternInputDefinition, [{
    key: "reset",
    value: function reset() {
      this.isFilled = false;
      this.masked.reset();
    }
  }, {
    key: "remove",
    value: function remove() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

      if (fromPos === 0 && toPos >= 1) {
        this.isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }

      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
  }, {
    key: "value",
    get: function get() {
      return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
    }
  }, {
    key: "unmaskedValue",
    get: function get() {
      return this.masked.unmaskedValue;
    }
  }, {
    key: "isComplete",
    get: function get() {
      return Boolean(this.masked.value) || this.isOptional;
    }
  }, {
    key: "_appendChar",
    value: function _appendChar(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this.isFilled) return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var state = this.masked.state; // simulate input

      var details = this.masked._appendChar(ch, flags);

      if (details.inserted && this.doValidate(flags) === false) {
        details.inserted = details.rawInserted = '';
        this.masked.state = state;
      }

      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }

      details.skip = !details.inserted && !this.isOptional;
      this.isFilled = Boolean(details.inserted);
      return details;
    }
  }, {
    key: "append",
    value: function append() {
      var _this$masked;

      // TODO probably should be done via _appendChar
      return (_this$masked = this.masked).append.apply(_this$masked, arguments);
    }
  }, {
    key: "_appendPlaceholder",
    value: function _appendPlaceholder() {
      var details = new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      if (this.isFilled || this.isOptional) return details;
      this.isFilled = true;
      details.inserted = this.placeholderChar;
      return details;
    }
  }, {
    key: "_appendEager",
    value: function _appendEager() {
      return new _core_change_details_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    }
  }, {
    key: "extractTail",
    value: function extractTail() {
      var _this$masked2;

      return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
    }
  }, {
    key: "appendTail",
    value: function appendTail() {
      var _this$masked3;

      return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
    }
  }, {
    key: "extractInput",
    value: function extractInput() {
      var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      var flags = arguments.length > 2 ? arguments[2] : undefined;
      return this.masked.extractInput(fromPos, toPos, flags);
    }
  }, {
    key: "nearestInputPos",
    value: function nearestInputPos(cursorPos) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].NONE;
      var minPos = 0;
      var maxPos = this.value.length;
      var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

      switch (direction) {
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].LEFT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].RIGHT:
        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;

        case _core_utils_js__WEBPACK_IMPORTED_MODULE_3__["DIRECTION"].NONE:
        default:
          return boundPos;
      }
    }
  }, {
    key: "doValidate",
    value: function doValidate() {
      var _this$masked4, _this$parent;

      return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
    }
  }, {
    key: "doCommit",
    value: function doCommit() {
      this.masked.doCommit();
    }
  }, {
    key: "state",
    get: function get() {
      return {
        masked: this.masked.state,
        isFilled: this.isFilled
      };
    },
    set: function set(state) {
      this.masked.state = state.masked;
      this.isFilled = state.isFilled;
    }
  }]);

  return PatternInputDefinition;
}();




/***/ }),

/***/ "./node_modules/imask/esm/masked/pipe.js":
/*!***********************************************!*\
  !*** ./node_modules/imask/esm/masked/pipe.js ***!
  \***********************************************/
/*! exports provided: PIPE_TYPE, createPipe, pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PIPE_TYPE", function() { return PIPE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPipe", function() { return createPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");






/** Mask pipe source and destination types */

var PIPE_TYPE = {
  MASKED: 'value',
  UNMASKED: 'unmaskedValue',
  TYPED: 'typedValue'
};
/** Creates new pipe function depending on mask type, source and destination options */

function createPipe(mask) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
  var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
  var masked = Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(mask);
  return function (value) {
    return masked.runIsolated(function (m) {
      m[from] = value;
      return m[to];
    });
  };
}
/** Pipes value through mask depending on mask type, source and destination options */

function pipe(value) {
  for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    pipeArgs[_key - 1] = arguments[_key];
  }

  return createPipe.apply(void 0, pipeArgs)(value);
}
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].PIPE_TYPE = PIPE_TYPE;
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].createPipe = createPipe;
_core_holder_js__WEBPACK_IMPORTED_MODULE_1__["default"].pipe = pipe;




/***/ }),

/***/ "./node_modules/imask/esm/masked/range.js":
/*!************************************************!*\
  !*** ./node_modules/imask/esm/masked/range.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskedRange; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _pattern_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pattern.js */ "./node_modules/imask/esm/masked/pattern.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _pattern_input_definition_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pattern/input-definition.js */ "./node_modules/imask/esm/masked/pattern/input-definition.js");
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./factory.js */ "./node_modules/imask/esm/masked/factory.js");
/* harmony import */ var _pattern_fixed_definition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pattern/fixed-definition.js */ "./node_modules/imask/esm/masked/pattern/fixed-definition.js");
/* harmony import */ var _pattern_chunk_tail_details_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pattern/chunk-tail-details.js */ "./node_modules/imask/esm/masked/pattern/chunk-tail-details.js");
/* harmony import */ var _regexp_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regexp.js */ "./node_modules/imask/esm/masked/regexp.js");













/** Pattern which accepts ranges */

var MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedRange, _MaskedPattern);

  var _super = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedRange);

  function MaskedRange() {
    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedRange);

    return _super.apply(this, arguments);
  }

  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedRange, [{
    key: "_matchFrom",
    get:
    /**
      Optionally sets max length of pattern.
      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
    */

    /** Min bound */

    /** Max bound */

    /** */
    function get() {
      return this.maxLength - String(this.from).length;
    }
    /**
      @override
    */

  }, {
    key: "_update",
    value: function _update(opts) {
      // TODO type
      opts = Object.assign({
        to: this.to || 0,
        from: this.from || 0,
        maxLength: this.maxLength || 0
      }, opts);
      var maxLength = String(opts.to).length;
      if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
      opts.maxLength = maxLength;
      var fromStr = String(opts.from).padStart(maxLength, '0');
      var toStr = String(opts.to).padStart(maxLength, '0');
      var sameCharsCount = 0;

      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
        ++sameCharsCount;
      }

      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedRange.prototype), "_update", this).call(this, opts);
    }
    /**
      @override
    */

  }, {
    key: "isComplete",
    get: function get() {
      return Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
    }
  }, {
    key: "boundaries",
    value: function boundaries(str) {
      var minstr = '';
      var maxstr = '';

      var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
          _ref2 = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_ref, 3),
          placeholder = _ref2[1],
          num = _ref2[2];

      if (num) {
        minstr = '0'.repeat(placeholder.length) + num;
        maxstr = '9'.repeat(placeholder.length) + num;
      }

      minstr = minstr.padEnd(this.maxLength, '0');
      maxstr = maxstr.padEnd(this.maxLength, '9');
      return [minstr, maxstr];
    } // TODO str is a single char everytime

    /**
      @override
    */

  }, {
    key: "doPrepare",
    value: function doPrepare(ch) {
      var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var details;

      var _normalizePrepare = Object(_core_utils_js__WEBPACK_IMPORTED_MODULE_2__["normalizePrepare"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedRange.prototype), "doPrepare", this).call(this, ch.replace(/\D/g, ''), flags));

      var _normalizePrepare2 = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_normalizePrepare, 2);

      ch = _normalizePrepare2[0];
      details = _normalizePrepare2[1];
      if (!this.autofix || !ch) return ch;
      var fromStr = String(this.from).padStart(this.maxLength, '0');
      var toStr = String(this.to).padStart(this.maxLength, '0');
      var nextVal = this.value + ch;
      if (nextVal.length > this.maxLength) return '';

      var _this$boundaries = this.boundaries(nextVal),
          _this$boundaries2 = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_this$boundaries, 2),
          minstr = _this$boundaries2[0],
          maxstr = _this$boundaries2[1];

      if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1];

      if (Number(minstr) > this.to) {
        if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
          return ['', details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
        }

        return toStr[nextVal.length - 1];
      }

      return ch;
    }
    /**
      @override
    */

  }, {
    key: "doValidate",
    value: function doValidate() {
      var _get2;

      var str = this.value;
      var firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

      var _this$boundaries3 = this.boundaries(str),
          _this$boundaries4 = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_this$boundaries3, 2),
          minstr = _this$boundaries4[0],
          maxstr = _this$boundaries4[1];

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
    }
  }]);

  return MaskedRange;
}(_pattern_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_3__["default"].MaskedRange = MaskedRange;




/***/ }),

/***/ "./node_modules/imask/esm/masked/regexp.js":
/*!*************************************************!*\
  !*** ./node_modules/imask/esm/masked/regexp.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskedRegExp; });
/* harmony import */ var _rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_rollupPluginBabelHelpers-b054ecd2.js */ "./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.js */ "./node_modules/imask/esm/masked/base.js");
/* harmony import */ var _core_holder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/holder.js */ "./node_modules/imask/esm/core/holder.js");
/* harmony import */ var _core_change_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/change-details.js */ "./node_modules/imask/esm/core/change-details.js");
/* harmony import */ var _core_continuous_tail_details_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/continuous-tail-details.js */ "./node_modules/imask/esm/core/continuous-tail-details.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/utils.js */ "./node_modules/imask/esm/core/utils.js");







/** Masking by RegExp */

var MaskedRegExp = /*#__PURE__*/function (_Masked) {
  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["d"])(MaskedRegExp, _Masked);

  var _super = Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["e"])(MaskedRegExp);

  function MaskedRegExp() {
    Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(this, MaskedRegExp);

    return _super.apply(this, arguments);
  }

  Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["_"])(MaskedRegExp, [{
    key: "_update",
    value:
    /**
      @override
      @param {Object} opts
    */
    function _update(opts) {
      if (opts.mask) opts.validate = function (value) {
        return value.search(opts.mask) >= 0;
      };

      Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["g"])(Object(_rollupPluginBabelHelpers_b054ecd2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MaskedRegExp.prototype), "_update", this).call(this, opts);
    }
  }]);

  return MaskedRegExp;
}(_base_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
_core_holder_js__WEBPACK_IMPORTED_MODULE_2__["default"].MaskedRegExp = MaskedRegExp;




/***/ }),

/***/ "./node_modules/lg-thumbnail.js/dist/lg-thumbnail.js":
/*!***********************************************************!*\
  !*** ./node_modules/lg-thumbnail.js/dist/lg-thumbnail.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/**!
 * lg-thumbnail.js | 1.2.0 | May 20th 2020
 * http://sachinchoolur.github.io/lg-thumbnail.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.lgThumbnail = mod.exports;
    }
})(this, function () {
    'use strict';

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    var thumbnailDefaults = {
        thumbnail: true,

        animateThumb: true,
        currentPagerPosition: 'middle',

        thumbWidth: 100,
        thumbContHeight: 100,
        thumbMargin: 5,

        exThumbImage: false,
        showThumbByDefault: true,
        toggleThumb: true,
        pullCaptionUp: true,

        enableThumbDrag: true,
        enableThumbSwipe: true,
        swipeThreshold: 50,

        loadYoutubeThumbnail: true,
        youtubeThumbSize: 1,

        loadVimeoThumbnail: true,
        vimeoThumbSize: 'thumbnail_small',

        loadDailymotionThumbnail: true
    };

    var Thumbnail = function Thumbnail(element) {

        this.el = element;

        this.core = window.lgData[this.el.getAttribute('lg-uid')];
        this.core.s = _extends({}, thumbnailDefaults, this.core.s);

        this.thumbOuter = null;
        this.thumbOuterWidth = 0;
        this.thumbTotalWidth = this.core.items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin);
        this.thumbIndex = this.core.index;

        // Thumbnail animation value
        this.left = 0;

        this.init();

        return this;
    };

    Thumbnail.prototype.init = function () {
        var _this = this;
        if (this.core.s.thumbnail && this.core.items.length > 1) {
            if (this.core.s.showThumbByDefault) {
                setTimeout(function () {
                    utils.addClass(_this.core.outer, 'lg-thumb-open');
                }, 700);
            }

            if (this.core.s.pullCaptionUp) {
                utils.addClass(this.core.outer, 'lg-pull-caption-up');
            }

            this.build();
            if (this.core.s.animateThumb) {
                if (this.core.s.enableThumbDrag && !this.core.isTouch && this.core.doCss()) {
                    this.enableThumbDrag();
                }

                if (this.core.s.enableThumbSwipe && this.core.isTouch && this.core.doCss()) {
                    this.enableThumbSwipe();
                }

                this.thumbClickable = false;
            } else {
                this.thumbClickable = true;
            }

            this.toggle();
            this.thumbkeyPress();
        }
    };

    Thumbnail.prototype.build = function () {
        var _this = this;
        var thumbList = '';
        var vimeoErrorThumbSize = '';
        var $thumb;
        var html = '<div class="lg-thumb-outer">' + '<div class="lg-thumb group">' + '</div>' + '</div>';

        switch (this.core.s.vimeoThumbSize) {
            case 'thumbnail_large':
                vimeoErrorThumbSize = '640';
                break;
            case 'thumbnail_medium':
                vimeoErrorThumbSize = '200x150';
                break;
            case 'thumbnail_small':
                vimeoErrorThumbSize = '100x75';
        }

        utils.addClass(_this.core.outer, 'lg-has-thumb');

        _this.core.outer.querySelector('.lg').insertAdjacentHTML('beforeend', html);

        _this.thumbOuter = _this.core.outer.querySelector('.lg-thumb-outer');
        _this.thumbOuterWidth = _this.thumbOuter.offsetWidth;

        if (_this.core.s.animateThumb) {
            _this.core.outer.querySelector('.lg-thumb').style.width = _this.thumbTotalWidth + 'px';
            _this.core.outer.querySelector('.lg-thumb').style.position = 'relative';
        }

        if (this.core.s.animateThumb) {
            _this.thumbOuter.style.height = _this.core.s.thumbContHeight + 'px';
        }

        function getThumb(src, thumb, index) {
            var isVideo = _this.core.isVideo(src, index) || {};
            var thumbImg;
            var vimeoId = '';

            if (isVideo.youtube || isVideo.vimeo || isVideo.dailymotion) {
                if (isVideo.youtube) {
                    if (_this.core.s.loadYoutubeThumbnail) {
                        thumbImg = '//img.youtube.com/vi/' + isVideo.youtube[1] + '/' + _this.core.s.youtubeThumbSize + '.jpg';
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.vimeo) {
                    if (_this.core.s.loadVimeoThumbnail) {
                        thumbImg = '//i.vimeocdn.com/video/error_' + vimeoErrorThumbSize + '.jpg';
                        vimeoId = isVideo.vimeo[1];
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.dailymotion) {
                    if (_this.core.s.loadDailymotionThumbnail) {
                        thumbImg = '//www.dailymotion.com/thumbnail/video/' + isVideo.dailymotion[1];
                    } else {
                        thumbImg = thumb;
                    }
                }
            } else {
                thumbImg = thumb;
            }

            thumbList += '<div data-vimeo-id="' + vimeoId + '" class="lg-thumb-item" style="width:' + _this.core.s.thumbWidth + 'px; margin-right: ' + _this.core.s.thumbMargin + 'px"><img src="' + thumbImg + '" /></div>';
            vimeoId = '';
        }

        if (_this.core.s.dynamic) {
            for (var j = 0; j < _this.core.s.dynamicEl.length; j++) {
                getThumb(_this.core.s.dynamicEl[j].src, _this.core.s.dynamicEl[j].thumb, j);
            }
        } else {
            for (var i = 0; i < _this.core.items.length; i++) {
                if (!_this.core.s.exThumbImage) {
                    getThumb(_this.core.items[i].getAttribute('href') || _this.core.items[i].getAttribute('data-src'), _this.core.items[i].querySelector('img').getAttribute('src'), i);
                } else {
                    getThumb(_this.core.items[i].getAttribute('href') || _this.core.items[i].getAttribute('data-src'), _this.core.items[i].getAttribute(_this.core.s.exThumbImage), i);
                }
            }
        }

        _this.core.outer.querySelector('.lg-thumb').innerHTML = thumbList;

        $thumb = _this.core.outer.querySelectorAll('.lg-thumb-item');

        for (var n = 0; n < $thumb.length; n++) {

            /*jshint loopfunc: true */
            (function (index) {
                var $this = $thumb[index];
                var vimeoVideoId = $this.getAttribute('data-vimeo-id');
                if (vimeoVideoId) {

                    window['lgJsonP' + _this.el.getAttribute('lg-uid') + '' + n] = function (content) {
                        $this.querySelector('img').setAttribute('src', content[0][_this.core.s.vimeoThumbSize]);
                    };

                    var script = document.createElement('script');
                    script.className = 'lg-script';
                    script.src = '//www.vimeo.com/api/v2/video/' + vimeoVideoId + '.json?callback=lgJsonP' + _this.el.getAttribute('lg-uid') + '' + n;
                    document.body.appendChild(script);
                }
            })(n);
        }

        // manage active class for thumbnail
        utils.addClass($thumb[_this.core.index], 'active');
        utils.on(_this.core.el, 'onBeforeSlide.lgtm', function () {

            for (var j = 0; j < $thumb.length; j++) {
                utils.removeClass($thumb[j], 'active');
            }

            utils.addClass($thumb[_this.core.index], 'active');
        });

        for (var k = 0; k < $thumb.length; k++) {

            /*jshint loopfunc: true */
            (function (index) {

                utils.on($thumb[index], 'click.lg touchend.lg', function () {

                    setTimeout(function () {

                        // In IE9 and bellow touch does not support
                        // Go to slide if browser does not support css transitions
                        if (_this.thumbClickable && !_this.core.lgBusy || !_this.core.doCss()) {
                            _this.core.index = index;
                            _this.core.slide(_this.core.index, false, true);
                        }
                    }, 50);
                });
            })(k);
        }

        utils.on(_this.core.el, 'onBeforeSlide.lgtm', function () {
            _this.animateThumb(_this.core.index);
        });

        utils.on(window, 'resize.lgthumb orientationchange.lgthumb', function () {
            setTimeout(function () {
                _this.animateThumb(_this.core.index);
                _this.thumbOuterWidth = _this.thumbOuter.offsetWidth;
            }, 200);
        });
    };

    Thumbnail.prototype.setTranslate = function (value) {
        utils.setVendor(this.core.outer.querySelector('.lg-thumb'), 'Transform', 'translate3d(-' + value + 'px, 0px, 0px)');
    };

    Thumbnail.prototype.animateThumb = function (index) {
        var $thumb = this.core.outer.querySelector('.lg-thumb');
        if (this.core.s.animateThumb) {
            var position;
            switch (this.core.s.currentPagerPosition) {
                case 'left':
                    position = 0;
                    break;
                case 'middle':
                    position = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                    break;
                case 'right':
                    position = this.thumbOuterWidth - this.core.s.thumbWidth;
            }
            this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * index - 1 - position;
            if (this.left > this.thumbTotalWidth - this.thumbOuterWidth) {
                this.left = this.thumbTotalWidth - this.thumbOuterWidth;
            }

            if (this.left < 0) {
                this.left = 0;
            }

            if (this.core.lGalleryOn) {
                if (!utils.hasClass($thumb, 'on')) {
                    utils.setVendor(this.core.outer.querySelector('.lg-thumb'), 'TransitionDuration', this.core.s.speed + 'ms');
                }

                if (!this.core.doCss()) {
                    $thumb.style.left = -this.left + 'px';
                }
            } else {
                if (!this.core.doCss()) {
                    $thumb.style.left = -this.left + 'px';
                }
            }

            this.setTranslate(this.left);
        }
    };

    // Enable thumbnail dragging and swiping
    Thumbnail.prototype.enableThumbDrag = function () {

        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isDraging = false;
        var isMoved = false;
        var tempLeft = 0;

        utils.addClass(_this.thumbOuter, 'lg-grab');

        utils.on(_this.core.outer.querySelector('.lg-thumb'), 'mousedown.lgthumb', function (e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                // execute only on .lg-object
                e.preventDefault();
                startCoords = e.pageX;
                isDraging = true;

                // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                _this.core.outer.scrollLeft += 1;
                _this.core.outer.scrollLeft -= 1;

                // *
                _this.thumbClickable = false;
                utils.removeClass(_this.thumbOuter, 'lg-grab');
                utils.addClass(_this.thumbOuter, 'lg-grabbing');
            }
        });

        utils.on(window, 'mousemove.lgthumb', function (e) {
            if (isDraging) {
                tempLeft = _this.left;
                isMoved = true;
                endCoords = e.pageX;

                utils.addClass(_this.thumbOuter, 'lg-dragging');

                tempLeft = tempLeft - (endCoords - startCoords);

                if (tempLeft > _this.thumbTotalWidth - _this.thumbOuterWidth) {
                    tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                }

                if (tempLeft < 0) {
                    tempLeft = 0;
                }

                // move current slide
                _this.setTranslate(tempLeft);
            }
        });

        utils.on(window, 'mouseup.lgthumb', function () {
            if (isMoved) {
                isMoved = false;
                utils.removeClass(_this.thumbOuter, 'lg-dragging');

                _this.left = tempLeft;

                if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                    _this.thumbClickable = true;
                }
            } else {
                _this.thumbClickable = true;
            }

            if (isDraging) {
                isDraging = false;
                utils.removeClass(_this.thumbOuter, 'lg-grabbing');
                utils.addClass(_this.thumbOuter, 'lg-grab');
            }
        });
    };

    Thumbnail.prototype.enableThumbSwipe = function () {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isMoved = false;
        var tempLeft = 0;

        utils.on(_this.core.outer.querySelector('.lg-thumb'), 'touchstart.lg', function (e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                startCoords = e.targetTouches[0].pageX;
                _this.thumbClickable = false;
            }
        });

        utils.on(_this.core.outer.querySelector('.lg-thumb'), 'touchmove.lg', function (e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                endCoords = e.targetTouches[0].pageX;
                isMoved = true;

                utils.addClass(_this.thumbOuter, 'lg-dragging');

                tempLeft = _this.left;

                tempLeft = tempLeft - (endCoords - startCoords);

                if (tempLeft > _this.thumbTotalWidth - _this.thumbOuterWidth) {
                    tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                }

                if (tempLeft < 0) {
                    tempLeft = 0;
                }

                // move current slide
                _this.setTranslate(tempLeft);
            }
        });

        utils.on(_this.core.outer.querySelector('.lg-thumb'), 'touchend.lg', function () {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {

                if (isMoved) {
                    isMoved = false;
                    utils.removeClass(_this.thumbOuter, 'lg-dragging');
                    if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                        _this.thumbClickable = true;
                    }

                    _this.left = tempLeft;
                } else {
                    _this.thumbClickable = true;
                }
            } else {
                _this.thumbClickable = true;
            }
        });
    };

    Thumbnail.prototype.toggle = function () {
        var _this = this;
        if (_this.core.s.toggleThumb) {
            utils.addClass(_this.core.outer, 'lg-can-toggle');
            _this.thumbOuter.insertAdjacentHTML('beforeend', '<button aria-label="Toggle thumbnails" class="lg-toggle-thumb lg-icon"></button>');
            utils.on(_this.core.outer.querySelector('.lg-toggle-thumb'), 'click.lg', function () {
                if (utils.hasClass(_this.core.outer, 'lg-thumb-open')) {
                    utils.removeClass(_this.core.outer, 'lg-thumb-open');
                } else {
                    utils.addClass(_this.core.outer, 'lg-thumb-open');
                }
            });
        }
    };

    Thumbnail.prototype.thumbkeyPress = function () {
        var _this = this;
        utils.on(window, 'keydown.lgthumb', function (e) {
            if (e.keyCode === 38) {
                e.preventDefault();
                utils.addClass(_this.core.outer, 'lg-thumb-open');
            } else if (e.keyCode === 40) {
                e.preventDefault();
                utils.removeClass(_this.core.outer, 'lg-thumb-open');
            }
        });
    };

    Thumbnail.prototype.destroy = function (d) {
        if (this.core.s.thumbnail && this.core.items.length > 1) {
            utils.off(window, '.lgthumb');
            if (!d) {
                this.thumbOuter.parentNode.removeChild(this.thumbOuter);
            }
            utils.removeClass(this.core.outer, 'lg-has-thumb');

            var lgScript = document.getElementsByClassName('lg-script');
            while (lgScript[0]) {
                lgScript[0].parentNode.removeChild(lgScript[0]);
            }
        }
    };

    window.lgModules.thumbnail = Thumbnail;
});

},{}]},{},[1])(1)
});


/***/ }),

/***/ "./node_modules/lg-zoom.js/dist/lg-zoom.js":
/*!*************************************************!*\
  !*** ./node_modules/lg-zoom.js/dist/lg-zoom.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/**!
 * lg-zoom.js | 1.3.0 | October 14th 2020
 * http://sachinchoolur.github.io/lg-zoom.js
 * Copyright (c) 2016 Sachin N; 
 * @license GPLv3 
 */(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.lgZoom = mod.exports;
    }
})(this, function () {
    'use strict';

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    var getUseLeft = function getUseLeft() {
        var useLeft = false;
        var isChrome = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        if (isChrome && parseInt(isChrome[2], 10) < 54) {
            useLeft = true;
        }

        return useLeft;
    };

    var zoomDefaults = {
        scale: 1,
        zoom: true,
        actualSize: true,
        enableZoomAfter: 300,
        useLeftForZoom: getUseLeft()
    };

    var Zoom = function Zoom(element) {

        this.el = element;

        this.core = window.lgData[this.el.getAttribute('lg-uid')];
        this.core.s = _extends({}, zoomDefaults, this.core.s);

        if (this.core.s.zoom && this.core.doCss()) {
            this.init();

            // Store the zoomable timeout value just to clear it while closing
            this.zoomabletimeout = false;

            // Set the initial value center
            this.pageX = window.innerWidth / 2;
            this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
        }

        return this;
    };

    Zoom.prototype.init = function () {

        var _this = this;
        var zoomIcons = '<button type="button" aria-label="Zoom in" id="lg-zoom-in" class="lg-icon"></button><button type="button" aria-label="Zoom out" id="lg-zoom-out" class="lg-icon"></button>';

        if (_this.core.s.actualSize) {
            zoomIcons += '<button type="button" aria-label="Actual size" id="lg-actual-size" class="lg-icon"></button>';
        }

        if (_this.core.s.useLeftForZoom) {
            utils.addClass(_this.core.outer, 'lg-use-left-for-zoom');
        } else {
            utils.addClass(_this.core.outer, 'lg-use-transition-for-zoom');
        }

        this.core.outer.querySelector('.lg-toolbar').insertAdjacentHTML('beforeend', zoomIcons);

        // Add zoomable class
        utils.on(_this.core.el, 'onSlideItemLoad.lgtmzoom', function (event) {

            // delay will be 0 except first time
            var _speed = _this.core.s.enableZoomAfter + event.detail.delay;

            // set _speed value 0 if gallery opened from direct url and if it is first slide
            if (utils.hasClass(document.body, 'lg-from-hash') && event.detail.delay) {

                // will execute only once
                _speed = 0;
            } else {

                // Remove lg-from-hash to enable starting animation.
                utils.removeClass(document.body, 'lg-from-hash');
            }

            _this.zoomabletimeout = setTimeout(function () {
                utils.addClass(_this.core.___slide[event.detail.index], 'lg-zoomable');
            }, _speed + 30);
        });

        var scale = 1;
        /**
         * @desc Image zoom
         * Translate the wrap and scale the image to get better user experience
         *
         * @param {String} scaleVal - Zoom decrement/increment value
         */
        var zoom = function zoom(scaleVal) {

            var image = _this.core.outer.querySelector('.lg-current .lg-image');
            var _x;
            var _y;

            // Find offset manually to avoid issue after zoom
            var offsetX = (window.innerWidth - image.clientWidth) / 2;
            var offsetY = (window.innerHeight - image.clientHeight) / 2 + (document.documentElement.scrollTop || document.body.scrollTop);

            _x = _this.pageX - offsetX;
            _y = _this.pageY - offsetY;

            var x = (scaleVal - 1) * _x;
            var y = (scaleVal - 1) * _y;

            utils.setVendor(image, 'Transform', 'scale3d(' + scaleVal + ', ' + scaleVal + ', 1)');
            image.setAttribute('data-scale', scaleVal);

            if (_this.core.s.useLeftForZoom) {
                image.parentElement.style.left = -x + 'px';
                image.parentElement.style.top = -y + 'px';
            } else {
                utils.setVendor(image.parentElement, 'Transform', 'translate3d(-' + x + 'px, -' + y + 'px, 0)');
            }

            image.parentElement.setAttribute('data-x', x);
            image.parentElement.setAttribute('data-y', y);
        };

        var callScale = function callScale() {
            if (scale > 1) {
                utils.addClass(_this.core.outer, 'lg-zoomed');
            } else {
                _this.resetZoom();
            }

            if (scale < 1) {
                scale = 1;
            }

            zoom(scale);
        };

        var actualSize = function actualSize(event, image, index, fromIcon) {
            var w = image.clientWidth;
            var nw;
            if (_this.core.s.dynamic) {
                nw = _this.core.s.dynamicEl[index].width || image.naturalWidth || w;
            } else {
                nw = _this.core.items[index].getAttribute('data-width') || image.naturalWidth || w;
            }

            var _scale;

            if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
                scale = 1;
            } else {
                if (nw > w) {
                    _scale = nw / w;
                    scale = _scale || 2;
                }
            }

            if (fromIcon) {
                _this.pageX = window.innerWidth / 2;
                _this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
            } else {
                _this.pageX = event.pageX || event.targetTouches[0].pageX;
                _this.pageY = event.pageY || event.targetTouches[0].pageY;
            }

            callScale();
            setTimeout(function () {
                utils.removeClass(_this.core.outer, 'lg-grabbing');
                utils.addClass(_this.core.outer, 'lg-grab');
            }, 10);
        };

        var tapped = false;

        // event triggered after appending slide content
        utils.on(_this.core.el, 'onAferAppendSlide.lgtmzoom', function (event) {

            var index = event.detail.index;

            // Get the current element
            var image = _this.core.___slide[index].querySelector('.lg-image');

            if (!_this.core.isTouch) {
                utils.on(image, 'dblclick', function (event) {
                    actualSize(event, image, index);
                });
            }

            if (_this.core.isTouch) {
                utils.on(image, 'touchstart', function (event) {
                    if (!tapped) {
                        tapped = setTimeout(function () {
                            tapped = null;
                        }, 300);
                    } else {
                        clearTimeout(tapped);
                        tapped = null;
                        actualSize(event, image, index);
                    }

                    event.preventDefault();
                });
            }
        });

        // Update zoom on resize and orientationchange
        utils.on(window, 'resize.lgzoom scroll.lgzoom orientationchange.lgzoom', function () {
            _this.pageX = window.innerWidth / 2;
            _this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
            zoom(scale);
        });

        utils.on(document.getElementById('lg-zoom-out'), 'click.lg', function () {
            if (_this.core.outer.querySelector('.lg-current .lg-image')) {
                scale -= _this.core.s.scale;
                callScale();
            }
        });

        utils.on(document.getElementById('lg-zoom-in'), 'click.lg', function () {
            if (_this.core.outer.querySelector('.lg-current .lg-image')) {
                scale += _this.core.s.scale;
                callScale();
            }
        });

        utils.on(document.getElementById('lg-actual-size'), 'click.lg', function (event) {
            actualSize(event, _this.core.___slide[_this.core.index].querySelector('.lg-image'), _this.core.index, true);
        });

        // Reset zoom on slide change
        utils.on(_this.core.el, 'onBeforeSlide.lgtm', function () {
            scale = 1;
            _this.resetZoom();
        });

        // Drag option after zoom
        if (!_this.core.isTouch) {
            _this.zoomDrag();
        }

        if (_this.core.isTouch) {
            _this.zoomSwipe();
        }
    };

    Zoom.prototype.getModifier = function (rotateValue, axis, el) {
        var originalRotate = rotateValue;
        rotateValue = Math.abs(rotateValue);
        var transformValues = this.getCurrentTransform(el);
        if (!transformValues) {
            return 1;
        }
        var modifier = 1;
        if (axis === 'X') {
            var flipHorizontalValue = Math.sign(parseFloat(transformValues[0]));
            if (rotateValue === 0 || rotateValue === 180) {
                modifier = 1;
            } else if (rotateValue === 90) {
                if (originalRotate === -90 && flipHorizontalValue === 1 || originalRotate === 90 && flipHorizontalValue === -1) {
                    modifier = -1;
                } else {
                    modifier = 1;
                }
            }
            modifier = modifier * flipHorizontalValue;
        } else {
            var flipVerticalValue = Math.sign(parseFloat(transformValues[3]));
            if (rotateValue === 0 || rotateValue === 180) {
                modifier = 1;
            } else if (rotateValue === 90) {
                var sinX = parseFloat(transformValues[1]);
                var sinMinusX = parseFloat(transformValues[2]);
                modifier = Math.sign(sinX * sinMinusX * originalRotate * flipVerticalValue);
            }
            modifier = modifier * flipVerticalValue;
        }
        return modifier;
    };

    Zoom.prototype.getImageSize = function ($image, rotateValue, axis) {
        var imageSizes = {
            y: 'offsetHeight',
            x: 'offsetWidth'
        };
        if (rotateValue === 90) {
            // Swap axis 
            if (axis === 'x') {
                axis = 'y';
            } else {
                axis = 'x';
            }
        }
        return $image[imageSizes[axis]];
    };

    Zoom.prototype.getDragCords = function (e, rotateValue) {
        if (rotateValue === 90) {
            return {
                x: e.pageY,
                y: e.pageX
            };
        } else {
            return {
                x: e.pageX,
                y: e.pageY
            };
        }
    };
    Zoom.prototype.getSwipeCords = function (e, rotateValue) {
        var x = e.targetTouches[0].pageX;
        var y = e.targetTouches[0].pageY;
        if (rotateValue === 90) {
            return {
                x: y,
                y: x
            };
        } else {
            return {
                x: x,
                y: y
            };
        }
    };

    Zoom.prototype.getPossibleDragCords = function ($image, rotateValue) {

        var minY = (this.core.outer.querySelector('.lg').clientHeight - this.getImageSize($image, rotateValue, 'y')) / 2;
        var maxY = Math.abs(this.getImageSize($image, rotateValue, 'y') * Math.abs($image.getAttribute('data-scale')) - this.core.outer.querySelector('.lg').clientHeight + minY);
        var minX = (this.core.outer.querySelector('.lg').clientWidth - this.getImageSize($image, rotateValue, 'x')) / 2;
        var maxX = Math.abs(this.getImageSize($image, rotateValue, 'x') * Math.abs($image.getAttribute('data-scale')) - this.core.outer.querySelector('.lg').clientWidth + minX);
        if (rotateValue === 90) {
            return {
                minY: minX,
                maxY: maxX,
                minX: minY,
                maxX: maxY
            };
        } else {
            return {
                minY: minY,
                maxY: maxY,
                minX: minX,
                maxX: maxX
            };
        }
    };

    Zoom.prototype.getDragAllowedAxises = function ($image, rotateValue) {
        var allowY = this.getImageSize($image, rotateValue, 'y') * $image.getAttribute('data-scale') > this.core.outer.querySelector('.lg').clientHeight;
        var allowX = this.getImageSize($image, rotateValue, 'x') * $image.getAttribute('data-scale') > this.core.outer.querySelector('.lg').clientWidth;
        if (rotateValue === 90) {
            return {
                allowX: allowY,
                allowY: allowX
            };
        } else {
            return {
                allowX: allowX,
                allowY: allowY
            };
        }
    };

    /**
     * 
     * @param {Element} el 
     * @return matrix(cos(X), sin(X), -sin(X), cos(X), 0, 0);
     * Get the current transform value
     */
    Zoom.prototype.getCurrentTransform = function (el) {
        if (!el) {
            return 0;
        }
        var st = window.getComputedStyle(el, null);
        var tm = st.getPropertyValue('-webkit-transform') || st.getPropertyValue('-moz-transform') || st.getPropertyValue('-ms-transform') || st.getPropertyValue('-o-transform') || st.getPropertyValue('transform') || 'none';
        if (tm !== 'none') {
            return tm.split('(')[1].split(')')[0].split(',');
        }
        return 0;
    };

    Zoom.prototype.getCurrentRotation = function (el) {
        if (!el) {
            return 0;
        }
        var values = this.getCurrentTransform(el);
        if (values) {
            return Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
            // If you want rotate in 360
            //return (angle < 0 ? angle + 360 : angle);
        }
        return 0;
    };

    // Reset zoom effect
    Zoom.prototype.resetZoom = function () {
        utils.removeClass(this.core.outer, 'lg-zoomed');
        for (var i = 0; i < this.core.___slide.length; i++) {
            if (this.core.___slide[i].querySelector('.lg-img-wrap')) {
                this.core.___slide[i].querySelector('.lg-img-wrap').removeAttribute('style');
                this.core.___slide[i].querySelector('.lg-img-wrap').removeAttribute('data-x');
                this.core.___slide[i].querySelector('.lg-img-wrap').removeAttribute('data-y');
            }
        }

        for (var j = 0; j < this.core.___slide.length; j++) {
            if (this.core.___slide[j].querySelector('.lg-image')) {
                this.core.___slide[j].querySelector('.lg-image').removeAttribute('style');
                this.core.___slide[j].querySelector('.lg-image').removeAttribute('data-scale');
            }
        }

        // Reset pagx pagy values to center
        this.pageX = window.innerWidth / 2;
        this.pageY = window.innerHeight / 2 + (document.documentElement.scrollTop || document.body.scrollTop);
    };

    Zoom.prototype.zoomSwipe = function () {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isMoved = false;

        // Allow x direction drag
        var allowX = false;

        // Allow Y direction drag
        var allowY = false;

        var rotateValue = 0;
        var rotateEl;

        for (var i = 0; i < _this.core.___slide.length; i++) {

            /*jshint loopfunc: true */
            utils.on(_this.core.___slide[i], 'touchstart.lg', function (e) {

                if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
                    var $image = _this.core.___slide[_this.core.index].querySelector('.lg-object');

                    rotateEl = _this.core.___slide[_this.core.index].querySelector('.lg-img-rotate');
                    rotateValue = _this.getCurrentRotation(rotateEl);

                    var dragAllowedAxises = _this.getDragAllowedAxises($image, Math.abs(rotateValue));
                    allowY = dragAllowedAxises.allowY;
                    allowX = dragAllowedAxises.allowX;

                    if (allowX || allowY) {
                        e.preventDefault();
                        startCoords = _this.getSwipeCords(e, Math.abs(rotateValue));
                    }
                }
            });
        }

        for (var j = 0; j < _this.core.___slide.length; j++) {

            /*jshint loopfunc: true */
            utils.on(_this.core.___slide[j], 'touchmove.lg', function (e) {

                if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {

                    var _el = _this.core.___slide[_this.core.index].querySelector('.lg-img-wrap');
                    var distanceX;
                    var distanceY;

                    e.preventDefault();
                    isMoved = true;

                    endCoords = _this.getSwipeCords(e, Math.abs(rotateValue));

                    // reset opacity and transition duration
                    utils.addClass(_this.core.outer, 'lg-zoom-dragging');

                    if (allowY) {
                        distanceY = -Math.abs(_el.getAttribute('data-y')) + (endCoords.y - startCoords.y) * _this.getModifier(rotateValue, 'Y', rotateEl);
                    } else {
                        distanceY = -Math.abs(_el.getAttribute('data-y'));
                    }

                    if (allowX) {
                        distanceX = -Math.abs(_el.getAttribute('data-x')) + (endCoords.x - startCoords.x) * _this.getModifier(rotateValue, 'X', rotateEl);
                    } else {
                        distanceX = -Math.abs(_el.getAttribute('data-x'));
                    }

                    if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {

                        if (_this.core.s.useLeftForZoom) {
                            _el.style.left = distanceX + 'px';
                            _el.style.top = distanceY + 'px';
                        } else {
                            utils.setVendor(_el, 'Transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
                        }
                    }
                }
            });
        }

        for (var k = 0; k < _this.core.___slide.length; k++) {

            /*jshint loopfunc: true */
            utils.on(_this.core.___slide[k], 'touchend.lg', function () {
                if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
                    if (isMoved) {
                        isMoved = false;
                        utils.removeClass(_this.core.outer, 'lg-zoom-dragging');
                        _this.touchendZoom(startCoords, endCoords, allowX, allowY, rotateValue);
                    }
                }
            });
        }
    };

    Zoom.prototype.zoomDrag = function () {

        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isDraging = false;
        var isMoved = false;

        // Allow x direction drag
        var allowX = false;

        // Allow Y direction drag
        var allowY = false;

        var rotateValue = 0;
        var rotateEl;

        for (var i = 0; i < _this.core.___slide.length; i++) {

            /*jshint loopfunc: true */
            utils.on(_this.core.___slide[i], 'mousedown.lgzoom', function (e) {

                // execute only on .lg-object
                var $image = _this.core.___slide[_this.core.index].querySelector('.lg-object');

                rotateEl = _this.core.___slide[_this.core.index].querySelector('.lg-img-rotate');
                rotateValue = _this.getCurrentRotation(rotateEl);

                var dragAllowedAxises = _this.getDragAllowedAxises($image, Math.abs(rotateValue));
                allowY = dragAllowedAxises.allowY;
                allowX = dragAllowedAxises.allowX;

                if (utils.hasClass(_this.core.outer, 'lg-zoomed')) {
                    if (utils.hasClass(e.target, 'lg-object') && (allowX || allowY)) {
                        e.preventDefault();
                        startCoords = _this.getDragCords(e, Math.abs(rotateValue));

                        isDraging = true;

                        // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                        _this.core.outer.scrollLeft += 1;
                        _this.core.outer.scrollLeft -= 1;

                        utils.removeClass(_this.core.outer, 'lg-grab');
                        utils.addClass(_this.core.outer, 'lg-grabbing');
                    }
                }
            });
        }

        utils.on(window, 'mousemove.lgzoom', function (e) {
            if (isDraging) {
                var _el = _this.core.___slide[_this.core.index].querySelector('.lg-img-wrap');
                var distanceX;
                var distanceY;

                isMoved = true;
                endCoords = _this.getDragCords(e, Math.abs(rotateValue));

                // reset opacity and transition duration
                utils.addClass(_this.core.outer, 'lg-zoom-dragging');

                if (allowY) {
                    distanceY = -Math.abs(_el.getAttribute('data-y')) + (endCoords.y - startCoords.y) * _this.getModifier(rotateValue, 'Y', rotateEl);
                } else {
                    distanceY = -Math.abs(_el.getAttribute('data-y'));
                }

                if (allowX) {
                    distanceX = -Math.abs(_el.getAttribute('data-x')) + (endCoords.x - startCoords.x) * _this.getModifier(rotateValue, 'X', rotateEl);
                } else {
                    distanceX = -Math.abs(_el.getAttribute('data-x'));
                }

                if (_this.core.s.useLeftForZoom) {
                    _el.style.left = distanceX + 'px';
                    _el.style.top = distanceY + 'px';
                } else {
                    utils.setVendor(_el, 'Transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
                }
            }
        });

        utils.on(window, 'mouseup.lgzoom', function (e) {

            if (isDraging) {
                isDraging = false;
                utils.removeClass(_this.core.outer, 'lg-zoom-dragging');

                // Fix for chrome mouse move on click
                if (isMoved && (startCoords.x !== endCoords.x || startCoords.y !== endCoords.y)) {
                    endCoords = _this.getDragCords(e, Math.abs(rotateValue));
                    _this.touchendZoom(startCoords, endCoords, allowX, allowY, rotateValue);
                }

                isMoved = false;
            }

            utils.removeClass(_this.core.outer, 'lg-grabbing');
            utils.addClass(_this.core.outer, 'lg-grab');
        });
    };

    Zoom.prototype.touchendZoom = function (startCoords, endCoords, allowX, allowY, rotateValue) {

        var _this = this;
        var _el = _this.core.___slide[_this.core.index].querySelector('.lg-img-wrap');
        var image = _this.core.___slide[_this.core.index].querySelector('.lg-object');
        var rotateEl = _this.core.___slide[_this.core.index].querySelector('.lg-img-rotate');
        var distanceX = -Math.abs(_el.getAttribute('data-x')) + (endCoords.x - startCoords.x) * _this.getModifier(rotateValue, 'X', rotateEl);
        var distanceY = -Math.abs(_el.getAttribute('data-y')) + (endCoords.y - startCoords.y) * _this.getModifier(rotateValue, 'Y', rotateEl);
        var possibleDragCords = _this.getPossibleDragCords(image, Math.abs(rotateValue));

        if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {
            if (allowY) {
                if (distanceY <= -possibleDragCords.maxY) {
                    distanceY = -possibleDragCords.maxY;
                } else if (distanceY >= -possibleDragCords.minY) {
                    distanceY = -possibleDragCords.minY;
                }
            }

            if (allowX) {
                if (distanceX <= -possibleDragCords.maxX) {
                    distanceX = -possibleDragCords.maxX;
                } else if (distanceX >= -possibleDragCords.minX) {
                    distanceX = -possibleDragCords.minX;
                }
            }

            if (allowY) {
                _el.setAttribute('data-y', Math.abs(distanceY));
            } else {
                distanceY = -Math.abs(_el.getAttribute('data-y'));
            }

            if (allowX) {
                _el.setAttribute('data-x', Math.abs(distanceX));
            } else {
                distanceX = -Math.abs(_el.getAttribute('data-x'));
            }

            if (_this.core.s.useLeftForZoom) {
                _el.style.left = distanceX + 'px';
                _el.style.top = distanceY + 'px';
            } else {
                utils.setVendor(_el, 'Transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
            }
        }
    };

    Zoom.prototype.destroy = function () {

        var _this = this;

        // Unbind all events added by lightGallery zoom plugin
        utils.off(_this.core.el, '.lgzoom');
        utils.off(window, '.lgzoom');
        for (var i = 0; i < _this.core.___slide.length; i++) {
            utils.off(_this.core.___slide[i], '.lgzoom');
        }

        utils.off(_this.core.el, '.lgtmzoom');
        _this.resetZoom();
        clearTimeout(_this.zoomabletimeout);
        _this.zoomabletimeout = false;
    };

    window.lgModules.zoom = Zoom;
});

},{}]},{},[1])(1)
});


/***/ }),

/***/ "./node_modules/lightgallery.js/lib/js/lg-utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/lightgallery.js/lib/js/lg-utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var utils = {
        getAttribute: function getAttribute(el, label) {
            return el[label];
        },

        setAttribute: function setAttribute(el, label, value) {
            el[label] = value;
        },
        wrap: function wrap(el, className) {
            if (!el) {
                return;
            }

            var wrapper = document.createElement('div');
            wrapper.className = className;
            el.parentNode.insertBefore(wrapper, el);
            el.parentNode.removeChild(el);
            wrapper.appendChild(el);
        },

        addClass: function addClass(el, className) {
            if (!el) {
                return;
            }

            if (el.classList) {
                el.classList.add(className);
            } else {
                el.className += ' ' + className;
            }
        },

        removeClass: function removeClass(el, className) {
            if (!el) {
                return;
            }

            if (el.classList) {
                el.classList.remove(className);
            } else {
                el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        },

        hasClass: function hasClass(el, className) {
            if (el.classList) {
                return el.classList.contains(className);
            } else {
                return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
            }
        },

        // ex Transform
        // ex TransitionTimingFunction
        setVendor: function setVendor(el, property, value) {
            if (!el) {
                return;
            }

            el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
            el.style['webkit' + property] = value;
            el.style['moz' + property] = value;
            el.style['ms' + property] = value;
            el.style['o' + property] = value;
        },

        trigger: function trigger(el, event) {
            var detail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            if (!el) {
                return;
            }

            var customEvent = new CustomEvent(event, {
                detail: detail
            });
            el.dispatchEvent(customEvent);
        },

        Listener: {
            uid: 0
        },
        on: function on(el, events, fn) {
            var _this = this;

            if (!el) {
                return;
            }

            events.split(' ').forEach(function (event) {
                var _id = _this.getAttribute(el, 'lg-event-uid') || '';
                utils.Listener.uid++;
                _id += '&' + utils.Listener.uid;
                _this.setAttribute(el, 'lg-event-uid', _id);
                utils.Listener[event + utils.Listener.uid] = fn;
                el.addEventListener(event.split('.')[0], fn, false);
            });
        },

        off: function off(el, event) {
            if (!el) {
                return;
            }

            var _id = this.getAttribute(el, 'lg-event-uid');
            if (_id) {
                _id = _id.split('&');
                for (var i = 0; i < _id.length; i++) {
                    if (_id[i]) {
                        var _event = event + _id[i];
                        if (_event.substring(0, 1) === '.') {
                            for (var key in utils.Listener) {
                                if (utils.Listener.hasOwnProperty(key)) {
                                    if (key.split('.').indexOf(_event.split('.')[1]) > -1) {
                                        el.removeEventListener(key.split('.')[0], utils.Listener[key]);
                                        this.setAttribute(el, 'lg-event-uid', this.getAttribute(el, 'lg-event-uid').replace('&' + _id[i], ''));
                                        delete utils.Listener[key];
                                    }
                                }
                            }
                        } else {
                            el.removeEventListener(_event.split('.')[0], utils.Listener[_event]);
                            this.setAttribute(el, 'lg-event-uid', this.getAttribute(el, 'lg-event-uid').replace('&' + _id[i], ''));
                            delete utils.Listener[_event];
                        }
                    }
                }
            }
        },

        param: function param(obj) {
            return Object.keys(obj).map(function (k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
            }).join('&');
        }
    };

    exports.default = utils;
});

/***/ }),

/***/ "./node_modules/lightgallery.js/lib/js/lightgallery.js":
/*!*************************************************************!*\
  !*** ./node_modules/lightgallery.js/lib/js/lightgallery.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./lg-utils */ "./node_modules/lightgallery.js/lib/js/lg-utils.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var mod; }
})(this, function (_lgUtils) {
    'use strict';

    var _lgUtils2 = _interopRequireDefault(_lgUtils);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    /** Polyfill the CustomEvent() constructor functionality in Internet Explorer 9 and higher */
    (function () {

        if (typeof window.CustomEvent === 'function') {
            return false;
        }

        function CustomEvent(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: undefined
            };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }

        CustomEvent.prototype = window.Event.prototype;

        window.CustomEvent = CustomEvent;
    })();

    window.utils = _lgUtils2.default;
    window.lgData = {
        uid: 0
    };

    window.lgModules = {};
    var defaults = {

        mode: 'lg-slide',

        // Ex : 'ease'
        cssEasing: 'ease',

        //'for jquery animation'
        easing: 'linear',
        speed: 600,
        height: '100%',
        width: '100%',
        addClass: '',
        startClass: 'lg-start-zoom',
        backdropDuration: 150,

        // Set 0, if u don't want to hide the controls 
        hideBarsDelay: 6000,

        useLeft: false,

        // aria-labelledby attribute fot gallery
        ariaLabelledby: '',

        //aria-describedby attribute for gallery
        ariaDescribedby: '',

        closable: true,
        loop: true,
        escKey: true,
        keyPress: true,
        controls: true,
        slideEndAnimatoin: true,
        hideControlOnEnd: false,
        mousewheel: false,

        getCaptionFromTitleOrAlt: true,

        // .lg-item || '.lg-sub-html'
        appendSubHtmlTo: '.lg-sub-html',

        subHtmlSelectorRelative: false,

        /**
         * @desc number of preload slides
         * will exicute only after the current slide is fully loaded.
         *
         * @ex you clicked on 4th image and if preload = 1 then 3rd slide and 5th
         * slide will be loaded in the background after the 4th slide is fully loaded..
         * if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
         *
         */
        preload: 1,
        showAfterLoad: true,
        selector: '',
        selectWithin: '',
        nextHtml: '',
        prevHtml: '',

        // 0, 1
        index: false,

        iframeMaxWidth: '100%',

        download: true,
        counter: true,
        appendCounterTo: '.lg-toolbar',

        swipeThreshold: 50,
        enableSwipe: true,
        enableDrag: true,

        dynamic: false,
        dynamicEl: [],
        galleryId: 1,
        supportLegacyBrowser: true
    };

    function Plugin(element, options) {

        // Current lightGallery element
        this.el = element;

        // lightGallery settings
        this.s = _extends({}, defaults, options);

        // When using dynamic mode, ensure dynamicEl is an array
        if (this.s.dynamic && this.s.dynamicEl !== 'undefined' && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) {
            throw 'When using dynamic mode, you must also define dynamicEl as an Array.';
        }

        // lightGallery modules
        this.modules = {};

        // false when lightgallery complete first slide;
        this.lGalleryOn = false;

        this.lgBusy = false;

        // Timeout function for hiding controls;
        this.hideBartimeout = false;

        // To determine browser supports for touch events;
        this.isTouch = 'ontouchstart' in document.documentElement;

        // Disable hideControlOnEnd if sildeEndAnimation is true
        if (this.s.slideEndAnimatoin) {
            this.s.hideControlOnEnd = false;
        }

        this.items = [];

        // Gallery items
        if (this.s.dynamic) {
            this.items = this.s.dynamicEl;
        } else {
            if (this.s.selector === 'this') {
                this.items.push(this.el);
            } else if (this.s.selector !== '') {
                if (this.s.selectWithin) {
                    this.items = document.querySelector(this.s.selectWithin).querySelectorAll(this.s.selector);
                } else {
                    this.items = this.el.querySelectorAll(this.s.selector);
                }
            } else {
                this.items = this.el.children;
            }
        }

        // .lg-item

        this.___slide = '';

        // .lg-outer
        this.outer = '';

        this.init();

        return this;
    }

    Plugin.prototype.init = function () {

        var _this = this;

        // s.preload should not be more than $item.length
        if (_this.s.preload > _this.items.length) {
            _this.s.preload = _this.items.length;
        }

        // if dynamic option is enabled execute immediately
        var _hash = window.location.hash;
        if (_hash.indexOf('lg=' + this.s.galleryId) > 0) {

            _this.index = parseInt(_hash.split('&slide=')[1], 10);

            _lgUtils2.default.addClass(document.body, 'lg-from-hash');
            if (!_lgUtils2.default.hasClass(document.body, 'lg-on')) {
                _lgUtils2.default.addClass(document.body, 'lg-on');
                setTimeout(function () {
                    _this.build(_this.index);
                });
            }
        }

        if (_this.s.dynamic) {

            _lgUtils2.default.trigger(this.el, 'onBeforeOpen');

            _this.index = _this.s.index || 0;

            // prevent accidental double execution
            if (!_lgUtils2.default.hasClass(document.body, 'lg-on')) {
                _lgUtils2.default.addClass(document.body, 'lg-on');
                setTimeout(function () {
                    _this.build(_this.index);
                });
            }
        } else {

            for (var i = 0; i < _this.items.length; i++) {

                /*jshint loopfunc: true */
                (function (index) {

                    // Using different namespace for click because click event should not unbind if selector is same object('this')
                    _lgUtils2.default.on(_this.items[index], 'click.lgcustom', function (e) {

                        e.preventDefault();

                        _lgUtils2.default.trigger(_this.el, 'onBeforeOpen');

                        _this.index = _this.s.index || index;

                        if (!_lgUtils2.default.hasClass(document.body, 'lg-on')) {
                            _this.build(_this.index);
                            _lgUtils2.default.addClass(document.body, 'lg-on');
                        }
                    });
                })(i);
            }
        }
    };

    Plugin.prototype.build = function (index) {

        var _this = this;

        _this.structure();

        for (var key in window.lgModules) {
            _this.modules[key] = new window.lgModules[key](_this.el);
        }

        // initiate slide function
        _this.slide(index, false, false);

        if (_this.s.keyPress) {
            _this.keyPress();
        }

        if (_this.items.length > 1) {

            _this.arrow();

            setTimeout(function () {
                _this.enableDrag();
                _this.enableSwipe();
            }, 50);

            if (_this.s.mousewheel) {
                _this.mousewheel();
            }
        }

        _this.counter();

        _this.closeGallery();

        _lgUtils2.default.trigger(_this.el, 'onAfterOpen');

        // Hide controllers if mouse doesn't move for some period
        if (_this.s.hideBarsDelay > 0) {

            // Hide controls if user doesn't use mouse or touch after opening gallery
            var initialHideBarTimeout = setTimeout(function () {
                _lgUtils2.default.addClass(_this.outer, 'lg-hide-items');
            }, _this.s.hideBarsDelay);
            _lgUtils2.default.on(_this.outer, 'mousemove.lg click.lg touchstart.lg', function () {

                // Cancel initalHideBarTimout if user uses mouse or touch events
                // Before it fires
                clearTimeout(initialHideBarTimeout);

                _lgUtils2.default.removeClass(_this.outer, 'lg-hide-items');

                clearTimeout(_this.hideBartimeout);

                // Timeout will be cleared on each slide movement also
                _this.hideBartimeout = setTimeout(function () {
                    _lgUtils2.default.addClass(_this.outer, 'lg-hide-items');
                }, _this.s.hideBarsDelay);
            });
        }
    };

    Plugin.prototype.structure = function () {
        var list = '';
        var controls = '';
        var i = 0;
        var subHtmlCont = '';
        var template;
        var _this = this;

        document.body.insertAdjacentHTML('beforeend', '<div class="lg-backdrop"></div>');
        _lgUtils2.default.setVendor(document.querySelector('.lg-backdrop'), 'TransitionDuration', this.s.backdropDuration + 'ms');

        // Create gallery items
        for (i = 0; i < this.items.length; i++) {
            list += '<div class="lg-item"></div>';
        }

        // Create controlls
        if (this.s.controls && this.items.length > 1) {
            controls = '<div class="lg-actions">' + '<button type="button" aria-label="Previous slide" class="lg-prev lg-icon">' + this.s.prevHtml + '</button>' + '<button type="button" aria-label="Next slide" class="lg-next lg-icon">' + this.s.nextHtml + '</button>' + '</div>';
        }

        if (this.s.appendSubHtmlTo === '.lg-sub-html') {
            subHtmlCont = '<div role="status" aria-live="polite" class="lg-sub-html"></div>';
        }

        var ariaLabelledby = this.s.ariaLabelledby ? 'aria-labelledby="' + this.s.ariaLabelledby + '"' : '';
        var ariaDescribedby = this.s.ariaDescribedby ? 'aria-describedby="' + this.s.ariaDescribedby + '"' : '';

        template = '<div tabindex="-1" aria-modal="true" ' + ariaLabelledby + ' ' + ariaDescribedby + ' role="dialog" class="lg-outer ' + this.s.addClass + ' ' + this.s.startClass + '">' + '<div class="lg" style="width:' + this.s.width + '; height:' + this.s.height + '">' + '<div class="lg-inner">' + list + '</div>' + '<div class="lg-toolbar lg-group">' + '<button type="button" aria-label="Close gallery" class="lg-close lg-icon"></button>' + '</div>' + controls + subHtmlCont + '</div>' + '</div>';

        document.body.insertAdjacentHTML('beforeend', template);
        this.outer = document.querySelector('.lg-outer');
        this.outer.focus();
        this.___slide = this.outer.querySelectorAll('.lg-item');

        if (this.s.useLeft) {
            _lgUtils2.default.addClass(this.outer, 'lg-use-left');

            // Set mode lg-slide if use left is true;
            this.s.mode = 'lg-slide';
        } else {
            _lgUtils2.default.addClass(this.outer, 'lg-use-css3');
        }

        // For fixed height gallery
        _this.setTop();
        _lgUtils2.default.on(window, 'resize.lg orientationchange.lg', function () {
            setTimeout(function () {
                _this.setTop();
            }, 100);
        });

        // add class lg-current to remove initial transition
        _lgUtils2.default.addClass(this.___slide[this.index], 'lg-current');

        // add Class for css support and transition mode
        if (this.doCss()) {
            _lgUtils2.default.addClass(this.outer, 'lg-css3');
        } else {
            _lgUtils2.default.addClass(this.outer, 'lg-css');

            // Set speed 0 because no animation will happen if browser doesn't support css3
            this.s.speed = 0;
        }

        _lgUtils2.default.addClass(this.outer, this.s.mode);

        if (this.s.enableDrag && this.items.length > 1) {
            _lgUtils2.default.addClass(this.outer, 'lg-grab');
        }

        if (this.s.showAfterLoad) {
            _lgUtils2.default.addClass(this.outer, 'lg-show-after-load');
        }

        if (this.doCss()) {
            var inner = this.outer.querySelector('.lg-inner');
            _lgUtils2.default.setVendor(inner, 'TransitionTimingFunction', this.s.cssEasing);
            _lgUtils2.default.setVendor(inner, 'TransitionDuration', this.s.speed + 'ms');
        }

        setTimeout(function () {
            _lgUtils2.default.addClass(document.querySelector('.lg-backdrop'), 'in');
        });

        setTimeout(function () {
            _lgUtils2.default.addClass(_this.outer, 'lg-visible');
        }, this.s.backdropDuration);

        if (this.s.download) {
            this.outer.querySelector('.lg-toolbar').insertAdjacentHTML('beforeend', '<a id="lg-download" aria-label="Download" target="_blank" download class="lg-download lg-icon"></a>');
        }

        // Store the current scroll top value to scroll back after closing the gallery..
        this.prevScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    };

    // For fixed height gallery
    Plugin.prototype.setTop = function () {
        if (this.s.height !== '100%') {
            var wH = window.innerHeight;
            var top = (wH - parseInt(this.s.height, 10)) / 2;
            var lGallery = this.outer.querySelector('.lg');
            if (wH >= parseInt(this.s.height, 10)) {
                lGallery.style.top = top + 'px';
            } else {
                lGallery.style.top = '0px';
            }
        }
    };

    // Find css3 support
    Plugin.prototype.doCss = function () {
        // check for css animation support
        var support = function support() {
            var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
            var root = document.documentElement;
            var i = 0;
            for (i = 0; i < transition.length; i++) {
                if (transition[i] in root.style) {
                    return true;
                }
            }
        };

        if (support()) {
            return true;
        }

        return false;
    };

    /**
     *  @desc Check the given src is video
     *  @param {String} src
     *  @return {Object} video type
     *  Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
     */
    Plugin.prototype.isVideo = function (src, index) {

        var html;
        if (this.s.dynamic) {
            html = this.s.dynamicEl[index].html;
        } else {
            html = this.items[index].getAttribute('data-html');
        }

        if (!src && html) {
            return {
                html5: true
            };
        }

        var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
        var vimeo = src.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
        var dailymotion = src.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
        var vk = src.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);

        if (youtube) {
            return {
                youtube: youtube
            };
        } else if (vimeo) {
            return {
                vimeo: vimeo
            };
        } else if (dailymotion) {
            return {
                dailymotion: dailymotion
            };
        } else if (vk) {
            return {
                vk: vk
            };
        }
    };

    /**
     *  @desc Create image counter
     *  Ex: 1/10
     */
    Plugin.prototype.counter = function () {
        if (this.s.counter) {
            this.outer.querySelector(this.s.appendCounterTo).insertAdjacentHTML('beforeend', '<div id="lg-counter" role="status" aria-live="polite"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.items.length + '</span></div>');
        }
    };

    /**
     *  @desc add sub-html into the slide
     *  @param {Number} index - index of the slide
     */
    Plugin.prototype.addHtml = function (index) {
        var subHtml = null;
        var currentEle;
        if (this.s.dynamic) {
            subHtml = this.s.dynamicEl[index].subHtml;
        } else {
            currentEle = this.items[index];
            subHtml = currentEle.getAttribute('data-sub-html');
            if (this.s.getCaptionFromTitleOrAlt && !subHtml) {
                subHtml = currentEle.getAttribute('title');
                if (subHtml && currentEle.querySelector('img')) {
                    subHtml = currentEle.querySelector('img').getAttribute('alt');
                }
            }
        }

        if (typeof subHtml !== 'undefined' && subHtml !== null) {

            // get first letter of subhtml
            // if first letter starts with . or # get the html form the jQuery object
            var fL = subHtml.substring(0, 1);
            if (fL === '.' || fL === '#') {
                if (this.s.subHtmlSelectorRelative && !this.s.dynamic) {
                    subHtml = currentEle.querySelector(subHtml).innerHTML;
                } else {
                    subHtml = document.querySelector(subHtml).innerHTML;
                }
            }
        } else {
            subHtml = '';
        }

        if (this.s.appendSubHtmlTo === '.lg-sub-html') {
            this.outer.querySelector(this.s.appendSubHtmlTo).innerHTML = subHtml;
        } else {
            this.___slide[index].insertAdjacentHTML('beforeend', subHtml);
        }

        // Add lg-empty-html class if title doesn't exist
        if (typeof subHtml !== 'undefined' && subHtml !== null) {
            if (subHtml === '') {
                _lgUtils2.default.addClass(this.outer.querySelector(this.s.appendSubHtmlTo), 'lg-empty-html');
            } else {
                _lgUtils2.default.removeClass(this.outer.querySelector(this.s.appendSubHtmlTo), 'lg-empty-html');
            }
        }

        _lgUtils2.default.trigger(this.el, 'onAfterAppendSubHtml', {
            index: index
        });
    };

    /**
     *  @desc Preload slides
     *  @param {Number} index - index of the slide
     */
    Plugin.prototype.preload = function (index) {
        var i = 1;
        var j = 1;
        for (i = 1; i <= this.s.preload; i++) {
            if (i >= this.items.length - index) {
                break;
            }

            this.loadContent(index + i, false, 0);
        }

        for (j = 1; j <= this.s.preload; j++) {
            if (index - j < 0) {
                break;
            }

            this.loadContent(index - j, false, 0);
        }
    };

    /**
     *  @desc Load slide content into slide.
     *  @param {Number} index - index of the slide.
     *  @param {Boolean} rec - if true call loadcontent() function again.
     *  @param {Boolean} delay - delay for adding complete class. it is 0 except first time.
     */
    Plugin.prototype.loadContent = function (index, rec, delay) {

        var _this = this;
        var _hasPoster = false;
        var _img;
        var _src;
        var _poster;
        var _srcset;
        var _sizes;
        var _html;
        var _alt;
        var getResponsiveSrc = function getResponsiveSrc(srcItms) {
            var rsWidth = [];
            var rsSrc = [];
            for (var i = 0; i < srcItms.length; i++) {
                var __src = srcItms[i].split(' ');

                // Manage empty space
                if (__src[0] === '') {
                    __src.splice(0, 1);
                }

                rsSrc.push(__src[0]);
                rsWidth.push(__src[1]);
            }

            var wWidth = window.innerWidth;
            for (var j = 0; j < rsWidth.length; j++) {
                if (parseInt(rsWidth[j], 10) > wWidth) {
                    _src = rsSrc[j];
                    break;
                }
            }
        };

        if (_this.s.dynamic) {

            if (_this.s.dynamicEl[index].poster) {
                _hasPoster = true;
                _poster = _this.s.dynamicEl[index].poster;
            }

            _html = _this.s.dynamicEl[index].html;
            _src = _this.s.dynamicEl[index].src;
            _alt = _this.s.dynamicEl[index].alt;

            if (_this.s.dynamicEl[index].responsive) {
                var srcDyItms = _this.s.dynamicEl[index].responsive.split(',');
                getResponsiveSrc(srcDyItms);
            }

            _srcset = _this.s.dynamicEl[index].srcset;
            _sizes = _this.s.dynamicEl[index].sizes;
        } else {

            if (_this.items[index].getAttribute('data-poster')) {
                _hasPoster = true;
                _poster = _this.items[index].getAttribute('data-poster');
            }

            _html = _this.items[index].getAttribute('data-html');
            _src = _this.items[index].getAttribute('href') || _this.items[index].getAttribute('data-src');
            _alt = _this.items[index].getAttribute('title');

            if (_this.items[index].querySelector('img')) {
                _alt = _alt || _this.items[index].querySelector('img').getAttribute('alt');
            }

            if (_this.items[index].getAttribute('data-responsive')) {
                var srcItms = _this.items[index].getAttribute('data-responsive').split(',');
                getResponsiveSrc(srcItms);
            }

            _srcset = _this.items[index].getAttribute('data-srcset');
            _sizes = _this.items[index].getAttribute('data-sizes');
        }

        //if (_src || _srcset || _sizes || _poster) {

        var iframe = false;
        if (_this.s.dynamic) {
            if (_this.s.dynamicEl[index].iframe) {
                iframe = true;
            }
        } else {
            if (_this.items[index].getAttribute('data-iframe') === 'true') {
                iframe = true;
            }
        }

        var _isVideo = _this.isVideo(_src, index);
        if (!_lgUtils2.default.hasClass(_this.___slide[index], 'lg-loaded')) {
            if (iframe) {
                _this.___slide[index].insertAdjacentHTML('afterbegin', '<div class="lg-video-cont" style="max-width:' + _this.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + _src + '"  allowfullscreen="true"></iframe></div></div>');
            } else if (_hasPoster) {
                var videoClass = '';
                if (_isVideo && _isVideo.youtube) {
                    videoClass = 'lg-has-youtube';
                } else if (_isVideo && _isVideo.vimeo) {
                    videoClass = 'lg-has-vimeo';
                } else {
                    videoClass = 'lg-has-html5';
                }

                _this.___slide[index].insertAdjacentHTML('beforeend', '<div class="lg-video-cont ' + videoClass + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + _poster + '" /></div></div>');
            } else if (_isVideo) {
                _this.___slide[index].insertAdjacentHTML('beforeend', '<div class="lg-video-cont "><div class="lg-video"></div></div>');
                _lgUtils2.default.trigger(_this.el, 'hasVideo', {
                    index: index,
                    src: _src,
                    html: _html
                });
            } else {
                _alt = _alt ? 'alt="' + _alt + '"' : '';
                _this.___slide[index].insertAdjacentHTML('beforeend', '<div class="lg-img-wrap"><img class="lg-object lg-image" ' + _alt + ' src="' + _src + '" /></div>');
            }

            _lgUtils2.default.trigger(_this.el, 'onAferAppendSlide', {
                index: index
            });

            _img = _this.___slide[index].querySelector('.lg-object');
            if (_sizes) {
                _img.setAttribute('sizes', _sizes);
            }

            if (_srcset) {
                _img.setAttribute('srcset', _srcset);

                if (this.s.supportLegacyBrowser) {
                    try {
                        picturefill({
                            elements: [_img[0]]
                        });
                    } catch (e) {
                        console.warn('If you want srcset to be supported for older browsers, ' + 'please include picturefil javascript library in your document.');
                    }
                }
            }

            if (this.s.appendSubHtmlTo !== '.lg-sub-html') {
                _this.addHtml(index);
            }

            _lgUtils2.default.addClass(_this.___slide[index], 'lg-loaded');
        }

        _lgUtils2.default.on(_this.___slide[index].querySelector('.lg-object'), 'load.lg error.lg', function () {

            // For first time add some delay for displaying the start animation.
            var _speed = 0;

            // Do not change the delay value because it is required for zoom plugin.
            // If gallery opened from direct url (hash) speed value should be 0
            if (delay && !_lgUtils2.default.hasClass(document.body, 'lg-from-hash')) {
                _speed = delay;
            }

            setTimeout(function () {
                _lgUtils2.default.addClass(_this.___slide[index], 'lg-complete');

                _lgUtils2.default.trigger(_this.el, 'onSlideItemLoad', {
                    index: index,
                    delay: delay || 0
                });
            }, _speed);
        });

        // @todo check load state for html5 videos
        if (_isVideo && _isVideo.html5 && !_hasPoster) {
            _lgUtils2.default.addClass(_this.___slide[index], 'lg-complete');
        }

        if (rec === true) {
            if (!_lgUtils2.default.hasClass(_this.___slide[index], 'lg-complete')) {
                _lgUtils2.default.on(_this.___slide[index].querySelector('.lg-object'), 'load.lg error.lg', function () {
                    _this.preload(index);
                });
            } else {
                _this.preload(index);
            }
        }

        //}
    };

    /**
    *   @desc slide function for lightgallery
        ** Slide() gets call on start
        ** ** Set lg.on true once slide() function gets called.
        ** Call loadContent() on slide() function inside setTimeout
        ** ** On first slide we do not want any animation like slide of fade
        ** ** So on first slide( if lg.on if false that is first slide) loadContent() should start loading immediately
        ** ** Else loadContent() should wait for the transition to complete.
        ** ** So set timeout s.speed + 50
    <=> ** loadContent() will load slide content in to the particular slide
        ** ** It has recursion (rec) parameter. if rec === true loadContent() will call preload() function.
        ** ** preload will execute only when the previous slide is fully loaded (images iframe)
        ** ** avoid simultaneous image load
    <=> ** Preload() will check for s.preload value and call loadContent() again accoring to preload value
        ** loadContent()  <====> Preload();
    
    *   @param {Number} index - index of the slide
    *   @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
    *   @param {Boolean} fromThumb - true if slide function called via thumbnail click
    */
    Plugin.prototype.slide = function (index, fromTouch, fromThumb) {

        var _prevIndex = 0;
        for (var i = 0; i < this.___slide.length; i++) {
            if (_lgUtils2.default.hasClass(this.___slide[i], 'lg-current')) {
                _prevIndex = i;
                break;
            }
        }

        var _this = this;

        // Prevent if multiple call
        // Required for hsh plugin
        if (_this.lGalleryOn && _prevIndex === index) {
            return;
        }

        var _length = this.___slide.length;
        var _time = _this.lGalleryOn ? this.s.speed : 0;
        var _next = false;
        var _prev = false;

        if (!_this.lgBusy) {

            if (this.s.download) {
                var _src;
                if (_this.s.dynamic) {
                    _src = _this.s.dynamicEl[index].downloadUrl !== false && (_this.s.dynamicEl[index].downloadUrl || _this.s.dynamicEl[index].src);
                } else {
                    _src = _this.items[index].getAttribute('data-download-url') !== 'false' && (_this.items[index].getAttribute('data-download-url') || _this.items[index].getAttribute('href') || _this.items[index].getAttribute('data-src'));
                }

                if (_src) {
                    document.getElementById('lg-download').setAttribute('href', _src);
                    _lgUtils2.default.removeClass(_this.outer, 'lg-hide-download');
                } else {
                    _lgUtils2.default.addClass(_this.outer, 'lg-hide-download');
                }
            }

            _lgUtils2.default.trigger(_this.el, 'onBeforeSlide', {
                prevIndex: _prevIndex,
                index: index,
                fromTouch: fromTouch,
                fromThumb: fromThumb
            });

            _this.lgBusy = true;

            clearTimeout(_this.hideBartimeout);

            // Add title if this.s.appendSubHtmlTo === lg-sub-html
            if (this.s.appendSubHtmlTo === '.lg-sub-html') {

                // wait for slide animation to complete
                setTimeout(function () {
                    _this.addHtml(index);
                }, _time);
            }

            this.arrowDisable(index);

            if (!fromTouch) {

                // remove all transitions
                _lgUtils2.default.addClass(_this.outer, 'lg-no-trans');

                for (var j = 0; j < this.___slide.length; j++) {
                    _lgUtils2.default.removeClass(this.___slide[j], 'lg-prev-slide');
                    _lgUtils2.default.removeClass(this.___slide[j], 'lg-next-slide');
                }

                if (index < _prevIndex) {
                    _prev = true;
                    if (index === 0 && _prevIndex === _length - 1 && !fromThumb) {
                        _prev = false;
                        _next = true;
                    }
                } else if (index > _prevIndex) {
                    _next = true;
                    if (index === _length - 1 && _prevIndex === 0 && !fromThumb) {
                        _prev = true;
                        _next = false;
                    }
                }

                if (_prev) {

                    //prevslide
                    _lgUtils2.default.addClass(this.___slide[index], 'lg-prev-slide');
                    _lgUtils2.default.addClass(this.___slide[_prevIndex], 'lg-next-slide');
                } else if (_next) {

                    // next slide
                    _lgUtils2.default.addClass(this.___slide[index], 'lg-next-slide');
                    _lgUtils2.default.addClass(this.___slide[_prevIndex], 'lg-prev-slide');
                }

                // give 50 ms for browser to add/remove class
                setTimeout(function () {
                    _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-current'), 'lg-current');

                    //_this.$slide.eq(_prevIndex).removeClass('lg-current');
                    _lgUtils2.default.addClass(_this.___slide[index], 'lg-current');

                    // reset all transitions
                    _lgUtils2.default.removeClass(_this.outer, 'lg-no-trans');
                }, 50);
            } else {

                var touchPrev = index - 1;
                var touchNext = index + 1;

                if (index === 0 && _prevIndex === _length - 1) {

                    // next slide
                    touchNext = 0;
                    touchPrev = _length - 1;
                } else if (index === _length - 1 && _prevIndex === 0) {

                    // prev slide
                    touchNext = 0;
                    touchPrev = _length - 1;
                }

                _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-prev-slide'), 'lg-prev-slide');
                _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-current'), 'lg-current');
                _lgUtils2.default.removeClass(_this.outer.querySelector('.lg-next-slide'), 'lg-next-slide');
                _lgUtils2.default.addClass(_this.___slide[touchPrev], 'lg-prev-slide');
                _lgUtils2.default.addClass(_this.___slide[touchNext], 'lg-next-slide');
                _lgUtils2.default.addClass(_this.___slide[index], 'lg-current');
            }

            if (_this.lGalleryOn) {
                setTimeout(function () {
                    _this.loadContent(index, true, 0);
                }, this.s.speed + 50);

                setTimeout(function () {
                    _this.lgBusy = false;
                    _lgUtils2.default.trigger(_this.el, 'onAfterSlide', {
                        prevIndex: _prevIndex,
                        index: index,
                        fromTouch: fromTouch,
                        fromThumb: fromThumb
                    });
                }, this.s.speed);
            } else {
                _this.loadContent(index, true, _this.s.backdropDuration);

                _this.lgBusy = false;
                _lgUtils2.default.trigger(_this.el, 'onAfterSlide', {
                    prevIndex: _prevIndex,
                    index: index,
                    fromTouch: fromTouch,
                    fromThumb: fromThumb
                });
            }

            _this.lGalleryOn = true;

            if (this.s.counter) {
                if (document.getElementById('lg-counter-current')) {
                    document.getElementById('lg-counter-current').innerHTML = index + 1;
                }
            }
        }
    };

    /**
     *  @desc Go to next slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
    Plugin.prototype.goToNextSlide = function (fromTouch) {
        var _this = this;
        if (!_this.lgBusy) {
            if (_this.index + 1 < _this.___slide.length) {
                _this.index++;
                _lgUtils2.default.trigger(_this.el, 'onBeforeNextSlide', {
                    index: _this.index
                });
                _this.slide(_this.index, fromTouch, false);
            } else {
                if (_this.s.loop) {
                    _this.index = 0;
                    _lgUtils2.default.trigger(_this.el, 'onBeforeNextSlide', {
                        index: _this.index
                    });
                    _this.slide(_this.index, fromTouch, false);
                } else if (_this.s.slideEndAnimatoin) {
                    _lgUtils2.default.addClass(_this.outer, 'lg-right-end');
                    setTimeout(function () {
                        _lgUtils2.default.removeClass(_this.outer, 'lg-right-end');
                    }, 400);
                }
            }
        }
    };

    /**
     *  @desc Go to previous slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
    Plugin.prototype.goToPrevSlide = function (fromTouch) {
        var _this = this;
        if (!_this.lgBusy) {
            if (_this.index > 0) {
                _this.index--;
                _lgUtils2.default.trigger(_this.el, 'onBeforePrevSlide', {
                    index: _this.index,
                    fromTouch: fromTouch
                });
                _this.slide(_this.index, fromTouch, false);
            } else {
                if (_this.s.loop) {
                    _this.index = _this.items.length - 1;
                    _lgUtils2.default.trigger(_this.el, 'onBeforePrevSlide', {
                        index: _this.index,
                        fromTouch: fromTouch
                    });
                    _this.slide(_this.index, fromTouch, false);
                } else if (_this.s.slideEndAnimatoin) {
                    _lgUtils2.default.addClass(_this.outer, 'lg-left-end');
                    setTimeout(function () {
                        _lgUtils2.default.removeClass(_this.outer, 'lg-left-end');
                    }, 400);
                }
            }
        }
    };

    Plugin.prototype.keyPress = function () {
        var _this = this;
        if (this.items.length > 1) {
            _lgUtils2.default.on(window, 'keyup.lg', function (e) {
                if (_this.items.length > 1) {
                    if (e.keyCode === 37) {
                        e.preventDefault();
                        _this.goToPrevSlide();
                    }

                    if (e.keyCode === 39) {
                        e.preventDefault();
                        _this.goToNextSlide();
                    }
                }
            });
        }

        _lgUtils2.default.on(window, 'keydown.lg', function (e) {
            if (_this.s.escKey === true && e.keyCode === 27) {
                e.preventDefault();
                if (!_lgUtils2.default.hasClass(_this.outer, 'lg-thumb-open')) {
                    _this.destroy();
                } else {
                    _lgUtils2.default.removeClass(_this.outer, 'lg-thumb-open');
                }
            }
        });
    };

    Plugin.prototype.arrow = function () {
        var _this = this;
        _lgUtils2.default.on(this.outer.querySelector('.lg-prev'), 'click.lg', function () {
            _this.goToPrevSlide();
        });

        _lgUtils2.default.on(this.outer.querySelector('.lg-next'), 'click.lg', function () {
            _this.goToNextSlide();
        });
    };

    Plugin.prototype.arrowDisable = function (index) {

        // Disable arrows if s.hideControlOnEnd is true
        if (!this.s.loop && this.s.hideControlOnEnd) {
            var next = this.outer.querySelector('.lg-next');
            var prev = this.outer.querySelector('.lg-prev');
            if (index + 1 < this.___slide.length) {
                next.removeAttribute('disabled');
                _lgUtils2.default.removeClass(next, 'disabled');
            } else {
                next.setAttribute('disabled', 'disabled');
                _lgUtils2.default.addClass(next, 'disabled');
            }

            if (index > 0) {
                prev.removeAttribute('disabled');
                _lgUtils2.default.removeClass(prev, 'disabled');
            } else {
                prev.setAttribute('disabled', 'disabled');
                _lgUtils2.default.addClass(prev, 'disabled');
            }
        }
    };

    Plugin.prototype.setTranslate = function (el, xValue, yValue) {
        // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
        if (this.s.useLeft) {
            el.style.left = xValue;
        } else {
            _lgUtils2.default.setVendor(el, 'Transform', 'translate3d(' + xValue + 'px, ' + yValue + 'px, 0px)');
        }
    };

    Plugin.prototype.touchMove = function (startCoords, endCoords) {

        var distance = endCoords - startCoords;

        if (Math.abs(distance) > 15) {
            // reset opacity and transition duration
            _lgUtils2.default.addClass(this.outer, 'lg-dragging');

            // move current slide
            this.setTranslate(this.___slide[this.index], distance, 0);

            // move next and prev slide with current slide
            this.setTranslate(document.querySelector('.lg-prev-slide'), -this.___slide[this.index].clientWidth + distance, 0);
            this.setTranslate(document.querySelector('.lg-next-slide'), this.___slide[this.index].clientWidth + distance, 0);
        }
    };

    Plugin.prototype.touchEnd = function (distance) {
        var _this = this;

        // keep slide animation for any mode while dragg/swipe
        if (_this.s.mode !== 'lg-slide') {
            _lgUtils2.default.addClass(_this.outer, 'lg-slide');
        }

        for (var i = 0; i < this.___slide.length; i++) {
            if (!_lgUtils2.default.hasClass(this.___slide[i], 'lg-current') && !_lgUtils2.default.hasClass(this.___slide[i], 'lg-prev-slide') && !_lgUtils2.default.hasClass(this.___slide[i], 'lg-next-slide')) {
                this.___slide[i].style.opacity = '0';
            }
        }

        // set transition duration
        setTimeout(function () {
            _lgUtils2.default.removeClass(_this.outer, 'lg-dragging');
            if (distance < 0 && Math.abs(distance) > _this.s.swipeThreshold) {
                _this.goToNextSlide(true);
            } else if (distance > 0 && Math.abs(distance) > _this.s.swipeThreshold) {
                _this.goToPrevSlide(true);
            } else if (Math.abs(distance) < 5) {

                // Trigger click if distance is less than 5 pix
                _lgUtils2.default.trigger(_this.el, 'onSlideClick');
            }

            for (var i = 0; i < _this.___slide.length; i++) {
                _this.___slide[i].removeAttribute('style');
            }
        });

        // remove slide class once drag/swipe is completed if mode is not slide
        setTimeout(function () {
            if (!_lgUtils2.default.hasClass(_this.outer, 'lg-dragging') && _this.s.mode !== 'lg-slide') {
                _lgUtils2.default.removeClass(_this.outer, 'lg-slide');
            }
        }, _this.s.speed + 100);
    };

    Plugin.prototype.enableSwipe = function () {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isMoved = false;

        if (_this.s.enableSwipe && _this.isTouch && _this.doCss()) {

            for (var i = 0; i < _this.___slide.length; i++) {
                /*jshint loopfunc: true */
                _lgUtils2.default.on(_this.___slide[i], 'touchstart.lg', function (e) {
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed') && !_this.lgBusy) {
                        e.preventDefault();
                        _this.manageSwipeClass();
                        startCoords = e.targetTouches[0].pageX;
                    }
                });
            }

            for (var j = 0; j < _this.___slide.length; j++) {
                /*jshint loopfunc: true */
                _lgUtils2.default.on(_this.___slide[j], 'touchmove.lg', function (e) {
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed')) {
                        e.preventDefault();
                        endCoords = e.targetTouches[0].pageX;
                        _this.touchMove(startCoords, endCoords);
                        isMoved = true;
                    }
                });
            }

            for (var k = 0; k < _this.___slide.length; k++) {
                /*jshint loopfunc: true */
                _lgUtils2.default.on(_this.___slide[k], 'touchend.lg', function () {
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed')) {
                        if (isMoved) {
                            isMoved = false;
                            _this.touchEnd(endCoords - startCoords);
                        } else {
                            _lgUtils2.default.trigger(_this.el, 'onSlideClick');
                        }
                    }
                });
            }
        }
    };

    Plugin.prototype.enableDrag = function () {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isDraging = false;
        var isMoved = false;
        if (_this.s.enableDrag && !_this.isTouch && _this.doCss()) {
            for (var i = 0; i < _this.___slide.length; i++) {
                /*jshint loopfunc: true */
                _lgUtils2.default.on(_this.___slide[i], 'mousedown.lg', function (e) {
                    // execute only on .lg-object
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-zoomed')) {
                        if (_lgUtils2.default.hasClass(e.target, 'lg-object') || _lgUtils2.default.hasClass(e.target, 'lg-video-play')) {
                            e.preventDefault();

                            if (!_this.lgBusy) {
                                _this.manageSwipeClass();
                                startCoords = e.pageX;
                                isDraging = true;

                                // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                                _this.outer.scrollLeft += 1;
                                _this.outer.scrollLeft -= 1;

                                // *

                                _lgUtils2.default.removeClass(_this.outer, 'lg-grab');
                                _lgUtils2.default.addClass(_this.outer, 'lg-grabbing');

                                _lgUtils2.default.trigger(_this.el, 'onDragstart');
                            }
                        }
                    }
                });
            }

            _lgUtils2.default.on(window, 'mousemove.lg', function (e) {
                if (isDraging) {
                    isMoved = true;
                    endCoords = e.pageX;
                    _this.touchMove(startCoords, endCoords);
                    _lgUtils2.default.trigger(_this.el, 'onDragmove');
                }
            });

            _lgUtils2.default.on(window, 'mouseup.lg', function (e) {
                if (isMoved) {
                    isMoved = false;
                    _this.touchEnd(endCoords - startCoords);
                    _lgUtils2.default.trigger(_this.el, 'onDragend');
                } else if (_lgUtils2.default.hasClass(e.target, 'lg-object') || _lgUtils2.default.hasClass(e.target, 'lg-video-play')) {
                    _lgUtils2.default.trigger(_this.el, 'onSlideClick');
                }

                // Prevent execution on click
                if (isDraging) {
                    isDraging = false;
                    _lgUtils2.default.removeClass(_this.outer, 'lg-grabbing');
                    _lgUtils2.default.addClass(_this.outer, 'lg-grab');
                }
            });
        }
    };

    Plugin.prototype.manageSwipeClass = function () {
        var touchNext = this.index + 1;
        var touchPrev = this.index - 1;
        var length = this.___slide.length;
        if (this.s.loop) {
            if (this.index === 0) {
                touchPrev = length - 1;
            } else if (this.index === length - 1) {
                touchNext = 0;
            }
        }

        for (var i = 0; i < this.___slide.length; i++) {
            _lgUtils2.default.removeClass(this.___slide[i], 'lg-next-slide');
            _lgUtils2.default.removeClass(this.___slide[i], 'lg-prev-slide');
        }

        if (touchPrev > -1) {
            _lgUtils2.default.addClass(this.___slide[touchPrev], 'lg-prev-slide');
        }

        _lgUtils2.default.addClass(this.___slide[touchNext], 'lg-next-slide');
    };

    Plugin.prototype.mousewheel = function () {
        var _this = this;
        _lgUtils2.default.on(_this.outer, 'mousewheel.lg', function (e) {

            if (!e.deltaY) {
                return;
            }

            if (e.deltaY > 0) {
                _this.goToPrevSlide();
            } else {
                _this.goToNextSlide();
            }

            e.preventDefault();
        });
    };

    Plugin.prototype.closeGallery = function () {

        var _this = this;
        var mousedown = false;
        _lgUtils2.default.on(this.outer.querySelector('.lg-close'), 'click.lg', function () {
            _this.destroy();
        });

        if (_this.s.closable) {

            // If you drag the slide and release outside gallery gets close on chrome
            // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
            _lgUtils2.default.on(_this.outer, 'mousedown.lg', function (e) {

                if (_lgUtils2.default.hasClass(e.target, 'lg-outer') || _lgUtils2.default.hasClass(e.target, 'lg-item') || _lgUtils2.default.hasClass(e.target, 'lg-img-wrap')) {
                    mousedown = true;
                } else {
                    mousedown = false;
                }
            });

            _lgUtils2.default.on(_this.outer, 'mouseup.lg', function (e) {

                if (_lgUtils2.default.hasClass(e.target, 'lg-outer') || _lgUtils2.default.hasClass(e.target, 'lg-item') || _lgUtils2.default.hasClass(e.target, 'lg-img-wrap') && mousedown) {
                    if (!_lgUtils2.default.hasClass(_this.outer, 'lg-dragging')) {
                        _this.destroy();
                    }
                }
            });
        }
    };

    Plugin.prototype.destroy = function (d) {

        var _this = this;

        if (!d) {
            _lgUtils2.default.trigger(_this.el, 'onBeforeClose');
        }

        document.body.scrollTop = _this.prevScrollTop;
        document.documentElement.scrollTop = _this.prevScrollTop;

        /**
         * if d is false or undefined destroy will only close the gallery
         * plugins instance remains with the element
         *
         * if d is true destroy will completely remove the plugin
         */

        if (d) {
            if (!_this.s.dynamic) {
                // only when not using dynamic mode is $items a jquery collection

                for (var i = 0; i < this.items.length; i++) {
                    _lgUtils2.default.off(this.items[i], '.lg');
                    _lgUtils2.default.off(this.items[i], '.lgcustom');
                }
            }

            var lguid = _this.el.getAttribute('lg-uid');
            delete window.lgData[lguid];
            _this.el.removeAttribute('lg-uid');
        }

        // Unbind all events added by lightGallery
        _lgUtils2.default.off(this.el, '.lgtm');

        // Distroy all lightGallery modules
        for (var key in window.lgModules) {
            if (_this.modules[key]) {
                _this.modules[key].destroy(d);
            }
        }

        this.lGalleryOn = false;

        clearTimeout(_this.hideBartimeout);
        this.hideBartimeout = false;
        _lgUtils2.default.off(window, '.lg');
        _lgUtils2.default.removeClass(document.body, 'lg-on');
        _lgUtils2.default.removeClass(document.body, 'lg-from-hash');

        if (_this.outer) {
            _lgUtils2.default.removeClass(_this.outer, 'lg-visible');
        }

        _lgUtils2.default.removeClass(document.querySelector('.lg-backdrop'), 'in');
        setTimeout(function () {
            try {
                if (_this.outer) {
                    _this.outer.parentNode.removeChild(_this.outer);
                }

                if (document.querySelector('.lg-backdrop')) {
                    document.querySelector('.lg-backdrop').parentNode.removeChild(document.querySelector('.lg-backdrop'));
                }

                if (!d) {
                    _lgUtils2.default.trigger(_this.el, 'onCloseAfter');
                }
                _this.el.focus();
            } catch (err) {}
        }, _this.s.backdropDuration + 50);
    };

    window.lightGallery = function (el, options) {
        if (!el) {
            return;
        }

        try {
            if (!el.getAttribute('lg-uid')) {
                var uid = 'lg' + window.lgData.uid++;
                window.lgData[uid] = new Plugin(el, options);
                el.setAttribute('lg-uid', uid);
            } else {
                window.lgData[el.getAttribute('lg-uid')].init();
            }
        } catch (err) {
            console.error('lightGallery has not initiated properly', err);
        }
    };
});

/***/ }),

/***/ "./node_modules/scroll-lock/dist/scroll-lock.js":
/*!******************************************************!*\
  !*** ./node_modules/scroll-lock/dist/scroll-lock.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/tools.js
var argumentAsArray = function argumentAsArray(argument) {
  return Array.isArray(argument) ? argument : [argument];
};
var isElement = function isElement(target) {
  return target instanceof Node;
};
var isElementList = function isElementList(nodeList) {
  return nodeList instanceof NodeList;
};
var eachNode = function eachNode(nodeList, callback) {
  if (nodeList && callback) {
    nodeList = isElementList(nodeList) ? nodeList : [nodeList];

    for (var i = 0; i < nodeList.length; i++) {
      if (callback(nodeList[i], i, nodeList.length) === true) {
        break;
      }
    }
  }
};
var throwError = function throwError(message) {
  return console.error("[scroll-lock] ".concat(message));
};
var arrayAsSelector = function arrayAsSelector(array) {
  if (Array.isArray(array)) {
    var selector = array.join(', ');
    return selector;
  }
};
var nodeListAsArray = function nodeListAsArray(nodeList) {
  var nodes = [];
  eachNode(nodeList, function (node) {
    return nodes.push(node);
  });
  return nodes;
};
var findParentBySelector = function findParentBySelector($el, selector) {
  var self = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var $root = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : document;

  if (self && nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) !== -1) {
    return $el;
  }

  while (($el = $el.parentElement) && nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) === -1) {
    ;
  }

  return $el;
};
var elementHasSelector = function elementHasSelector($el, selector) {
  var $root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  var has = nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) !== -1;
  return has;
};
var elementHasOverflowHidden = function elementHasOverflowHidden($el) {
  if ($el) {
    var computedStyle = getComputedStyle($el);
    var overflowIsHidden = computedStyle.overflow === 'hidden';
    return overflowIsHidden;
  }
};
var elementScrollTopOnStart = function elementScrollTopOnStart($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollTop = $el.scrollTop;
    return scrollTop <= 0;
  }
};
var elementScrollTopOnEnd = function elementScrollTopOnEnd($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollTop = $el.scrollTop;
    var scrollHeight = $el.scrollHeight;
    var scrollTopWithHeight = scrollTop + $el.offsetHeight;
    return scrollTopWithHeight >= scrollHeight;
  }
};
var elementScrollLeftOnStart = function elementScrollLeftOnStart($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollLeft = $el.scrollLeft;
    return scrollLeft <= 0;
  }
};
var elementScrollLeftOnEnd = function elementScrollLeftOnEnd($el) {
  if ($el) {
    if (elementHasOverflowHidden($el)) {
      return true;
    }

    var scrollLeft = $el.scrollLeft;
    var scrollWidth = $el.scrollWidth;
    var scrollLeftWithWidth = scrollLeft + $el.offsetWidth;
    return scrollLeftWithWidth >= scrollWidth;
  }
};
var elementIsScrollableField = function elementIsScrollableField($el) {
  var selector = 'textarea, [contenteditable="true"]';
  return elementHasSelector($el, selector);
};
var elementIsInputRange = function elementIsInputRange($el) {
  var selector = 'input[type="range"]';
  return elementHasSelector($el, selector);
};
// CONCATENATED MODULE: ./src/scroll-lock.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disablePageScroll", function() { return disablePageScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enablePageScroll", function() { return enablePageScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScrollState", function() { return getScrollState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearQueueScrollLocks", function() { return clearQueueScrollLocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTargetScrollBarWidth", function() { return scroll_lock_getTargetScrollBarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTargetScrollBarWidth", function() { return scroll_lock_getCurrentTargetScrollBarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageScrollBarWidth", function() { return getPageScrollBarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPageScrollBarWidth", function() { return getCurrentPageScrollBarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScrollableTarget", function() { return scroll_lock_addScrollableTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeScrollableTarget", function() { return scroll_lock_removeScrollableTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScrollableSelector", function() { return scroll_lock_addScrollableSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeScrollableSelector", function() { return scroll_lock_removeScrollableSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLockableTarget", function() { return scroll_lock_addLockableTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLockableSelector", function() { return scroll_lock_addLockableSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFillGapMethod", function() { return scroll_lock_setFillGapMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFillGapTarget", function() { return scroll_lock_addFillGapTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFillGapTarget", function() { return scroll_lock_removeFillGapTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFillGapSelector", function() { return scroll_lock_addFillGapSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFillGapSelector", function() { return scroll_lock_removeFillGapSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refillGaps", function() { return refillGaps; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var FILL_GAP_AVAILABLE_METHODS = ['padding', 'margin', 'width', 'max-width', 'none'];
var TOUCH_DIRECTION_DETECT_OFFSET = 3;
var state = {
  scroll: true,
  queue: 0,
  scrollableSelectors: ['[data-scroll-lock-scrollable]'],
  lockableSelectors: ['body', '[data-scroll-lock-lockable]'],
  fillGapSelectors: ['body', '[data-scroll-lock-fill-gap]', '[data-scroll-lock-lockable]'],
  fillGapMethod: FILL_GAP_AVAILABLE_METHODS[0],
  //
  startTouchY: 0,
  startTouchX: 0
};
var disablePageScroll = function disablePageScroll(target) {
  if (state.queue <= 0) {
    state.scroll = false;
    scroll_lock_hideLockableOverflow();
    fillGaps();
  }

  scroll_lock_addScrollableTarget(target);
  state.queue++;
};
var enablePageScroll = function enablePageScroll(target) {
  state.queue > 0 && state.queue--;

  if (state.queue <= 0) {
    state.scroll = true;
    scroll_lock_showLockableOverflow();
    unfillGaps();
  }

  scroll_lock_removeScrollableTarget(target);
};
var getScrollState = function getScrollState() {
  return state.scroll;
};
var clearQueueScrollLocks = function clearQueueScrollLocks() {
  state.queue = 0;
};
var scroll_lock_getTargetScrollBarWidth = function getTargetScrollBarWidth($target) {
  var onlyExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isElement($target)) {
    var currentOverflowYProperty = $target.style.overflowY;

    if (onlyExists) {
      if (!getScrollState()) {
        $target.style.overflowY = $target.getAttribute('data-scroll-lock-saved-overflow-y-property');
      }
    } else {
      $target.style.overflowY = 'scroll';
    }

    var width = scroll_lock_getCurrentTargetScrollBarWidth($target);
    $target.style.overflowY = currentOverflowYProperty;
    return width;
  } else {
    return 0;
  }
};
var scroll_lock_getCurrentTargetScrollBarWidth = function getCurrentTargetScrollBarWidth($target) {
  if (isElement($target)) {
    if ($target === document.body) {
      var documentWidth = document.documentElement.clientWidth;
      var windowWidth = window.innerWidth;
      var currentWidth = windowWidth - documentWidth;
      return currentWidth;
    } else {
      var borderLeftWidthCurrentProperty = $target.style.borderLeftWidth;
      var borderRightWidthCurrentProperty = $target.style.borderRightWidth;
      $target.style.borderLeftWidth = '0px';
      $target.style.borderRightWidth = '0px';

      var _currentWidth = $target.offsetWidth - $target.clientWidth;

      $target.style.borderLeftWidth = borderLeftWidthCurrentProperty;
      $target.style.borderRightWidth = borderRightWidthCurrentProperty;
      return _currentWidth;
    }
  } else {
    return 0;
  }
};
var getPageScrollBarWidth = function getPageScrollBarWidth() {
  var onlyExists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return scroll_lock_getTargetScrollBarWidth(document.body, onlyExists);
};
var getCurrentPageScrollBarWidth = function getCurrentPageScrollBarWidth() {
  return scroll_lock_getCurrentTargetScrollBarWidth(document.body);
};
var scroll_lock_addScrollableTarget = function addScrollableTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.setAttribute('data-scroll-lock-scrollable', '');
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_removeScrollableTarget = function removeScrollableTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.removeAttribute('data-scroll-lock-scrollable');
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_addScrollableSelector = function addScrollableSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.scrollableSelectors.push(selector);
    });
  }
};
var scroll_lock_removeScrollableSelector = function removeScrollableSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.scrollableSelectors = state.scrollableSelectors.filter(function (sSelector) {
        return sSelector !== selector;
      });
    });
  }
};
var scroll_lock_addLockableTarget = function addLockableTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.setAttribute('data-scroll-lock-lockable', '');
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });

    if (!getScrollState()) {
      scroll_lock_hideLockableOverflow();
    }
  }
};
var scroll_lock_addLockableSelector = function addLockableSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.lockableSelectors.push(selector);
    });

    if (!getScrollState()) {
      scroll_lock_hideLockableOverflow();
    }

    scroll_lock_addFillGapSelector(selector);
  }
};
var scroll_lock_setFillGapMethod = function setFillGapMethod(method) {
  if (method) {
    if (FILL_GAP_AVAILABLE_METHODS.indexOf(method) !== -1) {
      state.fillGapMethod = method;
      refillGaps();
    } else {
      var methods = FILL_GAP_AVAILABLE_METHODS.join(', ');
      throwError("\"".concat(method, "\" method is not available!\nAvailable fill gap methods: ").concat(methods, "."));
    }
  }
};
var scroll_lock_addFillGapTarget = function addFillGapTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.setAttribute('data-scroll-lock-fill-gap', '');

          if (!state.scroll) {
            scroll_lock_fillGapTarget($target);
          }
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_removeFillGapTarget = function removeFillGapTarget(target) {
  if (target) {
    var targets = argumentAsArray(target);
    targets.map(function ($targets) {
      eachNode($targets, function ($target) {
        if (isElement($target)) {
          $target.removeAttribute('data-scroll-lock-fill-gap');

          if (!state.scroll) {
            scroll_lock_unfillGapTarget($target);
          }
        } else {
          throwError("\"".concat($target, "\" is not a Element."));
        }
      });
    });
  }
};
var scroll_lock_addFillGapSelector = function addFillGapSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      if (state.fillGapSelectors.indexOf(selector) === -1) {
        state.fillGapSelectors.push(selector);

        if (!state.scroll) {
          scroll_lock_fillGapSelector(selector);
        }
      }
    });
  }
};
var scroll_lock_removeFillGapSelector = function removeFillGapSelector(selector) {
  if (selector) {
    var selectors = argumentAsArray(selector);
    selectors.map(function (selector) {
      state.fillGapSelectors = state.fillGapSelectors.filter(function (fSelector) {
        return fSelector !== selector;
      });

      if (!state.scroll) {
        scroll_lock_unfillGapSelector(selector);
      }
    });
  }
};
var refillGaps = function refillGaps() {
  if (!state.scroll) {
    fillGaps();
  }
};

var scroll_lock_hideLockableOverflow = function hideLockableOverflow() {
  var selector = arrayAsSelector(state.lockableSelectors);
  scroll_lock_hideLockableOverflowSelector(selector);
};

var scroll_lock_showLockableOverflow = function showLockableOverflow() {
  var selector = arrayAsSelector(state.lockableSelectors);
  scroll_lock_showLockableOverflowSelector(selector);
};

var scroll_lock_hideLockableOverflowSelector = function hideLockableOverflowSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  eachNode($targets, function ($target) {
    scroll_lock_hideLockableOverflowTarget($target);
  });
};

var scroll_lock_showLockableOverflowSelector = function showLockableOverflowSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  eachNode($targets, function ($target) {
    scroll_lock_showLockableOverflowTarget($target);
  });
};

var scroll_lock_hideLockableOverflowTarget = function hideLockableOverflowTarget($target) {
  if (isElement($target) && $target.getAttribute('data-scroll-lock-locked') !== 'true') {
    var computedStyle = window.getComputedStyle($target);
    $target.setAttribute('data-scroll-lock-saved-overflow-y-property', computedStyle.overflowY);
    $target.setAttribute('data-scroll-lock-saved-inline-overflow-property', $target.style.overflow);
    $target.setAttribute('data-scroll-lock-saved-inline-overflow-y-property', $target.style.overflowY);
    $target.style.overflow = 'hidden';
    $target.setAttribute('data-scroll-lock-locked', 'true');
  }
};

var scroll_lock_showLockableOverflowTarget = function showLockableOverflowTarget($target) {
  if (isElement($target) && $target.getAttribute('data-scroll-lock-locked') === 'true') {
    $target.style.overflow = $target.getAttribute('data-scroll-lock-saved-inline-overflow-property');
    $target.style.overflowY = $target.getAttribute('data-scroll-lock-saved-inline-overflow-y-property');
    $target.removeAttribute('data-scroll-lock-saved-overflow-property');
    $target.removeAttribute('data-scroll-lock-saved-inline-overflow-property');
    $target.removeAttribute('data-scroll-lock-saved-inline-overflow-y-property');
    $target.removeAttribute('data-scroll-lock-locked');
  }
};

var fillGaps = function fillGaps() {
  state.fillGapSelectors.map(function (selector) {
    scroll_lock_fillGapSelector(selector);
  });
};

var unfillGaps = function unfillGaps() {
  state.fillGapSelectors.map(function (selector) {
    scroll_lock_unfillGapSelector(selector);
  });
};

var scroll_lock_fillGapSelector = function fillGapSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  var isLockable = state.lockableSelectors.indexOf(selector) !== -1;
  eachNode($targets, function ($target) {
    scroll_lock_fillGapTarget($target, isLockable);
  });
};

var scroll_lock_fillGapTarget = function fillGapTarget($target) {
  var isLockable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isElement($target)) {
    var scrollBarWidth;

    if ($target.getAttribute('data-scroll-lock-lockable') === '' || isLockable) {
      scrollBarWidth = scroll_lock_getTargetScrollBarWidth($target, true);
    } else {
      var $lockableParent = findParentBySelector($target, arrayAsSelector(state.lockableSelectors));
      scrollBarWidth = scroll_lock_getTargetScrollBarWidth($lockableParent, true);
    }

    if ($target.getAttribute('data-scroll-lock-filled-gap') === 'true') {
      scroll_lock_unfillGapTarget($target);
    }

    var computedStyle = window.getComputedStyle($target);
    $target.setAttribute('data-scroll-lock-filled-gap', 'true');
    $target.setAttribute('data-scroll-lock-current-fill-gap-method', state.fillGapMethod);

    if (state.fillGapMethod === 'margin') {
      var currentMargin = parseFloat(computedStyle.marginRight);
      $target.style.marginRight = "".concat(currentMargin + scrollBarWidth, "px");
    } else if (state.fillGapMethod === 'width') {
      $target.style.width = "calc(100% - ".concat(scrollBarWidth, "px)");
    } else if (state.fillGapMethod === 'max-width') {
      $target.style.maxWidth = "calc(100% - ".concat(scrollBarWidth, "px)");
    } else if (state.fillGapMethod === 'padding') {
      var currentPadding = parseFloat(computedStyle.paddingRight);
      $target.style.paddingRight = "".concat(currentPadding + scrollBarWidth, "px");
    }
  }
};

var scroll_lock_unfillGapSelector = function unfillGapSelector(selector) {
  var $targets = document.querySelectorAll(selector);
  eachNode($targets, function ($target) {
    scroll_lock_unfillGapTarget($target);
  });
};

var scroll_lock_unfillGapTarget = function unfillGapTarget($target) {
  if (isElement($target)) {
    if ($target.getAttribute('data-scroll-lock-filled-gap') === 'true') {
      var currentFillGapMethod = $target.getAttribute('data-scroll-lock-current-fill-gap-method');
      $target.removeAttribute('data-scroll-lock-filled-gap');
      $target.removeAttribute('data-scroll-lock-current-fill-gap-method');

      if (currentFillGapMethod === 'margin') {
        $target.style.marginRight = "";
      } else if (currentFillGapMethod === 'width') {
        $target.style.width = "";
      } else if (currentFillGapMethod === 'max-width') {
        $target.style.maxWidth = "";
      } else if (currentFillGapMethod === 'padding') {
        $target.style.paddingRight = "";
      }
    }
  }
};

var onResize = function onResize(e) {
  refillGaps();
};

var onTouchStart = function onTouchStart(e) {
  if (!state.scroll) {
    state.startTouchY = e.touches[0].clientY;
    state.startTouchX = e.touches[0].clientX;
  }
};

var scroll_lock_onTouchMove = function onTouchMove(e) {
  if (!state.scroll) {
    var startTouchY = state.startTouchY,
        startTouchX = state.startTouchX;
    var currentClientY = e.touches[0].clientY;
    var currentClientX = e.touches[0].clientX;

    if (e.touches.length < 2) {
      var selector = arrayAsSelector(state.scrollableSelectors);
      var direction = {
        up: startTouchY < currentClientY,
        down: startTouchY > currentClientY,
        left: startTouchX < currentClientX,
        right: startTouchX > currentClientX
      };
      var directionWithOffset = {
        up: startTouchY + TOUCH_DIRECTION_DETECT_OFFSET < currentClientY,
        down: startTouchY - TOUCH_DIRECTION_DETECT_OFFSET > currentClientY,
        left: startTouchX + TOUCH_DIRECTION_DETECT_OFFSET < currentClientX,
        right: startTouchX - TOUCH_DIRECTION_DETECT_OFFSET > currentClientX
      };

      var handle = function handle($el) {
        var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if ($el) {
          var parentScrollableEl = findParentBySelector($el, selector, false);

          if (elementIsInputRange($el)) {
            return false;
          }

          if (skip || elementIsScrollableField($el) && findParentBySelector($el, selector) || elementHasSelector($el, selector)) {
            var prevent = false;

            if (elementScrollLeftOnStart($el) && elementScrollLeftOnEnd($el)) {
              if (direction.up && elementScrollTopOnStart($el) || direction.down && elementScrollTopOnEnd($el)) {
                prevent = true;
              }
            } else if (elementScrollTopOnStart($el) && elementScrollTopOnEnd($el)) {
              if (direction.left && elementScrollLeftOnStart($el) || direction.right && elementScrollLeftOnEnd($el)) {
                prevent = true;
              }
            } else if (directionWithOffset.up && elementScrollTopOnStart($el) || directionWithOffset.down && elementScrollTopOnEnd($el) || directionWithOffset.left && elementScrollLeftOnStart($el) || directionWithOffset.right && elementScrollLeftOnEnd($el)) {
              prevent = true;
            }

            if (prevent) {
              if (parentScrollableEl) {
                handle(parentScrollableEl, true);
              } else {
                if (e.cancelable) {
                  e.preventDefault();
                }
              }
            }
          } else {
            handle(parentScrollableEl);
          }
        } else {
          if (e.cancelable) {
            e.preventDefault();
          }
        }
      };

      handle(e.target);
    }
  }
};

var onTouchEnd = function onTouchEnd(e) {
  if (!state.scroll) {
    state.startTouchY = 0;
    state.startTouchX = 0;
  }
};

if (typeof window !== 'undefined') {
  window.addEventListener('resize', onResize);
}

if (typeof document !== 'undefined') {
  document.addEventListener('touchstart', onTouchStart);
  document.addEventListener('touchmove', scroll_lock_onTouchMove, {
    passive: false
  });
  document.addEventListener('touchend', onTouchEnd);
}

var deprecatedMethods = {
  hide: function hide(target) {
    throwError('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget');
    disablePageScroll(target);
  },
  show: function show(target) {
    throwError('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget');
    enablePageScroll(target);
  },
  toggle: function toggle(target) {
    throwError('"toggle" is deprecated! Do not use it.');

    if (getScrollState()) {
      disablePageScroll();
    } else {
      enablePageScroll(target);
    }
  },
  getState: function getState() {
    throwError('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate');
    return getScrollState();
  },
  getWidth: function getWidth() {
    throwError('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth');
    return getPageScrollBarWidth();
  },
  getCurrentWidth: function getCurrentWidth() {
    throwError('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth');
    return getCurrentPageScrollBarWidth();
  },
  setScrollableTargets: function setScrollableTargets(target) {
    throwError('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget');
    scroll_lock_addScrollableTarget(target);
  },
  setFillGapSelectors: function setFillGapSelectors(selector) {
    throwError('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector');
    scroll_lock_addFillGapSelector(selector);
  },
  setFillGapTargets: function setFillGapTargets(target) {
    throwError('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget');
    scroll_lock_addFillGapTarget(target);
  },
  clearQueue: function clearQueue() {
    throwError('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks');
    clearQueueScrollLocks();
  }
};

var scrollLock = _objectSpread({
  disablePageScroll: disablePageScroll,
  enablePageScroll: enablePageScroll,
  getScrollState: getScrollState,
  clearQueueScrollLocks: clearQueueScrollLocks,
  getTargetScrollBarWidth: scroll_lock_getTargetScrollBarWidth,
  getCurrentTargetScrollBarWidth: scroll_lock_getCurrentTargetScrollBarWidth,
  getPageScrollBarWidth: getPageScrollBarWidth,
  getCurrentPageScrollBarWidth: getCurrentPageScrollBarWidth,
  addScrollableSelector: scroll_lock_addScrollableSelector,
  removeScrollableSelector: scroll_lock_removeScrollableSelector,
  addScrollableTarget: scroll_lock_addScrollableTarget,
  removeScrollableTarget: scroll_lock_removeScrollableTarget,
  addLockableSelector: scroll_lock_addLockableSelector,
  addLockableTarget: scroll_lock_addLockableTarget,
  addFillGapSelector: scroll_lock_addFillGapSelector,
  removeFillGapSelector: scroll_lock_removeFillGapSelector,
  addFillGapTarget: scroll_lock_addFillGapTarget,
  removeFillGapTarget: scroll_lock_removeFillGapTarget,
  setFillGapMethod: scroll_lock_setFillGapMethod,
  refillGaps: refillGaps,
  _state: state
}, deprecatedMethods);

/* harmony default export */ var scroll_lock = __webpack_exports__["default"] = (scrollLock);

/***/ })
/******/ ])["default"];
});

/***/ }),

/***/ "./node_modules/ssr-window/ssr-window.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/ssr-window/ssr-window.esm.js ***!
  \***************************************************/
/*! exports provided: extend, getDocument, getWindow, ssrDocument, ssrWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDocument", function() { return getDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return getWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssrDocument", function() { return ssrDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ssrWindow", function() { return ssrWindow; });
/**
 * SSR Window 3.0.0
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2020, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: November 9, 2020
 */
/* eslint-disable no-param-reassign */
function isObject(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        'constructor' in obj &&
        obj.constructor === Object);
}
function extend(target, src) {
    if (target === void 0) { target = {}; }
    if (src === void 0) { src = {}; }
    Object.keys(src).forEach(function (key) {
        if (typeof target[key] === 'undefined')
            target[key] = src[key];
        else if (isObject(src[key]) &&
            isObject(target[key]) &&
            Object.keys(src[key]).length > 0) {
            extend(target[key], src[key]);
        }
    });
}

var ssrDocument = {
    body: {},
    addEventListener: function () { },
    removeEventListener: function () { },
    activeElement: {
        blur: function () { },
        nodeName: '',
    },
    querySelector: function () {
        return null;
    },
    querySelectorAll: function () {
        return [];
    },
    getElementById: function () {
        return null;
    },
    createEvent: function () {
        return {
            initEvent: function () { },
        };
    },
    createElement: function () {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () { },
            getElementsByTagName: function () {
                return [];
            },
        };
    },
    createElementNS: function () {
        return {};
    },
    importNode: function () {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
};
function getDocument() {
    var doc = typeof document !== 'undefined' ? document : {};
    extend(doc, ssrDocument);
    return doc;
}

var ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: '',
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
    history: {
        replaceState: function () { },
        pushState: function () { },
        go: function () { },
        back: function () { },
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener: function () { },
    removeEventListener: function () { },
    getComputedStyle: function () {
        return {
            getPropertyValue: function () {
                return '';
            },
        };
    },
    Image: function () { },
    Date: function () { },
    screen: {},
    setTimeout: function () { },
    clearTimeout: function () { },
    matchMedia: function () {
        return {};
    },
    requestAnimationFrame: function (callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame: function (id) {
        if (typeof setTimeout === 'undefined') {
            return;
        }
        clearTimeout(id);
    },
};
function getWindow() {
    var win = typeof window !== 'undefined' ? window : {};
    extend(win, ssrWindow);
    return win;
}




/***/ }),

/***/ "./node_modules/swiper/esm/components/a11y/a11y.js":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/esm/components/a11y/a11y.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var A11y = {
  getRandomNumber: function getRandomNumber(size) {
    if (size === void 0) {
      size = 16;
    }

    var randomChar = function randomChar() {
      return Math.round(16 * Math.random()).toString(16);
    };

    return 'x'.repeat(size).replace(/x/g, randomChar);
  },
  makeElFocusable: function makeElFocusable($el) {
    $el.attr('tabIndex', '0');
    return $el;
  },
  makeElNotFocusable: function makeElNotFocusable($el) {
    $el.attr('tabIndex', '-1');
    return $el;
  },
  addElRole: function addElRole($el, role) {
    $el.attr('role', role);
    return $el;
  },
  addElRoleDescription: function addElRoleDescription($el, description) {
    $el.attr('aria-roledescription', description);
    return $el;
  },
  addElControls: function addElControls($el, controls) {
    $el.attr('aria-controls', controls);
    return $el;
  },
  addElLabel: function addElLabel($el, label) {
    $el.attr('aria-label', label);
    return $el;
  },
  addElId: function addElId($el, id) {
    $el.attr('id', id);
    return $el;
  },
  addElLive: function addElLive($el, live) {
    $el.attr('aria-live', live);
    return $el;
  },
  disableEl: function disableEl($el) {
    $el.attr('aria-disabled', true);
    return $el;
  },
  enableEl: function enableEl($el) {
    $el.attr('aria-disabled', false);
    return $el;
  },
  onEnterOrSpaceKey: function onEnterOrSpaceKey(e) {
    if (e.keyCode !== 13 && e.keyCode !== 32) return;
    var swiper = this;
    var params = swiper.params.a11y;
    var $targetEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target);

    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }

      if (swiper.isEnd) {
        swiper.a11y.notify(params.lastSlideMessage);
      } else {
        swiper.a11y.notify(params.nextSlideMessage);
      }
    }

    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }

      if (swiper.isBeginning) {
        swiper.a11y.notify(params.firstSlideMessage);
      } else {
        swiper.a11y.notify(params.prevSlideMessage);
      }
    }

    if (swiper.pagination && $targetEl.is(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["classesToSelector"])(swiper.params.pagination.bulletClass))) {
      $targetEl[0].click();
    }
  },
  notify: function notify(message) {
    var swiper = this;
    var notification = swiper.a11y.liveRegion;
    if (notification.length === 0) return;
    notification.html('');
    notification.html(message);
  },
  updateNavigation: function updateNavigation() {
    var swiper = this;
    if (swiper.params.loop || !swiper.navigation) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        swiper.a11y.disableEl($prevEl);
        swiper.a11y.makeElNotFocusable($prevEl);
      } else {
        swiper.a11y.enableEl($prevEl);
        swiper.a11y.makeElFocusable($prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        swiper.a11y.disableEl($nextEl);
        swiper.a11y.makeElNotFocusable($nextEl);
      } else {
        swiper.a11y.enableEl($nextEl);
        swiper.a11y.makeElFocusable($nextEl);
      }
    }
  },
  updatePagination: function updatePagination() {
    var swiper = this;
    var params = swiper.params.a11y;

    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.bullets.each(function (bulletEl) {
        var $bulletEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(bulletEl);
        swiper.a11y.makeElFocusable($bulletEl);

        if (!swiper.params.pagination.renderBullet) {
          swiper.a11y.addElRole($bulletEl, 'button');
          swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
        }
      });
    }
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.a11y;
    swiper.$el.append(swiper.a11y.liveRegion); // Container

    var $containerEl = swiper.$el;

    if (params.containerRoleDescriptionMessage) {
      swiper.a11y.addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
    }

    if (params.containerMessage) {
      swiper.a11y.addElLabel($containerEl, params.containerMessage);
    } // Wrapper


    var $wrapperEl = swiper.$wrapperEl;
    var wrapperId = $wrapperEl.attr('id') || "swiper-wrapper-" + swiper.a11y.getRandomNumber(16);
    var live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
    swiper.a11y.addElId($wrapperEl, wrapperId);
    swiper.a11y.addElLive($wrapperEl, live); // Slide

    if (params.itemRoleDescriptionMessage) {
      swiper.a11y.addElRoleDescription(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.slides), params.itemRoleDescriptionMessage);
    }

    swiper.a11y.addElRole(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.slides), params.slideRole);
    var slidesLength = swiper.params.loop ? swiper.slides.filter(function (el) {
      return !el.classList.contains(swiper.params.slideDuplicateClass);
    }).length : swiper.slides.length;
    swiper.slides.each(function (slideEl, index) {
      var $slideEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl);
      var slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
      var ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
      swiper.a11y.addElLabel($slideEl, ariaLabelMessage);
    }); // Navigation

    var $nextEl;
    var $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl && $nextEl.length) {
      swiper.a11y.makeElFocusable($nextEl);

      if ($nextEl[0].tagName !== 'BUTTON') {
        swiper.a11y.addElRole($nextEl, 'button');
        $nextEl.on('keydown', swiper.a11y.onEnterOrSpaceKey);
      }

      swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
      swiper.a11y.addElControls($nextEl, wrapperId);
    }

    if ($prevEl && $prevEl.length) {
      swiper.a11y.makeElFocusable($prevEl);

      if ($prevEl[0].tagName !== 'BUTTON') {
        swiper.a11y.addElRole($prevEl, 'button');
        $prevEl.on('keydown', swiper.a11y.onEnterOrSpaceKey);
      }

      swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
      swiper.a11y.addElControls($prevEl, wrapperId);
    } // Pagination


    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.on('keydown', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["classesToSelector"])(swiper.params.pagination.bulletClass), swiper.a11y.onEnterOrSpaceKey);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
    var $nextEl;
    var $prevEl;

    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }

    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }

    if ($nextEl) {
      $nextEl.off('keydown', swiper.a11y.onEnterOrSpaceKey);
    }

    if ($prevEl) {
      $prevEl.off('keydown', swiper.a11y.onEnterOrSpaceKey);
    } // Pagination


    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.off('keydown', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["classesToSelector"])(swiper.params.pagination.bulletClass), swiper.a11y.onEnterOrSpaceKey);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'a11y',
  params: {
    a11y: {
      enabled: true,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      slideLabelMessage: '{{index}} / {{slidesLength}}',
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: 'group'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      a11y: _extends({}, A11y, {
        liveRegion: Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<span class=\"" + swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
      })
    });
  },
  on: {
    afterInit: function afterInit(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.init();
      swiper.a11y.updateNavigation();
    },
    toEdge: function toEdge(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    fromEdge: function fromEdge(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updateNavigation();
    },
    paginationUpdate: function paginationUpdate(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.updatePagination();
    },
    destroy: function destroy(swiper) {
      if (!swiper.params.a11y.enabled) return;
      swiper.a11y.destroy();
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/autoplay/autoplay.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/autoplay/autoplay.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint no-underscore-dangle: "off" */


var Autoplay = {
  run: function run() {
    var swiper = this;
    var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    var delay = swiper.params.autoplay.delay;

    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }

    clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.timeout = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["nextTick"])(function () {
      var autoplayResult;

      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else {
        swiper.autoplay.stop();
      }

      if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();else if (autoplayResult === false) {
        swiper.autoplay.run();
      }
    }, delay);
  },
  start: function start() {
    var swiper = this;
    if (typeof swiper.autoplay.timeout !== 'undefined') return false;
    if (swiper.autoplay.running) return false;
    swiper.autoplay.running = true;
    swiper.emit('autoplayStart');
    swiper.autoplay.run();
    return true;
  },
  stop: function stop() {
    var swiper = this;
    if (!swiper.autoplay.running) return false;
    if (typeof swiper.autoplay.timeout === 'undefined') return false;

    if (swiper.autoplay.timeout) {
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = undefined;
    }

    swiper.autoplay.running = false;
    swiper.emit('autoplayStop');
    return true;
  },
  pause: function pause(speed) {
    var swiper = this;
    if (!swiper.autoplay.running) return;
    if (swiper.autoplay.paused) return;
    if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
    swiper.autoplay.paused = true;

    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    } else {
      ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
        swiper.$wrapperEl[0].addEventListener(event, swiper.autoplay.onTransitionEnd);
      });
    }
  },
  onVisibilityChange: function onVisibilityChange() {
    var swiper = this;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();

    if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
      swiper.autoplay.pause();
    }

    if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
      swiper.autoplay.run();
      swiper.autoplay.paused = false;
    }
  },
  onTransitionEnd: function onTransitionEnd(e) {
    var swiper = this;
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
    if (e.target !== swiper.$wrapperEl[0]) return;
    ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
      swiper.$wrapperEl[0].removeEventListener(event, swiper.autoplay.onTransitionEnd);
    });
    swiper.autoplay.paused = false;

    if (!swiper.autoplay.running) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.run();
    }
  },
  onMouseEnter: function onMouseEnter() {
    var swiper = this;

    if (swiper.params.autoplay.disableOnInteraction) {
      swiper.autoplay.stop();
    } else {
      swiper.autoplay.pause();
    }

    ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
      swiper.$wrapperEl[0].removeEventListener(event, swiper.autoplay.onTransitionEnd);
    });
  },
  onMouseLeave: function onMouseLeave() {
    var swiper = this;

    if (swiper.params.autoplay.disableOnInteraction) {
      return;
    }

    swiper.autoplay.paused = false;
    swiper.autoplay.run();
  },
  attachMouseEvents: function attachMouseEvents() {
    var swiper = this;

    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.$el.on('mouseenter', swiper.autoplay.onMouseEnter);
      swiper.$el.on('mouseleave', swiper.autoplay.onMouseLeave);
    }
  },
  detachMouseEvents: function detachMouseEvents() {
    var swiper = this;
    swiper.$el.off('mouseenter', swiper.autoplay.onMouseEnter);
    swiper.$el.off('mouseleave', swiper.autoplay.onMouseLeave);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'autoplay',
  params: {
    autoplay: {
      enabled: false,
      delay: 3000,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      autoplay: _extends({}, Autoplay, {
        running: false,
        paused: false
      })
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.autoplay.enabled) {
        swiper.autoplay.start();
        var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
        document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
        swiper.autoplay.attachMouseEvents();
      }
    },
    beforeTransitionStart: function beforeTransitionStart(swiper, speed, internal) {
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          swiper.autoplay.stop();
        }
      }
    },
    sliderFirstMove: function sliderFirstMove(swiper) {
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }
      }
    },
    touchEnd: function touchEnd(swiper) {
      if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.run();
      }
    },
    destroy: function destroy(swiper) {
      swiper.autoplay.detachMouseEvents();

      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }

      var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
      document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/controller/controller.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/controller/controller.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

var Controller = {
  LinearSpline: function LinearSpline(x, y) {
    var binarySearch = function search() {
      var maxIndex;
      var minIndex;
      var guess;
      return function (array, val) {
        minIndex = -1;
        maxIndex = array.length;

        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;

          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }

        return maxIndex;
      };
    }();

    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.

    var i1;
    var i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

      return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
    };

    return this;
  },
  // xxx: for now i will just save one spline function to to
  getInterpolateFunction: function getInterpolateFunction(c) {
    var swiper = this;

    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  },
  setTranslate: function setTranslate(_setTranslate, byController) {
    var swiper = this;
    var controlled = swiper.controller.control;
    var multiplier;
    var controlledTranslate;
    var Swiper = swiper.constructor;

    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

      if (swiper.params.controller.by === 'slide') {
        swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out

        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }

      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }

    if (Array.isArray(controlled)) {
      for (var i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  },
  setTransition: function setTransition(duration, byController) {
    var swiper = this;
    var Swiper = swiper.constructor;
    var controlled = swiper.controller.control;
    var i;

    function setControlledTransition(c) {
      c.setTransition(duration, swiper);

      if (duration !== 0) {
        c.transitionStart();

        if (c.params.autoHeight) {
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(function () {
            c.updateAutoHeight();
          });
        }

        c.$wrapperEl.transitionEnd(function () {
          if (!controlled) return;

          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }

          c.transitionEnd();
        });
      }
    }

    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper && byController !== controlled) {
      setControlledTransition(controlled);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'controller',
  params: {
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide' // or 'container'

    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["bindModuleMethods"])(swiper, {
      controller: _extends({
        control: swiper.params.controller.control
      }, Controller)
    });
  },
  on: {
    update: function update(swiper) {
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    resize: function resize(swiper) {
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    observerUpdate: function observerUpdate(swiper) {
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    setTranslate: function setTranslate(swiper, translate, byController) {
      if (!swiper.controller.control) return;
      swiper.controller.setTranslate(translate, byController);
    },
    setTransition: function setTransition(swiper, duration, byController) {
      if (!swiper.controller.control) return;
      swiper.controller.setTransition(duration, byController);
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBreakpoint; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

function getBreakpoint(breakpoints, base, containerEl) {
  if (base === void 0) {
    base = 'window';
  }

  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  var breakpoint = false;
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  var points = Object.keys(breakpoints).map(function (point) {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      var minRatio = parseFloat(point.substr(1));
      var value = currentHeight * minRatio;
      return {
        value: value,
        point: point
      };
    }

    return {
      value: point,
      point: point
    };
  });
  points.sort(function (a, b) {
    return parseInt(a.value, 10) - parseInt(b.value, 10);
  });

  for (var i = 0; i < points.length; i += 1) {
    var _points$i = points[i],
        point = _points$i.point,
        value = _points$i.value;

    if (base === 'window') {
      if (window.matchMedia("(min-width: " + value + "px)").matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }

  return breakpoint || 'max';
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/breakpoints/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/breakpoints/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setBreakpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setBreakpoint */ "./node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js");
/* harmony import */ var _getBreakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getBreakpoint */ "./node_modules/swiper/esm/components/core/breakpoints/getBreakpoint.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  setBreakpoint: _setBreakpoint__WEBPACK_IMPORTED_MODULE_0__["default"],
  getBreakpoint: _getBreakpoint__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/breakpoints/setBreakpoint.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setBreakpoint; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function setBreakpoint() {
  var swiper = this;
  var activeIndex = swiper.activeIndex,
      initialized = swiper.initialized,
      _swiper$loopedSlides = swiper.loopedSlides,
      loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
      params = swiper.params,
      $el = swiper.$el;
  var breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

  var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

  if (breakpointOnlyParams) {
    ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
      var paramValue = breakpointOnlyParams[param];
      if (typeof paramValue === 'undefined') return;

      if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
        breakpointOnlyParams[param] = 'auto';
      } else if (param === 'slidesPerView') {
        breakpointOnlyParams[param] = parseFloat(paramValue);
      } else {
        breakpointOnlyParams[param] = parseInt(paramValue, 10);
      }
    });
  }

  var breakpointParams = breakpointOnlyParams || swiper.originalParams;
  var wasMultiRow = params.slidesPerColumn > 1;
  var isMultiRow = breakpointParams.slidesPerColumn > 1;
  var wasEnabled = params.enabled;

  if (wasMultiRow && !isMultiRow) {
    $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    $el.addClass(params.containerModifierClass + "multirow");

    if (breakpointParams.slidesPerColumnFill && breakpointParams.slidesPerColumnFill === 'column' || !breakpointParams.slidesPerColumnFill && params.slidesPerColumnFill === 'column') {
      $el.addClass(params.containerModifierClass + "multirow-column");
    }

    swiper.emitContainerClasses();
  }

  var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

  if (directionChanged && initialized) {
    swiper.changeDirection();
  }

  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.params, breakpointParams);
  var isEnabled = swiper.params.enabled;
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });

  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }

  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);

  if (needsReLoop && initialized) {
    swiper.loopDestroy();
    swiper.loopCreate();
    swiper.updateSlides();
    swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
  }

  swiper.emit('breakpoint', breakpointParams);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/check-overflow/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/check-overflow/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function checkOverflow() {
  var swiper = this;
  var params = swiper.params;
  var wasLocked = swiper.isLocked;
  var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

  if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
    swiper.isLocked = lastSlidePosition <= swiper.size;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }

  swiper.allowSlideNext = !swiper.isLocked;
  swiper.allowSlidePrev = !swiper.isLocked; // events

  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
    if (swiper.navigation) swiper.navigation.update();
  }
}

/* harmony default export */ __webpack_exports__["default"] = ({
  checkOverflow: checkOverflow
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/classes/addClasses.js":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/classes/addClasses.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClasses; });
function prepareClasses(entries, prefix) {
  var resultClasses = [];
  entries.forEach(function (item) {
    if (typeof item === 'object') {
      Object.keys(item).forEach(function (classNames) {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}

function addClasses() {
  var swiper = this;
  var classNames = swiper.classNames,
      params = swiper.params,
      rtl = swiper.rtl,
      $el = swiper.$el,
      device = swiper.device,
      support = swiper.support; // prettier-ignore

  var suffixes = prepareClasses(['initialized', params.direction, {
    'pointer-events': support.pointerEvents && !support.touch
  }, {
    'free-mode': params.freeMode
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'multirow': params.slidesPerColumn > 1
  }, {
    'multirow-column': params.slidesPerColumn > 1 && params.slidesPerColumnFill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }], params.containerModifierClass);
  classNames.push.apply(classNames, suffixes);
  $el.addClass([].concat(classNames).join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/classes/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/classes/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addClasses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addClasses */ "./node_modules/swiper/esm/components/core/classes/addClasses.js");
/* harmony import */ var _removeClasses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeClasses */ "./node_modules/swiper/esm/components/core/classes/removeClasses.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  addClasses: _addClasses__WEBPACK_IMPORTED_MODULE_0__["default"],
  removeClasses: _removeClasses__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/classes/removeClasses.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/classes/removeClasses.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClasses; });
function removeClasses() {
  var swiper = this;
  var $el = swiper.$el,
      classNames = swiper.classNames;
  $el.removeClass(classNames.join(' '));
  swiper.emitContainerClasses();
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/core-class.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/core-class.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
/* harmony import */ var _utils_get_support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/get-support */ "./node_modules/swiper/esm/utils/get-support.js");
/* harmony import */ var _utils_get_device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/get-device */ "./node_modules/swiper/esm/utils/get-device.js");
/* harmony import */ var _utils_get_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/get-browser */ "./node_modules/swiper/esm/utils/get-browser.js");
/* harmony import */ var _modules_resize_resize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/resize/resize */ "./node_modules/swiper/esm/modules/resize/resize.js");
/* harmony import */ var _modules_observer_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/observer/observer */ "./node_modules/swiper/esm/modules/observer/observer.js");
/* harmony import */ var _modular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modular */ "./node_modules/swiper/esm/components/core/modular.js");
/* harmony import */ var _events_emitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./events-emitter */ "./node_modules/swiper/esm/components/core/events-emitter.js");
/* harmony import */ var _update_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./update/index */ "./node_modules/swiper/esm/components/core/update/index.js");
/* harmony import */ var _translate_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./translate/index */ "./node_modules/swiper/esm/components/core/translate/index.js");
/* harmony import */ var _transition_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transition/index */ "./node_modules/swiper/esm/components/core/transition/index.js");
/* harmony import */ var _slide_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./slide/index */ "./node_modules/swiper/esm/components/core/slide/index.js");
/* harmony import */ var _loop_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loop/index */ "./node_modules/swiper/esm/components/core/loop/index.js");
/* harmony import */ var _grab_cursor_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grab-cursor/index */ "./node_modules/swiper/esm/components/core/grab-cursor/index.js");
/* harmony import */ var _manipulation_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./manipulation/index */ "./node_modules/swiper/esm/components/core/manipulation/index.js");
/* harmony import */ var _events_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./events/index */ "./node_modules/swiper/esm/components/core/events/index.js");
/* harmony import */ var _breakpoints_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./breakpoints/index */ "./node_modules/swiper/esm/components/core/breakpoints/index.js");
/* harmony import */ var _classes_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./classes/index */ "./node_modules/swiper/esm/components/core/classes/index.js");
/* harmony import */ var _images_index__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/index */ "./node_modules/swiper/esm/components/core/images/index.js");
/* harmony import */ var _check_overflow_index__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./check-overflow/index */ "./node_modules/swiper/esm/components/core/check-overflow/index.js");
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./defaults */ "./node_modules/swiper/esm/components/core/defaults.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint no-param-reassign: "off" */























var prototypes = {
  modular: _modular__WEBPACK_IMPORTED_MODULE_8__["default"],
  eventsEmitter: _events_emitter__WEBPACK_IMPORTED_MODULE_9__["default"],
  update: _update_index__WEBPACK_IMPORTED_MODULE_10__["default"],
  translate: _translate_index__WEBPACK_IMPORTED_MODULE_11__["default"],
  transition: _transition_index__WEBPACK_IMPORTED_MODULE_12__["default"],
  slide: _slide_index__WEBPACK_IMPORTED_MODULE_13__["default"],
  loop: _loop_index__WEBPACK_IMPORTED_MODULE_14__["default"],
  grabCursor: _grab_cursor_index__WEBPACK_IMPORTED_MODULE_15__["default"],
  manipulation: _manipulation_index__WEBPACK_IMPORTED_MODULE_16__["default"],
  events: _events_index__WEBPACK_IMPORTED_MODULE_17__["default"],
  breakpoints: _breakpoints_index__WEBPACK_IMPORTED_MODULE_18__["default"],
  checkOverflow: _check_overflow_index__WEBPACK_IMPORTED_MODULE_21__["default"],
  classes: _classes_index__WEBPACK_IMPORTED_MODULE_19__["default"],
  images: _images_index__WEBPACK_IMPORTED_MODULE_20__["default"]
};
var extendedDefaults = {};

var Swiper = /*#__PURE__*/function () {
  function Swiper() {
    var el;
    var params;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      el = args[0];
      params = args[1];
    }

    if (!params) params = {};
    params = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, params);
    if (el && !params.el) params.el = el;

    if (params.el && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el).length > 1) {
      var swipers = [];
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el).each(function (containerEl) {
        var newParams = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    } // Swiper Instance


    var swiper = this;
    swiper.__swiper__ = true;
    swiper.support = Object(_utils_get_support__WEBPACK_IMPORTED_MODULE_3__["getSupport"])();
    swiper.device = Object(_utils_get_device__WEBPACK_IMPORTED_MODULE_4__["getDevice"])({
      userAgent: params.userAgent
    });
    swiper.browser = Object(_utils_get_browser__WEBPACK_IMPORTED_MODULE_5__["getBrowser"])();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];

    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }

    Object.keys(swiper.modules).forEach(function (moduleName) {
      var module = swiper.modules[moduleName];

      if (module.params) {
        var moduleParamName = Object.keys(module.params)[0];
        var moduleParams = module.params[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) return;

        if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
          params[moduleParamName] = {
            auto: true
          };
        }

        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }

        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }

        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
      }
    }); // Extend defaults with modules params

    var swiperParams = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, _defaults__WEBPACK_IMPORTED_MODULE_22__["default"]);
    swiper.useParams(swiperParams); // Extend defaults with passed params

    swiper.params = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, swiper.params);
    swiper.passedParams = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, params); // add event listeners

    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(function (eventName) {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }

    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    } // Save Dom lib


    swiper.$ = _utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"]; // Extend Swiper

    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(swiper, {
      enabled: swiper.params.enabled,
      el: el,
      // Classes
      classNames: [],
      // Slides
      slides: Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal: function isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical: function isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEvents: function touchEvents() {
        var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
        var desktop = ['mousedown', 'mousemove', 'mouseup'];

        if (swiper.support.pointerEvents) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        }

        swiper.touchEventsTouch = {
          start: touch[0],
          move: touch[1],
          end: touch[2],
          cancel: touch[3]
        };
        swiper.touchEventsDesktop = {
          start: desktop[0],
          move: desktop[1],
          end: desktop[2]
        };
        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
      }(),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }); // Install Modules

    swiper.useModules();
    swiper.emit('_swiper'); // Init

    if (swiper.params.init) {
      swiper.init();
    } // Return app instance


    return swiper;
  }

  var _proto = Swiper.prototype;

  _proto.enable = function enable() {
    var swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;

    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    swiper.emit('enable');
  };

  _proto.disable = function disable() {
    var swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;

    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }

    swiper.emit('disable');
  };

  _proto.setProgress = function setProgress(progress, speed) {
    var swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    var min = swiper.minTranslate();
    var max = swiper.maxTranslate();
    var current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  };

  _proto.emitContainerClasses = function emitContainerClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    var classes = swiper.el.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', classes.join(' '));
  };

  _proto.getSlideClasses = function getSlideClasses(slideEl) {
    var swiper = this;
    return slideEl.className.split(' ').filter(function (className) {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  };

  _proto.emitSlidesClasses = function emitSlidesClasses() {
    var swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    var updates = [];
    swiper.slides.each(function (slideEl) {
      var classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl: slideEl,
        classNames: classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  };

  _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
    var swiper = this;
    var params = swiper.params,
        slides = swiper.slides,
        slidesGrid = swiper.slidesGrid,
        swiperSize = swiper.size,
        activeIndex = swiper.activeIndex;
    var spv = 1;

    if (params.centeredSlides) {
      var slideSize = slides[activeIndex].swiperSlideSize;
      var breakLoop;

      for (var i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }

      for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
        if (slides[_i] && !breakLoop) {
          slideSize += slides[_i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
        if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
          spv += 1;
        }
      }
    }

    return spv;
  };

  _proto.update = function update() {
    var swiper = this;
    if (!swiper || swiper.destroyed) return;
    var snapGrid = swiper.snapGrid,
        params = swiper.params; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    }

    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    function setTranslate() {
      var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    var translated;

    if (swiper.params.freeMode) {
      setTranslate();

      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (!translated) {
        setTranslate();
      }
    }

    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }

    swiper.emit('update');
  };

  _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
    if (needUpdate === void 0) {
      needUpdate = true;
    }

    var swiper = this;
    var currentDirection = swiper.params.direction;

    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }

    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }

    swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.each(function (slideEl) {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  };

  _proto.mount = function mount(el) {
    var swiper = this;
    if (swiper.mounted) return true; // Find el

    var $el = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(el || swiper.params.el);
    el = $el[0];

    if (!el) {
      return false;
    }

    el.swiper = swiper;

    var getWrapperSelector = function getWrapperSelector() {
      return "." + (swiper.params.wrapperClass || '').trim().split(' ').join('.');
    };

    var getWrapper = function getWrapper() {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        var res = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

        res.children = function (options) {
          return $el.children(options);
        };

        return res;
      }

      return $el.children(getWrapperSelector());
    }; // Find Wrapper


    var $wrapperEl = getWrapper();

    if ($wrapperEl.length === 0 && swiper.params.createElements) {
      var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
      var wrapper = document.createElement('div');
      $wrapperEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(wrapper);
      wrapper.className = swiper.params.wrapperClass;
      $el.append(wrapper);
      $el.children("." + swiper.params.slideClass).each(function (slideEl) {
        $wrapperEl.append(slideEl);
      });
    }

    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(swiper, {
      $el: $el,
      el: el,
      $wrapperEl: $wrapperEl,
      wrapperEl: $wrapperEl[0],
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box'
    });
    return true;
  };

  _proto.init = function init(el) {
    var swiper = this;
    if (swiper.initialized) return swiper;
    var mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit'); // Set breakpoint

    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    } // Add Classes


    swiper.addClasses(); // Create loop

    if (swiper.params.loop) {
      swiper.loopCreate();
    } // Update size


    swiper.updateSize(); // Update slides

    swiper.updateSlides();

    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    } // Set Grab Cursor


    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    } // Slide To Initial Slide


    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    } // Attach events


    swiper.attachEvents(); // Init Flag

    swiper.initialized = true; // Emit

    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  };

  _proto.destroy = function destroy(deleteInstance, cleanStyles) {
    if (deleteInstance === void 0) {
      deleteInstance = true;
    }

    if (cleanStyles === void 0) {
      cleanStyles = true;
    }

    var swiper = this;
    var params = swiper.params,
        $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides;

    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }

    swiper.emit('beforeDestroy'); // Init Flag

    swiper.initialized = false; // Detach events

    swiper.detachEvents(); // Destroy loop

    if (params.loop) {
      swiper.loopDestroy();
    } // Cleanup styles


    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');

      if (slides && slides.length) {
        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
      }
    }

    swiper.emit('destroy'); // Detach emitter events

    Object.keys(swiper.eventsListeners).forEach(function (eventName) {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["deleteProps"])(swiper);
    }

    swiper.destroyed = true;
    return null;
  };

  Swiper.extendDefaults = function extendDefaults(newDefaults) {
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(extendedDefaults, newDefaults);
  };

  Swiper.installModule = function installModule(module) {
    if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
    var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])();
    Swiper.prototype.modules[name] = module;
  };

  Swiper.use = function use(module) {
    if (Array.isArray(module)) {
      module.forEach(function (m) {
        return Swiper.installModule(m);
      });
      return Swiper;
    }

    Swiper.installModule(module);
    return Swiper;
  };

  _createClass(Swiper, null, [{
    key: "extendedDefaults",
    get: function get() {
      return extendedDefaults;
    }
  }, {
    key: "defaults",
    get: function get() {
      return _defaults__WEBPACK_IMPORTED_MODULE_22__["default"];
    }
  }]);

  return Swiper;
}();

Object.keys(prototypes).forEach(function (prototypeGroup) {
  Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([_modules_resize_resize__WEBPACK_IMPORTED_MODULE_6__["default"], _modules_observer_observer__WEBPACK_IMPORTED_MODULE_7__["default"]]);
/* harmony default export */ __webpack_exports__["default"] = (Swiper);

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/defaults.js":
/*!*************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/defaults.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: false,
  nested: false,
  createElements: false,
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: false,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // Images
  preloadImages: true,
  updateOnImagesReady: true,
  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,
  loopPreventsSlide: true,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  // NS
  containerModifierClass: 'swiper-container-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events-emitter.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events-emitter.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-underscore-dangle */
/* harmony default export */ __webpack_exports__["default"] = ({
  on: function on(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(function (event) {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once: function once(events, handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;

    function onceHandler() {
      self.off(events, onceHandler);

      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      handler.apply(self, args);
    }

    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny: function onAny(handler, priority) {
    var self = this;
    if (typeof handler !== 'function') return self;
    var method = priority ? 'unshift' : 'push';

    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }

    return self;
  },
  offAny: function offAny(handler) {
    var self = this;
    if (!self.eventsAnyListeners) return self;
    var index = self.eventsAnyListeners.indexOf(handler);

    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }

    return self;
  },
  off: function off(events, handler) {
    var self = this;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(function (event) {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler, index) {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit: function emit() {
    var self = this;
    if (!self.eventsListeners) return self;
    var events;
    var data;
    var context;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }

    data.unshift(context);
    var eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(function (event) {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(function (eventHandler) {
          eventHandler.apply(context, [event].concat(data));
        });
      }

      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(function (eventHandler) {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _onTouchStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onTouchStart */ "./node_modules/swiper/esm/components/core/events/onTouchStart.js");
/* harmony import */ var _onTouchMove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onTouchMove */ "./node_modules/swiper/esm/components/core/events/onTouchMove.js");
/* harmony import */ var _onTouchEnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onTouchEnd */ "./node_modules/swiper/esm/components/core/events/onTouchEnd.js");
/* harmony import */ var _onResize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onResize */ "./node_modules/swiper/esm/components/core/events/onResize.js");
/* harmony import */ var _onClick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./onClick */ "./node_modules/swiper/esm/components/core/events/onClick.js");
/* harmony import */ var _onScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./onScroll */ "./node_modules/swiper/esm/components/core/events/onScroll.js");







var dummyEventAttached = false;

function dummyEventListener() {}

function attachEvents() {
  var swiper = this;
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  swiper.onTouchStart = _onTouchStart__WEBPACK_IMPORTED_MODULE_1__["default"].bind(swiper);
  swiper.onTouchMove = _onTouchMove__WEBPACK_IMPORTED_MODULE_2__["default"].bind(swiper);
  swiper.onTouchEnd = _onTouchEnd__WEBPACK_IMPORTED_MODULE_3__["default"].bind(swiper);

  if (params.cssMode) {
    swiper.onScroll = _onScroll__WEBPACK_IMPORTED_MODULE_6__["default"].bind(swiper);
  }

  swiper.onClick = _onClick__WEBPACK_IMPORTED_MODULE_5__["default"].bind(swiper);
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
        passive: false,
        capture: capture
      } : capture);
      el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }

      if (!dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
      }
    }

    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.addEventListener('mousedown', swiper.onTouchStart, false);
      document.addEventListener('mousemove', swiper.onTouchMove, capture);
      document.addEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el.addEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.addEventListener('scroll', swiper.onScroll);
  } // Resize handler


  if (params.updateOnWindowResize) {
    swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_4__["default"], true);
  } else {
    swiper.on('observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_4__["default"], true);
  }
}

function detachEvents() {
  var swiper = this;
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var params = swiper.params,
      touchEvents = swiper.touchEvents,
      el = swiper.el,
      wrapperEl = swiper.wrapperEl,
      device = swiper.device,
      support = swiper.support;
  var capture = !!params.nested; // Touch Events

  if (!support.touch && support.pointerEvents) {
    el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
    document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
    document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
  } else {
    if (support.touch) {
      var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
      el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
    }

    if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
      el.removeEventListener('mousedown', swiper.onTouchStart, false);
      document.removeEventListener('mousemove', swiper.onTouchMove, capture);
      document.removeEventListener('mouseup', swiper.onTouchEnd, false);
    }
  } // Prevent Links Clicks


  if (params.preventClicks || params.preventClicksPropagation) {
    el.removeEventListener('click', swiper.onClick, true);
  }

  if (params.cssMode) {
    wrapperEl.removeEventListener('scroll', swiper.onScroll);
  } // Resize handler


  swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', _onResize__WEBPACK_IMPORTED_MODULE_4__["default"]);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  attachEvents: attachEvents,
  detachEvents: detachEvents
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/onClick.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onClick.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onClick; });
function onClick(e) {
  var swiper = this;
  if (!swiper.enabled) return;

  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();

    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/onResize.js":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onResize.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onResize; });
function onResize() {
  var swiper = this;
  var params = swiper.params,
      el = swiper.el;
  if (el && el.offsetWidth === 0) return; // Breakpoints

  if (params.breakpoints) {
    swiper.setBreakpoint();
  } // Save locks


  var allowSlideNext = swiper.allowSlideNext,
      allowSlidePrev = swiper.allowSlidePrev,
      snapGrid = swiper.snapGrid; // Disable locks on resize

  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();

  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    swiper.slideTo(swiper.activeIndex, 0, false, true);
  }

  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    swiper.autoplay.run();
  } // Return locks after resize


  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;

  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/onScroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onScroll.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onScroll; });
function onScroll() {
  var swiper = this;
  var wrapperEl = swiper.wrapperEl,
      rtlTranslate = swiper.rtlTranslate,
      enabled = swiper.enabled;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;

  if (swiper.isHorizontal()) {
    if (rtlTranslate) {
      swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollLeft;
    }
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  } // eslint-disable-next-line


  if (swiper.translate === -0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }

  swiper.emit('setTranslate', swiper.translate, false);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/onTouchEnd.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onTouchEnd.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onTouchEnd; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function onTouchEnd(event) {
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      $wrapperEl = swiper.$wrapperEl,
      slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      enabled = swiper.enabled;
  if (!enabled) return;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }

  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }

    data.isMoved = false;
    data.startMoving = false;
    return;
  } // Return Grab Cursor


  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  } // Time diff


  var touchEndTime = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["now"])();
  var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap click', e);

    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }

  data.lastClickTime = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["now"])();
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(function () {
    if (!swiper.destroyed) swiper.allowClick = true;
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  var currentPos;

  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }

  if (params.cssMode) {
    return;
  }

  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }

      return;
    }

    if (params.freeModeMomentum) {
      if (data.velocities.length > 1) {
        var lastMoveEvent = data.velocities.pop();
        var velocityEvent = data.velocities.pop();
        var distance = lastMoveEvent.position - velocityEvent.position;
        var time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;

        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        } // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.


        if (time > 150 || Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["now"])() - lastMoveEvent.time > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }

      swiper.velocity *= params.freeModeMomentumVelocityRatio;
      data.velocities.length = 0;
      var momentumDuration = 1000 * params.freeModeMomentumRatio;
      var momentumDistance = swiper.velocity * momentumDuration;
      var newPosition = swiper.translate + momentumDistance;
      if (rtl) newPosition = -newPosition;
      var doBounce = false;
      var afterBouncePosition;
      var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      var needsLoopFix;

      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }

          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }

          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }

        if (params.loop && params.centeredSlides) needsLoopFix = true;
      } else if (params.freeModeSticky) {
        var nextSlide;

        for (var j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }

        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }

        newPosition = -newPosition;
      }

      if (needsLoopFix) {
        swiper.once('transitionEnd', function () {
          swiper.loopFix();
        });
      } // Fix duration


      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }

        if (params.freeModeSticky) {
          // If freeModeSticky is active and the user ends a swipe with a slow-velocity
          // event, then durations can be 20+ seconds to slide one (or zero!) slides.
          // It's easy to see this when simulating touch with mouse events. To fix this,
          // limit single-slide swipes to the default slide duration. This also has the
          // nice side effect of matching slide speed if the user stopped moving before
          // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
          // For faster swipes, also apply limits (albeit higher ones).
          var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
          var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

          if (moveDistance < currentSlideSize) {
            momentumDuration = params.speed;
          } else if (moveDistance < 2 * currentSlideSize) {
            momentumDuration = params.speed * 1.5;
          } else {
            momentumDuration = params.speed * 2.5;
          }
        }
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);
        swiper.animating = true;
        $wrapperEl.transitionEnd(function () {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
          swiper.emit('momentumBounce');
          swiper.setTransition(params.speed);
          setTimeout(function () {
            swiper.setTranslate(afterBouncePosition);
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }, 0);
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart(true, swiper.swipeDirection);

        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) return;
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.emit('_freeModeNoMomentumRelease');
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    } else if (params.freeModeSticky) {
      swiper.slideToClosest();
      return;
    } else if (params.freeMode) {
      swiper.emit('_freeModeNoMomentumRelease');
    }

    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    return;
  } // Find current slide


  var stopIndex = 0;
  var groupSize = swiper.slidesSizesGrid[0];

  for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (typeof slidesGrid[i + _increment] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + _increment] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  } // Find current slide size


  var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }

    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }

    var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(stopIndex + increment);
      }

      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/onTouchMove.js":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onTouchMove.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onTouchMove; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");



function onTouchMove(event) {
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      rtl = swiper.rtlTranslate,
      enabled = swiper.enabled;
  if (!enabled) return;
  var e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    return;
  }

  if (data.isTouchEvent && e.type !== 'touchmove') return;
  var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
  var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
  var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;

    if (data.isTouched) {
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])();
    }

    return;
  }

  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
      return;
    }
  }

  if (data.isTouchEvent && document.activeElement) {
    if (e.target === document.activeElement && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).is(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }

  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }

  if (e.targetTouches && e.targetTouches.length > 1) return;
  touches.currentX = pageX;
  touches.currentY = pageY;
  var diffX = touches.currentX - touches.startX;
  var diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

  if (typeof data.isScrolling === 'undefined') {
    var touchAngle;

    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }

  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }

  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }

  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }

  if (!data.startMoving) {
    return;
  }

  swiper.allowClick = false;

  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }

  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }

    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);

    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }

    data.allowMomentumBounce = false; // Grab Cursor

    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }

    swiper.emit('sliderFirstMove', e);
  }

  swiper.emit('sliderMove', e);
  data.isMoved = true;
  var diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) diff = -diff;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;
  var disableParentSwiper = true;
  var resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  } // Directions locks


  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }

  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  } // Threshold


  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger || params.cssMode) return; // Update active index in free mode

  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }

  if (params.freeMode) {
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime
      });
    }

    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])()
    });
  } // Update progress


  swiper.updateProgress(data.currentTranslate); // Update translate

  swiper.setTranslate(data.currentTranslate);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/events/onTouchStart.js":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/events/onTouchStart.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return onTouchStart; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");


 // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd

function closestElement(selector, base) {
  if (base === void 0) {
    base = this;
  }

  function __closestFrom(el) {
    if (!el || el === Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])() || el === Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    var found = el.closest(selector);
    return found || __closestFrom(el.getRootNode().host);
  }

  return __closestFrom(base);
}

function onTouchStart(event) {
  var swiper = this;
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var data = swiper.touchEventsData;
  var params = swiper.params,
      touches = swiper.touches,
      enabled = swiper.enabled;
  if (!enabled) return;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }

  var e = event;
  if (e.originalEvent) e = e.originalEvent;
  var $targetEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target);

  if (params.touchEventsTarget === 'wrapper') {
    if (!$targetEl.closest(swiper.wrapperEl).length) return;
  }

  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return; // change target el for shadow root component

  var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

  if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
    $targetEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(event.path[0]);
  }

  var noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass;
  var isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
    swiper.allowClick = true;
    return;
  }

  if (params.swipeHandler) {
    if (!$targetEl.closest(params.swipeHandler)[0]) return;
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  var startX = touches.currentX;
  var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
  var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
    } else {
      return;
    }
  }

  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;

  if (e.type !== 'touchstart') {
    var preventDefault = true;
    if ($targetEl.is(data.focusableElements)) preventDefault = false;

    if (document.activeElement && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
      document.activeElement.blur();
    }

    var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
      e.preventDefault();
    }
  }

  swiper.emit('touchStart', e);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/grab-cursor/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/grab-cursor/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setGrabCursor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setGrabCursor */ "./node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js");
/* harmony import */ var _unsetGrabCursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsetGrabCursor */ "./node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  setGrabCursor: _setGrabCursor__WEBPACK_IMPORTED_MODULE_0__["default"],
  unsetGrabCursor: _unsetGrabCursor__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/grab-cursor/setGrabCursor.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setGrabCursor; });
function setGrabCursor(moving) {
  var swiper = this;
  if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  var el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/grab-cursor/unsetGrabCursor.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return unsetGrabCursor; });
function unsetGrabCursor() {
  var swiper = this;

  if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }

  swiper.el.style.cursor = '';
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/images/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/images/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadImage */ "./node_modules/swiper/esm/components/core/images/loadImage.js");
/* harmony import */ var _preloadImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preloadImages */ "./node_modules/swiper/esm/components/core/images/preloadImages.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  loadImage: _loadImage__WEBPACK_IMPORTED_MODULE_0__["default"],
  preloadImages: _preloadImages__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/images/loadImage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/images/loadImage.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadImage; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");


function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var image;

  function onReady() {
    if (callback) callback();
  }

  var isPicture = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(imageEl).parent('picture')[0];

  if (!isPicture && (!imageEl.complete || !checkForComplete)) {
    if (src) {
      image = new window.Image();
      image.onload = onReady;
      image.onerror = onReady;

      if (sizes) {
        image.sizes = sizes;
      }

      if (srcset) {
        image.srcset = srcset;
      }

      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/images/preloadImages.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/images/preloadImages.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return preloadImages; });
function preloadImages() {
  var swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');

  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) swiper.update();
      swiper.emit('imagesReady');
    }
  }

  for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
    var imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/loop/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loopCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loopCreate */ "./node_modules/swiper/esm/components/core/loop/loopCreate.js");
/* harmony import */ var _loopFix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loopFix */ "./node_modules/swiper/esm/components/core/loop/loopFix.js");
/* harmony import */ var _loopDestroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loopDestroy */ "./node_modules/swiper/esm/components/core/loop/loopDestroy.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  loopCreate: _loopCreate__WEBPACK_IMPORTED_MODULE_0__["default"],
  loopFix: _loopFix__WEBPACK_IMPORTED_MODULE_1__["default"],
  loopDestroy: _loopDestroy__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/loop/loopCreate.js":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/loopCreate.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loopCreate; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");


function loopCreate() {
  var swiper = this;
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
  var slides = $wrapperEl.children("." + params.slideClass);

  if (params.loopFillGroupWithBlank) {
    var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

    if (blankSlidesNum !== params.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankNode = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
        $wrapperEl.append(blankNode);
      }

      slides = $wrapperEl.children("." + params.slideClass);
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
  swiper.loopedSlides += params.loopAdditionalSlides;

  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  var prependSlides = [];
  var appendSlides = [];
  slides.each(function (el, index) {
    var slide = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(el);

    if (index < swiper.loopedSlides) {
      appendSlides.push(el);
    }

    if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
      prependSlides.push(el);
    }

    slide.attr('data-swiper-slide-index', index);
  });

  for (var _i = 0; _i < appendSlides.length; _i += 1) {
    $wrapperEl.append(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
  }

  for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
    $wrapperEl.prepend(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/loop/loopDestroy.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/loopDestroy.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loopDestroy; });
function loopDestroy() {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      slides = swiper.slides;
  $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
  slides.removeAttr('data-swiper-slide-index');
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/loop/loopFix.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/loop/loopFix.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loopFix; });
function loopFix() {
  var swiper = this;
  swiper.emit('beforeLoopFix');
  var activeIndex = swiper.activeIndex,
      slides = swiper.slides,
      loopedSlides = swiper.loopedSlides,
      allowSlidePrev = swiper.allowSlidePrev,
      allowSlideNext = swiper.allowSlideNext,
      snapGrid = swiper.snapGrid,
      rtl = swiper.rtlTranslate;
  var newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  var snapTranslate = -snapGrid[activeIndex];
  var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

  if (activeIndex < loopedSlides) {
    newIndex = slides.length - loopedSlides * 3 + activeIndex;
    newIndex += loopedSlides;
    var slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  } else if (activeIndex >= slides.length - loopedSlides) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;

    var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

    if (_slideChanged && diff !== 0) {
      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
  }

  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  swiper.emit('loopFix');
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/manipulation/addSlide.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/addSlide.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addSlide; });
function addSlide(index, slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }

  var baseLength = swiper.slides.length;

  if (index <= 0) {
    swiper.prependSlide(slides);
    return;
  }

  if (index >= baseLength) {
    swiper.appendSlide(slides);
    return;
  }

  var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
  var slidesBuffer = [];

  for (var i = baseLength - 1; i >= index; i -= 1) {
    var currentSlide = swiper.slides.eq(i);
    currentSlide.remove();
    slidesBuffer.unshift(currentSlide);
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (var _i = 0; _i < slides.length; _i += 1) {
      if (slides[_i]) $wrapperEl.append(slides[_i]);
    }

    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
  } else {
    $wrapperEl.append(slides);
  }

  for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
    $wrapperEl.append(slidesBuffer[_i2]);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/manipulation/appendSlide.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/appendSlide.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return appendSlide; });
function appendSlide(slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl,
      params = swiper.params;

  if (params.loop) {
    swiper.loopDestroy();
  }

  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.append(slides[i]);
    }
  } else {
    $wrapperEl.append(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/manipulation/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _appendSlide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appendSlide */ "./node_modules/swiper/esm/components/core/manipulation/appendSlide.js");
/* harmony import */ var _prependSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prependSlide */ "./node_modules/swiper/esm/components/core/manipulation/prependSlide.js");
/* harmony import */ var _addSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addSlide */ "./node_modules/swiper/esm/components/core/manipulation/addSlide.js");
/* harmony import */ var _removeSlide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeSlide */ "./node_modules/swiper/esm/components/core/manipulation/removeSlide.js");
/* harmony import */ var _removeAllSlides__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeAllSlides */ "./node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  appendSlide: _appendSlide__WEBPACK_IMPORTED_MODULE_0__["default"],
  prependSlide: _prependSlide__WEBPACK_IMPORTED_MODULE_1__["default"],
  addSlide: _addSlide__WEBPACK_IMPORTED_MODULE_2__["default"],
  removeSlide: _removeSlide__WEBPACK_IMPORTED_MODULE_3__["default"],
  removeAllSlides: _removeAllSlides__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/manipulation/prependSlide.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/prependSlide.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prependSlide; });
function prependSlide(slides) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;

  if (params.loop) {
    swiper.loopDestroy();
  }

  var newActiveIndex = activeIndex + 1;

  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) $wrapperEl.prepend(slides[i]);
    }

    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  swiper.slideTo(newActiveIndex, 0, false);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/removeAllSlides.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeAllSlides; });
function removeAllSlides() {
  var swiper = this;
  var slidesIndexes = [];

  for (var i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }

  swiper.removeSlide(slidesIndexes);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/manipulation/removeSlide.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/manipulation/removeSlide.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeSlide; });
function removeSlide(slidesIndexes) {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex;
  var activeIndexBuffer = activeIndex;

  if (params.loop) {
    activeIndexBuffer -= swiper.loopedSlides;
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children("." + params.slideClass);
  }

  var newActiveIndex = activeIndexBuffer;
  var indexToRemove;

  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (var i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    }

    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && swiper.support.observer)) {
    swiper.update();
  }

  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/modular.js":
/*!************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/modular.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  useParams: function useParams(instanceParams) {
    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName]; // Extend params

      if (module.params) {
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(instanceParams, module.params);
      }
    });
  },
  useModules: function useModules(modulesParams) {
    if (modulesParams === void 0) {
      modulesParams = {};
    }

    var instance = this;
    if (!instance.modules) return;
    Object.keys(instance.modules).forEach(function (moduleName) {
      var module = instance.modules[moduleName];
      var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

      if (module.on && instance.on) {
        Object.keys(module.on).forEach(function (moduleEventName) {
          instance.on(moduleEventName, module.on[moduleEventName]);
        });
      } // Module create callback


      if (module.create) {
        module.create.bind(instance)(moduleParams);
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slideTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideTo */ "./node_modules/swiper/esm/components/core/slide/slideTo.js");
/* harmony import */ var _slideToLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slideToLoop */ "./node_modules/swiper/esm/components/core/slide/slideToLoop.js");
/* harmony import */ var _slideNext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideNext */ "./node_modules/swiper/esm/components/core/slide/slideNext.js");
/* harmony import */ var _slidePrev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slidePrev */ "./node_modules/swiper/esm/components/core/slide/slidePrev.js");
/* harmony import */ var _slideReset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slideReset */ "./node_modules/swiper/esm/components/core/slide/slideReset.js");
/* harmony import */ var _slideToClosest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slideToClosest */ "./node_modules/swiper/esm/components/core/slide/slideToClosest.js");
/* harmony import */ var _slideToClickedSlide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slideToClickedSlide */ "./node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js");







/* harmony default export */ __webpack_exports__["default"] = ({
  slideTo: _slideTo__WEBPACK_IMPORTED_MODULE_0__["default"],
  slideToLoop: _slideToLoop__WEBPACK_IMPORTED_MODULE_1__["default"],
  slideNext: _slideNext__WEBPACK_IMPORTED_MODULE_2__["default"],
  slidePrev: _slidePrev__WEBPACK_IMPORTED_MODULE_3__["default"],
  slideReset: _slideReset__WEBPACK_IMPORTED_MODULE_4__["default"],
  slideToClosest: _slideToClosest__WEBPACK_IMPORTED_MODULE_5__["default"],
  slideToClickedSlide: _slideToClickedSlide__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slideNext.js":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideNext.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slideNext; });
/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      enabled = swiper.enabled;
  if (!enabled) return swiper;
  var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slidePrev.js":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slidePrev.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slidePrev; });
/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var params = swiper.params,
      animating = swiper.animating,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      rtlTranslate = swiper.rtlTranslate,
      enabled = swiper.enabled;
  if (!enabled) return swiper;

  if (params.loop) {
    if (animating && params.loopPreventsSlide) return false;
    swiper.loopFix(); // eslint-disable-next-line

    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
  }

  var translate = rtlTranslate ? swiper.translate : -swiper.translate;

  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }

  var normalizedTranslate = normalize(translate);
  var normalizedSnapGrid = snapGrid.map(function (val) {
    return normalize(val);
  });
  var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

  if (typeof prevSnap === 'undefined' && params.cssMode) {
    snapGrid.forEach(function (snap) {
      if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
    });
  }

  var prevIndex;

  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
  }

  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slideReset.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideReset.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slideReset; });
/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks, internal) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slideTo.js":
/*!******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideTo.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slideTo; });
function slideTo(index, speed, runCallbacks, internal, initial) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (typeof index !== 'number' && typeof index !== 'string') {
    throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index + "] given.");
  }

  if (typeof index === 'string') {
    /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */
    var indexAsNumber = parseInt(index, 10);
    /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */

    var isValidNumber = isFinite(indexAsNumber);

    if (!isValidNumber) {
      throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index + "] given.");
    } // Knowing that the converted `index` is a valid number,
    // we can update the original argument's value.


    index = indexAsNumber;
  }

  var swiper = this;
  var slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  var params = swiper.params,
      snapGrid = swiper.snapGrid,
      slidesGrid = swiper.slidesGrid,
      previousIndex = swiper.previousIndex,
      activeIndex = swiper.activeIndex,
      rtl = swiper.rtlTranslate,
      wrapperEl = swiper.wrapperEl,
      enabled = swiper.enabled;

  if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
    return false;
  }

  var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  var translate = -snapGrid[snapIndex]; // Update progress

  swiper.updateProgress(translate); // Normalize slideIndex

  if (params.normalizeSlideIndex) {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      var normalizedTranslate = -Math.floor(translate * 100);
      var normalizedGird = Math.floor(slidesGrid[i] * 100);
      var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGird) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGird && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGird) {
        slideIndex = i;
      }
    }
  } // Directions locks


  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
      return false;
    }

    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) return false;
    }
  }

  var direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

  if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
    swiper.updateActiveIndex(slideIndex); // Update Height

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    swiper.updateSlidesClasses();

    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }

    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }

    return false;
  }

  if (params.cssMode) {
    var isH = swiper.isHorizontal();
    var t = -translate;

    if (rtl) {
      t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
    }

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    swiper.transitionEnd(runCallbacks, direction);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideToClickedSlide.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slideToClickedSlide; });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");


function slideToClickedSlide() {
  var swiper = this;
  var params = swiper.params,
      $wrapperEl = swiper.$wrapperEl;
  var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  var slideToIndex = swiper.clickedIndex;
  var realIndex;

  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

    if (params.centeredSlides) {
      if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["nextTick"])(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["nextTick"])(function () {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slideToClosest.js":
/*!*************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideToClosest.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slideToClosest; });
/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks, internal, threshold) {
  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (threshold === void 0) {
    threshold = 0.5;
  }

  var swiper = this;
  var index = swiper.activeIndex;
  var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    var currentSnap = swiper.snapGrid[snapIndex];
    var nextSnap = swiper.snapGrid[snapIndex + 1];

    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    var prevSnap = swiper.snapGrid[snapIndex - 1];
    var _currentSnap = swiper.snapGrid[snapIndex];

    if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }

  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/slide/slideToLoop.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/slide/slideToLoop.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slideToLoop; });
function slideToLoop(index, speed, runCallbacks, internal) {
  if (index === void 0) {
    index = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var newIndex = index;

  if (swiper.params.loop) {
    newIndex += swiper.loopedSlides;
  }

  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/transition/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setTransition */ "./node_modules/swiper/esm/components/core/transition/setTransition.js");
/* harmony import */ var _transitionStart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transitionStart */ "./node_modules/swiper/esm/components/core/transition/transitionStart.js");
/* harmony import */ var _transitionEnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transitionEnd */ "./node_modules/swiper/esm/components/core/transition/transitionEnd.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  setTransition: _setTransition__WEBPACK_IMPORTED_MODULE_0__["default"],
  transitionStart: _transitionStart__WEBPACK_IMPORTED_MODULE_1__["default"],
  transitionEnd: _transitionEnd__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/transition/setTransition.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/setTransition.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setTransition; });
function setTransition(duration, byController) {
  var swiper = this;

  if (!swiper.params.cssMode) {
    swiper.$wrapperEl.transition(duration);
  }

  swiper.emit('setTransition', duration, byController);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/transition/transitionEnd.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/transitionEnd.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transitionEnd; });
function transitionEnd(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      previousIndex = swiper.previousIndex,
      params = swiper.params;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionEnd');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionEnd');
      return;
    }

    swiper.emit('slideChangeTransitionEnd');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionEnd');
    } else {
      swiper.emit('slidePrevTransitionEnd');
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/transition/transitionStart.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/transition/transitionStart.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return transitionStart; });
function transitionStart(runCallbacks, direction) {
  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  var swiper = this;
  var activeIndex = swiper.activeIndex,
      params = swiper.params,
      previousIndex = swiper.previousIndex;
  if (params.cssMode) return;

  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }

  var dir = direction;

  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }

  swiper.emit('transitionStart');

  if (runCallbacks && activeIndex !== previousIndex) {
    if (dir === 'reset') {
      swiper.emit('slideResetTransitionStart');
      return;
    }

    swiper.emit('slideChangeTransitionStart');

    if (dir === 'next') {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/translate/getTranslate.js":
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/getTranslate.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSwiperTranslate; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function getSwiperTranslate(axis) {
  if (axis === void 0) {
    axis = this.isHorizontal() ? 'x' : 'y';
  }

  var swiper = this;
  var params = swiper.params,
      rtl = swiper.rtlTranslate,
      translate = swiper.translate,
      $wrapperEl = swiper.$wrapperEl;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  if (params.cssMode) {
    return translate;
  }

  var currentTranslate = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["getTranslate"])($wrapperEl[0], axis);
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/translate/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getTranslate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTranslate */ "./node_modules/swiper/esm/components/core/translate/getTranslate.js");
/* harmony import */ var _setTranslate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setTranslate */ "./node_modules/swiper/esm/components/core/translate/setTranslate.js");
/* harmony import */ var _minTranslate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minTranslate */ "./node_modules/swiper/esm/components/core/translate/minTranslate.js");
/* harmony import */ var _maxTranslate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maxTranslate */ "./node_modules/swiper/esm/components/core/translate/maxTranslate.js");
/* harmony import */ var _translateTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translateTo */ "./node_modules/swiper/esm/components/core/translate/translateTo.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  getTranslate: _getTranslate__WEBPACK_IMPORTED_MODULE_0__["default"],
  setTranslate: _setTranslate__WEBPACK_IMPORTED_MODULE_1__["default"],
  minTranslate: _minTranslate__WEBPACK_IMPORTED_MODULE_2__["default"],
  maxTranslate: _maxTranslate__WEBPACK_IMPORTED_MODULE_3__["default"],
  translateTo: _translateTo__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/translate/maxTranslate.js":
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/maxTranslate.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return maxTranslate; });
function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/translate/minTranslate.js":
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/minTranslate.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return minTranslate; });
function minTranslate() {
  return -this.snapGrid[0];
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/translate/setTranslate.js":
/*!***************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/setTranslate.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setTranslate; });
function setTranslate(translate, byController) {
  var swiper = this;
  var rtl = swiper.rtlTranslate,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      wrapperEl = swiper.wrapperEl,
      progress = swiper.progress;
  var x = 0;
  var y = 0;
  var z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
  }

  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }

  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/translate/translateTo.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/translate/translateTo.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return translateTo; });
function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
  if (translate === void 0) {
    translate = 0;
  }

  if (speed === void 0) {
    speed = this.params.speed;
  }

  if (runCallbacks === void 0) {
    runCallbacks = true;
  }

  if (translateBounds === void 0) {
    translateBounds = true;
  }

  var swiper = this;
  var params = swiper.params,
      wrapperEl = swiper.wrapperEl;

  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }

  var minTranslate = swiper.minTranslate();
  var maxTranslate = swiper.maxTranslate();
  var newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

  swiper.updateProgress(newTranslate);

  if (params.cssMode) {
    var isH = swiper.isHorizontal();

    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      // eslint-disable-next-line
      if (wrapperEl.scrollTo) {
        var _wrapperEl$scrollTo;

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      }
    }

    return true;
  }

  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);

    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }

    if (!swiper.animating) {
      swiper.animating = true;

      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;

          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }

      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
    }
  }

  return true;
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _updateSize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateSize */ "./node_modules/swiper/esm/components/core/update/updateSize.js");
/* harmony import */ var _updateSlides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateSlides */ "./node_modules/swiper/esm/components/core/update/updateSlides.js");
/* harmony import */ var _updateAutoHeight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateAutoHeight */ "./node_modules/swiper/esm/components/core/update/updateAutoHeight.js");
/* harmony import */ var _updateSlidesOffset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateSlidesOffset */ "./node_modules/swiper/esm/components/core/update/updateSlidesOffset.js");
/* harmony import */ var _updateSlidesProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./updateSlidesProgress */ "./node_modules/swiper/esm/components/core/update/updateSlidesProgress.js");
/* harmony import */ var _updateProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./updateProgress */ "./node_modules/swiper/esm/components/core/update/updateProgress.js");
/* harmony import */ var _updateSlidesClasses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./updateSlidesClasses */ "./node_modules/swiper/esm/components/core/update/updateSlidesClasses.js");
/* harmony import */ var _updateActiveIndex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateActiveIndex */ "./node_modules/swiper/esm/components/core/update/updateActiveIndex.js");
/* harmony import */ var _updateClickedSlide__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./updateClickedSlide */ "./node_modules/swiper/esm/components/core/update/updateClickedSlide.js");









/* harmony default export */ __webpack_exports__["default"] = ({
  updateSize: _updateSize__WEBPACK_IMPORTED_MODULE_0__["default"],
  updateSlides: _updateSlides__WEBPACK_IMPORTED_MODULE_1__["default"],
  updateAutoHeight: _updateAutoHeight__WEBPACK_IMPORTED_MODULE_2__["default"],
  updateSlidesOffset: _updateSlidesOffset__WEBPACK_IMPORTED_MODULE_3__["default"],
  updateSlidesProgress: _updateSlidesProgress__WEBPACK_IMPORTED_MODULE_4__["default"],
  updateProgress: _updateProgress__WEBPACK_IMPORTED_MODULE_5__["default"],
  updateSlidesClasses: _updateSlidesClasses__WEBPACK_IMPORTED_MODULE_6__["default"],
  updateActiveIndex: _updateActiveIndex__WEBPACK_IMPORTED_MODULE_7__["default"],
  updateClickedSlide: _updateClickedSlide__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateActiveIndex.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateActiveIndex.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateActiveIndex; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function updateActiveIndex(newActiveIndex) {
  var swiper = this;
  var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  var slidesGrid = swiper.slidesGrid,
      snapGrid = swiper.snapGrid,
      params = swiper.params,
      previousIndex = swiper.activeIndex,
      previousRealIndex = swiper.realIndex,
      previousSnapIndex = swiper.snapIndex;
  var activeIndex = newActiveIndex;
  var snapIndex;

  if (typeof activeIndex === 'undefined') {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    } // Normalize slideIndex


    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
    }
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }

  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }

    return;
  } // Get real index


  var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper, {
    snapIndex: snapIndex,
    realIndex: realIndex,
    previousIndex: previousIndex,
    activeIndex: activeIndex
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');

  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }

  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    swiper.emit('slideChange');
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateAutoHeight.js":
/*!****************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateAutoHeight.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateAutoHeight; });
function updateAutoHeight(speed) {
  var swiper = this;
  var activeSlides = [];
  var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  var newHeight = 0;
  var i;

  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }

  var getSlideByIndex = function getSlideByIndex(index) {
    if (isVirtual) {
      return swiper.slides.filter(function (el) {
        return parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index;
      })[0];
    }

    return swiper.slides.eq(index)[0];
  }; // Find slides currently in view


  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      swiper.visibleSlides.each(function (slide) {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        var index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  } // Find new height from highest slide in view


  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      var height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  } // Update Height


  if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateClickedSlide.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateClickedSlide.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateClickedSlide; });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");

function updateClickedSlide(e) {
  var swiper = this;
  var params = swiper.params;
  var slide = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(e.target).closest("." + params.slideClass)[0];
  var slideFound = false;
  var slideIndex;

  if (slide) {
    for (var i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;

    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }

  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateProgress.js":
/*!**************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateProgress.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateProgress; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function updateProgress(translate) {
  var swiper = this;

  if (typeof translate === 'undefined') {
    var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }

  var params = swiper.params;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  var progress = swiper.progress,
      isBeginning = swiper.isBeginning,
      isEnd = swiper.isEnd;
  var wasBeginning = isBeginning;
  var wasEnd = isEnd;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper, {
    progress: progress,
    isBeginning: isBeginning,
    isEnd: isEnd
  });
  if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }

  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }

  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateSize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSize.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateSize; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function updateSize() {
  var swiper = this;
  var width;
  var height;
  var $el = swiper.$el;

  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }

  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }

  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  } // Subtract paddings


  width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
  height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper, {
    width: width,
    height: height,
    size: swiper.isHorizontal() ? width : height
  });
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateSlides.js":
/*!************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlides.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateSlides; });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");

function updateSlides() {
  var swiper = this;

  function getDirectionLabel(property) {
    if (swiper.isHorizontal()) {
      return property;
    } // prettier-ignore


    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }

  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
  }

  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl,
      swiperSize = swiper.size,
      rtl = swiper.rtlTranslate,
      wrongRTL = swiper.wrongRTL;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  var slides = $wrapperEl.children("." + swiper.params.slideClass);
  var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  var snapGrid = [];
  var slidesGrid = [];
  var slidesSizesGrid = [];
  var offsetBefore = params.slidesOffsetBefore;

  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  var offsetAfter = params.slidesOffsetAfter;

  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  var previousSnapGridLength = swiper.snapGrid.length;
  var previousSlidesGridLength = swiper.slidesGrid.length;
  var spaceBetween = params.spaceBetween;
  var slidePosition = -offsetBefore;
  var prevSlideSize = 0;
  var index = 0;

  if (typeof swiperSize === 'undefined') {
    return;
  }

  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  }

  swiper.virtualSize = -spaceBetween; // reset margins

  if (rtl) slides.css({
    marginLeft: '',
    marginBottom: '',
    marginTop: ''
  });else slides.css({
    marginRight: '',
    marginBottom: '',
    marginTop: ''
  });
  var slidesNumberEvenToRows;

  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }

    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  } // Calc slides


  var slideSize;
  var slidesPerColumn = params.slidesPerColumn;
  var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

  for (var i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    var slide = slides.eq(i);

    if (params.slidesPerColumn > 1) {
      // Set slides order
      var newSlideOrderIndex = void 0;
      var column = void 0;
      var row = void 0;

      if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
        var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
        var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
        var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
        row = Math.floor(slideIndexInGroup / columnsInGroup);
        column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
        slide.css({
          '-webkit-box-ordinal-group': newSlideOrderIndex,
          '-moz-box-ordinal-group': newSlideOrderIndex,
          '-ms-flex-order': newSlideOrderIndex,
          '-webkit-order': newSlideOrderIndex,
          order: newSlideOrderIndex
        });
      } else if (params.slidesPerColumnFill === 'column') {
        column = Math.floor(i / slidesPerColumn);
        row = i - column * slidesPerColumn;

        if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
          row += 1;

          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - row * slidesPerRow;
      }

      slide.css(getDirectionLabel('margin-top'), row !== 0 ? params.spaceBetween && params.spaceBetween + "px" : '');
    }

    if (slide.css('display') === 'none') continue; // eslint-disable-line

    if (params.slidesPerView === 'auto') {
      var slideStyles = getComputedStyle(slide[0]);
      var currentTransform = slide[0].style.transform;
      var currentWebKitTransform = slide[0].style.webkitTransform;

      if (currentTransform) {
        slide[0].style.transform = 'none';
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = 'none';
      }

      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      } else {
        // eslint-disable-next-line
        var width = getDirectionPropertyValue(slideStyles, 'width');
        var paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        var paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        var marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        var marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        var boxSizing = slideStyles.getPropertyValue('box-sizing');

        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          var _slide$ = slide[0],
              clientWidth = _slide$.clientWidth,
              offsetWidth = _slide$.offsetWidth;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }

      if (currentTransform) {
        slide[0].style.transform = currentTransform;
      }

      if (currentWebKitTransform) {
        slide[0].style.webkitTransform = currentWebKitTransform;
      }

      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);

      if (slides[i]) {
        slides[i].style[getDirectionLabel('width')] = slideSize + "px";
      }
    }

    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }

    slidesSizesGrid.push(slideSize);

    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }

  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  var newSlidesGrid;

  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({
      width: swiper.virtualSize + params.spaceBetween + "px"
    });
  }

  if (params.setWrapperSize) {
    var _$wrapperEl$css;

    $wrapperEl.css((_$wrapperEl$css = {}, _$wrapperEl$css[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css));
  }

  if (params.slidesPerColumn > 1) {
    var _$wrapperEl$css2;

    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    $wrapperEl.css((_$wrapperEl$css2 = {}, _$wrapperEl$css2[getDirectionLabel('width')] = swiper.virtualSize + params.spaceBetween + "px", _$wrapperEl$css2));

    if (params.centeredSlides) {
      newSlidesGrid = [];

      for (var _i = 0; _i < snapGrid.length; _i += 1) {
        var slidesGridItem = snapGrid[_i];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
      }

      snapGrid = newSlidesGrid;
    }
  } // Remove last grid elements depending on width


  if (!params.centeredSlides) {
    newSlidesGrid = [];

    for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
      var _slidesGridItem = snapGrid[_i2];
      if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

      if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(_slidesGridItem);
      }
    }

    snapGrid = newSlidesGrid;

    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }

  if (snapGrid.length === 0) snapGrid = [0];

  if (params.spaceBetween !== 0) {
    var _slides$filter$css;

    var key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
    slides.filter(function (_, slideIndex) {
      if (!params.cssMode) return true;

      if (slideIndex === slides.length - 1) {
        return false;
      }

      return true;
    }).css((_slides$filter$css = {}, _slides$filter$css[key] = spaceBetween + "px", _slides$filter$css));
  }

  if (params.centeredSlides && params.centeredSlidesBounds) {
    var allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    allSlidesSize -= params.spaceBetween;
    var maxSnap = allSlidesSize - swiperSize;
    snapGrid = snapGrid.map(function (snap) {
      if (snap < 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }

  if (params.centerInsufficientSlides) {
    var _allSlidesSize = 0;
    slidesSizesGrid.forEach(function (slideSizeValue) {
      _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
    });
    _allSlidesSize -= params.spaceBetween;

    if (_allSlidesSize < swiperSize) {
      var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
      snapGrid.forEach(function (snap, snapIndex) {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach(function (snap, snapIndex) {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }

  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper, {
    slides: slides,
    snapGrid: snapGrid,
    slidesGrid: slidesGrid,
    slidesSizesGrid: slidesSizesGrid
  });

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }

  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }

  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateSlidesClasses.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlidesClasses.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateSlidesClasses; });
function updateSlidesClasses() {
  var swiper = this;
  var slides = swiper.slides,
      params = swiper.params,
      $wrapperEl = swiper.$wrapperEl,
      activeIndex = swiper.activeIndex,
      realIndex = swiper.realIndex;
  var isVirtual = swiper.virtual && params.virtual.enabled;
  slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
  var activeSlide;

  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
  } else {
    activeSlide = slides.eq(activeIndex);
  } // Active classes


  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
    }
  } // Next Slide


  var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  } // Prev Slide


  var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }

  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
    }

    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
    }
  }

  swiper.emitSlidesClasses();
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateSlidesOffset.js":
/*!******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlidesOffset.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateSlidesOffset; });
function updateSlidesOffset() {
  var swiper = this;
  var slides = swiper.slides;

  for (var i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/core/update/updateSlidesProgress.js":
/*!********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/core/update/updateSlidesProgress.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateSlidesProgress; });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");

function updateSlidesProgress(translate) {
  if (translate === void 0) {
    translate = this && this.translate || 0;
  }

  var swiper = this;
  var params = swiper.params;
  var slides = swiper.slides,
      rtl = swiper.rtlTranslate;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  var offsetCenter = -translate;
  if (rtl) offsetCenter = translate; // Visible Slides

  slides.removeClass(params.slideVisibleClass);
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];

  for (var i = 0; i < slides.length; i += 1) {
    var slide = slides[i];
    var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

    if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
      var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

      if (isVisible) {
        swiper.visibleSlides.push(slide);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }

    slide.progress = rtl ? -slideProgress : slideProgress;
  }

  swiper.visibleSlides = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(swiper.visibleSlides);
}

/***/ }),

/***/ "./node_modules/swiper/esm/components/effect-coverflow/effect-coverflow.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/effect-coverflow/effect-coverflow.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Coverflow = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        slides = swiper.slides,
        slidesSizesGrid = swiper.slidesSizesGrid;
    var params = swiper.params.coverflowEffect;
    var isHorizontal = swiper.isHorizontal();
    var transform = swiper.translate;
    var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
    var rotate = isHorizontal ? params.rotate : -params.rotate;
    var translate = params.depth; // Each slide offset from center

    for (var i = 0, length = slides.length; i < length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideSize = slidesSizesGrid[i];
      var slideOffset = $slideEl[0].swiperSlideOffset;
      var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
      var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

      var translateZ = -translate * Math.abs(offsetMultiplier);
      var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

      if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
        stretch = parseFloat(params.stretch) / 100 * slideSize;
      }

      var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
      var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
      var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

      if (Math.abs(translateX) < 0.001) translateX = 0;
      if (Math.abs(translateY) < 0.001) translateY = 0;
      if (Math.abs(translateZ) < 0.001) translateZ = 0;
      if (Math.abs(rotateY) < 0.001) rotateY = 0;
      if (Math.abs(rotateX) < 0.001) rotateX = 0;
      if (Math.abs(scale) < 0.001) scale = 0;
      var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";
      $slideEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

      if (params.slideShadows) {
        // Set shadows
        var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
          $slideEl.append($shadowBeforeEl);
        }

        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
          $slideEl.append($shadowAfterEl);
        }

        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
      }
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'effect-coverflow',
  params: {
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: true
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      coverflowEffect: _extends({}, Coverflow)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'coverflow') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
      swiper.classNames.push(swiper.params.containerModifierClass + "3d");
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'coverflow') return;
      swiper.coverflowEffect.setTransition(duration);
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/effect-cube/effect-cube.js":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/effect-cube/effect-cube.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Cube = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
        $wrapperEl = swiper.$wrapperEl,
        slides = swiper.slides,
        swiperWidth = swiper.width,
        swiperHeight = swiper.height,
        rtl = swiper.rtlTranslate,
        swiperSize = swiper.size,
        browser = swiper.browser;
    var params = swiper.params.cubeEffect;
    var isHorizontal = swiper.isHorizontal();
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var wrapperRotate = 0;
    var $cubeShadowEl;

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }

        $cubeShadowEl.css({
          height: swiperWidth + "px"
        });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');

        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideIndex = i;

      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }

      var slideAngle = slideIndex * 90;
      var round = Math.floor(slideAngle / 360);

      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }

      var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      var tx = 0;
      var ty = 0;
      var tz = 0;

      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + round * 4 * swiperSize;
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = 3 * swiperSize + swiperSize * 4 * round;
      }

      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";

      if (progress <= 1 && progress > -1) {
        wrapperRotate = slideIndex * 90 + progress * 90;
        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
      }

      $slideEl.transform(transform);

      if (params.slideShadows) {
        // Set shadows
        var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }
    }

    $wrapperEl.css({
      '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
      '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
      '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
      'transform-origin': "50% 50% -" + swiperSize / 2 + "px"
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
      } else {
        var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
        var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
        var scale1 = params.shadowScale;
        var scale2 = params.shadowScale / multiplier;
        var offset = params.shadowOffset;
        $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
      }
    }

    var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
    $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var $el = swiper.$el,
        slides = swiper.slides;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'effect-cube',
  params: {
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      cubeEffect: _extends({}, Cube)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'cube') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "cube");
      swiper.classNames.push(swiper.params.containerModifierClass + "3d");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true
      };
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.params, overwriteParams);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'cube') return;
      swiper.cubeEffect.setTransition(duration);
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/effect-fade/effect-fade.js":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/effect-fade/effect-fade.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var Fade = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = swiper.slides.eq(i);
      var offset = $slideEl[0].swiperSlideOffset;
      var tx = -offset;
      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }

      var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl.css({
        opacity: slideOpacity
      }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
        $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration);

    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      slides.transitionEnd(function () {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return;
        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'effect-fade',
  params: {
    fadeEffect: {
      crossFade: false
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["bindModuleMethods"])(swiper, {
      fadeEffect: _extends({}, Fade)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'fade') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "fade");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.params, overwriteParams);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'fade') return;
      swiper.fadeEffect.setTransition(duration);
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/effect-flip/effect-flip.js":
/*!***********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/effect-flip/effect-flip.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Flip = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides,
        rtl = swiper.rtlTranslate;

    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var progress = $slideEl[0].progress;

      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }

      var offset = $slideEl[0].swiperSlideOffset;
      var rotate = -180 * progress;
      var rotateY = rotate;
      var rotateX = 0;
      var tx = -offset;
      var ty = 0;

      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (swiper.params.flipEffect.slideShadows) {
        // Set shadows
        var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      }

      $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides,
        activeIndex = swiper.activeIndex,
        $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false; // eslint-disable-next-line

      slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
        if (eventTriggered) return;
        if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;

        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'effect-flip',
  params: {
    flipEffect: {
      slideShadows: true,
      limitRotation: true
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      flipEffect: _extends({}, Flip)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.effect !== 'flip') return;
      swiper.classNames.push(swiper.params.containerModifierClass + "flip");
      swiper.classNames.push(swiper.params.containerModifierClass + "3d");
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true
      };
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.params, overwriteParams);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate(swiper) {
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (swiper.params.effect !== 'flip') return;
      swiper.flipEffect.setTransition(duration);
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/hash-navigation/hash-navigation.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/swiper/esm/components/hash-navigation/hash-navigation.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var HashNavigation = {
  onHashChange: function onHashChange() {
    var swiper = this;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    swiper.emit('hashChange');
    var newHash = document.location.hash.replace('#', '');
    var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

    if (newHash !== activeSlideHash) {
      var newIndex = swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();
      if (typeof newIndex === 'undefined') return;
      swiper.slideTo(newIndex);
    }
  },
  setHash: function setHash() {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;

    if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
      window.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || false);
      swiper.emit('hashSet');
    } else {
      var slide = swiper.slides.eq(swiper.activeIndex);
      var hash = slide.attr('data-hash') || slide.attr('data-history');
      document.location.hash = hash || '';
      swiper.emit('hashSet');
    }
  },
  init: function init() {
    var swiper = this;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
    swiper.hashNavigation.initialized = true;
    var hash = document.location.hash.replace('#', '');

    if (hash) {
      var speed = 0;

      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var slide = swiper.slides.eq(i);
        var slideHash = slide.attr('data-hash') || slide.attr('data-history');

        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          var index = slide.index();
          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }

    if (swiper.params.hashNavigation.watchState) {
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(window).on('hashchange', swiper.hashNavigation.onHashChange);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

    if (swiper.params.hashNavigation.watchState) {
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(window).off('hashchange', swiper.hashNavigation.onHashChange);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'hash-navigation',
  params: {
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
      hashNavigation: _extends({
        initialized: false
      }, HashNavigation)
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.init();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.destroy();
      }
    },
    'transitionEnd _freeModeNoMomentumRelease': function transitionEnd_freeModeNoMomentumRelease(swiper) {
      if (swiper.hashNavigation.initialized) {
        swiper.hashNavigation.setHash();
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
        swiper.hashNavigation.setHash();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/history/history.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/esm/components/history/history.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var History = {
  init: function init() {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    if (!swiper.params.history) return;

    if (!window.history || !window.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }

    var history = swiper.history;
    history.initialized = true;
    history.paths = History.getPathValues(swiper.params.url);
    if (!history.paths.key && !history.paths.value) return;
    history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);

    if (!swiper.params.history.replaceState) {
      window.addEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

    if (!swiper.params.history.replaceState) {
      window.removeEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  setHistoryPopState: function setHistoryPopState() {
    var swiper = this;
    swiper.history.paths = History.getPathValues(swiper.params.url);
    swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
  },
  getPathValues: function getPathValues(urlOverride) {
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    var location;

    if (urlOverride) {
      location = new URL(urlOverride);
    } else {
      location = window.location;
    }

    var pathArray = location.pathname.slice(1).split('/').filter(function (part) {
      return part !== '';
    });
    var total = pathArray.length;
    var key = pathArray[total - 2];
    var value = pathArray[total - 1];
    return {
      key: key,
      value: value
    };
  },
  setHistory: function setHistory(key, index) {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    if (!swiper.history.initialized || !swiper.params.history.enabled) return;
    var location;

    if (swiper.params.url) {
      location = new URL(swiper.params.url);
    } else {
      location = window.location;
    }

    var slide = swiper.slides.eq(index);
    var value = History.slugify(slide.attr('data-history'));

    if (swiper.params.history.root.length > 0) {
      var root = swiper.params.history.root;
      if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
      value = root + "/" + key + "/" + value;
    } else if (!location.pathname.includes(key)) {
      value = key + "/" + value;
    }

    var currentState = window.history.state;

    if (currentState && currentState.value === value) {
      return;
    }

    if (swiper.params.history.replaceState) {
      window.history.replaceState({
        value: value
      }, null, value);
    } else {
      window.history.pushState({
        value: value
      }, null, value);
    }
  },
  slugify: function slugify(text) {
    return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
  },
  scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
    var swiper = this;

    if (value) {
      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var slide = swiper.slides.eq(i);
        var slideHistory = History.slugify(slide.attr('data-history'));

        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          var index = slide.index();
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'history',
  params: {
    history: {
      enabled: false,
      root: '',
      replaceState: false,
      key: 'slides'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      history: _extends({}, History)
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.history.enabled) {
        swiper.history.init();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.params.history.enabled) {
        swiper.history.destroy();
      }
    },
    'transitionEnd _freeModeNoMomentumRelease': function transitionEnd_freeModeNoMomentumRelease(swiper) {
      if (swiper.history.initialized) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.history.initialized && swiper.params.cssMode) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/keyboard/keyboard.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/keyboard/keyboard.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable consistent-return */



var Keyboard = {
  handle: function handle(event) {
    var swiper = this;
    if (!swiper.enabled) return;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    var rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var kc = e.keyCode || e.charCode;
    var pageUpDown = swiper.params.keyboard.pageUpDown;
    var isPageUp = pageUpDown && kc === 33;
    var isPageDown = pageUpDown && kc === 34;
    var isArrowLeft = kc === 37;
    var isArrowRight = kc === 39;
    var isArrowUp = kc === 38;
    var isArrowDown = kc === 40; // Directions locks

    if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
      return false;
    }

    if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
      return false;
    }

    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }

    if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }

    if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
      var inView = false; // Check that swiper should be inside of visible area of window

      if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0) {
        return undefined;
      }

      var $el = swiper.$el;
      var swiperWidth = $el[0].clientWidth;
      var swiperHeight = $el[0].clientHeight;
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var swiperOffset = swiper.$el.offset();
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];

      for (var i = 0; i < swiperCoord.length; i += 1) {
        var point = swiperCoord[i];

        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

          inView = true;
        }
      }

      if (!inView) return undefined;
    }

    if (swiper.isHorizontal()) {
      if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
      if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
    } else {
      if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      }

      if (isPageDown || isArrowDown) swiper.slideNext();
      if (isPageUp || isArrowUp) swiper.slidePrev();
    }

    swiper.emit('keyPress', kc);
    return undefined;
  },
  enable: function enable() {
    var swiper = this;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    if (swiper.keyboard.enabled) return;
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document).on('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = true;
  },
  disable: function disable() {
    var swiper = this;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    if (!swiper.keyboard.enabled) return;
    Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(document).off('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = false;
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'keyboard',
  params: {
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
      keyboard: _extends({
        enabled: false
      }, Keyboard)
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.keyboard.enabled) {
        swiper.keyboard.enable();
      }
    },
    destroy: function destroy(swiper) {
      if (swiper.keyboard.enabled) {
        swiper.keyboard.disable();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/lazy/lazy.js":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/esm/components/lazy/lazy.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Lazy = {
  loadInSlide: function loadInSlide(index, loadInDuplicate) {
    if (loadInDuplicate === void 0) {
      loadInDuplicate = true;
    }

    var swiper = this;
    var params = swiper.params.lazy;
    if (typeof index === 'undefined') return;
    if (swiper.slides.length === 0) return;
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + index + "\"]") : swiper.slides.eq(index);
    var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");

    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images.push($slideEl[0]);
    }

    if ($images.length === 0) return;
    $images.each(function (imageEl) {
      var $imageEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(imageEl);
      $imageEl.addClass(params.loadingClass);
      var background = $imageEl.attr('data-background');
      var src = $imageEl.attr('data-src');
      var srcset = $imageEl.attr('data-srcset');
      var sizes = $imageEl.attr('data-sizes');
      var $pictureEl = $imageEl.parent('picture');
      swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

        if (background) {
          $imageEl.css('background-image', "url(\"" + background + "\")");
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }

          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }

          if ($pictureEl.length) {
            $pictureEl.children('source').each(function (sourceEl) {
              var $source = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(sourceEl);

              if ($source.attr('data-srcset')) {
                $source.attr('srcset', $source.attr('data-srcset'));
                $source.removeAttr('data-srcset');
              }
            });
          }

          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find("." + params.preloaderClass).remove();

        if (swiper.params.loop && loadInDuplicate) {
          var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + swiper.params.slideDuplicateClass + ")");
            swiper.lazy.loadInSlide(originalSlide.index(), false);
          } else {
            var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]");
            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
          }
        }

        swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);

        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      });
      swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  },
  load: function load() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl,
        swiperParams = swiper.params,
        slides = swiper.slides,
        activeIndex = swiper.activeIndex;
    var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    var params = swiperParams.lazy;
    var slidesPerView = swiperParams.slidesPerView;

    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children("." + swiperParams.slideClass + "[data-swiper-slide-index=\"" + index + "\"]").length) {
          return true;
        }
      } else if (slides[index]) return true;

      return false;
    }

    function slideIndex(slideEl) {
      if (isVirtual) {
        return Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).attr('data-swiper-slide-index');
      }

      return Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).index();
    }

    if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;

    if (swiper.params.watchSlidesVisibility) {
      $wrapperEl.children("." + swiperParams.slideVisibleClass).each(function (slideEl) {
        var index = isVirtual ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).attr('data-swiper-slide-index') : Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(slideEl).index();
        swiper.lazy.loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) swiper.lazy.loadInSlide(i);
      }
    } else {
      swiper.lazy.loadInSlide(activeIndex);
    }

    if (params.loadPrevNext) {
      if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
        var amount = params.loadPrevNextAmount;
        var spv = slidesPerView;
        var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

        for (var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1) {
          if (slideExist(_i)) swiper.lazy.loadInSlide(_i);
        } // Prev Slides


        for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) {
          if (slideExist(_i2)) swiper.lazy.loadInSlide(_i2);
        }
      } else {
        var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);
        if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
        var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);
        if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
      }
    }
  },
  checkInViewOnLoad: function checkInViewOnLoad() {
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    var swiper = this;
    if (!swiper || swiper.destroyed) return;
    var $scrollElement = swiper.params.lazy.scrollingElement ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.lazy.scrollingElement) : Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(window);
    var isWindow = $scrollElement[0] === window;
    var scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
    var scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
    var swiperOffset = swiper.$el.offset();
    var rtl = swiper.rtlTranslate;
    var inView = false;
    if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
    var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

    for (var i = 0; i < swiperCoord.length; i += 1) {
      var point = swiperCoord[i];

      if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

        inView = true;
      }
    }

    var passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;

    if (inView) {
      swiper.lazy.load();
      $scrollElement.off('scroll', swiper.lazy.checkInViewOnLoad, passiveListener);
    } else if (!swiper.lazy.scrollHandlerAttached) {
      swiper.lazy.scrollHandlerAttached = true;
      $scrollElement.on('scroll', swiper.lazy.checkInViewOnLoad, passiveListener);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'lazy',
  params: {
    lazy: {
      checkInView: false,
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,
      scrollingElement: '',
      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
      lazy: _extends({
        initialImageLoaded: false
      }, Lazy)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    },
    init: function init(swiper) {
      if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
        if (swiper.params.lazy.checkInView) {
          swiper.lazy.checkInViewOnLoad();
        } else {
          swiper.lazy.load();
        }
      }
    },
    scroll: function scroll(swiper) {
      if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
        swiper.lazy.load();
      }
    },
    'scrollbarDragMove resize _freeModeNoMomentumRelease': function lazyLoad(swiper) {
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    transitionStart: function transitionStart(swiper) {
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
          swiper.lazy.load();
        }
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
        swiper.lazy.load();
      }
    },
    slideChange: function slideChange(swiper) {
      var _swiper$params = swiper.params,
          lazy = _swiper$params.lazy,
          cssMode = _swiper$params.cssMode,
          watchSlidesVisibility = _swiper$params.watchSlidesVisibility,
          watchSlidesProgress = _swiper$params.watchSlidesProgress,
          touchReleaseOnEdges = _swiper$params.touchReleaseOnEdges,
          resistanceRatio = _swiper$params.resistanceRatio;

      if (lazy.enabled && (cssMode || (watchSlidesVisibility || watchSlidesProgress) && (touchReleaseOnEdges || resistanceRatio === 0))) {
        swiper.lazy.load();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/mousewheel/mousewheel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/mousewheel/mousewheel.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
/* eslint-disable consistent-return */




function isEventSupported() {
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  var eventName = 'onwheel';
  var isSupported = (eventName in document);

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature('', '') !== true) {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

var Mousewheel = {
  lastScrollTime: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])(),
  lastEventBeforeSnap: undefined,
  recentWheelEvents: [],
  event: function event() {
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    if (window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
    return isEventSupported() ? 'wheel' : 'mousewheel';
  },
  normalize: function normalize(e) {
    // Reasonable defaults
    var PIXEL_STEP = 10;
    var LINE_HEIGHT = 40;
    var PAGE_HEIGHT = 800;
    var sX = 0;
    var sY = 0; // spinX, spinY

    var pX = 0;
    var pY = 0; // pixelX, pixelY
    // Legacy

    if ('detail' in e) {
      sY = e.detail;
    }

    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }

    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }

    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    } // side scrolling on FF with DOMMouseScroll


    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }

    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if (e.shiftKey && !pX) {
      // if user scrolls with shift he wants horizontal scroll
      pX = pY;
      pY = 0;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) {
        // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {
        // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    } // Fall-back if spin cannot be determined


    if (pX && !sX) {
      sX = pX < 1 ? -1 : 1;
    }

    if (pY && !sY) {
      sY = pY < 1 ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY
    };
  },
  handleMouseEnter: function handleMouseEnter() {
    var swiper = this;
    if (!swiper.enabled) return;
    swiper.mouseEntered = true;
  },
  handleMouseLeave: function handleMouseLeave() {
    var swiper = this;
    if (!swiper.enabled) return;
    swiper.mouseEntered = false;
  },
  handle: function handle(event) {
    var e = event;
    var disableParentSwiper = true;
    var swiper = this;
    if (!swiper.enabled) return;
    var params = swiper.params.mousewheel;

    if (swiper.params.cssMode) {
      e.preventDefault();
    }

    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
    }

    if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
    if (e.originalEvent) e = e.originalEvent; // jquery fix

    var delta = 0;
    var rtlFactor = swiper.rtlTranslate ? -1 : 1;
    var data = Mousewheel.normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }

    if (delta === 0) return true;
    if (params.invert) delta = -delta; // Get the scroll positions

    var positions = swiper.getTranslate() + delta * params.sensitivity;
    if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
    if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
    //     the disableParentSwiper will be true.
    // When loop is false:
    //     if the scroll positions is not on edge,
    //     then the disableParentSwiper will be true.
    //     if the scroll on edge positions,
    //     then the disableParentSwiper will be false.

    disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
    if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

    if (!swiper.params.freeMode) {
      // Register the new event in a variable which stores the relevant data
      var newEvent = {
        time: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])(),
        delta: Math.abs(delta),
        direction: Math.sign(delta),
        raw: event
      }; // Keep the most recent events

      var recentWheelEvents = swiper.mousewheel.recentWheelEvents;

      if (recentWheelEvents.length >= 2) {
        recentWheelEvents.shift(); // only store the last N events
      }

      var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
      recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
      //   If direction has changed or
      //   if the scroll is quicker than the previous one:
      //     Animate the slider.
      // Else (this is the first time the wheel is moved):
      //     Animate the slider.

      if (prevEvent) {
        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
          swiper.mousewheel.animateSlider(newEvent);
        }
      } else {
        swiper.mousewheel.animateSlider(newEvent);
      } // If it's time to release the scroll:
      //   Return now so you don't hit the preventDefault.


      if (swiper.mousewheel.releaseScroll(newEvent)) {
        return true;
      }
    } else {
      // Freemode or scrollContainer:
      // If we recently snapped after a momentum scroll, then ignore wheel events
      // to give time for the deceleration to finish. Stop ignoring after 500 msecs
      // or if it's a new scroll (larger delta or inverse sign as last event before
      // an end-of-momentum snap).
      var _newEvent = {
        time: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])(),
        delta: Math.abs(delta),
        direction: Math.sign(delta)
      };
      var lastEventBeforeSnap = swiper.mousewheel.lastEventBeforeSnap;
      var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;

      if (!ignoreWheelEvents) {
        swiper.mousewheel.lastEventBeforeSnap = undefined;

        if (swiper.params.loop) {
          swiper.loopFix();
        }

        var position = swiper.getTranslate() + delta * params.sensitivity;
        var wasBeginning = swiper.isBeginning;
        var wasEnd = swiper.isEnd;
        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
        swiper.setTransition(0);
        swiper.setTranslate(position);
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();

        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
          swiper.updateSlidesClasses();
        }

        if (swiper.params.freeModeSticky) {
          // When wheel scrolling starts with sticky (aka snap) enabled, then detect
          // the end of a momentum scroll by storing recent (N=15?) wheel events.
          // 1. do all N events have decreasing or same (absolute value) delta?
          // 2. did all N events arrive in the last M (M=500?) msecs?
          // 3. does the earliest event have an (absolute value) delta that's
          //    at least P (P=1?) larger than the most recent event's delta?
          // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
          // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
          // Snap immediately and ignore remaining wheel events in this scroll.
          // See comment above for "remaining wheel events in this scroll" determination.
          // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
          clearTimeout(swiper.mousewheel.timeout);
          swiper.mousewheel.timeout = undefined;
          var _recentWheelEvents = swiper.mousewheel.recentWheelEvents;

          if (_recentWheelEvents.length >= 15) {
            _recentWheelEvents.shift(); // only store the last N events

          }

          var _prevEvent = _recentWheelEvents.length ? _recentWheelEvents[_recentWheelEvents.length - 1] : undefined;

          var firstEvent = _recentWheelEvents[0];

          _recentWheelEvents.push(_newEvent);

          if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
            _recentWheelEvents.splice(0);
          } else if (_recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
            // We're at the end of the deceleration of a momentum scroll, so there's no need
            // to wait for more events. Snap ASAP on the next tick.
            // Also, because there's some remaining momentum we'll bias the snap in the
            // direction of the ongoing scroll because it's better UX for the scroll to snap
            // in the same direction as the scroll instead of reversing to snap.  Therefore,
            // if it's already scrolled more than 20% in the current direction, keep going.
            var snapToThreshold = delta > 0 ? 0.8 : 0.2;
            swiper.mousewheel.lastEventBeforeSnap = _newEvent;

            _recentWheelEvents.splice(0);

            swiper.mousewheel.timeout = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["nextTick"])(function () {
              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 0); // no delay; move on next tick
          }

          if (!swiper.mousewheel.timeout) {
            // if we get here, then we haven't detected the end of a momentum scroll, so
            // we'll consider a scroll "complete" when there haven't been any wheel events
            // for 500ms.
            swiper.mousewheel.timeout = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["nextTick"])(function () {
              var snapToThreshold = 0.5;
              swiper.mousewheel.lastEventBeforeSnap = _newEvent;

              _recentWheelEvents.splice(0);

              swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
            }, 500);
          }
        } // Emit event


        if (!ignoreWheelEvents) swiper.emit('scroll', e); // Stop autoplay

        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
      }
    }

    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    return false;
  },
  animateSlider: function animateSlider(newEvent) {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

    if (this.params.mousewheel.thresholdDelta && newEvent.delta < this.params.mousewheel.thresholdDelta) {
      // Prevent if delta of wheel scroll delta is below configured threshold
      return false;
    }

    if (this.params.mousewheel.thresholdTime && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])() - swiper.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) {
      // Prevent if time between scrolls is below configured threshold
      return false;
    } // If the movement is NOT big enough and
    // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
    //   Don't go any further (avoid insignificant scroll movement).


    if (newEvent.delta >= 6 && Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])() - swiper.mousewheel.lastScrollTime < 60) {
      // Return false as a default
      return true;
    } // If user is scrolling towards the end:
    //   If the slider hasn't hit the latest slide or
    //   if the slider is a loop and
    //   if the slider isn't moving right now:
    //     Go to next slide and
    //     emit a scroll event.
    // Else (the user is scrolling towards the beginning) and
    // if the slider hasn't hit the first slide or
    // if the slider is a loop and
    // if the slider isn't moving right now:
    //   Go to prev slide and
    //   emit a scroll event.


    if (newEvent.direction < 0) {
      if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
        swiper.slideNext();
        swiper.emit('scroll', newEvent.raw);
      }
    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
      swiper.slidePrev();
      swiper.emit('scroll', newEvent.raw);
    } // If you got here is because an animation has been triggered so store the current time


    swiper.mousewheel.lastScrollTime = new window.Date().getTime(); // Return false as a default

    return false;
  },
  releaseScroll: function releaseScroll(newEvent) {
    var swiper = this;
    var params = swiper.params.mousewheel;

    if (newEvent.direction < 0) {
      if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }
    } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
      // Return true to animate scroll on edges
      return true;
    }

    return false;
  },
  enable: function enable() {
    var swiper = this;
    var event = Mousewheel.event();

    if (swiper.params.cssMode) {
      swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
      return true;
    }

    if (!event) return false;
    if (swiper.mousewheel.enabled) return false;
    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
    }

    target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
    target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
    target.on(event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = true;
    return true;
  },
  disable: function disable() {
    var swiper = this;
    var event = Mousewheel.event();

    if (swiper.params.cssMode) {
      swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
      return true;
    }

    if (!event) return false;
    if (!swiper.mousewheel.enabled) return false;
    var target = swiper.$el;

    if (swiper.params.mousewheel.eventsTarget !== 'container') {
      target = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(swiper.params.mousewheel.eventsTarget);
    }

    target.off(event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = false;
    return true;
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'mousewheel',
  params: {
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarget: 'container',
      thresholdDelta: null,
      thresholdTime: null
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
      mousewheel: {
        enabled: false,
        lastScrollTime: Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["now"])(),
        lastEventBeforeSnap: undefined,
        recentWheelEvents: [],
        enable: Mousewheel.enable,
        disable: Mousewheel.disable,
        handle: Mousewheel.handle,
        handleMouseEnter: Mousewheel.handleMouseEnter,
        handleMouseLeave: Mousewheel.handleMouseLeave,
        animateSlider: Mousewheel.animateSlider,
        releaseScroll: Mousewheel.releaseScroll
      }
    });
  },
  on: {
    init: function init(swiper) {
      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
        swiper.mousewheel.disable();
      }

      if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
    },
    destroy: function destroy(swiper) {
      if (swiper.params.cssMode) {
        swiper.mousewheel.enable();
      }

      if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/navigation/navigation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/navigation/navigation.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Navigation = {
  toggleEl: function toggleEl($el, disabled) {
    $el[disabled ? 'addClass' : 'removeClass'](this.params.navigation.disabledClass);
    if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
  },
  update: function update() {
    // Update Navigation Buttons
    var swiper = this;
    var params = swiper.params.navigation;
    var toggleEl = swiper.navigation.toggleEl;
    if (swiper.params.loop) return;
    var _swiper$navigation = swiper.navigation,
        $nextEl = _swiper$navigation.$nextEl,
        $prevEl = _swiper$navigation.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        toggleEl($prevEl, true);
      } else {
        toggleEl($prevEl, false);
      }

      if (swiper.params.watchOverflow && swiper.enabled) {
        $prevEl[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        toggleEl($nextEl, true);
      } else {
        toggleEl($nextEl, false);
      }

      if (swiper.params.watchOverflow && swiper.enabled) {
        $nextEl[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    }
  },
  onPrevClick: function onPrevClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop) return;
    swiper.slidePrev();
  },
  onNextClick: function onNextClick(e) {
    var swiper = this;
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop) return;
    swiper.slideNext();
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.navigation;
    swiper.params.navigation = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["createElementIfNotDefined"])(swiper.$el, swiper.params.navigation, swiper.params.createElements, {
      nextEl: 'swiper-button-next',
      prevEl: 'swiper-button-prev'
    });
    if (!(params.nextEl || params.prevEl)) return;
    var $nextEl;
    var $prevEl;

    if (params.nextEl) {
      $nextEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.nextEl);

      if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }

    if (params.prevEl) {
      $prevEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.prevEl);

      if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', swiper.navigation.onNextClick);
    }

    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', swiper.navigation.onPrevClick);
    }

    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.navigation, {
      $nextEl: $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl: $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });

    if (!swiper.enabled) {
      if ($nextEl) $nextEl.addClass(params.lockClass);
      if ($prevEl) $prevEl.addClass(params.lockClass);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var _swiper$navigation2 = swiper.navigation,
        $nextEl = _swiper$navigation2.$nextEl,
        $prevEl = _swiper$navigation2.$prevEl;

    if ($nextEl && $nextEl.length) {
      $nextEl.off('click', swiper.navigation.onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }

    if ($prevEl && $prevEl.length) {
      $prevEl.off('click', swiper.navigation.onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      navigation: _extends({}, Navigation)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge: function toEdge(swiper) {
      swiper.navigation.update();
    },
    fromEdge: function fromEdge(swiper) {
      swiper.navigation.update();
    },
    destroy: function destroy(swiper) {
      swiper.navigation.destroy();
    },
    'enable disable': function enableDisable(swiper) {
      var _swiper$navigation3 = swiper.navigation,
          $nextEl = _swiper$navigation3.$nextEl,
          $prevEl = _swiper$navigation3.$prevEl;

      if ($nextEl) {
        $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
      }

      if ($prevEl) {
        $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
      }
    },
    click: function click(swiper, e) {
      var _swiper$navigation4 = swiper.navigation,
          $nextEl = _swiper$navigation4.$nextEl,
          $prevEl = _swiper$navigation4.$prevEl;
      var targetEl = e.target;

      if (swiper.params.navigation.hideOnClick && !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEl).is($prevEl) && !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEl).is($nextEl)) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
        var isHidden;

        if ($nextEl) {
          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }

        if (isHidden === true) {
          swiper.emit('navigationShow');
        } else {
          swiper.emit('navigationHide');
        }

        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }

        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/pagination/pagination.js":
/*!*********************************************************************!*\
  !*** ./node_modules/swiper/esm/components/pagination/pagination.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Pagination = {
  update: function update() {
    // Render || Update Pagination bullets/items
    var swiper = this;
    var rtl = swiper.rtl;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el; // Current/Total

    var current;
    var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }

      if (current > total - 1) current -= total;
      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    } // Types


    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      var bullets = swiper.pagination.bullets;
      var firstIndex;
      var lastIndex;
      var midIndex;

      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
          swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

          if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (swiper.pagination.dynamicBulletIndex < 0) {
            swiper.pagination.dynamicBulletIndex = 0;
          }
        }

        firstIndex = current - swiper.pagination.dynamicBulletIndex;
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }

      bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

      if ($el.length > 1) {
        bullets.each(function (bullet) {
          var $bullet = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(bullet);
          var bulletIndex = $bullet.index();

          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }

          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(params.bulletActiveClass + "-main");
            }

            if (bulletIndex === firstIndex) {
              $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            }

            if (bulletIndex === lastIndex) {
              $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          }
        });
      } else {
        var $bullet = bullets.eq(current);
        var bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);

        if (params.dynamicBullets) {
          var $firstDisplayedBullet = bullets.eq(firstIndex);
          var $lastDisplayedBullet = bullets.eq(lastIndex);

          for (var i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(params.bulletActiveClass + "-main");
          }

          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
              for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
              }

              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
            } else {
              $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
              $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          } else {
            $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
            $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
          }
        }
      }

      if (params.dynamicBullets) {
        var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
        var offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
      }
    }

    if (params.type === 'fraction') {
      $el.find(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["classesToSelector"])(params.currentClass)).text(params.formatFractionCurrent(current + 1));
      $el.find(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["classesToSelector"])(params.totalClass)).text(params.formatFractionTotal(total));
    }

    if (params.type === 'progressbar') {
      var progressbarDirection;

      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
      } else {
        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
      }

      var scale = (current + 1) / total;
      var scaleX = 1;
      var scaleY = 1;

      if (progressbarDirection === 'horizontal') {
        scaleX = scale;
      } else {
        scaleY = scale;
      }

      $el.find(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["classesToSelector"])(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
    }

    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', $el[0]);
    } else {
      swiper.emit('paginationUpdate', $el[0]);
    }

    if (swiper.params.watchOverflow && swiper.enabled) {
      $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
  },
  render: function render() {
    // Render Container
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el;
    var paginationHTML = '';

    if (params.type === 'bullets') {
      var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      if (swiper.params.freeMode && !swiper.params.loop && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }

      for (var i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
        }
      }

      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["classesToSelector"])(params.bulletClass));
    }

    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
      }

      $el.html(paginationHTML);
    }

    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
      }

      $el.html(paginationHTML);
    }

    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init: function init() {
    var swiper = this;
    swiper.params.pagination = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["createElementIfNotDefined"])(swiper.$el, swiper.params.pagination, swiper.params.createElements, {
      el: 'swiper-pagination'
    });
    var params = swiper.params.pagination;
    if (!params.el) return;
    var $el = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.el);
    if ($el.length === 0) return;

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
      $el = swiper.$el.find(params.el);
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass("" + params.modifierClass + params.type + "-dynamic");
      swiper.pagination.dynamicBulletIndex = 0;

      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }

    if (params.type === 'progressbar' && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }

    if (params.clickable) {
      $el.on('click', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["classesToSelector"])(params.bulletClass), function onClick(e) {
        e.preventDefault();
        var index = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }

    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.pagination, {
      $el: $el,
      el: $el[0]
    });

    if (!swiper.enabled) {
      $el.addClass(params.lockClass);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
    var $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

    if (params.clickable) {
      $el.off('click', Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["classesToSelector"])(params.bulletClass));
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: 'bullets',
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: function formatFractionCurrent(number) {
        return number;
      },
      formatFractionTotal: function formatFractionTotal(number) {
        return number;
      },
      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-',
      // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
      clickableClass: 'swiper-pagination-clickable',
      // NEW
      lockClass: 'swiper-pagination-lock'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      pagination: _extends({
        dynamicBulletIndex: 0
      }, Pagination)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange: function activeIndexChange(swiper) {
      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange: function snapIndexChange(swiper) {
      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange: function slidesLengthChange(swiper) {
      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange: function snapGridLengthChange(swiper) {
      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy: function destroy(swiper) {
      swiper.pagination.destroy();
    },
    'enable disable': function enableDisable(swiper) {
      var $el = swiper.pagination.$el;

      if ($el) {
        $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
      }
    },
    click: function click(swiper, e) {
      var targetEl = e.target;

      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
        var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

        if (isHidden === true) {
          swiper.emit('paginationShow');
        } else {
          swiper.emit('paginationHide');
        }

        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/parallax/parallax.js":
/*!*****************************************************************!*\
  !*** ./node_modules/swiper/esm/components/parallax/parallax.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Parallax = {
  setTransform: function setTransform(el, progress) {
    var swiper = this;
    var rtl = swiper.rtl;
    var $el = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(el);
    var rtlFactor = rtl ? -1 : 1;
    var p = $el.attr('data-swiper-parallax') || '0';
    var x = $el.attr('data-swiper-parallax-x');
    var y = $el.attr('data-swiper-parallax-y');
    var scale = $el.attr('data-swiper-parallax-scale');
    var opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if (x.indexOf('%') >= 0) {
      x = parseInt(x, 10) * progress * rtlFactor + "%";
    } else {
      x = x * progress * rtlFactor + "px";
    }

    if (y.indexOf('%') >= 0) {
      y = parseInt(y, 10) * progress + "%";
    } else {
      y = y * progress + "px";
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
      $el[0].style.opacity = currentOpacity;
    }

    if (typeof scale === 'undefined' || scale === null) {
      $el.transform("translate3d(" + x + ", " + y + ", 0px)");
    } else {
      var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
      $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
    }
  },
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el,
        slides = swiper.slides,
        progress = swiper.progress,
        snapGrid = swiper.snapGrid;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
      swiper.parallax.setTransform(el, progress);
    });
    slides.each(function (slideEl, slideIndex) {
      var slideProgress = slideEl.progress;

      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
      }

      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
        swiper.parallax.setTransform(el, slideProgress);
      });
    });
  },
  setTransition: function setTransition(duration) {
    if (duration === void 0) {
      duration = this.params.speed;
    }

    var swiper = this;
    var $el = swiper.$el;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (parallaxEl) {
      var $parallaxEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(parallaxEl);
      var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
      if (duration === 0) parallaxDuration = 0;
      $parallaxEl.transition(parallaxDuration);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'parallax',
  params: {
    parallax: {
      enabled: false
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      parallax: _extends({}, Parallax)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (!swiper.params.parallax.enabled) return;
      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    init: function init(swiper) {
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTranslate: function setTranslate(swiper) {
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      if (!swiper.params.parallax.enabled) return;
      swiper.parallax.setTransition(duration);
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/scrollbar/scrollbar.js":
/*!*******************************************************************!*\
  !*** ./node_modules/swiper/esm/components/scrollbar/scrollbar.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Scrollbar = {
  setTranslate: function setTranslate() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate,
        progress = swiper.progress;
    var dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize,
        $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    var params = swiper.params.scrollbar;
    var newSize = dragSize;
    var newPos = (trackSize - dragSize) * progress;

    if (rtl) {
      newPos = -newPos;

      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }

    if (swiper.isHorizontal()) {
      $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
      $dragEl[0].style.width = newSize + "px";
    } else {
      $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
      $dragEl[0].style.height = newSize + "px";
    }

    if (params.hide) {
      clearTimeout(swiper.scrollbar.timeout);
      $el[0].style.opacity = 1;
      swiper.scrollbar.timeout = setTimeout(function () {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    swiper.scrollbar.$dragEl.transition(duration);
  },
  updateSize: function updateSize() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
    var scrollbar = swiper.scrollbar;
    var $dragEl = scrollbar.$dragEl,
        $el = scrollbar.$el;
    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
    var divider = swiper.size / swiper.virtualSize;
    var moveDivider = divider * (trackSize / swiper.size);
    var dragSize;

    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = dragSize + "px";
    } else {
      $dragEl[0].style.height = dragSize + "px";
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }

    if (swiper.params.scrollbar.hide) {
      $el[0].style.opacity = 0;
    }

    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(scrollbar, {
      trackSize: trackSize,
      divider: divider,
      moveDivider: moveDivider,
      dragSize: dragSize
    });

    if (swiper.params.watchOverflow && swiper.enabled) {
      scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    }
  },
  getPointerPosition: function getPointerPosition(e) {
    var swiper = this;

    if (swiper.isHorizontal()) {
      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
    }

    return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
  },
  setDragPosition: function setDragPosition(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        rtl = swiper.rtlTranslate;
    var $el = scrollbar.$el,
        dragSize = scrollbar.dragSize,
        trackSize = scrollbar.trackSize,
        dragStartPos = scrollbar.dragStartPos;
    var positionRatio;
    positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);

    if (rtl) {
      positionRatio = 1 - positionRatio;
    }

    var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  },
  onDragStart: function onDragStart(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    swiper.scrollbar.isTouched = true;
    swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
    e.preventDefault();
    e.stopPropagation();
    $wrapperEl.transition(100);
    $dragEl.transition(100);
    scrollbar.setDragPosition(e);
    clearTimeout(swiper.scrollbar.dragTimeout);
    $el.transition(0);

    if (params.hide) {
      $el.css('opacity', 1);
    }

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', 'none');
    }

    swiper.emit('scrollbarDragStart', e);
  },
  onDragMove: function onDragMove(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el,
        $dragEl = scrollbar.$dragEl;
    if (!swiper.scrollbar.isTouched) return;
    if (e.preventDefault) e.preventDefault();else e.returnValue = false;
    scrollbar.setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    swiper.emit('scrollbarDragMove', e);
  },
  onDragEnd: function onDragEnd(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar,
        $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el;
    if (!swiper.scrollbar.isTouched) return;
    swiper.scrollbar.isTouched = false;

    if (swiper.params.cssMode) {
      swiper.$wrapperEl.css('scroll-snap-type', '');
      $wrapperEl.transition('');
    }

    if (params.hide) {
      clearTimeout(swiper.scrollbar.dragTimeout);
      swiper.scrollbar.dragTimeout = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["nextTick"])(function () {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }

    swiper.emit('scrollbarDragEnd', e);

    if (params.snapOnRelease) {
      swiper.slideToClosest();
    }
  },
  enableDraggable: function enableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params,
        support = swiper.support;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;

    if (!support.touch) {
      target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  disableDraggable: function disableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) return;
    var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
    var scrollbar = swiper.scrollbar,
        touchEventsTouch = swiper.touchEventsTouch,
        touchEventsDesktop = swiper.touchEventsDesktop,
        params = swiper.params,
        support = swiper.support;
    var $el = scrollbar.$el;
    var target = $el[0];
    var activeListener = support.passiveListener && params.passiveListeners ? {
      passive: false,
      capture: false
    } : false;
    var passiveListener = support.passiveListener && params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    if (!target) return;

    if (!support.touch) {
      target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
      document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
      document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
    } else {
      target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
      target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
      target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
    }
  },
  init: function init() {
    var swiper = this;
    var scrollbar = swiper.scrollbar,
        $swiperEl = swiper.$el;
    swiper.params.scrollbar = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["createElementIfNotDefined"])($swiperEl, swiper.params.scrollbar, swiper.params.createElements, {
      el: 'swiper-scrollbar'
    });
    var params = swiper.params.scrollbar;
    if (!params.el) return;
    var $el = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(params.el);

    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);

    if ($dragEl.length === 0) {
      $dragEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
      $el.append($dragEl);
    }

    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(scrollbar, {
      $el: $el,
      el: $el[0],
      $dragEl: $dragEl,
      dragEl: $dragEl[0]
    });

    if (params.draggable) {
      scrollbar.enableDraggable();
    }

    if ($el) {
      $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.scrollbar.disableDraggable();
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'scrollbar',
  params: {
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
      lockClass: 'swiper-scrollbar-lock',
      dragClass: 'swiper-scrollbar-drag'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
      scrollbar: _extends({
        isTouched: false,
        timeout: null,
        dragTimeout: null
      }, Scrollbar)
    });
  },
  on: {
    init: function init(swiper) {
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
      swiper.scrollbar.setTranslate();
    },
    update: function update(swiper) {
      swiper.scrollbar.updateSize();
    },
    resize: function resize(swiper) {
      swiper.scrollbar.updateSize();
    },
    observerUpdate: function observerUpdate(swiper) {
      swiper.scrollbar.updateSize();
    },
    setTranslate: function setTranslate(swiper) {
      swiper.scrollbar.setTranslate();
    },
    setTransition: function setTransition(swiper, duration) {
      swiper.scrollbar.setTransition(duration);
    },
    'enable disable': function enableDisable(swiper) {
      var $el = swiper.scrollbar.$el;

      if ($el) {
        $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
      }
    },
    destroy: function destroy(swiper) {
      swiper.scrollbar.destroy();
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/thumbs/thumbs.js":
/*!*************************************************************!*\
  !*** ./node_modules/swiper/esm/components/thumbs/thumbs.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Thumbs = {
  init: function init() {
    var swiper = this;
    var thumbsParams = swiper.params.thumbs;
    if (swiper.thumbs.initialized) return false;
    swiper.thumbs.initialized = true;
    var SwiperClass = swiper.constructor;

    if (thumbsParams.swiper instanceof SwiperClass) {
      swiper.thumbs.swiper = thumbsParams.swiper;
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.thumbs.swiper.originalParams, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(swiper.thumbs.swiper.params, {
        watchSlidesProgress: true,
        slideToClickedSlide: false
      });
    } else if (Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"])(thumbsParams.swiper)) {
      swiper.thumbs.swiper = new SwiperClass(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])({}, thumbsParams.swiper, {
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: false
      }));
      swiper.thumbs.swiperCreated = true;
    }

    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
    swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
    return true;
  },
  onThumbClick: function onThumbClick() {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var clickedIndex = thumbsSwiper.clickedIndex;
    var clickedSlide = thumbsSwiper.clickedSlide;
    if (clickedSlide && Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    var slideToIndex;

    if (thumbsSwiper.params.loop) {
      slideToIndex = parseInt(Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    } else {
      slideToIndex = clickedIndex;
    }

    if (swiper.params.loop) {
      var currentIndex = swiper.activeIndex;

      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        currentIndex = swiper.activeIndex;
      }

      var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
      var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
    }

    swiper.slideTo(slideToIndex);
  },
  update: function update(initial) {
    var swiper = this;
    var thumbsSwiper = swiper.thumbs.swiper;
    if (!thumbsSwiper) return;
    var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
    var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
    var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

    if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
      var currentThumbsIndex = thumbsSwiper.activeIndex;
      var newThumbsIndex;
      var direction;

      if (thumbsSwiper.params.loop) {
        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
          thumbsSwiper.loopFix(); // eslint-disable-next-line

          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
          currentThumbsIndex = thumbsSwiper.activeIndex;
        } // Find actual thumbs index to slide to


        var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
        var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();

        if (typeof prevThumbsIndex === 'undefined') {
          newThumbsIndex = nextThumbsIndex;
        } else if (typeof nextThumbsIndex === 'undefined') {
          newThumbsIndex = prevThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
        } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
          newThumbsIndex = nextThumbsIndex;
        } else {
          newThumbsIndex = prevThumbsIndex;
        }

        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
      } else {
        newThumbsIndex = swiper.realIndex;
        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
      }

      if (useOffset) {
        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
      }

      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
        if (thumbsSwiper.params.centeredSlides) {
          if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
          } else {
            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
          }
        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) {// newThumbsIndex = newThumbsIndex - slidesPerView + 1;
        }

        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
      }
    } // Activate thumbs


    var thumbsToActivate = 1;
    var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
      thumbsToActivate = swiper.params.slidesPerView;
    }

    if (!swiper.params.thumbs.multipleActiveThumbs) {
      thumbsToActivate = 1;
    }

    thumbsToActivate = Math.floor(thumbsToActivate);
    thumbsSwiper.slides.removeClass(thumbActiveClass);

    if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
      for (var i = 0; i < thumbsToActivate; i += 1) {
        thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
      }
    } else {
      for (var _i = 0; _i < thumbsToActivate; _i += 1) {
        thumbsSwiper.slides.eq(swiper.realIndex + _i).addClass(thumbActiveClass);
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'thumbs',
  params: {
    thumbs: {
      swiper: null,
      multipleActiveThumbs: true,
      autoScrollOffset: 0,
      slideThumbActiveClass: 'swiper-slide-thumb-active',
      thumbsContainerClass: 'swiper-container-thumbs'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__["bindModuleMethods"])(swiper, {
      thumbs: _extends({
        swiper: null,
        initialized: false
      }, Thumbs)
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      var thumbs = swiper.params.thumbs;
      if (!thumbs || !thumbs.swiper) return;
      swiper.thumbs.init();
      swiper.thumbs.update(true);
    },
    slideChange: function slideChange(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    update: function update(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    resize: function resize(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    observerUpdate: function observerUpdate(swiper) {
      if (!swiper.thumbs.swiper) return;
      swiper.thumbs.update();
    },
    setTransition: function setTransition(swiper, duration) {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      thumbsSwiper.setTransition(duration);
    },
    beforeDestroy: function beforeDestroy(swiper) {
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;

      if (swiper.thumbs.swiperCreated && thumbsSwiper) {
        thumbsSwiper.destroy();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/virtual/virtual.js":
/*!***************************************************************!*\
  !*** ./node_modules/swiper/esm/components/virtual/virtual.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Virtual = {
  update: function update(force) {
    var swiper = this;
    var _swiper$params = swiper.params,
        slidesPerView = _swiper$params.slidesPerView,
        slidesPerGroup = _swiper$params.slidesPerGroup,
        centeredSlides = _swiper$params.centeredSlides;
    var _swiper$params$virtua = swiper.params.virtual,
        addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
        addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
    var _swiper$virtual = swiper.virtual,
        previousFrom = _swiper$virtual.from,
        previousTo = _swiper$virtual.to,
        slides = _swiper$virtual.slides,
        previousSlidesGrid = _swiper$virtual.slidesGrid,
        renderSlide = _swiper$virtual.renderSlide,
        previousOffset = _swiper$virtual.offset;
    swiper.updateActiveIndex();
    var activeIndex = swiper.activeIndex || 0;
    var offsetProp;
    if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
    var slidesAfter;
    var slidesBefore;

    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
      slidesBefore = slidesPerGroup + addSlidesBefore;
    }

    var from = Math.max((activeIndex || 0) - slidesBefore, 0);
    var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.virtual, {
      from: from,
      to: to,
      offset: offset,
      slidesGrid: swiper.slidesGrid
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.css(offsetProp, offset + "px");
      }

      swiper.updateProgress();
      return;
    }

    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset: offset,
        from: from,
        to: to,
        slides: function getSlides() {
          var slidesToRender = [];

          for (var i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }

          return slidesToRender;
        }()
      });

      if (swiper.params.virtual.renderExternalUpdate) {
        onRendered();
      }

      return;
    }

    var prependIndexes = [];
    var appendIndexes = [];

    if (force) {
      swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
    } else {
      for (var i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + i + "\"]").remove();
        }
      }
    }

    for (var _i = 0; _i < slides.length; _i += 1) {
      if (_i >= from && _i <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(_i);
        } else {
          if (_i > previousTo) appendIndexes.push(_i);
          if (_i < previousFrom) prependIndexes.push(_i);
        }
      }
    }

    appendIndexes.forEach(function (index) {
      swiper.$wrapperEl.append(renderSlide(slides[index], index));
    });
    prependIndexes.sort(function (a, b) {
      return b - a;
    }).forEach(function (index) {
      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + "px");
    onRendered();
  },
  renderSlide: function renderSlide(slide, index) {
    var swiper = this;
    var params = swiper.params.virtual;

    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }

    var $slideEl = params.renderSlide ? Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])(params.renderSlide.call(swiper, slide, index)) : Object(_utils_dom__WEBPACK_IMPORTED_MODULE_0__["default"])("<div class=\"" + swiper.params.slideClass + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>");
    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
    if (params.cache) swiper.virtual.cache[index] = $slideEl;
    return $slideEl;
  },
  appendSlide: function appendSlide(slides) {
    var swiper = this;

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.push(slides[i]);
      }
    } else {
      swiper.virtual.slides.push(slides);
    }

    swiper.virtual.update(true);
  },
  prependSlide: function prependSlide(slides) {
    var swiper = this;
    var activeIndex = swiper.activeIndex;
    var newActiveIndex = activeIndex + 1;
    var numberOfNewSlides = 1;

    if (Array.isArray(slides)) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
      }

      newActiveIndex = activeIndex + slides.length;
      numberOfNewSlides = slides.length;
    } else {
      swiper.virtual.slides.unshift(slides);
    }

    if (swiper.params.virtual.cache) {
      var cache = swiper.virtual.cache;
      var newCache = {};
      Object.keys(cache).forEach(function (cachedIndex) {
        var $cachedEl = cache[cachedIndex];
        var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

        if (cachedElIndex) {
          $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
        }

        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
      });
      swiper.virtual.cache = newCache;
    }

    swiper.virtual.update(true);
    swiper.slideTo(newActiveIndex, 0);
  },
  removeSlide: function removeSlide(slidesIndexes) {
    var swiper = this;
    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
    var activeIndex = swiper.activeIndex;

    if (Array.isArray(slidesIndexes)) {
      for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
        swiper.virtual.slides.splice(slidesIndexes[i], 1);

        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes[i]];
        }

        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }
    } else {
      swiper.virtual.slides.splice(slidesIndexes, 1);

      if (swiper.params.virtual.cache) {
        delete swiper.virtual.cache[slidesIndexes];
      }

      if (slidesIndexes < activeIndex) activeIndex -= 1;
      activeIndex = Math.max(activeIndex, 0);
    }

    swiper.virtual.update(true);
    swiper.slideTo(activeIndex, 0);
  },
  removeAllSlides: function removeAllSlides() {
    var swiper = this;
    swiper.virtual.slides = [];

    if (swiper.params.virtual.cache) {
      swiper.virtual.cache = {};
    }

    swiper.virtual.update(true);
    swiper.slideTo(0, 0);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'virtual',
  params: {
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: true,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      virtual: _extends({}, Virtual, {
        slides: swiper.params.virtual.slides,
        cache: {}
      })
    });
  },
  on: {
    beforeInit: function beforeInit(swiper) {
      if (!swiper.params.virtual.enabled) return;
      swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
      var overwriteParams = {
        watchSlidesProgress: true
      };
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.params, overwriteParams);
      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper.originalParams, overwriteParams);

      if (!swiper.params.initialSlide) {
        swiper.virtual.update();
      }
    },
    setTranslate: function setTranslate(swiper) {
      if (!swiper.params.virtual.enabled) return;
      swiper.virtual.update();
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/components/zoom/zoom.js":
/*!*********************************************************!*\
  !*** ./node_modules/swiper/esm/components/zoom/zoom.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/swiper/esm/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var Zoom = {
  // Calc Scale From Multi-touches
  getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) return 1;
    var x1 = e.targetTouches[0].pageX;
    var y1 = e.targetTouches[0].pageY;
    var x2 = e.targetTouches[1].pageX;
    var y2 = e.targetTouches[1].pageY;
    var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
  },
  // Events
  onGestureStart: function onGestureStart(e) {
    var swiper = this;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    zoom.fakeGestureTouched = false;
    zoom.fakeGestureMoved = false;

    if (!support.gestures) {
      if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
        return;
      }

      zoom.fakeGestureTouched = true;
      gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
    }

    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).closest("." + swiper.params.slideClass);
      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }

    if (gesture.$imageEl) {
      gesture.$imageEl.transition(0);
    }

    swiper.zoom.isScaling = true;
  },
  onGestureChange: function onGestureChange(e) {
    var swiper = this;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (!support.gestures) {
      if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
        return;
      }

      zoom.fakeGestureMoved = true;
      gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
      if (e.type === 'gesturechange') zoom.onGestureStart(e);
      return;
    }

    if (support.gestures) {
      zoom.scale = e.scale * zoom.currentScale;
    } else {
      zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
    }

    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
    }

    if (zoom.scale < params.minRatio) {
      zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
    }

    gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
  },
  onGestureEnd: function onGestureEnd(e) {
    var swiper = this;
    var device = swiper.device;
    var support = swiper.support;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (!support.gestures) {
      if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
        return;
      }

      if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
        return;
      }

      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    zoom.currentScale = zoom.scale;
    zoom.isScaling = false;
    if (zoom.scale === 1) gesture.$slideEl = undefined;
  },
  onTouchStart: function onTouchStart(e) {
    var swiper = this;
    var device = swiper.device;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    if (image.isTouched) return;
    if (device.android && e.cancelable) e.preventDefault();
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  },
  onTouchMove: function onTouchMove(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) return;

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getTranslate"])(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getTranslate"])(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);
    } // Define if we need image drag


    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !zoom.isScaling) {
      if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
        image.isTouched = false;
        return;
      }

      if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
        image.isTouched = false;
        return;
      }
    }

    if (e.cancelable) {
      e.preventDefault();
    }

    e.stopPropagation();
    image.isMoved = true;
    image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
    image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
    }

    if (image.currentX > image.maxX) {
      image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
    }

    if (image.currentY < image.minY) {
      image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
    }

    if (image.currentY > image.maxY) {
      image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
    } // Velocity


    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
    if (!velocity.prevTime) velocity.prevTime = Date.now();
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();
    gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
  },
  onTouchEnd: function onTouchEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture,
        image = zoom.image,
        velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }

    image.isTouched = false;
    image.isMoved = false;
    var momentumDurationX = 300;
    var momentumDurationY = 300;
    var momentumDistanceX = velocity.x * momentumDurationX;
    var newPositionX = image.currentX + momentumDistanceX;
    var momentumDistanceY = velocity.y * momentumDurationY;
    var newPositionY = image.currentY + momentumDistanceY; // Fix duration

    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
    var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
    image.currentX = newPositionX;
    image.currentY = newPositionY; // Define if we need image drag

    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
    image.maxX = -image.minX;
    image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
    gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
  },
  onTransitionEnd: function onTransitionEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;

    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      if (gesture.$imageEl) {
        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      }

      if (gesture.$imageWrapEl) {
        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      }

      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;
    }
  },
  // Toggle Zoom
  toggle: function toggle(e) {
    var swiper = this;
    var zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoom.out();
    } else {
      // Zoom In
      zoom.in(e);
    }
  },
  in: function _in(e) {
    var swiper = this;
    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture,
        image = zoom.image;

    if (!gesture.$slideEl) {
      if (e && e.target) {
        gesture.$slideEl = Object(_utils_dom__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target).closest("." + swiper.params.slideClass);
      }

      if (!gesture.$slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
        } else {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }
      }

      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
    gesture.$slideEl.addClass("" + params.zoomedSlideClass);
    var touchX;
    var touchY;
    var offsetX;
    var offsetY;
    var diffX;
    var diffY;
    var translateX;
    var translateY;
    var imageWidth;
    var imageHeight;
    var scaledWidth;
    var scaledHeight;
    var translateMinX;
    var translateMinY;
    var translateMaxX;
    var translateMaxY;
    var slideWidth;
    var slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left + window.scrollX;
      offsetY = gesture.$slideEl.offset().top + window.scrollY;
      diffX = offsetX + slideWidth / 2 - touchX;
      diffY = offsetY + slideHeight / 2 - touchY;
      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;
      translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
      translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;
      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }

      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }

      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }

    gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
    gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
  },
  out: function out() {
    var swiper = this;
    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture;

    if (!gesture.$slideEl) {
      if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
        gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
      } else {
        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
      }

      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
      gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
    }

    if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
    zoom.scale = 1;
    zoom.currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
    gesture.$slideEl = undefined;
  },
  toggleGestures: function toggleGestures(method) {
    var swiper = this;
    var zoom = swiper.zoom;
    var selector = zoom.slideSelector,
        passive = zoom.passiveListener;
    swiper.$wrapperEl[method]('gesturestart', selector, zoom.onGestureStart, passive);
    swiper.$wrapperEl[method]('gesturechange', selector, zoom.onGestureChange, passive);
    swiper.$wrapperEl[method]('gestureend', selector, zoom.onGestureEnd, passive);
  },
  enableGestures: function enableGestures() {
    if (this.zoom.gesturesEnabled) return;
    this.zoom.gesturesEnabled = true;
    this.zoom.toggleGestures('on');
  },
  disableGestures: function disableGestures() {
    if (!this.zoom.gesturesEnabled) return;
    this.zoom.gesturesEnabled = false;
    this.zoom.toggleGestures('off');
  },
  // Attach/Detach Events
  enable: function enable() {
    var swiper = this;
    var support = swiper.support;
    var zoom = swiper.zoom;
    if (zoom.enabled) return;
    zoom.enabled = true;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    var activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    var slideSelector = "." + swiper.params.slideClass;
    swiper.zoom.passiveListener = passiveListener;
    swiper.zoom.slideSelector = slideSelector; // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.on(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
  },
  disable: function disable() {
    var swiper = this;
    var zoom = swiper.zoom;
    if (!zoom.enabled) return;
    var support = swiper.support;
    swiper.zoom.enabled = false;
    var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
      passive: true,
      capture: false
    } : false;
    var activeListenerWithCapture = support.passiveListener ? {
      passive: false,
      capture: true
    } : true;
    var slideSelector = "." + swiper.params.slideClass; // Scale image

    if (support.gestures) {
      swiper.$wrapperEl.off(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
      swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
      swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

      if (swiper.touchEvents.cancel) {
        swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
      }
    } // Move image


    swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'zoom',
  params: {
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed'
    }
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["bindModuleMethods"])(swiper, {
      zoom: _extends({
        enabled: false,
        scale: 1,
        currentScale: 1,
        isScaling: false,
        gesture: {
          $slideEl: undefined,
          slideWidth: undefined,
          slideHeight: undefined,
          $imageEl: undefined,
          $imageWrapEl: undefined,
          maxRatio: 3
        },
        image: {
          isTouched: undefined,
          isMoved: undefined,
          currentX: undefined,
          currentY: undefined,
          minX: undefined,
          minY: undefined,
          maxX: undefined,
          maxY: undefined,
          width: undefined,
          height: undefined,
          startX: undefined,
          startY: undefined,
          touchesStart: {},
          touchesCurrent: {}
        },
        velocity: {
          x: undefined,
          y: undefined,
          prevPositionX: undefined,
          prevPositionY: undefined,
          prevTime: undefined
        }
      }, Zoom)
    });
    var scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
      get: function get() {
        return scale;
      },
      set: function set(value) {
        if (scale !== value) {
          var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
          var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
          swiper.emit('zoomChange', value, imageEl, slideEl);
        }

        scale = value;
      }
    });
  },
  on: {
    init: function init(swiper) {
      if (swiper.params.zoom.enabled) {
        swiper.zoom.enable();
      }
    },
    destroy: function destroy(swiper) {
      swiper.zoom.disable();
    },
    touchStart: function touchStart(swiper, e) {
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchStart(e);
    },
    touchEnd: function touchEnd(swiper, e) {
      if (!swiper.zoom.enabled) return;
      swiper.zoom.onTouchEnd(e);
    },
    doubleTap: function doubleTap(swiper, e) {
      if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        swiper.zoom.toggle(e);
      }
    },
    transitionEnd: function transitionEnd(swiper) {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        swiper.zoom.onTransitionEnd();
      }
    },
    slideChange: function slideChange(swiper) {
      if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
        swiper.zoom.onTransitionEnd();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/modules/observer/observer.js":
/*!**************************************************************!*\
  !*** ./node_modules/swiper/esm/modules/observer/observer.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Observer = {
  attach: function attach(target, options) {
    if (options === void 0) {
      options = {};
    }

    var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
    var swiper = this;
    var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    var observer = new ObserverFunc(function (mutations) {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (mutations.length === 1) {
        swiper.emit('observerUpdate', mutations[0]);
        return;
      }

      var observerUpdate = function observerUpdate() {
        swiper.emit('observerUpdate', mutations[0]);
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    swiper.observer.observers.push(observer);
  },
  init: function init() {
    var swiper = this;
    if (!swiper.support.observer || !swiper.params.observer) return;

    if (swiper.params.observeParents) {
      var containerParents = swiper.$el.parents();

      for (var i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    } // Observe container


    swiper.observer.attach(swiper.$el[0], {
      childList: swiper.params.observeSlideChildren
    }); // Observe wrapper

    swiper.observer.attach(swiper.$wrapperEl[0], {
      attributes: false
    });
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.observer.observers.forEach(function (observer) {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'observer',
  params: {
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  },
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["bindModuleMethods"])(swiper, {
      observer: _extends({}, Observer, {
        observers: []
      })
    });
  },
  on: {
    init: function init(swiper) {
      swiper.observer.init();
    },
    destroy: function destroy(swiper) {
      swiper.observer.destroy();
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/modules/resize/resize.js":
/*!**********************************************************!*\
  !*** ./node_modules/swiper/esm/modules/resize/resize.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/utils */ "./node_modules/swiper/esm/utils/utils.js");



var supportsResizeObserver = function supportsResizeObserver() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  return typeof window.ResizeObserver !== 'undefined';
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'resize',
  create: function create() {
    var swiper = this;
    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(swiper, {
      resize: {
        observer: null,
        createObserver: function createObserver() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.resize.observer = new ResizeObserver(function (entries) {
            var width = swiper.width,
                height = swiper.height;
            var newWidth = width;
            var newHeight = height;
            entries.forEach(function (_ref) {
              var contentBoxSize = _ref.contentBoxSize,
                  contentRect = _ref.contentRect,
                  target = _ref.target;
              if (target && target !== swiper.el) return;
              newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
              newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
            });

            if (newWidth !== width || newHeight !== height) {
              swiper.resize.resizeHandler();
            }
          });
          swiper.resize.observer.observe(swiper.el);
        },
        removeObserver: function removeObserver() {
          if (swiper.resize.observer && swiper.resize.observer.unobserve && swiper.el) {
            swiper.resize.observer.unobserve(swiper.el);
            swiper.resize.observer = null;
          }
        },
        resizeHandler: function resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler: function orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) return;
          swiper.emit('orientationchange');
        }
      }
    });
  },
  on: {
    init: function init(swiper) {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

      if (swiper.params.resizeObserver && supportsResizeObserver()) {
        swiper.resize.createObserver();
        return;
      } // Emit resize


      window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

      window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy: function destroy(swiper) {
      var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
      swiper.resize.removeObserver();
      window.removeEventListener('resize', swiper.resize.resizeHandler);
      window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    }
  }
});

/***/ }),

/***/ "./node_modules/swiper/esm/utils/dom.js":
/*!**********************************************!*\
  !*** ./node_modules/swiper/esm/utils/dom.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dom7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dom7 */ "./node_modules/dom7/dom7.esm.js");

var Methods = {
  addClass: dom7__WEBPACK_IMPORTED_MODULE_0__["addClass"],
  removeClass: dom7__WEBPACK_IMPORTED_MODULE_0__["removeClass"],
  hasClass: dom7__WEBPACK_IMPORTED_MODULE_0__["hasClass"],
  toggleClass: dom7__WEBPACK_IMPORTED_MODULE_0__["toggleClass"],
  attr: dom7__WEBPACK_IMPORTED_MODULE_0__["attr"],
  removeAttr: dom7__WEBPACK_IMPORTED_MODULE_0__["removeAttr"],
  transform: dom7__WEBPACK_IMPORTED_MODULE_0__["transform"],
  transition: dom7__WEBPACK_IMPORTED_MODULE_0__["transition"],
  on: dom7__WEBPACK_IMPORTED_MODULE_0__["on"],
  off: dom7__WEBPACK_IMPORTED_MODULE_0__["off"],
  trigger: dom7__WEBPACK_IMPORTED_MODULE_0__["trigger"],
  transitionEnd: dom7__WEBPACK_IMPORTED_MODULE_0__["transitionEnd"],
  outerWidth: dom7__WEBPACK_IMPORTED_MODULE_0__["outerWidth"],
  outerHeight: dom7__WEBPACK_IMPORTED_MODULE_0__["outerHeight"],
  styles: dom7__WEBPACK_IMPORTED_MODULE_0__["styles"],
  offset: dom7__WEBPACK_IMPORTED_MODULE_0__["offset"],
  css: dom7__WEBPACK_IMPORTED_MODULE_0__["css"],
  each: dom7__WEBPACK_IMPORTED_MODULE_0__["each"],
  html: dom7__WEBPACK_IMPORTED_MODULE_0__["html"],
  text: dom7__WEBPACK_IMPORTED_MODULE_0__["text"],
  is: dom7__WEBPACK_IMPORTED_MODULE_0__["is"],
  index: dom7__WEBPACK_IMPORTED_MODULE_0__["index"],
  eq: dom7__WEBPACK_IMPORTED_MODULE_0__["eq"],
  append: dom7__WEBPACK_IMPORTED_MODULE_0__["append"],
  prepend: dom7__WEBPACK_IMPORTED_MODULE_0__["prepend"],
  next: dom7__WEBPACK_IMPORTED_MODULE_0__["next"],
  nextAll: dom7__WEBPACK_IMPORTED_MODULE_0__["nextAll"],
  prev: dom7__WEBPACK_IMPORTED_MODULE_0__["prev"],
  prevAll: dom7__WEBPACK_IMPORTED_MODULE_0__["prevAll"],
  parent: dom7__WEBPACK_IMPORTED_MODULE_0__["parent"],
  parents: dom7__WEBPACK_IMPORTED_MODULE_0__["parents"],
  closest: dom7__WEBPACK_IMPORTED_MODULE_0__["closest"],
  find: dom7__WEBPACK_IMPORTED_MODULE_0__["find"],
  children: dom7__WEBPACK_IMPORTED_MODULE_0__["children"],
  filter: dom7__WEBPACK_IMPORTED_MODULE_0__["filter"],
  remove: dom7__WEBPACK_IMPORTED_MODULE_0__["remove"]
};
Object.keys(Methods).forEach(function (methodName) {
  Object.defineProperty(dom7__WEBPACK_IMPORTED_MODULE_0__["$"].fn, methodName, {
    value: Methods[methodName],
    writable: true
  });
});
/* harmony default export */ __webpack_exports__["default"] = (dom7__WEBPACK_IMPORTED_MODULE_0__["$"]);

/***/ }),

/***/ "./node_modules/swiper/esm/utils/get-browser.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/esm/utils/get-browser.js ***!
  \******************************************************/
/*! exports provided: getBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrowser", function() { return getBrowser; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

var browser;

function calcBrowser() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();

  function isSafari() {
    var ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }

  return {
    isEdge: !!window.navigator.userAgent.match(/Edge/g),
    isSafari: isSafari(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
  };
}

function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }

  return browser;
}



/***/ }),

/***/ "./node_modules/swiper/esm/utils/get-device.js":
/*!*****************************************************!*\
  !*** ./node_modules/swiper/esm/utils/get-device.js ***!
  \*****************************************************/
/*! exports provided: getDevice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDevice", function() { return getDevice; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");
/* harmony import */ var _get_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-support */ "./node_modules/swiper/esm/utils/get-support.js");


var device;

function calcDevice(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      userAgent = _ref.userAgent;

  var support = Object(_get_support__WEBPACK_IMPORTED_MODULE_1__["getSupport"])();
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var platform = window.navigator.platform;
  var ua = userAgent || window.navigator.userAgent;
  var device = {
    ios: false,
    android: false
  };
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  var windows = platform === 'Win32';
  var macos = platform === 'MacIntel'; // iPadOs 13 fix

  var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

  if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  } // Android


  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }

  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  } // Export object


  return device;
}

function getDevice(overrides) {
  if (overrides === void 0) {
    overrides = {};
  }

  if (!device) {
    device = calcDevice(overrides);
  }

  return device;
}



/***/ }),

/***/ "./node_modules/swiper/esm/utils/get-support.js":
/*!******************************************************!*\
  !*** ./node_modules/swiper/esm/utils/get-support.js ***!
  \******************************************************/
/*! exports provided: getSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupport", function() { return getSupport; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");

var support;

function calcSupport() {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();
  return {
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
    observer: function checkObserver() {
      return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
    }(),
    passiveListener: function checkPassiveListener() {
      var supportsPassive = false;

      try {
        var opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener('testPassiveListener', null, opts);
      } catch (e) {// No support
      }

      return supportsPassive;
    }(),
    gestures: function checkGestures() {
      return 'ongesturestart' in window;
    }()
  };
}

function getSupport() {
  if (!support) {
    support = calcSupport();
  }

  return support;
}



/***/ }),

/***/ "./node_modules/swiper/esm/utils/utils.js":
/*!************************************************!*\
  !*** ./node_modules/swiper/esm/utils/utils.js ***!
  \************************************************/
/*! exports provided: deleteProps, nextTick, now, getTranslate, isObject, extend, bindModuleMethods, getComputedStyle, classesToSelector, createElementIfNotDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProps", function() { return deleteProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTranslate", function() { return getTranslate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindModuleMethods", function() { return bindModuleMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() { return getComputedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classesToSelector", function() { return classesToSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElementIfNotDefined", function() { return createElementIfNotDefined; });
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ssr-window */ "./node_modules/ssr-window/ssr-window.esm.js");


function deleteProps(obj) {
  var object = obj;
  Object.keys(object).forEach(function (key) {
    try {
      object[key] = null;
    } catch (e) {// no getter for object
    }

    try {
      delete object[key];
    } catch (e) {// something got wrong
    }
  });
}

function nextTick(callback, delay) {
  if (delay === void 0) {
    delay = 0;
  }

  return setTimeout(callback, delay);
}

function now() {
  return Date.now();
}

function getComputedStyle(el) {
  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var style;

  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }

  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }

  if (!style) {
    style = el.style;
  }

  return style;
}

function getTranslate(el, axis) {
  if (axis === void 0) {
    axis = 'x';
  }

  var window = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getWindow"])();
  var matrix;
  var curTransform;
  var transformMatrix;
  var curStyle = getComputedStyle(el, null);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;

    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(function (a) {
        return a.replace(',', '.');
      }).join(', ');
    } // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case


    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }

  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
  }

  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
  }

  return curTransform || 0;
}

function isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }

  return node && (node.nodeType === 1 || node.nodeType === 11);
}

function extend() {
  var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  var noExtend = ['__proto__', 'constructor', 'prototype'];

  for (var i = 1; i < arguments.length; i += 1) {
    var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      var keysArray = Object.keys(Object(nextSource)).filter(function (key) {
        return noExtend.indexOf(key) < 0;
      });

      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

        if (desc !== undefined && desc.enumerable) {
          if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
            to[nextKey] = {};

            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }

  return to;
}

function bindModuleMethods(instance, obj) {
  Object.keys(obj).forEach(function (key) {
    if (isObject(obj[key])) {
      Object.keys(obj[key]).forEach(function (subKey) {
        if (typeof obj[key][subKey] === 'function') {
          obj[key][subKey] = obj[key][subKey].bind(instance);
        }
      });
    }

    instance[key] = obj[key];
  });
}

function classesToSelector(classes) {
  if (classes === void 0) {
    classes = '';
  }

  return "." + classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.');
}

function createElementIfNotDefined($container, params, createElements, checkProps) {
  var document = Object(ssr_window__WEBPACK_IMPORTED_MODULE_0__["getDocument"])();

  if (createElements) {
    Object.keys(checkProps).forEach(function (key) {
      if (!params[key] && params.auto === true) {
        var element = document.createElement('div');
        element.className = checkProps[key];
        $container.append(element);
        params[key] = element;
      }
    });
  }

  return params;
}



/***/ }),

/***/ "./node_modules/swiper/swiper.esm.js":
/*!*******************************************!*\
  !*** ./node_modules/swiper/swiper.esm.js ***!
  \*******************************************/
/*! exports provided: Swiper, default, Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _esm_components_core_core_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./esm/components/core/core-class */ "./node_modules/swiper/esm/components/core/core-class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return _esm_components_core_core_class__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _esm_components_core_core_class__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _esm_components_virtual_virtual__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./esm/components/virtual/virtual */ "./node_modules/swiper/esm/components/virtual/virtual.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Virtual", function() { return _esm_components_virtual_virtual__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _esm_components_keyboard_keyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./esm/components/keyboard/keyboard */ "./node_modules/swiper/esm/components/keyboard/keyboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return _esm_components_keyboard_keyboard__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _esm_components_mousewheel_mousewheel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./esm/components/mousewheel/mousewheel */ "./node_modules/swiper/esm/components/mousewheel/mousewheel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mousewheel", function() { return _esm_components_mousewheel_mousewheel__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _esm_components_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./esm/components/navigation/navigation */ "./node_modules/swiper/esm/components/navigation/navigation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return _esm_components_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _esm_components_pagination_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./esm/components/pagination/pagination */ "./node_modules/swiper/esm/components/pagination/pagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _esm_components_pagination_pagination__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _esm_components_scrollbar_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./esm/components/scrollbar/scrollbar */ "./node_modules/swiper/esm/components/scrollbar/scrollbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scrollbar", function() { return _esm_components_scrollbar_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _esm_components_parallax_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./esm/components/parallax/parallax */ "./node_modules/swiper/esm/components/parallax/parallax.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parallax", function() { return _esm_components_parallax_parallax__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _esm_components_zoom_zoom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./esm/components/zoom/zoom */ "./node_modules/swiper/esm/components/zoom/zoom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Zoom", function() { return _esm_components_zoom_zoom__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _esm_components_lazy_lazy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./esm/components/lazy/lazy */ "./node_modules/swiper/esm/components/lazy/lazy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return _esm_components_lazy_lazy__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _esm_components_controller_controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./esm/components/controller/controller */ "./node_modules/swiper/esm/components/controller/controller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _esm_components_controller_controller__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _esm_components_a11y_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./esm/components/a11y/a11y */ "./node_modules/swiper/esm/components/a11y/a11y.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "A11y", function() { return _esm_components_a11y_a11y__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _esm_components_history_history__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./esm/components/history/history */ "./node_modules/swiper/esm/components/history/history.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "History", function() { return _esm_components_history_history__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _esm_components_hash_navigation_hash_navigation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./esm/components/hash-navigation/hash-navigation */ "./node_modules/swiper/esm/components/hash-navigation/hash-navigation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HashNavigation", function() { return _esm_components_hash_navigation_hash_navigation__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _esm_components_autoplay_autoplay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./esm/components/autoplay/autoplay */ "./node_modules/swiper/esm/components/autoplay/autoplay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autoplay", function() { return _esm_components_autoplay_autoplay__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _esm_components_effect_fade_effect_fade__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./esm/components/effect-fade/effect-fade */ "./node_modules/swiper/esm/components/effect-fade/effect-fade.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EffectFade", function() { return _esm_components_effect_fade_effect_fade__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _esm_components_effect_cube_effect_cube__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./esm/components/effect-cube/effect-cube */ "./node_modules/swiper/esm/components/effect-cube/effect-cube.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EffectCube", function() { return _esm_components_effect_cube_effect_cube__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _esm_components_effect_flip_effect_flip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./esm/components/effect-flip/effect-flip */ "./node_modules/swiper/esm/components/effect-flip/effect-flip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EffectFlip", function() { return _esm_components_effect_flip_effect_flip__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _esm_components_effect_coverflow_effect_coverflow__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./esm/components/effect-coverflow/effect-coverflow */ "./node_modules/swiper/esm/components/effect-coverflow/effect-coverflow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EffectCoverflow", function() { return _esm_components_effect_coverflow_effect_coverflow__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _esm_components_thumbs_thumbs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./esm/components/thumbs/thumbs */ "./node_modules/swiper/esm/components/thumbs/thumbs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Thumbs", function() { return _esm_components_thumbs_thumbs__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/**
 * Swiper 6.8.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: August 23, 2021
 */






















/***/ }),

/***/ "./node_modules/vanilla-lazyload/dist/lazyload.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(n,t){ true?module.exports=t():undefined}(this,(function(){"use strict";function n(){return n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},n.apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),a=t&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(t){return n({},r,t)},u=function(n,t){var e,i="LazyLoad::Initialized",o=new n(t);try{e=new CustomEvent(i,{detail:{instance:o}})}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(e)},l="src",s="srcset",f="sizes",d="poster",_="llOriginalAttrs",g="loading",v="loaded",b="applied",p="error",h="native",m="data-",E="ll-status",I=function(n,t){return n.getAttribute(m+t)},y=function(n){return I(n,E)},A=function(n,t){return function(n,t,e){var i="data-ll-status";null!==e?n.setAttribute(i,e):n.removeAttribute(i)}(n,0,t)},k=function(n){return A(n,null)},L=function(n){return null===y(n)},w=function(n){return y(n)===h},x=[g,v,b,p],O=function(n,t,e,i){n&&(void 0===i?void 0===e?n(t):n(t,e):n(t,e,i))},N=function(n,t){o?n.classList.add(t):n.className+=(n.className?" ":"")+t},C=function(n,t){o?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},M=function(n){return n.llTempImage},z=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n)}},R=function(n,t){n&&(n.loadingCount+=t)},T=function(n,t){n&&(n.toLoadCount=t)},G=function(n){for(var t,e=[],i=0;t=n.children[i];i+=1)"SOURCE"===t.tagName&&e.push(t);return e},D=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&G(e).forEach(t)},V=function(n,t){G(n).forEach(t)},F=[l],j=[l,d],P=[l,s,f],S=function(n){return!!n[_]},U=function(n){return n[_]},$=function(n){return delete n[_]},q=function(n,t){if(!S(n)){var e={};t.forEach((function(t){e[t]=n.getAttribute(t)})),n[_]=e}},H=function(n,t){if(S(n)){var e=U(n);t.forEach((function(t){!function(n,t,e){e?n.setAttribute(t,e):n.removeAttribute(t)}(n,t,e[t])}))}},B=function(n,t,e){N(n,t.class_loading),A(n,g),e&&(R(e,1),O(t.callback_loading,n,e))},J=function(n,t,e){e&&n.setAttribute(t,e)},K=function(n,t){J(n,f,I(n,t.data_sizes)),J(n,s,I(n,t.data_srcset)),J(n,l,I(n,t.data_src))},Q={IMG:function(n,t){D(n,(function(n){q(n,P),K(n,t)})),q(n,P),K(n,t)},IFRAME:function(n,t){q(n,F),J(n,l,I(n,t.data_src))},VIDEO:function(n,t){V(n,(function(n){q(n,F),J(n,l,I(n,t.data_src))})),q(n,j),J(n,d,I(n,t.data_poster)),J(n,l,I(n,t.data_src)),n.load()}},W=["IMG","IFRAME","VIDEO"],X=function(n,t){!t||function(n){return n.loadingCount>0}(t)||function(n){return n.toLoadCount>0}(t)||O(n.callback_finish,t)},Y=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e},Z=function(n,t,e){n.removeEventListener(t,e)},nn=function(n){return!!n.llEvLisnrs},tn=function(n){if(nn(n)){var t=n.llEvLisnrs;for(var e in t){var i=t[e];Z(n,e,i)}delete n.llEvLisnrs}},en=function(n,t,e){!function(n){delete n.llTempImage}(n),R(e,-1),function(n){n&&(n.toLoadCount-=1)}(e),C(n,t.class_loading),t.unobserve_completed&&z(n,e)},on=function(n,t,e){var i=M(n)||n;nn(i)||function(n,t,e){nn(n)||(n.llEvLisnrs={});var i="VIDEO"===n.tagName?"loadeddata":"load";Y(n,i,t),Y(n,"error",e)}(i,(function(o){!function(n,t,e,i){var o=w(t);en(t,e,i),N(t,e.class_loaded),A(t,v),O(e.callback_loaded,t,i),o||X(e,i)}(0,n,t,e),tn(i)}),(function(o){!function(n,t,e,i){var o=w(t);en(t,e,i),N(t,e.class_error),A(t,p),O(e.callback_error,t,i),o||X(e,i)}(0,n,t,e),tn(i)}))},an=function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG")}(n),on(n,t,e),function(n){S(n)||(n[_]={backgroundImage:n.style.backgroundImage})}(n),function(n,t,e){var i=I(n,t.data_bg),o=I(n,t.data_bg_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage='url("'.concat(r,'")'),M(n).setAttribute(l,r),B(n,t,e))}(n,t,e),function(n,t,e){var i=I(n,t.data_bg_multi),o=I(n,t.data_bg_multi_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage=r,function(n,t,e){N(n,t.class_applied),A(n,b),e&&(t.unobserve_completed&&z(n,t),O(t.callback_applied,n,e))}(n,t,e))}(n,t,e)},rn=function(n,t,e){!function(n){return W.indexOf(n.tagName)>-1}(n)?an(n,t,e):function(n,t,e){on(n,t,e),function(n,t,e){var i=Q[n.tagName];i&&(i(n,t),B(n,t,e))}(n,t,e)}(n,t,e)},cn=function(n){n.removeAttribute(l),n.removeAttribute(s),n.removeAttribute(f)},un=function(n){D(n,(function(n){H(n,P)})),H(n,P)},ln={IMG:un,IFRAME:function(n){H(n,F)},VIDEO:function(n){V(n,(function(n){H(n,F)})),H(n,j),n.load()}},sn=function(n,t){(function(n){var t=ln[n.tagName];t?t(n):function(n){if(S(n)){var t=U(n);n.style.backgroundImage=t.backgroundImage}}(n)})(n),function(n,t){L(n)||w(n)||(C(n,t.class_entered),C(n,t.class_exited),C(n,t.class_applied),C(n,t.class_loading),C(n,t.class_loaded),C(n,t.class_error))}(n,t),k(n),$(n)},fn=["IMG","IFRAME","VIDEO"],dn=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype},_n=function(n,t,e){n.forEach((function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0}(n)?function(n,t,e,i){var o=function(n){return x.indexOf(y(n))>=0}(n);A(n,"entered"),N(n,e.class_entered),C(n,e.class_exited),function(n,t,e){t.unobserve_entered&&z(n,e)}(n,e,i),O(e.callback_enter,n,t,i),o||rn(n,e,i)}(n.target,n,t,e):function(n,t,e,i){L(n)||(N(n,e.class_exited),function(n,t,e,i){e.cancel_on_exit&&function(n){return y(n)===g}(n)&&"IMG"===n.tagName&&(tn(n),function(n){D(n,(function(n){cn(n)})),cn(n)}(n),un(n),C(n,e.class_loading),R(i,-1),k(n),O(e.callback_cancel,n,t,i))}(n,t,e,i),O(e.callback_exit,n,t,i))}(n.target,n,t,e)}))},gn=function(n){return Array.prototype.slice.call(n)},vn=function(n){return n.container.querySelectorAll(n.elements_selector)},bn=function(n){return function(n){return y(n)===p}(n)},pn=function(n,t){return function(n){return gn(n).filter(L)}(n||vn(t))},hn=function(n,e){var o=c(n);this._settings=o,this.loadingCount=0,function(n,t){i&&!dn(n)&&(t._observer=new IntersectionObserver((function(e){_n(e,n,t)}),function(n){return{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}}(n)))}(o,this),function(n,e){t&&window.addEventListener("online",(function(){!function(n,t){var e;(e=vn(n),gn(e).filter(bn)).forEach((function(t){C(t,n.class_error),k(t)})),t.update()}(n,e)}))}(o,this),this.update(e)};return hn.prototype={update:function(n){var t,o,a=this._settings,r=pn(n,a);T(this,r.length),!e&&i?dn(a)?function(n,t,e){n.forEach((function(n){-1!==fn.indexOf(n.tagName)&&function(n,t,e){n.setAttribute("loading","lazy"),on(n,t,e),function(n,t){var e=Q[n.tagName];e&&e(n,t)}(n,t),A(n,h)}(n,t,e)})),T(e,0)}(r,a,this):(o=r,function(n){n.disconnect()}(t=this._observer),function(n,t){t.forEach((function(t){n.observe(t)}))}(t,o)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),vn(this._settings).forEach((function(n){$(n)})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(n){var t=this,e=this._settings;pn(n,e).forEach((function(n){z(n,t),rn(n,e,t)}))},restoreAll:function(){var n=this._settings;vn(n).forEach((function(t){sn(t,n)}))}},hn.load=function(n,t){var e=c(t);rn(n,e)},hn.resetStatus=function(n){k(n)},t&&function(n,t){if(t)if(t.length)for(var e,i=0;e=t[i];i+=1)u(n,e);else u(n,t)}(hn,window.lazyLoadOptions),hn}));


/***/ })

/******/ });