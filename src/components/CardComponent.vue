<template>
	<div class="card animate__animated animate__zoomIn">
        <div class="card__img">
            <img :src="imgUrl" :alt="person.name">
        </div>
        <h3 class="card__title">{{ person.name }}</h3>
        <span class="card__subtitle">{{ person.job }}</span>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: [
        'person'
    ],
    computed:{
        imgUrl(){
            return require(`../assets/img/${this.person.image}`)
        }
    }
}
</script>