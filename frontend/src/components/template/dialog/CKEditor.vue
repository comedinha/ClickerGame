<template>
  <v-card>
    <vue-ckeditor v-model="content" :config="config" />
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      content: '',
      config: {
        toolbar: [
          [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript' ]
        ],
        height: 300
      }
    }
  }
}
</script>
