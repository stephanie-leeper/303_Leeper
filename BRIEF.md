I’d like to create a responsive web app that displays a customer’s loyalty number, points accrued, purchase history, available offers, and the ability to add a gift card to their cart.

Use Vite with TypeScript and Vue Router. Then add Vuetify3 with Material Design Icons, and also install chart.js and vuechartjs for data visualizations. Set everything up and open the project. Keep everything in the workspace route, do not create a subfolder.

The homepage should contain a card that displays user’s full name, loyalty number, and points accrued. There should be a second card on the homepage underneath the other one that displays Available Offers. 

There should be three navigation buttons at the bottom of the app that are always displayed. One for the homepage, one for purchase history, and one for gift cards. These should be displayed in a single row with a thin dividing line above the navigation buttons. No matter what page you are on, this module should always be displayed. The homepage button should take you to the homepage. The purchase history button should take you to the Purchase History page. The gift cards button should take you to the Gift Card page.

## Data
- Use a customer profile with the name of Jane Doe, Loyalty Number: 0012041984, Points Accrued: 127. 
- Available offers: Text should be10% off next purchase. A fake barcode should display underneath the text. 
- Gift cards: This should be a separate page in the app. A card should be used to display a photo of a gift card, text reading: “Purchase a gift card today! Amounts available below.” - Three circular buttons should be displayed under the text with amounts displayed as $25, $50, and $100. At the bottom of the app but above the 
- Purchase History: This should be a separate page in the app. Display two cards each with an order. 
    - The first card should be a photo of a sweater in the left column and fill approximately 25% of the card. The second column should take up the other 75% of the card, but should have a small gap between the column. The second column should display the following text:
“Order number: S9854
1 Item
Total: $95.00
Delivered: 05/14/2026”

    - The second card should be a photo of a pair of jeans in the left column and fill approximately 25% of the card. The second column should take up the other 75% of the card, but should have a small gap between the column. The second column should display the following text:
“Order number: S9923
1 Item
Total: $125.00
Delivered: 05/16/2026”

## Layout
- Three icons at the bottom of the app using Material Design icons along with the names of the Pages (Homepage, Gift Cards, Purchase History)
- Each icon with name should act as a button and take the user to their desired page. 
- The screen should be sized at 428px wide by 926px tall.

## Style
- Light theme by default (Vuetify light theme)
- Clean, minimal, lots of whitespace
- Mobile responsive - cards stack on small screens
- Google font: Raleway

## Tech
- Vue 3 + TypeScript + Vuetify 3
- Chart.js via vue-chartjs for all charts
- A homepage with additional pages to display purchase history and adding a gift card
