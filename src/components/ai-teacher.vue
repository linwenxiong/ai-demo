<template>
    <div class="aiteacher-box">
        <div class="aiteacher-field-text fade-in-fwd">
            琪琪同学，跟AI老师一起来解读全文吧~ 
        </div>
        <img  class="aiteacher-img slide-in-bottom" src="../assets/img/aiteacher.png">
    </div>
</template>
<style lang="scss">
.slide-in-bottom {
    opacity: 0;
	-webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}


.fade-in-fwd {
	-webkit-animation: fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.8s both;
	        animation: fade-in-fwd 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) 0.8s both;
}

@-webkit-keyframes fade-in-fwd {
  0% {
    -webkit-transform: translateZ(-80px);
            transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}
@keyframes fade-in-fwd {
  0% {
    -webkit-transform: translateZ(-80px);
            transform: translateZ(-80px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
}


</style>