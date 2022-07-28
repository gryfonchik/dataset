<template>
  <div class="block">
    <div class="list">
      <div></div>
      <div>Project name</div>
      <div></div>
      <div>Project description</div>
    </div>
    <div v-for="item in list" :key="item.id">
      <button class="element" type="submit" onclick="document.location='/work'">
        <div class="e_d">{{ item.title }}</div>
        <div class="e_d">{{ item.description }}</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectList",
  props: ["list"],
};
</script>

<style scoped>
.block {
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
}
.element {
  padding-left: 25px;
  padding-top: 24px;
  padding-bottom: 24px;
  display: grid;
  grid-template-columns: 577px auto;
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

.e_d {
  text-align: left;
  padding-right: 25px;
}

.list {
  display: grid;
  padding-top: 12px;
  grid-template-columns: 36px 90px 477px auto;
  margin-top: 38px;
  margin-left: 20px;
  width: 1500px;
  padding-bottom: 12px;
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

@media screen and (max-width: 1520px) {
  .element {
    width: 1201.5px;
  }
  .list {
    width: 1200px;
  }
}

@media screen and (max-width: 1260px) {
  .element {
    width: 1001.5px;
  }
  .list {
    width: 1000px;
  }
}

@media screen and (max-width: 1060px) {
  .element {
    width: 901.5px;
  }
  .list {
    width: 900px;
  }
}
</style>
