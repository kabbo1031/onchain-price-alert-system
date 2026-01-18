export function generateReport(prices, alerts) {
  console.log("----- Price Report -----");
  prices.forEach(p => {
    console.log("Token:", p.symbol, "Price:", p.price, "Threshold:", p.threshold);
  });

  console.log("----- Alerts -----");
  if (alerts.length === 0) {
    console.log("No alerts triggered.");
  } else {
    alerts.forEach(a => {
      console.log("ALERT:", a.symbol, "Price:", a.price);
    });
  }

  console.log("------------------------");
}
