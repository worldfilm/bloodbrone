<template>
    <div class="Menulist">
        <div class="content">
            <div class='part'>
            <ul v-for="item in list">
                <p class="title" v-text='item.head'></p>
                <li v-for="res in item.content">
                <router-link to='' v-text='res.title'></router-link>
                </li>
            </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Hub from "@/components/Hub";
export default {
 data() {
    return {
        list:this.$mydata.data,
    };
  },
  methods: {},
  created() {
      console.log(this.list)
    Hub.$on("closed", data => {});
    setTimeout(() => {}, 5000);
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.Menulist{
  .content{padding: .5rem;text-align: left;
    .part{
        ul{
            .title{
                
                font-size: 0.45rem;
                font-weight: bold;
                padding: .1rem 0rem;
            }
            li{
                a{
                    padding: .1rem 0rem;
                    display: inline-block;
                }
            }
        }
    }
  }
}
</style>
