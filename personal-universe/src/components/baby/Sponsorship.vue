<template>
	<div class="sponsorship">
		<h1>Поддержите нашего будущего ребенка</h1>
		<p>Дорогие друзья и семья,</p>
		<p>
			Мы рады сообщить, что у нас скоро появится ребенок! Мы будем очень благодарны за любую финансовую поддержку, которую вы сможете оказать. Ваши пожертвования помогут нам обеспечить все необходимое для нашего малыша.
		</p>
		<p>
			Вот наши банковские реквизиты:
		</p>
		<ul>
			<li><strong>IBAN:</strong> DE89370400440532013000</li>
			<li><strong>Номер карты:</strong> 1234 5678 9012 3456</li>
		</ul>
		<p>
			Спасибо за вашу поддержку и любовь!
		</p>
	</div>
</template>

<script>
export default {
	name: 'Sponsorship'
}
</script>

<style scoped>
.sponsorship {
	font-family: Arial, sans-serif;
	padding: 20px;
	background-color: #f9f9f9;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
	color: #333;
}

p {
	color: #555;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	margin: 5px 0;
}

strong {
	color: #000;
}
</style>