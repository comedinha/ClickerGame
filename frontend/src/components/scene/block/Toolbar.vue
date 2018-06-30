<template>
  <v-toolbar dense flat>
    <v-btn small @click="backToLobby">Voltar ao Lobby</v-btn>
    <v-btn small>Informações</v-btn>
    <v-spacer />
    <v-btn small v-if="editMode" @click="editMode = !editMode">Visão do Usuário</v-btn>
    <v-btn small v-if="getCreatorVision && !editMode" @click="editMode = !editMode">Visão do Criador</v-btn>
    <v-menu offset-y v-if="editMode">
      <v-btn small slot="activator">Cenário</v-btn>
      <v-list>
        <v-list-tile @click="editConfigDialog = !editConfigDialog">
          <v-list-tile-title>Editar Configurações</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="saveScene">
          <v-list-tile-title>Salvar</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getCreatorVision'
    ]),

    editMode: {
      get () {
        return this.$store.getters.getEditMode
      },
      set (value) {
        this.$store.dispatch('setEditMode', value)
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
    backToLobby () {
      this.$store.dispatch('backLobby').then(() => {
        this.$router.push('/')
      })
    },

    saveScene () {
      this.$store.dispatch('saveScene')
    }
  }
}
</script>
