<template>
  <div id="manners is-loaded">

		<!-- the router outlet, where all matched components would ber viewed -->
		<nav class="back-nav">
	  <div class="back">
			<router-link v-bind:to="'/'" style="font-size:15px ; color:#fff">Back</router-link>
		</div>
	</nav>
		<section class="section-project">
		<div class="section__bg">WEBSITE</div>
		<div class="section__project">
			<h2 class="section__title_project">Manners</h2>
			<div class="stripes-horizontal_project"></div>
		</div>
		<div class="section__info_launch">
			<a class="section__description_work" href="http://blog.bemanners.com" target=_blank>LAUNCH WEBSITE
				<span class="section__description-inner"></span></a>
			</div>
		<div class="section__info_work">
			<p class="section__description_work">Work
				<span class="section__description-inner">Website</span></p>
			</div>
			<div class="section__info_client">
				<p class="section__description_work">Client
					<span class="section__description-inner">Manners</span></p>
				</div>
				<div class="section__info_project">ABOUT THE<br>PROJECT
					</div>
					<div class="section__description_project">I worked at “ Manners “ for an internship at Summer 2017 , a very good startup wich propose temporary assignements in hospitals industry , restoration and event industry in Paris to freelancers in Paris , Lyon , Bordeaux.
I created a Blog for Manners with Wordpress wich talk about news about freelancers and for companies wich hire temporary freelancers for events.
						</div>
	</section>
	<section class="section-content-project-1">
		<div class="section__img-project">
				<img src="/static/manners-section-1.png">
			</div>
		</section>
		<section class="section-content-project-2">
			<div class="section__img-project">
				<img src="/static/manners-section-2.png">
			</div>
			</section>
				<section class="section-content-project-3">
					<div class="section__img-project">
						<video id="manners-vid" src="/static/manners-video.mp4" loop></video>
					</div>
				</section>
				<section class="section-content-project-4">
					<div class="section__img-project">
						<video id="manners-vid_2" src="/static/manners-video_3.mp4" loop></video>
					</div>
					</section>
				<section class="section-content-project-5">
					<div class="Next_project">
						<router-link v-bind:to="'/projects/euroservice'" style="font-size:70px ; color:#fff; margin-bottom:auto; margin-top:auto;">Next</router-link>
					</div>
					<div class="Info_project">Project
					<div class="Info_project_name">Euroservice</div>
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
													.setTween(".section-content-project-1", {x: "", y:"-10%", ease: Linear.easeNone})
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

											var manners_vid = document.getElementById('manners-vid');

											var controller = new ScrollMagic.Controller();

											// build scene
											var scene = new ScrollMagic.Scene({triggerElement: ".section-content-project-3"})
															.addTo(controller)
															.removeIndicators()

															.on("enter", function () {
																manners_vid.play();
															})
															.on("leave", function () {
																manners_vid.currentTime=0;
																manners_vid.pause();
															})

															var manners_vid_2 = document.getElementById('manners-vid_2');

															var controller = new ScrollMagic.Controller();

															// build scene
															var scene = new ScrollMagic.Scene({triggerElement: ".section-content-project-4"})
																			.addTo(controller)
																			.removeIndicators()

																			.on("enter", function () {
																				manners_vid_2.play();
																			})
																			.on("leave", function () {
																				manners_vid_2.currentTime=0;
																				manners_vid_2.pause();
																			})





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
