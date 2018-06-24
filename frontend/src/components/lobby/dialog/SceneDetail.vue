<template>
  <v-dialog v-model="sceneDetailDialog" max-width="500px">
    <v-card>
      {{ getSceneDetailMessage }}
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getSceneDetailMessage'
    ]),

    sceneDetailDialog: {
      get () {
        return this.$store.getters.getSceneDetailDialog
      },
      set (value) {
        this.$store.dispatch('setSceneDetailDialog', value)
      }
    }
  }
}
</script>
