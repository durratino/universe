<template>
	<section class="text">
		<slot></slot>
	</section>
</template>


<style lang="scss" scoped>
.text {
	main > & {
		max-width: 42rem;
		margin: var(--base-padding) auto;

		@media (min-width: 64rem) {
			margin: calc(var(--base-padding) * 2) auto;
			font-size: 1.15em;
		}
	}
}
</style>