<template>
    <HatAll/>
    <div>
        <div class="snowflake">❄</div>
        <div class="snowflake" style="left: 20%; animation-duration: 8s;">❄</div>
        <div class="snowflake" style="left: 40%; animation-duration: 12s;">❄</div>
        <div class="snowflake" style="left: 60%; animation-duration: 10s;">❄</div>
        <div class="snowflake" style="left: 80%; animation-duration: 14s;">❄</div>
        <RouterView></RouterView>
    </div>
</template>

<script setup>
import HatAll from './components/Hat.vue'


</script>

<style scoped>
</style>
