I'd like to create a responsive web app that displays a customer's loyalty number, points accrued, purchase history, available offers, and the ability to add a gift card to their cart.

Use Vite with TypeScript and Vue Router. Then add Vuetify3 with Material Design Icons, and also install chart.js and vuechartjs for data visualizations. Set everything up and open the project. Keep everything in the workspace route, do not create a subfolder.

The homepage should contain a card that displays user's full name, loyalty number, and points accrued. There should be a second card on the homepage underneath the other one that displays Available Offers.

There should be three navigation buttons at the bottom of the app that are always displayed. One for the homepage, one for purchase history, and one for gift cards. These should be displayed in a single row with a thin dividing line above the navigation buttons. No matter what page you are on, this module should always be displayed. The homepage button should take you to the homepage. The purchase history button should take you to the Purchase History page. The gift cards button should take you to the Gift Card page.

## Data
- Use a customer profile with the name of Jane Doe, Loyalty Number: 0012041984, Points Accrued: 127.
- Available offers: Text should be "10% off next purchase." A fake barcode should display underneath the text with the loyalty number printed below it.
- Gift cards: This should be a separate page in the app. A card should be used to display a photo of gift bags, text reading: "Purchase a gift card today! Amounts available below." Three pill-shaped buttons should be displayed under the text with amounts displayed as $25, $50, and $100.
- Purchase History: This should be a separate page in the app. Display two cards each with an order.
    - The first card should be a photo of a sweater in the left column and fill approximately 25% of the card. The second column should take up the other 75% of the card, but should have a small gap between the columns. The second column should display the following text:
      "Order number: S9854 / 1 Item / Total: $95.00 / Delivered: 05/14/2026"
    - The second card should be a photo of a pair of jeans in the left column and fill approximately 25% of the card. The second column should take up the other 75% of the card, but should have a small gap between the columns. The second column should display the following text:
      "Order number: S9923 / 1 Item / Total: $125.00 / Delivered: 05/16/2026"

## Layout
- Three icons at the bottom of the app using Material Design Icons along with the names of the pages (Home, Gift Cards, History).
  - Home icon: mdi-home
  - Gift Cards icon: mdi-wallet-giftcard
  - History icon: mdi-history
- Each icon with name should act as a button and take the user to their desired page.
- The active nav button should highlight in primary blue; inactive buttons in grey.
- The screen should be sized at 428px wide by 926px tall (iPhone 14 Pro Max).
- The app frame is centered on desktop with a subtle drop shadow.

## Homepage
- Full-width hero image of a sweater (320px tall) at the top of the page with a "NEW ARRIVALS" pill label overlaid in the bottom-left corner.
- Loyalty card (white background, 1px border): displays name, loyalty number, a divider, and a "Points Accrued / 127" row.
- Available Offers card (warm off-white #f8f6f3 background): displays "AVAILABLE OFFERS" eyebrow label, "10% off your next purchase" headline, and a wider fake barcode with the loyalty number printed beneath it.

## Gift Cards Page
- Full-width gift bags hero image (220px tall) at the top of the card.
- Card matches the warm off-white #f8f6f3 Available Offers card style.
- "GIFT CARDS" eyebrow label, bold headline, muted subtext.
- Three dark pill-shaped buttons ($25, $50, $100) that stretch across the card width.

## Purchase History Page
- Cards match the warm off-white #f8f6f3 Available Offers card style (flat, no elevation, 1px border).
- Photo on the left (25% width, 130px tall, object-fit: cover), order details on the right.
- Order details display: bold order number, muted "1 Item" meta, large bold total, and a mdi-check-circle-outline icon next to the delivery date in muted grey.

## Style
- Light theme by default (Vuetify light theme)
- Clean, minimal, lots of whitespace
- Consistent card language across all pages: warm off-white #f8f6f3 background, 1px solid #ebebeb border, flat (no elevation/shadow)
- Eyebrow labels: 0.7rem, uppercase, 0.15em letter-spacing, #888 grey
- Google font: Raleway

## Tech
- Vue 3 + TypeScript + Vuetify 3
- Vuetify components and directives fully registered via import * as components and import * as directives
- @mdi/font loaded in main.ts for Material Design Icons
- Chart.js via vue-chartjs
- Vue Router with three routes: / (Home), /gift-cards (GiftCards), /history (PurchaseHistory)
- Published to GitHub
