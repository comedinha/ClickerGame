<template>
  <v-toolbar dense flat>
    <v-btn small @click="backLobby">Voltar ao Lobby</v-btn>
    <v-btn small>Informações</v-btn>
    <v-spacer />
    <v-btn small v-if="userVision && editMode" @click="editModeFlag = !editModeFlag">Visão do Usuário</v-btn>
    <v-btn small v-if="userVision && !editMode" @click="editModeFlag = !editModeFlag">Visão do Criador</v-btn>
    <v-btn small v-if="editMode">Cenário</v-btn>
    <v-btn small v-if="editMode">Log</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  props: ['saved', 'editMode', 'userVision'],
  data () {
    return {
    }
  },
  computed: {
    editModeFlag: {
      get () {
        return this.editMode
      },
      set (val) {
        this.$emit('updateEditMode', val)
      }
    },
    saveWarningFlag: {
      get () {
        return false
      },
      set (val) {
        this.$emit('updateSaveWarning', val)
      }
    }
  },
  methods: {
    backLobby () {
      if (this.saved) {
        this.$router.push('/')
      } else {
        this.saveWarningFlag = true
      }
    }
  }
}
</script>
