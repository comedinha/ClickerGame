<template>
  <v-dialog v-model="itemGridDialog" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('scene.creator.dialog.itemGrid.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex md5>
            <v-card-media v-if="itemGrid.image" :src="itemGrid.image" height="250px" contain />
            <v-card-text>
              <v-card-actions>
                <v-text-field :disabled="itemGrid.useItemImage" v-model="itemGrid.image" :label="$ml.get('scene.creator.dialog.itemGrid.image.title')" />
                <v-tooltip bottom>
                  <v-icon slot="activator">help</v-icon>
                  <span>{{ $ml.get('scene.creator.dialog.itemGrid.image.help') }}</span>
                </v-tooltip>
              </v-card-actions>
            </v-card-text>
          </v-flex>
          <v-flex md7>
            <v-card>
              <v-card-text>
                <v-card-actions>
                  <v-checkbox :label="$ml.get('scene.creator.dialog.itemGrid.useItemImage.title')" v-model="itemGrid.useItemImage" @change="setItemGrid" />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.itemGrid.useItemImage.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="itemGrid.showWhen" :label="$ml.with('v', itemGrid.showWhen).get('scene.creator.dialog.itemGrid.showWhen.title')" />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.itemGrid.showWhen.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="itemGridDialog = !itemGridDialog">{{ $ml.get('scene.creator.dialog.itemGrid.close') }}</v-btn>
        <v-btn color="primary" @click="itemGridUpdate">{{ $ml.get('scene.creator.dialog.itemGrid.save') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    itemGrid: {
      get () {
        return this.$store.getters.getItemGrid
      },
      set (value) {
        this.$store.dispatch('setItemGrid', value)
      }
    },

    itemGridDialog: {
      get () {
        return this.$store.getters.getItemGridDialog
      },
      set (value) {
        this.$store.dispatch('setItemGridDialog', value)
      }
    }
  },
  methods: {
    setItemGrid () {
      this.$store.dispatch('setItemGridValue')
    },

    itemGridUpdate () {
      this.$store.dispatch('itemGrid')
    }
  }
}
</script>
