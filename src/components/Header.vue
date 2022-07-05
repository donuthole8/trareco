<template>
  <v-card class="overflow-hidden">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
    <v-app-bar
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
      absolute
      color=var(--v-main-base)
      dark
      scroll-target="#scrolling-techniques-6"
    >

      <v-btn
        text
        icon
        color=var(--v-text2-base)
      >
        <v-icon>mdi-thumb-up</v-icon>
      </v-btn>

      <v-toolbar-title class="header-title">Trareco</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-checkbox
        v-model="collapseOnScroll"
        color=var(--v-text2-base)
        hide-details
      ></v-checkbox>
    </v-app-bar>
  </v-card>
</template>


<script>
export default {
  name: 'Header',
  data: () => ({
    collapseOnScroll: true,
  }),
}
</script>

<style scoped>
@import "../styles.scss"
</style>
