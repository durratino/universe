<script>
import CloudinaryImage from './CloudinaryImage.vue';

export default {
	props: {
		image: {
			type: String,
			// required: true
		},
	},

	components: {
		CloudinaryImage
	},

	data() {
		return {
			imageWidth: window.innerWidth > 1023 ? Math.round(window.innerWidth / 2) : window.innerWidth,
			imageHeight: window.innerWidth > 1023 ? window.innerHeight : Math.round(window.innerHeight * 0.6)
		}
	},

	mounted() {
		this.moveBannertoTop();
	},

	methods: {
		moveBannertoTop() {
			const headerHeight = document.querySelector('header').clientHeight;
			const mainPaddingTop = parseFloat(getComputedStyle(document.querySelector('main')).getPropertyValue('padding-top'));
			this.$el.style.setProperty('--margin', `${- headerHeight - mainPaddingTop}px`);
		}
	},
}
</script>

<template>
	<section class="banner">
		<div class="banner-media">
			<CloudinaryImage image="universe/banner_nbtczh" :width="imageWidth" :height="imageHeight"></CloudinaryImage>
		</div>
		<div class="banner-text">
			<slot></slot>
		</div>
	</section>
</template>

<style lang="scss">
.banner {
	display: flex;
	flex-direction: column;
	width: 100vw;
	margin-left: calc((100vw - 100%) / (-2));
	margin-top: var(--margin, 0);

	@media (min-width: 64rem) {
		height: 100vh;
		flex-direction: row;
		align-items: center;
	}

	&-media {
		flex: 0 0 50%;
		overflow: hidden;
		max-height: 60vh;

		@media (min-width: 64rem) {
			max-height: 100%;
		}


		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}

	&-text {
		padding: var(--base-padding) var(--base-padding) 0;

		@media (min-width: 64rem) {
			padding: var(--base-padding);
		}

		h1 {
			margin: 0 0 .6em;
			font-size: 3em;
		}

		h2 {
			margin: 1.5em 0;
			text-align: left;
			font-size: 1.5em;
		}
	}
}
</style>