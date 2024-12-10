<template>
    <div v-for="inst in InstitutesStorage.institutes" :key="inst.id" class="block">
        <router-link :to="{ name: 'institute', params: { instituteId: inst.id } }">
            <div class="Institutes" :style="{ backgroundImage: 'url(' + inst.picture + ')' }">
            </div>
            <div class="textInst">
                {{ inst.name }}
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { useInstitutesStorage } from '@/storages/InstitutesStorage';
import { onBeforeMount } from 'vue';

const InstitutesStorage = useInstitutesStorage();
onBeforeMount(()=>{
    InstitutesStorage.getInstitutesFromServer();
});
</script>

<style scoped>
.block {
    width: 25em;
    height: 20em;
    display: inline-block;
    margin: 1em;
    text-decoration: none;
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
}

.block:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.Institutes {
    background-color: #fff;
    margin-top: 1em;
    position: relative;
    width: 20em;
    height: 12em;
    background-size: 55%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.Institutes:hover {
    transform: scale(1.05);
    cursor: pointer;
}
.textInst {
    background: rgba(0, 0, 0, 0.6);
    padding: 5px 10px;
    width: 90%;
    height: 20%;
    margin: 10px auto;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #fff;
    text-align: center;
    border-radius: 10px;
    transition: background-color 0.3s ease-in-out;
}

.textInst:hover {
    background: rgba(255, 255, 255, 0.8);
    color: #000;
}

@media (max-width: 768px) {
    .block {
        margin: 1em;
    }

    .Institutes {
        width: 100%;
        height: 150px;
    }

    .textInst {
        font-size: 14px;
        padding: 8px;
    }
}
</style>

