<template>
 <Navbar></Navbar>
 <section>
  <div class="box">
   <div class="form">
    <h2>FORM DAFTAR</h2>
    <div class="inputBx">
     <label for="email">E MAIL</label>
     <input type="text" id="email" v-model="email" />
    </div>
    <div class="inputBx">
     <label for="password">PASSWORD</label>
     <input type="password" v-model="password" id="password" />
    </div>
    <div class="inputBx">
     <label for="password2">PASSWORD CONFIRMATION</label>
     <input type="password" v-model="password2" id="password2" />
    </div>
    <div class="alert alert-danger mb-2" role="alert" v-if="msg">
     {{msg}}
    </div>
    <div class="inputBx">
     <button type="daftar" @click="daftar">DAFTAR</button>
    </div>
    <hr>
    <div class="inputBx mt-3">
     <button id="google">LOGIN WITH GOOGLE</button>
    </div>
    <div class="inputBx">
     <button id="fb">LOGIN WITH FACEBOOK</button>
    </div>
    <p>
     lupa password? <a href="#">klick di sini</a>
    </p>
    <p>
     sudah punya akun? <a href="/Login">login</a>
    </p>
   </div>
  </div>
 </section>
 <Footer></Footer>
</template>

<script>
 import Navbar from '../components/layout/navbar.vue';
 import Footer from '../components/layout/footer.vue';
 import {
  db,
  auth
 } from "../firebase.js";

 export default {
  name: 'signup-page',
  components: {
   Navbar,
   Footer
  },
  data() {
   return {
    email: '',
    password: '',
    password2: '',
    msg: null
   }
  },
  computed: {
   fixPassword() {
    if (this.password2 != this.password) {
     return null;
    } else {
     return this.password;
    }
   }
  },
  methods: {
   daftar() {
    auth.createUserWithEmailAndPassword(this.email, this.fixPassword)
    .then(user=> {
     var email = user.user.email;
     user.displayName = email.split('@')[0];
     db.collection('users').doc(user.user.uid).set({
      email,
      name: user.displayName,
      level: 'siswa'
     });
     this.$router.push({
      path: `/dashboard`
     })
    })
    .catch(err=> {
     this.msg = err.message;
    })
   }
  }
 }
 </script>

 <style scoped>
  *
  {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }
  section
  {
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 100vh;
   background: #000 linear-gradient(-30deg, #00ff24 0%, #17db11 50%, #040b0c 50%, #2c533e 100%);
   background-blend-mode: hard-light;
   /* filter: hue-rotate(120deg); */
   /* animation: animate 10s linear infinite; */
  }
@keyframes animate
  {
   0%
   {
    filter: hue-rotate(0deg);
   }
   100%
   {
    filter: hue-rotate(360deg);
   }
  }
  .box
  {
   position: relative;
   padding: 50px;
   width: 360px;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   background: rgba(255,255,255,0.1);
   border-radius: 10px;
  }
  .box::after
  {
   content: '';
   position: absolute;
   top: 5px;
   left: 5px;
   bottom: 5px;
   right: 5px;
   border-radius: 5px;
   pointer-events: none;
   background: linear-gradient(tobottom,rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 15%, transparent 50%, transparent 85%, rgba(255,255,255,0.3) 100%);
  }
  .box .form
  {
   position: relative;
   width: 100%;
  }
  .box .form h2
  {
   color: white;
   font-weight: 600;
   letter-spacing: 2px;
   margin-bottom: 30px;
  }
  .box .form .inputBx
  {
   position: relative;
   width: 100%;
   margin-bottom: 20px;
   text-align: left;
  }
  .box .form .inputBx:nth-child(5) {
   text-align: center;
  }
  .box .form .inputBx input
  {
   width: 100%;
   outline: none;
   border: 1px solid rgba(255,255,255,0.2);
   background: transparent;
   padding: 8px 10px;
   border-radius: 6px;
   color: #fff;
   font-size: 14px;
   font-weight: 300;
  }
  .box .form .inputBx label
  {
   color: #fff;
   font-weight: 500;
   font-size: 15px;
   letter-spacing: 2px;
   margin-left: 10px;
  }
  .box .form .inputBx button
  {
   background: #fff;
   width: 100%;
   padding: 8px 10px;
   border-radius: 20px;
   color: #000;
   font-weight: 500;
   letter-spacing: 1.5px;
   box-shadow: none;
   cursor: pointer;
  }
  .box .form .inputBx button[id="google"]
  {
   background: red;
   color: #fff;
  }
  .box .form .inputBx button[id="fb"]
  {
   background: blue;
   color: #fff;
  }
  .box .form p
  {
   color: #fff;
   text-align: left;
   font-weight: 500;
  }
 </style>