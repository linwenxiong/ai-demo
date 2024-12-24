<template>
  <div class="header">
    <div class="header_back"></div>
    <div class="header-progress-box">
      <div 
        class="header-progress-item"
        :class="['header-progress-item', index === activeIndex ? 'active' : index < activeIndex ? 'done' : '' ]" 
        v-for="(item, index) in navList" :key="index+item">
        <div class="header-progress-item__title" @click="itemClick(index)">
          <span class="header-progress-item__text">
            {{ item }}
          </span>
        </div>
        <div class="header-progress-item__line"></div>
      </div>
    </div>
    <div class="header-right-btn">
      <div class="header-right-btn__start" :class="{ 'play': isPlay }" @click="startPlay"></div>
      <div class="header-right-btn__set"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
  const emit = defineEmits(['itemClick']);
  const activeIndex = ref(0);
  const isPlay = ref(false);
  let navList = ['全文讲解', '第一题', '第二题', '第三题', '总结'];
  const itemClick = (index: number) => {
    activeIndex.value = index;
    emit('itemClick', index);
  }
  const startPlay = () => {
    isPlay.value = !isPlay.value
    console.log('开始播放');
  }
</script>