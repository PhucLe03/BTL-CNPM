<script setup>
import PrintSideBar from '../../components/PrintSideBar.vue';
</script>
<template class="sidebar">
  <PrintSideBar/>



  
  <component :is="'script'">
    document.getElementById("bar_nguoidung").classList.remove('link-dark');
    document.getElementById("bar_nguoidung").classList.add('active');
  </component>
</template>
