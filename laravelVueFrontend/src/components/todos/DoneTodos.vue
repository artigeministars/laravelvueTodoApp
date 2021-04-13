<template>
  <div class="list-container">
    <div class="list-container-item-topic" v-if="doneTodos.length>0">
      <img src="../../assets/icons/15861719021556282334-32.png" />
           Done</div>
    <div class="list-container-item" v-for="(todo,key) in doneTodos" :key="key" :id="todo.id">{{todo.text}}
      <button class="button-right" @click="addToInprogressF({id: todo.id,text: todo.text,status: 'inprogress'})"><img class="icon-right" src="../../assets/icons/8993365461539683258-20.png" /></button>
      <button class="button-right" @click="addToCreatedF({id: todo.id,text: todo.text,status: 'created'})"><img class="icon-right" src="../../assets/icons/9594406041586787812-20.png" /></button>
    </div>
  </div>
</template>
<script lang="ts">
import {Options,Vue} from "vue-class-component";
import {namespace} from "vuex-class";
import {ITodo} from "@/store/models/TodoModel";
import {todoSliceStore} from "@/store";

const todosModuleD = namespace("todosStore");

@Options({ name: 'ListTodos'})
export default class ListTodos extends Vue {

  @todosModuleD.Getter("getDoneTodos")
  private doneTodos!: () => ITodo[];

  @todosModuleD.Action
  private addToInprogress!: typeof todoSliceStore.addToInprogress;
  // private addToInprogress!: (updateTodo: Pick<ITodo,"id" | "text" | "status">) => Promise<void>;

  @todosModuleD.Action
  private addToCreated!: typeof todoSliceStore.addToCreated;
  // private addToCreated!: (updateTodo: Pick<ITodo,"id" | "text" | "status">) => Promise<void>;


  addToInprogressF(updateTodo: Pick<ITodo,"id" | "text" | "status">){
    this.addToInprogress(updateTodo);
  }

  addToCreatedF(updateTodo: Pick<ITodo,"id" | "text" | "status">){
    this.addToCreated(updateTodo);
  }

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
.list-container-item-topic {
  padding: 26px 22px;
  background: #34e767;
  border: 1px solid #9dd990;
}

.list-container-item-topic:hover {
  background: #86f5a5;
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