<template>
 <div class="container mt-2">
  <h1 class="text-center">Jadwal Pelajaran MIRUPa</h1>
  <button class="btn btn-primary float-right mb-1" @click="modalTambah" v-if="admin">tambah jadwal</button>
  <table class="table table-stripped table-responsive-md">
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
      <span class="btn btn-warning" @click="modalUpdate(n)">
       <i class="fas fa-fw fa-pencil-alt"></i>
      </span>
      <span class="btn btn-danger ml-1" @click="hapusJdw(jdw.id)">
       <i class="fas fa-fw fa-trash-alt"></i>
      </span>
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
  <div class="alert alert-danger" v-if="error">
   {{checkJdw}}
  </div>
  <button class="btn btn-danger" @click="closeModal">cancel</button>
  <button class="btn btn-success ml-1" @click="tambahJadwal">{{btnModal}}</button>
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
    btnModal: 'tambah jadwal',
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
   },
   checkJdw() {
    let msg;
    if (this.jadwal.hari == '' || this.jadwal.jam == null || this.jadwal.kelas == null || this.jadwal.guru == '' || this.jadwal.mapel == '') {
     this.error = true;
     msg = 'form tidak boleh ada yang kosong';
    } else {
     this.jadwals.forEach((jdw)=> {
      if (this.jadwal.hari == jdw.hari && this.jadwal.jam == jdw.jam && this.jadwal.kelas == jdw.kelas) {
       this.error = true;
       msg = 'jadwal kelas sudah terisi';
      } else if (this.jadwal.hari == jdw.hari && this.jadwal.jam == jdw.jam && this.jadwal.guru == jdw.guru) {
       this.error = true;
       msg = 'guru terjadwal di kelas lain'
      }
     });
    }
    this.error = false;
    return msg;
   },
   checkJdwUpdate() {
    let msg;
    this.jadwals.forEach((jdw)=> {
     if (this.jadwal.hari == jdw.hari && this.jadwal.jam == jdw.jam && this.jadwal.kelas == jdw.kelas && this.jadwal.id != jdw.id) {
      this.error = true;
      msg = 'jadwal kelas sudah terisi';
     } else if (this.jadwal.hari == jdw.hari && this.jadwal.jam == jdw.jam && this.jadwal.guru == jdw.guru && this.jadwal.id != jdw.id) {
      this.error = true;
      msg = 'guru terjadwal di kelas lain'
     }
    });
    return msg;
   }
  },
  created() {
   this.getGuru();
  },
  methods: {
   modalTambah() {
    this.btnModal = 'tambah jadwal';
    this.modal = !this.modal;
   },
   closeModal() {
    this.jadwal.hari = "";
    this.jadwal.jam = null;
    this.jadwal.guru = "";
    this.jadwal.kelas = null;
    this.jadwal.mapel = "";
    this.modal = false;
    this.error = false;
   },
   tambahJadwal() {
    if (this.btnModal == 'tambah jadwal') {
     if (this.checkJdw) {
      this.error = true;
     } else {
      db.collection("jadwal").add(this.jadwal).then(()=> {
       this.closeModal();
      }).catch(err=> {
       console.log(err);
      })
     }
    } else {
     if (this.checkJdwUpdate) {
      this.error = true;
     } else {
      this.$store.commit("updateJadwal", this.jadwal);
      this.modal = false;
     }
    }
   },
   getGuru() {
    this.guru = [];
    db.collection("users").where("level",
     "!=",
     "siswa").get().then(data=> {
      data.forEach(guru=> {
       this.guru.push(guru.data().name);
      })
     }).catch(err=> {
      console.log(err);
     })
   },
   hapusJdw (id) {
    db.collection('jadwal').doc(id).delete();
   },
   modalUpdate(idx) {
    this.jadwal.hari = this.jadwals[idx].hari;
    this.jadwal.jam = this.jadwals[idx].jam;
    this.jadwal.guru = this.jadwals[idx].guru;
    this.jadwal.kelas = this.jadwals[idx].kelas;
    this.jadwal.mapel = this.jadwals[idx].mapel;
    this.jadwal.id = this.jadwals[idx].id;
    this.btnModal = 'update jadwal';
    this.modal = true;
   }
  }
 }
 </script>