<template>
  <div>
    <Wujie name="vue3" url="http://localhost:5175/" :sync="true" :props="{ data: '123' }"></Wujie>
  </div>
</template>

<script setup lang="ts">
import Wujie from "wujie-vue3";
</script>

<style scoped></style>
