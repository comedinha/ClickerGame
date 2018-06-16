<template>
  <v-toolbar dense flat>
    <v-btn small @click="backToLobby">Voltar ao Lobby</v-btn>
    <v-btn small>Informações</v-btn>
    <v-spacer />
    <v-btn small v-if="getUserVision && editMode" @click="editMode = !editMode">Visão do Usuário</v-btn>
    <v-btn small v-if="getUserVision && !editMode" @click="editMode = !editMode">Visão do Criador</v-btn>
    <v-btn small v-if="editMode">Cenário</v-btn>
    <v-btn small v-if="editMode">Log</v-btn>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getUserVision'
    ]),

    editMode: {
      get () {
        return this.$store.getters.getEditMode
      },
      set (value) {
        this.$store.dispatch('setEditMode', value)
      }
    }
  },
  methods: {
    backToLobby () {
      this.$store.dispatch('backToLobby').then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>
