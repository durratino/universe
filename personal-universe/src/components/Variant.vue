<script>
export default {
	props: {
		name: {
			type: String,
			required: true
		},
		duration: {
			type: String
		},
		image: {
			type: String
		},
		price: {
			type: String
		},
		priceFull: {
			type: String
		}
	},
}
</script>

<template>
	<article class="variant">
		<!-- <header>
			<img v-if="image" src="imageSrc" alt="">
		</header> -->
		<header>
			<img v-if="image" src="imageSrc" alt="">
			<h3>
				{{ name }}
			</h3>
			<h4>
				длительность: {{ duration }}
			</h4>
		</header>
		<div class="variant-text">
			
			<slot>

			</slot>
		</div>
		<div class="variant-price variant-price--full">{{ priceFull }}</div>
		<div class="variant-price variant-price--new">{{ price }}</div>
	</article>
</template>

<style lang="scss" scoped>
.variant {
	display: flex;
	flex-direction: column;
	padding: calc(var(--base-padding) / 2);
	border: 2px solid var(--color-accent);
	border-radius: calc(var(--base-padding) / 2);

	@media (min-width: 64rem) {
		padding: var(--base-padding);
		border-radius: var(--base-padding);
	}

	header {
		padding: 0;
		margin-bottom: 2rem;
		text-align: center;
	}

	h3 {
		margin: 0;
		text-align: center;
		font-size: 2em;
		color: var(--color-accent);
	}

	h4 {
		margin-top: .5rem;
		font-family: 'El Messiri', serif;
		font-weight: normal;
	}

	&-text {

	}

	

	&-price {
		padding: var(--base-padding) calc(var(--base-padding) / 2) 0;
		text-align: center;
		font-size: 1.5em;

		&--new {
			padding-top: 0;
			color: var(--color-accent-bright);
		}
	}

	&-price--full {
		margin-top: auto;
		text-decoration: line-through;
		font-size: 1em;
	}
}
</style>