<script>
export default {
	props: {
		name: {
			type: String,
			required: true
		},
		position: {
			type: String
		},
		description: {
			type: String
		},
		image: {
			type: String
		}
	},
	computed: {
		imageSrc() {
			console.log('hello')
			try {
				const url = new URL(`../assets/images/${this.image}.jpg`, import.meta.url).href;
				console.log(url)
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
	<article class="person">

		<img :src="imageSrc">
		<h4>
			{{ name }}
		</h4>
		<h5 v-if="position">
			{{ position }}
		</h5>
		<p v-if="description">
			{{ description }}
		</p>
		<slot></slot>
	</article>
</template>

<style lang="scss" scoped>
.person {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 300px;
	max-width: calc(50% - var(--base-padding) / 2);
	font-size: 1rem;


	img {
		width: 100%;
		max-width: 300px;
		border-radius: var(--base-padding);
		filter: grayscale(0.1);
	}

	h4 {
		font-family: 'El Messiri', sans-serif;
		font-size: 1.5em;
		margin: .8rem 0 0;
		text-align: center;
	}

	h5 {
		margin: .4rem 0;
		font-size: 1em;
		font-family: 'El Messiri', sans-serif;
		// text-align: center;
	}

	p {
		margin: 0;
	}
}
</style>