<template>
	<button class="button-sign-up" @click="click">
		<div class="button-sign-up__text">
			{{ text }}
		</div>

		<div class="button-sign-up__arrow-right">
		</div>
	</button>
</template>
	
<script>
export default {
	name: 'button-sing-up',

	emits: ['clickBtnSignUp'],

	props: ['text'],

	methods: {
		click() {
			this.$emit('clickBtnSignUp');
		},
	},
};
</script>