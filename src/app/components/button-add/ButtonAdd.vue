<template>
	<button class="button-add" @click="click">
		{{ text }}
	</button>
</template>
	
<script>
export default {
	name: 'button-add',

	emits: ['clickBtnAdd'],

	props: ['text'],

	methods: {
		click() {
			this.$emit('clickBtnAdd');
		},
	},
};
</script>