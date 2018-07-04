<template>
  <v-dialog v-model="buttonGridDialog" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('scene.creator.dialog.buttonGrid.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex md12>
            <v-card-actions>
              <v-menu>
                <v-card ripple fab slot="activator" width='20px' :style="{'background-color': buttonGrid.style.backgroundColor.hex}"> ‏‏‎ </v-card>
                <chrome-picker v-model="buttonGrid.style.backgroundColor" />
              </v-menu>
              <v-text-field v-model="buttonGrid.style.backgroundColor.hex" :label="$ml.get('scene.creator.dialog.buttonGrid.color.title')" />
              <v-tooltip bottom>
                <v-icon slot="activator">help</v-icon>
                <span>{{ $ml.get('scene.creator.dialog.buttonGrid.color.help') }}</span>
              </v-tooltip>
              <v-text-field v-model="buttonGrid.style.borderRadius" :label="$ml.get('scene.creator.dialog.buttonGrid.radius.title')" />
              <v-tooltip bottom>
                <v-icon slot="activator">help</v-icon>
                <span>{{ $ml.get('scene.creator.dialog.buttonGrid.radius.help') }}</span>
              </v-tooltip>
            </v-card-actions>
            <v-card-actions>
              <v-text-field v-model="buttonGrid.clickValue" :label="$ml.get('scene.creator.dialog.buttonGrid.clickValue.title')" required :error-messages="clickValueErrors" @input="$v.buttonGrid.clickValue.$touch()" @blur="$v.buttonGrid.clickValue.$touch()" />
              <v-tooltip bottom>
                <v-icon slot="activator">help</v-icon>
                <span>{{ $ml.get('scene.creator.dialog.buttonGrid.clickValue.help') }}</span>
              </v-tooltip>
              <v-select :items="getCoins" item-text="name" item-value="ref" v-model="buttonGrid.coin" :label="$ml.get('scene.creator.dialog.buttonGrid.coin.title')" required :error-messages="coinErrors" @input="$v.buttonGrid.coin.$touch()" @blur="$v.buttonGrid.coin.$touch()" />
              <v-tooltip bottom>
                <v-icon slot="activator">help</v-icon>
                <span>{{ $ml.get('scene.creator.dialog.buttonGrid.coin.help') }}</span>
              </v-tooltip>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="buttonGridDialog = !buttonGridDialog">{{ $ml.get('scene.creator.dialog.buttonGrid.close') }}</v-btn>
        <v-btn color="primary" @click="buttonGridUpdate">{{ $ml.get('scene.creator.dialog.buttonGrid.save') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
import { Chrome } from 'vue-color'
import { required, minValue } from 'vuelidate/lib/validators'

export default {
  components: {
    'chrome-picker': Chrome
  },
  validations: {
    buttonGrid: {
      clickValue: {
        required,
        minValue: minValue(0)
      },
      coin: {
        required
      }
    }
  },
  computed: {
    clickValueErrors () {
      const errors = []
      if (!this.$v.buttonGrid.clickValue.$dirty) return errors
      !this.$v.buttonGrid.clickValue.required && errors.push('Requerido')
      !this.$v.buttonGrid.clickValue.minValue && errors.push(this.$ml.with('c', this.$v.buttonGrid.clickValue.$params.minValue.min).get('auth.signup.name.minLength'))
      return errors
    },

    coinErrors () {
      const errors = []
      if (!this.$v.buttonGrid.coin.$dirty) return errors
      !this.$v.buttonGrid.coin.required && errors.push('Requerido')
      return errors
    },

    ...mapGetters([
      'getCoins'
    ]),

    buttonGrid: {
      get () {
        return this.$store.getters.getButtonGrid
      },
      set (value) {
        this.$store.dispatch('setButtonGrid', value)
      }
    },

    buttonGridDialog: {
      get () {
        return this.$store.getters.getButtonGridDialog
      },
      set (value) {
        this.$store.dispatch('setButtonGridDialog', value)
      }
    }
  },
  methods: {
    buttonGridUpdate () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('buttonGrid')
      }
    }
  }
}
</script>
