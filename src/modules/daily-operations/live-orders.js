import { createPage } from "../../shared/module.js";

export const liveOrders = createPage("Live Orders", {
  tabs: [
    {
      name: "Running Orders",
      sections: [
        "Running Orders",
        "Pending Orders",
        "Dine in",
        "Pick up",
        "Delivery",
        "In Preparation",
        "Waiting For Pickup",
        "Out For Delivery",
      ],
    },
    {
      name: "Running Tables",
      sections: [
        "Active Tables",
        "Revenue (Estimated)",
        "No active tables",
      ],
    },
  ],
});
