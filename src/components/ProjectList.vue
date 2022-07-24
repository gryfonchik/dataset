<template>
  <button class="element" type="submit">
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

<style>
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
