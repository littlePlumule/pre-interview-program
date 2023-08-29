<template>
  <div class="mealtime">
    <h2>{{ label }}</h2>
    <input type="checkbox" :id="key" class="toggle" v-model="isMealTime" />
    <label :for="key"></label>
    <p>{{ isMealTime ? '本日供餐' : '本日不供餐' }}</p>
    <div class="time" v-if="isMealTime">
      <div class="select-block">
        <select v-model="startTime">
          <option value="" disabled>請選擇時間</option>
          <option
            v-for="time in times"
            :value="time"
            :disabled="time === endTime || time >= endTime"
          >
            {{ time }}
          </option>
        </select>
      </div>
      <span>-</span>
      <div class="select-block">
        <select v-model="endTime">
          <option value="" disabled>請選擇時間</option>
          <option
            v-for="time in times"
            :value="time"
            :disabled="time === startTime || time <= startTime"
          >
            {{ time }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, watch } from 'vue'
import { useMealTime } from '../../../composables/useMealTime'

const key = getCurrentInstance().vnode.key

const emits = defineEmits(['export-data'])
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
})

const { times, isMealTime, startTime, endTime, exportData } = useMealTime(key)

watch(
  exportData,
  value => {
    emits('export-data', value)
  },
  {
    immediate: true,
  }
)
</script>
