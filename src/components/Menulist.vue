<template>
    <div class="Menulist">
            <div class='part'>
            <ul v-for="(item,index) in list" :key='index'>
                <p class="title" v-text='item.head'></p>
                <li v-for="(res,idx) in item.content" :key='idx'>
                <router-link :to="{name:'Detail',params:{data:res}}" v-text='res.title'></router-link>
                </li>
            </ul>
            </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: this.$mydata.data
    };
  },
  methods: {},
  created() {
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.Menulist {
    text-align: left;
    .part {
      ul {
        .title {
          font-size: 0.45rem;
          font-weight: bold;
          padding: 0.1rem 0rem;
        }
        li {
          a {
            padding: 0.1rem 0rem;
            display: inline-block;
          }
        }
      }
    }
}
</style>
