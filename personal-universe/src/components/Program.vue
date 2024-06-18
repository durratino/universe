<script>
import ProgramItem from './ProgramItem.vue';
export default {
	props: {
		heading: {
			type: String,
		},
	},
	components: {
		ProgramItem
	},
	data() {
		return {
			programItems: [
				{

					name: 'Слет странников',
					block: 'Подготовительный блок',
					durationDreamer: '5 дней',
					description: '',
					dreamer: [
						'Распаковка "Вселенная внутри"',
						'Авторская медитация "Знакомство со Вселенной"'
					],
					wizard: [
						'ОНЛАЙН-ВСТРЕЧА: Арт-терапевтическая практика 4 метафорических автопортрета'
					],
					image: 'chapter0'
				},
				{
					name: 'Начало путешествия',
					block: 'Блок 1',
					durationDreamer: '2 недели',
					description: '',
					dreamer: [
						'Разбор старых работ',
						'Абстрактный фон',
						'Обращение к внутреннему критику',
						'Определение вектора движения',
						'Майндкарта вселенной',
					],
					wizard: [
						'ОНЛАЙН-ВСТРЕЧА: Арт-терапевтическая практика "Встреча с внутренним демоном"'
					],
					objective: [
						'Автопортрет',
						'Словарик автопортрета'
					],
					image: 'chapter1'
				},
				{
					name: 'Осмотр достопримечательностей',
					block: 'Блок 2',
					durationDreamer: '2 недели',
					description: '',
					dreamer: [
						'Почувствуй себя писателем',
						'Образы везде и всюду',
						'Генератор локаций',
						'Мудборд с анализом',
						'Схема сюжета',
						'МАСТЕРМАЙНД: Путь героя',
					],
					wizard: [
						'ОНЛАЙН-ВСТРЕЧА: Арт-терапевтическая практика "Безопасное место"'
					],
					objective: [
						'Глазами путешественника',
						'Портрет местности'
					],
					image: 'chapter2'
				},
				{
					name: 'Знакомство с местными жителями',
					block: 'Блок 3',
					durationDreamer: '1 неделя',
					description: '',
					dreamer: [
						'Атрибуты персонажа',
						'Генератор сюжета',
						'Главный герой',
						'МАСТЕРМАЙНД: Создание персонажа'
					],
					objective: [
						'Персонажи',
						'Лаборатория характера'
					],
					image: 'chapter3'
				},
				{
					name: 'Полет на облаке',
					block: 'Блок 4',
					durationDreamer: '1 неделя',
					description: '',
					dreamer: [
						'ВЕБИНАР: Карта мира',
						'ГАЙД: Название локаций',
						'Разработка сюжетной сцены',
					],
					wizard: [
						'ОНЛАЙН-ВСТРЕЧА: Арт-терапевтическая практика "Мой помощник"'
					],
					objective: [
						'Карта',
						'Слово Создателя'
					],
					image: 'chapter4'
				},
				{
					name: 'Разбор фотокарточек',
					block: 'Заключительный блок',
					durationDreamer: '5 дней',
					description: '',
					dreamer: [
						'МАСТЕР-КЛАСС: Организация вселенной',
						'ВЫПУСКНЫЕ Твоей Вселенной'
					],
					image: 'chapter5'
				}
			]
		}
	},
	created() {

	},
	mounted() {
		// 		const swiperEl = document.querySelector('swiper-container');
		// console.log(swiperEl);

		//   const params = {
		//     // array with CSS styles
		//     injectStyles: [
		//       `
		//       .swiper-pagination {
		// 		background: red;

		//         img {
		//           object-fit: cover;
		//           width: 1000%;
		//           height: 100%;
		//         }
		//       }
		//       `,
		//     ],
		//   };

		//   Object.assign(swiperEl, params);

		//   swiperEl.initialize();

	}
}
</script>

<template>
	<h2 v-if="heading" id="program">{{ heading }}</h2>
	<section class="program">


		<swiper-container init="false" :slides-per-view="1" :spaceBetween="30" :navigation="true" :breakpoints="{
			768: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			1400: {
				slidesPerView: 4
			},
			2200: {
				slidesPerView: 5
			}
		}">

			<swiper-slide v-for="item in programItems">
				<ProgramItem :item="item">
				</ProgramItem>
			</swiper-slide>
		</swiper-container>
	</section>
</template>

<style lang="scss" scoped>
.program {
	margin: var(--base-padding) auto;

	@media (min-width: 64rem) {
		margin: calc(var(--base-padding) * 2) auto;
	}
}

swiper-container {
	width: calc(100vw - var(--base-padding) * 2);
	margin-left: calc((100vw - var(--base-padding) * 2 - 100%) / (-2));
	width: 100vw;
	margin-left: calc((100vw - 100%) / (-2));
	padding: 0 calc(var(--base-padding));

	@media (min-width: 64rem) {
		padding: 0 calc(var(--base-padding) * 2);
	}
}

swiper-slide {
	display: flex;
	flex-direction: column;
	padding: calc(var(--base-padding) / 2);
	border: 2px solid var(--color-accent);
	border-radius: calc(var(--base-padding) / 2);
	overflow: hidden;

	@media (min-width: 64rem) {
		padding: var(--base-padding);
		border-radius: var(--base-padding);
	}
}
</style>