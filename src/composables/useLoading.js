import { inject } from 'vue'

export function useLoading() {
  const isLoading = inject('isLoading')

  function setIsLoading(param) {
    isLoading.value = param
  }

  return { isLoading, setIsLoading }
}
