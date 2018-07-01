<template>
  <v-dialog v-model="layoutDialog" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('scene.creator.dialog.config.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex md6>
            <v-card>
              <v-card-text>
                <v-card-actions>
                  <v-text-field v-model="layout.name" :label="$ml.get('scene.creator.dialog.config.name.title')" required />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.config.name.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="layout.symbol" :label="$ml.get('scene.creator.dialog.config.smallDescription.title')" required />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.config.smallDescription.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="layoutDialog = !layoutDialog">{{ $ml.get('scene.creator.dialog.config.close') }}</v-btn>
        <v-btn color="primary" @click="saveLayout">{{ $ml.get('scene.creator.dialog.config.save') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    layout: {
      get () {
        return this.$store.getters.getLayout
      },
      set (value) {
        this.$store.dispatch('setLayout', value)
      }
    },

    layoutDialog: {
      get () {
        return this.$store.getters.getLayoutDialog
      },
      set (value) {
        this.$store.dispatch('setLayoutDialog', value)
      }
    }
  },
  methods: {
    saveLayout () {
      this.$store.dispatch('saveLayout')
    }
  }
}
</script>
