<script>
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/firebase';
import CloudinaryImage from '../CloudinaryImage.vue';
import Field from './Field.vue';

export default {
	props: {
	},
	data() {
		return {
			guessing: {
				name: '',
				gender: 'male',
				height: undefined,
				weight: undefined,
				eyeColor: '',
				hairColor: '',
				birthDate: undefined,
				userName: '',
				userContact: '',
				userMessage: '',
				guessingDate: null
			},
			isFormLocked: false
		}
	},
	methods: {
		async sendGuessing() {
			if (!this.validateGuessing()) {
				console.log('Заполните все поля');
				return;
			}

			this.guessing.guessingDate = new Date();

			this.saveGuessingToCookie();
			console.log('sending...', this.guessing);

			const docRef = await addDoc(collection(db, "guessings"), this.guessing);
			console.log("Document written with ID: ", docRef.id);
		},

		validateGuessing() {
			for (const key in this.guessing) {
				if (key !== 'userMessage' && (this.guessing[key] === '' || this.guessing[key] === undefined)) {
					return false;
				}
			}
			return true;
		},

		saveGuessingToCookie() {
			const guessingString = JSON.stringify(this.guessing);
			document.cookie = `guessing=${guessingString}; path=/; max-age=31536000`; // Cookie expires in 1 year
		},

		loadGuessingFromCookie() {
			const name = "guessing=";
			const decodedCookie = decodeURIComponent(document.cookie);
			const cookieArray = decodedCookie.split(';');

			for (const cookie of cookieArray) {
				const trimmedCookie = cookie.trim();
				if (trimmedCookie.indexOf(name) === 0) {
					const guessingString = trimmedCookie.substring(name.length, trimmedCookie.length);
					this.guessing = JSON.parse(guessingString);
					this.isFormLocked = true;
					break;
				}
			}
		},

		// set textareas to autogrow on user input
		initTextarea() {
			const textarea = document.querySelector('textarea');

			textarea.rows = 1;
			textarea.addEventListener('input', () => {
				textarea.parentElement.dataset.replicatedValue = textarea.value;
			});
		}
	},
	computed: {
		imageSrc() {
			try {
				const url = new URL(`../assets/images/baby.jpg`, import.meta.url).href;
				return url;
			} catch (error) {
				console.error(error)
				return '';
			}
		}
	},
	mounted() {
		this.initTextarea();
		this.loadGuessingFromCookie();
	},
	components: {
		CloudinaryImage,
		Field
	}
}
</script>

<template>
	<form @submit.prevent="sendGuessing">
		<article>
			<p v-if="isFormLocked">
				Кажется, твои ответы уже есть в&nbsp;нашей копилочке предсказаний. 
				Можешь еще раз посмотреть на&nbsp;них и&nbsp;зменить при&nbsp;желании :)
			</p>
			<picture>
				<CloudinaryImage image="baby" :width=300 :height=300 />
			</picture>
			<section class="info">
				<div class="switch">
					<label><input type="radio" name="gender" value="male" v-model="guessing.gender"
							:disabled="isFormLocked"><span>мальчик</span></label>
					<label><input type="radio" name="gender" value="female" v-model="guessing.gender"
							:disabled="isFormLocked"><span>девочка</span></label>
				</div>
				<label><span>Имя</span><input type="text" v-model="guessing.name" :disabled="isFormLocked"></label>
				<label><span>Дата и время рождения</span><input type="datetime-local" v-model="guessing.birthDate"
						:disabled="isFormLocked"></label>
				<label><span>Рост при рождении (см)</span><input type="number" min="20" max="100"
						v-model="guessing.height" :disabled="isFormLocked"></label>
				<label><span>Вес при рождении (г)</span><input type="number" min="1000" max="10000" step="5"
						v-model="guessing.weight" :disabled="isFormLocked"></label>
				<label><span>Цвет волос</span><input type="text" v-model="guessing.hairColor"
						:disabled="isFormLocked"></label>
				<label><span>Цвет глаз</span><input type="text" v-model="guessing.eyeColor"
						:disabled="isFormLocked"></label>
			</section>
			<p v-if="!isFormLocked">
				Заполни информацию о себе, чтобы мы знали, кто наша новая Ванга и&nbsp;могли
				связаться с&nbsp;тобой, когда малыш родится!
			</p>
			<label><span>Твое имя</span><input type="text" v-model="guessing.userName" :disabled="isFormLocked"></label>
			<label><span>Контакт (телеграм / email)</span><input type="text" v-model="guessing.userContact"
					:disabled="isFormLocked"></label>
			<label><span>Вопросы, напутствия, пожелания нам, малышу или миру в целом :)</span>
				<div><textarea v-model="guessing.userMessage" rows="1" :disabled="isFormLocked"></textarea></div>
			</label>
			<input v-if="!isFormLocked" type="submit" value="Отправить ответы" class="button">
			<button v-else type="button" @click="isFormLocked = false" class="button">Изменить ответы</button>
		</article>
	</form>


