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
			currentMeasurements
		};
	}
};
</script>

<template>
	<div class="ultrasound">
		<div v-for="image in images" class="ultrasound-image">
			<CloudinaryImage :image="image.photo" :aspectRatio="image.photoRatio" />
			<div class="ultrasound-image-info">
				<h4>{{ image.babyAge }}</h4>
				<p class="ultrasound-image-info-date">{{ image.date }}</p>
				<p><strong>{{ image.babySize }}см</strong> {{ image.babySizeMethod }}</p>
				<p v-if="image.babyWeight">весит <strong>{{ image.babyWeight }}г</strong></p>
			</div>
		</div>
		<div class="ultrasound-measurements">
			<h3>Последние измерения на УЗИ <span>{{ currentMeasurements.date }} — в {{ currentMeasurements.babyAge }}</span></h3>
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
	grid-template-columns: repeat(41, 1fr);
	gap: 1em;

	&-image {
		position: relative;

		&:first-child {
			grid-column: 1 / 17;
		}

		&:nth-child(2) {
			grid-column: 17 / 26;
		}

		&:nth-child(3) {
			grid-column: 26 / 42;
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
				// inset-block-start: .75em;
				// inset-inline-start: 50%;
				// transform: translateX(-50%);
				inset-block-end: calc(1.5em + 1lh);
				inset-inline-end: .75em;
				inline-size: max-content;
				margin: 0;
				padding: .2em .3em;
				border-radius: .3em;
				background-color: oklch(from var(--color-white) l c h / 0.9);
				line-height: 1;
				font-weight: bold;
			}

			p {
				position: absolute;
				margin: 0;
				padding: .2em .3em;
				border-radius: .3em;
				inline-size: max-content;
				max-width: calc(100% - 2em);
				background-color: oklch(from var(--color-white) l c h / 0.7);
				font-size: .75em;

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
		grid-column: span 41;

		h3 {
			display: flex;

			span {
				margin-inline-start: auto;
				font-size: .75em
			}
		}

		p {
			display: flex;
			gap: 1em;
			margin: 0;
			font-size: 1.5em;

			&:nth-of-type(1) {
				
			}

			&:nth-of-type(2), 
			&:nth-of-type(3) {
			
			}
		}
	}
}
</style>
