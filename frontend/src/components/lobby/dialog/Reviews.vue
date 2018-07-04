<template>
  <v-dialog v-model="reviewsDialog" max-width="700px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ $ml.get('template.dialog.news.title') }}</span>
        <v-spacer />
        <v-btn v-if="getSceneDetailInfo.lastGame" @click="reviewsAddDialog = !reviewsAddDialog">{{ $ml.get('template.dialog.news.adminButton') }}</v-btn>
      </v-card-title>
      <v-progress-linear v-if="getNewsLoading" color="blue" indeterminate />
      <v-container fluid grid-list-md>
        <v-data-iterator :items="getNewsContent.items" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" row wrap>
          <v-flex slot="item" slot-scope="props" md12>
            <v-card>
              <v-toolbar dense flat>
                <v-toolbar-title>{{ props.item.name }}</v-toolbar-title>
                <v-spacer />
                <span>{{ props.item.score }}</span>
                <v-btn small icon v-if="getAdmin" @click="deleteReview(props.item)"><v-icon>delete</v-icon></v-btn>
              </v-toolbar>
              <v-card-text>
                <span v-html="props.item.review" />
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex slot="pageText" slot-scope="props">
            {{ $ml.with('a', pagination.page).with('t', Math.ceil(props.itemsLength / pagination.rowsPerPage)).get('lobby.dialog.approval.pagination') }}
          </v-flex>
          <v-flex slot="no-data">
            <v-alert :value="getReviewsLoading" color="info" icon="sync">
              {{ $ml.get('lobby.lobby.loading') }}
            </v-alert>
            <v-alert :value="!getReviewsLoading" color="error" icon="warning">
              {{ $ml.get('error.noData') }}
            </v-alert>
          </v-flex>
        </v-data-iterator>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="reviewsDialog = !reviewsDialog">{{ $ml.get('template.dialog.news.close') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      rowsPerPageItems: [3],
      pagination: {}
    }
  },
  computed: {
    ...mapGetters([
      'getSceneDetailInfo',
      'getAdmin',
      'getReviewsContent',
      'getReviewsLoading'
    ]),

    reviewsDialog: {
      get () {
        return this.$store.getters.getReviewsDialog
      },
      set (value) {
        this.$store.dispatch('setReviewsDialog', value)
      }
    },

    reviewsAddDialog: {
      get () {
        return this.$store.getters.getReviewsAddDialog
      },
      set (value) {
        this.$store.dispatch('setReviewsAddDialog', value)
      }
    }
  },
  methods: {
    deleteReview (review) {
      this.$store.dispatch('deleteReview', review)
    }
  }
}
</script>
