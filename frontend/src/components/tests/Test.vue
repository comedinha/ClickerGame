<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>REST service call results</h2>

    <button @click="callRestService()">CALL API</button>

    <h4>Backend response: {{ response }}</h4>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Test REST-API:',
      response: [],
      errors: []
    }
  },
  methods: {
    callRestService () {
      this.$http.get('api/hello')
        .then(
          request => { this.response = request.bodyText },
          e => { this.errors.push(e) }
        )
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
