<template>
  <div class="contain">
    <form action="" method="post">
      <input name="search" class="search" placeholder="Поиск" type="search" />
      <button type="submit" class="loupe">
        <img class="loupe-image" src="../assets/search.svg" />
      </button>
    </form>
    <button class="c-button" @click="showModal">
      <img class="c-image" src="../assets/add.svg" />
      <span>новый проект</span>
    </button>
  </div>
  <div class="list">
    <div class="name">Имя проекта</div>
    <div class="label">Метки</div>
    <div class="update">Обновление</div>
    <div class="teg">Тег</div>
  </div>
  <modal v-show="isModalVisible" @close="closeModal" />
</template>

<script>
import modal from "../components/Modal.vue";
export default {
  name: "ProjectPage",
  components: {
    modal,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
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
.list {
  position: absolute;
  width: 1500px;
  height: 40px;
  left: 20px;
  right: 20px;
  top: 192px;
  background: #ecd4ff;
  border: 0.5px solid #000000;
  border-radius: 10px 10px 0px 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  font-family: "Roboto", sans-serif;
  color: #000000;
}
.name {
  position: absolute;
  left: 24px;
  margin: 12px;
}
.label {
  position: absolute;
  left: 584px;
  margin: 12px;
}
.update {
  position: absolute;
  left: 822px;
  margin: 12px;
}
.teg {
  position: absolute;
  left: 941px;
  margin: 12px;
}
.contain {
  display: grid;
  grid-template-columns: 258px auto;
}
.search {
  width: 200px;
  height: 40px;
  margin-top: 47px;
  margin-left: 20px;
  padding-left: 44px;
  padding-right: 5px;
  font-family: "Roboto", sans-serif;
  background: #ffffff;
  border: 0.5px solid #000000;
  border-radius: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
}

.loupe {
  height: 30px;
  width: 30px;
  position: absolute;
  top: 119px;
  left: 27px;
  margin-left: 4px;
  padding: 0;
  border: 0;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0);
}

.loupe-image {
  display: block;
  margin: auto;
}
.c-button {
  border: 0.5px solid #000000;
  border-radius: 20px;
  background: #ffffff;
  
  cursor: pointer;
  width: 200px;
  height: 40px;
  margin-top: 47px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
}

span {
  height: 19px;
  margin-top: 7px;
  margin-right: 22px;
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
