<template>
 <Navbar></Navbar>
 <Jumbotron></Jumbotron>
 <infoP></infoP>
 <workingSpace></workingSpace>
 <Footer></Footer>
</template>

<script>
 // @ is an alias to /src
 import Jumbotron from '../components/home/Jumbotron.vue'
 import infoP from '../components/home/infoPanel.vue'
 import workingSpace from '../components/home/workingSpace.vue'
 import Navbar from '../components/layout/navbar.vue'
 import Footer from '../components/layout/footer.vue'

 export default {
  name: 'Home',
  components: {
   Jumbotron,
   infoP,
   workingSpace,
   Navbar,
   Footer
  }
 }
 </script>