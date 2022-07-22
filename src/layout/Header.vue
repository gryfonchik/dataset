<template>
  <div class="nav">
    <div class="nav_name">название проекта</div>
    <div class="nav_name">
      <router-link class="nav_link" to="/">проекты</router-link>
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
  background-color: #2d1457;
  overflow: hidden;
  padding: 12px;
}
.nav_picker {
  float: right;
  font-family: "Syne";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-right: 2%;
  margin-top: 0.4%;
  text-transform: uppercase;
  color: #ffffff;
}

.nav_name {
  float: left;
  font-family: "Syne";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  margin-left: 2%;
  margin-top: 0.4%;
  text-transform: uppercase;
  color: #ffffff;
}
.nav_link {
  color: #ffffff;
  text-decoration: none;
}
</style>
