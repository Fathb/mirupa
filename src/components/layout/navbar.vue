<template>
 <div class="container">
  <nav class="navbar navbar-expand-lg fixed-top font-weight-bold navbar-dark" id="navbarSupportedContent">
   <div class="navbar-brand">
    <a href="/">
     <img src="../../assets/logo.png" alt="MIRUPa" width="35" height="35" class="mr-2" />
     MIRUPa
    </a>
   </div>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="navbarToggle">
    <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div class="navbar-nav ml-auto">
     <router-link class="nav-link" to="/">HOME <span class="sr-only">(current)</span></router-link>
     <router-link class="nav-link" to="/profile">PROFILE</router-link>
     <router-link class="nav-link" to="/jadwal">JADWAL</router-link>
     <router-link class="nav-link" to="#">INFORMASI</router-link>

    </div>
   </div>
  </nav>
 </div>
</template>

<script>
 export default {
  name: "navbar",
  methods: {
   navbarToggle() {
    const navbar = document.querySelector('.navbar-collapse');
    navbar.classList.toggle('collapse');
   }
  }
 }
 </script>
 <style scoped>
  .navbar {
   background: rgba(0,50,0,.7);
  }
  .navbar a {
   color: rgb(0,255,100);
  }
  .navbar-nav a {
   color: #ffffff;
   z-index: 1;
  }
  .navbar-nav a:hover,
  .navbar-nav a:focus {
   background: rgba(0,255,0,1);
   color: black;
  }
 </style>