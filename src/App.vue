<template>
    <HatAll/>
    <div id="stars"></div>
    <div id="snowflakes">
        <RouterView></RouterView>
    </div>
</template>

<script setup>
import HatAll from './components/Hat.vue'
import {onMounted} from "vue";
const createStar = () => {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;

    const star = document.createElement('div');
    star.classList.add('star');

    // Случайное расположение звезды
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 50}%`; // Ограничиваем только верхнюю часть
    star.style.width = `${Math.random() * 3 + 2}px`; // Размер от 2 до 5 пикселей
    star.style.height = '10px';
    star.style.width = '10px';
    // Разное время анимации для каждой звезды
    star.style.animationDuration = `${Math.random() * 2 + 3}s`;

    starsContainer.appendChild(star);

};
onMounted(() =>{
    for (let i = 0; i < 20; i++) {
        createStar();
    }
})
function createSnowFlake() {
    const newShowFlake = document.createElement('div');
    newShowFlake.textContent = '❄';
    newShowFlake.className = 'snowflake';
    newShowFlake.style.left = Math.random() * 100 + '%';
    newShowFlake.style.animationDuration = Math.random() + 5 + document.body.scrollHeight / 100 +  's'; // Случайная длительность падения (5-8 секунд)
    newShowFlake.style.fontSize = Math.random() * 5 + 20 + 'px'; // Случайный размер снежинки (10-20px)
    document.querySelector('#snowflakes').appendChild(newShowFlake);
    newShowFlake.addEventListener('animationend', () => {
        newShowFlake.remove();
    });
}
const intervalId = setInterval(createSnowFlake, 1000);


const observeScrollHeight = (callback) => {
    let lastHeight = document.body.scrollHeight;
    const observer = new MutationObserver(() => {
        const newHeight = document.body.scrollHeight;

        if (newHeight !== lastHeight) {
            lastHeight = newHeight;
            callback(newHeight);
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });

    return observer;
};

observeScrollHeight((newHeight) => {
    Array.from(document.querySelectorAll('.snowflake')).forEach((el) => {
        el.innerHTML = '';
    })
});
</script>

<style scoped>
</style>
