"use client";

import { useEffect, useSyncExternalStore, useState } from "react";

function getBombayTime(): string {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
    return formatter.format(now).toLowerCase();
}

const subscribe = () => () => { };

function useIsMounted() {
    return useSyncExternalStore(
        subscribe,
        () => true,
        () => false
    );
}

export default function LiveClock() {
    const mounted = useIsMounted();
    const [time, setTime] = useState(getBombayTime);

    useEffect(() => {
        const interval = setInterval(() => setTime(getBombayTime()), 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null;

    return (
        <span className="text-foreground/50 text-sm">
            {time} • bombay, in
        </span>
    );
}
