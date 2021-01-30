<template>
  <div class="container">
    <div class="row workingspace">
      <div class="col-lg-6">
        <img src="../../assets/img/mirupa.jpg" alt="mirupa" class="img-fluid"/>
      </div>
      <div class="col-lg-6">
        <h3 class="mt-5">membentuk jiwa berakhlaqul karimah</h3>
        <p>mencerdaskan tunas bangsa santun berwibawa Membangun bangsa bermartabat mulia</p>
        <a href="/" class="btn btn-primary tombol">GALLERY</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'workingSpace'
  }
</script>

<style scoped>
  .workingspace {
    margin-top: 100px;
  }
  
  .workingspace img {
    height: 300px;
    width: 400px;
  }
  
  .workingspace h3 {
    text-transform: uppercase;
    text-align: left;
  }
  
  .workingspace p {
    color: #addaba;
    margin: 25px 0;
    text-align: left;
  }
  
  @media (max-width:992px){
    .workingspace h3 {
      text-align: center;
    }
    
    .workingspace p {
      text-align: center;
    }
  }
  
</style>