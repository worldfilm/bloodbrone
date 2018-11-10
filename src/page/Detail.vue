<template>
  <div class="Detail">
    <div class="content">
      <p class="title" v-text="list.title"></p>
      <video :src="list.url" v-if='showvideo'></video>
      <ul v-for="(item,index) in list.textcontent" :key='index'>
          <p class="log_title" v-text="item.title"></p>
           <li >
             <span v-text='item.text' class="text"></span>
           </li>
           <img :src="item.imgsrc" alt="">
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: this.$route.params.data,
      showvideo:false,
    };
  },
  methods: {
    a() {
      if(this.list.url){
        this.showvideo=true
      }
      
    }
  },
  created() {
    this.a();
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.Detail {
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  background: #fff;
  background-size: auto 99%;
  text-align: left;
  .content {
    padding:1rem 0.3rem;
    .title {
      font-size: 0.35rem;
      font-weight: bold;
      padding: 0.2rem 0rem;
    }
    .log_title {
      font-size: 0.3rem;
      font-weight: bold;
      color: #0d36e9;
     
    }
    .text{
        padding: 0.1rem;
    }
    img{
      width: 100%;
      padding: 0.1rem 0rem;
    }
  }
}
</style>
