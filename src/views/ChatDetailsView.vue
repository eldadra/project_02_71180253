<template>
  <v-row>
    <v-col cols="12" sm="2">
      <InChatNav :updateKontak="penerima.nama" />
    </v-col>
    <v-col>
      <h2 style="background-color: #9999ff">{{ penerima.nama }}</h2>
      <v-row align="end" no-gutters style="margin-top: 700px">
        <v-col style="padding: 20px" cols="12" sm="10">
          <v-text-field
            placeholder="ketikkan pesan .."
            v-model="pesan.isiPesan"
          ></v-text-field>
        </v-col>
        <v-col align-self="end">
          <v-btn @click="kirim" align-self="end"> Kirim </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
import InChatNav from '../components/InChatNav.vue';

export default {
    name: "ChatDetailsView",
    components: {
        InChatNav
    },
    data() {
        return {
            penerima: [],
            pesan: {},
            user: []
        }
    },
    methods: {
        setPenerima(data) {
            this.penerima = data
        },
        setUser(data) {
            this.user = data
        },
        kirim() {
           
            }
    },
    mounted() {
        axios
      .get("http://localhost:3000/kontak/" + this.$route.params.id)
      .then((response) => this.setPenerima(response.data))
      .catch((error) => console.log(error));

      axios
      .get("http://localhost:3000/user")
      .then((response) => this.setUser(response.data))
      .catch((error) => console.log(error));
    }
}
</script>
