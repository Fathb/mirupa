<template>
 <div class="content">
  <div class="row">
   <div class="col header d-flex align-items-center justify-content-center border-bottom border-dark">
    <img src="../../assets/logo.jpeg" alt="" class="mb-2 mr-2" />
    <div class="textkop mb-2 text-center">
     <h3>YPPP RAUDLATUL ULUM</h3>
     <h2>MI RAUDLATUL ULUM PUTRA</h2>
     <small>Jl Raya No 02 Ganjaran Gondanglegi Malang pos 65174</small>
    </div>
   </div>
  </div>
  <div class="row title mt-2 mb-4">
   <div class="col text-center">
    <h4>FORMULIR</h4>
    <h6>PENERIMAAN PESERTA DIDIK BARU</h6>
    <h6>PERIODE 2021 - 2022</h6>
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
      <input type="number" class="form-control" name="noKk" id="noKk" v-model="siswa.noKk" />
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="row">NIK</th>
     <td class="text-right">:</td>
     <td>
      <input type="number" class="form-control" name="noNIK" id="noNIK" v-model="siswa.noNIK" />
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="row">NAMA LENGKAP</th>
     <td class="text-right">:</td>
     <td>
      <input type="text" class="form-control" name="namasiswa" id="namasiswa" v-model="siswa.nama" />
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="row">ALAMAT</th>
     <td class="text-right">:</td>
     <td>
      <input type="textarea" class="form-control" name="alamat" id="alamat" v-model="siswa.alamat" />
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="row">TEMPAT LAHIR</th>
     <td class="text-right">:</td>
     <td>
      <input type="text" class="form-control" name="tempatlahir" id="tempatlahir" v-model="siswa.tempatlahir" />
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="row">TANGGAL LAHIR</th>
     <td class="text-right">:</td>
     <td>
      <input type="date" class="form-control" name="tanggallahir" id="tanggallahir" v-model="siswa.tanggallahir" />
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="row">HOBI</th>
     <td class="text-right">:</td>
     <td class="d-block text-left">
      <div class="custom-control custom-checkbox">
       <input type="checkbox" class="custom-control-input" id="membaca" value="membaca" v-model="siswa.hobi">
       <label class="custom-control-label" for="membaca">membaca</label>
      </div>
      <div class="custom-control custom-checkbox">
       <input type="checkbox" class="custom-control-input" id="menulis" value="menulis" v-model="siswa.hobi">
       <label class="custom-control-label" for="menulis">menulis</label>
      </div>
      <div class="custom-control custom-checkbox">
       <input type="checkbox" class="custom-control-input" id="menyanyi" value="menyanyi / qiroah / olah vokal" v-model="siswa.hobi">
       <label class="custom-control-label" for="menyanyi">menyanyi / qiroah / olah vokal</label>
      </div>
      <div class="custom-control custom-checkbox">
       <input type="checkbox" class="custom-control-input" id="berenang" value="berenang" v-model="siswa.hobi">
       <label class="custom-control-label" for="berenang">berenang</label>
      </div>
      <div class="custom-control custom-checkbox">
       <input type="checkbox" class="custom-control-input" id="sepakbola" value="Sepak Bola / Badminton" v-model="siswa.hobi">
       <label class="custom-control-label" for="sepakbola">Sepak Bola / Badminton</label>
      </div>
      <input type="text" class="form-control" id="dll" name="dll" placeholder="lain-lain" v-model="siswa.hobi[0]">
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="row">SEKOLAH ASAL</th>
     <td class="text-right">:</td>
     <td>
      <input type="text" class="form-control" name="sekolahasal" id="sekolahasal" v-model="siswa.sekolahasal" />
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="row">Nilai Rata-Rata di Ijazah R.A</th>
     <td class="text-right">:</td>
     <td>
      <input type="text" class="form-control" name="avrg" id="avrg" v-model="siswa.nilai" placeholder="boleh dikosongi" />
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
      <input type="number" class="form-control" name="nikAyah" id="nikAyah" v-model="siswa.ayah.nik" />
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="col">NAMA</th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      <input type="text" class="form-control" name="namaAyah" id="namaAyah" v-model="siswa.ayah.nama" />
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="col">ALAMAT</th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      <input type="text" class="form-control" name="alamatAyah" id="alamatAyah" v-model="siswa.ayah.alamat" />
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="col">PEKERJAAN</th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      <input type="text" class="form-control" name="pekerjaanAyah" id="pekerjaanAyah" v-model="siswa.ayah.pekerjaan" />
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="col">CONTACT</th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      <input type="text" class="form-control" name="kontakAyah" id="kontakAyah" v-model="siswa.ayah.kontak" />
      <small>no hp/WA/email/</small>
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
      <input type="number" class="form-control" name="nikIbu" id="nikIbu" v-model="siswa.ibu.nik" />
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="col">NAMA</th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      <input type="text" class="form-control" name="namaIbu" id="namaIbu" v-model="siswa.ibu.nama" />
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="col">ALAMAT</th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      <input type="text" class="form-control" name="alamatIbu" id="alamatIbu" v-model="siswa.ibu.alamat" />
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="col">PEKERJAAN</th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      <input type="text" class="form-control" name="pekerjaanIbu" id="pekerjaanIbu" v-model="siswa.ibu.pekerjaan" />
     </td>
    </tr>
    <tr>
     <th class="text-left" scope="col">CONTACT</th>
     <td class="text-right" scope="col">:</td>
     <td scope="col" class="">
      <input type="text" class="form-control" name="kontakIbu" id="kontakIbu" v-model="siswa.ibu.kontak" />
      <small>no hp/WA/email/</small>
     </td>
    </tr>
   </tbody>
  </table>
  <div :class="'alert alert-'+msgClass" role="alert" v-for="e in errors" :key="e.id">
   {{e}}
  </div>
  <button class="btn btn-primary" v-on:click="inputsiswa">DAFTAR</button>
 </div>

