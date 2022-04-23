<template>
  <div>
      <div class="w-9/12 mx-auto">
          <div class="grid justify-self-stretch grid-cols-12 mt-2">
            <NuxtLink to="/addProject" class=" md:col-start-0 mx-auto md:mx-0 h-8 col-span-12 col-start-0 md:col-span-4  my-auto mb-2 "><button class=" shadow-gray-600 shadow-sm active:shadow active:shadow-gray-900   hover:shadow hover:shadow-gray-700 bg-primary rounded-xl text-lg font-segoebold text-white w-31 m-w-full">создать</button></NuxtLink>
              <img src="../assets/logo.png" class="m-2   mx-auto col-span-12 md:col-span-4" />
              <div class="md:mr-0 my-auto col-span-12 md:col-span-4 mx-auto">
                <div class="flex gap-4">
                  <div class="font-segoebold text-lg ">
                    <div>{{this.user.name}}</div>
                    <div>{{user.cash}}</div>
                  </div>

                  <img v-if="this.user.img_src!=undefined" :src="require(`../assets/${this.user.img_src}.png`)" class="rounded-full bg-gray-600 h-14 w-14">
                </div>
              </div>
          </div>

      </div>
      <img src="../assets/line.svg" class="h-2 w-11/12 mx-auto min-h-full"/>
  </div>
</template>
<script>
    export default {
        name : "navbar",
        data() {
            return {
                user : {}
            }
        },
        methods: {
            async getUser() {
                const id=this.$cookies.get("id",{ fromRes: true });
                console.log(id);
             let response=await   this.$axios.$get(`/user/${id}`);
             this.user=response[0];
            console.log(this.user);
            }
        },
        mounted() {
          this.getUser();
        }
    }
</script>
