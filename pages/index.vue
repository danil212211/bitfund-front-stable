

<template>
    <div>
    <NavBar />
    <div class="w-9/12 mx-auto" >
        <div class="grid grid-cols-12 justify-items-stretch mx-auto">
            <div class="col-span-12  md:col-span-6 " >
                <p class="font-gilroy text-3xl">подобрано для вас</p>
                <ProjectsForYou/>

            </div>
            <div class="col-span-12 md:col-span-6">
                <p class="font-gilroy text-3xl ">подарочная коробка</p>
                <PresentBox />
            </div>
            <div class="col-span-12"><p class="font-gilroy text-3xl">Проекты</p></div>
            <div class="w-full col-span-12 h-10 bg-[#E3E3E3] rounded-lg flex gap-4" >
                <div class="ml-2 my-auto" v-for="tag in tags">

                  <p class="font-segoe text-base rounded-lg bg-white px-2" v-if="activeTag===tag.id" >{{tag.name}}</p>
                  <button @click="updateActiveTag(tag.id)" class="font-segoe text-base" v-else >{{tag.name}}</button>
                </div>
            </div>
        </div>

      <div class=" w-6/12  grid grid-cols-12 mx-auto gap-x-12 gap-y-6 " >
        <div class="col-span-6 " v-for="project in projects">
          <div class="flex mb-2">
            <img class="bg-gra-600 w-8/12 h-32 object-cover rounded-xl" :src="require(`/assets/${project.img_logo}.png`)">
            <div>
              <p class="font-segoebold text-lg">{{project.title}}</p>

            </div>
          </div>
          <div class="flex justify-end gap-x-2">

            <button  @click="" class="
                h-10 shadow-gray-600 ml-0 mb-0
              shadow-sm active:shadow active:shadow-gray-900   hover:shadow hover:shadow-gray-700
              my-auto mb-2 bg-primary rounded-xl text-lg font-segoebold text-white w-24 m-w-full">Купить</button>
            <button   @click="payTo(project.id)" class="
                h-10 shadow-gray-600 ml-0 mb-0
              shadow-sm active:shadow active:shadow-gray-900   hover:shadow hover:shadow-gray-700
              my-auto mb-2 bg-primary rounded-xl text-lg font-segoebold text-white w-24 m-w-full">Помочь</button>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
  import addProject from "./addProject";

  export default {
    data() {
        return {
            tags : [{
                name: "Все",
                id : 0
            }],
            projects : [],
            activeTag: 0
        }
    },
      methods: {
          async payTo(projectId) {
              const id=this.$cookies.get("id",{ fromRes: true });
              await this.$axios.post(`/wallet?id=${id}`,{
                      'sum' : '200'
              })
          },
          async getProjects(tag) {
              let response;
              if (tag!==0) {
                  response= await this.$axios.$get(`/project?tagId=${tag}`);

              } else {
                  response= await this.$axios.$get(`/project`);
              }

              this.projects=response;
              console.log(response);

          },
          async getTags() {
              let response = await this.$axios.$get('/tag');
              this.tags=this.tags.concat(response);
              console.log(response)
          },
          async updateActiveTag(tagId) {
              this.activeTag=tagId;
              console.log(tagId);
          }
      },
      mounted() {
        this.getTags();
        this.getProjects(this.activeTag);

      },

      watch: {
          activeTag() {
              this.getProjects(this.activeTag);
          }
      }
  }
</script>
<style scoped>

</style>
