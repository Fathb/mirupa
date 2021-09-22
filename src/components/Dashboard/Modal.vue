<template>
 <div class="modal-test">
  <div class="content-modal p-4 overflow-scroll">
   <slot></slot>
  </div>
 </div>
</template>
<style>
 .modal-test {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: rgba(0,150,0,.3);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
 }
 .content-modal {
  max-width: 90%;
  min-width: 400px;
  max-height: 90%;
  width: 90%;
  height: auto;
  background: #fff;
  border-radius: 10px;
  overflow: scroll;
 }
</style>