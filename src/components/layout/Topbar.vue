<template>
  <div class="container">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Topbar',
    props: {
      msg: String
    }
  }
  </script>