export function loadTokens() {
  console.log("Loading token list...");

  return [
    { symbol: "ETH", threshold: 2000 },
    { symbol: "USDC", threshold: 1 },
    { symbol: "ARB", threshold: 1.5 }
  ];
}
