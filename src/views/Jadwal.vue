<template>
 <nav-bar></nav-bar>
 <div class="container" style="margin-top: 80px;">
  <h1 class="text-center">Jadwal Pelajaran MIRUPa</h1>
  <table class="table table-stripped table-md">
   <thead class="thead-dark">
    <tr>
     <th scope="col">No</th>
     <th scope="col">Hari</th>
     <th scope="col">Jam</th>
     <th scope="col">kelas</th>
     <th scope="col">Guru</th>
     <th scope="col">Mata Pelajaran</th>
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
    </tr>
   </tbody>
  </table>
 </div>
 <foot-bar></foot-bar>
</template>
<script>
 import navbar from "../components/layout/navbar";
 import footer from "../components/layout/footer";

 export default {
  name: "jadwal",
  components: {
   'nav-bar': navbar,
   'foot-bar': footer
  },
  computed: {
   jadwals() {
    return this.$store.state.jadwals;
   }
  }
 }
 </script>