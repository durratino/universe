<script>
export default {
	props: {
		name: {
			type: String,
			required: true
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
			<p>
				{{ description }}
			</p>
		
	</article>
</template>

<style lang="scss" scoped>
.person {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 300px;
	max-width: calc(50% - var(--base-padding) / 2);
	text-align: center;

	img {
		width: 100%;
		max-width: 300px;
		border-radius: var(--base-padding);
	}

	h4 {
		font-family: 'El Messiri', sans-serif;
		font-size: 1.3em;
		margin: .8rem 0 0;
	}

	p {
		margin: 0;
	}
}
</style>