const app = Vue.createApp({
  data() {
    return {
      newTask: "",
      addedTask: [],
      showList: true,
    };
  },
  methods: {
    addTask() {
      this.addedTask.push(this.newTask);
      this.newTask = "";
    },
    hideShow() {
      this.showList = !this.showList;
    },
  },
  computed: {
    hideShowButton() {
      return this.showList ? "Hide" : "Show List";
    },
  },
});

app.mount("#assignment");
