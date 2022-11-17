import Vue from 'vue'
declare module 'vue/types/vue' {
  interface Vue {
    $numericValue(value: KeyboardEvent): []
  }
}

Vue.prototype.$numericValue = (value:KeyboardEvent) => {
  const keysAllowed: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const keyPressed: string = value.key;
  if (!keysAllowed.includes(keyPressed)) {
    value.preventDefault()
  }
}
