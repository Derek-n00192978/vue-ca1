<!--New page added on 14-10-2021-->
<template>
    <div>     
         <p class="p"><b>Information on the Country {{ country.name.common }} that you Clicked on!</b></p>
         <p><b>Name:</b><router-link :to="{name: 'airports', params: {country: country.name.common}}"> {{ country.name.common }} </router-link></p>
         <p class="p"><b>Official name:</b> {{ country.name.official }}</p>
         <p class="p"><b>Capital:</b> {{ country.capital[0] }}</p>
         <p class="p"><b>Abervation:</b> {{ country.cca3 }}</p>
         <p class="p"><b>Currency:</b> {{ country.currencies }}</p>
         <p class="p"><b>Land-mass:</b> {{ country.area }}ha's</p>
         <p class="p"><b>Langitude/Longitude:</b> {{ country.latlng[0] }} degrees Latitude {{ country.latlng[1] }} degrees longitude</p>
         <p class="p"><b>Continent:</b> {{ country.continents[0] }}</p>
         <p class="p"><b>Population:</b> {{ country.population }}</p>
         <p class="p"><b>Timezone:</b> {{ country.timezones }}</p>
         <p class="p"><b>Region:</b> {{ country.region }}</p>
         <p class="p"><b>Languages:</b> {{ country.languages }}</p>         
                  
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