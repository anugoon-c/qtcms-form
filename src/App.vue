<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>ลงทะเบียนกิจกรรม</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge
      color="purple"
      left
      overlap
      >
      <v-icon
        color="grey lighten-1"
        large
        @click.native="$router.push('/admin')"
      >
        account_circle
      </v-icon>
      </v-badge>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
