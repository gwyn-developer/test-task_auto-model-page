<template>
	<banner btnText="Тест-драйв"/>
	<benefits :benefitsList="benefitsList" :isMobile="isMobile" title="Мы ценим Ваше время и комфорт! Запишитесь на сервис Nissan онлайн"/>
	<features :featuresList="featuresList" :isMobile="isMobile" title="Уникальные особенности модели" btnText="Добавить&nbspособенность" :newItem="newItem"/>
</template>
	
<script>
import { mapState } from 'pinia';
import { useRootStore } from '@/stores/store';

import Banner from '@app/components/banner/Banner.vue';
import Benefits from '@app/components/benefits/Benefits.vue';
import Features from '@app/components/features/Features.vue';

export default {
	name: 'home',

	components: {
		Banner, Benefits, Features
	},


	data() {
		return {
			benefitsList: [
				{
					code: 'benefit',
					img: 'img/icons/benefit1.png',
					title: 'Выгода',
					descr: `Узнайте о выгодных сервисных предложениях Nissan именно для вашего автомобиля`,
					alt: 'Выгода',
				},
				{
					code: 'relevance',
					img: 'img/icons/benefit2.png',
					title: 'Актуальность',
					descr: `Выберите актуальные для вас сервисные предложения`,
					alt: 'Актуальность',
				},
				{
					code: 'wideChoose',
					img: 'img/icons/benefit3.png',
					title: 'Широкий выбор',
					descr: `Выберите дилера, который вам подходит`,
					alt: 'Выбор',
				},
				{
					code: 'onlineService',
					img: 'img/icons/benefit4.png',
					title: 'Онлайн обслуживание',
					descr: `Отправьте дилеру данные о вашем автомобиле в форме удобной анкеты`,
					alt: 'Онлайн',
				},
			],

			newItem: {
				description: "Вращение стационарно заставляет иначе взглянуть на то, что такое нестационарный гироскопический стабилизатор",
				image: "img/car-dashboard.png",
				image_alt: "нестационарный гироскопический стабилизатор",
				model_name: "Add",
				sorting: 0,
			},
		};
	},

	computed: {
		...mapState(useRootStore, [ 'featuresList', 'isMobile' ]),

	},
};
</script>