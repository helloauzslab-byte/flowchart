# AUZS LAB POS

Working clickable POS prototype and architecture map.

## Prototype
- `index.html` — working single-file prototype
- `AUZS_LAB_POS_Clickable_UI_LiveOrders_Updated (1).html` — current source snapshot

## Product structure
```
AUZS LAB POS
├── Dashboard
│   ├── Header
│   ├── Sales Statistics
│   ├── Order Channels
│   ├── Online Orders Overview
│   ├── Daily Snapshot
│   ├── Margin Analysis
│   ├── Item Performance
│   ├── Expenses & Withdrawals
│   ├── Revenue Leakage
│   ├── Risk Radar
│   ├── Sales Performance
│   └── AI Assistant
├── Daily Operations
│   ├── Live Orders
│   │   ├── Running Orders
│   │   └── Running Tables
│   ├── All Orders
│   ├── Online Orders
│   ├── KOT
│   └── Due Payment Settlement
├── Menu Management
│   ├── Menu & Discounts
│   ├── Items
│   ├── Categories
│   ├── Variants
│   ├── Add-ons
│   ├── Tables & Areas
│   ├── Taxes
│   ├── Discounts
│   ├── Menu Availability
│   ├── Order Preferences
│   ├── Item Commission
│   ├── Physical Menu
│   └── Bulk Image Upload
├── Inventory
│   ├── Raw Materials
│   ├── Stock Management
│   ├── Purchase Orders
│   ├── Vendors
│   ├── Recipes
│   ├── Consumption Tracking
│   └── Inventory Reports
├── Marketing Automation
│   ├── Campaigns
│   ├── Offers
│   ├── WhatsApp Marketing
│   ├── Customer Engagement
│   ├── Promotions
│   └── Loyalty Campaigns
├── Finance
│   ├── Expenses
│   ├── Withdrawals
│   ├── Cash Management
│   ├── Settlements
│   ├── Accounting
│   └── Payment Reconciliation
├── Reports
│   ├── Sales Reports
│   ├── Order Reports
│   ├── Item Reports
│   ├── Inventory Reports
│   ├── Customer Reports
│   ├── Staff Reports
│   └── Analytics Dashboard
├── Management
│   ├── Configuration
│   ├── User Management
│   ├── User Logs
│   ├── Audit Trail
│   ├── Data Management
│   ├── Device Mapping
│   ├── Accounting
│   └── Explore Products
├── CRM
│   ├── Customers
│   ├── Customer Database
│   ├── Loyalty Program
│   ├── Gift Cards
│   ├── Customer Engagement
│   └── Membership Programs
├── Aggregator Center
│   ├── Swiggy
│   ├── Zomato
│   ├── ONDC
│   ├── Dunzo
│   ├── Uber Eats
│   └── Platform Settings
└── Quick Links
    ├── Favourite Pages
    ├── Shortcuts
    └── Custom Links
```

## Architecture layer
The `src/` tree mirrors the product structure so code-architecture tools can visualize the system as it grows.
