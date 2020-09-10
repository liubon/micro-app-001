<template>
  <div id="vue-app-001">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Child-Vue-App" />
    <div class="message">
      来自Main-app的值:
      <h1>{{ propValue }}</h1>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import { mapState } from 'vuex';
export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  computed: mapState(['propValue']),
};
</script>

<style>
#vue-app-001 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
.message {
  font-size: 20px;
}
</style>
