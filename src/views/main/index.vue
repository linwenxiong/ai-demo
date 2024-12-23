<template>
  <Header />
  <div class="container">
    {{ content }}
  </div>
  <div class="captions">
    <span class="caption_text">usually就是通常，这里说春节通常在一月或者二月呀</span>
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/header/index.vue';
const content =  `阅读短文，选择正确的答案，
    Every year, we have the Spring Festival in China.
    It's usually in January or
    February. It's the most important(最重要的)festival in China. So before it
    comes, people always prepare(i)a lot of things. And they often make a
    special kind of food-dumplings (傚). The food means "coming together"
    Before the festival, parents buy new clothes for their children. On Chinese New
    Year's Eve, all the family members come back to their home. This is a happy
    moment(时刻). When they enjoy dinner, they give each other the best wishes(最
    好的祝视愿)for the coming year.
    时态:一般现在时`
</script>