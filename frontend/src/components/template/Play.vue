<template>
  <v-app id="inspire">
    <v-content>
      <router-view/>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/template/block/Footer'

export default {
  components: {
    Footer
  }
}
</script>
