<template>
  <div id="euroservice is-loaded">

		<!-- the router outlet, where all matched components would ber viewed -->
		<nav class="back-nav">
	  <div class="back">
			<router-link v-bind:to="'/'" style="font-size:15px ; color:#fff">Back</router-link>
		</div>
	</nav>
		<section class="section-project">
		<div class="section__bg">WEBSITE</div>
		<div class="section__project">
			<h2 class="section__title_project">Euroservice</h2>
			<div class="stripes-horizontal_project"></div>
		</div>
		<div class="section__info_launch">
			<a class="section__description_work" href="http://www.dev2.alexandre-rignault.fr" target=_blank>LAUNCH WEBSITE
				<span class="section__description-inner"></span></a>
			</div>
		<div class="section__info_work">
			<p class="section__description_work">Work
				<span class="section__description-inner">Website</span></p>
			</div>
			<div class="section__info_client">
				<p class="section__description_work">Client
					<span class="section__description-inner">Euroservice</span></p>
				</div>
				<div class="section__info_project">ABOUT THE<br>PROJECT
					</div>
					<div class="section__description_project">I created a website with Wordpress for “ Euroservice “ . This is a society wich build beautiful houses in Paris and propose repairing service too.
This Website is an landing page and  show the society and his services.
						</div>
	</section>
	<section class="section-content-project-1">
		<div class="section__img-project">
				<img src="/static/euroservice-section-1.jpg">
			</div>
		</section>
		<section class="section-content-project-2">
			<div class="section__img-project">
				<img src="/static/euroservice-section-2.jpg">
			</div>
			</section>
				<section class="section-content-project-3">
					<div class="section__img-project">
						<img src="/static/euroservice-section-3.jpg">
					</div>
				</section>
				<section class="section-content-project-4">
					<div class="section__img-project">
						<img src="/static/euroservice-section-5.jpg">
					</div>
					</section>
				<section class="section-content-project-5">
					<div class="Next_project">
						<router-link v-bind:to="'/projects/tabloo'" style="font-size:70px ; color:#fff; margin-bottom:auto; margin-top:auto;">Next</router-link>
					</div>
					<div class="Info_project">Project
					<div class="Info_project_name">Tabloo</div>
					</div>
				</section>
  </div>
</template>

<script>
export default {
  name: 'manners',
	mounted() {



		// init controller
		(function () { // wait for document ready
			// init
			var controller = new ScrollMagic.Controller();

			// get all slides
			var slides = document.querySelectorAll(".section-content-project");

			// create scene for every slide
			for (var i=0; i<slides.length; i++) {
				new ScrollMagic.Scene({
						triggerElement: slides[i]
					})
					.setPin(slides[i])
					.removeIndicators()
					.addTo(controller);
			}
		});

		// init controller
		var controller = new ScrollMagic.Controller();

		// build scene


							new ScrollMagic.Scene({triggerElement: ".section-content-project-1"})
										.setTween(".section-project", {x: "", y:"-25%", ease: Linear.easeNone})
										.removeIndicators()
										.addTo(controller);

										new ScrollMagic.Scene({triggerElement: ".section-content-project-2"})
													.setTween(".section-content-project-1", {x: "", y:"-25%", ease: Linear.easeNone})
													.removeIndicators()
													.addTo(controller);
													new ScrollMagic.Scene({triggerElement: ".section-content-project-1"})
																.setTween(".section__bg", {x: "-40%", y:"", ease: Linear.easeNone})
																.removeIndicators()
																.addTo(controller);

									new ScrollMagic.Scene({triggerElement: ".section-content-project-3"})
										.setTween(".section-content-project-2", {x: "", y:"-25%", ease: Linear.easeNone})
										.removeIndicators()
										.addTo(controller);
										new ScrollMagic.Scene({triggerElement: ".section-content-project-4"})
											.setTween(".section-content-project-3", {x: "", y:"-25%", ease: Linear.easeNone})
											.removeIndicators()
											.addTo(controller);




											imagesLoaded(document.querySelectorAll('#app'), () => {
												document.body.classList.remove('loading');
												// Init

											});

			var manners = new TimelineLite();

			manners
			.from($('.section__info_launch'), 0.5, { x:-10, autoAlpha: 0, ease:Power0.easeNone}, '1.5')
			.from($('.section__info_work'), 0.5, { x:-10,  autoAlpha: 0, ease:Power0.easeNone}, '1.5')
			.from($('.section__info_client'), 0.5, {x:-10,  autoAlpha: 0, ease:Power0.easeNone}, '1.5')
			.from($('.section__info_project'), 0.5, { x:-10, autoAlpha: 0, ease:Power0.easeNone}, '1.5')
			.from($('.section__description_project'), 0.6, { x:-10, autoAlpha: 0, ease:Power0.easeNone}, '1.5')
			.from($('.section__bg'), 0.3, { x:-50, autoAlpha: 0, ease:Power0.easeNone}, '2.5')
			.to($('.project'), 0.3, {  autoAlpha: 0, ease:Power0.easeNone}, '1')
			.from($('.back'), 0.3, {  autoAlpha: 0, ease:Power0.easeNone}, '2')


	}





}

</script>
<!-- styling for the component -->
<style>

@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";



.section__project {
	animation-delay: 1s;
}

.pause-animation{
	animation-play-state: paused;
}



</style>
