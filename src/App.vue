<template>    
      <div id="app">      
          <Background />        
          <Header />         
          <NavBar />                         
          <router-view />                                 
          <Footer />                
      </div>      
  </template>

<script>
    import Background from '@/components/Background.vue'
    import Header from '@/components/Header.vue'
    import NavBar from '@/components/NavBar.vue'    
    import Footer from '@/components/Footer.vue'
    export default {
      name: 'App',
      components: {
        Background,
        Header,
        NavBar,          
        Footer    
      }
    }
</script>

<style>
  
</style>
