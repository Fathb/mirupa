<template>
  <!-- <div class="topbar fixed-top mb-3">
    <nav class="navbar navbar-light bg-success">
      <img src="./assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      <a class="navbar-brand ml-3" href="/">
        MIRUPa
      </a>
      <div class="ml-auto">
        <i class="fas fa-map-signs">
        </i><small class="ml-2">jl Raya 02 Ganjaran</small>
      </div>
      <div class="ml-4">
        <i class="far fa-clock"></i>
        <small class="ml-2">06.30 - 14.00</small>
      </div>
      <div class="ml-4">
        <i class="fas fa-phone-alt"></i>
        <small class="ml-2">+62 815 4515 1500</small>
      </div>
    </nav>
  </div> -->
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-transparant fixed-top">
      <div class="navbar-brand">
        <img src="./assets/logo.png" alt="MIRUPa" width="35" height="35" class="mr-2"/>
        <a href="/">
          MIRUPa
        </a>
      </div>
      <div class="ml-auto">
      <router-link to="/" class="ml-auto">Home</router-link>
      <router-link to="/profile" class="ml-5">Profile</router-link>
      <router-link to="/about" class="ml-5">About</router-link>
      <router-link to="/ppdb" class="ml-5">PPDB</router-link>
      </div>
    </nav>
  </div>
  <router-view />
  <div class="row footer">
    <div class="col text-center">
      <p>2021 All Rights Reserved By Fathul Bari</p>
    </div>
  </div>
</template>

<style>
  #app {
    font-family: Avenir,Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
  }

  #nav {
    padding: 30px;
    margin-top: 30px;
    position: fixed;
    z-index: 2;
  }

  #nav a {
    font-weight: bold;
    color: blue;
    text-shadow: 2px 2px 2px green;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
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