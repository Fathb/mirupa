<template>
 <div class="content">
  <div class="row">
   <div class="col header d-flex align-items-center justify-content-center border-bottom border-dark">
    <img src="../assets/logo.jpeg" alt="" class="mb-2" />
    <div class="textkop mb-2 text-left">
     <h3>YPPP RAUDLATUL ULUM</h3>
     <h2>MI RAUDLATUL ULUM PUTRA</h2>
     <small>Jl Raya No 02 Ganjaran Gondanglegi Malang pos 65174</small>
    </div>
   </div>
  </div>
  <div class="row title mt-2 mb-4">
   <div class="col">
    <h6>DETAIL DATA CALON SISWA</h6>
    <h8>MIRUPa</h8>
   </div>
  </div>
  <div class="row datasiswa mt-2 mb-2">
   <div class="col text-left">
    <h6>A. DATA SISWA</h6>
   </div>
  </div>
  <table class="table table-purple table-striped">
   <tbody>
    <tr>
     <th class="text-left" scope="col"><label for="noKk">No KK</label></th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      {{siswa.noKk}}
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="row">NIK</th>
     <td class="text-right">:</td>
     <td>
      {{siswa.noNIK}}
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="row">NAMA LENGKAP</th>
     <td class="text-right">:</td>
     <td>
      {{siswa.nama.toUpperCase()}}
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="row">ALAMAT</th>
     <td class="text-right">:</td>
     <td>
      {{siswa.alamat.toUpperCase()}}
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="row">TEMPAT LAHIR</th>
     <td class="text-right">:</td>
     <td>
      {{siswa.tempatlahir.toUpperCase()}}
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="row">TANGGAL LAHIR</th>
     <td class="text-right">:</td>
     <td>
      {{siswa.tanggallahir}}
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="row">HOBI</th>
     <td class="text-right">:</td>
     <td class="d-block text-left">
      <p v-for="(h, idx) in siswa.hobi" :key="idx">
       {{idx+1}}. {{h}}
      </p>
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="row">SEKOLAH ASAL</th>
     <td class="text-right">:</td>
     <td>
      {{siswa.sekolahasal.toUpperCase()}}
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="row">Nilai Rata-Rata di Ijazah R.A</th>
     <td class="text-right">:</td>
     <td>
      {{siswa.nilai}}
     </td>
    </tr>
   </tbody>
  </table>
  <div class="row datasiswa mt-5 mb-2">
   <div class="col text-left">
    <h6>B. DATA AYAH</h6>
   </div>
  </div>
  <table class="table table-striped">
   <tbody>
    <tr>
     <th class="text-left" scope="col">NIK</th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      {{siswa.ayah.nik}}
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="col">NAMA</th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      {{siswa.ayah.nama.toUpperCase()}}
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="col">ALAMAT</th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      {{siswa.ayah.alamat.toUpperCase()}}
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="col">PEKERJAAN</th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      {{siswa.ayah.pekerjaan.toUpperCase()}}
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="col">CONTACT</th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      {{siswa.ayah.kontak}}
     </td>
    </tr>
   </tbody>
  </table>
  <div class="row datasiswa mt-5 mb-2">
   <div class="col text-left">
    <h6>C. DATA IBU</h6>
   </div>
  </div>
  <table class="table table-striped">
   <tbody>
    <tr>
     <th class="text-left" scope="col">NIK</th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      {{siswa.ibu.nik}}
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="col">NAMA</th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      {{siswa.ibu.nama.toUpperCase()}}
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="col">ALAMAT</th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      {{siswa.ibu.alamat.toUpperCase()}}
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="col">PEKERJAAN</th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      {{siswa.ibu.pekerjaan.toUpperCase()}}
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="col">CONTACT</th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      {{siswa.ibu.kontak.toUpperCase()}}
     </td>
    </tr>
   </tbody>
  </table>
  <a href="/ppdb?listSiswa=true" class="btn btn-primary float-left">KEMBALI</a>
  <div class="ttd text-left float-right">
   <p>
    Ganjaran, {{day}} {{month[new Date().getMonth()]}} {{year}}
   </p>
   <p>
    WALI CALON SISWA
   </p>
   <p>
    {{siswa.ayah.nama.toUpperCase()}}
   </p>
  </div>
 </div>
</template>
<script>
 import {
  db
 } from '../firebase.js';

 const siswaCollection = db.collection('siswa');

 export default {
  name: 'detailSiswa',
  data() {
   return {
    id: this.$route.params.id,
    siswa: null,
    day: new Date().getDate().toLocaleString(),
    month: ["Januari",
     "Februari",
     "Maret",
     "April",
     "Mei",
     "Juni",
     "Juli",
     "Agustus",
     "September",
     "November",
     "Desember"],
    year: new Date().getFullYear()
   }
  },
  created() {
   siswaCollection.doc(this.id).get().then(detail => {
    this.siswa = detail.data();
   });

  }
 }
 </script>

 <style scoped>
  .content {
   margin: 20px auto;
   padding: 0;
   width: 80%;
   position: relative;
  }
  h1, h2, h3, h4, h5, h6, h7, h8 {
   margin: 0;
  }
  .header img {
   height: 90px;
   width: 120px;
  }
  .content th {
   width: 30%;
  }
  .content td:nth-child(3) {
   width: 68%;
   text-align: left;
  }
  .ttd {
   font-size: 1.2rem;
   padding: 0;
  }
  .ttd p {
   margin: 0;
  }
  .ttd p:nth-child(3) {
   margin-top: 100px;
  }
 </style>