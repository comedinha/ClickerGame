<template>
  <v-dialog v-model="addItemDialog" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>Adicionar Item</v-toolbar-title>
        <v-spacer />
        <v-btn disabled>Avançado</v-btn>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex md5>
            <v-card-media v-if="addItem.image" :src="addItem.image" height="250px" contain />
            <v-card-text>
              <v-card-actions>
                <v-text-field v-model="addItem.image" label="Image" />
                <v-icon>help</v-icon>
              </v-card-actions>
            </v-card-text>
          </v-flex>
          <v-flex md7>
            <v-card>
              <v-card-text>
                <v-card-actions>
                  <v-text-field v-model="addItem.title" label="Title" required />
                  <v-icon>help</v-icon>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="addItem.description" label="Description" multi-line />
                  <v-icon>help</v-icon>
                </v-card-actions>
                <v-card-actions>
                  <v-card-actions>
                    <v-text-field v-model="addItem.startCount" label="Start Count" />
                    <v-icon>help</v-icon>
                  </v-card-actions>
                  <v-card-actions>
                    <v-text-field v-model="addItem.startPrice" label="Start Price" required />
                    <v-icon>help</v-icon>
                  </v-card-actions>
                </v-card-actions>
                <v-card-actions>
                  <v-text-field v-model="addItem.formula" label="Formula" required />
                  <v-icon>help</v-icon>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="addItemDialog = !addItemDialog">Fechar</v-btn>
        <v-btn color="primary" @click="addItemTab">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
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
    addItemTab () {
      this.$store.dispatch('addItemTab')
    }
  }
}
</script>
