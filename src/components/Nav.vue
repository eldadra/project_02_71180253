<template>
  <div>
    <v-app>
      <v-card>
        <v-layout style="height: 100vh">
          <v-navigation-drawer
            permanent
            location="left"
            id="drawer"
            style="background-color: #5d5dd5; padding: 10px"
          >
            <h2 style="color: white">Pesan Terakhir</h2>
            <router-link to="/" style="color: white">Home</router-link>
            <template v-slot:append>
              <h3 style="color: white">Kirim pesan ke :</h3>
                <tr v-for="kontak in kontaks" :key="kontak.id" style="color: white">
                    <td>
                        <router-link :to="'/chat/'+kontak.id" style="color: white; fontSize: 20px">{{kontak.nama}}</router-link>
                    </td>
                </tr>
            </template>
          </v-navigation-drawer>
          <v-main style="height: 100%">
            <router-view></router-view>
          </v-main>
        </v-layout>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NavbarComponent",
  data() {
    return {
        kontaks: []
    }
  },
    methods: {
        setKontaks(data) {
            this.kontaks = data;
        }
    },
    mounted() {
        axios
      .get("http://localhost:3000/kontak")
      .then((response) => this.setKontaks(response.data))
      .catch((error) => console.log(error));
    }
};
</script>