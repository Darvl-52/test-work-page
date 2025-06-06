<script setup lang="ts">
import './Card.scss';
import type { ImageType } from "~/constants/type.constants";

type VariantPrices = {
  actualPrice: string;
  oldPrice?: string;
}

export type CardProps = {
  image: ImageType;
  title: string;
  price: VariantPrices;
}

defineProps<CardProps>();

</script>

<template>
  <article class="card" itemscope>
    <NuxtImg
        class="card__img"
        :src="`/card_photo/${image.name}.jpg`"
        :alt="image.alt"
        :width="image.width"
        :height="image.height"
        loading="lazy"
    />
    <div class="card__top">
      <h3
          itemprop="title"
          class="card__top-title"
      >
        {{title}}
      </h3>
      <p class="card__top-price" itemprop="price">
      <span class="card__top-price-actual">
        {{ price.actualPrice }} RUB
      </span>
        <span class="card__top-price-old" v-if="price.oldPrice">
        {{ price.oldPrice }} RUB
      </span>
      </p>
    </div>
  </article>
</template>