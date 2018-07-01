<template>
  <v-dialog v-model="coinsDialog" max-width="750px">
    <v-card fluid>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('scene.creator.dialog.coins.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-container fluid grid-list-md>
        <v-data-table :headers="headers" :items="getCoins" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" class="elevation-1">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.symbol }}</td>
            <td class="justify-center layout px-0">
              <v-btn icon class="mx-0" @click="editCoin(props.item)">
                <v-icon color="teal">edit</v-icon>
              </v-btn>
            </td>
          </template>
          <template slot="pageText" slot-scope="props">
            {{ $ml.with('a', pagination.page).with('t', Math.ceil(props.itemsLength / pagination.rowsPerPage)).get('scene.creator.dialog.coins.pagination') }}
          </template>
          <template slot="no-data">
            <v-alert :value="true" color="error" icon="warning">
              {{ $ml.get('error.noData') }}
            </v-alert>
          </template>
        </v-data-table>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="coinsDialog = !coinsDialog">{{ $ml.get('scene.creator.dialog.coins.close') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      rowsPerPageItems: [6],
      pagination: {},
      headers: [
        { text: this.$ml.get('scene.creator.dialog.coins.name'), value: 'name' },
        { text: this.$ml.get('scene.creator.dialog.coins.symbol'), value: 'symbol' },
        { text: this.$ml.get('scene.creator.dialog.coins.action'), sortable: false }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getCoins'
    ]),

    coinsDialog: {
      get () {
        return this.$store.getters.getCoinsDialog
      },
      set (value) {
        this.$store.dispatch('setCoinsDialog', value)
      }
    }
  },
  methods: {
    editCoin (coin) {
      this.$store.dispatch('editCoin', coin)
    }
  }
}
</script>
