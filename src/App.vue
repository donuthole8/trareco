<template>
  <div>
    <div>
      <Header id="header"></Header>
    </div>

    <div>
      <Main></Main>
    </div>

    <google-map />

    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import GoogleMap from './components/GoogleMap.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    GoogleMap,
    Header,
    Main,
    Footer,
  },
}
</script>

<style>

</style>
