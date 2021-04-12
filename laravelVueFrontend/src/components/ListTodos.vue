<template>
  <div class="list-container-wrapper">
    <CreatedTodos></CreatedTodos>
    <InprogressTodos></InprogressTodos>
    <DoneTodos></DoneTodos>
  </div>
</template>
<script lang="ts">
import {Options,Vue} from "vue-class-component";
import CreatedTodos from "@/components/todos/CreatedTodos.vue";
import InprogressTodos from "@/components/todos/InprogressTodos.vue";
import DoneTodos from "@/components/todos/DoneTodos.vue";

@Options({
  name: 'ListTodos',
  components: {
    CreatedTodos,
    InprogressTodos,
    DoneTodos
  }
})
export default class ListTodos extends Vue {
  mounted(){
  console.log("ListTodos");
  }

}
</script>
<style scoped>
.list-container-wrapper {
  background-color: #5cb45b;
  display: block;
}
</style>