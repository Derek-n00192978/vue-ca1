<!--New page added on 14-10-2021-->
<template>
       <div>
           {{ $route.params.country }}
       </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'Country',
        mounted(){
            axios
                .get(`https://restcountries.com/v3.1/name/${this.$route.params.country}?fullTEXT=true`)
                .then(response => {
                    console.log(response.data)
                    this.countries = response.data
                })
                .catch(error => console.log(error))
        }
    }
</script>


<style>
    
</style>