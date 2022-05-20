<template>
  <div class="body">
    <div>
      <Header></Header>
    </div>

    <div>
      <Main></Main>
    </div>

    <div>
      <Footer></Footer>
    </div>
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
</style>
