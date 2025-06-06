<script setup lang="ts">
import './Home.scss';
import { ButtonColors, ButtonSizes } from "~/config/ButtonsConfig";
import type { AccordionProps } from "~/components/Accordion/index.vue";
import { RelatedProductsContent } from "~/config/ProductsContent";
import type { ImageType } from "~/constants/type.constants";

const AccordionContent: AccordionProps[] = [
    {
      title: 'Описание',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, unde?',
    },
    {
      title: 'Состав и уход',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, unde?',
    },
];

const SwiperImageContent: ImageType[] = [
    {
      name: 'Image-5',
      alt: 'Женщина в удлиненном жакете',
      width: 600,
      height: 800,
    },
    {
      name: 'Image-6',
      alt: 'Женщина в удлиненном жакете',
      width: 600,
      height: 800,
    },
    {
      name: 'Image-7',
      alt: 'Женщина в удлиненном жакете',
      width: 600,
      height: 800,
    }
  ]

</script>

<template>
  <div class="main">
    <div class="main__card">
      <Swiper :images="SwiperImageContent" />
      <div class="main__card-body">
        <div class="main__card-body-top">
          <h1 class="main__card-body-top-title">
            ЖАКЕТ УДЛИНЁННЫЙ, БЕЛЫЙ
            <span>
              <NuxtImg
                  src="/icons/BookMark.svg"
                  loading="lazy"
                  width="24"
                  height="24"
                  class="main__card-body-top-icon visible-mobile"
              />
            </span>
          </h1>
          <p class="main__card-body-top-price">
            8900 RUB
          </p>
        </div>
        <SectionSize :sizes="ButtonSizes" />
        <SectionColor :colors="ButtonColors" />
        <div class="main__card-body-actions hidden-tablet">
          <Button
              mode="black"
              label="Добавить в корзину"
              class-name="main__card-body-actions-add"
          />
          <Button
              mode="onlyBorder"
              label="Добавить в закладки"
              :icon="{name: 'Bookmark', alt: 'Закладка', width: 24, height: 24}"
              class-name="main__card-body-actions-favorite"
              is-label-hidden
          />
        </div>
        <div class="main__card-body-faq">
          <Accordion
              v-for="(item, index) in AccordionContent"
              :key="index"
              :title="item.title"
              :description="item.description"
          />
        </div>
      </div>
    </div>
    <LayoutsSection
        title="Похожие товары"
        class-name="main__related-products"
        title-class-name="main__related-products-title"
        title-id="related-products"
    >
      <div class="main__related-products-content">
        <Card
            v-for="item in RelatedProductsContent"
            :image="item.image"
            :title="item.title"
            :price="item.price"
        />
      </div>
    </LayoutsSection>
  </div>
</template>