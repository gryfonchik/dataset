<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <button
          type="button"
          class="btn-close"
          @click="close"
          aria-label="Close modal"
        >
          <img class="c-image" src="../assets/close.svg" />
        </button>
        <form>
          <VSelect
            :options="options"
            @select="optionSelect"
            :selected="selected"
            class="select"
            name="select"
          />
          <div class="input__wrapper">
            <input
              class="input__file"
              type="file"
              name="file"
              @change="onFileSelected"
              ref="fileInput"
              multiple="true"
            />
            <label class="input__file-button" @click="$refs.fileInput.click()">
              <img class="f_img" src="../assets/cloud.svg" />
              <span class="input__file-button-text">Добавить изображение</span>
            </label>
          </div>
          <button type="submit" class="create">Создать</button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import VSelect from "../layout/VSelect.vue";
export default {
  name: "r_modal",
  components: {
    VSelect,
  },
  data() {
    return {
      selectedFile: null,
      options: [
        { name: "Dataset1", value: 1 },
        { name: "Dataset2", value: 2 },
        { name: "Dataset3", value: 3 },
      ],
      selected: "Dataset",
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    optionSelect(option) {
      this.selected = option.name;
    },
    onFileSelected(event) {
      this.selectedFile=event.target.files[0]
    }
  },
};
</script>

<style scoped>
.input__wrapper {
  width: 100%;
  position: relative;
  margin: 15px 0;
  text-align: center;
}

.input__file {
  position: absolute;
  display: none;
}

.f_img {
  height:40px;
  width: 40px;
  margin-right: 24px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-right: 1px solid #fff;
  margin-left: 80px;
}

.input__file-button-text {
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
}

.input__file-button {
  width: 100%;
  max-width: 500px;
  height: 50px;
  background: #ffffff;
  color: #000000;
  font-size: 1.125rem;
  font-weight: 700;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  border-radius: 20px;
  cursor: pointer;
  border: 0.5px solid #000000;
  margin-left: 88px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
}
.select {
  margin-top: 22px;
  margin-left: 88px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
}

.create {
  margin-top: 34px;
  margin-left: 476px;
  margin-bottom: 37px;
  width: 135px;
  height: 38px;
  background: #7d44a9;
  border: 0.5px solid #000000;
  border-radius: 20px;
  font-family: "Roboto", sans-serif;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
}
.create:hover {
  background: #64318b;
}
.create:focus-visible {
  outline: transparent;
  box-shadow: 0 4px 4px #000000;
}
.create:active {
  box-shadow: 0 4px 4px #000000;
}
.m_name {
  width: 450px;
  height: 40px;
  padding-left: 44px;
  padding-right: 5px;
  margin-left: 93px;
  margin-top: 20px;
  font-family: "Roboto", sans-serif;
  background: #ecd4ff;
  border: 0.5px solid #000000;
  border-radius: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
  align-items: center;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #a76ad7;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 685px;
  border: 1px solid #000000;
  border-radius: 20px;
}

.btn-close {
  width: 50px;
  height: 50px;
  margin-left: 630px;
  margin-top: 4px;
  border: none;
  cursor: pointer;
  padding: 0;
  background: transparent;
}
</style>
