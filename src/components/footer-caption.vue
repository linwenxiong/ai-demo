<template>
  <footer class="captions fade-in-fwds">
    <span class="caption_text">usually就是通常，这里说春节通常在一月或者二月呀</span>
  </footer>
</template>
<style lang="scss">
.fade-in-fwds {
	-webkit-animation: fade-in-fwds 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 2s both;
	        animation: fade-in-fwds 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 2s both;
}

@-webkit-keyframes fade-in-fwds {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in-fwds {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}


</style>