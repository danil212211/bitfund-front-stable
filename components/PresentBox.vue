<template>

    <div class=" md:flex">
        <div class=" present_box col-span-2 rounded-xl"></div>
        <div class="col-span-4 my-2 mx-6">
            <p class="font-segoebold text-base ">
                IT-компании, малый
                бизнес и несколько
                настольных игр
            </p>
            <button class=" w-60 bg-primary rounded-lg h-10 text-white text-lg font-segoebold">Посмотреть</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PresentBox"
    }
</script>

<style scoped>
    .present_box{
        min-width:200px;
        height: 181px;
        background-color: grey;
    }
</style>