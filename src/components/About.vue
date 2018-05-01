<template>
  <div id="about">
		<section class="section-2">

		<div class="section__about">
			<h2 class="section__title_project">Hey, I'm Alex Salicki</h2>
			<p class="section__description">I'm a French UI/UX Designer in Paris. Currently in the 2th year at IIM and I’m looking for a job of 2 months during summer 2018.
<br>I’m available for freelance work. If you want to say hello , to have to beer to talk about your project , contact me !
				<span class="section__description-inner"></span></p>
		</div>


		<div class ="section__contact">
			<h1 class="section__title_contact">Personal Contact :</h1>
			<p class="section__description_contact">salicki.alex@gmail.com<br>+33632913360
				<span class="section__description-inner"></span></p>
		</div>


		<div class="section__info">
			<p class="section__description_info">Coded and Designed by Alex Salicki
				<span class="section__description-inner"></span></p>
		</div>
		<div class="section__about_me">
			<p class="section__description_about_me">About me
				<span class="section__description-inner"></span></p>
		</div>
		<div class="loader-img">
			<img src=""/>
		</div>
		<div class="letter-a">A</div>
		<div class="letter-b">B</div>
		<div class="letter-o">O</div>
		<div class="letter-u">U</div>
		<div class="letter-t">T</div>
	</section>
  </div>
</template>

<script>
export default {
  name: 'about',
	mounted() {

		var about = new TimelineLite();

		about

		.from($('.letter-a'), 0.5, { autoAlpha: 0, ease:Power0.easeNone}, '2.5')
		.from($('.section__contact'), 0.5, { marginLeft:30, autoAlpha: 0, ease:Power0.easeNone}, '2')
		.from($('.section__description_about_me'), 0.5, { marginLeft:30, autoAlpha: 0, ease:Power0.easeNone}, '2')
		.from($('.section__title_project'), 0.5, { x:-30, autoAlpha: 0, ease:Power0.easeNone}, '1.5')
		.from($('.section__description'), 0.8, {  autoAlpha: 0, ease:Power2.easeIn}, '1.7')
		.from($('.letter-b'), 0.5, { autoAlpha: 0, ease:Power0.easeNone}, '3')
		.from($('.letter-o'), 0.5, { autoAlpha: 0, ease:Power0.easeNone}, '3.5')
		.from($('.letter-u'), 0.5, { autoAlpha: 0, ease:Power0.easeNone}, '4')
		.from($('.letter-t'), 0.5, { autoAlpha: 0, ease:Power0.easeNone}, '4.5')
		.to($('.project'), 0.3, {  autoAlpha: 5, ease:Power0.easeNone}, '1.5')



	}

}
</script>
<!-- styling for the component -->
<style>

@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";


.section__about {
	animation-delay: 1.5s;
}

.pause-animation {
	animation-play-state: paused;
}

</style>
