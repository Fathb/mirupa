<template>
 <div class="wrapper">
  <div class="row">
   <!--sidebar-->
   <div class="col-lg-3 col-sm-4 d-lg-block d-sm-none bg-success sidebar">
    <div class="boxUser">
     <div class="img-user rounded-circle border d-flex justify-content-center overflow-hidden my-1 mx-auto">
      <img src="../assets/logo.jpeg" alt="user image" height="100">
     </div>
     <div class="user-name font-weight-bold text-center text-uppercase">
      {{user.name}}
     </div>
     <div class="user-email text-center">
      {{user.email}}
     </div>
     <hr>
     <div class="nav">
      <div class="menu nav-item mt-2">
       <a href="/dashboard" class="nav-link py-1 d-flex align-item-center">
        <span class="iconmenu mx-3"><i class="fas fw fa-tachometer-alt fa-2x"></i></span>
        <span class="titlemenu text-uppercase font-weight-bold mt-1">dashboard</span>
       </a>
      </div>
      <div class="menu nav-item mt-2">
       <a href="#" class="nav-link py-1 d-flex align-item-center">
        <span class="iconmenu mx-3"><i class="fas fw fa-user fa-2x"></i></span>
        <span class="titlemenu text-uppercase font-weight-bold mt-1">profile</span>
       </a>
      </div>
      <div class="menu nav-item mt-2">
       <a href="#" class="nav-link py-1 d-flex align-item-center">
        <span class="iconmenu mx-3"><i class="fas fw fa-edit fa-2x"></i></span>
        <span class="titlemenu text-uppercase font-weight-bold mt-1">quiz</span>
       </a>
      </div>
     </div>
    </div>
   </div>
   <!--end sidebar-->
   <div class="col-lg-9 col-sm-12 content">
    <!--topbar-->

    <div class="nav bg-info d-flex justify-content-between py-2 px-3">
     <div class="nav-item d-lg-none d-sm-inline" @click="toggleMenu">
      <i class="fas fw fa-bars fa-2x"></i>
     </div>
     <div class="nav-item">
      <i class="fas fw fa-home fa-2x"></i>
     </div>
     <div class="nav-item" @click="logout">
      <i class="fas fw fa-sign-out-alt fa-2x"></i>
     </div>
    </div>

    <!--end topbar-->

    <h1>anda adalah {{user.level}}</h1>
    <button @click="logout">logout</button>
   </div>
  </div>
 </div>
</template>
<script type="text/javascript" charset="utf-8">
 import {
  auth,
  db
 } from "../firebase";

 export default {
  name: 'dashboard',
  data() {
   return {
    user: ""
   }
  },
  async created() {
   let uid;
   await auth.onAuthStateChanged(user=> {
    if (user) {
     uid = user.uid;
    } else {
     uid = false;
    }
   })
   if (uid) {
    await db.collection('users').doc(uid).get()
    .then(snap=> {
     this.user = snap.data()
    })
   }
  },
  methods: {
   async logout() {
    await auth.signOut();
    this.$router.push({
     path: '/login'
    })
   },
   toggleMenu() {
    let sidebar = document.querySelector('.sidebar');
    let content = document.querySelector('.content');
    sidebar.classList.toggle('d-sm-none');
    content.classList.toggle('col-sm-12');
    content.classList.toggle('col-sm-8');
   }
  },
  computed: {}
 }
 </script>

 <style scoped>
  * {
   margin: 0;
   padding: 0;
  }
  div {
   transition: width 1s;
  }
  .img-user {
   width: 100px;
  }
  .user-name {
   font-size: 1.7rem;
  }
  .user-email {
   font-size: 1.1rem;
  }
  .titlemenu {
   font-size: 1.3rem;
  }
  .menu {
   width: 100%;
  }
  .nav-link {
   width: 100%;
  }
  .nav-link:hover,
  .nav-link:focus {
   background: #046302;
   color: white;
  }
  .iconmenu {
   width: 30px;
  }
  .content {
   min-height: 100vh;
  }

 </style>