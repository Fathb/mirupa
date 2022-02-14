<template>
 <div class="container mx-auto text-center">
  <h1 class="text-uppercase">nilai {{mapel}} </h1>
  <table class="table table-striped table-bordered text-center table-md">
   <thead class="thead-dark">
    <tr>
     <th scope="col">no</th>
     <th scope="col" class="text-left">soal</th>
     <th scope="col">jawaban</th>
     <th scope="col">kunci</th>
     <th scope="col">status</th>
    </tr>
   </thead>
   <tbody>
    <tr v-for="(q,n) in quiz" :key="n">
     <td scope="row">{{n+1}}</td>
     <td class="text-left">{{q.soal}}</td>
     <td>{{q.pilihan[jawaban.jawaban[n]]}}</td>
     <td>{{q.pilihan[q.kunci]}}</td>
     <td :class="statusJawaban[n]=='benar'?statusClass:'badge badge-danger'">{{statusJawaban[n]}}</td>
    </tr>
    <tr class="text-center bg-info text-uppercase">
     <td colspan="3" scope="row">score</td>
     <td colspan="2">{{jawaban.score}}</td>
    </tr>
   </tbody>
  </table>
 </div>
</template>
<script>
 export default {
  name: "point page",
  props: {
   quiz: Array,
   jawaban: Object,
   mapel: String
  },
  data() {
   return {
    statusClass: "badge badge-success"
   }
  },
  computed: {
   statusJawaban() {
    let status = []
    for (let n = 0; n < this.quiz.length; n++) {
     if (this.jawaban.jawaban[n] == this.quiz[n].kunci) {
      status.push("benar")
     } else {
      status.push("salah")
     }
    }
    return status;
   }
  }
 }
 </script>