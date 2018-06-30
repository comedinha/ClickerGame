<template>
  <v-dialog v-model="editConfigDialog" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>Editar Configurações</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex md5>
            <v-card-media v-if="config.image" :src="config.image" height="250px" contain />
            <v-card-text>
              <v-card-actions>
                <v-text-field v-model="config.image" label="Thumb" required />
                <v-icon>help</v-icon>
              </v-card-actions>
            </v-card-text>
          </v-flex>
          <v-flex md7>
            <v-card>
              <v-card-text>
                <v-card-actions>
                  <v-text-field v-model="config.name" label="Name" required />
                  <v-icon>help</v-icon>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="config.smallDescription" label="Small Description" required />
                  <v-icon>help</v-icon>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="config.completeDescription" label="Description" multi-line required />
                  <v-icon>help</v-icon>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="editConfigDialog = !editConfigDialog">Fechar</v-btn>
        <v-btn color="primary" @click="saveConfig">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
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
      this.$store.dispatch('saveConfig')
    }
  }
}
</script>
