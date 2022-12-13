<template>
    <v-row>
        <v-col cols="12" sm="2">
          <Nav/>
        </v-col>
      </v-row>
</template>

<script>
import Nav from '../components/Nav.vue';

export default {
    name: 'ChatView',
    components: {
        Nav
    },
    data(){
        return {
            kontak: []
        }
    }
}
</script>