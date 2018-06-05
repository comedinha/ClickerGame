<template>
  <v-flex d-flex xs12 sm12 md4>
    <v-card fluid>
      <v-toolbar dense flat>
        <v-toolbar-title>Jogos que você jogou</v-toolbar-title>
      </v-toolbar>
      <v-card-actions>
        <v-text-field v-model="allGames.search" append-icon="search" label="Buscar" single-line />
      </v-card-actions>
      <v-container fluid grid-list-md>
        <v-data-iterator :items="allGames.items" :search="allGames.search" :rows-per-page-items="allGames.rowsPerPageItems" :pagination.sync="allGames.pagination" content-tag="v-layout" row wrap>
          <v-flex slot="item" slot-scope="props" md6>
            <v-card>
              <v-card-media height="100px">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline black--text">{{props.item.name}}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-actions>
                <v-spacer />
                <v-btn>Jogar</v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-data-iterator>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['allGames'],
  data () {
    return {
    }
  }
}
</script>
