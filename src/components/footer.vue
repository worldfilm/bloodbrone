<template>
    <div class="Footer">
        <div class="content">
            <div class='part'>
                <ul>
                    <li v-for='(item,index) in list' v-text="item.title" :key='index'></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: this.$mydata.menu_footer,
    };
  },
  methods: {},
  created() {},
  components: {}
};
</script>
<style lang="scss" scoped>
.Footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #ededed;
  .content {
    text-align: left;
    .part {
      ul {
        li {
          display: inline-block;
          width: 25%;
          text-align: center;
          height: 1rem;
          line-height: 1rem;
        }
      }
    }
  }
}
</style>
