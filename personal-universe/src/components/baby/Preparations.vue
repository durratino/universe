<script>
import CloudinaryImage from '@/components/CloudinaryImage.vue';
import preparationsData from '@/assets/preparations.json';

export default {
	name: 'Preparations',
	components: {
		CloudinaryImage
	},
	data() {
		return {
			images: preparationsData,
			imageWidth2: window.innerWidth > 1920 ? 815 : Math.round(window.innerWidth / 18 * 8),
		};
	}
};
</script>

<template>
	<div class="preparations">
		<div v-for="(image, index) in images" :key="index" class="preparation">
			<CloudinaryImage :image="image.photo" :aspectRatio="image.aspectRatio" :width="imageWidth2" />
			<p class="preparation-caption">{{ image.caption }}</p>
		</div>
	</div>
</template>



<style scoped lang="scss">
.preparations {
	display: grid;
	grid-template-columns: repeat(18, 1fr);
	grid-template-rows: repeat(13, 1fr);
	gap: 1em;
}

.preparation {
	position: relative;

	&:nth-child(3) {
		grid-column: 1 / 7;
		grid-row: 1 / 5;
	}

	&:nth-child(5) {
		grid-column: 7 / 15;
		grid-row: 1 / 4;
	}

	&:nth-child(8) {
		grid-column: 15 / 19;
		grid-row: 1 / 4;
	}

	&:nth-child(1) {
		grid-column: 1 / 7;
		grid-row: 5 / 9;
	}

	&:nth-child(2) {
		grid-column: 7 / 12;
		grid-row: 4 / 9;
	}

	&:nth-child(7) {
		grid-column: 12 / 19;
		grid-row: 4 / 8;
	}

	&:nth-child(6) {
		grid-column: 1 / 12;
		grid-row: 9 / 13;
	}

	&:nth-child(4) {
		grid-column: 12 / 19;
		grid-row: 8 / 13;
	}

	&:nth-child(9) {
		display: none;
		grid-column: 15 / 19;
	}

	img {
		object-fit: cover;
		block-size: 100%;
		border-radius: .3em;
	}

	&-caption {
		position: absolute;
		inset-inline: 50%;
		transform: translateX(-50%);
		inset-block-end: 1em;
		inline-size: max-content;
		max-inline-size: calc(100% - 2em);
		padding: .2em .3em;
		border-radius: .3em;
		background-color: oklch(from var(--color-white) l c h / 0.7);
		font-size: .75em;
	}
}
</style>