<script setup lang="ts">
import './Color.scss';
import type { ButtonColorType } from "~/config/ButtonsConfig";
import clsx from "clsx";

type Props = {
  colors: ButtonColorType[];
  className?: string;
}

defineProps<Props>();

</script>

<template>
  <LayoutsSection
      title="Цвет: белый"
      title-id="variant-color"
      class-name="variant-color"
  >
    <div class="variant-color-group">
      <Button
          v-for="item in colors"
          :key="item.color"
          :label="item.color"
          is-label-hidden
          :class-name="clsx(className, 'variant-color-button', {
            [`variant-color-button-${item.color}`]: item.color
          })"
      />
    </div>
  </LayoutsSection>
</template>