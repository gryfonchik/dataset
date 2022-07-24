<template>
  <div class="contain">
    <div class="p_name">Имя проекта</div>
    <div>
      <button type="submit" class="s_button">Начать маркировку</button>
    </div>
  </div>
  <div class="p_info">изменить описание проекта</div>
  <ProjectNav />
  <Export 
  :options="options"
  />
</template>

<script>
import ProjectNav from "../layout/ProjectNav.vue";
import Export from "../layout/Export.vue";
export default {
  name: "WorkPage",
  components: {
    ProjectNav,
    Export,
  },
  data() {
    return {
      options: [
        {name: 'Option 1', value: 1},
        {name: 'Option 2', value: 2},
        {name: 'Option 3', value: 3},
      ]
    }
  },
};
</script>

<style>
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
  width: 238px;
  height: 40px;
  background: #ffffff;
  border: 0.5px solid #000000;
  border-radius: 20px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
}
.s_button:hover{

}
</style>
