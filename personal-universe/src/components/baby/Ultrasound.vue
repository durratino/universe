<script>
import CloudinaryImage from '@/components/CloudinaryImage.vue';
import ultrasoundData from '@/assets/ultrasound.json';

export default {
	name: 'Ultrasound',
	components: {
		CloudinaryImage
	},
	data() {
		const images = ultrasoundData.filter(item => item.photo);
		const currentMeasurements = ultrasoundData.find(item => !item.photo);

		return {
			images,
			currentMeasurements,
			imageWidth: window.innerWidth > 1920 ? 750 : window.innerWidth < 880 ? window.innerWidth : Math.round(window.innerWidth / 41 * 16),
		};
	}
};
</script>

<template>
	<div class="ultrasound">
		<div v-for="image in images" class="ultrasound-image">
			<CloudinaryImage :image="image.photo" :aspectRatio="image.photoRatio" :width="imageWidth" />
			<div class="ultrasound-image-info">
				<h4>{{ image.babyAge }}</h4>
				<p class="ultrasound-image-info-date">{{ image.date }}</p>
				<p><strong>{{ image.babySize }}см</strong> {{ image.babySizeMethod }}</p>
				<p v-if="image.babyWeight">весит <strong>{{ image.babyWeight }}г</strong></p>
			</div>
		</div>
		<div class="ultrasound-measurements">
			<h3>Последние измерения на УЗИ <span>{{ currentMeasurements.date }} — в {{ currentMeasurements.babyAge
					}}</span></h3>
			<p>
				<span>Вес: {{ currentMeasurements.babyWeight }}г</span>
				<span>Рост: {{ currentMeasurements.babySize }}см</span>
				<span>Предполагаемая дата рождения: 9 февраля 2025</span>
			</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
.ultrasound {
	display: grid;
	gap: 1em;

	@container (min-width: 48rem) {
		grid-template-columns: repeat(41, 1fr);
	}

	&-image {
		position: relative;

		&:first-child {
			@container (min-width: 48rem) {
				grid-column: 1 / 17;
			}
		}

		&:nth-child(2) {
			@container (min-width: 48rem) {
				grid-column: 17 / 26;
			}
		}

		&:nth-child(3) {
			@container (min-width: 48rem) {
				grid-column: 26 / 42;
			}
		}

		img {
			inline-size: 100%;
			block-size: 100%;
			object-fit: cover;
			border-radius: .3em;
		}

		&-info {
			h4 {
				position: absolute;
				// inset-block-start: .7em;
				// inset-inline-start: 50%;
				// transform: translateX(-50%);
				inset-block-end: calc(1.5em + 1lh);
				inset-inline-end: .9em;
				inline-size: max-content;
				margin: 0;
				padding: .2em .3em;
				border-radius: .3em;
				background-color: oklch(from var(--color-white) l c h / 0.9);
				line-height: 1;
				font-weight: bold;

				@container (min-width: 48rem) {
					inset-inline-end: .75em;
				}
			}

			p {
				position: absolute;
				margin: 0;
				padding: .2em .3em;
				border-radius: .3em;
				inline-size: max-content;
				max-width: calc(100% - 2em);
				background-color: oklch(from var(--color-white) l c h / 0.7);
				font-family: 'Neucha', sans-serif;
				font-size: .9em;

				@container (min-width: 48rem) {
					font-size: .75em;
				}

				&:nth-of-type(1) {
					inset-block-end: 1em;
					inset-inline-end: 1em;
				}

				&:nth-of-type(2) {
					inset-block-start: 63%;
					inset-inline-end: 2em;

					.ultrasound-image:nth-child(2) & {
						inset-block-start: 29%;
						inset-inline-end: unset;
						inset-inline-start: 50%;
						transform: translateX(-50%);
					}

					.ultrasound-image:nth-child(3) & {
						inset-block-start: unset;
						inset-block-end: calc(3em + 1lh);
						inset-inline-end: unset;
						inset-inline-start: 2em;
					}
				}

				&:nth-of-type(3) {
					inset-block-end: 2em;
					inset-inline-start: 2em;
				}
			}
		}
	}

	&-measurements {
		@container (min-width: 48rem) {
			grid-column: span 41;
		}

		h3 {
			display: flex;
			flex-direction: column;

			@container (min-width: 48rem) {
				flex-direction: row;
			}

			span {
				margin-block-start: .5em;
				font-size: .55em;

				@container (min-width: 48rem) {
					margin-block: 0;
					margin-inline-start: auto;
					font-size: .75em;
				}
			}
		}

		p {
			display: flex;
			flex-direction: column;
			gap: 1em;
			margin: 0;
			font-size: 1.5em;

			@container (min-width: 48rem) {
				flex-direction: row;
			}
		}
	}
}
</style>
