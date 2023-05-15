<script>
import Client from './Client.vue';
export default {
	props: {
		heading: {
			type: String,
		}
	},
	components: {
		Client
	},
	computed: {

	},
	methods: {

	}
}
</script>

<template>
	<h2 v-if="heading">{{ heading }}</h2>
	<section class="clients">

		<Client image="heart">
			заняться творчеством <strong>в&nbsp;своё удовольствие</strong>
		</Client>

		<Client image="spiral">
			<strong>начать или возобновить</strong> творческую практику после перерыва
		</Client>

		<Client image="project">
			научиться создавать <strong>структурированные, завершённые творческие проекты</strong>, при&nbsp;этом <strong>не&nbsp;загоняя себя в&nbsp;рамки</strong>
		</Client>

		<Client image="magic">
			стать <strong>настоящим создателем Вселенных</strong>, как Джоан Роулинг или Стэн Ли
		</Client>

		<Client image="key">
			раскрыть <strong>новые грани себя</strong> через творчество и&nbsp;<strong>прожить эмоции и&nbsp;ситуации</strong>, которые сложнее осознать через мысли и&nbsp;логику
		</Client>

		<Client image="home">
			<strong>создать для&nbsp;себя безопасное место</strong> в&nbsp;виде собственного мира, где можно отдохнуть от&nbsp;ежедневной суеты и&nbsp;тревоги
		</Client>

		


	</section>

	<div class="links">
		<a href="https://t.me/+Nnjp9AUn7oQ1MmEy" target="_blank" class="button">Записаться на курс</a>
	</div>
</template>

<style lang="scss" scoped>


.clients {
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: calc(var(--base-padding));
	width: 100vw;
	max-width: 1200px;
	margin-left: max((100vw - 100%) / (-2), (1200px - 100%) / (-2));
	padding: 0 var(--base-padding);

	@media (min-width: 64rem) {
		grid-template-columns: repeat(4, 1fr);
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