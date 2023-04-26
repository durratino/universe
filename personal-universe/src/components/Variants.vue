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
		
		<Variant name="Мечтатель" duration="6 недель" price="4500 Р" priceFull="4900 Р" exercises="около 15 разных инструментов и практик">
			<ul>
				<li>доступ к телеграм-каналу с заданиями, практиками и видео </li>
				<li>чат студентов с участием организаторов</li>
				<li>вебинар с экспертами по созданию карт</li>
				<li>выпускной созвон с защитами своих Вселенных</li>
			</ul>
		</Variant>

		<Variant name="Волшебник" duration="8 недель" price="9900 Р" priceFull="10900 Р" exercises="около 30 разных инструментов и практик">
			<ul>
				<li>доступ к телеграм-каналу с заданиями, практиками и видео</li>
				<li>дополнительные задания на проработку сюжета и персонажей</li>
				<li>чат студентов с участием организаторов</li>
				<li>вебинар с экспертами по созданию карт</li>
				<li>выпускной созвон с защитами своих Вселенных</li>
				<li class="highlight">обратная связь по всем заданиям и практикам</li>
				<li class="highlight">2 мастермайнда</li>
				<li class="highlight">2 групповых арт-терапевтических практики</li>
				
			</ul>
		</Variant>


	</section>
	<div class="links">
		<a href="https://forms.gle/JEdn86QVGE4yJrww6" target="_blank" class="button">Записаться на курс</a>
	</div>
</template>

<style lang="scss" scoped>
h2 {
		max-width: 42rem;
	margin-left: auto;
	margin-right: auto;
	font-size: 1.5em;
	text-align: center;
	}
.variants {
	display: flex;
	flex-direction: column;
	gap: calc(var(--base-padding));

	@media (min-width: 64rem) {
		flex-direction: row;
		gap: calc(var(--base-padding) * 2);
	}
}

ul { 
	padding-left: calc(var(--base-padding) / 2);
	list-style-type: "✩"; 

	@media (min-width: 64rem) {
		padding-left: var(--base-padding);
	}
}

li {
	padding-left: 10px;
	color: var(--color-powder-blue);

	& + & {
		margin-top: calc(var(--base-padding) / 4);
	}

	&.highlight {
		color: var(--color-text);
	}
}

.links {
	.button {
		margin-top: 0;
	}
}
</style>