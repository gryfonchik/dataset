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
          <input class="m_search" placeholder="Название проекта" />
          <button type="submit" class="create">Создать</button>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.create {
  position: absolute;
  top: 410px;
  left: 906px;
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
.m_search {
  position: absolute;
  width: 500px;
  height: 40px;
  left: 492.7px;
  top: 350px;
  padding-left: 44px;
  padding-right: 5px;
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
  width: 680px;
  height: 200px;
  border: 1px solid #000000;
  border-radius: 20px;
}

.btn-close {
  position: absolute;
  top: 304px;
  left: 1056px;
  border: none;
  cursor: pointer;
  background: transparent;
}
</style>
