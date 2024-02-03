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
		<Variant name="Волшебник" duration="8 недель" price="10900 Р" priceEuro="125 €"
			exercises="около 30 разных инструментов и практик">
			<ul>
				<li>доступ к телеграм-каналу с&nbsp;заданиями, практиками и видео</li>
				<li>чат студентов с участием организаторов</li>
				<li>обратная связь по всем заданиям и&nbsp;практикам</li>
				<li>вебинар с экспертами по созданию карт</li>
				<li>2 мастермайнда</li>
				<li>выпускной созвон с защитами своих Вселенных</li>
			</ul>
		</Variant>
		<Variant name="Исследователь" duration="8 недель" price="2900 Р" priceEuro="35 €"
			exercises="4 арт-терапевтические встречи">
			<em>Приобретается только в сочетании с&nbsp;тарифом «Волшебник»</em>
			<ul>
				<li>работа в маленькой безопасной группе</li>
				<li>исследование своей индивидуальности</li>
				<li>знакомство со своими субличностями</li>
				<li>ресурсные практики, которые помогут творить с&nbsp;опорой на&nbsp;себя</li>
			</ul>
			<span>Количество мест: 4</span>
		</Variant>


	</section>
	<div class="priceTag">* свободно 4 места!</div>
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