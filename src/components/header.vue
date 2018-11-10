<template>
    <div class="Header">
        <div class="content">
            <div class='part'>
                <p v-text='title'></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        title:''
    };
  },
  methods: {},
  created() {},
  components: {}
};
</script>
<style lang="scss" scoped>
.Header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #ededed;
  height: 1rem;
  line-height: 1rem;
  .content {
    text-align: left;
    .part {
      ul {
        li {
        }
      }
    }
  }
}
</style>
