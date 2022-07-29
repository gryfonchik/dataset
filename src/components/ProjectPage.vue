<template>
  <div class="contain">
      <div class="s_grid">
        <button type="submit" class="loupe">
          <img class="loupe-image" src="../assets/search.svg" />
        </button>
        <input name="search" class="search" placeholder="search" v-model="filter" type="search" />
      </div>
    <button class="c-button" @click="showModal">
      <img class="c-image" src="../assets/add.svg" />
      <span>create project</span>
    </button>
  </div>
  <ProjectList :list="filteredProjects"/>
  <modal titlePlaceholder="Project name" textareaPlaceholder="Project description" v-show="isModalVisible" @submit="onSubmit" @close="closeModal" />
</template>

<script>
import modal from "../modal/Modal.vue";
import ProjectList from "../layout/ProjectList.vue";
import endpoints from "../endpoints";

export default {
  name: "ProjectPage",
  components: {
    ProjectList,
    modal,
  },

  mounted() {
    const token = localStorage.getItem('token');
    if(token){
      this.getProjects(token, 999, 0);
    }
  },


  data() {
    return {
      isModalVisible: false,
      projects: [],
      filter: '',
    };
  },
  computed: {
    filteredProjects(){
      return this.projects.filter(project => project.title.toLowerCase().includes(this.filter.toLowerCase()) || project.description.toLowerCase().includes(this.filter.toLowerCase()));
    },
  },
  
  methods: {
    async getProjects(token, limit, offset){
      const projects = await endpoints.getProjects(token, offset, limit);
      this.projects = projects.data.items;
      console.log(this.projects);
    },

    async onSubmit(data){
      console.log(data);
      const token = localStorage.getItem('token');
      const create = await endpoints.createProject(token, data.title, data.description);
      console.log(create);
      await this.getProjects(token, 999, 0);
      
    },

    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style scoped>
.s_grid {
  margin-left: 20px;
  background: #ffffff;
  border: 0.5px solid #000000;
  border-radius: 20px;
  margin-top: 47px;
  height: 40px;
  display: grid;
  grid-template-columns: auto auto;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
}
.contain {
  display: grid;
  gap: 30px;
  grid-template-columns: auto auto;
  max-width: 1536px;
  margin: auto;
}
.search {
  width: 150px;
  height: 40px;
  padding-left: 5px;
  padding-right: 5px;
  font-family: "Roboto", sans-serif;
  background: #ffffff;
  border: 0;
  border-radius: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
}
input:focus {
border: 0;
}
.search:focus {
  width: 400px;
}

.loupe {
  margin-left: 7px;
  margin-top: 5px;
  height: 30px;
  width: 30px;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
}

.c-button {
  border: 0.5px solid #000000;
  border-radius: 20px;
  background: #ffffff;
  margin-right: 1200px;
  cursor: pointer;
  width: 200px;
  height: 40px;
  margin-top: 47px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
}

span {
  height: 19px;
  margin-top: 7px;
  margin-right: 18px;
  float: right;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
}

.c-button:hover {
  background: #cacfda;
}

.c-button:focus-visible {
  outline: transparent;
  box-shadow: 0 4px 4px #000000;
}

.c-button:active {
  box-shadow: 0 4px 4px #000000;
}

.c-image {
  width: 30px;
  height: 30px;
  float: left;
  margin-left: 13px;

}
</style>
