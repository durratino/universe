<script>
export default {
	props: {
		items: {
			type: Array,
			required: true
		}
	},
	mounted() {
		window.addEventListener('scroll', this.submenuHandler);
	},
	computed: {

	},
	methods: {
		submenuHandler() {
			const anchors = document.querySelectorAll('.navigation > a');

			for (let anchor of anchors) {
				const block = document.getElementById(anchor.href.split('#')[1]);
				if (!block) continue;

				const blockTop = block.getBoundingClientRect().top;
				if (blockTop > 0.4 * window.innerHeight) return;

				const linkActive = document.querySelector('.navigation a.is-active');
				if (linkActive) linkActive.classList.remove('is-active');
				anchor.classList.add('is-active');
			}
		}
	}
}
</script>

<template>
	<nav class="navigation">
		<a v-for="item in items" :href="item.href">{{ item.name }}</a>

	</nav>
</template>

<style lang="scss" scoped>
.navigation {
	position: sticky;
	top: 0;
	z-index: 1000;
	padding: .3rem 0 .5rem;
	margin-block-start: var(--base-padding);
	justify-content: center;
	background: rgba(2, 0, 36, .6);
	backdrop-filter: blur(2px);
	border-radius: 0 0 var(--base-padding) var(--base-padding);

	a {
		&.is-active {
			color: white;
		}

		@media (max-width: 48rem) {
			&:nth-child(1),
			&:nth-child(4),
			&:nth-child(5) {
				display: none;
			}
		}

		
	}
}
</style>