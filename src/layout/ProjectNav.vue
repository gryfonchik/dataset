<template>
  <div class="n_grid">
    <div class="p_nav">
      <ul class="menu">
        <li>
          <button class="nav" @click="component = 'Review'">Обзор</button>
        </li>
        <li>
          <button class="nav" @click="component = 'Dataset'">Dataset</button>
        </li>
        <li><button class="nav" @click="component = 'Tag'">Пометки</button></li>
        <li>
          <button class="nav" @click="component = 'DataRows'">
            Строки данных
          </button>
        </li>
        <li>
          <button class="nav" @click="component = 'Export'">Экспорт</button>
        </li>
      </ul>
    </div>
    <Button v-if="component == 'DataRows'" @click="r_showModal" />
    <Button v-if="component == 'Tag'" @click="t_showModal" />
    <Button v-if="component == 'Dataset'" @click="d_showModal" />
  </div>
  <component :is="component"></component>
  <d_modal v-show="d_isModalVisible" @close="d_closeModal" />
  <t_modal v-show="t_isModalVisible" @close="t_closeModal" />
  <r_modal v-show="r_isModalVisible" @close="r_closeModal" />
</template>

<script>
import Export from "../layout/Export.vue";
import Review from "../layout/Review.vue";
import Tag from "../layout/Tag.vue";
import DataRows from "../layout/DataRows.vue";
import Dataset from "../layout/Dataset.vue";
import Button from "./Button.vue";
import d_modal from "../modal/D_Modal.vue";
import t_modal from "../modal/T_Modal.vue";
import r_modal from "../modal/R_Modal.vue";

export default {
  name: "ProjectNav",
  components: {
    Export,
    Review,
    Tag,
    DataRows,
    Dataset,
    Button,
    d_modal,
    t_modal,
    r_modal,
  },
  data() {
    return {
      t_isModalVisible: false,
      d_isModalVisible: false,
      r_isModalVisible: false,
      component: "Review",
    };
  },
  methods: {
    r_showModal() {
      this.r_isModalVisible = true;
    },
    t_showModal() {
      this.t_isModalVisible = true;
    },
    d_showModal() {
      this.d_isModalVisible = true;
    },
    r_closeModal() {
      this.r_isModalVisible = false;
    },
    t_closeModal() {
      this.t_isModalVisible = false;
    },
    d_closeModal() {
      this.d_isModalVisible = false;
    },
  },
};
</script>

<style scoped>
.n_img {
  width: 50px;
  height: 50px;
}
.n_but {
  padding: 5px;
  width: 60px;
  height: 60px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  border: 0;
  margin-top: 46px;
  margin-left: 30px;
  cursor: pointer;
  user-select: none;
}
.n_but:hover {
  background: #d5d3d3;
}
.n_but:focus-visible {
  outline: transparent;
  box-shadow: 0 4px 4px #000000;
}
.n_but:active {
  box-shadow: 0 4px 4px #000000;
}
.n_grid {
  display: grid;
  grid-template-columns: 760px auto;
}
.p_nav {
  width: 740px;
  height: 70px;
  background: #ffffff;
  border: 1px solid #7e38c2;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  margin-top: 42px;
  margin-left: 20px;
}
ul {
  list-style: none;
  margin-left: 8px;
  margin-top: 18px;
  padding: 0;
}
.menu li {
  display: inline-block;
  margin-right: 18px;
  margin-left: 18px;
  position: relative;
}
.nav {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  padding: 0;
  background: transparent;
  border: 0px;
  user-select: none;
  cursor: pointer;
}
.nav::after {
  content: "";
  position: absolute;
  top: 30px;
  bottom: 0;
  left: 50%;
  display: block;
  background: none repeat scroll 0 0 transparent;
  height: 4px;
  width: 0;
  background: #870ac1;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
}
.nav:hover::after {
  width: 100%;
  left: 0;
}

.nav:focus::after {
  width: 100%;
  left: 0;
}
</style>
