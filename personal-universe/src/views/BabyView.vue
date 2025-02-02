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
import CloudinaryImage from '../components/CloudinaryImage.vue';

export default {
	data() {
		return {
			persons,
			backgroundWidth: window.innerWidth >= 1280 ? 1280 : window.innerWidth,
			backgroundHeight: window.innerWidth >= 1280 ? 2000 : window.innerWidth / 0.64
		}
	},

	components: {
		CloudinaryImage,
		Card,
		Guessing,
		Parents,
		Ultrasound,
		Preparations,
		Sponsorship
	},

	async mounted() {
		this.handleParallax();
	},

	methods: {
		handleParallax() {
			const layers = document.querySelectorAll('.background-layer');
			const multiplier = window.innerWidth < 880 ? 0.6 : 1;
			window.addEventListener('scroll', () => {
				const scrollPosition = window.scrollY;
				layers.forEach(layer => {
					const depth = layer.getAttribute('data-depth');
					const movement = -(scrollPosition * depth * multiplier);
					layer.style.transform = `translateY(${movement}px)`;
				});
			});
		}
	},
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
	<section class="background" :style="{ '--background-height': `${backgroundHeight}px` }">
		<CloudinaryImage class="background-layer background-layer-1" :image="'malysh-bg-1'" :width="backgroundWidth"
			aspect-ratio="0.64" data-depth="0.1" />
		<CloudinaryImage class="background-layer background-layer-2" :image="'malysh-bg-2'" :width="backgroundWidth"
			aspect-ratio="0.64" data-depth="0.21" />
		<CloudinaryImage class="background-layer background-layer-3" :image="'malysh-bg-3'" :width="backgroundWidth"
			aspect-ratio="0.64" data-depth="0.14" />
		<CloudinaryImage class="background-layer background-layer-4" :image="'malysh-bg-4'" :width="backgroundWidth"
			aspect-ratio="0.64" data-depth="0.155" />
		<CloudinaryImage class="background-layer background-layer-5" :image="'malysh-bg-5'" :width="backgroundWidth"
			aspect-ratio="0.64" data-depth="0.19" />
		<CloudinaryImage class="background-layer background-layer-6" :image="'malysh-bg-6'" :width="backgroundWidth"
			aspect-ratio="0.64" data-depth="0.3" />
		<CloudinaryImage class="background-layer background-layer-7" :image="'malysh-bg-7'" :width="backgroundWidth"
			aspect-ratio="0.64" data-depth="0.22" />
		<CloudinaryImage class="background-layer background-layer-8" :image="'malysh-bg-8'" :width="backgroundWidth"
			aspect-ratio="0.64" data-depth="0.13" />
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

	@media (min-width: 1280px) {
		--background-height: 2000px;
	}


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
		background-color: oklch(from var(--color-white) l c h / 0.9);
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

	h1,
	h2 {
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

		&+h2 {
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

	.link {
		color: var(--color-accent);
		text-decoration: none;
		background: none;
		border: none;
		font: inherit;
		padding: 0;
		cursor: pointer;
		inline-size: max-content;

		&:hover {
			text-decoration: underline;
		}
	}

	.background {
		position: fixed;
		inset-inline: 0;
		inset-block-start: 0;
		z-index: -1;
		block-size: Max(200vh, var(--background-height));
		margin: 0;

		&-layer {
			position: absolute;

			&-1 {
				inset-block-start: 0;
			}

			&-2 {
				inset-block-start: 25%;
			}

			&-3 {
				inset-block-start: 20%;
			}

			&-4 {
				inset-block-start: 36%;
			}

			&-5 {
				inset-block-start: 70%;
			}

			&-6 {
				inset-block-start: 120%;
			}

			&-7 {
				inset-block-end: 0;
			}

			&-8 {
				inset-block-end: 5%;
			}

			@media (min-width: 880px) {
				inset: 0;
			}
		}
	}
}
</style>