<template>
  <div id="app" class="wrapper">
    <HeaderComponent />
    <div class="main">
      <ListCardsComponent class="container" />
    </div>
    <FooterComponent :footer="footer" />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import ListCardsComponent from './components/ListCardsComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    ListCardsComponent,
    FooterComponent
  },
  data(){
    return{
      footer: {
        'name': "Carlos Santillan Espinoza",
        'challenges': "DevChallenges.io"
      }
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/app'
</style>
