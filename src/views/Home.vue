<template>
  <div class="home-page">
    <!-- Hero Sweater Image -->
    <div class="hero-wrapper">
      <img
        src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=856&q=80"
        alt="Featured sweater"
        class="hero-img"
      />
      <div class="hero-overlay">
        <span class="hero-label">New Arrivals</span>
      </div>
    </div>

    <div class="cards-section">
      <!-- Customer Loyalty Card -->
      <v-card class="loyalty-card mb-4" elevation="0" rounded="lg">
        <v-card-text class="pa-5">
          <div class="loyalty-name">Jane Doe</div>
          <div class="loyalty-number">Loyalty #: 0012041984</div>
          <v-divider class="my-3" />
          <div class="points-row">
            <div class="points-label">Points Accrued</div>
            <div class="points-value">127</div>
          </div>
        </v-card-text>
      </v-card>

      <!-- Available Offers Card -->
      <v-card class="offers-card" elevation="0" rounded="lg">
        <v-card-text class="pa-5 d-flex flex-column align-center text-center">
          <div class="offers-eyebrow">Available Offers</div>
          <div class="offers-headline">10% off your next purchase</div>
          <div class="barcode-wrapper mt-4">
            <svg width="200" height="52" xmlns="http://www.w3.org/2000/svg">
              <rect x="4"  y="0" width="5"  height="42" fill="#1a1a1a"/>
              <rect x="12" y="0" width="2"  height="42" fill="#1a1a1a"/>
              <rect x="17" y="0" width="6"  height="42" fill="#1a1a1a"/>
              <rect x="27" y="0" width="3"  height="42" fill="#1a1a1a"/>
              <rect x="33" y="0" width="7"  height="42" fill="#1a1a1a"/>
              <rect x="43" y="0" width="2"  height="42" fill="#1a1a1a"/>
              <rect x="48" y="0" width="5"  height="42" fill="#1a1a1a"/>
              <rect x="56" y="0" width="3"  height="42" fill="#1a1a1a"/>
              <rect x="62" y="0" width="8"  height="42" fill="#1a1a1a"/>
              <rect x="73" y="0" width="2"  height="42" fill="#1a1a1a"/>
              <rect x="78" y="0" width="4"  height="42" fill="#1a1a1a"/>
              <rect x="85" y="0" width="6"  height="42" fill="#1a1a1a"/>
              <rect x="94" y="0" width="3"  height="42" fill="#1a1a1a"/>
              <rect x="100" y="0" width="7" height="42" fill="#1a1a1a"/>
              <rect x="110" y="0" width="2" height="42" fill="#1a1a1a"/>
              <rect x="115" y="0" width="5" height="42" fill="#1a1a1a"/>
              <rect x="123" y="0" width="3" height="42" fill="#1a1a1a"/>
              <rect x="129" y="0" width="6" height="42" fill="#1a1a1a"/>
              <rect x="138" y="0" width="2" height="42" fill="#1a1a1a"/>
              <rect x="143" y="0" width="8" height="42" fill="#1a1a1a"/>
              <rect x="154" y="0" width="3" height="42" fill="#1a1a1a"/>
              <rect x="160" y="0" width="5" height="42" fill="#1a1a1a"/>
              <rect x="168" y="0" width="2" height="42" fill="#1a1a1a"/>
              <rect x="173" y="0" width="7" height="42" fill="#1a1a1a"/>
              <rect x="183" y="0" width="3" height="42" fill="#1a1a1a"/>
              <rect x="189" y="0" width="5" height="42" fill="#1a1a1a"/>
              <text x="100" y="52" text-anchor="middle" font-size="9" font-family="monospace" fill="#555" letter-spacing="3">0012041984</text>
            </svg>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>


<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.hero-wrapper {
  width: 100%;
  position: relative;
}
.hero-img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
}
.hero-overlay {
  position: absolute;
  bottom: 16px;
  left: 20px;
}
.hero-label {
  background: rgba(255,255,255,0.85);
  color: #1a1a1a;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 20px;
}
.cards-section {
  padding: 20px 16px 100px;
}
.loyalty-card {
  background: #ffffff;
  border: 1px solid #ebebeb;
}
.loyalty-name {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: #1a1a1a;
  margin-bottom: 4px;
}
.loyalty-number {
  font-size: 0.85rem;
  color: #888;
  letter-spacing: 0.05em;
  font-weight: 400;
}
.points-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.points-label {
  font-size: 0.9rem;
  color: #555;
  font-weight: 500;
}
.points-value {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.02em;
}
.offers-card {
  background: #f8f6f3;
  border: 1px solid #ebebeb;
}
.offers-eyebrow {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #888;
  margin-bottom: 8px;
}
.offers-headline {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a1a1a;
  letter-spacing: -0.01em;
}
.barcode-wrapper {
  display: flex;
  justify-content: center;
}
</style>
