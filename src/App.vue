<template>
  <div id="app">
    <Header/>
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Header from './components/layout/Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
