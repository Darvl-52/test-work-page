<script setup lang="ts">
import './Button.scss';
import clsx from "clsx";
import type { ImageType } from "~/constants/type.constants";

interface Props {
  href?:string;
  className?: string;
  label?: string;
  mode?:
      'transparent'
      |
      'onlyBorder'
      |
      'black';
  isLabelHidden?: boolean;
  icon?: ImageType;
}

const props = defineProps<Props>();

const title = props.isLabelHidden ? props.label : undefined;
</script>

<template>
  <component
      :is="href ? 'a' : 'button'"
      :href="href"
      :title="title"
      :aria-label="title"
      :class="clsx(className, 'button', {
        [`button-${mode}`]: mode
      })"
  >
    <NuxtImg
        v-if="icon"
        :src="`/icons/${icon?.name}.svg`"
        :alt="icon?.alt"
        :width="icon?.width"
        :height="icon?.height"
    />
    <span class="button__label" v-if="!isLabelHidden">
      {{ label }}
    </span>
  </component>
</template>