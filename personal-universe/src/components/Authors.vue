<script>
import Author from './Author.vue';
export default {
	props: {
		heading: {
			type: String,
		}
	},
	components: {
		Author
	},
	computed: {

	},
	methods: {

	}
}
</script>

<template>
	<h2 v-if="heading">{{ heading }}</h2>
	<section class="authors">

		<Author name="Оля" description="художник, создатель миров, наставник творцов" image="olya-photo">
			
		</Author>

		<Author name="Маша" description="писатель, мастер по архетипам, наставник творцов" image="masha-photo">
			
		</Author>


	</section>
	<section class="authors">

	</section>
	<div class="links">
		<a href="https://t.me/+Nnjp9AUn7oQ1MmEy" target="_blank" class="button">Канал авторов курса</a>
	</div>
</template>

<style lang="scss" scoped>
h2 {
	max-width: 42rem;
	margin-left: auto;
	margin-right: auto;
	margin-top: 3em;
	font-size: 1.5em;
	text-align: center;
}

.authors {
	display: flex;
	justify-content: center;
	gap: calc(var(--base-padding));

	@media (min-width: 64rem) {
		
		gap: calc(var(--base-padding) * 2);
	}
}

.links {
	margin-bottom: 5rem;
	.button {
		margin-top: 0;
	}
}
</style>