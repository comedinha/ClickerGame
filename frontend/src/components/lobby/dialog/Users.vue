<template>
  <v-dialog v-model="usersDialog" max-width="750px">
    <EditUser />
    <v-card fluid>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('lobby.dialog.users.title') }}</v-toolbar-title>
        <v-spacer />
        <v-text-field v-model="search" append-icon="search" :label="$ml.get('lobby.dialog.users.search')" single-line hide-details />
      </v-toolbar>
      <v-progress-linear v-if="getUsersLoading" color="blue" indeterminate />
      <v-container fluid grid-list-md>
        <v-data-table :headers="headers" :items="getUsers" :search="search" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" class="elevation-1">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.email }}</td>
            <td>{{ $ml.get('game.' + props.item.role) }}</td>
            <td>{{ $ml.get('game.' + props.item.enabled) }}</td>
            <td class="justify-center layout px-0">
              <v-btn icon class="mx-0" @click="editUser(props.item)">
                <v-icon color="teal">edit</v-icon>
              </v-btn>
              <v-btn icon class="mx-0" @click="deleteUser(props.item)">
                <v-icon color="pink">delete</v-icon>
              </v-btn>
            </td>
          </template>
          <template slot="pageText" slot-scope="props">
            {{ $ml.with('a', pagination.page).with('t', Math.ceil(props.itemsLength / pagination.rowsPerPage)).get('lobby.dialog.users.pagination') }}
          </template>
          <template slot="no-data">
            <v-alert :value="getUsersLoading" color="info" icon="sync">
              {{ $ml.get('lobby.lobby.loading') }}
            </v-alert>
            <v-alert :value="!getUsersLoading" color="error" icon="warning">
              {{ $ml.get('error.noData') }}
            </v-alert>
          </template>
          <template slot="no-results">
            <v-alert :value="true" color="error" icon="warning">
              {{ $ml.with('s', search).get('lobby.dialog.users.searchError') }}
            </v-alert>
          </template>
        </v-data-table>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="usersDialog = !usersDialog">{{ $ml.get('lobby.dialog.users.close') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'

import EditUser from '@/components/lobby/dialog/EditUser'

export default {
  data () {
    return {
      rowsPerPageItems: [6],
      pagination: {},
      search: '',
      headers: [
        { text: this.$ml.get('lobby.dialog.users.name'), value: 'name' },
        { text: this.$ml.get('lobby.dialog.users.email'), value: 'email' },
        { text: this.$ml.get('lobby.dialog.users.role'), value: 'role' },
        { text: this.$ml.get('lobby.dialog.users.enabled'), value: 'enabled' },
        { text: this.$ml.get('lobby.dialog.users.action'), value: 'name', sortable: false }
      ]
    }
  },
  components: {
    EditUser
  },
  computed: {
    ...mapGetters([
      'getUsers',
      'getUsersLoading'
    ]),

    usersDialog: {
      get () {
        return this.$store.getters.getUsersDialog
      },
      set (value) {
        this.$store.dispatch('setUsersDialog', value)
      }
    }
  },
  methods: {
    editUser (user) {
      this.$store.dispatch('setEditUserDialog', true)
      this.$store.dispatch('setEditUserInfo', user)
    },

    deleteUser (user) {
      console.log(user)
      confirm(this.$ml.with('u', user.name).get('lobby.dialog.users.delete'))
    }
  }
}
</script>
