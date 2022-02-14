<template>
 <formulir v-if="!detail"></formulir>
 <Details v-if="detail"></Details>
</template>
<script>
 import formulir from '../components/ppdb/formulir.vue';
 import Details from "./detailSiswa.vue";
 import {
  db
 } from "../firebase.js";

 export default {
  name: "ppdb",
  components: {
   formulir,
   Details
  },
  data(){
   return {
    detail: false
   }
  },
  async created(){
   let data = await db.collection("siswa").doc(this.$store.state.id);
   data = await data.get();
   if(data.exists){
    this.detail = true;
    this.$store.commit("setDetails", data.data())
   }
  }
 }
 </script>
 <style scoped>
  .navPpdb {
   margin-top: 75px;
  }

 </style>