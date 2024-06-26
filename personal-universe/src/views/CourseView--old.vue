<script>
import { results } from '../assets/results.json';
import Banner from '../components/Banner.vue';
import FlyingText from '../components/FlyingText.vue';
import Gallery from '../components/Gallery.vue';
import Program from '../components/Program.vue';
import Variants from '../components/Variants.vue';
import Authors from '../components/Authors.vue';
import Clients from '../components/Clients.vue';
import Reasons from '../components/Reasons.vue';

export default {
	data() {
		return {

		}
	},
	head() {
		return {
			title: 'Курс "Твоя Вселенная"',
			meta: [
				{ name: 'og:title', content: 'Курс "Твоя Вселенная"' },
				{ name: 'og:description', content: 'Авторский курс по созданию своего собственного мира. У каждого внутри есть своя вселенная. Как выглядит твоя?' },
				{ name: 'og:site_name', content: 'Твоя вселенная' },
				{ name: 'og:url', content: 'https://apersonaluniverse.netlify.app/course' },
			],
		}
	},
	components: {
		Banner,
		FlyingText,
		Gallery,
		Program,
		Variants,
		Authors,
		Clients,
		Reasons
	},
	mounted() {
		const swiperEls = document.querySelectorAll('swiper-container');

		swiperEls.forEach(swiperEl => {
			const params = {
				// array with CSS styles
				injectStyles: [
					`
:root {
--swiper-pagination-bottom: -3px;
--swiper-pagination-color: #2AFC98;
--swiper-pagination-bullet-inactive-color: #58A4B0;
--swiper-navigation-color: #58A4B0;
--swiper-navigation-sides-offset: 5px;
--swiper-navigation-size: 1.5rem;
}
.swiper-button-next,
.swiper-button-prev {
	background: white;
    padding: 5px;
    border-radius: 15px;
    width: 40px;
    height: 40px;
	font-weight: bold;
	opacity: .8;
	transition: opacity .1s cubic-bezier(0.075, 0.82, 0.165, 1);
	cursor: pointer;
}
.swiper-button-next {
	padding-right: 3px;
}
.swiper-button-prev {
	padding-left: 3px;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
	opacity: .98;
}
.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
	opacity: 0;
}
`,
				],
			};

			Object.assign(swiperEl, params);

			swiperEl.initialize();

			window.addEventListener('scroll', () => {
				const button = document.querySelector('.button--floating');
				if (window.scrollY > window.innerHeight * 1.5) {
					button.classList.add('is-visible');
				} else {
					button.classList.remove('is-visible');
				}
			});
		})
	},
	computed: {
		images() {
			const imgs = results
				.filter(result => result.image !== 'your-own' && result.image !== 'kur-cheret' && result.image !== 'north-sea')
				.map(result => { return { image: result.cloudinary, url: result.url, urlText: result.urlText } });
			return this.shuffleArray(imgs);
		},
		testimonials() {
			return [
				{ image: 'lena' },
				{ image: 'lera' },
				{ image: 'elena' },
				{ image: 'katyi' },
				{ image: 'natasha' },
				{ image: 'polina' },
				{ image: 'katya' },
				{ image: 'masha' },
				{ image: 'masha2' },
				{ image: 'natavol' },
				{ image: 'nata' },
			]
		}
	},
	methods: {
		shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
			return array;
		}
	}
}
</script>

