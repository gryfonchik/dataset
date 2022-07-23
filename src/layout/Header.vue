<template>
  <div class="nav">
    <div class="nav_name">название проекта</div>
    <div class="nav_name">
      <router-link class="nav_link" to="project">проекты</router-link>
    </div>
    <nav class="nav_picker">
      <router-link class="nav_link" to="/">вход</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.nav {
  background-color: #49006B;
  overflow: hidden;
  padding: 20px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
}
.nav_picker {
  float: right;
  font-family: 'Syne', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-right: 1%;
  margin-left: 1%;
  text-transform: uppercase;
  color: #ffffff;
  user-select:none;
}

.nav_name {
  float: left;
  font-family: 'Syne', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  margin-left: 1%;
  margin-right: 1%;
  text-transform: uppercase;
  color: #ffffff;
  user-select:none;
}
.nav_link {
  color: #ffffff;
  text-decoration: none;
}
</style>
