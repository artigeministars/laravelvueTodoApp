<template>
  <div class="header-container">
    <div class="nav-container">
      <span class="nav-item">
      <router-link to="/home">Home</router-link>
      </span>
    <span class="nav-item">
      <router-link to="/created">Created Todos</router-link>
      </span>
      <span class="nav-item">
      <router-link to="/inprogress">InProgress Todos</router-link>
      </span>
      <span class="nav-item">
    <router-link to="/done">Done Todos</router-link>
      </span>
      <span class="nav-item">
    <router-link to="/todos">All Todos</router-link>
      </span>
  </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  name: 'Header'
})
export default class Header extends Vue { }
</script>
<style scoped>
.header-container {
  background-color: #29b6f6;
  border-bottom: #00bfa5 solid 1em;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  width: auto;
  height: 3em;

}
.nav-container {
  display: flex;
  padding: 0.5em;
}
.nav-item {
  float:left;
  display: inline;
  padding: 0.2em;
  margin: 0.8em;
  background-color: aliceblue;
}

.nav-item:hover {
  background-color: #c0ca33;
}

</style>