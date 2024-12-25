<template>
  <div class="detail-container__row">
    <div class="detail-container__row-title">
      <span class="detail-container__row-title-text">{{title}}</span>
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup name="ContainerRow">
const props = defineProps({
    title: {
      type: String, 
      default: '--'
    },
  });
</script>
