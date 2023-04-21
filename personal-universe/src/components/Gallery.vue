<script>

export default {
	props: {
		images: {
			type: Array,
			required: true
		},
		heading: {
			type: String,
		}
	},
	methods: {
		addSrcs() {
			this.images.forEach(image => {
				image.src = this.imageSrc(image.image);
			});
		},
		imageSrc(name) {
			try {
				const url = new URL(`../assets/images/${name}.jpg`, import.meta.url).href
				return url;
			} catch (error) {
				return '';
			}
		}
	},
	created() {
		this.addSrcs();
	},
	mounted() {
		const swiperEl = document.querySelector('swiper-container');
console.log(swiperEl);

  const params = {
    // array with CSS styles
    injectStyles: [
      `
      :root {
		--swiper-pagination-bottom: -3px;
		--swiper-pagination-color: #2AFC98;
		--swiper-pagination-bullet-inactive-color: #58A4B0;
		--swiper-navigation-color: #58A4B0;
	  }
      `,
    ],
  };

  Object.assign(swiperEl, params);

  swiperEl.initialize();

	}
}
</script>

<template>
	<h3 v-if="heading">{{ heading }}</h3>
 <swiper-container init="false"
    :slides-per-view="1"
	:spaceBetween="30"
    :loop="true"
    :centered-slides="true"
    :pagination="{
      clickable: true,
    }"
	:navigation="true"
    :breakpoints="{
      768: {
        slidesPerView: 3,
      },
    }"
    @progress="onProgress"
  >

    <swiper-slide v-for="image in images">
		<!-- {{image}} -->
		<img :src="image.src" alt="">
		<span>{{ image.urlText }}</span>
	</swiper-slide>
  </swiper-container>
</template>

<style lang="scss" scoped>
swiper-container {
	width: 100vw;
	padding-bottom: 10px;
	margin-left: calc((100vw - 100%) / (-2));
	margin-top: var(--margin, 0);
}
h3 {
	max-width: 42rem;
	margin-left: auto;
	margin-right: auto;
	font-size: 1.34em;
}

span {
	display: block;
	text-align: right;
	font-size: .7em;
	padding: .5rem 1rem;
	// font-style: italic;
}

span.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: red;
  opacity: 1;
}

/* target all bullets */
.swiper-pagination-bullet {
  background-color: green;
  opacity: 1;
}

</style>