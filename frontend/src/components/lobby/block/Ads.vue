<template>
  <v-flex d-flex xs12 sm12 md4>
    <v-card fluid>
      <v-toolbar dense flat>
        <v-toolbar-title>{{ $ml.get('lobby.block.ads.title') }}</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <script2 async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <!-- MyClick-Guest -->
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-9155104656479961"
            data-ad-slot="8903283963"
            data-ad-format="auto" />
        <script2>
        (adsbygoogle = window.adsbygoogle || []).push({});
        </script2>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
