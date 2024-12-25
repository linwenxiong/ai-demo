<template>
  <Header @item-click="navClick" :active-index="current" />
  <swiper  @swiper="initSwiper" class="swiper-container" :slides-per-view="1"  @slideChange="onSlideChange">
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
          <containerRow title="小升初常考词汇">
            <section class="detail-container__row-high" v-for="word, widx in item.vocabulary" :key="word.word + widx">
              <div class="detail-container__row-high__head">{{word.word}}</div>
              <div class="detail-container__row-high__body">{{ word.desc }}</div>
            </section>
          </containerRow>

          <!--  长难句解析 -->
          <containerRow title="长难句解析">
            <section class="detail-container__row-high" v-for="sentence, lidx in item.logAnalysis" :key="sentence.word + lidx">
              <div class="detail-container__row-high__head text-indent"><i class="detail-container__row-head__icon">{{ lidx+1  }}</i>{{ sentence.word }}</div>
              <div class="detail-container__row-high__body">{{ sentence.desc }}</div>
            </section>
          </containerRow>
          
        </div>
      </div>
    </swiper-slide>
  </swiper>

  <AiTeacher></AiTeacher>
  <FooterCaption></FooterCaption>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import type {  Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import Header from '@/components/header/index.vue';
import AiTeacher from '@/components/ai-teacher.vue'
import containerRow from './components/container-row.vue'
import FooterCaption from '@/components/footer-caption.vue'
import { content } from '../../mock/全部解读'
import { questionList } from '../../mock/题目'

const current = ref(0)
const contentdom = ref<HTMLElement | null>(null)

let swiperInstance: SwiperType | null = null

const initSwiper = (swiper :SwiperType) => {
  swiperInstance = swiper;
};
const navClick = (index: number) => {
  swiperInstance?.slideTo(index)
  current.value = index
}
const onSlideChange = (e: SwiperType) => {
  current.value = e.activeIndex
};

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