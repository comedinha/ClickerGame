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
                <v-text-field :disabled="itemGrid.useItemImage" v-model="itemGrid.image" :label="$ml.get('scene.creator.dialog.itemGrid.image.title')" :error-messages="imageErrors" @input="$v.itemGrid.image.$touch()" @blur="$v.itemGrid.image.$touch()" />
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
                  <v-text-field v-model="itemGrid.showWhen" :label="$ml.with('v', itemGrid.showWhen).get('scene.creator.dialog.itemGrid.showWhen.title')" required :error-messages="showWhenErrors" @input="$v.itemGrid.showWhen.$touch()" @blur="$v.itemGrid.showWhen.$touch()" />
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
import { required, url, minValue } from 'vuelidate/lib/validators'

export default {
  validations: {
    itemGrid: {
      image: {
        url
      },
      showWhen: {
        required,
        minValue: minValue(0)
      }
    }
  },
  computed: {
    imageErrors () {
      const errors = []
      if (!this.$v.addItem.image.$dirty) return errors
      !this.$v.addItem.image.url && errors.push('URL')
      return errors
    },

    showWhenErrors () {
      const errors = []
      if (!this.$v.itemGrid.showWhen.$dirty) return errors
      !this.$v.itemGrid.showWhen.required && errors.push('Requerido')
      !this.$v.itemGrid.showWhen.minValue && errors.push(this.$ml.with('c', this.$v.itemGrid.showWhen.$params.minValue.min).get('auth.signup.name.minLength'))
      return errors
    },

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
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('itemGrid')
      }
    }
  }
}
</script>
