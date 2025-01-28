<script>
import persons from '@/assets/persons.json';
import CloudinaryImage from '@/components/CloudinaryImage.vue';

export default {
	name: 'Parents',
	components: {
		CloudinaryImage
	},
	data() {
		return {
			parents: persons.persons,
			imageWidth: window.innerWidth > 1920 ? 502 : window.innerWidth < 880 ? window.innerWidth : Math.round(window.innerWidth / 18 * 5),
			imageWidth2: window.innerWidth > 1920 ? 815 : window.innerWidth < 880 ? window.innerWidth : Math.round(window.innerWidth / 18 * 8),
			imageWidth3: window.innerWidth > 1920 ? 711 : window.innerWidth < 880 ? window.innerWidth : Math.round(window.innerWidth / 18 * 7),
			imageWidth4: window.innerWidth > 1920 ? 398 : window.innerWidth < 880 ? window.innerWidth : Math.round(window.innerWidth / 18 * 4),
		};
	},
	mounted() {
		this.showParentInfo();
		window.addEventListener('scroll', this.showParentInfo);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.showParentInfo);
	},
	methods: {
		showParentInfo() {
			const parents = document.querySelectorAll('.parent');
			const threshold = window.innerHeight * 0.05;
			const isMobile = window.innerWidth < 880;
			parents.forEach(parent => {
				const rect = parent.getBoundingClientRect();
				if (isMobile) {
					if (rect.bottom >= threshold && rect.bottom <= window.innerHeight) {
						parent.classList.add('is-active');
					} else {
						parent.classList.remove('is-active');
					}
				} else {
					if (rect.top >= threshold && rect.bottom <= window.innerHeight - threshold) {
						parent.classList.add('is-active');
					} else {
						parent.classList.remove('is-active');
					}
				}
			});
		}
	}
};
</script>

<template>
	<div class="parents">
		<div class="parent" v-for="parent in parents" :key="parent.id">
			<CloudinaryImage :image="parent.photo" :width="imageWidth" :aspectRatio="3 / 4" class="parent-photo" />
			<CloudinaryImage :image="parent.photo_baby" :width="imageWidth" :aspectRatio="3 / 4"
				class="parent-photo parent-photo_baby" />
			<div class="parent-details">
				<h4>{{ parent.name }}</h4>
				<p>при&nbsp;рождении: <strong>{{ parent.height }}см</strong> и <strong>{{ parent.weight }}г</strong></p>
				<p><strong>{{ parent.eyeColor }}</strong> глаза</p>
				<p><strong>{{ parent.hairColor }}</strong> волосы</p>
			</div>
		</div>
		<div class="photo">
			<CloudinaryImage image="parents4" :width="imageWidth2" :aspectRatio="9 / 8" />
		</div>
		<div class="photo">
			<CloudinaryImage image="oly_baby" :width="imageWidth3" :aspectRatio="0.89" />
		</div>
		<div class="photo">
			<CloudinaryImage image="parents2" :width="imageWidth4" :aspectRatio="8 / 16" />
		</div>
		<div class="photo">
			<CloudinaryImage image="seva_baby" :width="imageWidth3" :aspectRatio="0.89" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.parents {
	display: grid;

	grid-template-rows: auto auto;
	gap: 1em;

	@container (min-width: 48rem) {
		grid-template-columns: repeat(18, 1fr);
	}

	img {
		inline-size: 100%;
		block-size: 100%;
		object-fit: cover;
		border-radius: .3em;
	}
}

.parent {
	position: relative;

	&:nth-child(1) {
		@container (min-width: 48rem) {
			grid-column: 1 / 6;

			&.is-active {
				.parent-details p {
					&:nth-of-type(1) {
						transition-delay: .6s;
					}

					&:nth-of-type(2) {
						transition-delay: .4s;
					}

					&:nth-of-type(3) {
						transition-delay: .1s;
					}
				}
			}


		}
	}

	&:nth-child(2) {
		@container (min-width: 48rem) {
			grid-column: 14 / 19;

			&.is-active {
				.parent-details p {
					&:nth-of-type(1) {
						transition-delay: 1.2s;
					}

					&:nth-of-type(2) {
						transition-delay: .9s;
					}

					&:nth-of-type(3) {
						transition-delay: .7s;
					}
				}

				.parent-photo_baby  {
					transition-delay: .6s;
				}
			}
		}
	}

	&:hover,
	&.is-active {

		.parent-photo_baby,
		.parent-details p {
			opacity: 1;
		}

		.parent-details p {
			&:nth-of-type(1) {
				transition-delay: 1.2s;
			}

			&:nth-of-type(2) {
				transition-delay: .7s;
			}

			&:nth-of-type(3) {
				transition-delay: .3s;
			}
		}
	}
}

.parent-photo {
	width: 100%;
	height: auto;

	&_baby {
		position: absolute;
		inset-inline: 0;
		inset-block: 0;
		opacity: 0;
		transition: opacity cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s;
	}
}

.parent-details {
	inline-size: 100%;
	line-height: 1;

	h4 {
		position: absolute;
		inset-block-start: 1em;
		inset-inline-end: 1em;
		margin: 0;
		padding: .2em .3em;
		border-radius: .3em;
		background-color: oklch(from var(--color-white) l c h / 0.9);
		line-height: 1;
		font-weight: bold;

		.parent:nth-child(2) & {
			inset-inline-end: unset;
			inset-inline-start: 1em;
		}
	}

	p {
		position: absolute;
		opacity: 0;
		margin: 0;
		padding: .2em .3em;
		border-radius: .3em;
		inline-size: min-content;
		max-width: calc(100% - 4em);
		background-color: oklch(from var(--color-white) l c h / 0.7);
		transition: opacity cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s;
		font-family: 'Neucha', sans-serif;
		font-size: .9em;

		@container (min-width: 48rem) {
			font-size: .75em;
		}

		&:nth-of-type(1) {
			inset-inline-start: 50%;
			transform: translateX(-50%);
			inset-block-end: 2em;
		}

		&:nth-of-type(2) {
			inset-inline-end: 4em;
			inset-block-start: 40%;
			transform: translateY(-50%);

			.parent:nth-child(2) & {
				inset-inline-start: 2em;
				inset-block-start: 48%;
			}
		}

		&:nth-of-type(3) {
			inset-inline-start: 1em;
			inset-block-start: 3em;

			.parent:nth-child(2) & {
				inset-inline-start: unset;
				inset-inline-end: 1em;
			}
		}
	}
}

.photo {
	&:nth-child(3) {
		grid-row: 1;

		@container (min-width: 48rem) {
			grid-row: 1;
			grid-column: 6 / 14;
		}
	}

	&:nth-child(4) {
		@container (min-width: 48rem) {
			grid-column: 1 / 8;
		}
	}

	&:nth-child(5) {
		grid-row: 4;

		@container (min-width: 48rem) {
			grid-row: 2;
			grid-column: 8 / 12;
		}
	}

	&:nth-child(6) {
		grid-row: 5;

		@container (min-width: 48rem) {
			grid-row: 2;
			grid-column: 12 / 19;
		}
	}
}
</style>
