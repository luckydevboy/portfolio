"use client";

import { useEffect, useRef, useState } from "react";

const NAME = "Mohammad Reza Ghasemi";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const rootRef = useRef<HTMLDivElement>(null);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const els = Array.from(
      root.querySelectorAll("[data-reveal]")
    ) as HTMLElement[];
    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    els.forEach((el, i) => {
      el.style.transitionDelay = Math.min(i * 70, 280) + "ms";
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const mono = "var(--font-mono), 'JetBrains Mono', monospace";
  const sans =
    "var(--font-manrope), 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  return (
    <div
      ref={rootRef}
      data-theme={theme}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--bg)",
        backgroundImage:
          "radial-gradient(var(--dot) 1.4px, transparent 1.6px)",
        backgroundSize: "24px 24px",
        color: "var(--text)",
        fontFamily: sans,
        WebkitFontSmoothing: "antialiased",
        transition: "background-color 0.4s ease, color 0.4s ease",
      }}
    >
      {/* ── NAV ── */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "saturate(140%) blur(12px)",
          background: "color-mix(in srgb, var(--bg) 78%, transparent)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "0 28px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              fontSize: 16,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 26,
                height: 26,
                borderRadius: 7,
                background: "var(--accent)",
                color: "var(--bg)",
                fontFamily: mono,
                fontWeight: 700,
                fontSize: 13,
              }}
            >
              MG
            </span>
            <span
              style={{
                color: "var(--text-dim)",
                fontFamily: mono,
                fontWeight: 500,
                fontSize: 13,
              }}
            >
              Mohammad&nbsp;Reza
            </span>
          </span>

          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="theme-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              height: 36,
              padding: "0 12px",
              borderRadius: 9,
              border: "1px solid var(--border)",
              background: "var(--bg-elev)",
              color: "var(--text-dim)",
              cursor: "pointer",
              fontFamily: mono,
              fontSize: 12,
            }}
          >
            {theme === "dark" ? (
              <>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="4.2" />
                  <line x1="12" y1="2.5" x2="12" y2="5" />
                  <line x1="12" y1="19" x2="12" y2="21.5" />
                  <line x1="2.5" y1="12" x2="5" y2="12" />
                  <line x1="19" y1="12" x2="21.5" y2="12" />
                  <line x1="5.2" y1="5.2" x2="7" y2="7" />
                  <line x1="17" y1="17" x2="18.8" y2="18.8" />
                  <line x1="5.2" y1="18.8" x2="7" y2="17" />
                  <line x1="17" y1="7" x2="18.8" y2="5.2" />
                </svg>
                <span>LIGHT</span>
              </>
            ) : (
              <>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
                </svg>
                <span>DARK</span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* ── CONTENT ── */}
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 1080,
          margin: "0 auto",
          padding: "clamp(60px,12vh,120px) 28px",
          width: "100%",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <div
            data-reveal=""
            style={{
              fontFamily: mono,
              fontSize: 13,
              color: "var(--accent)",
              marginBottom: 18,
            }}
          >
            {"// WORK_IN_PROGRESS"}
          </div>

          <h1
            data-reveal=""
            style={{
              margin: 0,
              fontSize: "clamp(36px,6vw,58px)",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              fontWeight: 800,
            }}
          >
            Under <span style={{ color: "var(--accent)" }}>Development</span>
          </h1>

          <p
            data-reveal=""
            style={{
              margin: "22px auto 0",
              fontSize: 17,
              lineHeight: 1.7,
              color: "var(--text-dim)",
              maxWidth: 480,
            }}
          >
            This page is still being built. Check back soon — I&apos;m
            working on bringing it to life.
          </p>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid var(--border)" }}>
        <div
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            padding: "26px 28px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
            fontFamily: mono,
            fontSize: 12,
            color: "var(--text-faint)",
          }}
        >
          <span>
            © {new Date().getFullYear()} {NAME} — built with React &amp;
            Next.js
          </span>
        </div>
      </footer>
    </div>
  );
}
