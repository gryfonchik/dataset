<template>
  <Header />
  <form action="" method="post">
    <input name="search" class="search" placeholder="Поиск" type="search" />
    <button type="submit" class="loupe"></button>
  </form>
  <button class="c-button"></button>
</template>

<script>
import Header from "../layout/Header.vue";
export default {
  name: "ProjectPage",
  components: {
    Header,
  },
};
</script>

<style>
.search {
  position: absolute;
  width: 208px;
  height: 40px;
  left: 20px;
  top: 114px;
  padding-left: 2.5%;
  background: #ffffff;
  border: 0.5px solid #000000;
  border-radius: 20px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
}

.loupe {
  height: 30px;
  width: 30px;
  position: absolute;
  top: 119px;
  left: 27px;
  margin: 0;
  padding: 0;
  border: 0;
  background: transparent url("../assets/search.png") no-repeat center top;
  cursor: pointer;
}
.c-button {

  border: 0.5px solid #000000;
  border-radius: 20px;
  background: #ffffff;
  color: #fff;
  cursor: pointer;
  
  box-sizing: border-box;

  position: absolute;
  width: 200px;
  height: 40px;
  left: 258px;
  top: 114px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4)
}

.c-button:hover {
  background: #cacfda;
}

.c-button:focus {
  outline: none;
  box-shadow: 0 4px 4px  #000000;
}
</style>
