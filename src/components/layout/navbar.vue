<template>
 <div class="container">
  <nav class="navbar navbar-expand-lg fixed-top font-weight-bold">
   <div class="navbar-brand">
    <a href="/">
     <img src="../../assets/logo.png" alt="MIRUPa" width="35" height="35" class="mr-2" />
     MIRUPa
    </a>
   </div>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
     <router-link class="nav-link" to="/">HOME <span class="sr-only">(current)</span></router-link>
     <router-link class="nav-link" to="/profile">PROFILE</router-link>
     <router-link class="nav-link" to="#">JADWAL</router-link>
     <router-link class="nav-link" to="#">INFORMASI</router-link>

    </div>
   </div>
  </nav>
 </div>
</template>

<script>

</script>
<style scoped>
 .navbar {
  background: rgba(0,80,0,1);
 }
 .navbar a {
  color: rgb(0,255,100);
 }
 .navbar-nav a {
  color: white;
 }
 .navbar-nav a:hover,
 .navbar-nav a:focus {
  background: rgba(0,255,0,1);
  color: black;
 }
</style>