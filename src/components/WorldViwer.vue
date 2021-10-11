<template>
    <div>
        <b-card-group deck>
            <b-card
                v-for="world in worlds"
                :key = "world.id"
                
            >
                <b-card-text>
                    <a :href="world.url" target="blank">{{world.data.name}}</a>
                </b-card-text>   
            </b-card>    
        </b-card-group>              
    </div>          
</template>
<script>
    import axios from 'axios';
    const WORLD_URL = "https://restcountries.com/v3.1";
export default {
    name: 'WorldViwer',
    data() {
        return{
            world: []
        };        
    },
    mounted() {
        axios.get(`${WORLD_URL}/all`)
             .then(response => {
                 console.log(response.data.name)
                 this.world = response.data.name
             })
    },
    methods: {
    }
}
</script>
<style>

</style>