<template>
 <div class="container mt-2">
  <h1 class="text-center">Jadwal Pelajaran MIRUPa</h1>
  <button class="btn btn-primary float-right mb-1" @click="modalToggle" v-if="admin">tambah jadwal</button>
  <table class="table table-stripped table-md">
   <thead class="thead-dark">
    <tr>
     <th scope="col">No</th>
     <th scope="col">Hari</th>
     <th scope="col">Jam</th>
     <th scope="col">kelas</th>
     <th scope="col">Guru</th>
     <th scope="col">Mata Pelajaran</th>
     <th scope="col" v-if="admin">actions</th>
    </tr>
   </thead>
   <tbody>
    <tr v-for="(jdw, n) in jadwals" :key="n">
     <th scope="row">{{n+1}}</th>
     <td>{{jdw.hari}}</td>
     <td>ke - {{jdw.jam}}</td>
     <td>{{jdw.kelas}}</td>
     <td>{{jdw.guru}}</td>
     <td>{{jdw.mapel}}</td>
     <td v-if="admin">
      <span class="btn btn-warning"><i class="fas fa-fw fa-pencil-alt"></i></span>
      <span class="btn btn-danger ml-1"><i class="fas fa-fw fa-trash-alt"></i></span>
     </td>
    </tr>
   </tbody>
  </table>
 </div>
 <modal v-if="modal">
  <h2 class="text-center">Form Tambah Jadwal</h2>
  <div class="form-group">
   <label for="hari">Hari</label>
   <select class="form-control" id="hari" v-model="jadwal.hari">
    <option v-for="(h,n) in hari" :value="h" :key="n">{{h}}</option>
   </select>
  </div>
  <div class="form-group">
   <label for="jam">Jam</label>
   <select class="form-control" id="jam" v-model="jadwal.jam">
    <option v-for="(j,n) in jam" :value="j" :key="n">{{j}}</option>
   </select>
  </div>
  <div class="form-group">
   <label for="guru">Guru</label>
   <select class="form-control" id="guru" v-model="jadwal.guru">
    <option v-for="(g,n) in guru" :value="g" :key="n">{{g}}</option>
   </select>
  </div>
  <div class="form-group">
   <label for="kelas">Kelas</label>
   <select class="form-control" id="kelas" v-model="jadwal.kelas">
    <option v-for="(k,n) in kelas" :value="k" :key="n">{{k}}</option>
   </select>
  </div>
  <div class="form-group">
   <label for="mapel">Mata Pelajaran</label>
   <input class="form-control" type="text" name="" id="mapel" v-model="jadwal.mapel" />
  </div>
  <button class="btn btn-danger" @click="closeModal">cancel</button>
  <button class="btn btn-success ml-1" @click="tambahJadwal">submit</button>
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
    jadwal: {
     hari: "",
     jam: null,
     guru: "",
     kelas: null,
     mapel: ""
    },
    hari: ["Senin",
     "Selasa",
     "Rabu",
     "kamis",
     "Sabtu",
     "Ahad"],
    jam: [1,
     2,
     3,
     4,
     5,
     6,
     7,
     8],
    guru: [],
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
  computed: {
   jadwals () {
    return this.$store.state.jadwals;
   },
   admin() {
    const level = this.$store.state.level;
    if (level != 'admin') {
     return false;
    } else {
     return true;
    }
   }
  },
  methods: {
   modalToggle() {
    this.guru = [];
    db.collection("users").where("level", "!=", "siswa").get().then(data=> {
     data.forEach(guru=> {
      this.guru.push(guru.data().name);
     })
    }).catch(err=> {
     console.log(err);
    })
    this.modal = !this.modal;
   },
   closeModal() {
    this.modal = !this.modal;
   },
   tambahJadwal() {
    db.collection("jadwal").add(this.jadwal).then(()=> {
     this.jadwal.hari = "";
     this.jadwal.jam = null;
     this.jadwal.guru = "";
     this.jadwal.kelas = null;
     this.jadwal.mapel = "";
     this.modal = !this.modal;
    }).catch(err=> {
     console.log(err);
    })
   }
  }
 }
 </script>