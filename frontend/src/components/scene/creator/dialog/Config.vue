<template>
  <v-dialog v-model="editConfigDialog" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('scene.creator.dialog.config.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex md5>
            <v-card-media v-if="config.image" :src="config.image" height="250px" contain />
            <v-card-text>
              <v-card-actions>
                <v-text-field v-model="config.image" :label="$ml.get('scene.creator.dialog.config.thumbnail.title')" required :error-messages="imageErrors" @input="$v.config.image.$touch()" @blur="$v.config.image.$touch()" />
                <v-tooltip bottom>
                  <v-icon slot="activator">help</v-icon>
                  <span>{{ $ml.get('scene.creator.dialog.config.thumbnail.help') }}</span>
                </v-tooltip>
              </v-card-actions>
            </v-card-text>
          </v-flex>
          <v-flex md7>
            <v-card>
              <v-card-text>
                <v-card-actions>
                  <v-text-field v-model="config.name" :label="$ml.get('scene.creator.dialog.config.name.title')" required :error-messages="nameErrors" @input="$v.config.name.$touch()" @blur="$v.config.name.$touch()" />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.config.name.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="config.smallDescription" :label="$ml.get('scene.creator.dialog.config.smallDescription.title')" required :error-messages="smallDescriptionErrors" @input="$v.config.smallDescription.$touch()" @blur="$v.config.smallDescription.$touch()" />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.config.smallDescription.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="config.completeDescription" :label="$ml.get('scene.creator.dialog.config.completeDescription.title')" multi-line required :error-messages="completeDescriptionErrors" @input="$v.config.completeDescription.$touch()" @blur="$v.config.completeDescription.$touch()" />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.config.completeDescription.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="editConfigDialog = !editConfigDialog">{{ $ml.get('scene.creator.dialog.config.close') }}</v-btn>
        <v-btn color="primary" @click="saveConfig">{{ $ml.get('scene.creator.dialog.config.edit') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { required, url, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  validations: {
    config: {
      image: {
        required,
        url
      },
      name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(32)
      },
      smallDescription: {
        required,
        maxLength: maxLength(64)
      },
      completeDescription: {
        required
      }
    }
  },
  computed: {
    imageErrors () {
      const errors = []
      if (!this.$v.config.image.$dirty) return errors
      !this.$v.config.image.required && errors.push(this.$ml.get('scene.creator.dialog.config.required'))
      !this.$v.config.image.url && errors.push(this.$ml.get('scene.creator.dialog.config.thumbnail.urlError'))
      return errors
    },

    nameErrors () {
      const errors = []
      if (!this.$v.config.name.$dirty) return errors
      !this.$v.config.name.required && errors.push(this.$ml.get('scene.creator.dialog.config.required'))
      !this.$v.config.name.minLength && errors.push(this.$ml.with('v', this.$v.config.name.$params.minLength.min).get('scene.creator.dialog.config.name.minLength'))
      !this.$v.config.name.maxLength && errors.push(this.$ml.with('v', this.$v.config.name.$params.maxLength.max).get('scene.creator.dialog.config.name.maxLength'))
      return errors
    },

    smallDescriptionErrors () {
      const errors = []
      if (!this.$v.config.smallDescription.$dirty) return errors
      !this.$v.config.smallDescription.required && errors.push(this.$ml.get('scene.creator.dialog.config.required'))
      !this.$v.config.smallDescription.maxLength && errors.push(this.$ml.with('v', this.$v.config.smallDescription.$params.maxLength.max).get('scene.creator.dialog.config.smallDescription.minLength'))
      return errors
    },

    completeDescriptionErrors () {
      const errors = []
      if (!this.$v.config.completeDescription.$dirty) return errors
      !this.$v.config.completeDescription.required && errors.push(this.$ml.get('scene.creator.dialog.config.required'))
      return errors
    },

    config: {
      get () {
        return this.$store.getters.getConfig
      },
      set (value) {
        this.$store.dispatch('setConfig', value)
      }
    },

    editConfigDialog: {
      get () {
        return this.$store.getters.getEditConfigDialog
      },
      set (value) {
        this.$store.dispatch('setEditConfigDialog', value)
      }
    }
  },
  methods: {
    saveConfig () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('saveConfig')
      }
    }
  }
}
</script>
