<template>
 <Navbar></Navbar>
 <div class="perpustakaan">
  <h3>perpustakaan MIRUPa</h3>
  <div class="pencarian text-center">
   <form class="form-inline text-center">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
   </form>
   <button class="btn btn-outline-success my-2 my-sm-0" @click="getBooks">Search</button>
  </div>
  <div class="kartu" v-for="(book, idx) in books.items" :key="idx">
   <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="" alt="Card image cap">
    <div class="card-body">
     <h5 class="card-title">Card title</h5>
     <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
     </p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
   </div>
  </div>
 </div>
 <Footer></Footer>
</template>

<style scoped>
 .perpustakaan {
  margin: 75px auto;
  width: 85%;
 }
 .kartu {
  margin: 10px 5px;
 }
</style>
<script>
 import Navbar from '../components/layout/navbar.vue'
 import Footer from '../components/layout/footer.vue'

 export default {
  name: 'perpustakaan',
  components: {
   Navbar,
   Footer
  },
  data() {
   return {
    books: []
   }
  },
  methods: {
   getBooks () {
    fetch('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes')
    .then(response => {
     response.json()
    })
    .then(data => {
     console.log(data)
     this.books = data
    })
    .catch(err => {
     console.log(err.message)})
   }
  },
  created() {
   console.log(document)
   this.getBooks();
  }
 }
 </script>