<template>
  <div class="list-container">
    <div class="list-container-item" v-for="(todo,key) in createdTodos" :key="key" :id="todo.id">{{todo.text}}</div>
  </div>
</template>
<script lang="ts">
import {Options,Vue} from "vue-class-component";
import {namespace} from "vuex-class";
import {ITodo} from "@/store/models/TodoModel";

const todosModuleC = namespace("todosStore");

@Options({ name: 'ListTodos'})
export default class ListTodos extends Vue {

  @todosModuleC.Getter("getCreatedTodos")
  private createdTodos!: () => ITodo[];

  mounted(){
    console.log("CreatedTodos");
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
  background: #0086b3;
  border: 1px solid #f09898;
}

.list-container-item:hover {
  background: #3fc5f1;
  border: 1px solid #eab15b;
}
</style>