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
    <v-toolbar dense>
      <v-btn icon>
        <v-badge top color="red">
          <span slot="badge">1</span>
          <v-icon>announcement</v-icon>
        </v-badge>
      </v-btn>
      <v-spacer />
      <v-toolbar-title>My Click</v-toolbar-title>
      <v-spacer />
      <v-menu class="hidden-sm-and-down" open-on-hover bottom offset-y>
        <v-toolbar-title slot="activator">
          Username <v-icon>arrow_drop_down</v-icon>
        </v-toolbar-title>
        <v-list>
          <v-list-tile>
            <v-list-tile-title>Editar Senha</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>Preferências</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="logout">
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-sm fixed>
        <v-layout row wrap>
          <v-flex d-flex xs12 sm4 md2>
            <v-card fluid>
              <v-toolbar dense flat>
                <v-toolbar-title>Meus Cenários</v-toolbar-title>
              </v-toolbar>
              <v-container fluid grid-list-md>
                <v-data-iterator :items="mygames.items" :rows-per-page-items="mygames.rowsPerPageItems" :pagination.sync="mygames.pagination" content-tag="v-layout" row wrap>
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
          <v-flex d-flex xs12 sm8 md6>
            <v-layout column>
              <v-flex d-flex>
                <v-card fluid v-bind:style="{'background-color': carousel.mostPlay}">
                  <v-toolbar dense flat>
                    <v-toolbar-title>Os mais jogados</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <el-carousel indicator-position="none" @change="changeMostPlayedCarousel" :autoplay="carousel.autoplay" type="card" height="175px">
                      <el-carousel-item v-for="item in mostPlay" :key="item.name">
                        <h3>{{ item.name }}</h3>
                      </el-carousel-item>
                    </el-carousel>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex d-flex>
                <v-card fluid v-bind:style="{'background-color': carousel.recentAdd}">
                  <v-toolbar dense flat>
                    <v-toolbar-title>Jogos Adicionados Recentemente</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <el-carousel indicator-position="none" @change="changeRecentAddedCarousel" :autoplay="carousel.autoplay" type="card" height="175px">
                      <el-carousel-item v-for="item in recentAdd" :key="item.name">
                        <h3>{{ item.name }}</h3>
                      </el-carousel-item>
                    </el-carousel>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex d-flex xs12 sm12 md4>
            <v-card fluid>
              <v-toolbar dense flat>
                <v-toolbar-title>Jogos que você jogou</v-toolbar-title>
              </v-toolbar>
              <v-card-actions>
                <v-text-field v-model="allgames.search" append-icon="search" label="Buscar" single-line />
              </v-card-actions>
              <v-container fluid grid-list-md>
                <v-data-iterator :items="allgames.items" :search="allgames.search" :rows-per-page-items="allgames.rowsPerPageItems" :pagination.sync="allgames.pagination" content-tag="v-layout" row wrap>
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
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      mygames: {
        search: '',
        rowsPerPageItems: [2],
        pagination: {
          rowsPerPage: 2
        },
        items: [
          {
            name: 'Jogo'
          },
          {
            name: 'Jogo 2'
          },
          {
            name: 'Jogo 3'
          },
          {
            name: 'Jogo 4'
          },
          {
            name: 'Jogo 5'
          }
        ]
      },
      allgames: {
        search: '',
        rowsPerPageItems: [4],
        pagination: {
          rowsPerPage: 4
        },
        items: [
          {
            name: 'Jogo'
          },
          {
            name: 'Jogo 2'
          },
          {
            name: 'Jogo 3'
          },
          {
            name: 'Jogo 4'
          },
          {
            name: 'Jogo 5'
          }
        ]
      },
      mostPlay: [
        {
          name: 'Jogo',
          background: 'white'
        },
        {
          name: 'Jogo 2',
          background: 'red'
        },
        {
          name: 'Jogo 3',
          background: 'blue'
        }
      ],
      recentAdd: [
        {
          name: 'Jogo',
          background: 'white'
        },
        {
          name: 'Jogo 2',
          background: 'red'
        },
        {
          name: 'Jogo 3',
          background: 'blue'
        }
      ],
      carousel: {
        autoplay: false,
        mostPlay: '',
        recentAdd: ''
      },
      drawer: false
    }
  },
  methods: {
    changeMostPlayedCarousel (val, oldVal) {
      this.carousel.mostPlay = this.mostPlay[val].background
    },
    changeRecentAddedCarousel (val, oldVal) {
      this.carousel.recentAdd = this.recentAdd[val].background
    },
    logout () {
      this.$store.dispatch('authLogout').then(() => {
        this.$router.push('/Signin')
      })
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
