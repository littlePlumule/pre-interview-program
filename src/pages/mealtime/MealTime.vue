<template>
  <div class="container">
    <h1>供餐系統</h1>
    <MealTimeItem
      v-for="(value, name) in weeks"
      :key="name"
      :label="value"
      @export-data="exportData"
    />
    <div class="formatted-data">
      <pre>{{ JSON.stringify(dataFormat, null, 1) }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MealTimeItem from './compoents/MealTimeItem.vue'

const weeks = {
  week_day0: '星期日',
  week_day1: '星期一',
  week_day2: '星期二',
  week_day3: '星期三',
  week_day4: '星期四',
  week_day5: '星期五',
  week_day6: '星期六',
}

const dataFormat = ref({})

function exportData(childValue) {
  dataFormat.value[childValue[0]] = childValue[1]
}
</script>
