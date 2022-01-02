<template>
 <div class="container mt-2">
  <h1 class="text-center">Tabel Quiz</h1>
  <button class="btn btn-primary float-right mb-1" @click="modalTambah">tambah quiz</button>
  <table class="table table-stripped table-responsive-md">
   <thead class="thead-dark">
    <tr>
     <th scope="col">No</th>
     <th scope="col">kelas</th>
     <th scope="col">mapel</th>
     <th scope="col">jenis</th>
     <th scope="col">jumlah soal</th>
     <th scope="col">actions</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>1</td>
     <td>1</td>
     <td>MTK</td>
     <td>ulangan harian</td>
     <td>15</td>
     <td>
      <div class="btn btn-primary">
       edit
      </div>
      <div class="btn btn-warning ml-1">
       buat soal
      </div>
      <div class="btn btn-danger ml-1">
       hapus
      </div>
     </td>
    </tr>
   </tbody>
  </table>
 </div>
 <modal v-if="modal">
  <h2 class="text-center">Form Tambah quiz</h2>
  <div class="form-group">
   <label for="kelas">Kelas</label>
   <select class="form-control" id="kelas">
    <option v-for="(k,n) in kelas" :value="k" :key="n">{{k}}</option>
   </select>
  </div>
  <div class="form-group">
   <label for="mapel">mapel</label>
   <input type="text" class="form-control" name="mapel" id="mapel" />
  </div>
  <div class="form-group">
   <label for="jam">jenis</label>
   <select class="form-control" id="jam">
    <option v-for="(j,n) in jenis" :value="j" :key="n">{{j}}</option>
   </select>
  </div>
  <div class="form-group">
   <label for="jml-soal">jumlah soal</label>
   <input type="number" class="form-control" name="jml-soal" id="jml-soal" />
  </div>
  <div class="alert alert-danger" v-if="error">
   {{checkJdw}}
  </div>
  <button class="btn btn-danger" @click="closeModal">cancel</button>
  <button class="btn btn-success ml-1">{{btnModal}}</button>
 </modal>
</template>
<script>
 import modal from "../../components/Dashboard/Modal";
 import {
  db
 } from "../../firebase";
 export default {
  name: "jadwal",
  components: {
   modal
  },
  data() {
   return {
    modal: false,
    error: false,
    btnModal: 'tambah quiz',
    quiz: {
     jenis: "",
     mapel: "",
     kelas: "",
     jmlSoal: ""
    },
    jenis: ["ulangan harian",
     "PTS I",
     "PAS",
     "PTS II",
     "PAT"],
    kelas: ["1",
     "2",
     "3",
     "4",
     "5",
     "6A",
     "6B"],
    mapel: ""
   }
  },
  methods: {
   modalTambah() {
    this.btnModal = 'tambah jadwal';
    this.modal = !this.modal;
   },
   closeModal() {
    this.modal = false;
    this.error = false;
   }
  }
 }
 </script>