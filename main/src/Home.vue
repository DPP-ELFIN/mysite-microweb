<template>
    <div class="home">
        <!-- <router-link to="/vue3">vue3</router-link> -->
        <button @click="goVue3">vue3</button>
        <button @click="goReact">react</button>
        <button @click="goNuxt">Nuxt</button>
        <!-- <Notification /> -->
    </div>
</template>


<script setup lang='ts'>
import { useRouter } from 'vue-router'
// import Notification from './components/Notification.vue';

const router = useRouter()

const goVue3 = () => {
    router.push('/vue3')
}
const goReact = () => {
    router.push('/react')
}
const goNuxt = () => {
    router.push('/nuxt')
}

</script>


<style scoped >
@import url("@/assets/css/Home.css");
</style>