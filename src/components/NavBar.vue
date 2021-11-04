<template>
    <div class="navbar" id="topnav">
        <b-nav pills>          
            <b-nav-item><router-link :to="{name: 'home'}"><b>Home</b></router-link></b-nav-item> 
            <b-nav-item><router-link :to="{name: 'about'}"><b>About</b></router-link></b-nav-item> 
             <input type="text" v-model="search" placeholder="SearchCountries"/>
            
        </b-nav>           
    </div>    
</template>
<script>
import axios from "axios";
export default {
    name: 'NavBar',
    data() {
        return {
           search: ''
        };        
    },
    methods: {
        searchCountries() {
			if (!this.term) {
				alert("Please enter a search term");
				return;
			}
			axios
				.get(`https://restcountries.com/v3.1/name/${this.term}?fullText=true`)
				.then((response) => {
					console.log(response.data.data);
					this.term = response.data.data;
				})
				.catch((error) => console.log(error));
		}
        
    },
    computed: {
        filteredCountries: function(){
            return this.term.filiter((term) => {
                return term.title.match(this.search)
            });
        }
    }
}
</script>
<style>
    /* .navbar {    
        padding-top: 1rem;
        padding-bottom: 1rem;    
        /*background-color: rgb(99, 90, 133); */
    /*} */
    /* .topnav {
        overflow: hidden;
    } */

/* Style the links inside the navigation bar */
    /* .topnav a {
        float: left;
        display: block;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    } */

/* Change the color of links on hover */
    /* .topnav a:hover {
        background-color: #ddd;
        color: black;
    } */

/* Add an active class to highlight the current page */
    /* .topnav a.active {
        background-color: #67328615;
        color: white;
    } */

/* Hide the link that should open and close the topnav on small screens */
    /* .topnav .icon {
        display: none;        
    } */
</style>