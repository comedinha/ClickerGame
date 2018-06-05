<template>
    <v-navigation-drawer class="hidden-md-and-up" v-model="drawerFlag" fixed right>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>
        <v-list-group prepend-icon="account_circle" value="true">
          <v-list-tile slot="activator">
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile>
          <v-list-group sub-group no-action value="true">
            <v-list-tile slot="activator">
              <v-list-tile-title>Admin</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title>Test</v-list-tile-title>
              <v-list-tile-action>
                <v-icon>admin</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
          <v-list-group sub-group no-action>
            <v-list-tile slot="activator">
              <v-list-tile-title>Actions</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title>test</v-list-tile-title>
              <v-list-tile-action>
                <v-icon>clock</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  props: ['drawer'],
  data () {
    return {
    }
  },
  computed: {
    drawerFlag: {
      get () {
        return this.drawer
      },
      set (val) {
        this.$emit('updateDrawer', val)
      }
    }
  }
}
</script>
