<template>
  <div class="grid">
    <div class="sort">
      <div class="mark">
        <button class="c_button">
          <span class="c-span">Label</span>
          <img class="c-image" src="../assets/filter.svg" />
        </button>
        <button>Labeled</button>
        <button>Unlabeled</button>
      </div>
      <div class="mark">
        <button class="c_button">
          <span class="c-span">Dataset</span>
          <img class="c-image" src="../assets/filter.svg" />
        </button>
        <button>Dataset1</button>
        <button>Dataset1</button>
        <button>Dataset1</button>
        <button>Dataset1</button>
      </div>
    </div>
    <div class="list">
      <div class="head">
        <div >Data row ID</div>
        <div>Dataset</div>
        <div>Open issues</div>
      </div>
      <div class="element">
        <div>ID</div>
        <div>Label name</div>
        <div>No</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataRows",
};
</script>

<style scoped>
.sort {
  margin-bottom: 20px;
}
.list {
  margin-bottom: 20px;
}
.grid {
  display: grid;
  gap: 68px;
  grid-template-columns: 280px auto;
}
.c-image {
  height: 30px;
  width: 30px;
  float: right;
  margin-right: 36px;
}
.c-span {
  float: left;
}
.head {
  display: grid;
  grid-template-columns: 200px auto 200px;
  background: #ecd4ff;
  border: 0.5px solid #000000;
  border-radius: 10px 10px 0px 0px;
  width: 1074px;
  height: 34px;
  float: right;
  margin-right: 20px;
  margin-top: 38px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  padding-top: 34px;
  text-align: center;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
}
.text {
  margin-left: 52px;
}

.e_text {
  margin-left: 68px;
}
.element {
  display: grid;
  grid-template-columns: 200px auto 200px ;
  width: 1074px;
  background: #ffffff;
  border: 0.5px solid #000000;
  border-radius: 0px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  padding-top: 26px;
  padding-bottom: 26px;
  float: right;
  margin-right: 20px;
  text-align: center;
}
.mark {
  display: grid;
  grid-template-rows: 60px 60px 60px;
  margin-left: 20px;
  margin-top: 38px;
  width: 260px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 20px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
}

button {
  height: 60px;
  border: 0;
  border-radius: 20px;
  background: transparent;
  user-select: none;
  cursor: pointer;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: left;
  padding-left: 42px;
}

button:hover {
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
}

button:focus-visible {
  outline: transparent;
  box-shadow: 0 4px 4px #000000;
}

button:active {
  box-shadow: 0 4px 4px #000000;
}
.c_button {
  background: #ecd4ff;
  border: 0.5px solid #000000;
  height: 60px;
  padding-top: 10px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
}

@media screen and (max-width: 1440px){
  .element{
    width: 900px;
  }
  .head {
    width: 900px;
  }
}

@media screen and (max-width: 1260px){
  .element{
    width: 700px;
  }
  .head {
    width: 700px;
  }
}

@media screen and (max-width: 1060px){
  .element{
    width: 580px;
  }
  .head {
    width: 580px;
  }
}
</style>
