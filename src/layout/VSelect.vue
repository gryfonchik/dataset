<template>
  <div class="VSelect">
    <div class="title" @click="areOptionVisible = !areOptionVisible">
      <p class="p_title">{{ selected }}</p>
      <img class="v_img" src="../assets/arrow.svg" />
    </div>
    <div
      class="options"
      v-if="areOptionVisible"
      @click="areOptionVisible = !areOptionVisible"
    >
      <p
        class="element"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VSelect",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      areOptionVisible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
    },
  },
};
</script>

<style scoped>
.VSelect {
  margin: 0;
  cursor: pointer;
  text-align: center;
  user-select: none;
  width: 260px;
  background: #ffffff;
  border: 0.5px solid #000000;
  border-radius: 20px;
}
.v_img {
  margin-top: 16px;
}
.title {
  display: grid;
  grid-template-columns: 210px 50px;
  background: #ecd4ff;
  border-radius: 20px;
  width: 260px;
  height: 60px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
}
.p_title {
  background: transparent;
}

p {
  background: #ffffff;
  border-radius: 20px;
  height: 48px;
  padding-top: 18px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
}

.element:hover {
  background: #d5d3d3;
}
</style>
