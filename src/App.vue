<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
}

html {
  min-height: 100vh;
  width: 100%;
  overscroll-behavior-y: none;
}
  body {
    display: block;
  background: linear-gradient(180deg, #7D44A9 0%, #230C35 100%) no-repeat;
  
}
</style>
