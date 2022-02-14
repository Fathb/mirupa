<template>
  <ul class="d-flex flex-wrap justify-content-center">
    <li>
      <a href="#img1">
        <img src="../../assets/img/img1.jpeg">
        <span>GUS KHOIRON</span>
      </a>
      <div class="overlay" id="img1">
        <a href="#" class="close">X close</a>
        <img src="../../assets/img/img1.jpeg">
      </div>
    </li>
    <li>
      <a href="#img2">
        <img src="../../assets/img/img2.jpeg">
        <span>GUS KHOIRON</span>
      </a>
      <div class="overlay" id="img2">
        <a href="#" class="close">X close</a>
        <img src="../../assets/img/img2.jpeg">
      </div>
    </li>
    <li>
      <a href="#img5">
        <img src="../../assets/img/img5.jpeg">
        <span>GUS KHOIRON</span>
      </a>
      <div class="overlay" id="img5">
        <a href="#" class="close">X close</a>
        <img src="../../assets/img/img5.jpeg">
      </div>
    </li>
    <li>
      <a href="#img6">
        <img src="../../assets/img/img6.jpeg">
        <span>GUS KHOIRON</span>
      </a>
      <div class="overlay" id="img6">
        <a href="#" class="close">X close</a>
        <img src="../../assets/img/img6.jpeg">
      </div>
    </li>
    <li>
      <a href="#img7">
        <img src="../../assets/img/img7.jpeg">
        <span>GUS KHOIRON</span>
      </a>
      <div class="overlay" id="img7">
        <a href="#" class="close">X close</a>
        <img src="../../assets/img/img7.jpeg">
      </div>
    </li>
    <li>
      <a href="#img8">
        <img src="../../assets/img/mirupa.jpg">
        <span>GUS KHOIRON</span>
      </a>
      <div class="overlay" id="img8">
        <a href="#" class="close">X close</a>
        <img src="../../assets/img/mirupa.jpg">
      </div>
    </li>
    <li>
      <a href="#video">
        <video src="../../assets/cat-herd.webm"></video>
        <span>GUS KHOIRON</span>
      </a>
      <div class="overlay" id="video">
        <a href="#" class="close">X close</a>
        <video src="../../assets/cat-herd.webm" controls></video>
      </div>
    </li>
    <div class="clear"></div>
  </ul>
</template>
<script>

  export default {
    name: 'galleryCard'
  }
  </script>
  <style scoped>
    .gallery li {
      min-width: 25%;
      height: 300px;
      border-radius: 15%;
      overflow: hidden;
      box-shadow: 0 0 3px 3px rgba(0,0,0,0.3);
      margin:auto;
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
    li a {
      margin: auto;
    }
    .gallery li a img {
      height: 100%;
      width: 100%;
      margin: auto;
      object-fit: cover;
    }
    .gallery li a:hover img {
      opacity: 50%;
    }
    .overlay {
      width: 0;
      height: 0;
      overflow: scroll;
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(0,0,0,0);
      z-index: 999;
      transition: 1s;
      padding: 100px 0;
    }
    .overlay:target {
      width: 100%;
      height: 100%;
      right: 0;
      bottom: 0;
      background: rgba(0,150,0,0.5);
    }
    .overlay img {
      max-height: auto;
      max-width: 100%;
      box-shadow: 2px 2px 2px 5px rgba(0,0,0,.7);
      object-fit: contain;
    }
    .overlay:target img {
      animation: zoomFade1s;
    }
    .overlay .close {
      position: absolute;
      right: 0;
      top: 0;
      margin: 15px 15px;
    }

@media (max-width:992px) {
      .gallery li {
        width: 45%;
        height: 150px;
      }
    }

@keyframes zoomFade {
      0% {
        transform: scale(0);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

  </style>