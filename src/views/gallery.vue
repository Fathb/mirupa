<template>
 <div class="container mt-5">
   <h3>Gallery MIRUPa</h3>
   <div class="gallery mt-4">
    <galleryCard></galleryCard>
   </div>
 </div>
</template>

<style scoped>
  .gallery {
		width: auto;
		margin: auto;
		padding: 20px 0 0 0;
		background-color: #ddd;
		border-radius: 25px;
	}
</style>
  
<script>

import galleryCard from '../components/gallery/card.vue'

  export default {
    name: 'gallery',
    components: {
      galleryCard
    }
  }
</script>