</template>

<style lang="scss" scoped>
article {
	display: grid;
	gap: 1.5em 2em;
	max-inline-size: 50rem;
	margin: auto;
	padding: 2em;
	border-radius: 1em;
	background-color: var(--color-white);

	@container (min-width: 48rem) {
		grid-template-columns: 300px 1fr;
	}

	&>p {
		grid-column: span 2;
		margin-block-start: 0;
	}

	img {
		border-radius: .3em;
	}
}

.info {
	display: grid;
	gap: .7em;
}

label {
	display: flex;
	align-items: center;
	gap: .5em;
	margin: 0;

	span {
		inset-block-start: 0;
		z-index: 1;
		font-size: .75em;
	}

	&:has(textarea) {
		flex-direction: column;
		align-items: stretch;
		grid-column: span 2;

		div {
			display: grid;
			line-height: normal;

			&::after {
				content: attr(data-replicated-value) " ";
				white-space: pre-wrap;
				visibility: hidden;
			}

			textarea {
				resize: none;
				overflow: hidden;
			}

			textarea,
			&::after {
				font: inherit;
				padding: .1em 0;

				/* Place on top of each other */
				grid-area: 1 / 1 / 2 / 2;
			}
		}
	}

	input,
	textarea {
		padding: 0;
		accent-color: var(--color-accent);
		font: inherit;
		color: var(--color-violet);

		&:focus {
			outline: none;
			border-color: var(--color-accent);
		}

		&:where(:not([type=radio])) {
			flex-grow: 1;
			border-width: 0 0 1px 0;
		}

		&[disabled] {
			background-color: transparent;
			color: oklch(from var(--color-violet) l c h / 0.5);
			border: 0;
		}
	}
}

.switch {
	display: flex;
	margin-block-end: .3em;

	label {
		flex-grow: 1;
		display: flex;
		align-items: center;

		&:not(:has([disabled])) {
			cursor: pointer;

			@media (hover: hover) {
				&:hover {
					background-color: oklch(from var(--color-accent) l c h / 0.1);
					border-color: var(--color-accent);
					color: var(--color-accent);
				}
			}
		}


		&:nth-child(1) {
			span {
				padding-inline-end: 1em;
				border-radius: .3em 0 0 .3em;
			}
		}

		&:nth-child(2) {
			span {
				padding-inline-start: 1em;
				border-radius: 0 .3em .3em 0;
			}
		}

		input {
			position: absolute;
			opacity: 0;

			&:checked+span {
				background-color: var(--color-accent);
				color: var(--color-white);
			}
		}

		span {
			inline-size: 100%;
			padding: .2em 1em;
			border: 1px solid var(--color-accent);
			text-align: center;
			font-size: .9em;
		}
	}
}

.button {
	grid-column: span 2;
	padding: 0;
}
</style>