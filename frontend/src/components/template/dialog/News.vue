<template>
  <v-dialog v-model="newsFlag" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ $ml.get('template.dialog.news.title') }}</span>
        <v-spacer />
        <v-btn v-if="admin">{{ $ml.get('template.dialog.news.adminButton') }}</v-btn>
      </v-card-title>
      <v-alert :value="true" type="error" v-if="!message">
        {{ error }}
      </v-alert>
      {{ message || '' }}
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['admin', 'news', 'update'],
  data () {
    return {
      message: '',
      error: this.$ml.get('template.dialog.news.noNews')
    }
  },
  computed: {
    newsFlag: {
      get () {
        return this.news
      },
      set (val) {
        this.$emit('updateNews', val)
      }
    },
    updateFlag: {
      get () {
        return this.update
      },
      set (val) {
        this.$emit('updateUpdate', val)
      }
    }
  }
}
</script>
