# EsquenaziCoinPage_eng

This is the English-language landing page for the Esquenazi Coin project, a community-driven initiative on the Solana blockchain.

## Features
- Responsive static site (HTML/CSS/JS)
- Information about the coin, mission, and community
- Links to Discord and Solscan
- Custom domain via CNAME

## Recent Changes

### July 2025
- Added a new section at the bottom: **Support the Esquenazi Community Work**
  - Includes a professional heading, description, and a **Contribute** button that links to Stripe Checkout for donations.
- Created an `images/` directory for future use (e.g., QR codes, coin images).

## Stripe Integration
- The **Contribute** button uses Stripe Checkout. To update the link, replace the `href` in the button in `index.html` with your live Stripe Checkout URL.
- No backend is required for this integration.

## How to Update the Stripe Link
1. Log in to your Stripe Dashboard.
2. Create a new Checkout Session or Payment Link for your cause.
3. Copy the link and replace the placeholder in `index.html`.

## Images Directory
- Use the `images/` directory to store any images (e.g., QR codes) you want to display on the site.

## For Translators
If you maintain the other-language version of this repo, apply the same changes for consistency.
