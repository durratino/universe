<script>
export default {
	props: {
		image: {
			type: String,
			// required: true
		},
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

	computed: {
		imageSrc() {
			try {
				const url = new URL(`../assets/images/${this.image}.jpg`, import.meta.url).href;
				return url;
			} catch (error) {
				return '';
			}
		}
	}
}
</script>

<template>
	<section class="banner">
		<div class="banner-media">
			<img :src="imageSrc" />
		</div>
		<div class="banner-text">
			<slot></slot>
		</div>
	</section>
</template>

<style lang="scss" scoped>
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
		padding: var(--base-padding) calc(var(--base-padding) / 2);

		@media (min-width: 64rem) {
			padding: var(--base-padding);
		}
	}
}
</style>