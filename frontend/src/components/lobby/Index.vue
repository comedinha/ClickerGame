<template>
  <v-app id="inspire">
    <v-navigation-drawer class="hidden-md-and-up" v-model="drawer" fixed right>
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
    <v-toolbar>
      <v-toolbar-title>My Click</v-toolbar-title>
      <v-spacer />
      Noticias
      <v-spacer />
      <v-menu class="hidden-sm-and-down" open-on-hover bottom offset-y :nudge-width="100">
        <v-toolbar-title slot="activator">
          Username <v-icon>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>Test</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-sm>
        <v-layout row wrap>
          <v-flex d-flex xs12 sm8>
            <v-layout column>
              <v-flex d-flex>
                <v-card>
                  <v-toolbar flat>
                    <v-toolbar-title>Mais jogados</v-toolbar-title>
                  </v-toolbar>
                  <el-carousel type="card" height="200px">
                    <el-carousel-item v-for="item in 10" :key="item">
                      <h3>{{ item }}</h3>
                    </el-carousel-item>
                  </el-carousel>
                </v-card>
              </v-flex>
              <v-flex d-flex>
                <v-card>
                  <v-toolbar flat>
                    <v-toolbar-title>Últimos Jogos</v-toolbar-title>
                  </v-toolbar>
                  <el-carousel type="card" height="200px">
                    <el-carousel-item v-for="item in 10" :key="item">
                      <h3>{{ item }}</h3>
                    </el-carousel-item>
                  </el-carousel>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex xs12 sm4>
            <v-card>
              <v-card-title>Busca de Jogos</v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
