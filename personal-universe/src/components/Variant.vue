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
		exercises: {
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
		},
		priceMarathon: {
			type: String
		},
		priceEuro: {
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
			<!-- <img v-if="image" src="imageSrc" alt=""> -->
			<h3>
				{{ name }}
			</h3>
			<h4 class="variant-subtitle" v-if="duration">
				длительность: {{ duration }}

			</h4>
			<h4 class="variant-subtitle">{{ exercises }}</h4>
		</header>
		<div class="variant-text">

			<slot>

			</slot>
		</div>
		<div class="variant-price variant-price--full" v-if="priceFull">{{ priceFull }}</div>
		<div class="variant-prices">
			<div class="variant-price variant-price--new">{{ price }}</div>
			<span class="variant-priceWord">или</span>
		<div class="variant-price variant-price--new">{{ priceEuro }}<sup class="variant-priceTag">*</sup></div>
		</div>
		
	</article>
</template>

<style lang="scss" scoped>
.variant {
	flex: 1 1 100px;
	display: flex;
	flex-direction: column;
	padding: calc(var(--base-padding) / 2);
	border: 2px solid rgba(var(--color-accent-rgb), .5);
	border-radius: calc(var(--base-padding) / 2);

	@media (min-width: 64rem) {
		padding: var(--base-padding);
		border-radius: var(--base-padding);
	}

	&.is-highlighted {
		border-color: var(--color-accent);
	}

	header {
		padding: 0;
		margin-bottom: 1rem;
		padding-bottom: 1rem;
		text-align: center;

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			width: 100px;
			border: dotted var(--color-accent);
			border-width: 3px 0 0 0;
		}
	}

	h3 {
		margin: 0;
		text-align: center;
		font-size: 2em;
		color: var(--color-accent);
	}

	&-subtitle {
		margin: .5rem 0 0;
		font-family: 'El Messiri', serif;
		font-weight: normal;


		&+& {
			position: relative;
			font-size: .9em;
			margin-top: .1rem;
		}
	}

	&-prices {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: auto;
		padding-top: var(--base-padding);
	}

	&-price {
		padding: 0 calc(var(--base-padding) / 2);
		text-align: center;
		font-size: 1.5em;

		&--marathon {
			padding-top: 0;
			color: var(--color-accent-bright);
		}

		&--full {
			margin-top: auto;
			padding-top: var(--base-padding);
			text-decoration: line-through;
			font-size: 1em;
		}
	}

	&-priceWord {
		font-size: .7em;
	}

	&-priceTag {
		display: none;
		font-size: .7em;
		color: var(--color-text);

		.is-highlighted & {
			display: inline;
		}
	}
}
</style>