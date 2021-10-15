<!--New page added on 15-10-2021-->
<template>
    <div>
        <b-card-group columns>
            <b-card>
                <CountryViewer 
                    v-for="country in countries"
                    :key="country.ccn3"
                    :country="country" 
                    />
                    
            </b-card>
        </b-card-group>    
    </div>
</template>

<script>
import axios from 'axios'
import CountryViewer from '@/components/CountryViewer.vue'
export default {
    name: 'Home',
    components: {
        CountryViewer
    },
    data() {
        return {
            countries: []
        }
    }, 
    mounted() {
        axios.get('https://restcountries.com/v3.1/all')
             .then( 
                 response => {
                 console.log(response.data)
                 this.countries = response.data
             }
             )
             .catch(error => console.log(error))
    }
}       
</script>

<style>
#p {
    color: azure;
}

</style>