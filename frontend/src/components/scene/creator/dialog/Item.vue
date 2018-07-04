<template>
  <v-dialog v-model="addItemDialog" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('scene.creator.dialog.item.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex md5>
            <v-card-media v-if="addItem.image" :src="addItem.image" height="250px" contain />
            <v-card-text>
              <v-card-actions>
                <v-text-field v-model="addItem.image" :label="$ml.get('scene.creator.dialog.item.image.title')" :error-messages="imageErrors" @input="$v.addItem.image.$touch()" @blur="$v.addItem.image.$touch()" />
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
                  <v-text-field v-model="addItem.title" :label="$ml.get('scene.creator.dialog.item.itemTitle.title')" required :error-messages="titleErrors" @input="$v.addItem.title.$touch()" @blur="$v.addItem.title.$touch()" />
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
                    <v-text-field v-model="addItem.countPerSecond" :label="$ml.get('scene.creator.dialog.item.countPerSecond.title')" required :error-messages="countPerSecondErrors" @input="$v.addItem.countPerSecond.$touch()" @blur="$v.addItem.countPerSecond.$touch()" />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.item.countPerSecond.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                  <v-card-actions>
                    <v-select :items="getCoins" item-text="name" item-value="ref" v-model="addItem.coin" :label="$ml.get('scene.creator.dialog.item.coin.title')" required :error-messages="coinErrors" @input="$v.addItem.coin.$touch()" @blur="$v.addItem.coin.$touch()" />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.item.coin.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                </v-card-actions>
                <v-card-actions>
                  <v-card-actions>
                    <v-text-field v-model="addItem.startCount" :label="$ml.get('scene.creator.dialog.item.startCount.title')" required :error-messages="startCountErrors" @input="$v.addItem.startCount.$touch()" @blur="$v.addItem.startCount.$touch()" />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.item.startCount.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                  <v-card-actions>
                    <v-text-field v-model="addItem.basePrice" :label="$ml.get('scene.creator.dialog.item.basePrice.title')" required :error-messages="basePriceErrors" @input="$v.addItem.basePrice.$touch()" @blur="$v.addItem.basePrice.$touch()" />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.item.basePrice.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="addItem.formula" :label="$ml.get('scene.creator.dialog.item.formula.title')" required :error-messages="formulaErrors" @input="$v.addItem.formula.$touch()" @blur="$v.addItem.formula.$touch()" />
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
import { required, url, maxLength, minValue } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
import * as math from 'mathjs'

export default {
  validations: {
    addItem: {
      image: {
        url
      },
      title: {
        required,
        maxLength: maxLength(16)
      },
      countPerSecond: {
        required,
        minValue: minValue(1)
      },
      coin: {
        required
      },
      startCount: {
        required,
        minValue: minValue(0)
      },
      basePrice: {
        required,
        minValue: minValue(0)
      },
      formula: {
        required
      }
    }
  },
  computed: {
    imageErrors () {
      const errors = []
      if (!this.$v.addItem.image.$dirty) return errors
      !this.$v.addItem.image.url && errors.push(this.$ml.get('scene.creator.dialog.item.image.urlError'))
      return errors
    },

    titleErrors () {
      const errors = []
      if (!this.$v.addItem.title.$dirty) return errors
      !this.$v.addItem.title.required && errors.push(this.$ml.get('scene.creator.dialog.item.required'))
      !this.$v.addItem.title.maxLength && errors.push(this.$ml.with('v', this.$v.addItem.title.$params.maxLength.max).get('scene.creator.dialog.item.itemTitle.maxLength'))
      return errors
    },

    countPerSecondErrors () {
      const errors = []
      if (!this.$v.addItem.countPerSecond.$dirty) return errors
      !this.$v.addItem.countPerSecond.required && errors.push(this.$ml.get('scene.creator.dialog.item.required'))
      !this.$v.addItem.countPerSecond.minValue && errors.push(this.$ml.with('c', this.$v.addItem.countPerSecond.$params.minValue.min).get('scene.creator.dialog.item.countPerSecond.minValue'))
      return errors
    },

    coinErrors () {
      const errors = []
      if (!this.$v.addItem.coin.$dirty) return errors
      !this.$v.addItem.coin.required && errors.push(this.$ml.get('scene.creator.dialog.item.required'))
      return errors
    },

    startCountErrors () {
      const errors = []
      if (!this.$v.addItem.startCount.$dirty) return errors
      !this.$v.addItem.startCount.required && errors.push(this.$ml.get('scene.creator.dialog.item.required'))
      !this.$v.addItem.startCount.minValue && errors.push(this.$ml.with('c', this.$v.addItem.startCount.$params.minValue.min).get('scene.creator.dialog.item.startCount.minValue'))
      return errors
    },

    basePriceErrors () {
      const errors = []
      if (!this.$v.addItem.basePrice.$dirty) return errors
      !this.$v.addItem.basePrice.required && errors.push(this.$ml.get('scene.creator.dialog.item.required'))
      !this.$v.addItem.basePrice.minValue && errors.push(this.$ml.with('c', this.$v.addItem.basePrice.$params.minValue.min).get('scene.creator.dialog.item.basePrice.minValue'))
      return errors
    },

    formulaErrors () {
      const errors = []
      if (!this.$v.addItem.formula.$dirty) return errors
      !this.$v.addItem.formula.required && errors.push(this.$ml.get('scene.creator.dialog.item.required'))
      !this.requiredFormula() && errors.push(this.$ml.get('scene.creator.dialog.item.formula.validFormula'))
      return errors
    },

    ...mapGetters([
      'getCoins'
    ]),

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
    requiredFormula () {
      if (this.addItem.formula) {
        let formula = this.addItem.formula
          .replace(/{tb}/g, 0)
          .replace(/{bp}/g, 0)
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

    addItemTab () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('addItemTab')
      }
    }
  }
}
</script>
