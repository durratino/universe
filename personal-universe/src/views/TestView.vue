<script>
import TestDescription from '../components/TestDescription.vue';
import Question from '../components/Question.vue';
import Result from '../components/Result.vue';
import {questions} from '../assets/questions.json';
import {resultsTitles} from '../assets/results.json';
import router from '../router';


export default {
	data() {
		return {
			questions,
			isTestActive: false,
			currentQuestionIndex: 0,
			responses: [],
			userResult: null
		}
	},
	components: {
		TestDescription,
		Question,
		Result
	},
	mounted() {
		
	},
	methods: {
		setCurrentQuestion() {
			return questions[this.currentQuestionIndex];
		},
		startTest() {
			this.isTestActive = true;
		},
		goToNextQuestion(i, a) {
			this.responses.push(a);
			this.currentQuestionIndex++;
			window.scrollTo(0,0);

			if (this.currentQuestionIndex > 3 - 1) {
				this.userResult = this.getResult();
				this.$router.push('result/' + this.userResult);
				setTimeout(() => {
					location.reload();
				}, 10)
			}
		},
		goToPrevQuestion(i) {
			if (this.currentQuestionIndex) {
				this.responses.pop();
				this.currentQuestionIndex--;
				return;
			}

			this.isTestActive = false;
		},
		getResult() {
			const responsesCount = {};
			this.responses.forEach(response => {
				if (!responsesCount[response]) responsesCount[response] = 1;
				else responsesCount[response]++;
			});

			const resSlug = Object.keys(responsesCount).reduce((a, b) => responsesCount[a] > responsesCount[b] ? a : b) || 'res12';		
			return responsesCount[resSlug] > 2 ? resultsTitles[resSlug] : 'your-own';
		}
	}
}
</script>

<template>
	<TestDescription
		v-if="!isTestActive && !currentQuestionIndex"
		@testStarted="startTest" 
	/>

	<template v-for="(question, index) in questions" >
		<!-- TODO: show last question + result link -->
		<Question 
			v-if="isTestActive && index === currentQuestionIndex"
			:key="index"
			:index="index" 
			:answers="question.answers" 
			@answerClicked="goToNextQuestion"
			@backButtonClicked="goToPrevQuestion"
		>
			{{ question.question }}
		</Question>
	</template>
</template>