<template>
    <HatAll/>
    <div id="snowflakes">
        <RouterView></RouterView>
    </div>
</template>

<script setup>
import HatAll from './components/Hat.vue'
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
    console.log(newHeight);
    Array.of(document.querySelectorAll('.snowflake')).forEach((el) => {
        el.innerHTML = '';
    })
});
</script>

<style scoped>
</style>
