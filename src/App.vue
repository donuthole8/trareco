<template>
  <div class="app">
    <Header></Header>

    <Main></Main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
body {
  background-color: #F5F5F5;
  color: #3E5F80;
}
.app {
  background-color: #F5F5F5;
}
</style>
