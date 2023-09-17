<template>
  <div class="app">
    <h1>主应用</h1>
    <!-- <Wujie name="react" url="http://localhost:5174/">react</Wujie> -->
    <router-link to="/vue3">vue3</router-link>
    <router-link to="/react">react</router-link>
    <router-view></router-view>
    <!-- <react /> -->
    <!-- <vue3 /> -->

    <!-- <Wujie name="vue3" url="http://localhost:5175/">vue3</Wujie> -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.app {
}
</style>
