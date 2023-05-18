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
	<section class="text" :class="'text--'+type">
		<slot></slot>
	</section>
</template>


<style lang="scss" scoped>
.text {
	.course > & {
		max-width: 42rem;
		margin: var(--base-padding) auto;
		font-size: 1.15em;
		

		@media (min-width: 64rem) {
			margin: calc(var(--base-padding) * 2) auto;
		}
	}

	&.is-small {
		font-size: 1em;
	}

}
</style>