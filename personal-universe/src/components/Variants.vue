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
		
		<Variant name="Мечтатель" price="4500 Р" priceFull="4900 Р">
			<ul>
				<li>доступ к телеграм-каналу с заданиями, практиками и видео </li>
				<li>чат участников-Мечтателей с участием организаторов</li>
				<li>вебинар с экспертами по созданию карт</li>
				<li>выпускной созвон с защитами своих Вселенных</li>
			</ul>
		</Variant>

		<Variant name="Волшебник" price="9900 Р" priceFull="10900 Р">
			<ul>
				<li>доступ к телеграм-каналу с заданиями, практиками и видео</li>
				<li>дополнительные задания на проработку сюжета и персонажей</li>
				<li>чат участников-Волшебников с участием организаторов</li>
				<li>обратная связь по всем заданиям и практикам</li>
				<li>2 мастермайнда</li>
				<li>2 групповых арт-терапевтических практики</li>
				<li>вебинар с экспертами по созданию карт</li>
				<li>выпускной созвон с защитами своих Вселенных</li>
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

	& + & {
		margin-top: calc(var(--base-padding) / 4);
	}
}

.links {
	.button {
		margin-top: 0;
	}
}
</style>