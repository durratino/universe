<script>
import CloudinaryImage from './CloudinaryImage.vue';

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
    components: { CloudinaryImage }
}
</script>

<template>
	<article class="person">

		<CloudinaryImage :image="image" width="300" height="300" />

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
	flex-shrink: 0;

	@media (min-width: 48rem) {
		width: 300px;
		max-width: calc(50% - var(--base-padding) / 2);
	}

	img {
		width: 100%;
		max-width: 200px;
		border-radius: var(--base-padding);
		filter: grayscale(0.1);

		@media (min-width: 48rem) {
			max-width: 300px;
		}
	}

	h4 {
		font-family: 'El Messiri', sans-serif;
		font-size: 1.5em;
		margin: .8rem 0 0;
		text-align: center;
	}

	h5 {
		width: 100%;
		margin: .4rem 0;
		font-size: 1em;
		font-family: 'El Messiri', sans-serif;
	}

	p {
		margin: 0;
	}
}
</style>