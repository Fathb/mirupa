<template>
  <Navbar></Navbar>
  <div class="container">
    <h1>ini kelas</h1>
    <div class="col d-flex mb-3">
    <input type="text" name="kelas" id="kelas" class="form-control mr-2" :value="kelas.deskripsi"/>
    <button class="btn btn-primary" v-on:click="testMethod">test</button>
    </div>
    <table class="table table-bodered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">No</th>
          <th scope="col">NAMA KELAS</th>
          <th scope="col">DESKRIPSI KELAS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{kelas.no}}</th>
          <td>{{kelas.nama}}</td>
          <td>{{kelas.deskripsi}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <Footer></Footer>
</template>
<style scoped>
  .container {
    margin-top: 65px;
  }
</style>

<script>
  import Navbar from '../components/layout/navbar.vue'
  import Footer from '../components/layout/footer.vue'
  export default {
    name : 'kelas',
    components: {
      Navbar,
      Footer
    },
    data() {
      return {
        kelas: {
          no : 1,
          nama: 'javascript',
          deskripsi: 'Di kelas ini kita belajar javascript'
        }
      }
    },
    methods: {
      testMethod(){
        this.kelas.no++;
      }
    }
  }
</script>