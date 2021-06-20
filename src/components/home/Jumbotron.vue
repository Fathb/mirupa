<template>
 <div class="jumbotron jumbotron-fluid">
  <div class="container text-center">
   <img src="../../assets/logo.png" alt="">
   <h2>Selamat Datang di</h2>
   <h1>MI RAUDLATUL ULUM PUTRA</h1>
   <router-link to="/daftar" class="btn btn-warning mt-2">Daftar</router-link>
   <router-link to="/login" class="btn btn-primary ml-2 mt-2">Masuk</router-link>
  </div>
 </div>
</template>

<script>
 export default {
  name: 'Jumbotron'
 }
 </script>


 <style scoped>
  .jumbotron {
   background-image: url('../../assets/img/bg-jumbotron.jpg');
   background-size: cover;
   background-attachment: fixed;
   background-position: right;
   margin-top: -75px;
   height: 600px;
   position: relative;
   width: 100%;
  }
  .jumbotron .container {
   position: relative;
   z-index: 3;
  }
  .jumbotron::after {
   content: '';
   display: block;
   height: 100%;
   width: 100%;
   background-image: linear-gradient(totop,rgba(0,0,0,1), rgba(0,0,0,0));
   position: absolute;
   bottom: 0px;
   z-index: 0;
  }
  h1, h2 {
   text-shadow: 2px 2px 2px white;
   margin-top: 20px;
   color: green;
  }
  .btn {
   border-radius: 20px;
  }
  .container img {
   margin-top: 80px;
  }
@media (min-width:580px) {
   .jumbotron {
    height: 640px;
   }
   .jumbotron h1, .jumbotron h2 {
    font-size: 32px;
    margin-top: 15px;
   }
  }
 </style>