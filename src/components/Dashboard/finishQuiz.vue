<template>
  <div class="container mx-auto text-center">
    <h5>Siswa yang sudah mengerjakan quiz</h5>
    <table class="table table-md table-bordered">
      <thead class="bg-success">
        <tr>
          <th scope="col">no</th>
          <th scope="col" class="text-left">nama siswa</th>
          <th scope="col">score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!dataSiswa.length">
          <td colspan="3">
            <b>belum ada siswa yang mengerjakan</b>
          </td>
        </tr>
        <tr v-for="(ssw, n) in listJwb" :key="n">
          <td scope="row">{{n+1}}</td>
          <td class="text-left">{{ssw.siswa.name}}</td>
          <td>{{ssw.score}}</td>
        </tr>
      </tbody>
    </table>
    <h5 class="mt-5">daftar soal yang telah di buat</h5>
    <table class="table table-md table-bordered">
      <thead class="bg-primary">
        <tr>
          <th scope="col">no</th>
          <th scope="col" class="text-left">soal</th>
          <th scope="col">pilihan</th>
          <th scope="col">kunci</th>
          <th scope="col">action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(q,n) in quiz" :key="n">
          <td scope="row">{{n+1}}</td>
          <td class="text-left">{{q.soal}}</td>
          <td>
            <ol type="A">
              <li v-for="(c, id) in q.pilihan" :key="id">{{c}}</li>
            </ol>
          </td>
          <td>{{q.pilihan[q.kunci]}}</td>
          <td>
            <span class="badge badge-success">edit</span>
            <span class="badge badge-danger">hapus</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import {
    db
  } from "../../firebase.js";
  export default {
    name: "detail quiz",
    data() {
      return {
        listJwb: []
      }
    },
    props: {
      quiz: Array,
      dataSiswa: Array
    },
    computed: {
      jawabanSiswa() {}
    },
    async created() {
      this.listJwb = []
      for (var i = 0; i < this.dataSiswa.length; i++) {
        let data = {
          score: this.dataSiswa[i].score
        };
        await this.dataSiswa[i].siswaRef.get().then(dtssw=> {
          data.siswa = dtssw.data();
        });
        this.listJwb.push(data);
      };
    }
  }
  </script>