<template>
  <v-flex d-flex xs12 sm4 md2>
    <v-card fluid>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('lobby.block.myScenes.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-data-iterator :items="getMyScanes.items" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" row wrap>
          <v-flex slot="item" slot-scope="props" md12>
            <v-card>
              <v-toolbar dense flat>
                <v-toolbar-title>{{ props.item.name }}</v-toolbar-title>
                <v-spacer />
                <v-btn small icon><v-icon>settings</v-icon></v-btn>
                <v-btn small icon><v-icon>info</v-icon></v-btn>
                <v-btn small icon><v-icon>play_circle_filled</v-icon></v-btn>
              </v-toolbar>
              <v-card-media height="100%" :src="props.item.background">
                <v-card height="105px" class='white--text' color="transparent" flat tile>
                  <v-card-text class="transprent-text body-2">
                    {{ props.item.description }}
                  </v-card-text>
                </v-card>
              </v-card-media>
            </v-card>
          </v-flex>
          <v-flex slot="pageText" slot-scope="props">
            {{ $ml.with('a', pagination.page).with('t', Math.ceil(props.itemsLength / pagination.rowsPerPage)).get('lobby.block.myScenes.pagination') }}
          </v-flex>
        </v-data-iterator>
      </v-container>
      <v-container class="align-end">
        <v-btn block>{{ $ml.get('lobby.block.myScenes.button') }}</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      rowsPerPageItems: [2],
      pagination: {}
    }
  },
  computed: {
    ...mapGetters([
      'getMyScanes'
    ])
  }
}
</script>
