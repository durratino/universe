<script>
import { nextTick } from 'vue';
import { results } from '../assets/results.json';

export default {
	data() {
		return {
			result: null
		}
	},

	head() {
		return {
			title: this.result ? this.result.titleStr : 'Подсчитываем результат...',
			meta: [ 
				{ name: 'og:title', content: this.result ? this.result.shareTitle : 'Подсчитываем результат...' }, 
				{ name: 'og:image:secure_url', content: this.imageSrc ? this.imageSrc : ''},
				{ name: 'og:site_name', content: 'Твоя вселенная'},
			],
		}
	},

	mounted() {
		const title = this.$route.params.title;
		this.result = results.find(res => res.title === title);
		nextTick(() => {
			const article = document.querySelector('article');
			this.loadShareScript().then(() => {
				article.classList.add('is-active');
			});

			setTimeout(() => {if (!article.classList.contains('is-active')) article.classList.add('is-active')}, 2000);
		})
	},

	methods: {
		loadShareScript() {
			return new Promise((resolve, reject) => {
				const script = document.createElement('script');
				document.body.appendChild(script);
				script.onload = resolve;
				script.onerror = reject;
				script.async = true;
				script.src = 'https://platform-api.sharethis.com/js/sharethis.js#property=6426b8c75d783b00125f1b5a&product=inline-share-buttons';
			});
		}
	},

	computed: {
		imageSrc() {
			try {
				const url = new URL(`../assets/images/${this.result.image}.jpg`, import.meta.url).href
				return url;
			} catch (error) {
				return '';
			}
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
			<!-- ShareThis BEGIN -->
			<div class="sharethis-inline-share-buttons"></div><!-- ShareThis END -->
			<a href="https://t.me/apersonaluniverse" class="button" target="_blank">Подпишись на канал твоей вселенной</a>
		</div>
	</article>
</template>

<style lang="scss" scoped>
article {
	width: 100%;
	opacity: 0;
	transition: opacity 5s cubic-bezier(0.075, 0.82, 0.165, 1);

	&.is-active {
		opacity: 1;
	}
}

figure {
	width: 100vw;
	max-height: 100vh;
	margin-left: calc((100vw - 100%) / (-2));
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
}

.st-inline-share-buttons {
	min-height: 40px;

	div {
		display: inline-block !important;
	}
}
</style>