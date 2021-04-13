<template>
  <div class="list-container">
    <div class="list-container-item-topic" v-if="inprogressTodos.length>0">
    <img src="../../assets/icons/6436999681582884279-32.png" /> In Progress
    </div>
    <div class="list-container-item" v-for="(todo,key) in inprogressTodos" :key="key" :id="todo.id">
      {{todo.text}}
      <button class="button-right" @click="addToCreatedF({id: todo.id,text: todo.text,status: 'created'})">
        <img class="icon-right" src="../../assets/icons/9594406041586787812-20.png" /></button>
      <button class="button-right" @click="addToDoneF({id: todo.id,text: todo.text,status: 'done'})">
        <img class="icon-right" src="../../assets/icons/12916695841582884282-20.png" /></button>
    </div>
  </div>
</template>
<script lang="ts">
import {Options,Vue} from "vue-class-component";
import {namespace} from "vuex-class";
import {ITodo} from "@/store/models/TodoModel";
import {todoSliceStore} from "@/store";

const todosModuleI = namespace("todosStore");

@Options({ name: 'ListTodos'})
export default class ListTodos extends Vue {

  @todosModuleI.Getter("getInprogressTodos")
  private inprogressTodos!: () => ITodo[];

  @todosModuleI.Action
  private addToCreated!: typeof todoSliceStore.addToCreated;
  // private addToCreated!: (updateTodo: Pick<ITodo,"id" | "text" | "status">) => Promise<void>;

  @todosModuleI.Action
  private addToDone! : typeof  todoSliceStore.addToDone;
  // private addToDone!: (updateTodo: Pick<ITodo,"id" | "text" | "status">) => Promise<void>;


  addToCreatedF(updateTodo: Pick<ITodo,"id" | "text" | "status">){
    this.addToCreated(updateTodo);
  }

  addToDoneF(updateTodo: Pick<ITodo,"id" | "text" | "status">){
    this.addToDone(updateTodo);
  }

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
.list-container-item-topic {
  padding: 26px 22px;
  background: #ca5bf3;
  border: 1px solid #9dd990;
}

.list-container-item-topic:hover {
  background: #86ecf5;
  border: 1px solid #eab15b;
}
.icon-right {
  float:right;
  margin-left:0.5em;
}
.button-right {
  float:right;
}
</style>