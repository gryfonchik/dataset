<template>
  <div class="content">
    <p class="text">
      что то о проекте <br />
      тип что можно сделать. что нельзя и прочая х*рня
    </p>
    <img class="home_image" src="../assets/main.png" />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style>

.content {
  display: flex;
  flex-direction: unset;
  margin: 1%;
  flex-wrap: wrap;
}

.home_image {
  display: flex;
  width: 45%;
  position: absolute;
  top: 10%;
  right: 10%;
  z-index: -2;
}

.text {
  position: absolute;
  width: 30%;
  height: 40%;
  left: 10%;
  top: 30%;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  text-transform: uppercase;

  color: #FFFFFF;
}
</style>