<template>
 <div class="row justify-content-center">
  <div class="card col-5 m-2" v-for="(post,n) in posts" :key="n">
   <div class="card-body">
    <h5 class="card-title">{{post.title}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">
     {{post.textCard}}
    </p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
   </div>
  </div>
 </div>
</template>
<script>
 export default {
  name: "post card",
  props: ["posts"]
 }
 </script>