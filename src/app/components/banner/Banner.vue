<template>
	<div class="banner">
        <div class="banner__container">
			<div class="banner__btn">
				<button-sign-up :text="btnText" @clickBtnSignUp="signUp"/>
			</div>

            <div class="banner__background">
            </div>

			<div class="banner__mountain">
				<img src="@assets/img/mountain.png" alt="mountain">
			</div>

			<div class="banner__text">
				<div class="banner__text-img">
					<img src="@assets/img/figaro.png" alt="text">
				</div>
			</div>

			<div class="banner__auto">
				<img class="banner__auto-car" src="@assets/img/auto.png" alt="auto">
			</div>

            <div class="banner__footer">
				<img class="banner__nim" src="@assets/img/nim.png" alt="NIM">
            </div>
        </div>
    </div>
</template>
	
<script>
import ButtonSignUp from '@app/components/button-sign-up/ButtonSignUp.vue';

export default {
	name: 'banner',

	props: ['btnText'],

	components: {
		ButtonSignUp
	},

	methods: {
		signUp() {
			console.log('sign-up');
		}
	}
};
</script>