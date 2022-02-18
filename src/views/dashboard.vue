<template>
  <div class="wrapper">
    <div class="row">
      <!--sidebar-->
      <div class="col-lg-3 col-sm-4 d-lg-block sidebar vh-100 bg-success position-fixed overflow-hidden d-none">
        <div class="boxUser">
          <div class="img-user rounded-circle border d-flex justify-content-center overflow-hidden my-1 mx-auto bg-warning">
            <img src="../assets/logo.jpeg" alt="user" height="100" />
          </div>
          <div class="user-name font-weight-bold text-center text-uppercase">
            {{name}}
          </div>
          <div class="user-email text-center">
            {{email}}
          </div>
        </div>
        <hr>
        <div class="nav">
          <div class="menu nav-item mt-1" v-for="(menu, id) in menus" :key="id">
            <router-link :to="menu.url" class="nav-link py-1 d-flex align-item-center">
              <span class="iconmenu mx-3"><i :class="menu.icon"></i></span>
              <span class="titlemenu text-uppercase font-weight-bold mt-1">{{menu.title}}</span>
            </router-link>
          </div>
        </div>
      </div>
      <!--end sidebar-->
      <div class="col-lg-9 col-sm-12 content">
        <!--topbar-->
        <div class="nav bg-info d-flex justify-content-between py-2 pl-4 pr-3 topbar">
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
        <div class="container-view" @click="removeSidebar">
          <router-view></router-view>
        </div>
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
        /*user: {
     name: "test name",
     email: "test email",
     level: "siswa",
    },*/
        listMenu: [{
          title: "dashboard",
          icon: "fas fw fa-tachometer-alt fa-2x",
          url: "/dashboard",
          isAdmin: true,
          isGuru: true,
          isSiswa: true
        },
          {
            title: "profile",
            icon: "fas fw fa-user fa-2x",
            url: "/dashboard/profile",
            isAdmin: true,
            isGuru: true,
            isSiswa: true
          },
          {
            title: "jadwal",
            icon: "fas fw fa-calendar-check fa-2x",
            url: "/dashboard/jadwal",
            isAdmin: true,
            isGuru: true,
            isSiswa: true
          },
          {
            title: "ppdb",
            icon: "fas fw fa-clipboard-list fa-2x",
            url: "/dashboard/ppdb",
            isAdmin: false,
            isGuru: false,
            isSiswa: true
          },
          {
            title: "Quiz",
            icon: "fas fw fa-feather-alt fa-2x",
            url: "/dashboard/quiz",
            isAdmin: false,
            isGuru: true,
            isSiswa: true
          },
          {
            title: "mading",
            icon: "fas fw fa-feather-alt fa-2x",
            url: "/dashboard",
            isAdmin: false,
            isGuru: false,
            isSiswa: true
          }]
      }
    },
    created() {
      //this.$store.dispatch("getUserInfo");
      let uid;
      auth.onAuthStateChanged(user=> {
        if (user) {
          uid = user.uid;
        } else {
          uid = false;
          this.$router.replace("/login")
        }
      });
      db.collection("users").doc(uid).get()
      .then(snap=> {
        this.user = snap.data();
      });
    },
    methods: {
      async logout() {
        await auth.signOut();
        this.$store.commit("resetUser");
        this.$router.push({
          path: '/login'
        });
      },
      toggleMenu() {
        let sidebar = document.querySelector('.sidebar');
        //let topbar = document.querySelector('.topbar');
        sidebar.classList.toggle('d-none');
        //content.classList.toggle('col-sm-12');
      },
      removeSidebar() {
        let sidebar = document.querySelector('.sidebar');
        let topbar = document.querySelector('.topbar');
        sidebar.classList.add('d-none');
        topbar.classList.remove('col-sm-8');
      }
    },
    computed: {
      menus() {
        const level = this.level;
        let menu;
        if (level == "siswa") {
          menu = this.listMenu.filter(a=> {
            return a.isSiswa == true;
          })
        }
        if (level == "guru") {
          menu = this.listMenu.filter(a=> {
            return a.isGuru == true;
          });
        }
        if (level == "admin") {
          menu = this.listMenu.filter(a=> {
            return a.isAdmin == true;
          });
        }
        return menu;
      },
      name() {
        return this.$store.state.name;
      },
      email() {
        return this.$store.state.email;
      },
      level() {
        return this.$store.state.level;
      }
    }
  }
  </script>

  <style scoped>
    body * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      max-width: 100vw;
    }
    .sidebar,
    .content {
      margin: 0;
      padding: 0;
    }
    .wrapper .sidebar {
      background: rgba(0,255,0,.9) !important;
      top: 51px;
      z-index: 1;
    }
    .wrapper .content {
      background-color: #ddd;
      overflow-x: scroll;
      margin-left: auto;
    }
    .content .cotainer-view {
      padding: 15px;
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
    .nav,
    .menu,
    .nav-link,
    .sidebar .nav .nav-item {
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
    .sidebar.d-none {
      top: 0;
    }
@media screen (max-width: 578px) {
      .wrapper .sidebar {
        background: rgba(0,255,0,.9) !important;
        top: 0;
        z-index: 1;
      }
    }
  </style>