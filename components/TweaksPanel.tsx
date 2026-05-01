"use client";

import { useEffect, useState } from "react";

type Base = "warm" | "cool" | "neutral";
type Accent = "deep" | "bright";

const bases: Record<Base, { cream: string; white: string; sky: string; mist: string }> = {
  warm: { cream: "#FAF7F2", white: "#FFFFFF", sky: "#EEF5FC", mist: "#F2F4F8" },
  cool: { cream: "#F3F6FB", white: "#FFFFFF", sky: "#E6F1FB", mist: "#EEF1F6" },
  neutral: { cream: "#F6F7F9", white: "#FFFFFF", sky: "#EDF3FA", mist: "#F0F2F6" },
};

export function TweaksPanel() {
  const [active, setActive] = useState(false);
  const [base, setBase] = useState<Base>("warm");
  const [accent, setAccent] = useState<Accent>("deep");

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      const data = (e as MessageEvent<{ type?: string }>).data;
      if (data?.type === "__activate_edit_mode") setActive(true);
      if (data?.type === "__deactivate_edit_mode") setActive(false);
    }
    window.addEventListener("message", onMessage);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMessage);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const b = bases[base];
    root.style.setProperty("--color-bg-cream", b.cream);
    root.style.setProperty("--color-bg-white", b.white);
    root.style.setProperty("--color-bg-sky", b.sky);
    root.style.setProperty("--color-bg-mist", b.mist);

    if (accent === "bright") {
      root.style.setProperty("--color-accent", "var(--color-c-500)");
      root.style.setProperty("--color-accent-2", "var(--color-c-300)");
    } else {
      root.style.setProperty("--color-accent", "var(--color-c-600)");
      root.style.setProperty("--color-accent-2", "var(--color-c-500)");
    }
  }, [base, accent]);

  function setBaseAndNotify(v: Base) {
    setBase(v);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { base: v } }, "*");
  }
  function setAccentAndNotify(v: Accent) {
    setAccent(v);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { accent: v } }, "*");
  }

  if (!active) return null;

  return (
    <div
      className="fixed bottom-5 right-5 z-[100] bg-white border border-line-strong rounded-[14px] px-[18px] py-4 min-w-[280px] text-[13px]"
      style={{
        backdropFilter: "blur(20px)",
        boxShadow: "0 30px 60px -15px rgba(10,19,48,0.25)",
      }}
    >
      <h4 className="font-mono text-[11px] uppercase tracking-[.12em] text-muted-2 font-medium m-0 mb-3.5">
        Tweaks
      </h4>

      <div className="flex justify-between items-center py-2 gap-4">
        <span className="text-muted text-[12.5px]">Base cream</span>
        <div className="flex gap-1 bg-bg-mist p-[3px] rounded-lg">
          {(["warm", "cool", "neutral"] as Base[]).map((v) => (
            <button
              key={v}
              onClick={() => setBaseAndNotify(v)}
              className={`border-0 text-[11.5px] px-2.5 py-[5px] rounded-md cursor-pointer font-sans ${
                v === base
                  ? "bg-white text-ink shadow-[0_1px_3px_rgba(10,19,48,0.1)]"
                  : "bg-transparent text-muted"
              }`}
            >
              {v === "warm" ? "Warm" : v === "cool" ? "Cool" : "Neutral"}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center py-2 gap-4">
        <span className="text-muted text-[12.5px]">Acento</span>
        <div className="flex gap-1 bg-bg-mist p-[3px] rounded-lg">
          {(["deep", "bright"] as Accent[]).map((v) => (
            <button
              key={v}
              onClick={() => setAccentAndNotify(v)}
              className={`border-0 text-[11.5px] px-2.5 py-[5px] rounded-md cursor-pointer font-sans ${
                v === accent
                  ? "bg-white text-ink shadow-[0_1px_3px_rgba(10,19,48,0.1)]"
                  : "bg-transparent text-muted"
              }`}
            >
              {v === "deep" ? "Azul profundo" : "Azul claro"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
