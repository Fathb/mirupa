<template>
 <div class="container container-md mx-auto">
  <Card :cards="cards"></Card>
 </div>
</template>
<script type="text/javascript" charset="utf-8">
 import Card from "../../components/Dashboard/Card";

 export default {
  name: "Dashboard",
  components: {
   Card
  },
  data() {
   return {
    cards: [{
     title: "user",
     count: 23,
     icon: "fas fw fa-user fa-4x"
    },
     {
      title: "post",
      count: 10,
      icon: "fas fw fa-feather-alt fa-4x"
     }]
   }
  }
 }
 </script>