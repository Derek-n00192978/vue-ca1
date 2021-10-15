<!--New page added on 14-10-2021-->
<template>
    <div class="user">
        This is the user page
        {{ $route.params.id }}
    </div>    
</template>

<script>
    export default {
        name:'User'
    }
</script>

<style>
    .user{
        text-align: center;
    }
</style>