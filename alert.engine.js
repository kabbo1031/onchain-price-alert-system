export function checkAlerts(prices) {
  console.log("Checking alerts...");

  return prices.filter(p => p.price >= p.threshold).map(p => {
    return {
      symbol: p.symbol,
      price: p.price,
      triggered: true
    };
  });
}
