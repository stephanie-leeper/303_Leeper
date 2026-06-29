## Overview
This project is a mobile-first web app designed for retail loyalty members. It gives a customer a single place to check their points balance, browse personalized offers, review recent orders, and add a gift card — all from their phone, without opening a native app or digging through a retailer's full website.

The app is scoped to a single customer profile (Jane Doe) with simulated data. The intent is to demonstrate the mobile UX pattern for a loyalty experience — not to wire up a live loyalty platform backend.


## Business Case
- Loyalty programs are one of the most proven tools in retail customer retention. But they only work if the customer actually engages with them — and most loyalty experiences are buried inside a full e-commerce site that wasn't designed for a phone screen or a quick check between tasks.

- The gap this app addresses: a customer who wants to check their points or redeem an offer shouldn't have to navigate a full retail website to do it. A focused, mobile-native loyalty experience reduces friction, increases offer redemption rates, and keeps the brand visible between purchases.

- This is increasingly a competitive expectation. Retailers like Target (Circle), Sephora (Beauty Insider), and DSW have standalone loyalty experiences because they've learned that accessibility drives engagement. A mid-sized apparel retailer without a native app can close most of that gap with a well-designed mobile web experience.

- This build is a prototype using a single simulated customer profile. The design pattern demonstrated here — bottom nav, loyalty card, offer barcode, purchase history, gift card purchase flow — maps directly to what a production loyalty experience would need.


## Target User
Primary User: Retail Loyalty Member — Apparel
- This person shops at a mid-sized apparel retailer regularly enough to have a loyalty account. They're not a power user of the brand's digital tools — they check their points occasionally, clip offers when they remember, and look up order history when something hasn't arrived. They are used to apps like Starbucks, Target Circle, and their airline loyalty program.

What they care about:
- How many points do I have, and what can I do with them?
- Do I have any offers I should use before they expire?
- What did I order recently and when is it arriving?
- Can I buy a gift card quickly without going through the full checkout?

What frustrates them:
- Having to log in again every time
- An experience that's clearly a desktop site crammed onto a phone
- Offers that are hard to find or hard to show at checkout
- Unclear loyalty status — they want a number, not just "Silver Member"

- Context of use: On the phone, one-handed, often in-store or in line. Quick glances, not deep reading sessions. The experience needs to work with a thumb — nothing small, nothing requiring precise taps.


## Stakeholders
RoleName: Responsibility: Product Owner (Client)[Client PO]Validates that the experience reflects real loyalty member behavior and redemption patternsSolution Architect[SA]Reviews tech approach and evaluates the path to a real loyalty API backendSolution Owner[SO]Owns delivery scope and milestone check-insDesigner / Developer[Your Name]UX design, component architecture, build, and deployment

What this brief needs to do for the team:
- Give the PO confidence that the UX reflects how real customers interact with loyalty programs — not just a feature checklist
- Give the SA a clear enough component and routing structure to evaluate the backend integration path
- Give the SO a scope boundary between "loyalty snapshot" and "full e-commerce experience"
- Give the designer/developer a mobile-first constraint to design toward, not retrofit



## Problem Statement
A loyalty member who wants to check their points balance, find an offer to use in-store, or look up a recent order currently has to navigate a full retail website — one that wasn't designed for their phone or their 30-second task window.

This app solves that by giving the loyalty member exactly what they need, nothing more:
- What's my status? — Points balance and loyalty number, visible immediately on load
- What offers do I have? — Personalized offer with a scannable barcode, ready to show at checkout
- What did I order? — Recent purchase history without navigating a full account section
- Can I buy a gift card? — A quick path to gift card purchase without a full checkout flow


## Goals & Success Criteria
Goal: How we'll know it's met
- Loyalty status visible on loadPoints balance and loyalty number appear above the fold on the home screenOffer is ready to show at checkout
- Barcode and loyalty number are displayed clearly on the home screen, no extra taps neededBottom nav works intuitivelyA first-time user can reach any page in one tap without instructions
- Purchase history is scannable
- A user can identify a recent order's key details in under 5 seconds per cardGift card path is clearA user can select an amount in one tap from the gift cards page
- Feels like a mobile app, not a mobile websiteLayout, touch targets, and spacing all reflect mobile-first design, not a desktop reflowWorks at 428px viewport
-No horizontal scroll, no broken layout, no overlapping elements on iPhone 14 Pro Max dimensions


