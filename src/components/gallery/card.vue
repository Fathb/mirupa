<template>
	<div class="container">
	  <h3>Gallery MIRUPa</h3>
	  <div class="gallery mt-4">
		  <ul>
		  	<li>
		  		<a href="#img2">
		  			<img src="../../assets/img/img2.jpeg">
		  			<span>GUS KHOIRON</span>
		  		</a>
		  		<div class="overlay" id="img2"></div>
		  	</li>
		  	<li>
		  		<a href="">
		  			<img src="../../assets/img/img1.jpeg">
		  			<span>GUS KHOIRON</span>
		  		</a>
		  	</li>
		  	<li>
		  		<a href="">
		  			<img src="../../assets/img/img3.jpeg">
		  			<span>GUS KHOIRON</span>
		  		</a>
		  	</li>
		  	<li>
		  		<a href="">
		  			<img src="../../assets/img/img4.jpeg">
		  			<span>GUS KHOIRON</span>
		  		</a>
		  	</li>
		  	<div class="clear"></div>
		  </ul>
	  </div>
	</div>
</template>
<script>
  
  export default {
    name: 'galleryCard'
  }
</script>
<style scoped>
	.gallery {
		width: auto;
		margin: auto;
		padding: 30px;
		background-color: #ddd;
		border-radius: 5px;
	}
	.gallery li {
		width: 300px;
		height: 300px;
		border-radius: 15%;
		overflow: hidden;
		box-shadow: 0 0 3px 3px rgba(0,0,0,0.3);
		float: left;
		margin-right: 20px;
		margin-bottom: 20px;
		position: relative;

	}
	.gallery li span {
		display: block;
		width: 300px;
		height: 300px;
		background-color: rgba(200,200,200,0.5);
		border-radius: 15%;
		position: absolute;
	}

	.clear {
		clear: both;
	}
	img {
		height: 100%;
		width: auto;
		display: block;
		margin: auto;
		position: relative;
	}
	.gallery li a:hover img {
		opacity: 50%;
	}
	.overlay{
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(0,0,0,0);
		z-index: 999;
		transition: 1s;
	}
	.overlay:target {
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,0.8);
	}









</style>