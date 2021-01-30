<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <img src="../../assets/logo.png" alt="">
      <h2 class="display-4">Selamat Datang di</h2>
      <h1>MI RAUDLATUL ULUM PUTRA</h1>
      <a href="/" class="btn btn-success mt-2">Daftar</a>
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
      background-position: bottom;
      margin-top: -75px;
      height: 640px;
      position: relative;
    }
    .jumbotron .container {
      position: relative;
      z-index: 1;
    }
    .jumbotron::after {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      background-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0));
      position: absolute;
      bottom: 0px;
    }
    h1, h2 {
      text-shadow: 2px 2px 2px white;
      margin-top: 20px;
      color: green;
    }
    .btn {
      border-radius: 20px;
    }
@media (max-width:992px) {
      .jumbotron {
        height: 640px;
      }
    }
</style>