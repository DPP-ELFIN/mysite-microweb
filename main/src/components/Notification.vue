<!-- 首页通知栏 -->

<template>
    <div class="Notification ">
        <Transition :duration="{ enter: 10000, leave: 1000 }" mode="out-in" appear>
            <div>123</div>
        </Transition>
    </div>
</template>


<script setup lang='ts'>


</script>


<style scoped>
.Notification {
    height: 100px;
    width: 100px;
}
</style>