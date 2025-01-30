<script>
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/firebase';
import { persons } from '../assets/persons.json';
import Card from '../components/baby/Card.vue';
import Guessing from "../components/baby/Guessing.vue";
import Parents from "../components/baby/Parents.vue";
import Ultrasound from "../components/baby/Ultrasound.vue";
import Preparations from "../components/baby/Preparations.vue";
import Sponsorship from "../components/baby/Sponsorship.vue";

export default {
	data() {
		return {
			persons,

		}
	},

	components: {
		Card,
		Guessing,
		Parents,
		Ultrasound,
		Preparations,
		Sponsorship
	},

	async mounted() {
		const docRef = doc(db, "guessings", "secret");
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			// console.log("Document data:", docSnap.data());
		} else {
			// docSnap.data() will be undefined in this case
			console.log("No such document!");
		}
	}
}

</script>

<template>
	<h1>Разгадай малыша!</h1>
	<header class="baby-header">
		<p>
			Привет! Ты оказался на этой страничке, а&nbsp;значит, нам очень любопытно, как ты
			представляешь себе нашего малыша. Если тебе интересно поучаствовать в&nbsp;этой
			игре, заполни форму ниже и&nbsp;отправь нам свои
			предположения.
		</p>
		<p>
			После рождения здесь появится карточка с&nbsp;реальными
			данными о&nbsp;малыше, и&nbsp;можно будет посмотреть, насколько близки были твои&nbsp;догадки!
		</p>
	</header>
	<section class="baby">
		<Guessing />
	</section>

	<h2>— А есть какая&#8209;то информация?! Мне&nbsp;что, просто пальцем в&nbsp;небо тыкать?</h2>
	<h2>Ладно, даем тебе три зацепки...</h2>

	<section class="first">
		<h3>Зацепка #1: Будущие родители</h3>
		<Parents />
	</section>
	<section class="second">
		<h3>Зацепка #2: УЗИ малыша</h3>
		<Ultrasound />
	</section>
	<section class="third">
		<h3>Зацепка #3: Подготовка к&nbsp;прибытию космонавтика</h3>
		<Preparations />
	</section>
	<h2>Ну а раз ты долистал до этого места...</h2>
	<section class="fourth">
		<Sponsorship />
	</section>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Neucha&family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Yomogi&display=swap');
body:has(.baby) {
	--color-white: oklch(100% 0 0);
	--color-grey: oklch(70% 0 0);
	--color-beige: oklch(95.17% 0.0176 79.58);
	--color-coral: oklch(76.48% 0.1001 33.28);
	--color-violet: oklch(48.07% 0.0258 296.86);
	--color-turquoise: oklch(66.6% 0.0647 211.69);
	--color-dark: oklch(35.47% 0.0032 345.38);
	--color-text: var(--color-dark);
	--color-accent: var(--color-turquoise);

	background: var(--color-beige);
	color: var(--color-dark);

	background-image: 
		url('../assets/images/malysh-bg.png');

	.header {
		display: none;
	}

	main {
		inline-size: 96vw;
		max-inline-size: 120rem;
		font-family: 'Nunito', sans-serif;

		&>section {
			container: section / inline-size;
			margin-block: 4em;
		}
	}

	header {
		max-inline-size: 50rem;
		margin: 0 auto 2em;
		padding: 2em;
		background-color: oklch(from var(--color-white) l c h / 0.8);
		border-radius: 1em;
		
		p {
			font-size: 1.2em;
		}
	}

	h1,
	h2,
	h4 {
		font-family: 'Neucha', sans-serif;
	}

	h1, h2 {
		letter-spacing: .1em;
		padding: .2em .1em .1em;
		background-color: oklch(from var(--color-white) l c h / 0.8);
		border-radius: .3em;
		max-inline-size: 50rem;
		margin-inline: auto;
	}

	h3 {
		font-family: 'Nunito', sans-serif;
		font-weight: 500;
		padding: .1em .3em;
		background-color: oklch(from var(--color-white) l c h / 0.8);
		border-radius: .3em;
	}

	h1 {
		font-size: 4.5em;
		text-align: center;
		margin-block: 1em;
	}

	h2 {
		font-size: 3em;
		text-align: center;
		text-wrap: balance;

		& + h2 {
			margin-block-start: 1em;
		}
	}

	h3 {
		font-size: 2rem;
	}

	p {
		&:first-child {
			margin-block-start: 0;
		}
	}

	img {
		display: block;
	}

	.button {
		justify-content: center;
		background-color: oklch(from var(--color-accent) l c h / 0.1);
		border-color: var(--color-accent);
		color: var(--color-accent);
		border-radius: .3em;

		&:hover {
			background-color: var(--color-accent);
			color: var(--color-white);
		}
	}
}
</style>