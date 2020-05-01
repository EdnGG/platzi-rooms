<template>
  <div id="app">
    <button @click.prevent="toggleHandler">Toggle Modal</button>
    <!-- <modal-create-element :show="show">
      <h1>Hello from ModalCreateElement</h1>
      <p>This is a modal</p> -->
    <modal-jsx :show="show">
      <h1>Hello from ModalCreateElement</h1>
      <p>This is a modal</p>
    </modal-jsx>
    <!-- </modal-create-element> -->
  </div>
</template>

<script>
// import ModalCreateElement from "./ModalCreateElement.vue";
import ModalJsx from "./ModalJsx";

export default {
  name: "App",
  data() {
    return {
      show: false,
    };
  },
  components: {
    // ModalCreateElement,
    ModalJsx,
  },
  methods: {
    toggleHandler() {
      this.show = !this.show;
    },
  },
};
</script>
<style>
body {
  background: #cecece;
}
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background: #fff;
  padding: 15px;
}
.modal > .message {
  margin: 0;
  margin-bottom: 10px;
}
</style>
