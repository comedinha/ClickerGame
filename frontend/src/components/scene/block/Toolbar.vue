<template>
  <v-toolbar dense flat>
    <v-btn small @click="backToLobby">Voltar ao Lobby</v-btn>
    <v-btn small>Informações</v-btn>
    <v-spacer />
    <v-btn small v-if="userVision && editMode" @click="editMode = !editMode">Visão do Usuário</v-btn>
    <v-btn small v-if="userVision && !editMode" @click="editMode = !editMode">Visão do Criador</v-btn>
    <v-btn small v-if="editMode">Cenário</v-btn>
    <v-btn small v-if="editMode">Log</v-btn>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'userVision'
    ]),
    editMode: {
      get () {
        return this.$store.state.scene.editMode
      },
      set (value) {
        this.$store.dispatch('updateEditMode', value)
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
