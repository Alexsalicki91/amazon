<template>
  <div id="app">
		<div class="Grid">
			<div class="Grid-cell u-size12 u-offset2">
				<div class="Stripes-container">
				</div>
			</div>

		</div>
		<div class = "horizontal">


			<nav class="nav-top">
			<!-- the router outlet, where all matched components would ber viewed -->
			<div class="project ">
				<router-link v-bind:to="'/'" style="padding:10px ; font-size:15px">+Projects</router-link>
			</div>
			<router-link v-bind:to="'/about'"style="padding:10px ; font-size:15px">About</router-link>
			</nav>
			<nav class="network">
				<a href="https://dribbble.com/AlexSalicki" target=_blank style="padding:10px ; font-size:15px ; color:#fff; margin-top:auto; margin-bottom:auto">Dribbble
				</a>
			<!-- the router outlet, where all matched components would ber viewed -->
			<a href="https://www.linkedin.com/in/alex-salicki-82120a141/" target=_blank style="padding:10px ; font-size:15px ; color:#fff; margin-top:auto; margin-bottom:auto">Linkedin
			</a>
			</nav>
			<nav class="logo">
			<!-- the router outlet, where all matched components would ber viewed -->
			<router-link v-bind:to="'/'" style="padding:10px ; font-size:17px ; color:#fff; margin-top:auto; margin-bottom:auto">Alex S.</router-link>
			</nav>
	</div>

  <transition name="router-anim">
    <router-view></router-view>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
 mounted() {



	 // number of loaded images for preloader progress
	 var loadedCount = 0; //current number of images loaded
	 var imagesToLoad = $('img').length; //number of slides with .bcg container
	 var loadingProgress = 0; //timeline progress - starts at 0

	 $('img').imagesLoaded({
	 		background: true
	 }).progress( function( instance, image ) {
	 		loadProgress();
	 });

	 function loadProgress(imgLoad, image)
	 {
	 		//one more image has been loaded
	 		loadedCount++;

	 		loadingProgress = (loadedCount/imagesToLoad);

	 		// GSAP tween of our progress bar timeline
	 		TweenLite.to(progressTl, 0.7, {progress:loadingProgress, ease:Linear.easeNone});

	 }


	 //progress timeline
	 var progressTl = new TimelineMax({
	 		paused: true,
	 		onUpdate: progressUpdate,
	 		onComplete: loadComplete
	 });

	 progressTl
	 		//tween the progress bar width
	 		.to($('.progress span'), 1, {width:600, ease:Linear.easeNone});

	 //as the progress bar width updates and grows we put the percentage loaded in the screen
	 function progressUpdate()
	 {
	 		//the percentage loaded based on the tween's progress
	 		loadingProgress = Math.round(progressTl.progress() * 100);

	 		//we put the percentage in the screen
	 		$(".txt-perc").text(loadingProgress + '');

	 }


	 function loadComplete() {

	 		// preloader out
	 		var preloaderOutTl = new TimelineMax();

	 		preloaderOutTl
	 				.to($('.progress'), 0.5, { y: 20, autoAlpha: 0, ease:Power0.easeNone})
	 				.to($('.txt-perc'), 0.5, { y:20, autoAlpha: 0, ease:Power0.easeNone}, 0.1)
	 				.set($('body'), {className: '-=is-loading'})
	 				.set($('#hello'), {className: '+=is-loaded'})
					.set($('#manners'), {className: '+=is-loaded'})
					.set($('#about'), {className: '+=is-loaded'})
	 				.to($('#preloader'), 0.7, {yPercent: 100, ease:Power0.easeNone})
	 				.set($('#preloader'), {className: '+=is-hidden'})
					.from($('.nav-top'), 0.5, { autoAlpha: 0, ease:Power0.easeNone}, '1')
					.from($('.network'), 0.5, { autoAlpha: 0, ease:Power0.easeNone}, '1')
					.from($('.logo'), 0.5, { autoAlpha: 0, ease:Power0.easeNone}, '1')


	 		return preloaderOutTl;
	 }


}
}

</script>


<!-- styling for the component -->
<style>

@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";


.router-anim-enter-active {
	animation: coming 1s;
  animation-delay: .5s;
	opacity: 0;
}

.router-anim-leave-active {
	animation: going 1s;

}

@keyframes going {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateY(0);
		opacity:0;
	}
}

@keyframes coming {
	from {
		transform: translateY(0);
		opacity: 0;
	}
	to {
		transform: translateX(0px);
		opacity: 1;
	}
}




</style>
