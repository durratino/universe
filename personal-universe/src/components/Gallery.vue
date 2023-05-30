<script>
import CloudinaryImage from './CloudinaryImage.vue';


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
			default: "slider"
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
			const slides = this.$el.querySelectorAll(".gallery-stack-slide");
			slides.forEach(slide => {
				const img = slide.querySelector("img");
				img.addEventListener("load", () => {
					slide.style.setProperty("--slide-position", (window.innerHeight - slide.clientHeight) / 2 + "px");
				});
			});
		}
	},
	created() {
		this.addSrcs();
	},
	mounted() {
		this.setGalleryPosition();
	},
	components: { CloudinaryImage }
};


</script>

<template>
	<section class="gallery" :class="type === 'slider' ? 'gallery--slider' : 'gallery--stack'">
		<h2 v-if="heading">{{ heading }}</h2>

		<swiper-container v-if="type === 'slider'" init="false" :slides-per-view="1" :spaceBetween="30" :loop="true"
			:pagination="{
				clickable: true
			}" :navigation="true" :breakpoints="{
	768: {
		slidesPerView: 3,
	},
	1200: {
		slidesPerView: 4
	}
}">

			<swiper-slide v-for="image in images">
				<CloudinaryImage :image="image.image" :width="imageWidth" :height="imageHeight"></CloudinaryImage>
				<span v-if="image.urlText">{{ image.urlText }}</span>
			</swiper-slide>
		</swiper-container>

		<div v-if="type === 'stack'" class="gallery-stack">
			<div class="gallery-stack-slide" v-for="image in images">
				<img :src="image.src" alt="" loading="lazy">
				<span v-if="image.urlText">{{ image.urlText }}</span>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.gallery {
	&:last-child {
		margin-bottom: 10rem;
	}
}

swiper-container {
	width: 100vw;
	margin-left: calc((100vw - 100%) / (-2));
	padding-bottom: 10px;
	margin-top: var(--margin, 0);
}

h2 {
	max-width: 42rem;
	margin-top: 3em;
	line-height: 1;
	margin-left: auto;
	margin-right: auto;
	font-size: 2em;
	text-align: center;

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