<template>
  <v-dialog v-model="successDialog" max-width="500px">
    <v-card>
      <v-alert v-model="successDialog" :value="true" type="success" v-if="getSuccessMessage" dismissible>
        {{ getSuccessMessage }}
      </v-alert>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getSuccessMessage'
    ]),

    successDialog: {
      get () {
        return this.$store.getters.getSuccessDialog
      },
      set (value) {
        this.$store.dispatch('setSuccessDialog', value)
      }
    }
  }
}
</script>
