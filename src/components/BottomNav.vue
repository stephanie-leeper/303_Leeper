<template>
  <v-bottom-navigation
    app
    color="#fff"
    grow
    style="border-top: 1px solid #e0e0e0; height: 60px;"
  >
    <v-btn :to="'/'" router class="nav-btn" variant="text" :class="{ active: $route.path === '/' }">
      <v-icon size="20" :color="$route.path === '/' ? 'primary' : 'grey'">mdi-home</v-icon>
      <span class="nav-label" :class="{ active: $route.path === '/' }">Home</span>
    </v-btn>
    <v-btn :to="'/gift-cards'" router class="nav-btn" variant="text" :class="{ active: $route.path === '/gift-cards' }">
      <v-icon size="20" :color="$route.path === '/gift-cards' ? 'primary' : 'grey'">mdi-wallet-giftcard</v-icon>
      <span class="nav-label" :class="{ active: $route.path === '/gift-cards' }">Gift Cards</span>
    </v-btn>
    <v-btn :to="'/history'" router class="nav-btn" variant="text" :class="{ active: $route.path === '/history' }">
      <v-icon size="20" :color="$route.path === '/history' ? 'primary' : 'grey'">mdi-history</v-icon>
      <span class="nav-label" :class="{ active: $route.path === '/history' }">History</span>
    </v-btn>
  </v-bottom-navigation>
</template>



<style scoped>
.v-bottom-navigation {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
}
.nav-btn {
  min-width: 0;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  margin: 0;
  padding: 0;
  height: 100%;
  gap: 2px;
}
.nav-label {
  font-size: 0.75rem;
  margin-top: 0px;
  color: #888;
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 1.1;
}
.nav-label.active {
  color: #1976d2;
  font-weight: 600;
}
.nav-label {
  font-size: 0.8rem;
  margin-top: 2px;
  color: #888;
  font-weight: 400;
  letter-spacing: 0.01em;
}
.nav-label.active {
  color: #1976d2;
  font-weight: 600;
}
</style>
