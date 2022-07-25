<template>
  <select>  
    <option selected value="0">Pure CSS Select</option>
    <option value="1">Веб</option>
    <option value="2">Не веб</option>
  </select>
</template>

<script>
export default {
  name: "Dataset",
};
</script>

<style scoped>
select {
  width: 260px;
  appearance: none;
  height: 60px;
  background: url(../assets/arrow.svg) no-repeat right 0.8em center / 1.4em,
    #ecd4ff;
  border: 0.5px solid #000000;
  border-radius: 20px;
  text-align: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  border: 0;
  outline: 0;
  cursor: pointer;
}

option {
  color: inherit;
  background-color: #ffffff;
  margin: 0;
}
option:focus {
  outline: none;
}
option::-ms-expand {
  display: none;
}
</style>
