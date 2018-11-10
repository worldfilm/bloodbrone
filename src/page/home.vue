<template>
  <div class="Home">
    <div class="content">
      <Menulist/>
    </div>
  </div>
</template>
<script>
import Menulist from '@/components/Menulist'
export default {
  data() {
    return {
      
    };
  },
  methods: {},
  created() {
  },
  components: {Menulist,}
};
</script>

<style lang="scss" scoped>
.Home {
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  background: #ddd;
  background-size: auto 99%;
  padding: 1rem 0rem;
  .content{
        padding: 0.3rem;
  }
}
</style>
