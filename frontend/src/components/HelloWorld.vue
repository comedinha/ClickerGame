<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>REST service call results</h2>

    <button @click="callRestService()">CALL Spring Boot REST backend service</button>

    <h4>Backend response: {{ response }}</h4>

  </div>
</template>

<script>
import {AXIOS} from './http-common'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'HowTo call REST-Services:',
      response: [],
      errors: []
    }
  },
  methods: {
    // Fetches posts when the component is created.
    callRestService () {
      AXIOS.get(`/message`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.response = response.data
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
