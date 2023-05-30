<script>
export default {
	props: {
		image: {
			type: String
		},
		author: {
			type: String
		}
	},
	computed: {
		imageSrc() {
			try {
				const url = new URL(`../assets/images/${this.image}.jpg`, import.meta.url).href;
				return url;
			} catch (error) {
				console.error(error)
				return '';
			}
		}
	}
}
</script>

<template>
	<article class="reason">

		<img :src="imageSrc" loading="lazy">
		<div class="reason-description">
			<slot></slot>
			<blockquote>
				<slot name="quote">

				</slot>
			</blockquote>
			<p v-if="author" class="reason-author">{{ author }}</p>
		</div>

	</article>
</template>

<style lang="scss" scoped>
.reason {
	display: flex;
	flex-direction: column;
	gap: calc(var(--base-padding) / 2);


	@media (min-width: 64rem) {
		gap: calc(var(--base-padding));
	}

	&:nth-child(2) {
		@media (min-width: 48rem) {
			margin-bottom: -300px;
			transform: translateY(20%);
		}
	}

	blockquote {
		position: relative;
		z-index: 1;
		font-style: italic;

		&::before {
			content: '„';
			position: absolute;
			left: -50px;
			bottom: -30px;
			z-index: -1;
			font-family: 'El Messiri', sans-serif;
			font-size: 10em;
			font-style: normal;
			color: rgba(var(--color-accent-rgb), .7);
		}
	}

	&-author {
		margin: 0 1em 0 0;
		text-align: right;
		color: var(--color-powder-blue);
		font-size: .8em;
	}

	img {
		overflow: hidden;
		border-radius: calc(var(--base-padding) / 2);
	}
}
</style>