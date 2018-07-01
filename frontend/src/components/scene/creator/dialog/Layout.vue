<template>
  <v-dialog v-model="layoutDialog" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>Editar Layout</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex md6>
            <v-card>
              <v-system-bar>
                <span>Abas</span>
              </v-system-bar>
              <v-card-text>
                <v-card-actions>
                  <v-checkbox label="Posicionar a esquerda" v-model="layout.tab.left" />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.config.name.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-menu>
                    <v-card ripple fab slot="activator" width='20px' :style="{'background-color': layout.tab.backgroundColor.hex}"> ‏‏‎ </v-card>
                    <chrome-picker v-model="layout.tab.backgroundColor" />
                  </v-menu>
                  <v-text-field v-model="layout.tab.backgroundColor.hex" label="Cor de fundo" required />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.config.name.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-menu>
                    <v-card ripple fab slot="activator" width='20px' :style="{'background-color': layout.tab.textColor.hex}"> ‏‏‎ </v-card>
                    <chrome-picker v-model="layout.tab.textColor" />
                  </v-menu>
                  <v-text-field v-model="layout.tab.textColor.hex" label="Cor do Texto" required />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.config.name.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card-text>
            </v-card>
            <v-divider />
            <v-card>
              <v-system-bar>
                <span>Toolbar</span>
              </v-system-bar>
              <v-card-text>
                <v-card-actions>
                  <v-menu>
                    <v-card ripple fab slot="activator" width='20px' :style="{'background-color': layout.toolbar.backgroundColor.hex}"> ‏‏‎ </v-card>
                    <chrome-picker v-model="layout.toolbar.backgroundColor" />
                  </v-menu>
                  <v-text-field v-model="layout.toolbar.backgroundColor.hex" label="Cor de Fundo" required />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.config.smallDescription.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-menu>
                    <v-card ripple fab slot="activator" width='20px' :style="{'background-color': layout.toolbar.textColor.hex}"> ‏‏‎ </v-card>
                    <chrome-picker v-model="layout.toolbar.textColor" />
                  </v-menu>
                  <v-text-field v-model="layout.toolbar.textColor.hex" label="Cor do Texto" required />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.config.smallDescription.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex md6>
            <v-card>
              <v-system-bar>
                <span>Grid</span>
              </v-system-bar>
              <v-card-text>
                <v-card-actions>
                  <v-menu>
                    <v-card ripple fab slot="activator" width='20px' :style="{'background-color': layout.grid.backgroundColor.hex}"> ‏‏‎ </v-card>
                    <chrome-picker v-model="layout.grid.backgroundColor" />
                  </v-menu>
                  <v-text-field v-model="layout.grid.backgroundColor.hex" label="Cor de fundo" required />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.config.smallDescription.help') }}</span>
                  </v-tooltip>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="layout.grid.backgroundImage" label="Imagem de Fundo" required />
                  <v-tooltip bottom>
                    <v-icon slot="activator">help</v-icon>
                    <span>{{ $ml.get('scene.creator.dialog.config.smallDescription.help') }}</span>
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
        <v-btn @click="layoutDialog = !layoutDialog">{{ $ml.get('scene.creator.dialog.config.close') }}</v-btn>
        <v-btn color="primary" @click="saveLayout">{{ $ml.get('scene.creator.dialog.config.save') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { Chrome } from 'vue-color'

export default {
  components: {
    'chrome-picker': Chrome
  },
  computed: {
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
      this.$store.dispatch('saveLayout')
    }
  }
}
</script>
