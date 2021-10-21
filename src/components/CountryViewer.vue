<template>
    <div>
            <b-card>
                <p>{{ country.flag }}</p>
                <!--21-10-2021 Name Of Countyry made into a link-->
                <p><b>Name:</b><router-link :to="{name: 'country', params: {counrty: country.name.common}}"> {{ country.name.common }} </router-link></p>
                <p><b>Offical name:</b> {{ country.name.official }}</p>
                <p><b>Capital:</b> {{ country.capital[0] }}</p>
            </b-card>
    </div>
</template>

<script>
export default {
    name: 'CountryViewer',
    props: {
        country: Object,
    }
}    
</script>

<style>

</style>