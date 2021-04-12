<template>
  <div class="header-container"></div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  name: 'Header'
})
export default class Header extends Vue { }
</script>
<style scoped>
.header-container {
  background-color: #29b6f6;
  border-bottom: #00bfa5 solid 1em;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  width: auto;
  height: 3em;

}
</style>