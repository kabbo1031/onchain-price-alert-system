import { connectRPC } from "./rpc.client.js";
import { loadTokens } from "./token.registry.js";
import { simulatePriceFeed } from "./price.feed.js";
import { checkAlerts } from "./alert.engine.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Onchain Price Alert System");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const tokens = loadTokens();

const prices = simulatePriceFeed(tokens);
const alerts = checkAlerts(prices);

generateReport(prices, alerts);
