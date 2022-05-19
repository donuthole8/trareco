<template>
  <div>
    <div>
      <h1>TRARECO</h1>
      <Header></Header>
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
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
