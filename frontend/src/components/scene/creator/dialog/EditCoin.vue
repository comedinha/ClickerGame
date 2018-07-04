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
                    <v-text-field v-model="coin.name" :label="$ml.get('scene.creator.dialog.editCoin.name.title')" required :error-messages="nameErrors" @input="$v.coin.name.$touch()" @blur="$v.coin.name.$touch()" />
                    <v-tooltip bottom>
                      <v-icon slot="activator">help</v-icon>
                      <span>{{ $ml.get('scene.creator.dialog.editCoin.name.help') }}</span>
                    </v-tooltip>
                  </v-card-actions>
                  <v-card-actions>
                    <v-text-field v-model="coin.symbol" :label="$ml.get('scene.creator.dialog.editCoin.symbol.title')" required :error-messages="symbolErrors" @input="$v.coin.symbol.$touch()" @blur="$v.coin.symbol.$touch()" />
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
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
  validations: {
    coin: {
      name: {
        required,
        maxLength: maxLength(12)
      },
      symbol: {
        required,
        maxLength: maxLength(2)
      }
    }
  },
  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.coin.name.$dirty) return errors
      !this.$v.coin.name.required && errors.push(this.$ml.get('scene.creator.dialog.editCoin.required'))
      !this.$v.coin.name.maxLength && errors.push(this.$ml.with('c', this.$v.coin.name.$params.maxLength.max).get('scene.creator.dialog.editCoin.name.maxLength'))
      return errors
    },

    symbolErrors () {
      const errors = []
      if (!this.$v.coin.symbol.$dirty) return errors
      !this.$v.coin.symbol.required && errors.push(this.$ml.get('scene.creator.dialog.editCoin.required'))
      !this.$v.coin.symbol.maxLength && errors.push(this.$ml.with('c', this.$v.coin.symbol.$params.maxLength.max).get('scene.creator.dialog.editCoin.coin.maxLength'))
      return errors
    },

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
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('saveCoin')
      }
    }
  }
}
</script>
