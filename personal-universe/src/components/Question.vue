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
			console.log('shufflibng')
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
		}
	}
}
</script>

<template>
	<span class="link" @click="goBack(index)">
		←
	</span>

	<h3>
		<slot></slot>
	</h3>

	<label v-for="answer in answersRandomized">
		<input type="radio" :name="questionId" :value="answer.result" @change="addAnswer(index, answer.result)">
		{{ answer.text }}
	</label>
</template>

<style lang="scss" scoped>
.link {
	position: absolute;
	top: calc(-1 * var(--base-padding));
	left: 0;
	font-size: 2em;

	@media (min-width: 64rem) {
    	right: calc(100% + 20px);
		left: auto;
		top: var(--base-padding);
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