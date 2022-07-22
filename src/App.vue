<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-image: linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%);
}
</style>