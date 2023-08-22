<template>
  <div class="filters">
    <div
      v-for="filter in filters"
      :key="filter.value"
      :class="['filter', { active: selected === filter.value }]"
      @click="emits('change-filter', filter.value)"
    >
      {{ filter.label }}
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['change-filter'])
const props = defineProps({
  selected: {
    type: String,
    required: true,
  },
})

const filters = [
  { label: '全部', value: 'all' },
  { label: '已完成', value: 'completed' },
  { label: '未完成', value: 'incomplete' },
]
</script>
