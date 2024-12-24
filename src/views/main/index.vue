<template>
  <Header @item-click="navClick" />
  <swiper :slides-per-view="1" class="swiper-container">
    <swiper-slide class="swiper-slide-item">
      <div class="container" key="0" v-html="content" ref="contentdom">
      </div>
    </swiper-slide>
    <swiper-slide class="swiper-slide-item" v-for="item, index in questionList" :key="item.id + index">
      <div class="detail-container">
        <div class="detail-container__left">
          <div class="detail-container__left-content">
            {{ content }}
          </div>
        </div>
        <div class="detail-container-dashed"></div>
        <div class="detail-container__right">

          <div class="detail-container__row">
            <div class="detail-container__row-title">
              <span class="detail-container__row-title-text">题目</span>
            </div>
            <section class="detail-container__row-content">
              <div class="detail-container__row-content-btxt">{{ item.content }}</div>
              <div class="detail-container__row-content-gtxt">{{item.translate }}</div>
            </section>
            <!-- 选项 -->
            <section class="detail-container__row-content" v-for="option, oidx in item.options" :key="option.key + oidx">
              <div class="detail-container__row-content-btxt">{{ option.key }}</div>
              <div class="detail-container__row-content-gtxt">{{option.desc }}</div>
            </section>
          </div>

          <div class="detail-container__row">
            <div class="detail-container__row-title">
              <span class="detail-container__row-title-text">解析</span>
            </div>
            <section class="detail-container__row-content">
              {{ item.analysis }}
            </section>
          </div>

          <!--  常考词汇 -->
          <div class="detail-container__row">
            <div class="detail-container__row-title">
              <span class="detail-container__row-title-text">小升初常考词汇</span>
            </div>
            <section class="detail-container__row-high" v-for="word, widx in item.vocabulary" :key="word.word + widx">
              <div class="detail-container__row-high__head">{{word.word}}</div>
              <div class="detail-container__row-high__body">{{ word.desc }}</div>
            </section>
          </div>

          <!--  长难句解析 -->
          <div class="detail-container__row">
            <div class="detail-container__row-title">
              <span class="detail-container__row-title-text">长难句解析</span>
            </div>
            <section class="detail-container__row-high" v-for="sentence, lidx in item.logAnalysis" :key="sentence.word + lidx">
              <div class="detail-container__row-high__head text-indent"><i class="detail-container__row-head__icon">{{ lidx+1  }}</i>{{ sentence.word }}</div>
              <div class="detail-container__row-high__body">{{ sentence.desc }}</div>
            </section>
          </div>

        
 
        </div>
      </div>
    </swiper-slide>

  </swiper>

  <!-- <footer class="captions">
    <span class="caption_text">usually就是通常，这里说春节通常在一月或者二月呀</span>
  </footer> -->
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
console.log(SwiperSlide)
import 'swiper/css';
import Header from '@/components/header/index.vue';
import testData from '../../mock/全部解读'
import { questionList } from '../../mock/题目'
const current = ref(0)
const contentdom = ref<HTMLElement | null>(null)
const content = testData.content
const navClick = (index: number) => {
  current.value = index
  console.log('navClick', index)
}

onMounted(() => {
  setTimeout(() => {
    var dom = document.getElementById('r1')
    dom!.classList.add('on')
    setTimeout(() => {
      dom!.querySelector('b')?.classList.add('redbolan')
    }, 1000)
    // document.getElementById('r1')!.style.color = 'red'
  }, 2000)


  setTimeout(() => {
    var dom = document.getElementById('r2')
    dom!.classList.add('on')
    setTimeout(() => {
      dom!.querySelector('b')?.classList.add('redbolan')
    }, 1000)
  }, 4000)
})

</script>