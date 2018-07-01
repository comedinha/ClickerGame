<template>
  <v-dialog v-model="informationGridDialog" max-width="750px">
    <v-card>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('scene.creator.dialog.informationGrid.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex md12>
            <vue-ckeditor v-model="informationGrid.text" :config="config" />
            <v-tooltip bottom>
              <v-icon slot="activator">help</v-icon>
              <span v-html="$ml.get('scene.creator.dialog.informationGrid.help')"/>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="informationGridDialog = !informationGridDialog">{{ $ml.get('scene.creator.dialog.informationGrid.close') }}</v-btn>
        <v-btn color="primary" @click="informationGridUpdate">{{ $ml.get('scene.creator.dialog.informationGrid.save') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import CKEditor from '@/components/template/dialog/CKEditor'

export default {
  data () {
    return {
      config: {
        toolbar: [
          { name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', '-', 'Undo', 'Redo' ] },
          { name: 'styles', items: [ 'Styles', 'Format', 'Font' ] },
          { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
          '/',
          { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
          { name: 'paragraph', items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] }
        ],
        enterMode: 2
      }
    }
  },
  components: {
    CKEditor
  },
  computed: {
    informationGrid: {
      get () {
        return this.$store.getters.getInformationGrid
      },
      set (value) {
        this.$store.dispatch('setInformationGrid', value)
      }
    },

    informationGridDialog: {
      get () {
        return this.$store.getters.getInformationGridDialog
      },
      set (value) {
        this.$store.dispatch('setInformationGridDialog', value)
      }
    }
  },
  methods: {
    informationGridUpdate () {
      this.$store.dispatch('informationGrid')
    }
  }
}
</script>
