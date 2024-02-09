<template>
    <div class="flex flex-row justify-center items-center">
        <p class="font-titulo text-[50px] txt_gradient" translate="no">Pet</p>
        <div class="w-[60px] h-[60px] relative flex justify-center items-center 
            gradiente rounded-10 outline-none mx-5"
        >
            <img class="absolute w-[120px] h-[120px]" src="../assets/qrcode.svg" alt="qrcode">
        </div>
        <p class="font-titulo text-[50px] txt_gradient" translate="no">Medal</p>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .gradiente{
        background:linear-gradient(to bottom right, #898989 , #e7e7e7 , #898989)
    }
    .txt_gradient{
        background : linear-gradient(to bottom right,  #898989 , #e7e7e7 , #898989);
        -webkit-background-clip : text;
        background-clip : text;
        -webkit-text-fill-color : transparent;
    }
</style>