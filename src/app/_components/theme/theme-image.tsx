"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import style from "./theme-image.module.css";

type Props = {
  light: string;
  dark: string;
  alt: string;
  x: number,
  y: number,
}

export default function ThemedImage({ light, dark, x, y, alt }: Props) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return <div className={style.skeleton}>?</div>; 

  // Get the actual theme (fallback to system preference)
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Image
      key={currentTheme}
      src={currentTheme === "dark" ? dark : light}
      alt={alt}
      width={x}
      height={y}
      priority
    />
  );
}
