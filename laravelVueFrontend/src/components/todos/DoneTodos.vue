<template>
  <div class="list-container">
    <div class="list-container-item" v-for="(todo,key) in doneTodos" :key="key" :id="todo.id">{{todo.text}}</div>
  </div>
</template>
<script lang="ts">
import {Options,Vue} from "vue-class-component";
import {namespace} from "vuex-class";
import {ITodo} from "@/store/models/TodoModel";

const todosModuleD = namespace("todosStore");

@Options({ name: 'ListTodos'})
export default class ListTodos extends Vue {

  @todosModuleD.Getter("getDoneTodos")
  private doneTodos!: () => ITodo[];

  mounted(){
    console.log("DoneTodos");
  }

}
</script>
<style scoped>
.list-container{
  background-color: #5cb45b;
  width: 32%;
  float:left;
  display: block;
  min-height: 14em;
  border:0.5em solid #00bcd4;
}
.list-container-item {
  padding: 10px 20px;
  background: #f3beb8;
  border: 1px solid #f09898;
}
.list-container-item:hover {
  background: #88efb6;
  border: 1px solid #bd4545;
}
</style>