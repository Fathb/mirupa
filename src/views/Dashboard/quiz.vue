<template>
 <div class="container mt-2">
  <h1 class="text-center">Tabel Quiz</h1>
  <button class="btn btn-primary float-right mb-1" @click="modalTambah" v-if="level=='guru'">tambah quiz</button>
  <table class="table table-stripped table-responsive-md">
   <thead class="thead-dark">
    <tr>
     <th scope="col">kelas</th>
     <th scope="col">mapel</th>
     <th scope="col">jenis</th>
     <th scope="col">jumlah soal</th>
     <th scope="col" colspan="2" v-if="level=='guru'">actions</th>
     <th scope="col" colspan="2" v-if="level=='siswa'">status</th>
    </tr>
   </thead>
   <tbody>
    <tr v-for="(quis, idx) in getQuiz" :key="idx">
     <td>{{quis.kelas}}</td>
     <td>
      <router-link :to="'quiz/'+quis.id">
       {{quis.mapel}}
      </router-link>
     </td>
     <td>{{quis.jenis}}</td>
     <td>{{quis.jmlSoal}}</td>
     <td v-if="level=='guru'">
      <span class="btn btn-warning" title="buat soal" @click="modalBuatSoal(idx, quis.id)">
       <i class="fa fa-fw fa-plus"></i>
      </span>
     </td>
     <td v-if="level=='guru'">
      <span class="btn btn-danger ml-1" @click="hapusQuiz(quis.id)">
       <i class="fa fa-fw fa-trash-alt"></i>
      </span>
     </td>
     <td v-if="level=='siswa'">
      <p class="badge badge-danger" v-if="!quis.jawabanSiswa">
       belum mengerjakan
      </p>
      <p class="badge badge-success" v-else>
       sudah mengerjakan
      </p>
     </td>
    </tr>
    <tr>
     <td colspan="6" v-if="getQuiz.length==0" class="text-center">
      <p>
       anda belum membuat quiz
      </p>
     </td>
    </tr>
   </tbody>
  </table>
 </div>
 <modal v-if="modal">
  <h2 class="text-center">Form Tambah quiz</h2>
  <div class="form-group">
   <label for="kelas">Kelas</label>
   <select class="form-control" id="kelas" v-model="quiz.kelas">
    <option v-for="(k,n) in kelas" :value="k" :key="n">{{k}}</option>
   </select>
  </div>
  <div class="form-group">
   <label for="mapel">mapel</label>
   <input type="text" class="form-control" name="mapel" id="mapel" v-model="quiz.mapel" />
  </div>
  <div class="form-group">
   <label for="jam">jenis</label>
   <select class="form-control" id="jam" v-model="quiz.jenis">
    <option v-for="(j,n) in jenis" :value="j" :key="n">{{j}}</option>
   </select>
  </div>
  <div class="form-group">
   <label for="jml-soal">jumlah soal</label>
   <input type="number" class="form-control" name="jml-soal" id="jml-soal" v-model="quiz.jmlSoal" />
  </div>
  <div class="alert alert-danger" v-if="error">
  </div>
  <button class="btn btn-danger" @click="closeModal">cancel</button>
  <button class="btn btn-success ml-1" @click="tambahQuiz">Tambah Quiz</button>
 </modal>
 <modal v-if="modalSoal">
  <div class="form-group">
   <label for="soal">soal</label>
   <textarea class="form-control" name="soal" id="soal" rows="8" cols="40" v-model="items.soal"></textarea>
   <div class="form-row mt-1">
    <div class="col">
     <input type="text" class="form-control" placeholder="jawaban a" v-model="items.pilihan[0]">
    </div>
    <div class="col">
     <input type="text" class="form-control" placeholder="jawaban b" v-model="items.pilihan[1]">
    </div>
   </div>
   <div class="form-row mt-1">
    <div class="col">
     <input type="text" class="form-control" placeholder="jawaban c" v-model="items.pilihan[2]">
    </div>
    <div class="col">
     <input type="text" class="form-control" placeholder="jawaban d" v-model="items.pilihan[3]">
    </div>
   </div>
  </div>
  <div class="form-group row">
   <label for="kunci" class="col-sm-4">kunci jawaban</label>
   <div class="col-sm-2">
    <select name="kunci" id="kunci" class="form-control" v-model="items.kunci">
     <option value="0">A</option>
     <option value="1">B</option>
     <option value="2">C</option>
     <option value="3">D</option>
    </select>
   </div>
  </div>
  <span class="btn btn-danger" @click="modalSoal=false">TUTUP</span>
  <span class="btn btn-info ml-1" @click="buatSoal">{{btnModal}}</span>
 </modal>
</template>
<script>
 import modal from "../../components/Dashboard/Modal";
 import {
  db,
  firebase
 } from "../../firebase";
 export default {
  name: "jadwal",
  components: {
   modal
  },
  data() {
   return {
    modalSoal: false,
    modal: false,
    error: false,
    idxQuiz: 0,
    idx: 0,
    btnModal: 'TAMBAH SOAL',
    items: {
     soal: "",
     pilihan: [],
     kunci: null,
    },
    quiz: {
     jenis: "",
     mapel: "",
     kelas: "",
     jmlSoal: "",
     idGuru: this.$store.state.id,
     items: [],
     jawaban:[]
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
    mapel: "",
    statusOk: []
   }
  },
  computed: {
   getQuiz() {
    return this.$store.state.quiz;
   },
   level() {
    return this.$store.state.level;
   }
  },
  methods: {
   modalTambah() {
    this.modal = !this.modal;
   },
   closeModal() {
    this.quiz.jenis = "";
    this.quiz.kelas = "";
    this.quiz.mapel = "";
    this.quiz.jmlSoal = "";
    this.modal = false;
    this.error = false;
   },
   async tambahQuiz() {
    await db.collection("quiz").add(this.quiz);
    this.closeModal();
   },
   hapusQuiz(doc) {
    db.collection("quiz").doc(doc).delete();
   },
   modalBuatSoal(idx, doc) {
    this.idxQuiz = doc;
    this.idx = idx;
    this.modalSoal = true;
   },
   async buatSoal() {
    if (this.getQuiz[this.idx].items.length >= parseInt(this.getQuiz[this.idx].jmlSoal)) {
     alert("sudah")
    } else {
     await db.collection("quiz").doc(this.idxQuiz).update({
      items: firebase.firestore.FieldValue.arrayUnion(this.items)
     });
    }
    this.items.soal = "";
    this.items.pilihan = ["",
     "",
     "",
     ""];
    this.items.kunci = "";
   }
  },
  created() {
   this.$store.dispatch("getQuizs");
  }
 }
 </script>