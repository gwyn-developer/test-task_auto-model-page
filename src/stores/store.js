import { defineStore } from 'pinia';

import UAParser from 'ua-parser-js';

import axios from 'axios';

export const useRootStore = defineStore('rootStore', {
	state() {
		return {
			isMobile: false,
			featuresList: [],
		}
	},

	actions: {
		checkIsMobile() {
			const ua = new UAParser();
			let curIsMobile = ua.getDevice().type == 'mobile';
			if(curIsMobile) this.setMobile(true);
		},

		setMobile(value) {
			this.isMobile = value;
		},

		async getFeatures() {
			try {
				const response = await axios.post('/api', {}, {
					headers: {
						'Content-Type': 'application/json',
					},
				});
				return response.data;
			} catch (error) {
				console.error('Error: ', error);
				throw new Error('Failed to fetch features');
			}
		},	  

		async getFeaturesList() {
			try {
				const data = await this.getFeatures();
				let curList = data.features.filter(
					(feature) => feature.model_name === 'Figaro' && feature.description && feature.image
				);

				this.featuresList = curList.map(item => {
					let imageName = item.image.replace(/.*\//, '');
					let fullImageUrl = `https://test-task-frontend-2023.slava.digital/assets/${imageName}`;

					return {...item, image: fullImageUrl};
				})
				
			} catch (error) {
				console.error('Произошла ошибка при загрузке особенностей:', error);
			}
		},

		insertAtSecondPosition(element) {
			this.featuresList.splice(1, 0, element);
		},

	},
})
