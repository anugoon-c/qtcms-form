<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
       <v-btn color="primary" @click.native="$router.push('/GetUser')">สำหรับเจ้าหน้าที่</v-btn>
       <v-btn color="success" @click.native="$router.push('/')">สมัครกิจกรรม</v-btn>
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
