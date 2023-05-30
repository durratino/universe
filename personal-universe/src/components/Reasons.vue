<script>
import Reason from './Reason.vue';
export default {
	props: {
		heading: {
			type: String,
		}
	},
	components: {
		Reason,
	},
}
</script>

<template>
	<h2 v-if="heading">{{ heading }}</h2>
	<section class="reasons">

		<Reason image="chuder" author="Лена @kolenkfilm">
			<h4>
				...чтобы по-настоящему узнать себя как&nbsp;творца, увидеть свою самобытность и&nbsp;услышать свой голос
			</h4>

			<template #quote>
				<p>
					Я наконец научилась решать любые творческие задачи, вышла из&nbsp;тупика, разрешила все&nbsp;сомнения
					в&nbsp;себе как
					в&nbsp;творце и&nbsp;<strong>разрешила себе себя</strong>.
				</p>
				<p>
					Это действительно годные, действительно работающие практики, довольно простые в&nbsp;применении,
					но&nbsp;которые
					не&nbsp;только выведут вас из&nbsp;творческого тупика, но&nbsp;<strong>откроют для&nbsp;вас вас самих —
						вашу
						уникальную
						вселенную</strong>, из&nbsp;которой вы&nbsp;будете создавать новые миры!
				</p>
			</template>
		</Reason>

		<Reason image="mood" author="Катя @katal.usa">
			<h4>
				...чтобы по-новому взглянуть на&nbsp;свое увлечение и&nbsp;вывести его на&nbsp;новый уровень: почувствовать
				себя не&nbsp;просто
				художником, а&nbsp;настоящим создателем
			</h4>

			<template #quote>
				<p>
					До курса я&nbsp;очень давно писала фанфики и&nbsp;никому не показывала, рисовала разное. Сейчас
					я&nbsp;<strong>могу творить
						в&nbsp;одной теме</strong>, создавать каких хочу персонажей в&nbsp;разных техниках
					и&nbsp;материалах, и&nbsp;мне <strong>всегда есть что поделать
						— ведь моя вселенная бесконечна!</strong>
				</p>
			</template>
		</Reason>

		<Reason image="lelia" author="Полина @lina_fog">
			<h4>
				...чтобы создать масштабный, серьезный и уникальный творческий проект
			</h4>

			<template #quote>
				<p>
					Курс помог мне создать новый волшебный мир, который я&nbsp;полюбила и&nbsp;по&nbsp;которому буду писать книгу. 
					Также с&nbsp;этими знаниями я&nbsp;смогла <strong>грамотно сконструировать мир нынешней книги, сделать его&nbsp;манящим,
					интересным, необычным</strong>.
				</p>
			</template>
		</Reason>

	</section>

</template>

<style lang="scss" scoped>
.reasons {
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	gap: calc(var(--base-padding) * 2);
	width: 100vw;
	max-width: 1200px;
	margin-left: max((100vw - 100%) / (-2), (1200px - 100%) / (-2));
	padding: 0 var(--base-padding);

	@media (min-width: 48rem) {
		grid-template-columns: repeat(2, 1fr);
		gap: calc(var(--base-padding) * 3);
		padding: 0 calc(var(--base-padding));
		font-size: .8em;
	}

	@media (min-width: 64rem) {
		gap: calc(var(--base-padding) * 6);
		padding: 0 calc(var(--base-padding) * 3);
		font-size: 1em;
	}

	h4 {
		font-size: 1.3em;
		font-family: 'El Messiri', sans-serif;
	}
}

.links {
	margin-bottom: 5rem;

	.button {
		margin-top: 0;
	}
}</style>