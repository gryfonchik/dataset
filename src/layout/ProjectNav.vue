<template>
  <div class="p_nav">
    <ul class="menu">
      <li><button class="nav" @click="component = 'Review'">Обзор</button></li>
      <li><button class="nav">Dataset</button></li>
      <li><button class="nav">Пометки</button></li>
      <li><button class="nav">Строки данных</button></li>
      <li>
        <button class="nav" @click="component = 'Export'">Экспорт</button>
      </li>
    </ul>
  </div>
  <component :is="component"></component>
</template>

<script>
import Export from "../layout/Export.vue";
import Review from "../layout/Review.vue";

export default {
  name: "ProjectNav",
    components: {
      Export,
      Review
    },
  data () {
    return {
      component: 'Export'
    }
  } 
};
</script>

<style scoped>
.p_nav {
  width: 740px;
  height: 70px;
  background: #ffffff;
  border: 1px solid #7e38c2;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  margin-top: 42px;
  margin-left: 20px;
}
ul {
  list-style: none;
  margin-left: 8px;
  margin-top: 18px;
  padding: 0;
}
.menu li {
  display: inline-block;
  margin-right: 18px;
  margin-left: 18px;
  position: relative;
}
.nav {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  padding: 0;
  background: transparent;
  border: 0px;
  user-select: none;
  cursor: pointer;
}
.nav::after {
  content: "";
  position: absolute;
  top: 30px;
  bottom: 0;
  left: 50%;
  display: block;
  background: none repeat scroll 0 0 transparent;
  height: 4px;
  width: 0;
  background: #870ac1;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
}
.nav:hover::after {
  width: 100%;
  left: 0;
}

.nav:focus::after {
  width: 100%;
  left: 0;
}
</style>
