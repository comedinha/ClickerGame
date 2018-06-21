<template>
  <v-dialog max-width="500px">
    <v-card>
      <vue-ckeditor v-model="content" :config="config" />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      content: '',
      config: {
        toolbar: [
          [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript' ]
        ]
      }
    }
  }
}
</script>
