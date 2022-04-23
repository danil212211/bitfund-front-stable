<template>
    <div class="flex h-screen">
      <div class="sm:m-auto md:col-span-4 text-center
    shadow-gray-400 shadow-xl m-8 w-full sm:w-4/12 h-5/6 rounded-3xl">
        <NuxtLink to="/"><img  src="../assets/logo.png" class="w-full"></NuxtLink>

        <p class="font-gilroy m-6 text-3xl">Давайте добавим карточку</p>
        <form>
          <input v-model="title" class="w-8/12 mb-2"  placeholder="Название продукта" >
          <vue-editor id="desc" v-model="description" class="m-2 overscroll-auto" :editorToolbar="customToolbar"/>
          <input @change="handleFileUpload" id="fileUpload" name="image" type="file" hidden>
          <button @click="chooseFiles" class="bg-white outline outline-2 w-8/12 mb-4 outline-primary text-primary rounded-xl font-segoe text-lg
        shadow-gray-600
          shadow active:shadow-md active:shadow-gray-900   hover:shadow-md hover:shadow-gray-700
          ">Загрузить фото</button>
          <button submit @click="addProject" class="col-start-0 md:col-start-0 mx-auto
          md:mx-0 h-8  md:col-span-4 shadow-gray-600
          shadow-sm active:shadow active:shadow-gray-900   hover:shadow hover:shadow-gray-700
          my-auto mb-2 bg-primary rounded-xl text-lg font-segoebold text-white w-8/12 m-w-full">Создать проект</button>
        </form>
      </div>
  </div>
</template>

<script>

    export default {
        name: "addProject",
        data() {
            return {
                title: "",
                description: "",
                value: [],
                options: [],
                customToolbar: [
                    ["bold", "italic", "underline"],
                    [{list: "ordered"}, {list: "bullet"}],
                    [
                        {align: ""},
                        {align: "center"},
                        {align: "right"},
                        {align: "justify"}
                    ],
                    [{color: []}]
                ],
                file : ''
            }
        },
        computed : {
            availableOptions() {
                return this.options.filter(opt => this.value.indexOf(opt) === -1)
            }
        },
        methods: {
            chooseFiles: function(e) {
                document.getElementById("fileUpload").click();
                e.preventDefault();
            },
            remvTag(e) {
                this.value = this.value.filter(el => {
                    return el !== e
                });
                this.options.push(e);
                console.log(e);
            },
            async getTags() {
               this.options= await this.$axios.$get("/tag");
                let d=[];
                result.data.forEach(el => {
                    d.push({
                        'text' : el.name,
                        'value' : el.id
                    });
                });
                this.options=d;
            },
            async addProject(e) {
                e.preventDefault();
                let data= new FormData();
                let id=this.$route.params.id;
                let headers= {
                    headers : {
                        'Content-Type': 'multipart/form-data'
                    }
                };
                data.append('image_logo',this.file);
                data.append('title',this.title);
                data.append('description',this.description);
                await this.$axios.$post('/project',data,headers);
            },
            handleFileUpload(e) {
                this.file = e.target.files[0];
                console.log(this.file);
            },
            async addCard() {
                let data = new FormData();
                let id = this.$route.params.id;
                let headers = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Credential' : 'true'
                    },
                    withCredentials: true
                };

                data.append('image',this.file);
                data.append('title', this.title);
                data.append('description', this.description);
                console.log(data);
                await this.$axios.$post("/project", data, headers);
            }
        },
        mounted() {
            this.getTags();
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
  }
</style>
