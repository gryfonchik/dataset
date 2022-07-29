<template>
<div class="m_block">
  <div class="contain">
    <div class="p_name">{{project.title}}</div>
    <div>
      <button type="submit" class="s_button" onclick="document.location='/mark'">Start labeling</button>
    </div>
  </div>
  <div class="p_info">{{project.description}}</div>
  <ProjectNav :datasetList="datasets" @createDataset="onCreateDataset" />
  </div>
</template>

<script>
import ProjectNav from "../layout/ProjectNav.vue";
import endpoints from "../endpoints";

export default {
  name: "WorkPage",
  components: {
    ProjectNav,
},

created() {
    const windowData = Object.fromEntries(
      new URL(window.location).searchParams.entries()
    );
    const projectId = windowData['id'];
    console.log('projctid: ' + projectId)
    const token = localStorage.getItem('token');
    if (projectId){
      this.getProject(token, projectId);
      this.getDatasets(token, projectId, 0, 999); 
    }
},

data() {
  return {
    project: {},
    datasets: [],
  }
},

methods: {
  async getProject(token, projectId){
    const project = await endpoints.getProject(token, projectId);
    this.project = project.data;
    console.log(project);
  },

  async onCreateDataset(data){
    console.log(data);
    const token = localStorage.getItem('token');
    const create = await endpoints.createDataset(token, data.title, data.description, this.project.id);
    this.getDatasets(token, this.project.id, 0, 999);
    console.log(create);
  },

  async getDatasets(token, projectId, offset, limit){
    const datasets = await endpoints.getDatasets(token, projectId, offset, limit);
    this.datasets = datasets.data.items;
    console.log('this.datasets : ');
    console.log(this.datasets);
  }
}

};
</script>

<style scoped>
.m_block{
 max-width: 1536px;
 margin: auto;
}
.contain {
  display: grid;
  grid-template-columns: 50% 50%;
}
.p_name {
  margin-left: 106px;
  margin-top: 48px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
}
.p_info {
  margin-top: 14px;
  margin-left: 106px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #aaaaaa;
}
.s_button {
  float: right;
  margin-right: 40px;
  margin-top: 60px;
  padding-left: 23px;
  padding-right: 23px;
  height: 40px;
  background: #ffffff;
  border: 0.5px solid #000000;
  border-radius: 20px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
  user-select: none;
  cursor: pointer;
}
.s_button:hover {
  background: #cacfda;
}
.s_button:focus-visible {
  outline: transparent;
  box-shadow: 0 4px 4px #000000;
}
.s_button:active {
  box-shadow: 0 4px 4px #000000;
}
</style>
