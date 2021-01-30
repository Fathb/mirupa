<template>
  <Jumbotron></Jumbotron>
  <infoP></infoP>
  <workingSpace></workingSpace>
</template>

<script>
  // @ is an alias to /src
  import Jumbotron from '../components/home/Jumbotron.vue'
  import infoP from '../components/home/infoPanel.vue'
  import workingSpace from '../components/home/workingSpace.vue'

  export default {
    name: 'Home',
    components: {
      Jumbotron,
      infoP,
      workingSpace
    }
  }
  </script>