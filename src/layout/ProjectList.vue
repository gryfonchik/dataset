<template>
  <div class="block">
    <div class="list">
      <div></div>
      <div>Project name</div>
      <div></div>
      <div>labels</div>
      <div></div>
      <div>Uptated</div>
      <div></div>
      <div>Teg</div>
    </div>
    <button class="element" type="submit" onclick="document.location='/work'">
      <div></div>
      <div>Project name</div>
      <div></div>
      <div>10</div>
      <div></div>
      <div>Uptated</div>
      <div></div>
      <div>Teg</div>
    </button>
  </div>
</template>

<script>
export default {
  name: "ProjectList",
};
</script>

<style scoped>
.block {
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
}
.element {
  padding-top: 24px;
  padding-bottom: 24px;
  display: grid;
  grid-template-columns: 25px 118px 456px 42px 192px 68px 80px 2px;
  margin-left: 20px;
  width: 1501.5px;
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
