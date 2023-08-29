<template>
  <div class="column">
    <div class="formatted-data" v-for="code in codes">
      <pre><code lang="javascript">{{ code }}</code></pre>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  codes: {
    type: Object,
    required: true,
  },
})
</script>
