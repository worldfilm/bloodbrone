<template>
<div id="app">
  <router-view></router-view>
</div>
</template>
<script>
import Hub from "@/components/Hub";

export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {},
  props: []
};
</script>
<style>
@import "./css/base.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
  font-family: 微软雅黑;
}

a {
  text-decoration: none;
  cursor: pointer;
}

input {
  outline: none;
}

li {
  list-style: none;
}

label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}

body {
  background: #f7f7f8;
  font-size: 14px;
  color: #333;
  display: block;
}

.clearfix:after {
  content: "";
  display: block;
  clear: both;
}

.pull-left {
  float: left;
}

.pull-right {
  float: right;
}

.el-radio__input.is-checked .el-radio__inner {
  border-color: #3d3d3d;
  background: #3d3d3d;
}

.el-radio__input.is-checked + .el-radio__label {
  color: #3d3d3d;
}
.el-step__title.is-process {
  color: #3d3d3d;
}
.el-step__title.is-success {
  color: #3d3d3d;
}
.el-step__head.is-success {
  color: #3d3d3d;
  border-color: #3d3d3d;
}
.el-radio__input {
  position: relative;
  top: -11px;
}
.el-table th > .cell {
  text-align: center;
}
.xy-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
