<template>
	<router-view/>
</template>

<script>
import { mapActions } from 'pinia';
import { useRootStore } from '@/stores/store';

export default {
	name: 'app',

	methods: {
		...mapActions(useRootStore, [ 'checkIsMobile', 'getFeaturesList' ]),
	},

	async created() {
		await this.checkIsMobile(); 	// проверка устройства на мобилку
		await this.getFeaturesList();	// загрузка featuresList
	},

};
</script>