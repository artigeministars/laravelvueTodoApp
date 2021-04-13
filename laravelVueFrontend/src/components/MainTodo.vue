<template>
  <div>
  <h1><img src="../assets/icons/8993365461539683258-64.png" /> {{ msg }}</h1>
    <all-todos></all-todos>
  </div>
</template>
<script lang="ts">
import { Options , Vue } from "vue-class-component";
import {Prop} from "vue-property-decorator";
import AllTodos from "./AllTodos.vue";

@Options({
  name: 'MainTodo',
  components: {
    AllTodos
  }
})
export default class MainTodo extends Vue {
  @Prop({default:'default message value',type:String,required:false}) readonly msg! : string

  created(){
    console.log("MainTodos Component");
  }
}

</script>
<style scoped>

</style>