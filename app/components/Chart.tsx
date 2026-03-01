"use client";

import { useEffect, useState } from "react";
import { Liveline } from "liveline";
import type { LivelinePoint, ThemeMode } from "liveline";

const CHART_ACCENT_COLOR = "#FF8C32";
const TARGET_VALUE = 10000;
const MAX_DATA_POINTS = 1000;
const WINDOW_SECONDS = 10;
const UPDATE_INTERVAL_MS = 100;

function createInitialPoints(now: number, targetValue: number): LivelinePoint[] {
  const points: LivelinePoint[] = [];
  let value = targetValue;

  for (let i = 100; i >= 1; i -= 1) {
    const swing = (Math.random() - 0.5) * targetValue * 0.0014;
    const pull = (targetValue - value) * 0.25;
    value += swing + pull;
    points.push({ time: now - i * 0.1, value: Number(value.toFixed(2)) });
  }

  return points;
}

function computeNextValue(currentValue: number, targetValue: number, timeSec: number): number {
  const pull = (targetValue - currentValue) * 0.165;
  const swing = (Math.random() - 0.5) * targetValue * 0.0011;
  const burst = Math.random() < 0.031 ? (Math.random() - 0.5) * targetValue * 0.0059 : 0;
  const wave = Math.sin(timeSec * 1.8) * targetValue * 0.00014;

  const rawNext = currentValue + pull + swing + burst + wave;
  const min = targetValue * 0.94;
  const max = targetValue * 1.06;
  return Number(Math.min(max, Math.max(min, rawNext)).toFixed(2));
}

export default function Chart() {
  const [series, setSeries] = useState<{ data: LivelinePoint[]; value: number }>(() => {
    const now = Date.now() / 1000;
    const data = createInitialPoints(now, TARGET_VALUE);
    return {
      data,
      value: data[data.length - 1]?.value ?? TARGET_VALUE,
    };
  });
  const [theme, setTheme] = useState<ThemeMode>(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
      ? "dark"
      : "light",
  );
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = Date.now() / 1000;
      setSeries((prev) => {
        const nextValue = computeNextValue(prev.value, TARGET_VALUE, time);
        const next = [...prev.data, { time, value: nextValue }];
        if (next.length > MAX_DATA_POINTS) next.shift();
        return { data: next, value: nextValue };
      });
    }, UPDATE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-54 w-full overflow-hidden rounded-lg border border-current/10">
      <Liveline
        data={series.data}
        value={series.value}
        window={WINDOW_SECONDS}
        theme={theme}
        color={CHART_ACCENT_COLOR}
        padding={{ top: 10, right: 80, bottom: 28, left: 12 }}
        lerpSpeed={0.02}
        degen={{ scale: 0.625 }}
        valueMomentumColor
        formatValue={(v) =>
          `$${v.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`
        }
      />
    </div>
  );
}
