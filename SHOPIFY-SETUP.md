# Shopify Integration Setup for Forest Outfitters

This document provides instructions for connecting your Forest Outfitters app to the Shopify Storefront API.

## Prerequisites

1. A Shopify store (you can create a development store if you don't have one)
2. Admin access to your Shopify store

## Step 1: Create a Storefront API Access Token

1. Log in to your Shopify admin dashboard
2. Go to **Apps** in the left sidebar
3. Click on **Develop apps** (or **App and sales channel settings** > **Develop apps**)
4. Click **Create an app**
5. Name your app (e.g., "Forest Outfitters Storefront")
6. Click **Create app**
7. In the app settings, go to the **API credentials** tab
8. Click **Configure Storefront API scopes**
9. Select the following scopes:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_read_product_tags`
   - `unauthenticated_read_selling_plans`
10. Click **Save**
11. Go back to the API credentials tab and click **Install app**
12. Copy the **Storefront API access token** - you'll need this later

## Step 2: Set Up Environment Variables

1. Create a `.env.local` file in the root of your project
2. Add the following environment variables:
