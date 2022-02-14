<template>
  <finish-quiz
    v-if="level=='guru'"
    :quiz="getQuizs"
    :dataSiswa="getJawabanQuizs"></finish-quiz>
  <page-nilai
    :quiz="getQuizs"
    :jawaban="getJawaban"
    :mapel="mapel"
    v-if="getJawaban"
    >
  </page-nilai>
  <div class="container mx-auto mt-3" v-else-if="level!='guru'">
    <div v-if="!getQuizs">
      <h3 class="text-center">
        belum ada soal untuk quiz ini
      </h3>
    </div>
    <div v-if="getQuizs">
      <div class="row pb-2 border-bottom border-dark">
        <div class="col-sm-1 mb-1 justify-content-center" v-for="(quis, id) in getQuizs" :key="id">
          <span :class="jawabans[id]?'btn btn-primary': idxItem == id?'btn btn-danger':'btn btn-outline-danger'" @click="gantiSoal(id)">{{id+1}}</span>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-12">
          <p>
            {{getQuizs[idxItem].soal}}
          </p>
        </div>
        <div class="col-6 form-check" v-for="(plh, n) in getQuizs[idxItem].pilihan" :key="n">
          <input class="form-check-input" type="radio" v-model="jawabans[idxItem]" :value="n.toString()" :id="plh" />
          <label class="form-check-label" :for="plh">{{plh}}</label>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-6"></div>
        <div class="col-6">
          <span class="btn btn-success" @click="simpanjawaban">{{btnNext}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import nilai from "../../components/Dashboard/nilaiSiswa.vue";
  import finish from "../../components/Dashboard/finishQuiz.vue";
  import {
    db
  } from "../../firebase.js";
  export default {
    name: "halaman soal",
    components: {
      "page-nilai": nilai,
      "finish-quiz": finish
    },
    data() {
      return {
        mapel: "arab",
        quizId: this.$route.params.idQuiz,
        idxItem: 0,
        jawabans: [],
        level: this.$store.state.level
      }
    },
    computed: {
      score() {
        let nilai = 0;
        for (var i = 0; i < this.jawabans.length; i++) {
          if (this.getQuizs[i].kunci == this.jawabans[i]) {
            nilai += 1;
          }
        }
        return Math.round(nilai * (100 / this.getQuizs.length));
      },
      btnNext() {
        if (this.idxItem + 1 === this.getQuizs.length) {
          return 'simpan jawaban'
        } else {
          return 'Next'
        }
      },
      getJawabanQuizs() {
        const quizs = this.$store.state.quiz;
        const quiz = quizs.find(q=> {
          return q.id === this.quizId;
        })
        let b = [];
        quiz.jawaban.forEach(dataJawaban=> {
            b.push(dataJawaban)
        });
        return b
      },
      getQuizs() {
        const quizs = this.$store.state.quiz;
        const quiz = quizs.find(q=> {
          return q.id === this.quizId;
        })
        if (quiz.items.length > 0) {
          this.mapel = quiz.mapel;
          return quiz.items;
        } else {
          this.mapel = quiz.mapel;
          return null
        }
      },
      getJawaban() {
        const quizs = this.$store.state.quiz;
        const quiz = quizs.find(q=> {
          return q.id === this.quizId;
        })
        const jawaban = quiz.jawaban.find(({
          siswaRef
        })=> {
          return siswaRef.id === this.$store.state.id;
        })
        return jawaban
      }
    },
    methods: {
      gantiSoal(id) {
        this.idxItem = id;
      },
      simpanjawaban() {
        if (this.btnNext == 'simpan jawaban') {
          var data = {
            id: this.quizId,
            jawaban: this.jawabans,
            score: this.score,
            siswaRef: db.doc('users/'+this.$store.state.id)
          };

          this.$swal.fire({
            title: 'yakin dengan jawabannya?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              this.$store.commit("simpanjawaban", data);
              this.$swal.fire(
                'terima kasih!',
                'jawaban anda tersimpan'
              )
            }
          })
        } else {
          this.idxItem += 1;
        }
      }
    }
  }
  </script>
  <style scoped>

  </style>