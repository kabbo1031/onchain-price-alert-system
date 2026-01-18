export function simulatePriceFeed(tokens) {
  console.log("Simulating price feed...");

  return tokens.map(token => {
    const randomPrice = (Math.random() * token.threshold * 2).toFixed(2);
    return {
      symbol: token.symbol,
      price: Number(randomPrice),
      threshold: token.threshold
    };
  });
}
