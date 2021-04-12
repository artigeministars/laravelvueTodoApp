<template>
  <Header></Header>
  <MainTodo msg="Welcome to Todo App"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import HelloWorld from './components/HelloWorld.vue';
import MainTodo from '@/components/MainTodo.vue';
import Header from '@/components/Header.vue';

@Options({
  components: {
    Header,
    MainTodo,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:3em;
  background-color: #c4f095;
}
</style>
