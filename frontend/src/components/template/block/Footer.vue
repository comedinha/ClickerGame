<template>
  <v-footer app fixed inset height="auto">
    <v-card flat tile class="flex">
      <v-card-actions class="grey lighten-2">
        <v-menu top offset-y>
          <v-btn icon slot="activator">
            <v-icon>language</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="lang in $ml.list" :key="lang" @click="$ml.change(lang)">
              <v-list-tile-title>{{ lang }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-spacer />
        &copy;{{ $ml.get('game.year') }} — <strong>{{ $ml.get('game.name') }}</strong>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-footer>
</template>
