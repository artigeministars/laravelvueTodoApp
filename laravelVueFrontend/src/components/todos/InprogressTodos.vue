<template>
  <div class="list-container">
    <div class="list-container-item" v-for="(todo,key) in inprogressTodos" :key="key" :id="todo.id">{{todo.text}}</div>
  </div>
</template>
<script lang="ts">
import {Options,Vue} from "vue-class-component";
import {namespace} from "vuex-class";
import {ITodo} from "@/store/models/TodoModel";

const todosModuleI = namespace("todosStore");

@Options({ name: 'ListTodos'})
export default class ListTodos extends Vue {

  @todosModuleI.Getter("getInprogressTodos")
  private inprogressTodos!: () => ITodo[];

  mounted(){
    console.log("InprogressTodos");
  }

}
</script>
<style scoped>
.list-container{
  background-color: #5cb45b;
  width: 32%;;
  float:left;
  min-height: 14em;
  display: block;
  border:0.5em solid #00bcd4;
}
.list-container-item {
  padding: 10px 20px;
  background: #d0d766;
  border: 1px solid #f09898;
}

.list-container-item:hover {
  background: #bcc712;
  border: 1px solid #0086b3;
}
</style>