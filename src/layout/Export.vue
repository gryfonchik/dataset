<template>
  <div class="grid">
    <div class="block">
      <div class="t_grid">
        <div></div>
        <div>Экспорт пометки</div>
        <div></div>
        <div>JSON</div>
      </div>
      <div class="date">Дата обновления(UTC):</div>
    </div>
    <div>
      <button class="c-button">
        <img class="c-image" src="../assets/download.svg" />
        <span class="c-span">Экспорт</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Export",
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 750px auto;
}
.t_grid {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: grid;
  grid-template-columns: 89px 196px 271px 62px 72px;
  margin-top: 20px;
}
.block {
  width: 690px;
  height: 160px;
  background: #ffffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-left: 20px;
  margin-top: 42px;
}
.date {
  margin-left: 36px;
  margin-top: 20px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
}
.c-button {
  border: 0.5px solid #000000;
  border-radius: 20px;
  background: #ffffff;
  cursor: pointer;
  width: 230px;
  height: 56px;
  margin-top: 42px;
  margin-left: 26px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
  user-select: none;
}

.c-span {
  height: 19px;
  margin-right: 34px;
  float: right;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
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
  margin-left: 40px;
}
</style>
