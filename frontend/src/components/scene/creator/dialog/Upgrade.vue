<template>
  <v-dialog v-model="addUpgradeDialog" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('scene.creator.dialog.upgrade.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex md5>
            <v-card-media v-if="addUpgrade.image" :src="addUpgrade.image" height="250px" contain />
            <v-card-text>
              <v-card-actions>
                <v-text-field v-model="addUpgrade.image" :label="$ml.get('scene.creator.dialog.upgrade.image.title')" :error-messages="imageErrors" @input="$v.addUpgrade.image.$touch()" @blur="$v.addUpgrade.image.$touch()" />
                <v-tooltip bottom>
                  <v-icon slot="activator">help</v-icon>
                  <span>{{ $ml.get('scene.creator.dialog.upgrade.image.help') }}</span>
                </v-tooltip>
              </v-card-actions>
            </v-card-text>
          </v-flex>
          <v-flex md7>
            <v-card>
              <v-card-text>
                <v-card-actions>
                  <v-text-field v-model="addUpgrade.title" :label="$ml.get('scene.creator.dialog.upgrade.upgradeTitle.title')" required :error-messages="titleErrors" @input="$v.addUpgrade.title.$touch()" @blur="$v.addUpgrade.title.$touch()" />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.upgrade.upgradeTitle.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="addUpgrade.description" :label="$ml.get('scene.creator.dialog.upgrade.description.title')" multi-line />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.upgrade.description.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-card-actions>
                    <v-text-field v-model="addUpgrade.price" :label="$ml.get('scene.creator.dialog.upgrade.price.title')" required :error-messages="priceErrors" @input="$v.addUpgrade.price.$touch()" @blur="$v.addUpgrade.price.$touch()" />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.upgrade.price.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                  <v-card-actions>
                    <v-select :items="getCoins" item-text="name" item-value="ref" v-model="addUpgrade.coin" :label="$ml.get('scene.creator.dialog.upgrade.coin.title')" required :error-messages="coinErrors" @input="$v.addUpgrade.coin.$touch()" @blur="$v.addUpgrade.coin.$touch()" />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.upgrade.coin.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                </v-card-actions>
                <v-card-actions>
                  <v-card-actions>
                    <v-select :items="roles" item-text="text" item-value="type" v-model="addUpgrade.type" :label="$ml.get('scene.creator.dialog.upgrade.type.title')" required :error-messages="typeErrors" @input="$v.addUpgrade.type.$touch()" @blur="$v.addUpgrade.type.$touch()" />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.upgrade.type.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                  <v-card-actions v-if="addUpgrade.type === 'item'">
                    <v-select :items="getWorldItems" item-text="text" item-value="item" v-model="addUpgrade.item" :label="$ml.get('scene.creator.dialog.upgrade.item.title')" required :error-messages="itemErrors" @input="$v.addUpgrade.item.$touch()" @blur="$v.addUpgrade.item.$touch()" />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.upgrade.item.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="addUpgrade.formula" :label="$ml.get('scene.creator.dialog.upgrade.formula.title')" required :error-messages="formulaErrors" @input="$v.addUpgrade.formula.$touch()" @blur="$v.addUpgrade.formula.$touch()" />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.upgrade.formula.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="addUpgradeDialog = !addUpgradeDialog">{{ $ml.get('scene.creator.dialog.upgrade.close') }}</v-btn>
        <v-btn color="primary" @click="addUpgradeTab">{{ $ml.get('scene.creator.dialog.upgrade.save') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { required, url, maxLength, minValue, requiredIf } from 'vuelidate/lib/validators'
import * as math from 'mathjs'

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      roles: [
        {
          type: 'item',
          text: this.$ml.get('scene.creator.dialog.upgrade.type.item')
        },
        {
          type: 'GPC',
          text: this.$ml.get('scene.creator.dialog.upgrade.type.gpc')
        },
        {
          type: 'GPS',
          text: this.$ml.get('scene.creator.dialog.upgrade.type.gps')
        }
      ]
    }
  },
  validations: {
    addUpgrade: {
      image: {
        url
      },
      title: {
        required,
        maxLength: maxLength(16)
      },
      price: {
        required,
        minValue: minValue(0)
      },
      coin: {
        required
      },
      type: {
        required
      },
      item: {
        requiredIf: requiredIf((addUpgrade) => {
          return addUpgrade.type === 'item'
        })
      },
      formula: {
        required
      }
    }
  },
  computed: {
    imageErrors () {
      const errors = []
      if (!this.$v.addUpgrade.image.$dirty) return errors
      !this.$v.addUpgrade.image.url && errors.push(this.$ml.get('scene.creator.dialog.upgrade.image.urlError'))
      return errors
    },

    titleErrors () {
      const errors = []
      if (!this.$v.addUpgrade.title.$dirty) return errors
      !this.$v.addUpgrade.title.required && errors.push(this.$ml.get('scene.creator.dialog.upgrade.required'))
      !this.$v.addUpgrade.title.maxLength && errors.push(this.$ml.with('v', this.$v.addUpgrade.title.$params.maxLength.max).get('scene.creator.dialog.upgrade.upgradeTitle.maxLength'))
      return errors
    },

    priceErrors () {
      const errors = []
      if (!this.$v.addUpgrade.price.$dirty) return errors
      !this.$v.addUpgrade.price.required && errors.push(this.$ml.get('scene.creator.dialog.upgrade.required'))
      !this.$v.addUpgrade.price.minValue && errors.push(this.$ml.with('v', this.$v.addUpgrade.price.$params.minValue.min).get('scene.creator.dialog.upgrade.price.minValue'))
      return errors
    },

    coinErrors () {
      const errors = []
      if (!this.$v.addUpgrade.coin.$dirty) return errors
      !this.$v.addUpgrade.coin.required && errors.push(this.$ml.get('scene.creator.dialog.upgrade.required'))
      return errors
    },

    typeErrors () {
      const errors = []
      if (!this.$v.addUpgrade.type.$dirty) return errors
      !this.$v.addUpgrade.type.required && errors.push(this.$ml.get('scene.creator.dialog.upgrade.required'))
      return errors
    },

    itemErrors () {
      const errors = []
      if (!this.$v.addUpgrade.item.$dirty) return errors
      !this.$v.addUpgrade.item.requiredIf && errors.push(this.$ml.get('scene.creator.dialog.upgrade.required'))
      return errors
    },

    formulaErrors () {
      const errors = []
      if (!this.$v.addUpgrade.formula.$dirty) return errors
      !this.$v.addUpgrade.formula.required && errors.push(this.$ml.get('scene.creator.dialog.upgrade.required'))
      !this.requiredFormula() && errors.push(this.$ml.get('scene.creator.dialog.upgrade.formula.validFormula'))
      return errors
    },

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
    requiredFormula () {
      if (this.addUpgrade.formula) {
        let formula = this.addUpgrade.formula.replace(/{v}/g, 0)
        let ret = true

        try {
          math.eval(formula)
        } catch (err) {
          ret = false
        }

        return ret
      }
      return false
    },

    addUpgradeTab () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('addUpgradeTab')
      }
    }
  }
}
</script>
