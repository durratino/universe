<script>
import CloudinaryImage from '../CloudinaryImage.vue';
import Field from './Field.vue';

export default {
	props: {
		person: {
			type: Object,
			required: true
		},
		isEditable: {
			type: Boolean
		}
	},
	computed: {
		imageSrc() {
			try {
				const url = new URL(`../assets/images/${this.person.photo}.jpg`, import.meta.url).href;
				return url;
			} catch (error) {
				console.error(error)
				return '';
			}
		}
	},
	components: {
		CloudinaryImage,
		Field
	}
}
</script>

<template>
	<article>
		<picture>
			<CloudinaryImage :image="person.photo" :width=300 :height=300 />
		</picture>
		<section class="info">
			<form action="">
				<template v-for="stat in person.stats">
					<Field :name="stat.stat" :value="stat.value" :isEditable="isEditable">
					</Field>
				</template>
				<input type="submit">
			</form>
		</section>

	</article>


</template>

<style lang="scss" scoped>
article {
	display: grid;
	gap: 2em;

	@container (min-width: 48rem) {
		grid-template-columns: 300px 1fr;
	}
}
</style>