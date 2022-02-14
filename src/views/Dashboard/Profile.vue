<template>
 <div class="container container-md mt-3 mx-auto">
  <div class="card p-2">
   <div class="card-img-top">
    <span class="text-uppercase">{{this.$store.state.initial}}</span>
   </div>
   <div class="card-body mt-3 border border-success">
    <div class="row">
     <div class="col-2 col-sm-3 profile-info">
      Nama
     </div>
     <div v-if="!edit" class="col-9 col-sm-8 profile-info">
      : {{this.$store.state.name}}
     </div>
     <input v-if="edit" class="col-9 col-sm-8 profile-info" type="text" v-model="name" />
    </div>
    <div class="row">
     <div class="col-2 col-sm-3 profile-info">
      Email
     </div>
     <div class="col-9 col-sm-8 profile-info">
      : {{this.$store.state.email}}
     </div>
    </div>
    <div class="row">
     <div class="col-2 col-sm-3 profile-info">
      Level
     </div>
     <div class="col-9 col-sm-8 profile-info">
      : {{this.$store.state.level}}
     </div>
    </div>
   </div>
   <button @click="editClick" class="btn btn-primary mt-2 w-25 ml-auto">{{valueBtn}}</button>
  </div>
  <h3 class="title text-center text-uppercase mt-3">your post</h3>
  <div class="posts mt-3">
   <postCard :posts="posts"></postCard>
  </div>
 </div>
</template>
<script>
 import postCard from "../../components/Dashboard/postcard";
 import {db} from "../../firebase"
 export default {
  name: "post card",
  components: {
   postCard
  },
  data() {
   return {
    name: this.$store.state.name,
    edit: false,
    valueBtn: "edit",
    posts: [{
     title: "post 1",
     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci soluta rem modi maxime sapiente dignissimos culpa cumque voluptatum eaque at.",
     textCard: "Lorem ipsum dolor sit amet."
    },
     {
      title: "post 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci soluta rem modi maxime sapiente dignissimos culpa cumque voluptatum eaque at.",
      textCard: "Lorem ipsum dolor sit amet."
     },
     {
      title: "post 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci soluta rem modi maxime sapiente dignissimos culpa cumque voluptatum eaque at.",
      textCard: "Lorem ipsum dolor sit amet."
     },
     {
      title: "post 4",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci soluta rem modi maxime sapiente dignissimos culpa cumque voluptatum eaque at.",
      textCard: "Lorem ipsum dolor sit amet."
     },
     {
      title: "post 5",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci soluta rem modi maxime sapiente dignissimos culpa cumque voluptatum eaque at.",
      textCard: "Lorem ipsum dolor sit amet."
     },
     {
      title: "post 6",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci soluta rem modi maxime sapiente dignissimos culpa cumque voluptatum eaque at.",
      textCard: "Lorem ipsum dolor sit amet."
     }]
   }
  },
  watch: {
   edit(value){
    if(value){
     this.valueBtn = "update";
    }else{
     this.valueBtn = "edit";
    }
   }
  },
  methods:{
   editClick(){
    this.edit = !this.edit;
    const id = this.$store.state.id;
    db.collection("users").doc(id).update({
     name: this.name
    }).then(()=>{
     this.$store.dispatch("getUserInfo");
    }).catch(err=>{
     console.log(err.message);
    })
   }
  }
 }
 </script>
 <style>
  .card-img-top {
   width: 150px !important;
   height: 150px;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: lightgreen;
   border: .5px solid green;
   border-radius: 50% !important;
   margin: auto;
  }
  .card-img-top span {
   font-weight: 900;
   font-size: 88px;
  }
  .profile-info {
   font-weight: 600;
   font-size: 24px;
  }
  .posts {
   display: flex;
   justify-content: center;
   align-items: center;
  }
 </style>