## Scope
In Scope
- Mobile web app, viewport 428px × 926px, centered on desktop with drop shadow
- Three pages with bottom navigation: Home, Purchase History, Gift Cards
- Home: hero image, loyalty card (name, number, points), available offers card with barcode
- Purchase History: two order cards with product image, order number, item count, total, delivery date
- Gift Cards: hero image, card with denomination selection ($25, $50, $100)
- Bottom nav: always visible, active state in primary blue, inactive in grey
- Simulated customer profile (Jane Doe, loyalty number 0012041984, 127 points)
- Published to GitHub

## Out of Scope
- User authentication or login
- Real loyalty API or points engine
- Cart or checkout flow (gift card buttons are UI only — no transaction)
- Push notifications or offer expiration logic
- More than one customer profile
- Native iOS or Android app (this is a responsive web experience)
- More than two purchase history items in this build



## Customer Profile (Simulated Data)

FieldValueNameJane DoeLoyalty Number0012041984Points Accrued127Available Offer10% off next purchaseOrder 1S9854 — 1 item — $95.00 — Delivered 05/14/2026 — SweaterOrder 2S9923 — 1 item — $125.00 — Delivered 05/16/2026 — Jeans


## Page Specifications

Home
- Full-width hero image of a sweater (320px tall) with a "NEW ARRIVALS" pill label overlaid in the bottom-left corner
- Loyalty card: white background, 1px border, displays name + loyalty number + divider + "Points Accrued / 127"
- Available Offers card: warm off-white (#f8f6f3) background, "AVAILABLE OFFERS" eyebrow, "10% off your next purchase" headline, fake barcode with loyalty number printed beneath


## Purchase History
- Two order cards, warm off-white card style (flat, 1px border, #f8f6f3 background)
- Each card: product photo left column (25% width, 130px tall, object-fit: cover), order details right column (75%)
- Order details: bold order number, muted "1 Item" meta, large bold total, mdi-check-circle-outline icon + delivery date in muted grey


## Gift Cards
Full-width gift bags hero image (220px tall) at top of card
Warm off-white card style to match system
"GIFT CARDS" eyebrow label, bold headline, muted subtext
Three dark pill-shaped buttons ($25, $50, $100), full card width


## Bottom Navigation
Always visible, three items: Home (mdi-home), Gift Cards (mdi-wallet-giftcard), History (mdi-history)
Icon + page label below
Active state: primary blue; inactive: grey
Thin dividing line above the nav bar
Taps route to: / (Home), /gift-cards (GiftCards), /history (PurchaseHistory)



## Design Direction
The visual tone should feel like a modern retail loyalty app — clean, warm, and trustworthy. Reference points: Starbucks app, Target Circle, Sephora Beauty Insider.

- Warm off-white (#f8f6f3) as the primary card background — not pure white, not grey; a tone that reads as premium without being cold
- Card language is consistent across all three pages: same background, same 1px border (#ebebeb), flat (no elevation or shadow)
- Eyebrow labels at 0.7rem, uppercase, 0.15em letter-spacing, #888 grey — used to label card sections without competing with the headline
- Typography: Google Fonts — Raleway throughout; hierarchy through weight, not size alone
- Touch targets: All interactive elements (nav buttons, pill buttons) are large enough for a thumb tap — minimum 44px height
- Color: Primary blue for active states only; restrained use elsewhere


## Technical Approach
DecisionChoiceRationaleFrameworkVue 3 + TypeScriptComponent model maps cleanly to cards, nav, and page viewsUI LibraryVuetify 3 (fully registered components + directives)Grid, cards, and nav components; light themeIcons@mdi/font loaded in main.tsMaterial Design Icons for nav and order status indicatorsChartsChart.js via vue-chartjsIncluded for future data visualization extension; not used in v1RoutingVue Router — 3 routes: / , /gift-cards , /historyPage-level navigation without full app reloadBuildVite + TypeScriptFast dev server; standard for Vue 3 projectsFontsGoogle Fonts — RalewayWarm, modern sans-serif appropriate for a retail brandDataHardcoded in component data / constantsNo API dependency; keeps scope on UX patternDeploymentGitHub PagesPublic URL for reviewer access


## File & Folder Structure
/
├── context/
│   ├── brief.md           ← this file
│   └── [additional specs as the project evolves]
├── src/
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── GiftCards.vue
│   │   └── PurchaseHistory.vue
│   ├── components/
│   │   ├── BottomNav.vue
│   │   ├── LoyaltyCard.vue
│   │   ├── OffersCard.vue
│   │   └── OrderCard.vue
│   ├── router/
│   │   └── index.ts
│   ├── App.vue
│   └── main.ts
├── public/
├── README.md
├── LICENSE
├── package.json
└── vite.config.ts-