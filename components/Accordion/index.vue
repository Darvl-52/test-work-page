<script setup lang="ts">
import './Accordion.scss';

export type AccordionProps = {
  title: string;
  description: string;
}

defineProps<AccordionProps>();
</script>

<template>
  <div class="accordion">
    <details class="accordion__details">
      <summary class="accordion__summary">
        <span class="accordion__title" role="term">
          {{ title }}
        </span>
        <NuxtImg
            class="accordion__icon"
            src="/icons/Plus.svg"
            width="12"
            height="12"
            loading="lazy"
            alt="Иконка плюса"
        />
      </summary>

      <div class="accordion__content" role="definition">
        <div class="accordion__content-body">
          <p>{{ description }}</p>
        </div>
      </div>
    </details>
  </div>
</template>