</template>
<script>
 import {
  db
 } from '../../firebase.js';

 const siswaCollection = db.collection('siswa');

 export default {
  name: 'formulir PPDB',
  data() {
   return {
    siswa: {
     noKk: null,
     noNIK: null,
     nama: '',
     alamat: '',
     tempatlahir: '',
     tanggallahir: null,
     hobi: ['',
     ],
     sekolahasal: '',
     nilai: null,
     ayah: {
      nik: null,
      nama: '',
      alamat: '',
      pekerjaan: '',
      kontak: ''
     },
     ibu: {
      nik: null,
      nama: '',
      alamat: '',
      pekerjaan: '',
      kontak: ''
     }
    },
    errors: [],
    msgClass: 'danger'
   }
  },
  methods: {
   async inputsiswa() {
    this.errors = [];
    if (this.siswa.noKk == null || this.siswa.noKk.length != 16) {
     const msgErr = 'nomor KK salah atau kosong';
     this.errors.push(msgErr);
    }
    if (this.siswa.noNIK == null || this.siswa.noNIK.length != 16) {
     const msgErr = 'nomor NIK salah atau kosong';
     this.errors.push(msgErr);
    }
    if (this.siswa.nama == '') {
     const msgErr = 'nama harus di isi';
     this.errors.push(msgErr);
    }
    if (this.siswa.alamat == '') {
     const msgErr = 'alamat harus di isi';
     this.errors.push(msgErr);
    }
    if (this.siswa.tempatlahir == '') {
     const msgErr = 'tempat lahir harus di isi';
     this.errors.push(msgErr);
    }
    if (this.siswa.tanggallahir == null) {
     const msgErr = 'tanggal lahir harus di isi';
     this.errors.push(msgErr);
    }
    if (this.siswa.hobi[0] == '' && this.siswa.hobi.length <= 1) {
     const msgErr = 'hobi harus di isi';
     this.errors.push(msgErr);
    }
    if (this.siswa.sekolahasal == '') {
     const msgErr = 'sekolah asal harus di isi';
     this.errors.push(msgErr);
    }
    if (this.siswa.ayah.nik == null || this.siswa.ayah.nik.length != 16) {
     const msgErr = 'nomorn nik ayah salah atau kosong';
     this.errors.push(msgErr);
    }
    if (this.siswa.ayah.nama == '') {
     const msgErr = 'nama ayah harus di isi';
     this.errors.push(msgErr);
    }
    if (this.siswa.ayah.alamat == '') {
     const msgErr = 'alamat ayah harus di isi';
     this.errors.push(msgErr);
    }
    if (this.siswa.ayah.pekerjaan == '') {
     const msgErr = 'pekerjaan ayah harus di isi';
     this.errors.push(msgErr);
    }
    if (this.siswa.ayah.kontak == '') {
     const msgErr = 'kontak ayah harus di isi';
     this.errors.push(msgErr);
    }
    if (this.siswa.ibu.nik == null || this.siswa.ibu.nik.length != 16) {
     const msgErr = 'nomorn nik ibu salah atau kosong';
     this.errors.push(msgErr);
    }
    if (this.siswa.ibu.nama == '') {
     const msgErr = 'nama ibu harus di isi';
     this.errors.push(msgErr);
    }
    if (this.siswa.ibu.alamat == '') {
     const msgErr = 'alamat ibu harus di isi';
     this.errors.push(msgErr);
    }
    if (this.siswa.ibu.pekerjaan == '') {
     const msgErr = 'pekerjaan ibu harus di isi';
     this.errors.push(msgErr);
    }
    if (this.siswa.ibu.kontak == '') {
     const msgErr = 'kontak ibu harus di isi';
     this.errors.push(msgErr);
    }
    if (!this.errors.length) {
     await siswaCollection.doc(this.$store.state.id).set(this.siswa);
     const msgSuccess = 'biodata berhasil diinput';
     this.msgClass = 'success';
     this.errors.push(msgSuccess);
     this.siswa.noKk = null;
     this.siswa.noNIK = null;
     this.siswa.nama = '';
     this.siswa.alamat = '';
     this.siswa.hobi = ['',
     ];
     this.siswa.tempatlahir = '';
     this.siswa.tanggallahir = null;
     this.siswa.nilai = null;
     this.siswa.sekolahasal = '';
     this.siswa.ayah.nama = '';
     this.siswa.ayah.alamat = '';
     this.siswa.ayah.pekerjaan = '';
     this.siswa.ayah.kontak = '';
     this.siswa.ayah.nik = null;
     this.siswa.ibu.nama = '';
     this.siswa.ibu.alamat = '';
     this.siswa.ibu.pekerjaan = '';
     this.siswa.ibu.kontak = '';
     this.siswa.ibu.nik = null;

    }
   }
  }
 }
 </script>
 <style scoped>
  .content {
   margin: 20px auto;
   padding: 0;
   width: 85%;
   position: relative;
  }
  .textkop h2 {
   font-size: 1.5rem;
   font-weight: 800;
  }
  .textkop h3 {
   font-size: 1.3rem;
   font-weight: 650;
  }
  h1, h2, h3, h4, h5, h6 {
   margin: 0;
  }
  .header img {
   height: 90px;
   width: 120px;
  }
  .content th {
   width: 30%;
  }
 </style>