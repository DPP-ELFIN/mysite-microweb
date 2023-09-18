<template>
    <div class="home">
        <!-- <button @click="goBack"></button> -->
        <a href="http://localhost:5173/">goback</a>
        <router-link to="/home/home1">home1</router-link>
        <router-view></router-view>
    </div>
</template>


<script setup lang='ts'>

declare global {
    interface Window {
        $wujie: {
            props: Record<string, any>;
        };
    }
}
const goBack = () => {
    console.log(window.$wujie);

    // window.location.href = window.location.origin;
    // router.push('/')
    // location.replace(window.location.origin);
    // console.log(window.location.origin);
} 
</script>


<style scoped >
.home {}
</style>