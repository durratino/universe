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
	<h2 v-if="heading" id="experts">{{ heading }}</h2>
	<section class="authors">

		<Author name="Оля" position="Художник, арт-терапевт, создатель миров, проводник в творчество" description="" image="universe/olya-photo_haitwk">
			<p>
				Любитель организовывать творческие движи, погружаться в&nbsp;миры других людей и&nbsp;помогать творцам
				продумывать и&nbsp;реализовывать свои&nbsp;проекты. Уже пять лет создаю свой волшебный мир Кюр-Черета
				с&nbsp;помощью иллюстраций и&nbsp;историй, и&nbsp;когда-то даже допишу о&nbsp;нем повесть!
			</p>
			<p>
				На&nbsp;курсе окружу вас&nbsp;заботой, задам наводящие вопросы, помогу сделать ваш мир действительно живым
				и&nbsp;самобытным. Щедро поделюсь своими методами генерации идей и&nbsp;создания разных элементов нового
				мира, а&nbsp;в&nbsp;конце
				помогу собрать все воедино в&nbsp;цельный проект.
			</p>
		</Author>

		<Author name="Маша" position="Писатель, исследователь архетипов, наставник творцов" description=""
			image="universe/masha-photo_zr3rjr">
			<p>
				Издала книгу “Тёплая Вселенная”, а&nbsp;сейчас создаю мир вокруг Северного моря в&nbsp;своём романе.
			</p>
			<p>
				На курсе проведу вас за&nbsp;руку в&nbsp;чудный писательский мир и&nbsp;покажу его маленькие секретики,
				чтобы у&nbsp;вас
				получались живые истории, которые увлекают и&nbsp;вызывают желание скорее узнать продолжение!
				А&nbsp;для&nbsp;тех, кто
				хочет исследовать писательские катакомбы — изучим разные способы построения сюжета, разработки вашего
				главного героя и&nbsp;сюжетной сцены. К&nbsp;концу курса вы&nbsp;рискуете уйти от&nbsp;меня с&nbsp;началом
				своей собственной книги
				по&nbsp;вашей Вселенной!
			</p>
		</Author>


	</section>
	<section class="authors">
		<!-- <Author name="Настя"
			description="Арт-терапевт, педагог, супервизор и&nbsp;просто превосходная женщина! Под&nbsp;ее&nbsp;чутким руководством вы&nbsp;познакомитесь с&nbsp;Внутренним Самозванцем и&nbsp;узнаете кое-что важное о&nbsp;нем и&nbsp;о&nbsp;себе. А&nbsp;еще&nbsp;Настя проведет вас в&nbsp;по-настоящему Безопасное место, которое может стать главной локацией в&nbsp;вашей Вселенной."
			image="universe/nastya-photo_xo8ufe"></Author> -->
		<Author name="Сева"
			description="Вообще-то клинический аналитик... но&nbsp;для&nbsp;нас важно, что&nbsp;он мастер ролевых игр и&nbsp;человек, нарисовавший кучу карт по&nbsp;своему миру. Выступит на&nbsp;вебинаре в&nbsp;последнем блоке курса и&nbsp;поделится своими приемчиками при&nbsp;создании карт фентези и сай-фай миров: как&nbsp;и&nbsp;зачем."
			image="universe/seva-photo_sto0jf"></Author>
		<Author name="Полина"
			description="Практикующий психолог с&nbsp;богатым прошлым художника, дизайнер по&nbsp;первому образованию... и&nbsp;тонко чувствующий этот мир человек. На&nbsp;вебинаре по&nbsp;картам расскажет о&nbsp;художественной стороне вопроса: как&nbsp;сделать красиво и&nbsp;легко."
			image="universe/polina-photo_ozyn52"></Author>
		<Author name="Аня Капуста"
			description="Художник, который не&nbsp;умеет и&nbsp;не&nbsp;хочет выбирать одно, выпускник «Твоей Вселенной» и&nbsp;любитель все&nbsp;структурировать. Капуста поделится своим способом организации вселенной в&nbsp;Notion и&nbsp;поможет вам упорядочить свои наработки."
			image="universe/iyzpavka7uhot5aeblub"></Author>
	</section>
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
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: calc(var(--base-padding) * 2);
	font-size: 1rem;

	@media (min-width: 48rem) {
		flex-direction: row;
		align-items: flex-start;
	}

	&+& {
		margin-top: calc(var(--base-padding) * 2);

		@media (min-width: 48rem) {
			flex-wrap: wrap;
		}


		@media (min-width: 64rem) {
			margin-top: calc(var(--base-padding) * 2);
			font-size: .9rem;
			flex-wrap: nowrap;
		}

		&>* {
			flex-shrink: 1;
		}
	}
}

.links {
	margin-bottom: 5rem;

	.button {
		margin-top: 0;
	}
}

p {
	margin: 0;
}
</style>