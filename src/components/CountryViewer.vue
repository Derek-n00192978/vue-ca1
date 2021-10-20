<template>
    <div>
            <b-card>
                <p>{{ country.flag }}</p>
                <p>Common name: {{ country.name.common }} </p>
                <p>Offical name: {{ country.name.official }}</p>
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