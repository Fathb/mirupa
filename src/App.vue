<template>
 <router-view></router-view>
</template>
<script>
 import {
  auth
 } from "./firebase";
 export default {
  name: "App",
  created() {
   auth.onAuthStateChanged(user=> {
    this.$store.commit("updateUser", user);
    if (user) {
     this.$store.dispatch("getUserInfo");
    }
   });
   this.$store.dispatch("getJadwal");
  }
 }
 </script>
 <style>
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }
  body {
   height: 100vh;
   width: 100%;
  }
  #app {
   font-family: Avenir,Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  }
  .footer {
   margin-top: 100px;
  }
  .footer p {
   font-size: 18px;
   color: #a7e6b5;
   font-weight: bold;
  }
 </style>