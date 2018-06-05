<template>
  <v-flex d-flex xs12 sm4 md2>
    <v-card fluid>
      <v-toolbar dense flat>
        <v-toolbar-title>Meus Cenários</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-data-iterator :items="myscanes.items" :rows-per-page-items="myscanes.rowsPerPageItems" :pagination.sync="myscanes.pagination" content-tag="v-layout" row wrap>
          <v-flex slot="item" slot-scope="props" md12>
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
                <v-btn>Editar</v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex slot="pageText" slot-scope="props">
            {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
          </v-flex>
        </v-data-iterator>
      </v-container>
      <v-card-actions>
        <v-btn block>Criar Cenário</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: ['myscanes'],
  data () {
    return {
    }
  }
}
</script>
