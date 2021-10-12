<template>
    <div>
        <b-card-group columns>
            <b-card
                v-for="world in worlds"
                :key = "world.name"
                >
                <b-card-text>
                    <a :href="world.url"
                    target="blank">{{world.name.common.official}}
                    </a>
                </b-card-text>   
            </b-card>    
        </b-card-group>              
    </div>          
</template>
<script>
    import axios from 'axios';
    const WORLD_URL = "https://restcountries.com/v3.1/all";
export default {
    name: 'WorldViwer',
    data() {
        return{
            world: []
        };        
    },
    mounted() {
        axios.get(`${WORLD_URL}`)
             .then(response => {
                 console.log(response.name.common.offical)
                 this.world = response.name.common.offical
             })
    },
    methods: {
    }
}
</script>
<style>

</style>