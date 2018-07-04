<template>
  <v-dialog v-model="informationGridDialog" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('scene.creator.dialog.informationGrid.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex md12>
            <v-card-actions>
              <v-menu>
                <v-card ripple fab slot="activator" width='20px' :style="{'background-color': informationGrid.style.backgroundColor.hex}"> ‏‏‎ </v-card>
                <chrome-picker v-model="informationGrid.style.backgroundColor" />
              </v-menu>
              <v-text-field v-model="informationGrid.style.backgroundColor.hex" :label="$ml.get('scene.creator.dialog.informationGrid.color.title')" />
              <v-tooltip bottom>
                <v-icon slot="activator">help</v-icon>
                <span>{{ $ml.get('scene.creator.dialog.informationGrid.color.help') }}</span>
              </v-tooltip>
              <v-select :items="getCoins" item-text="name" item-value="ref" v-model="informationGrid.coin" :label="$ml.get('scene.creator.dialog.informationGrid.coin.title')" required :error-messages="coinErrors" @input="$v.informationGrid.coin.$touch()" @blur="$v.informationGrid.coin.$touch()" />
              <v-tooltip bottom>
                <v-icon slot="activator">help</v-icon>
                <span>{{ $ml.get('scene.creator.dialog.informationGrid.coin.help') }}</span>
              </v-tooltip>
            </v-card-actions>
            <vue-ckeditor v-model="informationGrid.text" :config="config" />
            <v-tooltip bottom>
              <v-icon slot="activator">help</v-icon>
              <span v-html="$ml.get('scene.creator.dialog.informationGrid.ckeditor.help')"/>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="informationGridDialog = !informationGridDialog">{{ $ml.get('scene.creator.dialog.informationGrid.close') }}</v-btn>
        <v-btn color="primary" @click="informationGridUpdate">{{ $ml.get('scene.creator.dialog.informationGrid.save') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
import { Chrome } from 'vue-color'

export default {
  data () {
    return {
      config: {
        toolbar: [
          { name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', '-', 'Undo', 'Redo' ] },
          { name: 'styles', items: [ 'Styles', 'Format', 'Font' ] },
          { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
          '/',
          { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
          { name: 'paragraph', items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] }
        ],
        enterMode: 2
      }
    }
  },
  components: {
    'chrome-picker': Chrome
  },
  validations: {
    informationGrid: {
      coin: {
        required
      }
    }
  },
  computed: {
    ...mapGetters([
      'getCoins'
    ]),

    coinErrors () {
      const errors = []
      if (!this.$v.informationGrid.coin.$dirty) return errors
      !this.$v.informationGrid.coin.required && errors.push('Requerido')
      return errors
    },

    informationGrid: {
      get () {
        return this.$store.getters.getInformationGrid
      },
      set (value) {
        this.$store.dispatch('setInformationGrid', value)
      }
    },

    informationGridDialog: {
      get () {
        return this.$store.getters.getInformationGridDialog
      },
      set (value) {
        this.$store.dispatch('setInformationGridDialog', value)
      }
    }
  },
  methods: {
    informationGridUpdate () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('informationGrid')
      }
    }
  }
}
</script>
