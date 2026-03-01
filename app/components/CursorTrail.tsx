"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorTrail() {
    const dotRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect touch/mobile devices
        const checkMobile = () => {
            setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);

        const dot = dotRef.current;
        if (!dot) return;

        let mouseX = -40;
        let mouseY = -40;
        let dotX = -40;
        let dotY = -40;
        let visible = false;
        let animationId: number;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!visible) {
                visible = true;
                dot.style.opacity = "0.5";
            }
        };

        const onMouseLeave = () => {
            visible = false;
            dot.style.opacity = "0";
        };

        window.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseleave", onMouseLeave);

        const animate = () => {
            dotX += (mouseX - dotX) * 0.15;
            dotY += (mouseY - dotY) * 0.15;
            dot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", checkMobile);
            window.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    if (isMobile) return null;

    return (
        <div
            ref={dotRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#FF8C32",
                opacity: 0,
                pointerEvents: "none",
                zIndex: 9998,
                transition: "opacity 0.3s ease",
            }}
        />
    );
}
