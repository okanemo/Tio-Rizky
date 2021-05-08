<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: () => ({
    message: "Tio",
  }),
  methods: {
    fetchAPI() {
      axios({
        url: "http://localhost:3000/",
        method: "get",
      }).then(({ data }) => {
        console.log(data);
        this.message = data.message;
      });
    },
  },
  created() {
    this.fetchAPI();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
