<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
    count: 0,
})

const incrementCount = () => {
    state.count++
}
</script>

<template>
    <button
        class="mb-6 rounded-lg border border-transparent bg-gray-200 p-8 px-4 py-2 text-lg transition-colors duration-200 hover:border-blue-500 focus:ring-2 focus:ring-black dark:bg-gray-950 dark:focus:ring-white"
        @click="incrementCount"
    >
        count is {{ state.count }}
    </button>
</template>
