<template>
  <v-dialog v-model="saveWarning" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>Salvar Cenário</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-alert :value="true" type="info">
          Você deseja salvar seu cenário?
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="saveWarning = !saveWarning">Cancelar</v-btn>
        <v-btn color="error" to="/lobby">Sair</v-btn>
        <v-btn color="primary" @click="saveGame">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    saveWarning: {
      get () {
        return this.$store.getters.getSaveWarning
      },
      set (value) {
        this.$store.dispatch('setSaveWarning', value)
      }
    }
  },
  methods: {
    saveGame () {
      this.$store.dispatch('saveScene')
    }
  }
}
</script>
