<script setup lang="ts">
import './Section.scss';
import clsx from "clsx";

type Props = {
  title: string;
  titleId: string;
  className?: string;
  titleClassName?:string;
}

defineProps<Props>();

</script>

<template>
  <section
      :class="clsx(className, 'section')"
      :aria-labelledby="titleId"
  >
    <header class="section__header">
      <div class="section__info">
        <h2 :class="clsx(titleClassName, 'section__title')" :id="titleId">
          {{ title }}
        </h2>
      </div>
    </header>
    <div class="section__body">
      <slot />
    </div>
  </section>
</template>