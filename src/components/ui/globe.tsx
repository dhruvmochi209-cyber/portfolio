"use client";
import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useTheme } from "next-themes";

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.3,
      dark: theme === "dark" ? 1 : 0,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: theme === "dark" ? [0.3, 0.3, 0.3] : [1, 1, 1],
      markerColor: [0.1, 0.5, 1], // Blue marker
      glowColor: theme === "dark" ? [0.2, 0.2, 0.2] : [1, 1, 1],
      markers: [
        { location: [23.0225, 72.5714], size: 0.1 } // Ahmedabad
      ],
      // @ts-ignore: onRender is not defined in the COBEOptions type but is supported by the library
      onRender: (state: any) => {
        state.phi = phi;
        phi += 0.003;
      },
    } as any);

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = '1';
      }
    }, 100);

    return () => {
      globe.destroy();
    };
  }, [theme]);

  return (
    <div className={className} style={{ width: '100%', maxWidth: 600, aspectRatio: 1, margin: "auto", position: 'relative' }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          contain: 'layout paint size',
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
}
