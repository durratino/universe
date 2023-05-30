<script>
export default {
	props: {
		image: {
			type: String
		}
	},
	computed: {
		imageSrc() {
			try {
				const url = new URL(`../assets/images/${this.image}.png`, import.meta.url).href;
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
	<article class="client">

		<img :src="imageSrc" loading="lazy">
		<div class="client-description">
			<slot></slot>
		</div>

	</article>
</template>

<style lang="scss" scoped>
.client {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: calc(var(--base-padding) / 4);
	border: 2px solid rgba(var(--color-accent-rgb), .6);
	border-radius: calc(var(--base-padding) / 2);
	padding: calc(var(--base-padding) / 4);
	text-align: center;

	color: rgba(var(--color-text-rgb), .9);
	cursor: default;

	@media (min-width: 64rem) {
		font-size: .9em;
	}

	&:hover {
		border-color: rgba(var(--color-accent-rgb), 1);
		color: var(--color-text);

		img {
			opacity: 1;
			transform: scale(1.1);
		}
	}

	@media (min-width: 64rem) {
		padding: calc(var(--base-padding) / 2);
	}

	&:nth-child(1) {
		align-self: end;
		margin: 0 15%;

		@media (min-width: 64rem) {
			margin: 0 0 calc(var(--base-padding) / (-2));
		}
	}

	&:nth-child(2) {
		align-self: start;
		margin: 0 20% 0 0;

		@media (min-width: 64rem) {
			margin: 10% 0 0 0;
		}
	}

	&:nth-child(3) {
		align-self: start;
		margin: 0 0 0 10%;

		@media (min-width: 64rem) {
			margin: 0;
		}
	}

	&:nth-child(4) {
		align-self: end;
		margin: 0 10% 0 0;

		@media (min-width: 64rem) {
			margin: 0 0 calc(var(--base-padding) / (-4));
		}
	}

	&:nth-child(5) {
		align-self: end;
		margin-left: 5%;

		@media (min-width: 64rem) {
			grid-column: 1 / 3;
			margin-left: 30%;
		}
	}

	&:nth-child(6) {
		margin: 0 10%;

		@media (min-width: 64rem) {
			margin: 0 42% 0 0;
			grid-column: 3 / 5;
		}
	}

	img {
		max-width: 70px;
		aspect-ratio: 1;
		overflow: hidden;
		border-radius: calc(var(--base-padding) / 2);
		opacity: .7;
		transition: opacity .2s cubic-bezier(0.075, 0.82, 0.165, 1), transform .3s cubic-bezier(0.075, 0.82, 0.165, 1);

		@media (min-width: 64rem) {
			max-width: 100px;
		}
	}

	h4 {
		font-family: 'El Messiri', sans-serif;
		font-size: 1.3em;
		margin: .8rem 0 0;
	}

	p {
		margin: 0;
	}
}
</style>