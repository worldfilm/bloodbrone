<template>
<div class="home">
  <Menulist/>
</div>
</template>
<script>
import Hub from "@/components/Hub";
import Menulist from '@/components/Menulist'
export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    Hub.$on("closed", data => {});
    setTimeout(() => {}, 5000);
  },
  components: {Menulist}
};
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  // background: url(/static/bg.jpg) no-repeat;
  background: #ddd;
  background-size: auto 99%;
}
</style>
