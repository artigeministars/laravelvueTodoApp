<template>
<div class="alert">
  <div class="alert-box">
<strong>Error!</strong>
<slot></slot>
</div>
</div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  name: 'AlertBox'
})
export  default class AlertBox extends Vue {}
</script>
<style scoped>
.alert {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.alert-box {
  padding: 10px 20px;
  background: #f3beb8;
  border: 1px solid #f09898;
}
</style>