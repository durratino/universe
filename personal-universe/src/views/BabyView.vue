<script>
import { doc, getDoc } from "firebase/firestore";
import { db } from '@/firebase';
import { persons } from '../assets/persons.json';
import Card from '../components/baby/Card.vue';
import Guessing from "../components/baby/Guessing.vue";
import Parents from "../components/baby/Parents.vue";
import Ultrasound from "../components/baby/Ultrasound.vue";
import Preparations from "../components/baby/Preparations.vue";

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
		Preparations
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
			странноватой игре, заполни форму ниже и&nbsp;отправь нам свои
			предположения.
		</p>
		<p>
			После рождения малыша здесь появится карточка с&nbsp;твоими предположениями и&nbsp;реальными
			данными о&nbsp;малыше. Можно будет посмотреть, насколько близки были твои догадки!
		</p>
	</header>
	<section class="baby">
		<Guessing />
	</section>

	<h2>Нужно больше информации?</h2>

	<section class="first">
		<h3>Зацепка #1: Будущие родители</h3>
		<Parents />
	</section>
	<section class="second">
		<h3>Зацепка #2: УЗИ малыша</h3>
		<Ultrasound />
	</section>
	<section class="third">
		<h3>Зацепка #3: Подготовка к прибытию космонавтика</h3>
		<Preparations />
	</section>
</template>

<style lang="scss">
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

	.header {
		display: none;
	}

	main {
		inline-size: 96vw;
		max-inline-size: 120rem;
	}

	header {
		max-inline-size: 50rem;
		margin: 0 auto 2em;

	}

	section {
		container: section / inline-size;

		&+section {
			margin-block-start: 4em;
		}
	}

	h1 {
		font-size: 4rem;
		text-align: center;
		margin: 1em 0;
	}

	h2 {
		text-align: center;
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