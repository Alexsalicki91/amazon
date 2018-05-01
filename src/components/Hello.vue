
<template>
  <div id="hello is-loaded">
				<svg class="hidden">
					<symbol id="icon-arrow" viewBox="0 0 24 24">
						<title>arrow</title>
						<polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 "/>
					</symbol>
					<symbol id="icon-drop" viewBox="0 0 24 24">
						<title>drop</title>
						<path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z"/><path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z"/>
					</symbol>
					<symbol id="icon-menu" viewBox="0 0 24 13">
						<title>menu</title>
						<path d="M.75 1.515h22.498a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5zM23.248 5.265H8.168a.75.75 0 0 0 0 1.5h15.08a.75.75 0 0 0 0-1.5zM23.248 10.514H4.322a.75.75 0 0 0 0 1.5h18.926a.75.75 0 0 0 0-1.5z"/>
					</symbol>
					<symbol id="icon-dot" viewBox="0 0 24 24">
						<title>dot</title>
						<path d="M11.5 9c-.69 0-1.28.244-1.768.732A2.41 2.41 0 0 0 9 11.5c0 .69.244 1.28.732 1.767A2.409 2.409 0 0 0 11.5 14c.69 0 1.28-.244 1.768-.733A2.408 2.408 0 0 0 14 11.5c0-.69-.244-1.28-.732-1.768A2.408 2.408 0 0 0 11.5 9z"/>
					</symbol>
					<symbol id="icon-cross" viewBox="0 0 24 24">
						<title>cross</title>
						<path d="M11.449 11.962l-5.1 5.099a.363.363 0 1 0 .513.512L12 12.436l5.137 5.137a.361.361 0 0 0 .513 0 .363.363 0 0 0 0-.512l-5.099-5.1 5.102-5.102a.363.363 0 1 0-.512-.513L12 11.487l-5.141-5.14a.363.363 0 0 0-.513.512l5.103 5.103z"/>
					</symbol>
					<symbol id="icon-arrowlong" viewBox="0 0 32 11">
						<title>arrow-long</title>
						<path d="M27.166.183a.619.619 0 0 0-.878 0 .619.619 0 0 0 0 .878l2.735 2.735H.768a.624.624 0 0 0 0 1.248h28.254L26.287 7.77a.619.619 0 0 0 0 .878.617.617 0 0 0 .441.183c.163 0 .32-.061.442-.183l3.796-3.796a.623.623 0 0 0-.005-.878L27.166.183z"/>
					</symbol>
					<symbol id="icon-close" viewBox="0 0 24 24">
						<title>close</title>
						<path d="M21 4.565L19.435 3 12 10.435 4.565 3 3 4.565 10.435 12 3 19.435 4.565 21 12 13.565 19.435 21 21 19.435 13.565 12z"/>
					</symbol>
					<symbol id="icon-navup" viewBox="0 0 50 50">
						<title>navup</title>
						<path d="M20.259 28.211l5.07-5.03 5.075 5.034a.36.36 0 0 0 .51 0 .356.356 0 0 0 0-.506l-5.323-5.28a.404.404 0 0 0-.135-.084.364.364 0 0 0-.384.08l-5.324 5.28a.356.356 0 0 0 0 .506c.141.14.37.14.51 0z" />
					</symbol>
					<symbol id="icon-navdown" viewBox="0 0 50 50">
						<title>navdown</title>
						<path d="M20.259 22.43l5.07 5.03 5.075-5.034a.36.36 0 0 1 .51 0c.14.14.14.366 0 .506l-5.323 5.28a.404.404 0 0 1-.135.084.364.364 0 0 1-.384-.081l-5.324-5.28a.356.356 0 0 1 0-.505c.141-.14.37-.14.51 0z" />
					</symbol>
					<symbol id="icon-grid" viewBox="0 0 24 24">
						<title>grid</title>
						<path d="M8.982 8.982h5.988v5.988H8.982zM0 0h5.988v5.988H0zM8.982 17.965h5.988v5.988H8.982zM0 8.982h5.988v5.988H0zM0 17.965h5.988v5.988H0zM17.965 0h5.988v5.988h-5.988zM8.982 0h5.988v5.988H8.982zM17.965 8.982h5.988v5.988h-5.988zM17.965 17.965h5.988v5.988h-5.988z"/>
					</symbol>
				</svg>
				<main>
					<div class="sections">
						<header class="sections__header">
							<h1 class="title">Outdoors</h1>

						</header>
						<!-- codrops links -->
						<!-- menu -->

						<!-- facts expander with toggles; content for each is in its section -->
						<div class="facts">

							<button class="button-contentclose">
								<svg class="icon icon--close"><use xlink:href="#icon-close"></use></svg>
							</button>
						</div>

						<!-- index -->
						<div class="sections__index">
							<span class="sections__index-current">
								<span class="sections__index-inner">01</span>
							</span>
							<span class="sections__index-total">03</span>
						</div>
						<!-- navigation down -->
						<nav class="sections__nav">
							<button class="sections__nav-item sections__nav-item--prev">
								<svg class="icon icon--navup"><use xlink:href="#icon-navup"></use></svg>
							</button>
							<button class="sections__nav-item sections__nav-item--next">
								<svg class="icon icon--navdown"><use xlink:href="#icon-navdown"></use></svg>
							</button>
						</nav>
						<!-- sections -->
						<section class="section section--current">
							<div class="section__img">
								<div class="section__img-inner">
									<img src="/static/bg-manners.jpg"/>
								</div>
							</div>
							<div class="section__content">
								<h2 class="section__title">Manners</h2>
								<p class="section__description"><span class="section__description-inner"></span></p>
							</div>

							<div class="section__more">
								<div class="section__more-inner section__more-inner--bg1">
									<p class="section__more-link">
										<router-link v-bind:to="'/projects/manners'"style="font-size:17px ; color:#fff;">Discover</router-link>
										<svg class="icon icon--arrowlong"><use xlink:href="#icon-arrowlong"></use></svg>
									</p>
								</div>
							</div>

							<ul class="section__facts">
								<li class="section__facts-item">
								</li>
								<li class="section__facts-item">
								</li>
								<li class="section__facts-item">
								</li>

							</ul>

						</section><!--/ section -->
						<section class="section">
							<div class="section__content">
								<h2 class="section__title">Euroservice</h2>
								<p class="section__description"><span class="section__description-inner"></span></p>
							</div>
							<div class="section__img">
								<div class="section__img-inner">
									<img src="/static/bg-euroservice.jpg"/>
								</div>
							</div>
							<div class="section__more">
								<div class="section__more-inner section__more-inner--bg2">
									<a href="#" class="section__more-link">
										<router-link v-bind:to="'/projects/euroservice'"style="font-size:17px ; color:#fff;">Discover</router-link>
										<svg class="icon icon--arrowlong"><use xlink:href="#icon-arrowlong"></use></svg>
									</a>
								</div>
							</div>

							<ul class="section__facts">
								<li class="section__facts-item">
								</li>
								<li class="section__facts-item">
								</li>
								<li class="section__facts-item">
								</li>

							</ul>

						</section><!--/ section -->
						<section class="section">
							<div class="section__content">
								<h2 class="section__title">Tabloo</h2>
								<p class="section__description"><span class="section__description-inner"></span></p>
							</div>
							<div class="section__img">
								<div class="section__img-inner">
									<img src="/static/bg-tabloo.jpg"/>
								</div>
							</div>
							<div class="section__more">
								<div class="section__more-inner section__more-inner--bg3">
									<a href="#" class="section__more-link">
									<router-link v-bind:to="'/projects/tabloo'"style="font-size:17px ; color:#fff;">Discover</router-link>
										<svg class="icon icon--arrowlong"><use xlink:href="#icon-arrowlong"></use></svg>
									</a>
								</div>
							</div>

							<ul class="section__facts">
								<li class="section__facts-item">
								</li>
								<li class="section__facts-item">
								</li>
								<li class="section__facts-item">
								</li>

							</ul>
						</section><!--/ section -->


						<!--/ section -->
					</div><!--/ sections -->

				</main>
  </div>
