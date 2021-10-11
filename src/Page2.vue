<template>
  <div>
    <b-container>
      <div>      
          <Background />
        
              <b-container>
                <b-row>
                  <b-col>
                    <Header />
                  </b-col>  
                </b-row> 
              </b-container>

              <b-container>
                <b-row>
                  <b-col>
                    <NavBar />
                  </b-col>  
                </b-row> 
              </b-container>

              <b-container>
                <b-row>
                  <b-col>
                    <WorldViwer />
                  </b-col>  
                </b-row> 
              </b-container>         

              <b-container>
                <b-row>
                  <b-col>
                    <Footer />
                  </b-col>  
                </b-row> 
              </b-container>
      </div>  
    </b-container>  
  </div>
</template>

<script>

import Background from '@/components/Background.vue'
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
import WorldViwer from '@/components/WorldViwer.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Page2',
  components: {
    Background,
    Header,
    NavBar,
    WorldViwer, 
    Footer    
  }
}
</script>

<style>

</style>
