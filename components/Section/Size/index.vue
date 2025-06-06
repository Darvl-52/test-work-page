<script setup lang="ts">
import './Size.scss';
import type { ButtonSizeType } from "~/config/ButtonsConfig";

type Props = {
  sizes: ButtonSizeType[];
}

defineProps<Props>();

</script>

<template>
  <LayoutsSection
      title="Размеры"
      title-id="variant-sizes"
      class-name="variant-sizes"
  >
    <div class="variant-sizes-group">
      <Button
          v-for="item in sizes"
          :key="item.title"
          :label="item.title"
          :class-name="`variant-sizes-button ${item.status}`"
          :disabled="item.status === 'soon'"
          mode="onlyBorder"
      />
    </div>
  </LayoutsSection>
</template>