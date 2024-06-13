<template>
	<div class="card-feature" :class="{'card-feature-desktop': !isMobile}">
		<div class="card-feature__container">
			<div class="card-feature__img">
				<img class="img" v-if="data.image" :src="data.image" :alt="data.image_alt">
			</div>

			<div v-if="data.description" class="card-feature__text-description">
				{{ data.description }}
			</div>
		</div>
	</div>
</template>
	
<script>
export default {
	name: 'card-feature',

	props: ['data', 'isMobile'],
};
</script>