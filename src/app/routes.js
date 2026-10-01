import { dashboard } from "../modules/dashboard/index.js";
import { dailyOperations } from "../modules/daily-operations/index.js";
import { menuManagement } from "../modules/menu-management/index.js";
import { inventory } from "../modules/inventory/index.js";
import { marketing } from "../modules/marketing/index.js";
import { finance } from "../modules/finance/index.js";
import { reports } from "../modules/reports/index.js";
import { management } from "../modules/management/index.js";
import { crm } from "../modules/crm/index.js";
import { aggregatorCenter } from "../modules/aggregator-center/index.js";
import { quickLinks } from "../modules/quick-links/index.js";

export const routes = {
  dashboard,
  dailyOperations,
  menuManagement,
  inventory,
  marketing,
  finance,
  reports,
  management,
  crm,
  aggregatorCenter,
  quickLinks,
};

export const topLevelNavigation = Object.keys(routes);
