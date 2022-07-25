<template>
  <div class="block">
    <div class="left">
      <div class="text">Имя пометки</div>
      <div class="dropdown"></div>
    </div>
    <div class="right">
      <button class="basket">
        <img class="c-image" src="../assets/basket.svg" />
      </button>
      <button class="accept">
        <img class="c-image" src="../assets/accept.svg" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tag",
};
</script>

<style scoped>
.block {
  display: grid;
  grid-template-columns: 706px auto;
  width: 1496px;
  height: 82px;
  background: #ffffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 42px;
  margin-left: 20px;
  padding-top: 22px;
}
.text {
  background: #ecd5ff;
  border-radius: 20px;
  width: 230px;
  height: 20px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  margin-left: 90px;
  padding: 20px;
}
.dropdown {
  width: 260px;
  height: 60px;
  background: #ecd5ff;
  border-radius: 20px;
}
.left {
  display: grid;
  gap: 84px;
  grid-template-columns: 360px 260px;
}

.right {
  margin-left: 584px;
  height: 60px;
  display: grid;
  gap: 46px;
  grid-template-columns: 30px 40px;
}
.accept {
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  user-select: none;
}
.basket {
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  user-select: none;
}
</style>
