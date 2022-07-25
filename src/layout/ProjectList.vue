<template>
  <div class="list">
    <div></div>
    <div class="name">Имя проекта</div>
    <div></div>
    <div class="label">Метки</div>
    <div></div>
    <div class="update">Обновление</div>
    <div></div>
    <div class="teg">Тег</div>
  </div>
  <button class="element" type="submit" onclick="document.location='/work'">
    <div></div>
    <div class="e_name">Имя проекта</div>
    <div></div>
    <div class="e_label">10</div>
    <div></div>
    <div class="e_update">Обновление</div>
    <div></div>
    <div class="e_teg">Тег</div>
  </button>
</template>

<script>
export default {
  name: "ProjectList",
};
</script>

<style scoped>
.element {
  padding-top: 24px;
  display: grid;
  grid-template-columns: 25px 111px 466px 42px 186px 53px 98px 23px;
  margin-left: 20px;
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
.element:focus-visible {
  outline: transparent;
  box-shadow: 0 4px 4px #000000;
}
.element:active {
  box-shadow: 0 4px 4px #000000;
}

.list {
  display: grid;
  padding-top: 12px;
  grid-template-columns: 36px 90px 477px 42px 196px 53px 90px 23px;
  margin-top: 38px;
  margin-left: 20px;
  width: 1500px;
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
</style>
