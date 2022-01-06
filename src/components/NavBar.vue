<template>
    <div class="navbar" id="topnav">
        <b-nav pills>          
            <b-nav-item><router-link :to="{name: 'home'}"><b>Home</b></router-link></b-nav-item> 
            <b-nav-item><router-link :to="{name: 'about'}"><b>About</b></router-link></b-nav-item> 
             <b-input v-model="searchTerm" placeholder="Search ">Search</b-input>
            
        </b-nav>           
    </div>    
</template>
<script>
import axios from "axios";
export default {
    name: 'NavBar',
    data() {
        return {
           searchTerm: ''
        };        
    },
    methods: {
        searchCountries() {
			if (!this.searchTerm) {
				alert("Please enter a search term");
				return;
			}
			axios
				.get(`https://restcountries.com/v3.1/name/${this.searchTerm}?fullText=true`)
				.then((response) => {
					console.log(response.data.data);
					this.searchTerm = response.data.data;
				})
				.catch((error) => console.log(error));
		}
        
    },
    computed: {
        filteredCountries: function(){
            return this.searchTerm.filter(searchTerm => {
                return searchTerm.name.toLowerCase().
                includes(this.searchTerm.toLowerCase())
            });
        }
    }
}
</script>
<style>
   
</style>