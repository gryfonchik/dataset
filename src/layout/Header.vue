<template>
  <div class="nav">
    <div class="nav_name"><router-link class="nav_link" to="/">название проекта</router-link></div>
    <div class="nav_name">
      <router-link class="nav_link" to="project">проекты</router-link>
    </div>
    <!--<div class="nav_logout">
      <router-link class="nav_link" to="/">вход</router-link>
    </div>-->
    <select>
    <option></option>
    </select>
  </div>
</template>

<script>

export default {
  name: "Header",
};
</script>

<style scoped>
.nav {
  background-color: #49006b;
  overflow: hidden;
  padding-top: 22px;
  padding-block-end: 22px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
  font-family: "Syne", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ffffff;
  user-select: none;
}
.nav_logout {
  float: right;
  margin-right: 56px;
}


.nav_name {
  float: left;
  margin-left: 20px;
  margin-right: 20px;
}
.nav_link {
  color: #ffffff;
  text-decoration: none;
}
.nav_link:hover {
  color: #cacfda;
}
</style>
