<script>
export default {
	props: {
		index: {
			type: Number,
			// required: true
		},
		answers: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			questionId: 'q' + this.index
		}
	},
	computed: {
		answersRandomized() {
			this.shuffleArray(this.answers);
			return this.answers;
		}
	},
	methods: {
		addAnswer(i, a) {
			this.$emit('answerClicked', i, a)
		},
		goBack(i) {
			this.$emit('backButtonClicked', i)
		},
		shuffleArray(array) {
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
		}
	}
}
</script>

<template>
	<h3>
		<slot></slot>
	</h3>

	<nav>
		<span class="link" @click="goBack(index)">
			←
		</span>
		<span class="step">{{ index + 1 }} / 10</span>
	</nav>

	<label v-for="answer in answersRandomized">
		<input type="radio" :name="questionId" :value="answer.result" @change="addAnswer(index, answer.result)">
		{{ answer.text }}
	</label>
</template>

<style lang="scss" scoped>
nav {
	position: absolute;
	left: 0;
	top: calc(-1 * var(--base-padding));
	display: flex;
	align-items: center;

	@media (min-width: 64rem) {
		top: calc(-1 * var(--base-padding) / 2);
	}
}
.link {
	font-size: 2em;

	@media (min-width: 64rem) {
		position: absolute;
		right: calc(100% + 20px);
		top: var(--base-padding);
	}
}

.step {
	font-family: 'El Messiri', serif;
	color: rgba(var(--color-text-rgb), .6);

	&::first-letter {
		color: rgba(var(--color-text-rgb), .9);
	}
}

label {
	display: block;
	padding: .25em .5em;
	border: 1px solid currentColor;
	border-radius: .2rem;
	opacity: .75;
	cursor: pointer;
	transition: all 1.3s cubic-bezier(0.075, 0.82, 0.165, 1);

	&:hover {
		border-color: var(--color-accent-bright);
		opacity: 1;
	}

	@media (min-width: 48rem) {
		padding: .5em 1em;
	}
}


input[type=radio] {
	position: absolute;
	opacity: 0;
	visibility: hidden;
}
</style>