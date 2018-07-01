<template>
  <v-dialog v-model="editConfigDialog" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('scene.creator.dialog.config.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex md5>
            <v-card-media v-if="config.image" :src="config.image" height="250px" contain />
            <v-card-text>
              <v-card-actions>
                <v-text-field v-model="config.image" :label="$ml.get('scene.creator.dialog.config.thumbnail.title')" required />
                <v-tooltip bottom>
                  <v-icon slot="activator">help</v-icon>
                  <span>{{ $ml.get('scene.creator.dialog.config.thumbnail.help') }}</span>
                </v-tooltip>
              </v-card-actions>
            </v-card-text>
          </v-flex>
          <v-flex md7>
            <v-card>
              <v-card-text>
                <v-card-actions>
                  <v-text-field v-model="config.name" :label="$ml.get('scene.creator.dialog.config.name.title')" required />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.config.name.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="config.smallDescription" :label="$ml.get('scene.creator.dialog.config.smallDescription.title')" required />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.config.smallDescription.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="config.completeDescription" :label="$ml.get('scene.creator.dialog.config.completeDescription.title')" multi-line required />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.config.completeDescription.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="editConfigDialog = !editConfigDialog">{{ $ml.get('scene.creator.dialog.config.close') }}</v-btn>
        <v-btn color="primary" @click="saveConfig">{{ $ml.get('scene.creator.dialog.config.save') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    config: {
      get () {
        return this.$store.getters.getConfig
      },
      set (value) {
        this.$store.dispatch('setConfig', value)
      }
    },

    editConfigDialog: {
      get () {
        return this.$store.getters.getEditConfigDialog
      },
      set (value) {
        this.$store.dispatch('setEditConfigDialog', value)
      }
    }
  },
  methods: {
    saveConfig () {
      this.$store.dispatch('saveConfig')
    }
  }
}
</script>
