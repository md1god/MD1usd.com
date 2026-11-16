// Single source of truth for every contract address shown on the site.
// scripts/check-addresses.mjs fails the build if an address literal appears anywhere else in src/.
export const CONTRACTS = {
  ethereum: { name: 'Ethereum', address: '0x6bd6A380903Ae072A764A929C34779824c068BB1', explorer: 'https://etherscan.io/address/' },
  polygon:  { name: 'Polygon',  address: '0x6bd6A380903Ae072A764A929C34779824c068BB1', explorer: 'https://polygonscan.com/address/' },
  bnb:      { name: 'BNB Chain', address: '0xDe6b3FEe06A5570e51f171c3afFCfD7f7c6d4787', explorer: 'https://bscscan.com/address/' },
  solana:   { name: 'Solana', address: '3fN2LAt47q3oSgNq4dJZt4DuAh5yJw6mb6B3dRYJGHa8', explorer: 'https://explorer.solana.com/address/' },
  // PENDING OWNER CONFIRMATION: the MDM1 site (hub.html) uses ...CFCf13c3f for the MDM1 token on Polygon.
  mdm1Governance: { name: 'MDM1 Governance (Polygon)', address: '0x0a4E17e4F9c179a310069711069c346CFCf12c3f', explorer: 'https://polygonscan.com/address/' },
} as const;
export const explorerUrl = (c: { explorer: string; address: string }) => c.explorer + c.address;
