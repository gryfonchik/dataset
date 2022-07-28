<template>
  <div class="grid">
    <div class="left">
      <div class="block">
        <div class="t_head">
          <span>Labels</span>
        </div>
        <div class="m_list">
          <button class="m_button">
            <img class="m_img" src="../assets/square.svg" />
            <span class="m_name">Label name</span>
          </button>
        </div>
      </div>
      <div class="block">
        <div class="d_head">
          <span>Detected</span>
        </div>
        <div class="m_list">
          <button class="m_button">
            <img class="m_img" src="../assets/square.svg" />
            <span class="m_name">Label name</span>
          </button>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="head">
        <div class="b_class">
          <button class="trans">
            <img class="image" src="../assets/l_arrow.svg" />
          </button>
          <button class="trans">
            <img class="image" src="../assets/r_arrow.svg" />
          </button>
        </div>
        <div class="c_button">
          <button class="l_button">Skip</button>
          <button class="r_button">Submit</button>
        </div>
      </div>
      <div class="list"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MarkPage",
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: auto auto;
  max-width: 1536px;
  margin: auto;
}
.block {
  width: 120px;
  margin-left: 20px;
  margin-top: 20px;
  background: #f5e9ff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.t_head {
  text-align: center;
  padding-top: 26px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}
.d_head {
  text-align: center;
  padding-top: 26px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
}
.m_list {
  padding-top: 10px;
}
.m_button {
  height: 40px;
  width: 96px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  margin-left: 12px;
  background: transparent;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
}
.m_button:hover {
  box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.25);
}
.m_button:focus-visible {
  outline: transparent;
  box-shadow: 0 4px 4px #000000;
}
.m_button:active {
  box-shadow: 0 4px 4px #000000;
}

.m_img {
  width: 20px;
  height: 20px;
}
.m_name {
  margin: 5px;
  float: right;
}
.head {
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto 310px;
}
.list {
  width: 1334px;
  height: 800px;
  max-height: 800px;
  background: #ffffff;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.trans {
  width: 40px;
  height: 40px;
  background: #ffffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-right: 30px;
  cursor: pointer;
}
.trans:hover {
  background: #d5d3d3;
}
.trans:focus-visible {
  outline: transparent;
  box-shadow: 0 4px 4px #000000;
}
.trans:active {
  box-shadow: 0 4px 4px #000000;
}
.image {
  margin-top: 3px;
  width: 30px;
  height: 30px;
}
.b_class {
  margin-left: 500px;
}
.c_button {
  margin-right: 20px;
}
.l_button {
  width: 60px;
  height: 40px;
  background: transparent;
  border: 0;
  cursor: pointer;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
}
.r_button {
  width: 200px;
  height: 40px;
  background: #ffffff;
  border-radius: 20px;
  border: 0;
  cursor: pointer;
  color: #000000;
  font-family: "Roboto", sans-serif;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-left: 30px;
}
.r_button:hover {
  background: #d5d3d3;
}
.r_button:focus-visible {
  outline: transparent;
  box-shadow: 0 4px 4px #000000;
}
.r_button:active {
  box-shadow: 0 4px 4px #000000;
}
.l_button:hover {
  color: #d5d3d3;
}
.l_button:focus-visible {
  color: #000000;
}
.l_button:active {
  color: #000000;
}
</style>
