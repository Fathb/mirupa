<template>
  <div class="container">
    <div class="row workingspace">
      <div class="col-lg-6">
        <img src="../../assets/img/mirupa.jpg" alt="mirupa" class="img-fluid"/>
      </div>
      <div class="col-lg-6 text-center">
        <h3 class="mt-5">membentuk jiwa berakhlaqul karimah</h3>
        <p>mencerdaskan tunas bangsa santun berwibawa Membangun bangsa bermartabat mulia</p>
        <a href="/gallery" class="btn btn-primary tombol">GALLERY</a>
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
    margin-left: 3.5rem;
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
/*   .workingspace a {
 margin: 5px 13em;
} */
  
  @media (min-width:578px){
    .workingspace h3 {
      text-align: center;
    }
    
    .workingspace p,
    .workingspace a {
      text-align: center;
    }
  }
  
</style>