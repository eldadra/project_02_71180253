<template>
  <HelloWorld />
  <router-link to="/">Home</router-link>
  <router-link to="/login">Login</router-link>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
  },
});
</script>
