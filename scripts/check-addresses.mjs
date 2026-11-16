// Fails (exit 1) if a contract address literal appears in src/ outside src/data/contracts.ts.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('../src', import.meta.url).pathname;
const ALLOWED = join(ROOT, 'data', 'contracts.ts');
const RX = /0x[a-fA-F0-9]{40}|[1-9A-HJ-NP-Za-km-z]{43,44}/g;   // EVM address | base58 (Solana) address
const SOLANA = /^[1-9A-HJ-NP-Za-km-z]{43,44}$/;
let bad = 0;
const walk = d => { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : scan(p); } };
const scan = p => {
  if (p === ALLOWED || !/\.(tsx?|jsx?|css|html|json)$/.test(p)) return;
  readdirSync; const lines = readFileSync(p, 'utf8').split('\n');
  lines.forEach((l, i) => { for (const m of l.matchAll(RX)) {
    // base58 candidates must contain a digit AND a letter and not be a plain identifier/word
    if (!m[0].startsWith('0x') && !(SOLANA.test(m[0]) && /\d/.test(m[0]) && /[a-z]/.test(m[0]) && /[A-Z]/.test(m[0]))) continue;
    console.error(`${relative(process.cwd(), p)}:${i + 1}: address literal ${m[0]} (import it from src/data/contracts.ts)`); bad++;
  } });
};
walk(ROOT);
if (bad) { console.error(`${bad} address literal(s) outside src/data/contracts.ts`); process.exit(1); }
console.log('check-addresses: ok');
