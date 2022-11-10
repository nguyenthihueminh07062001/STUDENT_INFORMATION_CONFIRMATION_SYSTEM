// stores/counter.js
import { defineStore } from 'pinia';

export const userAccStore = defineStore('userId', {
  state: () => {
        return {
            user: {}
        }
  }
})