<template>
  <div class="flex h-screen">
    <div class="sm:m-auto md:col-span-4 text-center
    shadow-gray-400 shadow-lg m-8 w-full sm:w-4/12 h-5/6 rounded-3xl">
      <img src="../assets/logo.png" class="w-full">
      <p class="font-gilroy m-6 text-3xl">Добро пожаловать!</p>
      <form>
        <input v-model="email" class="w-8/12 h-8 mb-2 text-center"  placeholder="Почта" >
        <input v-model="password" class="w-8/12 h-8 mb-2 text-center"  placeholder="Пароль" >
        <div></div>
        <button submit class="col-start-0 md:col-start-0 mx-auto
        md:mx-0 h-8  md:col-span-4 shadow-gray-600
        shadow-sm active:shadow active:shadow-gray-900   hover:shadow hover:shadow-gray-700
        my-auto mb-2 bg-primary rounded-xl text-lg font-segoebold text-white w-8/12 m-w-full">Регистрация</button>

      </form>
      <NuxtLink to="/login" class="bottom-0">Вход</NuxtLink>
    </div>
  </div>
</template>

<script>

    export default {
        name: "register",
        data() {
            return {
                email: "",
                password: "",

            }
        },
        methods : {

            handleFileUpload(e) {
                this.file=e.target.files[0];
                console.log(this.file);
            }
        }
    }
</script>

<style scoped>
  input:active{
    outline:  gray solid 2px;

  }
  input{
    outline:  gray solid 1px;
    border-radius: 5px;
  }
  input:hover{
    outline: gray solid 2px;
  }</style>
