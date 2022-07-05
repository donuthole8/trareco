<template>
  <v-footer
    class="footer"
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="footer-content">
        <p class="footer-text">{{ new Date().getFullYear() }} ©donuthole8 all rights reserved.</p>

        <v-spacer></v-spacer>
      
        <v-btn
          v-for="sns in sns_list"
          :key="sns"
          class="mx-4"
          color=var(--v-text2-base)
          dark
          icon
          href="sns.href"
          target="_blank"
        >
          <v-icon size="24px">
            {{ sns.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    sns_list: [
      {icon: 'mdi-instagram', href: "https://www.instagram.com/"},
      {icon: 'mdi-facebook',  href: "https://www.facebook.com/"},
      {icon: 'mdi-twitter',   href: "https://twitter.com/"},
    ],
  }),
}
</script>

<style scoped>
@import "../styles.scss"
</style>
