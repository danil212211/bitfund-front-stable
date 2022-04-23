<template>
    <div class="grid grid-cols-6 gap-4 mt-4">
        <div class=" col-span-6 md:col-span-3" v-for="project in projects">
            <div class="flex">
                <img class="  bg-gray-800 w-19 h-19 rounded-xl" :src="require(`/assets/${project.img_logo}.png`)" />
                <p class=" mx-2 text-lg font-segoebold">{{project.title}}</p>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ProjectsForYou",
        data() {
            return {

                projects : []
            }
        },
        methods: {
            async getProjects() {
                this.projects= await this.$axios.$get('/project?limit=4&rand=1');
            }
        },
        mounted() {
            this.getProjects();
        }
    }
</script>

<style scoped>

</style>
