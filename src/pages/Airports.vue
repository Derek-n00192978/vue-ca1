<!--New page added on 14-10-2021-->
<template>
    <div>     
                
        <p class="p"><b>Information on the Country {{ country.name.common }} that you Clicked on!</b></p>          
    </div>
</template>

<script>

import axios from 'axios'
    export default {
        name: 'country',
              
        data() {
        return {
            country: []
        }
    }, 
        mounted(){
            axios
                .get(`air-port-codes.com/airport-list/countries${this.$route.params.country}/`)
                .then(response => {
                    console.log(response.data)
                    this.country = response.data[0]
                })
                .catch(error => console.log(error))
        }
    }
</script>

<style>

    
</style>