import type { CardProps } from "~/components/Card/index.vue";

export const RelatedProductsContent: CardProps[] = [
  {
    image: {
      name: 'Image-1',
      alt: 'Модель в платье с v-образным вырезом',
      width: 600,
      height: 800,
    },
    title: 'ПЛАТЬЕ С V-ОБРАЗНЫМ ВЫРЕЗОМ, БЕЛЫЙ',
    price: {
      actualPrice: '14 900',
      oldPrice: '6 000',
    }
  },
  {
    image: {
      name: 'Image-2',
      alt: 'Модель в двубортном жакете',
      width: 600,
      height: 800,
    },
    title: 'ЖАКЕТ ДВУБОРТНЫЙ, СЕРО-ГОЛУБОЙ',
    price: {
      actualPrice: '8900',
    },
  },
  {
    image: {
      name: 'Image-3',
      alt: 'Модель в платье макси с ярусами',
      width: 600,
      height: 800,
    },
    title: 'ПЛАТЬЕ МАКСИ С ЯРУСАМИ, БЕЛЫЙ',
    price: {
      actualPrice: '10 500',
    }
  },
  {
    image: {
      name: 'Image-4',
      alt: 'Модель в черном комбинезоне со стойкой',
      width: 600,
      height: 800,
    },
    title: 'КОМБИНЕЗОН СО СТОЙКОЙ, ЧёРНЫЙ',
    price: {
      actualPrice: '9500',
    }
  },
];