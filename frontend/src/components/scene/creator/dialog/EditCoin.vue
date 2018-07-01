<template>
  <v-dialog v-model="editCoinDialog" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('scene.creator.dialog.editCoin.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex md12>
            <v-card>
              <v-card-text>
                <v-card-actions>
                  <v-card-actions>
                    <v-text-field v-model="coin.name" :label="$ml.get('scene.creator.dialog.editCoin.name.title')" required />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.editCoin.name.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                  <v-card-actions>
                    <v-text-field v-model="coin.symbol" :label="$ml.get('scene.creator.dialog.editCoin.symbol.title')" required />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.editCoin.symbol.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="editCoinDialog = !editCoinDialog">{{ $ml.get('scene.creator.dialog.editCoin.close') }}</v-btn>
        <v-btn color="primary" @click="saveCoin">{{ $ml.get('scene.creator.dialog.editCoin.save') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    coin: {
      get () {
        return this.$store.getters.getEditCoin
      },
      set (value) {
        this.$store.dispatch('setEditCoin', value)
      }
    },

    editCoinDialog: {
      get () {
        return this.$store.getters.getEditCoinDialog
      },
      set (value) {
        this.$store.dispatch('setEditCoinDialog', value)
      }
    }
  },
  methods: {
    saveCoin () {
      this.$store.dispatch('saveCoin')
    }
  }
}
</script>
