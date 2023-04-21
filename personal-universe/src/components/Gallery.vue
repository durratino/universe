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
			console.log(this.images)
		},
		imageSrc(name) {
			console.log('hello')
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
// 		const swiperEl = document.querySelector('swiper-container');
// console.log(swiperEl);

//   const params = {
//     // array with CSS styles
//     injectStyles: [
//       `
//       .swiper-pagination {
// 		background: red;

//         img {
//           object-fit: cover;
//           width: 1000%;
//           height: 100%;
//         }
//       }
//       `,
//     ],
//   };

//   Object.assign(swiperEl, params);

//   swiperEl.initialize();

	}
}
</script>

<template>
	<h3 v-if="heading">{{ heading }}</h3>
 <swiper-container
    :slides-per-view="1"
	:spaceBetween="30"
    :loop="true"
    :centered-slides="true"
	
    :pagination="{
      hideOnClick: true
    }"
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
	font-size: .7em;
	// font-style: italic;
}
</style>