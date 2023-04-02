<script>
import {results} from '../assets/results.json';

export default {
	data() {
		return {
			result: null
		}
	},

	mounted() {
		const title = this.$route.params.title;
		console.log(results);
		this.result = results.find(res => res.title === title);
		console.log(this.result);
	},
	
	computed: {
		imageSrc() {
			console.log(this.result.image);
			const url = new URL(`../assets/images/${this.result.image}.jpg`, import.meta.url).href
			console.log(url);
			return url;
		}
  }
}
</script>

<template>
	<article v-if="result">
		<h1>{{ result.titleStr }}</h1>

		<figure v-if="result.image">
			<img :src="imageSrc">
			<figcaption><a v-if="result.url" :href="result.url" target="_blank">{{ result.urlText }}</a></figcaption>
		</figure>
	
		<div class="description" v-html="result.description"></div>

		<div class="links">
			<span class="links-info">Поделись своим результатом</span>
			<div class="sharethis-inline-share-buttons"></div>
			<a href="https://t.me/apersonaluniverse" class="button" target="_blank">Подпишись на канал твоей вселенной</a>
		</div>
	</article>
	
</template>

<style lang="scss" scoped>
	figure {
		width: 100vw;
		max-height: 100vh;
    	margin-left: calc((100vw - 100%)/(-2));
		aspect-ratio: 1.33;

		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}

		figcaption {
			font-family: 'El Messiri', serif;
			padding: 0 calc((100vw - min(100vw - var(--base-padding) * 2, 60rem - var(--base-padding) * 2))/(2));
			font-size: .8em;
			text-align: right;
		}

		.sharethis-inline-share-buttons {
			div {
				display: inline-block!important;
			}
		}
	}
</style>