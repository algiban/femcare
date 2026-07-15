"use client";

import { useEffect } from "react";

export function ThemeToggle() {
  useEffect(() => {
    const saved = localStorage.getItem("arkha-theme");
    const preferred = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
    document.documentElement.dataset.theme =
      saved === "light" || saved === "dark" ? saved : preferred;
  }, []);

  function toggleTheme() {
    const current = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const nextTheme = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("arkha-theme", nextTheme);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Ganti tema terang atau gelap"
      title="Ganti tema"
    >
      <span aria-hidden="true">◐</span>
    </button>
  );
}
