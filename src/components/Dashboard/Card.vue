<template>
 <div class="row">
  <div class="col-lg-3 col-sm-6 col-md-6" v-for="(card,n) in cards" :key="n">
   <div class="card mt-2">
    <div class="card-header bg-dark d-flex align-items-center justify-content-center text-white">
     <i :class="card.icon+' mr-3 d-sm-none d-lg-block'"></i>
     <span class="font-weight-bold display-3">{{card.count}}</span>
    </div>
    <div class="card-title text-uppercase d-flex align-item-center justify-content-center my-auto">
     <p class="display-4 text-center mt-2 font-weight-bold">
      {{card.title}}
     </p>
    </div>
   </div>
  </div>
 </div>
</template>
<script>
 export default {
  name: "card",
  props: ["cards"]
 }
 </script>