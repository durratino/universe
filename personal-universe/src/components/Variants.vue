<script>
import Variant from './Variant.vue';
export default {
	props: {
		heading: {
			type: String,
		}
	},
	components: {
		Variant
	},
	computed: {

	},
	methods: {

	}
}
</script>

<template>
	<h2 v-if="heading">{{ heading }}</h2>
	<section class="variants">

		<Variant name="Мечтатель" duration="6 недель" price="4900 Р" priceEuro="55 €"
			exercises="около 15 разных инструментов и практик">
			<ul>
				<li>доступ к телеграм-каналу с заданиями, практиками и видео </li>
				<li>чат студентов с участием организаторов</li>
				<li>вебинар с экспертами по созданию карт</li>
				<li>выпускной созвон с защитами своих Вселенных</li>
			</ul>
		</Variant>

		<Variant name="Волшебник" duration="8 недель" price="10900 Р" priceEuro="125 €"
			exercises="около 30 разных инструментов и практик" class="is-highlighted">
			<ul>
				<li>доступ к телеграм-каналу с заданиями, практиками и видео</li>
				<li>чат студентов с участием организаторов</li>
				<li>вебинар с экспертами по созданию карт</li>
				<li>выпускной созвон с защитами своих Вселенных</li>
				<li class="highlight">обратная связь по всем заданиям и практикам</li>
				<li class="highlight">дополнительные задания на проработку сюжета и персонажей</li>
				<li class="highlight">2 мастермайнда</li>
				<li class="highlight">2 групповых арт-терапевтических практики</li>
				<li class="highlight">сопровождение нарративного коуча</li>
			</ul>
		</Variant>


	</section>
	<div class="priceTag">* осталось всего 2 места!</div>
	<div class="links">
		
		<a href="https://forms.gle/JEdn86QVGE4yJrww6" target="_blank" class="button do-subscribe">Записаться на курс</a>
	</div>
</template>

<style lang="scss" scoped>

.variants {
	display: flex;
	flex-direction: column;
	gap: calc(var(--base-padding));

	@media (min-width: 64rem) {
		flex-direction: row;
		gap: calc(var(--base-padding) * 2);
	}
}

.priceTag {
	text-align: center;
	font-size: 1em;
	margin-top: 1rem;
	font-style: italic;

	@media (min-width: 64rem) {
		padding-left: calc(50% + var(--base-padding));
	}
}

.links {
	.button {
		margin-top: 0;
	}
}</style>