</template>



<script>
export default {
	 name: 'hello',
	 mounted() {



	 	 /**
	 	  * main.js
	 	  * http://www.codrops.com
	 	  *
	 	  * Licensed under the MIT license.
	 	  * http://www.opensource.org/licenses/mit-license.php
	 	  *
	 	  * Copyright 2018, Codrops
	 	  * http://www.codrops.com
	 	  */
	 	 {
	 	 	// From https://davidwalsh.name/javascript-debounce-function.
	 	 	function debounce(func, wait, immediate) {
	 	 		var timeout;
	 	 		return function() {
	 	 			var context = this, args = arguments;
	 	 			var later = function() {
	 	 				timeout = null;
	 	 				if (!immediate) func.apply(context, args);
	 	 			};
	 	 			var callNow = immediate && !timeout;
	 	 			clearTimeout(timeout);
	 	 			timeout = setTimeout(later, wait);
	 	 			if (callNow) func.apply(context, args);
	 	 		};
	 	 	};

	 	 	// Window size.
	 	 	let win = {width: window.innerWidth, height: window.innerHeight};

	 	 	// some animation settings.
	 	 	const settings = {
	 	 		image: {duration: 900, delay: 0, easing: [0.8,0,0.2,1]},
	 	 		more: {duration: 900, delay: 0, easing: [0.8,0,0.2,1]},
	 	 		facts: {duration: 300, delay: 0, easing: [0.8,0,0.2,1]},
	 	 		title: {duration: 700, delay: 200, easing: [0.8,0,0.2,1]},
	 	 		description: {duration: 900, delay: 400, easing: 'easeOutExpo'},
	 	 		pagination: {duration: 300, delay: 400, easing: 'easeInOutQuad'},

	 	 		menuCtrl: {duration: 300, easing: [0.2,1,0.3,1]},
	 	 		menuItems: {duration: 300, easing: [0.2,1,0.3,1]},
	 	 		factsCtrl: {duration: 300, easing: 'linear'},
	 	 		gallery: {duration: 800, easing: [0.2,1,0.3,1]},
	 	 		navigationCtrls: {duration: 800, easing: [0.8,0,0.2,1]},
	 	 		previewCloseCtrl: {duration: 300, easing: 'easeOutExpo'},
	 	 		factsItems: {duration: 800, easing: [0.8,0,0.2,1]},
	 	 		expander: {duration: 800, easing: [0.8,0,0.2,1]}
	 	 	};

	 	 	class Entry {
	 	         constructor(el) {
	 	             this.DOM = {el: el};
	 	             this.init();
	 	         }
	 	         init() {
	 	 			// DOM elements:
	 	 			// title
	 	 			this.DOM.title = this.DOM.el.querySelector('.section__content > .section__title');
	 	 			charming(this.DOM.title);
	 	 			this.DOM.titleLetters = this.DOM.title.querySelectorAll('span');
	 	 			// description

	 	 			this.DOM.description = this.DOM.el.querySelector('.section__content > .section__description');
	 	 			// image
	 	 			this.DOM.image = this.DOM.el.querySelector('.section__img > .section__img-inner');

	 	 			// more box
	 	 			this.DOM.more = this.DOM.el.querySelector('.section__more > .section__more-inner');
	 	 			// expander

	 	 			// facts
	 	 			this.DOM.facts = {
	 	 				wrapper: this.DOM.el.querySelector('.section__facts'),
	 	 				items: Array.from(this.DOM.el.querySelectorAll('.section__facts > .section__facts-item'))
	 	 			};
	 	 		}
	 	 		show(direction) {
	 	 			this.isHidden = false;
	 	 			return this.toggle(direction);
	 	 		}
	 	 		hide(direction) {
	 	 			this.isHidden = true;
	 	 			return this.toggle(direction);
	 	 		}
	 	 		toggle(direction) {
	 	 			this.direction = direction;
	 	 			return Promise.all([this.toggleTitle(!this.isHidden),
	 	 								this.toggleDescription(!this.isHidden),
	 	 								this.toggleImage(!this.isHidden),
	 	 								this.toggleMore(!this.isHidden),
	 	 								this.toggleFacts(!this.isHidden)]);
	 	 		}
	 	 		toggleTitle() {
	 	 			anime.remove(this.DOM.titleLetters);
	 	 			return anime({
	 	 				targets: this.DOM.titleLetters,
	 	 				duration: settings.title.duration,
	 	 				delay: (target, index) => index * 30 + settings.title.delay,
	 	 				easing: settings.title.easing,
	 	 				translateY: this.isHidden ? [0,this.direction === 'next' ? '-100%' : '100%'] : [this.direction === 'next' ? '100%' : '-100%', 0],
	 	 				opacity: {
	 	 					value: this.isHidden ? 0 : 1,
	 	 					duration: 1,
	 	 					delay: (target, index) => this.isHidden ? settings.title.duration + settings.title.delay : settings.title.delay
	 	 				}
	 	 			}).finished;
	 	 		}
	 	 		toggleDescription() {
	 	 			anime.remove(this.DOM.description);
	 	 			return anime({
	 	 				targets: this.DOM.description,
	 	 				duration: settings.description.duration,
	 	 				delay: !this.isHidden ? settings.description.duration * 0.5 + settings.description.delay : settings.description.delay,
	 	 				easing: settings.description.easing,
	 	 				translateY: this.isHidden ? [0, this.direction === 'next' ? '-10%' : '10%'] : [this.direction === 'next' ? '20%' : '-20%', 0],
	 	 				opacity: this.isHidden ? 0 : 1
	 	 			}).finished;
	 	 		}
	 	 		toggleImage() {
	 	 			this.DOM.image.style.transformOrigin = !this.isHidden ? `50% ${this.direction === 'next' ? 0 : 100}%` : `50% 50%`;

	 	 			anime.remove(this.DOM.image);
	 	 			return anime({
	 	 				targets: this.DOM.image,
	 	 				duration: settings.image.duration,
	 	 				delay: settings.image.delay,
	 	 				easing: settings.image.easing,
	 	 				translateY: this.isHidden ? ['0%',this.direction === 'next' ? '-100%' : '100%'] : [this.direction === 'next' ? '100%' : '-100%','0%'],
	 	 				scale: !this.isHidden ? [1.8,1] : 1,
	 	 				opacity: {
	 	 					value: this.isHidden ? 0 : 1,
	 	 					duration: 1,
	 	 					delay: this.isHidden ? settings.image.duration + settings.image.delay : settings.image.delay
	 	 				}
	 	 			}).finished;
	 	 		}
	 	 		toggleMore() {
	 	 			anime.remove(this.DOM.more);
	 	 			return anime({
	 	 				targets: [this.DOM.more, this.DOM.more.children],
	 	 				duration: settings.more.duration,
	 	 				delay: settings.more.delay,
	 	 				easing: settings.more.easing,
	 	 				translateY: this.isHidden ? ['0%',this.direction === 'next' ? '-100%' : '100%'] : [this.direction === 'next' ? '100%' : '-100%','0%'],
	 	 				opacity: {
	 	 					value: this.isHidden ? 0 : 1,
	 	 					duration: (target, index) => index ? settings.more.duration/3 : 1,
	 	 					delay: (target, index) => index ?
	 	 												this.isHidden ? 100 : settings.more.duration * 0.5 + settings.more.delay :
	 	 												this.isHidden ? settings.more.duration + settings.more.delay : settings.more.delay
	 	 				}
	 	 			}).finished;
	 	 		}
	 	 		toggleFacts() {
	 	 			anime.remove(this.DOM.facts.items);
	 	 			return anime({
	 	 				targets: this.DOM.facts.items.slice(0, 2),
	 	 				duration: settings.facts.duration,
	 	 				delay: (target, index) => {
	 	 					return !this.isHidden ? index * 40 + settings.facts.duration * 0.5 + settings.facts.delay : index * 40 + settings.facts.delay;
	 	 				},
	 	 				easing: settings.facts.easing,
	 	 				translateY: this.isHidden ? [this.DOM.facts.ty, this.direction === 'next' ? this.DOM.facts.ty-20 : this.DOM.facts.ty+20] : [this.direction === 'next' ? this.DOM.facts.ty+20 : this.DOM.facts.ty-20, this.DOM.facts.ty],
	 	 				opacity: this.isHidden ? 0 : 1
	 	 			}).finished;
	 	 		}
	 	     };

	 	     class Slideshow {
	 	         constructor(el) {
	 	             this.DOM = {};
	 	             this.DOM.el = el;
	 	             this.init();
	 	         }
	 	         init() {
	 	 			// DOM elements.
	 	 			this.DOM.menuCtrl = this.DOM.el.querySelector('.sections__header > button.button-menu');
	 	 			this.DOM.menu = {
	 	 				wrapper: this.DOM.el.querySelector('.menu'),
	 	 				items: Array.from(this.DOM.el.querySelectorAll('.menu > .menu__inner > .menu__item')),
	 	 				menuCtrls: {
	 	 					toggle: this.DOM.el.querySelector('.menu > .menu__toggle'),
	 	 					open: this.DOM.el.querySelector('.menu > .menu__toggle > .menu__toggle-inner--open'),
	 	 					close: this.DOM.el.querySelector('.menu > .menu__toggle > .menu__toggle-inner--close')
	 	 				}
	 	 			};
	 	 			this.DOM.factsContainer = this.DOM.el.querySelector('.facts');
	 	 			this.DOM.factsCtrls = {
	 	 				toggle: this.DOM.factsContainer.querySelector('.facts__toggle'),
	 	 				more: this.DOM.factsContainer.querySelector('.facts__toggle > .facts__toggle-inner--more'),
	 	 				less: this.DOM.factsContainer.querySelector('.facts__toggle > .facts__toggle-inner--less'),
	 	 			};
	 	 			this.DOM.previewCloseCtrl = this.DOM.factsContainer.querySelector('.button-contentclose');
	 	 			this.DOM.pagination = this.DOM.el.querySelector('.sections__index .sections__index-inner');
	 	 			this.DOM.navigation = this.DOM.el.querySelector('.sections__nav');
	 	 			this.DOM.navigation.prevCtrl = this.DOM.navigation.querySelector('button.sections__nav-item--prev');
	 	 			this.DOM.navigation.nextCtrl = this.DOM.navigation.querySelector('button.sections__nav-item--next');
	 	 			this.DOM.entries = Array.from(this.DOM.el.querySelectorAll('.section'), entry => new Entry(entry));
	 	 			this.entriesTotal = this.DOM.entries.length;
	 	 			this.currentPos = 0;

	 	 			this.layout();
	 	 			// Init/Bind events.
	 	 			this.initEvents();
	 	 		}
	 	 		layout() {
	 	 			this.currentEntry = this.DOM.entries[this.currentPos];
	 	 			const factEl = this.currentEntry.DOM.facts.items[0];
	 	 			const factHeight = factEl.getBoundingClientRect().height + parseFloat(window.getComputedStyle(factEl).marginBottom);
	 	 			const paddingFactsStyle = window.getComputedStyle(this.currentEntry.DOM.facts.wrapper);
	 	 			const paddingFacts = parseFloat(paddingFactsStyle.paddingTop) + parseFloat(paddingFactsStyle.paddingBottom);


	 	 		}
	 	 		initEvents() {
	 	 			// Navigation
	 	 			this.onPrevClick = () => this.navigate('prev');
	 	 			this.onNextClick = () => this.navigate('next');
	 	 			this.DOM.navigation.prevCtrl.addEventListener('click', this.onPrevClick);
	 	 			this.DOM.navigation.nextCtrl.addEventListener('click', this.onNextClick);

	 	 			// Main menu
	 	 			this.DOM.menu.menuCtrls.toggle.addEventListener('click', () => this.toggleMenu());

	 	 			// Facts Container
	 	 			this.DOM.factsCtrls.toggle.addEventListener('click', () => this.toggleFactsContainer());

	 	 			// Facts (clickable facts)
	 	 			for ( let i = 0; i <= this.entriesTotal - 1; ++i ) {
	 	 				const entry = this.DOM.entries[i];
	 	 				entry.DOM.facts.items
	 	 					 .filter(fact => fact.classList.contains('section__facts-item--clickable'))
	 	 					 .forEach(clickableFact => clickableFact.addEventListener('click', () => this.preview(clickableFact.dataset.gallery)));
	 	 			}

	 	 			// Close preview
	 	 			this.DOM.previewCloseCtrl.addEventListener('click', () => this.closePreview());

	 	 			// Window resize
	 	 			this.onResize = () => {
	 	 				win = {width: window.innerWidth, height: window.innerHeight};
	 	 				this.layout();
	 	 				if ( this.isFactsOpen ) {
	 	 					// Toggle the factsCtrls state
	 	 					this.DOM.factsCtrls.more.style.opacity = 1;
	 	 					this.DOM.factsCtrls.less.style.opacity = 0;
	 	 					this.isFactsOpen = !this.isFactsOpen;
	 	 					this.toggleNavigationCtrls({opacity: 1, duration: 1});
	 	 					this.isFactsAnimating = false;
	 	 				}
	 	 				if ( this.gallery ) {
	 	 					this.DOM.previewCloseCtrl.style.opacity = 0;
	 	 					this.toggleGallery(this.gallery, {duration: 1,opacity: 0}).then(() => this.gallery = null);
	 	 				}
	 	 				this.DOM.el.classList.remove('sections--factsopen');
	 	 			};
	 	 			window.addEventListener('resize', debounce(() => this.onResize(), 20));
	 	 		}
	 	 		navigate(direction) {
	 	 			if ( this.isEntriesAnimating || this.isFactsAnimating ) return;
	 	 			this.isEntriesAnimating = true;
	 	 			// Store direction
	 	 			this.direction = direction;
	 	 			// Update currentPos
	 	 			const newPos = this.currentPos = this.direction === 'next' ?
	 	 				this.currentPos < this.entriesTotal - 1 ? this.currentPos + 1 : 0 :
	 	 				this.currentPos = this.currentPos > 0 ? this.currentPos - 1 : this.entriesTotal - 1;

	 	 			const newEntry = this.DOM.entries[newPos];

	 	 			this.update(newEntry);
	 	 		}
	 	 		update(newEntry) {
	 	 			const updateFn = () => {
	 	 				// hide the current entry and show the next/previous one.
	 	 				// when both updatePageNumber, hide and show are finished:
	 	 				Promise.all([this.currentEntry.hide(this.direction), newEntry.show(this.direction), this.updatePageNumber()]).then(() => {
	 	 					this.isEntriesAnimating = false;
	 	 					this.currentEntry.DOM.el.classList.remove('section--current');
	 	 					newEntry.DOM.el.classList.add('section--current');
	 	 					this.currentEntry = newEntry;
	 	 				});
	 	 			};

	 	 			if ( this.isFactsOpen ) {
	 	 				this.toggleFactsContainer().then(updateFn);
	 	 			}
	 	 			else {
	 	 				updateFn();
	 	 			}
	 	 		}
	 	 		updatePageNumber() {
	 	 			anime.remove(this.DOM.pagination);
	 	 			let halfway = false;
	 	 			return anime({
	 	 				targets: this.DOM.pagination,
	 	 				duration: settings.pagination.duration,
	 	 				easing: 'easeInOutQuad',
	 	 				translateY: [
	 	 					{value: this.direction === 'next' ? '-100%' : '100%', delay: settings.pagination.delay},
	 	 					{value: [this.direction === 'next' ? '100%' : '-100%','0%'], delay: settings.pagination.duration}
	 	 				],
	 	 				opacity: [
	 	 					{value: 0, delay: settings.pagination.delay},
	 	 					{value: [0,1], delay: settings.pagination.duration}
	 	 				],
	 	 				update: (anime) => {
	 	 					if ( anime.progress >= 50 && !halfway ) {
	 	 						halfway = true;
	 	 						this.DOM.pagination.innerHTML = `0${this.currentPos + 1}`;
	 	 					}
	 	 				}
	 	 			}).finished;
	 	 		}
	 	 		toggleMenu() {
	 	 			if ( this.isMenuAnimating ) return;
	 	 			this.isMenuAnimating = true;

	 	 			const toggleMenuCtrlFn = () => {
	 	 				anime.remove([this.DOM.menu.menuCtrls.open, this.DOM.menu.menuCtrls.close]);
	 	 				return anime({
	 	 					targets: [this.DOM.menu.menuCtrls.open, this.DOM.menu.menuCtrls.close],
	 	 					duration: settings.menuCtrl.duration,
	 	 					easing: settings.menuCtrl.easing,
	 	 					opacity: (target, index) => index ? !this.isMenuOpen ? 1 : 0 : !this.isMenuOpen ? 0 : 1,
	 	 					translateX: (target, index) => index ? !this.isMenuOpen ? ['50%', '0%'] : '50%' : !this.isMenuOpen ? ['0%', '-50%'] : '0%'
	 	 				}).finished;
	 	 			};

	 	 			const toggleMenuItemsFn = () => {
	 	 				anime.remove(this.DOM.menu.items);
	 	 				return anime({
	 	 					targets: this.DOM.menu.items,
	 	 					duration: settings.menuItems.duration,
	 	 					easing: settings.menuItems.easing,
	 	 					delay: (target, index) => !this.isMenuOpen ? index * 80 : 0,
	 	 					translateX: !this.isMenuOpen ? ['5%', '0%'] : '0%',
	 	 					opacity: {
	 	 						value: !this.isMenuOpen ? [0,1] : 0,
	 	 						easing: 'linear',
	 	 						delay: (target, index, total) => !this.isMenuOpen ? index * 80 : 0
	 	 					}
	 	 				}).finished;
	 	 			};

	 	 			this.DOM.menu.wrapper.classList.toggle('menu--open');

	 	 			Promise.all([toggleMenuCtrlFn(), toggleMenuItemsFn()]).then(() => {
	 	 				this.isMenuOpen = !this.isMenuOpen
	 	 				this.isMenuAnimating = false;
	 	 			});
	 	 		}
	 	 		toggleFactsContainer() {
	 	 			if ( this.isFactsAnimating ) {
	 	 				return;
	 	 			};
	 	 			this.isFactsAnimating = true;
	 	 			return Promise.all([this.toggleFactsCtrl(), this.animateExpander(), this.animateFactsItems()]).then(() => {
	 	 				this.isFactsOpen = !this.isFactsOpen;
	 	 				this.isFactsAnimating = false;
	 	 			});
	 	 		}
	 	 		preview(gallery) {
	 	 			if ( this.isFactsAnimating || !gallery ) return;
	 	 			this.isFactsAnimating = true;

	 	 			this.gallery = gallery;
	 	 			this.DOM.el.classList.add('sections--factsopen');
	 	 			Promise.all([
	 	 				this.toggleNavigationCtrls({
	 	 					opacity: 0
	 	 				}),
	 	 				this.toggleFactsCtrl({
	 	 					delay: 0,
	 	 					opacity: 0
	 	 				}),
	 	 				this.animateExpander({
	 	 					translateY: 0,
	 	 					scaleX: 1.05
	 	 				}),
	 	 				this.animateFactsItems({
	 	 					translateY: 0,
	 	 					opacity: 0,
	 	 					delay: 0
	 	 				}),
	 	 				this.togglePreviewCloseCtrl({
	 	 					opacity: 1,
	 	 					delay: 800
	 	 				}),
	 	 				this.toggleGallery(gallery, {
	 	 					opacity: 1,
	 	 					scale: (target, index) => index ? [0.7,1] : [1,1], // just the images..
	 	 					delay: (target, index) => index ? index * 100 + 700 : 700 // just the images..
	 	 				})
	 	 			]).then(() => this.isFactsAnimating = false);
	 	 		}
	 	 		closePreview() {
	 	 			if ( this.isFactsAnimating ) return;
	 	 			this.isFactsAnimating = true;

	 	 			Promise.all([
	 	 				this.toggleNavigationCtrls({
	 	 					opacity: 1
	 	 				}),
	 	 				this.toggleFactsCtrl({
	 	 					delay: 600,
	 	 					opacity: (target, index) => index,
	 	 				}),
	 	 				this.animateExpander({
	 	 					translateY: 0,
	 	 					scaleX: 0.54
	 	 				}),
	 	 				this.animateFactsItems({
	 	 					translateY: 0,
	 	 					opacity: 1,
	 	 					delay: 200
	 	 				}),
	 	 				this.togglePreviewCloseCtrl({
	 	 					opacity: 0
	 	 				}),
	 	 				this.toggleGallery(this.gallery, {
	 	 					opacity: 0
	 	 				})
	 	 			]).then(() => {
	 	 				this.isFactsAnimating = false;
	 	 				this.gallery = null;
	 	 				this.DOM.el.classList.remove('sections--factsopen');
	 	 			});
	 	 		}
	 	 		animateExpander(animeconfig) {
	 	 			return this.animate(Object.assign({
	 	 				targets: this.currentEntry.DOM.expander,
	 	 				duration: settings.expander.duration,
	 	 				easing: settings.expander.easing,
	 	 				delay: !this.isFactsOpen ? 0 : 300,
	 	 				translateY: !this.isFactsOpen ? [this.factsTranslation, 0] : this.factsTranslation,
	 	 				scaleX: [0.54,0.54]
	 	 			}, animeconfig));
	 	 		}
	 	 		animateFactsItems(animeconfig) {
	 	 			return this.animate(Object.assign({
	 	 				targets: this.currentEntry.DOM.facts.items,
	 	 				duration: settings.factsItems.duration,
	 	 				easing: settings.factsItems.easing,
	 	 				delay: (target, index, total) => !this.isFactsOpen ? (index+1) * 30 + 150 : (total-index-1) * 30,
	 	 				translateY: !this.isFactsOpen ? [this.factsTranslation,0] : this.factsTranslation,
	 	 				opacity: (target, index) => !this.isFactsOpen ? 1 : index > 1 ? 0 : 1
	 	 			}, animeconfig));
	 	 		}
	 	 		toggleFactsCtrl(animeconfig) {
	 	 			return this.animate(Object.assign({
	 	 				targets: [this.DOM.factsCtrls.more, this.DOM.factsCtrls.less],
	 	 				duration: settings.factsCtrl.duration,
	 	 				easing: settings.factsCtrl.easing,
	 	 				opacity: (target, index) => index ? !this.isFactsOpen ? 1 : 0 : !this.isFactsOpen ? 0 : 1
	 	 			}, animeconfig));
	 	 		}
	 	 		togglePreviewCloseCtrl(animeconfig) {
	 	 			return this.animate(Object.assign({
	 	 				targets: this.DOM.previewCloseCtrl,
	 	 				duration: settings.previewCloseCtrl.duration,
	 	 				easing: settings.previewCloseCtrl.easing
	 	 			}, animeconfig));
	 	 		}
	 	 		toggleNavigationCtrls(animeconfig) {
	 	 			return this.animate(Object.assign({
	 	 				targets: [this.DOM.navigation.prevCtrl, this.DOM.navigation.nextCtrl],
	 	 				duration: settings.navigationCtrls.duration,
	 	 				easing: settings.navigationCtrls.easing
	 	 			}, animeconfig));
	 	 		}
	 	 		toggleGallery(gallery, animeconfig) {
	 	 			return this.animate(Object.assign({
	 	 				targets: this.DOM.el.querySelectorAll(`#${gallery} > .section__gallery-item`),
	 	 				duration: settings.gallery.duration,
	 	 				easing: settings.gallery.easing
	 	 			}, animeconfig));
	 	 		}
	 	 		animate(opts) {
	 	 			anime.remove(opts.targets);
	 	 			return anime(opts).finished;
	 	 		}
	 	 	};




			var loader = new TimelineLite();

	 		loader

			.from($('.section__img'), 1.5, { autoAlpha: 0, ease:Power0.easeNone}, '2.5')
			.from($('.section__title'), 0.5, { x:-20, autoAlpha: 0, ease:Power2.easeIn}, '1.5')
			.to($('.project'), 0.3, {  autoAlpha: 5, ease:Power0.easeNone}, '1.5')








	 	 	// Preload all the images in the page..
	 	 	imagesLoaded(document.querySelectorAll('img'), () => {
	 	 		document.body.classList.remove('loading');
	 	 		// Init
	 	 		new Slideshow(document.querySelector('.sections'));
	 	 	});
	 	 };


}
}

</script>

<style>

@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";


.section__img-inner {
	animation-delay: 1.5s;
}



.pause-animation {
	animation-play-state: paused;
}

</style>