<template>
	<section class="course">
		<a href="https://forms.gle/JEdn86QVGE4yJrww6" target="_blank" class="button button--cta do-subscribe button--floating">
			Записаться на курс</a>

		<Banner image="banner">
			<h1>Твоя Вселенная</h1>
			<h2>творческий курс-путешествие</h2>
			<h3>У каждого внутри есть своя Вселенная.<br>Как выглядит <em>твоя</em>?</h3>
			<div class="buttons">
				<a href="https://forms.gle/JEdn86QVGE4yJrww6" target="_blank"
					class="button button--cta do-subscribe">Записаться на
					курс</a>
				<a href="#program" class="button">Посмотреть программу</a>
			</div>


			<p class="sidenote">Мы хотим узнать наших будущих участников лучше, поэтому вместо прямой оплаты
				предлагаем заполнить анкету предзаписи.</p>
				<p class="sidenote">	Предзапись не&nbsp;обязывает
				вас приходить на&nbsp;курс, но&nbsp;закрепляет за&nbsp;вами место и&nbsp;стоимость участия.

			</p>
		</Banner>

		<FlyingText>
			<h2>
				Приглашение в&nbsp;ваш&nbsp;мир
			</h2>
			<p>
				Мы зовем вас в&nbsp;путешествие по&nbsp;неизведанным землям — <strong>по&nbsp;вашим собственным
					мирам</strong>. Они уже
				живут внутри вас и&nbsp;наверняка надеятся проявиться!
			</p>
			<p>
				Наш курс по&nbsp;рисованию или&nbsp;писательству. Мы берём два главных инструмента — рисунок
				и&nbsp;текст, —
				которые сами любим, и&nbsp;показываем вам, как можно <strong>использовать эти виды творчества вместе, чтобы
					бережно достать
					из&nbsp;себя свой мир и&nbsp;рассказать о&nbsp;нем</strong>.
			</p>
		</FlyingText>

		<Clients heading="Наш курс для тех, кто&nbsp;хочет">
		</Clients>

		<FlyingText>
			<p> На курсе мы создаём тёплую атмосферу <strong>поддержки, принятия и&nbsp;творческой свободы</strong>.
				Мы&nbsp;подсвечиваем ваши сильные
				стороны, показываем, в каком направлении можно развить ваше творение, и&nbsp;всегда оставляем выбор за
				вами.<br />
				<strong>Ведь
					вы — самый главный человек в&nbsp;своей Вселенной</strong>.
			</p>

			<p>В конце каждого блока курса вас ждут два основных задания — на&nbsp;рисунок и&nbsp;на&nbsp;текст, — которые
				помогут вам
				раскрыть частичку новой Вселенной. А&nbsp;дополнительные практики помогут вам лучше узнать себя, развить
				воображение,
				разложить по&nbsp;полочкам ваши интересы и&nbsp;важные для вас темы, чтобы <strong>создать из&nbsp;этого
					кирпичики для нового,
					вашего
					собственного мира</strong>.</p>

			<p><strong>Все инструменты и&nbsp;методы, которые вы получите на курсе, помогут вам создавать свою Вселенную так
					долго, как
					вы сами того захотите — месяц, год и&nbsp;целую жизнь!</strong></p>
		</FlyingText>

		<Reasons heading="Но зачем вообще создавать вселенные?"></Reasons>

		<Program heading="План нашего путешествия" />

		<FlyingText class="is-small">
			<h3>Мастермайнды</h3>
			<p>Онлайн-встречи, где вы будете <strong>изучать путь героя и создание персонажей</strong>.
				Вы&nbsp;не&nbsp;просто послушаете полезную в&nbsp;создании
				миров информацию, но&nbsp;и&nbsp;поучаствуете в&nbsp;групповых интерактивах и сразу <strong>попробуете
					теорию на&nbsp;практике</strong>! Это
				сплотит вас с&nbsp;другими участниками курса, позволит почувствовать свежую творческую волну
				и&nbsp;вдохновит на&nbsp;собственные идеи.</p>

			<h3>Арт-терапия</h3>
			<p>Онлайн-встречи, на&nbsp;которых вы
				<strong>познакомитесь с&nbsp;внутренним
					самозванцем</strong>, чтобы снять оковы
				творческих ограничений и&nbsp;создадите через медитацию и&nbsp;рисунок <strong>безопасного места</strong>,
				которое может стать вашим новым местом силы и&nbsp;появиться в&nbsp;вашей Вселенной
			</p>
		</FlyingText>

		<Variants heading="Варианты участия в&nbsp;курсе"></Variants>

		<FlyingText type="program" v-if="short">
			<h3>План нашего путешествия</h3>

			<h4>Блок 0: Слет Странников</h4>
			<h5>5 дней</h5>
			<p>Собираемся, знакомимся и замираем перед длинным путешествием</p>

			<h4>Блок 1: Начало Путешествия</h4>
			<h5>
				<span>Мечтатель: 1 неделя</span>
				<span>Волшебник: 2 недели</span>
			</h5>
			<p>Рефлексируем и начинаем строить мир от себя.<br>
				В этом блоке вы поймете, какой мир хотите создать, и прочувствуете, каково это — быть его жителем</p>

			<h4>Блок 2: Осмотр достопримечательностей</h4>
			<h5>
				<span>Мечтатель: 1 неделя</span>
				<span>Волшебник: 2 недели</span>
			</h5>
			<p>Создаем первую локацию вашего мира<br>
				На этой неделе вы научитесь генерировать разные локации, которые путешественник мог бы посетить в вашем
				мире, и
				расскажете об одной из них. Подводим промежуточные результаты.</p>

			<p><em>Для тарифа Волшебник: Разрабатываем сюжет, чтобы наши истории обрели структуру и логику.</em></p>

			<h4>Блок 3: Знакомство с местными жителями</h4>
			<h5>
				1 неделя
			</h5>
			<p>Населяем ваш мир существами<br>
				На этой неделе речь пойдет о персонажах. Вы поймете, кто живет в вашем мире, как они выглядят, как чувствуют
				и
				действуют, и перенесете их на бумагу (или на планшет :))</p>

			<p><em>Для тарифа Волшебник: Подробно разбираем характер и историю главного персонажа — героя, который
					отправляется
					в путешествие.</em></p>

			<h4>Блок 4: Полет на облаке</h4>
			<h5>
				1 неделя
			</h5>
			<p>Смотрим на мир свысока и рисуем его карту<br>
				На этой неделе вы расскажете об истории своего мира и подготовите почву для его дальнейшего развития.</p>

			<p><em>Для тарифа Волшебник: Продумываем и во всех деталях создаём одну из сцен, которую прописывали в
					сюжете.</em>
			</p>

			<h4>Разбор фотокарточек:</h4>
			<h5>
				5 дней
			</h5>
			<p>Собираем свой опыт в презентацию<br>
				В конце у вас будет уже солидный фундамент для дальнейшего развития своего мира. Вы соберете все, что вы
				делали,
				в презентацию и расскажете о своей Вселенной на финальном созвоне 🔥</p>
			<div class="links">
				<a href="https://forms.gle/JEdn86QVGE4yJrww6" target="_blank" class="button do-subscribe">Записаться на
					курс</a>
			</div>

		</FlyingText>



		<Authors heading="Авторы и эксперты курса"></Authors>

		<Gallery :images="images" heading="Миры наших выпускников" type="slider"></Gallery>

		<Gallery :images="testimonials" heading="Отзывы выпускников" type="stack"></Gallery>

	</section>


	<!-- <Program></Program> -->
