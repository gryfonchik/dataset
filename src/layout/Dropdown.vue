<template>
  <div class="menu" @click="isOpen = !isOpen">
    <img class="d_img_l" src="../assets/profile.svg" />
    <div class="d_but">
      {{ title }}
    </div>
    <img class="d_img" src="../assets/h_arrow.svg" />
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div>
          <button id="exit" class="sub_button" @click="func">Sign out</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: ["items", "func"],
  data() {
    return {
      isOpen: false,
      title: "",
    };
  },
};
</script>

<style scoped>
.sub-menu {
  margin: auto;
  text-align: center;
  width: 300px;
  height: 60px;
  overflow: hidden;
  background: #ffffff;
  border: 0.5px solid #000000;
  border-radius: 0px 0px 20px 20px;
  position: absolute;
  top: 58px;
}
.sub_button {
  width: 300px;
  padding: 20px;
  height: 60px;
  border-radius: 20px;
  border: 0;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  background: transparent;
  color: #000000;
}
.sub_button:hover {
  background: #d5d3d3;
}
.menu {
  height: 30px;
  cursor: pointer;
}
.d_but {

  padding: 20px;
  float: left;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  background: transparent;
  border: 0;
  padding-top: 4px;
  color: #ffffff;
}
.d_img {
  width: 30px;
  height: 30px;
  float: right;
}
.d_img_l {
  width: 30px;
  height: 30px;
  float: left;
}
</style>
