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
			<CloudinaryImage :image="image" :width="imageWidth" :height="imageHeight"></CloudinaryImage>
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

	@media (min-width: 64rem) {
		height: 100vh;
		flex-direction: row;
		font-size: 1.35rem;
	}

	@media (min-width: 80rem) {
		font-size: 1.5rem;
	}

	&:first-child {
		margin-top: var(--margin, 0);
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: var(--base-padding);
		background: rgba(var(--color-accent-rgb), 0.15);

		:where(.is-text-left) & {
			@media (min-width: 64rem) {
				order: -1;
			}
		}

		&>h1 {
			margin: auto 0 0;
			font-size: 2.5em;

			@media (min-width: 80rem) {
				font-size: 3.5em;
			}

			&+h2 {
				margin: 0 0 0 .5em;
				font-size: .9em;
			}
		}

		h3 {
			margin: 1.5em 0;
			text-align: left;
			font-size: 1.2em;
		}

		:where(.buttons) {
			margin-block-start: auto;
			;
		}

		:where(li) {
			margin-block-start: .7em;
		}
	}
}
</style>