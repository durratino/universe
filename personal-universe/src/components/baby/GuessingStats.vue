<script>
import { db } from '@/firebase';
import { average, collection, getDocs } from 'firebase/firestore';

export default {
	name: 'GuessingStats',
	data() {
		return {
			loading: true,
			guesses: [],
			mostCommonGender: null,
			mostCommonEyeColor: null,
			mostCommonHairColor: null,
			averageHeight: null,
			averageWeight: null,
			averageDOB: null,
			mostCommonName: null,
		};
	},
	methods: {
		calculateStats() {
			if (this.guesses.length === 0) return;

			const findMostCommon = (key) => {
				const frequency = {};
				let maxFreq = 0;
				let mostCommon = null;
				this.guesses.forEach((guess) => {
					const value = guess[key];
					frequency[value] = (frequency[value] || 0) + 1;
					if (frequency[value] > maxFreq) {
						maxFreq = frequency[value];
						mostCommon = value;
					}
				});
				return mostCommon;
			};

			const calculateAverage = (key) => {
				const total = this.guesses.reduce((acc, guess) => acc + guess[key], 0);
				return (total / this.guesses.length).toFixed(2);
			};

			this.mostCommonEyeColor = findMostCommon('eyeColor');
			this.mostCommonGender = findMostCommon('gender') === 'male' ? 'мальчик' : 'девочка';
			this.mostCommonName = findMostCommon('name');
			this.mostCommonHairColor = findMostCommon('hairColor');

			// Calculate average height
			this.averageHeight = calculateAverage('height');

			// Calculate average weight
			this.averageWeight = calculateAverage('weight');

			// Calculate average DOB
			const totalDOB = this.guesses.reduce((acc, guess) => acc + new Date(guess.birthDate).getTime(), 0);
			this.averageDOB = new Date(totalDOB / this.guesses.length).toLocaleString();
		},
	},
	async created() {
		try {
			const querySnapshot = await getDocs(collection(db, 'guessings'));
			const userGuesses = {};
			querySnapshot.forEach((doc) => {
				const data = doc.data();
				if (data.test !== true) {
					const userContact = data.userContact;
					if (!userGuesses[userContact] || new Date(data.guessingDate) > new Date(userGuesses[userContact].guessingDate)) {
						userGuesses[userContact] = data;
					}
				}
			});
			this.guesses = Object.values(userGuesses);
			this.calculateStats();
		} catch (error) {
			console.error('Error fetching guessings:', error);
		} finally {
			this.loading = false;
		}
	},
};
</script>

<template>
	<h5>Вот что мы узнали из ваших ответов:</h5>
	<article>
		<div v-if="loading">Загрузка...</div>
		<div v-else>
			<p>Большинство считает, что у нас родится <strong>{{ mostCommonGender }}</strong></p>
			<p>Звать нашего малыша будут <strong>{{ mostCommonName }}</strong></p>
			<p>Чаще всего люди думают, что у малыша будут <strong>{{ mostCommonEyeColor }}</strong> глаза и <strong>{{
				mostCommonHairColor }}</strong> волосы</p>
			<p>Средний рост по всем ответам: <strong>{{ averageHeight }}</strong> см</p>
			<p>Средний вес: <strong>{{ averageWeight }}</strong> г</p>
			<p>А родится малыш, если посчитать среднее по всем ответам, <strong>{{ averageDOB }}</strong></p>
		</div>
	</article>
</template>

<style scoped>
h5 {
	margin: 0;
	font-size: 3em;
	text-wrap: balance;
	font-family: 'Neucha', sans-serif;
	font-weight: bold;
	letter-spacing: .1em;
}
</style>