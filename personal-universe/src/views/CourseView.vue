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
--swiper-pagination-color: #58A4B0;
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
				if (window.scrollY > window.innerHeight * 1.1) {
					button.classList.add('is-visible');
				} else {
					button.classList.remove('is-visible');
				}
			});

			const dialogButtons = document.querySelectorAll('.do-open-dialog');
			const dialog = document.querySelector('dialog');
			dialogButtons.forEach(button => {
				button.addEventListener('click', () => {
					dialog.showModal();
				});
			});

			const closeButton = dialog.querySelector('button');
			closeButton.addEventListener('click', () => {
				dialog.close();
			});

			const formButton = dialog.querySelector('a[href]');
			formButton.addEventListener('click', () => {
				dialog.close();
			})
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
				{ image: 'kapusta' },
				{ image: 'lena' },
				{ image: 'elena' },
				{ image: 'violetta' },
				{ image: 'lera' },
				{ image: 'katyi' },
				{ image: 'maksim' },
				{ image: 'natasha' },
				{ image: 'polina' },
				{ image: 'lera2' },
				{ image: 'katya' },
				{ image: 'masha' },

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
		<Banner image="universe/banner_nbtczh">
			<h1>Твоя Вселенная</h1>
			<h2>творческий курс-путешествие</h2>
			<h3>У каждого внутри есть своя Вселенная.<br>Как выглядит <em>твоя</em>?</h3>
			<div class="buttons">
				<button class="button button--cta do-open-dialog">Отправиться на курс</button>
				<a href="#program" class="button">Посмотреть программу</a>
			</div>
			<!--  -->
		</Banner>

		<button class="button button--cta do-open-dialog button--floating">Отправиться на курс</button>

		<FlyingText class="is-highlight">
			<h2>
				«Твоя Вселенная» —<br />это не курс по&nbsp;рисованию или&nbsp;писательству
			</h2>
			<h3>Это приглашение в&nbsp;ваш собственный мир.</h3>
			<h3>В путешествие по&nbsp;неизведанным тропам и&nbsp;закоулкам, по&nbsp;совершенно новым или&nbsp;забытым
				когда-то родным местам.</h3>
			<h3>Через творчество — к&nbsp;самим&nbsp;себе.</h3>
		</FlyingText>

		<Banner image="universe/tent" class="is-text-left">
			<h2>На курсе вы</h2>
			<ul>
				<li>научитесь <strong>объединять самые разные увлечения и&nbsp;интересы</strong> общей идеей
					и&nbsp;построите фундамент для своего творчества</li>
				<li><strong>попробуете рисовать и&nbsp;писать</strong>, даже если никогда этого не&nbsp;делали</li>
				<li>научитесь создавать персонажей, локации и&nbsp;сюжеты <strong>из&nbsp;головы</strong></li>
				<li>убедитесь, что вы самобытны и уникальны — и способны <strong>создать что-то яркое, оригинальное и
						прекрасное</strong></li>
				<li>не просто придумаете нечто фантастическое, а&nbsp;<strong>выразите свой
						внутренний&nbsp;мир</strong>: научитесь рассказывать о&nbsp;том, что&nbsp;интересно именно вам
				</li>
				<li>создадите <strong>масштабный и&nbsp;уникальный творческий проект</strong>, который будет
					на&nbsp;100% отражать вас</li>
			</ul>
		</Banner>

		<!-- <Clients heading="Наш курс для тех, кто&nbsp;хочет">
		</Clients> -->

		

		<Reasons heading="Но зачем вообще создавать вселенные?"></Reasons>

		<Variants heading="Варианты участия в&nbsp;курсе"></Variants>

		<Program heading="План нашего путешествия" />

		<!-- <FlyingText class="is-small">
			<h3>Мастермайнды</h3>
			<p>Онлайн-встречи, где вы <strong>изучите путь героя и создание персонажей</strong>.
				Вы&nbsp;не&nbsp;просто послушаете полезную в&nbsp;создании
				миров информацию, но&nbsp;и&nbsp;поучаствуете в&nbsp;групповых интерактивах и сразу <strong>попробуете
					теорию на&nbsp;практике</strong>! Это
				сплотит вас с&nbsp;другими участниками курса, позволит почувствовать свежую творческую волну
				и&nbsp;вдохновит на&nbsp;собственные идеи.</p>

			<h3>Арт-терапия</h3>
			<p>Онлайн-встречи, на&nbsp;которых вы
				<strong>познакомитесь со&nbsp;своими
					субличностями</strong>, побываете в&nbsp;своем <strong>безопасном
					месте</strong>,
				которое может стать вашим новым местом силы и&nbsp;появиться в&nbsp;вашей Вселенной,
				а&nbsp;еще найдете связь со&nbsp;своим внутренним Творцом.
			</p>
		</FlyingText> -->

		<Authors heading="Авторы и эксперты курса"></Authors>

		<Gallery :images="images" heading="Вселенные участников" type="slider"></Gallery>

		<FlyingText class="is-highlight">
			<h2>«Твоя Вселенная» —<br />это курс с&nbsp;атмосферой <strong>поддержки, принятия и&nbsp;творческой
					свободы</strong></h2>
			<h3>Группы на нашем курсе небольшие — это&nbsp;позволяет
				нам ближе общаться с вами и&nbsp;погружаться в&nbsp;ваши&nbsp;миры.</h3>
			<h3>Мы подсвечиваем ваши сильные стороны, задаем вопросы и&nbsp;подсказываем, как
				можно развить ваши&nbsp;творения.</h3>
			<h3>А выбор всегда остается за&nbsp;вами.</h3>
			<h3><strong>Ведь
					вы — самый главный человек в&nbsp;своей&nbsp;Вселенной</strong>.
			</h3>

			<!-- <p>Все многочисленные инструменты и методы, которые вы получите на курсе, можно
				с легкостью подстраивать под себя.
			</p>

			

			<p>В конце каждого блока курса вас ждут два основных задания — на&nbsp;рисунок и&nbsp;на&nbsp;текст, —
				которые
				помогут вам
				раскрыть частичку новой Вселенной. А&nbsp;дополнительные практики помогут вам лучше узнать себя, развить
				воображение,
				разложить по&nbsp;полочкам ваши интересы и&nbsp;важные для вас темы, чтобы <strong>создать из&nbsp;этого
					кирпичики для нового,
					вашего
					собственного мира</strong>.</p>

			<p><strong>Все инструменты и&nbsp;методы, которые вы получите на курсе, помогут вам создавать свою Вселенную
					так
					долго, как
					вы сами того захотите — месяц, год и&nbsp;целую жизнь!</strong></p> -->
		</FlyingText>

		<Gallery :images="testimonials" heading="Отзывы выпускников" type="stack"></Gallery>

		<dialog>
			<h3>Послание путешественникам</h3>
			<p>Мы набираем очень маленькую группу творцов-странников и хотим узнать наших будущих попутчиков
				получше.</p>
			<p>Пожалуйста, заполните анкету, и автор курса свяжется с&nbsp;вами лично,
				чтобы познакомиться и подобрать лучший вариант участия конкретно для&nbsp;вас!</p>
			<p>Заявка не&nbsp;обязывает
				вас приходить на&nbsp;курс, но&nbsp;закрепляет за&nbsp;вами место и&nbsp;стоимость участия.
			</p>
			<div class="buttons">
				<button>Пока осмотрюсь здесь</button>
				<a href="https://forms.gle/JEdn86QVGE4yJrww6" target="_blank"
				class="button button--cta do-subscribe">Лечу заполнять анкету!
				</a>
			</div>
			
		</dialog>

	</section>


	<!-- <Program></Program> -->
</template>

<style lang="scss">

.course {
	padding: 0 (calc(var(--base-padding) / 2)) 100px;

	&>h2 {
		@media (min-width: 64rem) {
			font-size: 2.7rem;
		}

		@media (min-width: 80rem) {
			font-size: 3rem;
		}
	}
}

.course,
.text {
	&>h2 {
		// max-width: 42rem;
		margin-inline: auto;
		text-align: center;
	}
}

.text {
	&>h3 {
		font-size: 1em;
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
		max-inline-size: 80%;
		font-size: .7em;
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
			opacity: 1 !important;
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