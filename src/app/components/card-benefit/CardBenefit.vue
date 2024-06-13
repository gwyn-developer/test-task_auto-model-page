<template>
	<div class="card-benefit" :class="{'card-benefit-desktop': !isMobile}">
        <div class="card-benefit__container">
            <div class="card-benefit__img">
                <img class="icon" v-if="data.img" :src="data.img" :alt="data.alt">
            </div>
            
            <div class="card-benefit__text">
                <h3 v-if="data.title" class="card-benefit__text-title">
                    {{ data.title }}
                </h3>
                <div v-if="data.descr" class="card-benefit__text-description">
                    {{ data.descr }}
                </div>
            </div>
        </div>
	</div>
</template>
	
<script>
export default {
	name: 'card-benefit',

	props: ['data', 'isMobile'],
};
</script>