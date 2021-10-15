<!--New page added on 15-10-2021-->
<template>
    <div>       
       <b-card-group class="p" columns>
           <b-card> 
               <b-card-text>    
                    <CountryViewer 
                    v-for="country in countries"
                    :key="country.ccn3"
                    :country="country" 
                                    />
               </b-card-text>        
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
.p {
    color: azure;
}
.card {
	margin-bottom: 2rem;
}
@media (min-width: 34em) {
	.card-columns {
		-webkit-column-count: 2;
		-moz-column-count: 2;
		column-count: 2;
	}
}
@media (min-width: 48em) {
	.card-columns {
		-webkit-column-count: 3;
		-moz-column-count: 3;
		column-count: 3;
	}
}
@media (min-width: 62em) {
	.card-columns {
		-webkit-column-count: 4;
		-moz-column-count: 4;
		column-count: 4;
	}
}
@media (min-width: 75em) {
	.card-columns {
		-webkit-column-count: 5;
		-moz-column-count: 5;
		column-count: 5;
	}
}

</style>