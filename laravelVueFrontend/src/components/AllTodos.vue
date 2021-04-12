<template>
 <dix>
  <AddTodo></AddTodo>
  <div>
    <ListTodos></ListTodos>
  </div>
 </dix>
</template>
<script lang="ts">
import {Options,Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";
import { namespace } from "vuex-class";
import {ITodo} from "@/store/models/TodoModel";
import AddTodo from "@/components/AddTodo.vue";
import ListTodos from "@/components/ListTodos.vue";

const todosModule = namespace("todosStore");

@Options({
  name: 'AllTodos',
  components: {
  AddTodo,
  ListTodos
  }
})
export default class AllTodos extends Vue {

  mounted() {
    this.getTodosAction();
  }

  @Prop({ type: String })
  private description! : string;

  @todosModule.State("todos")
  private todos : ITodo[] = [];

  @todosModule.Action
  private getTodosAction!: () => Promise<void>;

  // @todosModule.Action addTodoAction!: typeof todoSliceStore.addTodoAction;

  @todosModule.Getter
  private getAllTodos!: () => ITodo[];

  created(){
    console.log("AllTodos Component");
  }
}
</script>
<style scoped>

</style>