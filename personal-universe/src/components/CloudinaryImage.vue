<script>
import { AdvancedImage } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';
import { scale, crop, fill } from "@cloudinary/url-gen/actions/resize";
import { dpr, format, quality } from "@cloudinary/url-gen/actions/delivery";


const cld = new Cloudinary({
	cloud: {
		cloudName: 'dpfd8j3s3'
	},
});

export default {
	props: {
		image: {
			type: String,
			required: true
		},
		aspectRatio: {
			type: Number,
			default: undefined
		},
		width: {
			type: Number,
			default: window.innerWidth
		},
		height: {
			type: Number,
			default: window.innerHeight
		}
	},

	components: {
		AdvancedImage
	},

	data() {
		return {
			myImg: null,
			currentHeight: this.height
		}
	},

	created() {
		this.myImg = cld.image(this.image);
		this.currentHeight = Math.round(this.aspectRatio ? this.width / this.aspectRatio : this.height);
		this.myImg
			.resize(fill().width(this.width).height(this.currentHeight))
			.delivery(dpr(2))
	}
}

</script>

<template>
	<AdvancedImage v-if="myImg" :cld-img="myImg" />
</template>