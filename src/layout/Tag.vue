<template>
  <div class="block">
    <div class="left">
      <input class="text" placeholder="Label name" />
      <div>
        <VSelect
          :options="options"
          @select="optionSelect"
          :selected="selected"
        />
        <img :src="l_selected" />
      </div>
    </div>
    <div class="right">
      <button class="basket">
        <img class="c-image" src="../assets/basket.svg" />
      </button>
      <button class="accept">
        <img class="c-image" src="../assets/accept.svg" />
      </button>
    </div>
  </div>
</template>

<script>
import VSelect from "./VSelect.vue";
export default {
  name: "Tag",
  components: {
    VSelect,
  },
  data() {
    return {
      options: [
        { name: "Polygon", value: 1 },
        { name: "Rectangle", value: 2 },
        { name: "Classification ", value: 3 },
      ],
      selected: "Polygon",
    };
  },
  methods: {
    optionSelect(option) {
      this.selected = option.name;
    },
  },
};
</script>

<style scoped>
.block {
  display: grid;
  grid-template-columns: 706px auto;
  width: 1496px;
  height: 82px;
  background: #ffffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-top: 42px;
  margin-left: 20px;
  padding-top: 22px;
}
.text {
  background: #ecd5ff;
  border-radius: 20px;
  width: 230px;
  height: 20px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  margin-left: 90px;
  padding: 20px;
}

input.text::placeholder {
  color: #000000;
}

input:focus::-webkit-input-placeholder {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.left {
  display: grid;
  gap: 84px;
  grid-template-columns: 360px 350px;
}

.right {
  margin-left: 584px;
  height: 60px;
  display: grid;
  gap: 46px;
  grid-template-columns: 30px 40px;
}
.accept {
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  user-select: none;
}
.basket {
  padding: 0;
  background: transparent;
  border: 0;
  cursor: pointer;
  user-select: none;
}
</style>
