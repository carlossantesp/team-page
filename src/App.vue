<template>
  <div id="app" class="wrapper">
    <HeaderComponent />
    <div class="main">
      <ListCardsComponent />
    </div>
    <FooterComponent />
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
  }
}
</script>

<style lang="scss">
@import 'assets/scss/app'
</style>
