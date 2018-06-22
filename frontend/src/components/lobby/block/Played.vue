<template>
  <v-flex d-flex xs12 sm12 md4>
    <v-card fluid>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('lobby.block.played.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-card-actions>
        <v-text-field v-model="search" append-icon="search" :label="$ml.get('lobby.block.played.search')" single-line />
      </v-card-actions>
      <v-container fluid grid-list-md>
        <v-data-iterator :items="getAllGames.items" :search="search" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" row wrap>
          <v-flex slot="item" slot-scope="props" md6>
            <v-card>
              <v-toolbar dense flat>
                <v-toolbar-title>{{ props.item.name }}</v-toolbar-title>
              </v-toolbar>
              <v-card-media height="100%" :src="props.item.background">
                <v-card class='white--text' color="transparent" flat tile>
                  <v-card-text class="transprent-text body-2">
                    {{ props.item.description }}
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn small>Editar</v-btn>
                    <v-btn small>Jogar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-card-media>
            </v-card>
          </v-flex>
          <v-flex slot="pageText" slot-scope="props">
            {{ $ml.with('a', pagination.page).with('t', Math.ceil(props.itemsLength / pagination.rowsPerPage)).get('lobby.block.played.pagination') }}
          </v-flex>
        </v-data-iterator>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      search: '',
      rowsPerPageItems: [4],
      pagination: {}
    }
  },
  computed: {
    ...mapGetters([
      'getAllGames'
    ])
  }
}
</script>
