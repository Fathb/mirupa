<template>
  <Navbar></Navbar>
  <section>
    <div class="box">
      <div class="form">
        <h2>FORM LOGIN</h2>
        <form @submit.prevent="login">
          <div class="inputBx">
            <label for="email">E MAIL</label>
            <input type="text" id="email" v-model="email" />
          </div>
          <div class="inputBx">
            <label for="password">PASSWORD</label>
            <input type="password" id="password" v-model="password" />
          </div>
          <div class="alert alert-danger mb-2" role="alert" v-if="msg">
            {{msg}}
          </div>
          <div class="inputBx">
            <button type="submit">login</button>
          </div>
          <div class="inputBx mt-3">
            <button type="button" id="google" @click="loginGoogle">LOGIN WITH GOOGLE</button>
          </div>
          <p>
            lupa password? <a href="#">klick di sini</a>
          </p>
          <p>
            belum punya akun? <a href="/daftar">daftar</a>
          </p>
        </form>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script>
  import Navbar from '../components/layout/navbar.vue';
  import Footer from '../components/layout/footer.vue';
  import {
    auth
  } from '../firebase.js';

  export default {
    name: 'login-page',
    components: {
      Navbar,
      Footer
    },
    data () {
      return {
        email: '',
        password: '',
        msg: null
      }
    },
    computed: {
      user() {
        return this.$store.state.id;
      }
    },
    watch: {
      user(newValue) {
        if (newValue) {
          this.$router.push({
            path: '/dashboard'
          })
        }
      }
    },
    created() {
      console.log(this.user)
    },
    methods: {
      login() {
        auth.signInWithEmailAndPassword(this.email, this.password)
        .then(()=> {
          this.$router.push({
            path: '/dashboard'
          })
        })
        .catch(err=> {
          this.msg = err.message
        })
      },
      loginGoogle() {
        this.$store.dispatch("loginGoogle");
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
      background: linear-gradient(-30deg, #00ff24 0%, #17db11 50%, #040b0c 50%, #2c533e 100%);
      filter: hue-rotate(120deg);
      animation: animate10slinear infinite;
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
      height: 480px;
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
    .box .form .inputBx:nth-child(3) {
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
      font-size: 18px;
      letter-spacing: 2px;
      margin-left: 10px;
    }
    .box .form .inputBx button
    {
      background: #fff;
      width: 100px;
      padding: 8px 10px;
      border-radius: 5px;
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
      width: 100%;
    }
    .box .form p
    {
      color: #fff;
      text-align: left;
      font-weight: 500;
    }
  </style>