<template>
 <h1>DAFTAR CALON SISWA TERDAFTAR</h1>
 <div class="container d-flex justify-content-center">
  <div class="row justify-content-center">
   <div class="col-m ml-2 mb-2" v-for="(s, idx) in siswas" :key="idx">
    <div class="card h-100 w-100" style="width: 18rem;">
     <div class="card-body">
      <h5 class="card-title">{{s.siswa.nama}}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{s.id}}</h6>
      <p class="card-text">
       lahir di {{s.siswa.tempatlahir}} pada {{s.siswa.tanggallahir}} dari pasangan {{s.siswa.ayah.nama}} dan {{s.siswa.ibu.nama}}.
      </p>
      <a href="#" class="card-link">edit</a>
      <a :href="'siswa/'+s.id" class="card-link">details</a>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>
<script>
 import {
  db
 } from '../../firebase.js';

 const siswaCollection = db.collection('siswa');

 export default {
  name: 'listSiswa',
  data() {
   return {
    siswas: []
   }
  },
  created() {
   siswaCollection.get().then(querySiswa => {
    querySiswa.forEach(doc => {
     const siswa = doc.data();
     const data = {
      id: doc.id,
      siswa
     };
     this.siswas.push(data);
    })
   })
  }
 }
 </script>
 <style scoped>
  h1 {
   margin-top: 25px;
  }
  .card {
   text-align: left;
  }
  .row {
   position: relative;
  }
 </style>