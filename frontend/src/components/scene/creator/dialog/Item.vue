<template>
  <v-dialog v-model="addItemDialog" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('scene.creator.dialog.item.title') }}</v-toolbar-title>
        <v-spacer />
        <v-btn disabled>{{ $ml.get('scene.creator.dialog.item.advanced') }}</v-btn>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex md5>
            <v-card-media v-if="addItem.image" :src="addItem.image" height="250px" contain />
            <v-card-text>
              <v-card-actions>
                <v-text-field v-model="addItem.image" :label="$ml.get('scene.creator.dialog.item.image.title')" />
                <v-tooltip bottom>
                  <v-icon slot="activator">help</v-icon>
                  <span>{{ $ml.get('scene.creator.dialog.item.image.help') }}</span>
                </v-tooltip>
              </v-card-actions>
            </v-card-text>
          </v-flex>
          <v-flex md7>
            <v-card>
              <v-card-text>
                <v-card-actions>
                  <v-text-field v-model="addItem.title" :label="$ml.get('scene.creator.dialog.item.itemTitle.title')" required />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.item.itemTitle.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="addItem.description" :label="$ml.get('scene.creator.dialog.item.description.title')" multi-line />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.item.description.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-card-actions>
                    <v-text-field v-model="addItem.countPerSecond" :label="$ml.get('scene.creator.dialog.item.countPerSecond.title')" />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.item.countPerSecond.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                  <v-card-actions>
                    <v-text-field v-model="addItem.perSecond" :label="$ml.get('scene.creator.dialog.item.coin.title')" required />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.item.coin.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                </v-card-actions>
                <v-card-actions>
                  <v-card-actions>
                    <v-text-field v-model="addItem.startCount" :label="$ml.get('scene.creator.dialog.item.startCount.title')" />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.item.startCount.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                  <v-card-actions>
                    <v-text-field v-model="addItem.startPrice" :label="$ml.get('scene.creator.dialog.item.startPrice.title')" required />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.item.startPrice.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="addItem.formula" :label="$ml.get('scene.creator.dialog.item.formula.title')" required />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.item.formula.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="addItemDialog = !addItemDialog">{{ $ml.get('scene.creator.dialog.item.close') }}</v-btn>
        <v-btn color="primary" @click="addItemTab">{{ $ml.get('scene.creator.dialog.item.save') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    addItem: {
      get () {
        return this.$store.getters.getAddItem
      },
      set (value) {
        this.$store.dispatch('setAddItem', value)
      }
    },

    addItemDialog: {
      get () {
        return this.$store.getters.getAddItemDialog
      },
      set (value) {
        this.$store.dispatch('setAddItemDialog', value)
      }
    }
  },
  methods: {
    addItemTab () {
      this.$store.dispatch('addItemTab')
    }
  }
}
</script>
