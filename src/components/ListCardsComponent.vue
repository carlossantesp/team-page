<template>
	<div>
		<CardComponent v-for="(person, index) in teams" :key="index" :person="person"></CardComponent>
	</div>
</template>

<script>
import CardComponent from '../components/CardComponent.vue'

export default {
	name: 'ListCardsComponent',
	components: {
        CardComponent,
    },
    data(){
        return {
            teams:[]
        }
    },
    created(){
        this.teams=[
            {
                'name': 'Bill Mahoney',
                'job': 'Product Owner',
                'image': 'photo1.png'
            },
            {
                'name': 'Saba Cabrera',
                'job': 'Art Director',
                'image': 'photo2.png'
            },
            {
                'name': 'Shae Le',
                'job': 'Tech Lead',
                'image': 'photo3.png'
            },
            {
                'name': 'Skylah Lu',
                'job': 'UX Designer',
                'image': 'photo4.png'
            },
            {
                'name': 'Griff Richards',
                'job': 'Developer',
                'image': 'photo5.png'
            },
            {
                'name': 'Stan Jhon',
                'job': 'Developer',
                'image': 'photo6.png'
            },
        ]
    }
}
</script>