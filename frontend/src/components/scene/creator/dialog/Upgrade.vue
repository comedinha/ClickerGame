<template>
  <v-dialog v-model="addUpgradeDialog" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('scene.creator.dialog.item.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex md5>
            <v-card-media v-if="addUpgrade.image" :src="addUpgrade.image" height="250px" contain />
            <v-card-text>
              <v-card-actions>
                <v-text-field v-model="addUpgrade.image" :label="$ml.get('scene.creator.dialog.item.image.title')" />
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
                  <v-text-field v-model="addUpgrade.title" :label="$ml.get('scene.creator.dialog.item.itemTitle.title')" required />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.item.itemTitle.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="addUpgrade.description" :label="$ml.get('scene.creator.dialog.item.description.title')" multi-line />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.item.description.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-card-actions>
                    <v-text-field v-model="addUpgrade.price" :label="$ml.get('scene.creator.dialog.item.countPerSecond.title')" />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.item.countPerSecond.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                  <v-card-actions>
                    <v-select :items="getCoins" item-text="name" item-value="ref" v-model="addUpgrade.coin" :label="$ml.get('scene.creator.dialog.item.coin.title')" required />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.item.coin.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                </v-card-actions>
                <v-card-actions>
                  <v-card-actions>
                    <v-select :items="roles" item-text="text" item-value="type" v-model="addUpgrade.type" :label="$ml.get('scene.creator.dialog.item.coin.title')" required />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.item.countPerSecond.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                  <v-card-actions v-if="addUpgrade.type === 'item'">
                    <v-select :items="getWorldItems" item-text="text" item-value="item" v-model="addUpgrade.item" :label="$ml.get('scene.creator.dialog.item.coin.title')" required />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.item.coin.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="addUpgrade.formula" :label="$ml.get('scene.creator.dialog.item.formula.title')" required />
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
        <v-btn @click="addUpgradeDialog = !addUpgradeDialog">{{ $ml.get('scene.creator.dialog.item.close') }}</v-btn>
        <v-btn color="primary" @click="addUpgradeTab">{{ $ml.get('scene.creator.dialog.item.save') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      roles: [
        {
          type: 'item',
          text: 'Item'
        },
        {
          type: 'GPC',
          text: 'Gold Per Click'
        },
        {
          type: 'GPS',
          text: 'Gold Per Second'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getCoins',
      'getWorldItems'
    ]),

    addUpgrade: {
      get () {
        return this.$store.getters.getAddUpgrade
      },
      set (value) {
        this.$store.dispatch('addUpgrade', value)
      }
    },

    addUpgradeDialog: {
      get () {
        return this.$store.getters.getAddUpgradeDialog
      },
      set (value) {
        this.$store.dispatch('setAddUpgradeDialog', value)
      }
    }
  },
  methods: {
    addUpgradeTab () {
      this.$store.dispatch('addUpgradeTab')
    }
  }
}
</script>
