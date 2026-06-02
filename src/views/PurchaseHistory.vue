
<template>
  <div class="history-page">
    <div class="cards-section">

      <!-- Order 1: Sweater -->
      <v-card class="order-card mb-4" elevation="0" rounded="lg">
        <div class="order-row">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=200&q=80"
            alt="Sweater"
            class="order-img"
          />
          <div class="order-details">
            <div class="order-number">Order #S9854</div>
            <div class="order-meta">1 Item</div>
            <div class="order-total">$95.00</div>
            <div class="order-delivered">
              <v-icon size="13" color="#888" class="mr-1">mdi-check-circle-outline</v-icon>
              Delivered 05/14/2026
            </div>
          </div>
        </div>
      </v-card>

      <!-- Order 2: Jeans -->
      <v-card class="order-card" elevation="0" rounded="lg">
        <div class="order-row">
          <img
            src="https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=200&q=80"
            alt="Jeans"
            class="order-img"
          />
          <div class="order-details">
            <div class="order-number">Order #S9923</div>
            <div class="order-meta">1 Item</div>
            <div class="order-total">$125.00</div>
            <div class="order-delivered">
              <v-icon size="13" color="#888" class="mr-1">mdi-check-circle-outline</v-icon>
              Delivered 05/16/2026
            </div>
          </div>
        </div>
      </v-card>

    </div>
  </div>
</template>

<style scoped>
.history-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.cards-section {
  padding: 20px 16px 100px;
}
.order-card {
  background: #f8f6f3;
  border: 1px solid #ebebeb;
  overflow: hidden;
}
.order-row {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.order-img {
  width: 25%;
  min-width: 90px;
  max-width: 110px;
  height: 130px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 0;
}
.order-details {
  flex: 1;
  padding: 16px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
}
.order-number {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.01em;
}
.order-meta {
  font-size: 0.8rem;
  color: #888;
  font-weight: 400;
}
.order-total {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-top: 4px;
}
.order-delivered {
  font-size: 0.78rem;
  color: #888;
  display: flex;
  align-items: center;
  margin-top: 2px;
}
</style>


