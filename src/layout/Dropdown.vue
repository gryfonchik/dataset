<template>
<div class="one">
    <a class="accord">ФИО ПОЛЬЗОВАТЕЛЯ</a>
      <div class="submenu">ВЫХОД</div>
</div>
</template>

<script>
export default {
  name: "Dropdown"
};
</script>

<style>
.submenu {
  position: absolute;
  z-index: 10;
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
}
.one .submenu {
  display: none;
  background: #b19891;
}
.one .accord:hover .submenu {
  display: block;

}
</style>