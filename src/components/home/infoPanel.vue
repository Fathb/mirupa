<template>
  <div class="container">
    
    <div class="row justify-content-center">
      <div class="col-10 info-panel">
        <div class="row">
          <div class="col">
            <img src="../../assets/img/infoP1.png" alt="visi & misi" class="float-left"/>
            <h4> Alamat</h4>
            <p>jl Raya 02 Ganjaran</p>
          </div>
          <div class="col">
            <img src="../../assets/img/infoP2.png" alt="visi & misi" class="float-left"/>
            <h4> JADWAL</h4>
            <p>Sabtu - Kamis,<br/> 06.30 - 14.00</p>
          </div>
          <div class="col">
            <img src="../../assets/img/infoP3.png" alt="visi & misi" class="float-left"/>
            <h4>Contact</h4>
            <p>+62 815 4515 1500</p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'infoP'
  }
</script>

<style scoped>
  .info-panel {
    border-radius: 2px;
    box-shadow: 0px 2px 20px green;
    padding: 20px;
    margin-top: -95px;
    background-color: white;
  }
  
  .info-panel img {
    height: 80px;
    width: 80px;
    margin-right: 30px;
    margin-bottom: 20px;
  }
  
  .info-panel h4 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 15px;
    text-align: left;
  }
  .info-panel p {
    font-size: 14px;
    font-weight: bold;
    margin-top: -5px;
    color: #a9c9bd;
    text-align: left;
  }
</style>