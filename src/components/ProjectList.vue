<template>
  <button class="element" type="submit" onclick="document.location='/work'">
    <div class="e_name">Имя проекта</div>
    <div class="e_label">10</div>
    <div class="e_update">Обновление</div>
    <div class="e_teg">Тег</div>
  </button>
</template>

<script>
export default {
  name: "List",
};
</script>

<style scoped>
.element {
  position: absolute;
  left: 20px;
  right: 20px;
  top: 232px;
  width: 1501.4px;
  height: 70px;
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
.element:focus-visible{
      outline: transparent;
  box-shadow: 0 4px 4px #000000;
}
.element:active{
      box-shadow: 0 4px 4px #000000;
}
.e_name {
  float: left;
  margin: 24px;
}
.e_label {
  position: absolute;
  left: 585px;
  margin: 24px;
}
.e_update {
  position: absolute;
  left: 802px;
  margin: 24px;
}
.e_teg {
  position: absolute;
  left: 926px;
  margin: 24px;
}
</style>
