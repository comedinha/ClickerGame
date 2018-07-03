<template>
  <v-dialog v-model="saveWarning" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('scene.creator.dialog.save.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-alert :value="true" type="info">
          {{ $ml.get('scene.creator.dialog.save.message') }}
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="saveWarning = !saveWarning">{{ $ml.get('scene.creator.dialog.save.cancel') }}</v-btn>
        <v-btn color="error" to="/lobby">{{ $ml.get('scene.creator.dialog.save.close') }}</v-btn>
        <v-btn color="primary" @click="saveGame">{{ $ml.get('scene.creator.dialog.save.save') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    saveWarning: {
      get () {
        return this.$store.getters.getSaveWarning
      },
      set (value) {
        this.$store.dispatch('setSaveWarning', value)
      }
    }
  },
  methods: {
    saveGame () {
      this.$store.dispatch('saveScene')
    }
  }
}
</script>
