<script setup>
import BaseButton from './BaseButton.vue'
import { validateSelectOptions, isUnderfinedOrNull, isNumberOrNull } from '../validators'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue'

const props = defineProps({
  selected: Number,
  placeholder: {
    required: true,
    type: String
  },
  options: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})

const emit = defineEmits({
  select: isNumberOrNull
})

const isNotSelected = computed(() => isUnderfinedOrNull(props.selected))
</script>

<template>
  <div class="flex gap-2">
    <BaseButton @click="emit('select', null)">
      <XMarkIcon class="h-8" />
    </BaseButton>
    <select
      class="rouded w-full truncate bg-gray-100 px-2 py-1 text-2xl"
      @change="emit('select', +$event.target.value)"
    >
      <option :selected="isNotSelected" disabled value="">
        {{ placeholder }}
      </option>
      <option
        v-for="{ value, label } in options"
        :key="value"
        :value="value"
        :selected="value === selected"
      >
        {{ label }}
      </option>
    </select>
  </div>
</template>
