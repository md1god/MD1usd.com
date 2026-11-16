// Interactive 3D "orb" buttons: any element with [data-orb] floats on its own, leans toward the pointer
// with a magnetic pull, gets a specular highlight that follows the pointer, and sinks when pressed.
// Styling lives in styles/globals.css (.orb). Skipped entirely for prefers-reduced-motion.

type Orb = { el: HTMLElement; ph: number; x: number; y: number; rx: number; ry: number; s: number; hx: number; hy: number; down: boolean };

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const lerp = (a: number, b: number, k: number) => a + (b - a) * k;

export function initOrbs(): void {
  if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const orbs = new Map<HTMLElement, Orb>();
  const ptr = { x: -9999, y: -9999 };

  const adopt = (el: HTMLElement) => {
    if (orbs.has(el)) return;
    el.classList.add('orb');
    const o: Orb = { el, ph: Math.random() * 6.283, x: 0, y: 0, rx: 0, ry: 0, s: 1, hx: 38, hy: 28, down: false };
    orbs.set(el, o);
    el.addEventListener('pointerdown', () => { o.down = true; });
    (['pointerup', 'pointercancel', 'pointerleave'] as const).forEach((ev) => el.addEventListener(ev, () => { o.down = false; }));
  };
  const scan = () => document.querySelectorAll<HTMLElement>('[data-orb]').forEach(adopt);

  scan();
  new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });

  window.addEventListener('pointermove', (e) => { ptr.x = e.clientX; ptr.y = e.clientY; }, { passive: true });
  window.addEventListener('pointerdown', (e) => { ptr.x = e.clientX; ptr.y = e.clientY; }, { passive: true });
  window.addEventListener('pointerup', (e) => { if (e.pointerType !== 'mouse') ptr.x = ptr.y = -9999; }, { passive: true });
  document.addEventListener('pointerleave', () => { ptr.x = ptr.y = -9999; });

  const REACH = 120;
  let last = performance.now();
  const frame = (now: number) => {
    requestAnimationFrame(frame);
    if (document.hidden) { last = now; return; }
    const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
    last = now;
    const t = now / 1000;
    const k = 1 - Math.exp(-dt * 9);
    orbs.forEach((o, el) => {
      if (!el.isConnected) { orbs.delete(el); return; }
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2 - o.x, cy = r.top + r.height / 2 - o.y;
      const dx = ptr.x - cx, dy = ptr.y - cy, d = Math.hypot(dx, dy);
      let tx = Math.sin(t * 0.7 + o.ph * 2) * 1.4;
      let ty = Math.sin(t * 1.1 + o.ph) * 2.8;
      let ry = Math.sin(t * 0.9 + o.ph) * 7;
      let rx = Math.cos(t * 0.8 + o.ph) * 6;
      let ts = 1, hx = 38, hy = 28;
      if (d < REACH) {
        const f = 1 - d / REACH;
        tx += clamp(dx * 0.22 * f, -6, 6); ty += clamp(dy * 0.22 * f, -6, 6);
        ry = clamp(dx / (r.width / 2), -1.2, 1.2) * 22 * (0.35 + f * 0.65);
        rx = -clamp(dy / (r.height / 2), -1.2, 1.2) * 22 * (0.35 + f * 0.65);
        ts = 1 + 0.1 * f;
        hx = clamp(50 + (dx / r.width) * 70, 15, 85); hy = clamp(50 + (dy / r.height) * 70, 12, 85);
      }
      if (o.down) ts = 0.88;
      o.x = lerp(o.x, tx, k); o.y = lerp(o.y, ty, k);
      o.rx = lerp(o.rx, rx, k); o.ry = lerp(o.ry, ry, k);
      o.s = lerp(o.s, ts, o.down ? 1 - Math.exp(-dt * 22) : k);
      o.hx = lerp(o.hx, hx, k); o.hy = lerp(o.hy, hy, k);
      const st = el.style;
      st.setProperty('--o-x', `${o.x.toFixed(2)}px`); st.setProperty('--o-y', `${o.y.toFixed(2)}px`);
      st.setProperty('--o-rx', `${o.rx.toFixed(2)}deg`); st.setProperty('--o-ry', `${o.ry.toFixed(2)}deg`);
      st.setProperty('--o-s', o.s.toFixed(3));
      st.setProperty('--o-hx', `${o.hx.toFixed(1)}%`); st.setProperty('--o-hy', `${o.hy.toFixed(1)}%`);
    });
  };
  requestAnimationFrame(frame);
}
