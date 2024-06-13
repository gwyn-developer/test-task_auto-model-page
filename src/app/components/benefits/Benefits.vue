<template>
	<div class="benefits">
        <div class="benefits__container">
			<div class="benefits__pagination">
				<div class="swiper-pagination" ref="sliderPagination">
				</div>
			</div>
			
			<h1 class="benefits__title">
				{{title ?? ''}}
			</h1>

			<div v-if="isMobile" class="benefits__slider swiper" ref="sliderContainer">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in benefitsList" :key="item.code">
						<card-benefit :data="item" :isMobile="isMobile"/>
					</div>
				</div>
			</div>

			<div v-else class="benefits__card-container">
				<div class="benefits__card-item" v-for="item in benefitsList" :key="item.code">
					<card-benefit :data="item" :isMobile="isMobile"/>
				</div>
			</div>
		</div>
    </div>
</template>
	
<script>
import Swiper, { Pagination } from 'swiper';

import CardBenefit from '@app/components/card-benefit/CardBenefit.vue';

export default {
	name: 'benefits',

	props: [ 'benefitsList', 'isMobile', 'title' ],

	components: {
		CardBenefit
	},

	data() {
		return {
			slider: null,
		}
	},

	methods: {
		initSlider() {
			let { sliderContainer, sliderPagination } = this.$refs;

			this.slider = new Swiper( sliderContainer, {
				modules: [ Pagination ],

				slidesPerView: 1,
				speed: 500,

				resistanceRatio: 0,

				pagination: {
					el: sliderPagination,
					clickable: true,
				},
			});
		},
	},

	mounted() {
		this.initSlider();
	},
};
</script>