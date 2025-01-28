<script>
export default {
	props: {
		name: {
			type: String,
		},
		value: {
			type: String,
		},
		isEditable: {
			type: Boolean
		}
	},
}
</script>

<template>
	<p>
		{{ name }}: <span v-if="!isEditable">{{ value }}</span>
		<input v-if="isEditable" type="text" placeholder="???">
	</p>
</template>

<style lang="scss" scoped></style>