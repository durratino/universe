<script>
export default {
	props: {
		name: {
			type: String,
			required: true
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
	data() {
		return {
			questionId: 'q' + this.index
		}
	},
	computed: {
		
	},
	methods: {

	}
}
</script>

<template>
	<article class="variant">
		<!-- <header>
			<img v-if="image" src="imageSrc" alt="">
		</header> -->
		<div class="variant-text">
			<h3>
				{{ name }}
			</h3>
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
	}

	h3 {
		text-align: center;
		font-size: 2em;
	}

	&-text {

	}

	

	&-price {
		margin-top: calc(var(--base-padding) / 2);
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