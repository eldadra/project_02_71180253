<template>
  <v-responsive class="mx-auto" max-width="344">
    <v-text-field placeholder="username anda.." v-model="nama"></v-text-field>
    <v-btn @click="login"> Login </v-btn>
  </v-responsive>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginView",
  data() {
    return {
        nama: ''
    };
  },
  methods: {
    login() {
        if(this.nama) {
            axios
            .post("http://localhost:3000/user", {nama: this.nama})
            .then(() => {
                this.$router.push({ path: "/chat" });
            })
            .catch((err) => console.log(err));
        } else {
            console.log("Nama kosong");
            alert("Username tidak boleh kosong")
        }
           
    }
  }
};
</script>