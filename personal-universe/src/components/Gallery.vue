<script>

export default {
	props: {
		images: {
			type: Array,
			required: true
		},
		heading: {
			type: String,
		},
		type: {
			type: String,
			default: 'slider'
		}
	},
	methods: {
		addSrcs() {
			this.images.forEach(image => {
				image.src = this.imageSrc(image.image);
			});
		},
		imageSrc(name) {
			try {
				const url = new URL(`../assets/images/${name}.jpg`, import.meta.url).href
				return url;
			} catch (error) {
				return '';
			}
		},
		setGalleryPosition() {
			const slides = this.$el.querySelectorAll('.gallery-stack-slide');
			slides.forEach(slide => {
				const img = slide.querySelector('img');
				img.addEventListener('load', () => {
					slide.style.setProperty('--slide-position', (window.innerHeight - slide.clientHeight) / 2 + 'px');
				});
			})
		}
	},
	created() {
		this.addSrcs();
	},
	mounted() {
		this.setGalleryPosition();

		const swiperEls = document.querySelectorAll('swiper-container');

		swiperEls.forEach(swiperEl => {
			const params = {
				// array with CSS styles
				injectStyles: [
					`
      :root {
		--swiper-pagination-bottom: -3px;
		--swiper-pagination-color: #2AFC98;
		--swiper-pagination-bullet-inactive-color: #58A4B0;
		--swiper-navigation-color: #58A4B0;
	  }
      `,
				],
			};

			Object.assign(swiperEl, params);

			swiperEl.initialize();
		})



	}
}
</script>

<template>
	<section class="gallery" :class="type === 'slider'? 'gallery--slider' : 'gallery--stack'">
	<h3 v-if="heading">{{ heading }}</h3>

	<swiper-container v-if="type === 'slider'" init="false" :slides-per-view="1" :spaceBetween="30" :loop="true"
		:pagination="{
				clickable: true
			}" :navigation="true" :breakpoints="{
			768: {
				slidesPerView: 3,
			},
		}">

		<swiper-slide v-for="image in images">
			<!-- {{image}} -->
			<img :src="image.src" alt="">
			<span v-if="image.urlText">{{ image.urlText }}</span>
		</swiper-slide>
	</swiper-container>

	<div v-if="type === 'stack'" class="gallery-stack">
		<div class="gallery-stack-slide" v-for="image in images">
			<img :src="image.src" alt="">
			<span v-if="image.urlText">{{ image.urlText }}</span>
		</div>
	</div>
</section>
</template>

<style lang="scss" scoped>
.gallery {
	&:last-child {
		margin-bottom: 5rem;
	}
}

swiper-container {
	width: 100vw;
	padding-bottom: 10px;
	margin-left: calc((100vw - 100%) / (-2));
	margin-top: var(--margin, 0);
}

h3 {
	max-width: 42rem;
	margin-left: auto;
	margin-right: auto;
	font-size: 1.34em;

	.gallery--stack & {
		position: sticky;
		top: 30px;
	}
}

span {
	display: block;
	text-align: right;
	font-size: .7em;
	padding: .5rem 1rem;
	// font-style: italic;
}

.gallery-stack {
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 100px;

	&-slide {
		position: sticky;
		top: var(--slide-position, 100px);
		margin: auto;
		// box-shadow: 0 0 50px black;

		// img {
		// 	display: block;
		// 	// width: 500px;
			
		// }

		&:nth-child(6n + 2) {
			
				transform: rotate(3deg);
			
		}

		&:nth-child(6n + 3) {
			
				transform: rotate(-2deg);
			
		}

		&:nth-child(6n + 4) {
			
				transform: rotate(1.5deg);
			
		}

		&:nth-child(6n + 5) {
			
				transform: rotate(-4deg);
			
		}

		img {
			display: block;
			max-height: calc(100vh - 200px);
		}

		span {
			position: absolute;
			bottom: 10px;
			right: 10px;
		}
	}
}
</style>