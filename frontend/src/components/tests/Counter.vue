<template>
  <div>
    Value: {{ count }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <div>
      <div>Recent History (last 5 entries): {{ recentHistory }}</div>
    </div>
  </div>
</template>

<script>
import auth from '../../services/auth'
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  computed: mapGetters([
    'count',
    'recentHistory'
  ]),
  route: {
    canActivate () {
      return auth.user.authenticated
    }
  }
}
</script>
