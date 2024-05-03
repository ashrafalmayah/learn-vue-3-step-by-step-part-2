import { ref, watch } from 'vue'

export function useStorage(key, defaultVal = null) {
  let val = read()

  if (val) {
    val = ref(val)
  } else {
    val = ref(defaultVal)

    write()
  }

  watch(val, write, { deep: true })

  function read() {
    return JSON.parse(localStorage.getItem(key))
  }

  function write() {
    if (!val.value || val.value == '') {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(val.value))
    }
  }

  return val
}
