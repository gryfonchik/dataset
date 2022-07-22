<template>
<Header />
  <div class="content">
    <p class="text">
      что то о проекте <br />
      тип что можно сделать. что нельзя и прочая х*рня
    </p>
    <img class="home_image" src="../assets/main.png" />
  </div>
</template>

<script>
import Header from '../layout/Header.vue'
export default {
  name: 'HomePage',
  components: {
    Header
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.content {
  display: flex;
  flex-direction: unset;
  margin: 1%;
  flex-wrap: wrap;
}

.home_image {
  display: flex;
  width: 500px;
  position: absolute;
  top: 20%;
  right: 10%;
  z-index: -2;
}

.text {
  position: absolute;
  width: 30%;
  height: 40%;
  left: 10%;
  top: 30%;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  text-transform: uppercase;

  color: #FFFFFF;
}
</style>