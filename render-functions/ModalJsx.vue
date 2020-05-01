<script>
export default {
  name: "ModalJsx",

  props: {
    show: {
      type: Boolean,
      default: false,
    },
    // message: {
    //   type: String,
    //   required: true,
    // },
  },
  render() {
    return this.show ? (
      <div class="modal">
        <p>{this.$slots.default}</p>
        <button onclick={this.clickCancelHandler}>Cancel</button>
        <button onclick={this.clickOkHandler}>Ok</button>
      </div>
    ) : null;
  },
  methods: {
    clickCancelHandler() {
      console.log("click on cancel");
    },
    clickOkHandler() {
      console.log("click on Ok");
    },
  },
};
</script>
