<template>
  <div>
    <div class="router-view-container">
      <router-view></router-view>
      <router-view name="inprogress"></router-view>
      <router-view name="done"></router-view>
    </div>
  </div>
</template>
<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({ name: 'PreviewTodo' })
export default class PreviewTodo extends Vue {

}
</script>
<style scoped>
.router-view-container {
  width: 100%;
  background-color: #40b0a6;
  display: flex;
  min-height: fit-content;
  justify-content: center;
}
</style>