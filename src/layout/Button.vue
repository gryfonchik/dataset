<template>
  <button class="v_btn">
    <img class="v_img" src="../assets/plus.svg" />
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style scoped>
.v_img {
  width: 50px;
  height: 50px;
}
.v_btn {
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
.v_btn:hover {
  background: #d5d3d3;
}
.v_btn:focus-visible {
  outline: transparent;
  box-shadow: 0 4px 4px #000000;
}
.v_btn:active {
  box-shadow: 0 4px 4px #000000;
}
</style>
