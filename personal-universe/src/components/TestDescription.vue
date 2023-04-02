<template>
	<section>
		<h1>Из какой ты вселенной?</h1>
		<p>Ты когда-нибудь чувствовал, что твой истинный дом находится в&nbsp;другом мире?</p>
		<p>Пройди этот тест, чтобы узнать, из&nbsp;какой вселенной ты родом. Всего несколько вопросов помогут тебе понять 
			свое скрытое происхождение и&nbsp;открыть фантастический мир, который действительно созвучен твоей душе.</p>
		<button @click="$emit('testStarted')">Начать тест</button>
	</section>
</template>

<style lang="scss" scoped>
section {
	max-width: 42rem;
	margin: auto;
	text-align: center;
	font-size: 1.5rem;
}</style>