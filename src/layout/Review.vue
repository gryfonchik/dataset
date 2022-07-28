<template>
  <div class="grid">
    <div class="block">
      <div class="title">Labeling progress</div>
      <div class="values">
        <div>
          <div>10</div>
          <div class="element">Sent</div>
        </div>
        <div>
          <div>86</div>
          <div class="element">In line</div>
        </div>
        <div>
          <div>11.34%</div>
          <div class="element">Completed</div>
        </div>
      </div>
    </div>
    <div class="l_block">
      <div class="l_head">
        <div class="annotation">9 label</div>
        <div class="a_grid">
          <div>Name</div>
          <div>Count</div>
          <div>% share</div>
        </div>
      </div>
      <div class="list">
        <div class="l_grid">
          <div class="grid_grid">
            <img class="l-image" src="../assets/square.svg" />
            <div class="m">Name</div>
          </div>
          <div class="m">10</div>
          <div class="m">100.00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Review",
};
</script>

<style scoped>
.grid {
  display: grid;
  gap: 100px;
  grid-template-columns: 710px 690px;
}
.a_grid {
  display: grid;
  gap: 170px;
  text-align: center;
  grid-template-columns: 25px 70px 94px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-left: 30px;
  margin-top: 12px;
}
.l_head {
  width: 690px;
  height: 64px;
  background: #ffffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0 0;
  padding-top: 16px;
  margin-top: 42px;
}
.l_grid {
  display: grid;
  gap: 170px;
  grid-template-columns: 50px 68px 100px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding-top: 24px;
  margin-left: 30px;
}
.grid_grid {
  display: grid;
  gap: 10px;
  grid-template-columns: 25px 34px;
}
.m {
  margin-top: 3px;
}
.block {
  margin-top: 42px;
  margin-left: 20px;
  width: 690px;
  height: 160px;
  background: #ffffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}

.list {
  width: 690px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  margin-top: 1px;
}
.title {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  margin-left: 30px;
  margin-top: 16px;
}
.annotation {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  margin-left: 30px;
}
.values {
  margin-left: 60px;
  display: grid;
  gap: 150px;
  grid-template-columns: 68px 70px 118px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  margin-top: 16px;
  text-align: center;
}
.element {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-top: 14px;
}
</style>
