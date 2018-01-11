<template>
  <div class="header">
    <router-link to="/Home"> 链接到Home页面 </router-link>
    <router-link to="/Search">链接到search页面</router-link>
  </div>
</template>

<script>
export default {
  name: 'appHeader',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
