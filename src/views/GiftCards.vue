
<template>
  <div class="gift-page">
    <div class="cards-section">
      <v-card class="gift-card" elevation="0" rounded="lg">
        <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=856&q=80"
          alt="Gift bags"
          class="gift-hero-img"
        />
        <v-card-text class="pa-5 d-flex flex-column align-center text-center">
          <div class="gift-eyebrow">Gift Cards</div>
          <div class="gift-headline">Purchase a gift card today!</div>
          <div class="gift-desc">Amounts available below.</div>
          <div class="gift-btns mt-5">
            <v-btn class="gift-btn" elevation="0" rounded="xl" size="large">$25</v-btn>
            <v-btn class="gift-btn" elevation="0" rounded="xl" size="large">$50</v-btn>
            <v-btn class="gift-btn" elevation="0" rounded="xl" size="large">$100</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<style scoped>
.gift-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.cards-section {
  padding: 20px 16px 100px;
}
.gift-card {
  background: #f8f6f3;
  border: 1px solid #ebebeb;
  overflow: hidden;
}
.gift-hero-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}
.gift-eyebrow {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #888;
  margin-bottom: 6px;
}
.gift-headline {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.01em;
  margin-bottom: 4px;
}
.gift-desc {
  font-size: 0.9rem;
  color: #888;
  font-weight: 400;
}
.gift-btns {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
}
.gift-btn {
  background: #1a1a1a !important;
  color: #fff !important;
  font-weight: 600;
  letter-spacing: 0.03em;
  font-size: 0.95rem;
  flex: 1;
}
</style>


