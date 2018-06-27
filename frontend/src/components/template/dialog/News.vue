<template>
  <v-dialog v-model="newsDialog" max-width="700px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ $ml.get('template.dialog.news.title') }}</span>
        <v-spacer />
        <v-btn v-if="getAdmin" @click="newsAddDialog = !newsAddDialog">{{ $ml.get('template.dialog.news.adminButton') }}</v-btn>
      </v-card-title>
      <v-progress-linear v-if="getNewsLoading" color="blue" indeterminate />
      <v-container fluid grid-list-md>
        <v-data-iterator :items="getNewsContent.items" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" row wrap>
          <v-flex slot="item" slot-scope="props" md12>
            <v-card>
              <v-toolbar dense flat>
                <v-toolbar-title>{{ props.item.title }}</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <span v-html="props.item.content" />
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex slot="pageText" slot-scope="props">
            {{ $ml.with('a', pagination.page).with('t', Math.ceil(props.itemsLength / pagination.rowsPerPage)).get('lobby.dialog.approval.pagination') }}
          </v-flex>
          <v-flex slot="no-data">
            <v-alert :value="getNewsLoading" color="info" icon="sync">
              {{ $ml.get('lobby.lobby.loading') }}
            </v-alert>
            <v-alert :value="!getNewsLoading" color="error" icon="warning">
              {{ $ml.get('error.noData') }}
            </v-alert>
          </v-flex>
        </v-data-iterator>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="newsDialog = !newsDialog">{{ $ml.get('template.dialog.news.close') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      rowsPerPageItems: [1],
      pagination: {}
    }
  },
  computed: {
    ...mapGetters([
      'getAdmin',
      'getNewsContent',
      'getNewsLoading'
    ]),

    newsDialog: {
      get () {
        return this.$store.getters.getNewsDialog
      },
      set (value) {
        this.$store.dispatch('setNewsDialog', value)
      }
    },

    newsAddDialog: {
      get () {
        return this.$store.getters.getNewsAddDialog
      },
      set (value) {
        this.$store.dispatch('setNewsAddDialog', value)
      }
    }
  }
}
</script>
