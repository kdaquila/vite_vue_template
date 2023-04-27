<script setup lang="ts">
import { uiTechnology, supportTechnology } from './assets/logos'
import LogoButton from './components/LogoButton.vue'
import CounterButton from './components/CounterButton.vue'
const { VITE_APP_PATH = 'Missing .env file. Check example.env' } = import.meta
    .env
</script>

<template>
    <div class="flex justify-center">
        <LogoButton
            :href="logo.href"
            :img="logo.img"
            :imgAltText="logo.imgAltText"
            :classNames="logo.classNames"
            v-for="logo in uiTechnology"
            :key="logo.imgAltText"
        />
    </div>

    <h1 class="mb-8 text-5xl">Vue + Tailwind</h1>

    <h2 class="mb-4 text-2xl">with</h2>

    <div class="flex justify-center">
        <LogoButton
            :href="logo.href"
            :img="logo.img"
            :imgAltText="logo.imgAltText"
            :classNames="logo.classNames"
            v-for="logo in supportTechnology"
            :key="logo.imgAltText"
        />
    </div>

    <h1 class="mb-8 text-5xl">Vite + ESLint + Prettier</h1>

    <CounterButton />

    <p class="mb-2">
        <span>Edit</span>
        <code
            class="mx-2 inline-block rounded-lg bg-[rgba(0,0,0,0.05)] px-3 py-1 dark:bg-[rgba(255,255,255,0.05)]"
        >
            {{ VITE_APP_PATH }}
        </code>
        <span>and save to test HMR</span>
    </p>
</template>
