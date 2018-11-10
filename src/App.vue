<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default {
  data() {
    return {
    };
  },
  methods: {
    a() {
    }
  },
  created() {
    this.a();
     document.title = '血缘诅咒 - ' + this.$route.meta.title

  },
  components: {Footer,Header}
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
