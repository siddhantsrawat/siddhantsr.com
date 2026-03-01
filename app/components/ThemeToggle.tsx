"use client";

import { useEffect, useSyncExternalStore, useState, useRef, useCallback } from "react";

const subscribe = () => () => { };

function useIsMounted() {
    return useSyncExternalStore(
        subscribe,
        () => true,
        () => false
    );
}

function getSavedThemeIsDark(): boolean {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
}

export default function ThemeToggle() {
    const mounted = useIsMounted();
    const [isDark, setIsDark] = useState(getSavedThemeIsDark);
    const [isAnimating, setIsAnimating] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark]);

    const applyTheme = useCallback((dark: boolean) => {
        setIsDark(dark);
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, []);

    const toggleTheme = useCallback(async () => {
        const button = buttonRef.current;
        if (!button || isAnimating) return;

        const newIsDark = !isDark;

        if (!document.startViewTransition) {
            applyTheme(newIsDark);
            return;
        }

        const rect = button.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        const maxRadius = Math.max(
            Math.hypot(x, y),
            Math.hypot(window.innerWidth - x, y),
            Math.hypot(x, window.innerHeight - y),
            Math.hypot(window.innerWidth - x, window.innerHeight - y)
        );

        document.documentElement.style.setProperty("--toggle-x", `${x}px`);
        document.documentElement.style.setProperty("--toggle-y", `${y}px`);
        document.documentElement.style.setProperty("--toggle-radius", `${maxRadius}px`);

        setIsAnimating(true);

        const transition = document.startViewTransition(() => {
            applyTheme(newIsDark);
        });

        await transition.finished;
        setIsAnimating(false);
    }, [isDark, isAnimating, applyTheme]);

    if (!mounted) {
        return <span className="text-sm text-foreground/50">theme</span>;
    }

    return (
        <button
            ref={buttonRef}
            onClick={toggleTheme}
            className="text-sm underline underline-offset-2 hover:text-[#FF8C32] transition-colors cursor-pointer"
        >
            {isDark ? "light" : "dark"}
        </button>
    );
}
