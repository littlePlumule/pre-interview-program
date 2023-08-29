import { ref, computed } from 'vue'

export function useMealTime(key) {
  const times = generateTimeSlot()

  const isMealTime = ref(false)
  const startTime = ref('00:00')
  const endTime = ref('23:59')

  function generateTimeSlot() {
    const timeSlots = []
    let hour = 0
    let minute = 0

    while (!(hour === 24 && minute === 0)) {
      const formattedHour = hour.toString().padStart(2, '0')
      const formattedMinute = minute.toString().padStart(2, '0')
      const timeSlot = `${formattedHour}:${formattedMinute}`
      timeSlots.push(timeSlot)

      minute += 30
      if (minute === 60) {
        hour++
        minute = 0
      }
    }
    timeSlots.push('23:59')
    return timeSlots
  }

  const exportData = computed(() => {
    if (!isMealTime.value) {
      return [key, '0'.repeat(48)]
    }

    const data = Array.from({ length: 48 }, (_, index) => {
      const currentTime = times[index]
      if (currentTime >= startTime.value && currentTime < endTime.value) {
        return '1'
      } else {
        return '0'
      }
    })
    return [key, data.join('')]
  })

  return {
    times,
    isMealTime,
    startTime,
    endTime,
    exportData,
  }
}
