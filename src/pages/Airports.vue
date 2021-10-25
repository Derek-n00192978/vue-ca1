<!--New page added on 14-10-2021-->
<template>
    <div>            
        <a :href="`https://air-ports-code.com/airport-list/countries/${this.$route.params.country}`">This is a Link to all the airports in </a>         
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
                .get(`https://restcountries.com/v3.1/name/${this.$route.params.country}?fullTEXT=true`)
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