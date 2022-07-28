<template>
  <div class="win">
    <div class="list">
      <div></div>
      <div>Dataset name</div>
      <div></div>
      <div>Description</div>
    </div>
    <div class="element" @click="showModal">
      <div></div>
      <div>Dataset name</div>
      <div></div>
      <div>10</div>
    </div>
    <modal v-show="isModalVisible" @close="closeModal" />
  </div>
</template>

<script>
import modal from "../modal/D_Modal.vue";
export default {
  name: "Dataset",
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
.win {
  margin-bottom: 20px;
}
.list {
  display: grid;
  padding-top: 12px;
  grid-template-columns: 50px 200px 100px auto 36px;
  margin-top: 38px;
  margin-left: 20px;
  width: 1496px;
  height: 28px;
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

.element {
  padding-top: 24px;
  display: grid;
  grid-template-columns: 36px 238px 100px auto 36px;
  margin-left: 20px;
  width: 1496px;
  height: 46px;
  background: #ffffff;
  border: 0.5px solid #000000;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  font-family: "Roboto", sans-serif;
  color: #000000;
  text-transform: uppercase;
}
</style>
