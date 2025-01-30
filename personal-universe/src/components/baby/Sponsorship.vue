<script>
import CloudinaryImage from '@/components/CloudinaryImage.vue';

export default {
	name: 'Sponsorship',
	components: {
		CloudinaryImage
	},
	mounted() {
		this.addCaptionSpanIndex();
	},
	methods: {
		addCaptionSpanIndex() {
			const spans = this.$el.querySelectorAll('.stroller > figcaption > span');
			spans.forEach((span, index) => {
				span.style.setProperty('--i', index);
			});
		}
	}
}
</script>

<template>
	<article class="sponsorship">
		<p>...наверняка у тебя есть лишние 5&nbsp;евро или 500&nbsp;рублей :) (да, только люди с&nbsp;лишними
			деньгами дочитывают до&nbsp;этого&nbsp;места)</p>
		<p>
			Возможно, ты&nbsp;хочешь поддержать нас и&nbsp;нашего малыша? Тут-то твои лишние 5&nbsp;евро
			как&nbsp;раз придутся кстати :) Они могут стать решающими в&nbsp;сборе на&nbsp;коляску!
		</p>
		<p>
			Ты&nbsp;знаешь, сколько сейчас стоят коляски?..
			Наведи на картинку и ужаснись...
		</p>
		<figure class="stroller">
			<CloudinaryImage image="stroller" :aspectRatio="2.1" />
			<figcaption>
				<span>8</span><span>2</span><span>9</span> <span>е</span><span>в</span><span>р</span><span>о</span><span>!</span>
			</figcaption>
		</figure>
		<p>
			Ну, поужасались и&nbsp;хватит! А мы&nbsp;правда будем рады любой поддержке, 
			так что если у&nbsp;тебя есть желание помочь, переводи любую сумму.
			Фото нашего малыша после&nbsp;этого тебе гарантированы!
			(Или наоборот, можешь откупиться от&nbsp;фотографий своим&nbsp;переводом!)
		</p>
		<footer>
			<p><strong>Российская карта (Tinkoff):</strong> <span>4377723772853325</span></p>
			<p><strong>IBAN (Olga Misevica):</strong> <span>DE45120300001087672836</span></p>
			<p><strong>PayPal:</strong> <span>ol.misevich@gmail.com</span></p>
			<p><strong>Revolut:</strong> <span>@durratino</span></p>
		</footer>
	</article>
</template>

<style scoped lang="scss">
.sponsorship {
	max-inline-size: 50rem;
	margin: auto;
	padding: 2em;
	border-radius: 1em;
	background-color: oklch(from var(--color-white) l c h / 0.8);

	figure {
		position: relative;
		margin-block: 2em;
		cursor: pointer;

		&:hover {
			img {
				filter: none;
			}

			figcaption span {
				opacity: 1;
				transition-delay: calc(.3s + .1s * var(--i, 1));
			}
		}

		img {
			filter: blur(5px);
			transition: filter 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		}

		figcaption {
			position: absolute;
			inset-inline-start: 50%;
			inset-block-start: 50%;
			transform: translate(-50%, -50%);
			inline-size: max-content;
			font-family: 'Neucha', sans-serif;
			font-size: 6em;
			letter-spacing: .1em;
			color: var(--color-accent);
			transition: opacity 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
			text-shadow: 
				-0.03em -0.03em 0 var(--color-white),
				0.03em -0.03em 0 var(--color-white),
				-0.03em 0.03em 0 var(--color-white),
				0.03em 0.03em 0 var(--color-white);

			span {
				opacity: 0;
				transition: opacity 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
				

				&:nth-child(-n + 3) {
					font-weight: bold;
					letter-spacing: .2em;
				}
			}
		}
	}

	footer {
		margin-block-start: 2em;
		text-align: center;

		p {
			margin-block: .5em;

			strong {
				font-weight: bold;
			}

			// span {
			// 	color: var(--color-accent);
			// }
		}
	}
}
</style>