</template>

<style lang="scss">
.course {
	padding: 0 (calc(var(--base-padding) / 2));
}

.course,
.text {
	&>h2 {
		// max-width: 42rem;
		margin-left: auto;
		margin-right: auto;
		margin-top: 3em;
		font-size: 2em;
		line-height: 1;
		text-align: center;
	}
}

.links {
	.button {
		margin-top: 0;
	}
}

h3 {
	margin-top: 2em;
}

.text--program {
	h4 {
		margin-bottom: 0;
	}

	h5 {
		display: flex;
		gap: 10px;
		margin-top: 0;
		font-style: italic;
		font-size: 1rem;
	}
}

.message {
	position: absolute;
	right: 0;
	top: 0;
	padding: 2px 5px;
	background: var(--color-contrast);
	font-size: .8em;
	border-radius: 0 0 0 3px;

	@media (min-width: 64rem) {
		right: var(--base-padding);
		border-radius: 3px;
	}
}

.sidenote {
	font-style: italic;
	font-size: .9em;

	@media (min-width: 64rem) {
		font-size: .8em;
	}
}

.button {
	&--floating {
		position: fixed;
		z-index: 10;
		bottom: var(--base-padding);
		right: var(--base-padding);
		opacity: .75;
		transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
		transform: translateY(calc(var(--base-padding) + 100%));

		&:hover {
			opacity: 1!important;
		}

		&.is-visible {
			transform: translateY(0);
			animation: button-transparency 10s infinite;
		}
	}
}

@keyframes button-transparency {
	0% {
		
		transform: scale(1);
	}

	45% {
		
		transform: scale(1);
	}

	50% {
		
		transform: scale(1.05);
	}

	65% {
		
		transform: scale(1);
	}
}
</style>