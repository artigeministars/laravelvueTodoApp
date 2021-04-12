<template>
  <div class="addtodo-container">
    <div class="addtodo-row">
      <div>
        <form  @submit.prevent="addTodoLocal">
          <div>
            <label>Text</label>
            <br />
            <input ref="inputtodo" v-model="addTodoType.text" placeholder="Enter a todo" />
            <br />
            {{ !addTodoType.text ? "Text is required" : "" }}
          </div>
          <div>
            <label>Status</label>
            <br />
            <select v-model="addTodoType.status" >
              <option>created</option>
              <option>inprogress</option>
              <option>done</option>
            </select>
            <br />
            {{ !addTodoType.status ? "Status is required" : "" }}
          </div>
          <button type="submit">Add Todo</button>
        </form>


      </div>

      <div class="addtodo-item"></div>
    </div>
  </div>
</template>
<script lang="ts">
import {Options,Vue} from "vue-class-component";
import {namespace} from "vuex-class";
import {AddTodoType} from "@/store/models/TodoModel";
import {todoSliceStore} from "@/store";

const todosModule = namespace("todosStore");

@Options({  name: 'AddTodo' })
export default class AddTodo extends Vue {

  @todosModule.Action addTodoAction!: typeof todoSliceStore.addTodoAction;

  public addTodoType : AddTodoType = {
    text: "",
    status: ""
  }

  get formValid(): boolean {
    const { text, status } = this.addTodoType;
    return Boolean(text && status);
  }

  addTodoLocal() {
    if (!this.formValid) {
      return;
    }
    this.addTodoAction(this.addTodoType);
    this.addTodoType = {
      text: "",
      status: ""
    }
  }

  $refs!: {
    inputtodo: HTMLInputElement;
  };

  mounted() {
    this.$refs.inputtodo.focus();
  }
}
</script>
<style scoped>
.addtodo-container {
  background-color:  #88eeb5;
  width:auto;
}

.addtodo-row {
  display: block;
}

* {
  box-sizing: border-box;
}
form {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}
form label {
  margin: 5px 10px 5px 0;
}
form input {
  margin: 5px 10px 5px 2px;
  padding: 10px;
}
form button {
  padding: 8px 12px;
  font-size: 20px;
  background-color: #00b8d4;
  border: 1px solid #ddd;
  color: white;
  cursor: pointer;
  font-weight: bolder;
  border-radius: 4px;
  margin-left: 1em;
}
form button:hover {
  background-color: rgb(113, 65, 225);
}
@media (max-width: 800px) {
  form input {
    margin: 10px 0;
  }
  form {
    flex-direction: column;
    align-items: stretch;
  }
}

</style>