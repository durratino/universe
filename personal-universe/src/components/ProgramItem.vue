<script>
export default {
	props: {
		item: {
			type: Object,
			required: true
		},
	},
	computed: {
		imageSrc() {
			try {
				const url = new URL(`../assets/images/${this.item.image}.jpg`, import.meta.url).href;
				return url;
			} catch (error) {
				console.error(error)
				return '';
			}
		}
	}
}
</script>

<template>
	<header>
		<img :src="imageSrc" loading="lazy">
		<h3>
			<span>{{ item.block }}:</span>
			{{ item.name }}
		</h3>
		<h4 class="program-subtitle">
			<span v-if="!item.durationWizard">{{ item.durationDreamer }}</span>
			<span v-if="item.durationWizard">Волшебник: {{ item.durationDreamer }}</span>
			<span v-if="item.durationWizard">Искатель: {{ item.durationWizard }}</span>
		</h4>
	</header>
	<div class="program-text">
		<p>
			{{ item.description }}
		</p>
		<slot>

		</slot>

		<ul>
			<li v-for="exercise in item.dreamer" class="highlight">{{ exercise }}</li>
		</ul>
		<h4 v-if="item.objective && item.objective.length">Основные задания:</h4>
		<ul v-if="item.objective && item.objective.length">
			<li v-for="exercise in item.objective" class="highlight">{{ exercise }}</li>
		</ul>
		<h4 v-if="item.wizard && item.wizard.length">Для тарифа Искатель:</h4>
		<ul v-if="item.wizard && item.wizard.length">
			<li v-for="exercise in item.wizard">{{ exercise }}</li>
		</ul>

	</div>
</template>

<style lang="scss" scoped>
header {
	position: relative;
	padding: 0;
	padding-bottom: 1rem;
	text-align: center;

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100px;
		border: dotted var(--color-accent);
		border-width: 3px 0 0 0;
	}

	img {
		max-width: calc(100% + var(--base-padding) * 2);
		margin: calc(-1 * var(--base-padding)) calc(-1 * var(--base-padding)) var(--base-padding);
	}
}

h3 {
	margin: 0;
	// text-align: left;
	color: var(--color-accent);
	hyphens: auto;
	font-size: 1.1em;

	span {
		display: block;
		font-size: .8em;
		color: var(--color-text);
	}
}

h4 {
	margin-top: 2rem;
	font-family: 'El Messiri', serif;
	font-weight: normal;
	font-size: .8em;
}

.program {
	&-subtitle {
		margin: .5rem 0 0;

		span {
			display: block;
		}
	}
}

ul {
	margin-top: .5rem;
}
</style>