<template>
  <v-dialog v-model="layoutDialog" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('scene.creator.dialog.layout.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex md6>
            <v-card>
              <v-system-bar>
                <span>{{ $ml.get('scene.creator.dialog.layout.tabs') }}</span>
              </v-system-bar>
              <v-card-text>
                <v-card-actions>
                  <v-checkbox :label="$ml.get('scene.creator.dialog.layout.positionLeft.title')" v-model="layout.tab.left" />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.layout.positionLeft.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-menu>
                    <v-card ripple fab slot="activator" width='20px' :style="{'background-color': layout.tab.backgroundColor.hex}"> ‏‏‎ </v-card>
                    <chrome-picker v-model="layout.tab.backgroundColor" />
                  </v-menu>
                  <v-text-field v-model="layout.tab.backgroundColor.hex" :label="$ml.get('scene.creator.dialog.layout.backgroundColor.title')" />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.layout.backgroundColor.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-menu>
                    <v-card ripple fab slot="activator" width='20px' :style="{'background-color': layout.tab.textColor.hex}"> ‏‏‎ </v-card>
                    <chrome-picker v-model="layout.tab.textColor" />
                  </v-menu>
                  <v-text-field v-model="layout.tab.textColor.hex" :label="$ml.get('scene.creator.dialog.layout.textColor.title')" />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.layout.textColor.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-menu>
                    <v-card ripple fab slot="activator" width='20px' :style="{'background-color': layout.tab.btnColor.hex}"> ‏‏‎ </v-card>
                    <chrome-picker v-model="layout.tab.btnColor" />
                  </v-menu>
                  <v-text-field v-model="layout.tab.btnColor.hex" :label="$ml.get('scene.creator.dialog.layout.btnColor.title')" />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.layout.btnColor.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-menu>
                    <v-card ripple fab slot="activator" width='20px' :style="{'background-color': layout.tab.btnTextColor.hex}"> ‏‏‎ </v-card>
                    <chrome-picker v-model="layout.tab.btnTextColor" />
                  </v-menu>
                  <v-text-field v-model="layout.tab.btnTextColor.hex" :label="$ml.get('scene.creator.dialog.layout.btnTextColor.title')" />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.layout.btnTextColor.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md6>
            <v-card>
              <v-system-bar>
                <span>{{ $ml.get('scene.creator.dialog.layout.toolbar') }}</span>
              </v-system-bar>
              <v-card-text>
                <v-card-actions>
                  <v-menu>
                    <v-card ripple fab slot="activator" width='20px' :style="{'background-color': layout.toolbar.backgroundColor.hex}"> ‏‏‎ </v-card>
                    <chrome-picker v-model="layout.toolbar.backgroundColor" />
                  </v-menu>
                  <v-text-field v-model="layout.toolbar.backgroundColor.hex" :label="$ml.get('scene.creator.dialog.layout.backgroundColor.title')" />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.layout.backgroundColor.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-menu>
                    <v-card ripple fab slot="activator" width='20px' :style="{'background-color': layout.toolbar.btnColor.hex}"> ‏‏‎ </v-card>
                    <chrome-picker v-model="layout.toolbar.btnColor" />
                  </v-menu>
                  <v-text-field v-model="layout.toolbar.btnColor.hex" :label="$ml.get('scene.creator.dialog.layout.btnColor.title')" />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.layout.btnColor.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-menu>
                    <v-card ripple fab slot="activator" width='20px' :style="{'background-color': layout.toolbar.btnTextColor.hex}"> ‏‏‎ </v-card>
                    <chrome-picker v-model="layout.toolbar.btnTextColor" />
                  </v-menu>
                  <v-text-field v-model="layout.toolbar.btnTextColor.hex" :label="$ml.get('scene.creator.dialog.layout.btnTextColor.title')" />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.layout.btnTextColor.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card-text>
            </v-card>
            <v-divider />
            <v-card>
              <v-system-bar>
                <span>{{ $ml.get('scene.creator.dialog.layout.grid') }}</span>
              </v-system-bar>
              <v-card-text>
                <v-card-actions>
                  <v-menu>
                    <v-card ripple fab slot="activator" width='20px' :style="{'background-color': layout.grid.backgroundColor.hex}"> ‏‏‎ </v-card>
                    <chrome-picker v-model="layout.grid.backgroundColor" />
                  </v-menu>
                  <v-text-field v-model="layout.grid.backgroundColor.hex" :label="$ml.get('scene.creator.dialog.layout.backgroundColor.title')" />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.layout.backgroundColor.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="layout.grid.backgroundImage" :label="$ml.get('scene.creator.dialog.layout.backgroundImage.title')" :error-messages="imageErrors" @input="$v.layout.grid.backgroundImage.$touch()" @blur="$v.layout.grid.backgroundImage.$touch()" />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.layout.backgroundImage.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-media v-if="layout.grid.backgroundImage" :src="layout.grid.backgroundImage" height="250px" contain />
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="layoutDialog = !layoutDialog">{{ $ml.get('scene.creator.dialog.layout.close') }}</v-btn>
        <v-btn color="primary" @click="saveLayout">{{ $ml.get('scene.creator.dialog.layout.save') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { url } from 'vuelidate/lib/validators'

import { Chrome } from 'vue-color'

export default {
  components: {
    'chrome-picker': Chrome
  },
  validations: {
    layout: {
      grid: {
        backgroundImage: {
          url
        }
      }
    }
  },
  computed: {
    imageErrors () {
      const errors = []
      if (!this.$v.layout.grid.backgroundImage.$dirty) return errors
      !this.$v.layout.grid.backgroundImage.url && errors.push('URL')
      return errors
    },

    layout: {
      get () {
        return this.$store.getters.getEditLayout
      },
      set (value) {
        this.$store.dispatch('setEditLayout', value)
      }
    },

    layoutDialog: {
      get () {
        return this.$store.getters.getLayoutDialog
      },
      set (value) {
        this.$store.dispatch('setLayoutDialog', value)
      }
    }
  },
  methods: {
    saveLayout () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch('saveLayout')
      }
    }
  }
}
</script>
