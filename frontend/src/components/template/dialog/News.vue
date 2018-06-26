<template>
  <v-dialog v-model="newsDialog" max-width="700px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ $ml.get('template.dialog.news.title') }}</span>
        <v-spacer />
        <v-btn v-if="getAdmin" @click="newsAddDialog = !newsAddDialog">{{ $ml.get('template.dialog.news.adminButton') }}</v-btn>
      </v-card-title>
      <v-container fluid grid-list-md>
        <v-data-iterator :items="getNewsContent.items" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" row wrap>
          <v-flex slot="item" slot-scope="props" md12>
            <v-card>
              <v-system-bar dense flat>
                <span>{{ props.item.title }}</span>
              </v-system-bar>
              {{ props.item.content }}
            </v-card>
          </v-flex>
          <v-flex slot="pageText" slot-scope="props">
            {{ $ml.with('a', pagination.page).with('t', Math.ceil(props.itemsLength / pagination.rowsPerPage)).get('lobby.dialog.approval.pagination') }}
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
      pagination: {},

      error: this.$ml.get('template.dialog.news.noNews')
    }
  },
  computed: {
    ...mapGetters([
      'getAdmin',
      'getNewsContent'
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
