<script>

export default {
	props: {
		type: {
			type: String,
		}
	}
}
</script>


<template>
	<section class="text" :class="'text--' + type">
		<slot></slot>
	</section>
</template>


<style lang="scss" scoped>
.text {
	.course>& {
		// max-width: 42rem;
		margin: calc(var(--base-padding) * 1.5) auto;
		font-size: 1.15rem;

		@media (min-width: 64rem) {
			margin: calc(var(--base-padding) * 3) auto;
			font-size: 1.55rem;
		}

		@media (min-width: 80rem) {
			margin: calc(var(--base-padding) * 4) auto;
			font-size: 1.72rem;
		}

		h3 {
			font-size: 1em;
		}
	}

	&:where(.is-small) {
		font-size: 1em;
	}

	&:where(.is-highlight) {
		// min-height: 100svh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
	}	
}
</style>