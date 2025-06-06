<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { Swiper as SwiperClass } from 'swiper';
import { Thumbs, Navigation, Pagination } from 'swiper/modules';
import type { ImageType } from "~/constants/type.constants";

import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Swiper.scss';

type Props = {
  images: ImageType[]
}

const thumbsSwiper = ref<SwiperClass | null>(null);

const setThumbsSwiper = (swiper: SwiperClass) => {
  thumbsSwiper.value = swiper;
};

defineProps<Props>();

</script>

<template>
  <div class="product-gallery">
    <div class="product-gallery__wrapper">
      <swiper
          @swiper="setThumbsSwiper"
          direction="vertical"
          :space-between="4"
          :slidesPerView="3"
          :watchSlidesProgress="true"
          class="product-gallery__thumbs"
      >
        <swiper-slide
            v-for="(image, index) in images"
            :key="index"
            class="product-gallery__thumbs-slide"
        >
          <NuxtImg
              :src="`/card_photo/${image.name}.jpg`"
              :alt="image.alt"
              :width="image.width"
              :height="image.height"
              class="product-gallery__thumbs-img"
          />
        </swiper-slide>
      </swiper>

      <div class="product-gallery__main-wrapper">
      <swiper
          :modules="[Thumbs, Navigation, Pagination]"
          :thumbs="{ swiper: thumbsSwiper }"
          :pagination="true"
          :navigation="{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }"
          class="product-gallery__main"
      >
        <swiper-slide
            v-for="(image, index) in images"
            :key="index"
        >
          <NuxtImg
              :src="`/card_photo/${image.name}.jpg`"
              :alt="image.alt"
              :width="image.width"
              :height="image.height"
              class="product-gallery__main-img"
          />
        </swiper-slide>
      </swiper>

      <NuxtImg class="custom-prev" src="/icons/arrow-left.svg" />
      <NuxtImg class="custom-next" src="/icons/arrow-right.svg" />
      </div>
    </div>
  </div>
</template>