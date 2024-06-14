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
	<h2 v-if="heading" id="rates">{{ heading }}</h2>
	<section class="variants">
		<Variant name="Волшебник" duration="8 недель" price="12900 Р" priceEuro="135 €"
			exercises="более 30 разных инструментов и практик">
			<ul>
				<li>доступ к телеграм-каналу с&nbsp;заданиями, практиками и видео</li>
				<li>камерный чат (не больше 10 человек) студентов с&nbsp;участием авторов</li>
				<li>обратная связь по всем заданиям и&nbsp;практикам</li>
				<li>2 мастермайнда</li>
				<li>вебинар с&nbsp;экспертами по созданию карт</li>
				<li>мастер-класс по&nbsp;организации вселенной</li>
				<li>выпускной созвон с&nbsp;презентациями своих Вселенных</li>
			</ul>
		</Variant>
		<Variant name="Волшебник-Искатель" price="16400 Р" priceEuro="170 €"
			exercises="+5 арт-терапевтических практик">
			<ul>
				<li>доступ к телеграм-каналу с&nbsp;заданиями, практиками и видео</li>
				<li>камерный чат (не больше 10 человек) студентов с&nbsp;участием организаторов</li>
				<li>обратная связь по всем заданиям и&nbsp;практикам</li>
				<li>вебинар с&nbsp;экспертами по созданию карт</li>
				<li>2 мастермайнда</li>
				<li>мастер-класс по&nbsp;организации вселенной</li>
				<li>выпускной созвон с&nbsp;презентациями своих Вселенных</li>
				<li class="highlight">5 арт-терапевтических групповых встреч с&nbsp;Олей </li>
				<li class="highlight">отдельная мини-группа (до 4&nbsp;человек)* с&nbsp;Олиным сопровождением</li>
			</ul>
		</Variant>


	</section>
	<div class="priceTag">* свободно 2 места!</div>
	<div class="links">
		
		<button class="button button--cta do-open-dialog">Записаться на курс</button>
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