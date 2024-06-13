<template>
	<div class="features">
		<div class="features__container">
			<h2 class="features__title">
				{{title ?? ''}}
			</h2>

			<div class="features__cards-container" :class="{'features__cards-container_mob': isMobile}">
				<card-feature v-for="item in list" :key="setId" :data="item" :isMobile="isMobile"/>
			</div>

			<div class="features__btn">
				<button-add :text="btnText" @clickBtnAdd="addFeature"/>
			</div>
		</div>
	</div>
</template>
	
<script>
import { mapActions } from 'pinia';
import { useRootStore } from '@/stores/store';

import CardFeature from '../card-feature/CardFeature.vue';
import ButtonAdd from '../button-add/ButtonAdd.vue';

export default {
	name: 'features',

	props: ['featuresList', 'isMobile', 'title', 'btnText', 'newItem'],

	components: {
		CardFeature, ButtonAdd,
	},
	
	computed: {
		list() {
			return this.featuresList
		}
	},

	methods: {
		...mapActions(useRootStore, ['insertAtSecondPosition']),

		addFeature() {
			this.insertAtSecondPosition(this.newItem);
		},

		setId() {
			return Date.now();
		},
	}
};
</script>