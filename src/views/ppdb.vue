<template>
 <Navbar></Navbar>
 <div class="row navPpdb border-bottom pb-2">
  <div class="col">
   <button class="btn btn-primary" @click="showListSiswa">Daftar calon siswa</button>
  </div>
  <div class="col">
   <button class="btn btn-primary" @click="showFormulir">Formulir pendaftaran</button>
  </div>
 </div>
 <formulir v-if="formulir"></formulir>
 <listSiswa v-if="listSiswa"></listSiswa>
 <Footer></Footer>
</template>
<script>
 import Navbar from '../components/layout/navbar.vue'
 import Footer from '../components/layout/footer.vue'
 import formulir from '../components/ppdb/formulir.vue'
 import listSiswa from '../components/ppdb/listSiswa.vue'

 export default {
  name: "ppdb",
  components: {
   Navbar,
   Footer,
   formulir,
   listSiswa
  },
  data() {
   return {
    formulir: true,
    listSiswa: false
   }
  },
  created() {
   if (!this.$route.query.listSiswa) {
    this.formulir = true,
    this.listSiswa = false
   } else {
    this.formulir = false,
    this.listSiswa = true
   }
  },
  methods: {
   showFormulir() {
    this.formulir = true;
    this.listSiswa = false;
   },
   showListSiswa() {
    this.formulir = false;
    this.listSiswa = true;
   }
  }
 }
 </script>
 <style scoped>
  .navPpdb {
   margin-top: 75px;
  }

 </style>