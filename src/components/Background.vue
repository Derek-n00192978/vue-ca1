<template>
    <b-container>
        <div>
            <p>This is my back ground</p>
        </div>    
    </b-container>    
    
</template>
<script>
export default {
    name: 'Background',
    data() {
        return{}
        
    },
    methods: {

    }
}
</script>
<style>
body{
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
}
</style>
